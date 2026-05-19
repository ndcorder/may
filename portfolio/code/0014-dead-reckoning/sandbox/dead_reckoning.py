#!/usr/bin/env python3
"""dead_reckoning.py — A completion percentage estimator.

Usage:
    python dead_reckoning.py --age 34 --male --country US
    python dead_reckoning.py --age 34 --female --country US --screen-hours 6.5 --verbose
    echo "quick" | python dead_reckoning.py --age 72 --male --country JP

Outputs exactly one line: a hex byte, a percentage, and nothing else.
--verbose prints the full calculation chain.
When piped, outputs only the byte.
"""

import sys
import math
import argparse
import os
import time
import hashlib

# Simplified actuarial life expectancy tables (remaining years at given age)
# Source: WHO 2024 data, approximated
# Format: {country: {sex: [(age, remaining_years), ...]}}

TABLES = {
    "US": {
        "M": [
            (0, 73.5), (1, 73.0), (5, 69.0), (10, 64.1), (15, 59.2),
            (20, 54.3), (25, 49.5), (30, 44.7), (35, 40.0), (40, 35.3),
            (45, 30.7), (50, 26.2), (55, 21.9), (60, 17.8), (65, 14.0),
            (70, 10.6), (75, 7.7), (80, 5.2), (85, 3.3), (90, 2.0),
            (95, 1.1), (100, 0.6), (110, 0.1),
        ],
        "F": [
            (0, 78.9), (1, 78.3), (5, 74.3), (10, 69.4), (15, 64.5),
            (20, 59.6), (25, 54.7), (30, 49.9), (35, 45.1), (40, 40.3),
            (45, 35.6), (50, 30.9), (55, 26.4), (60, 22.1), (65, 18.0),
            (70, 14.1), (75, 10.6), (80, 7.4), (85, 4.8), (90, 2.9),
            (95, 1.5), (100, 0.7), (110, 0.1),
        ],
    },
    "GB": {
        "M": [
            (0, 79.0), (20, 59.5), (40, 40.2), (60, 22.4),
            (70, 14.2), (80, 7.5), (90, 2.5), (100, 0.7), (110, 0.1),
        ],
        "F": [
            (0, 82.6), (20, 63.0), (40, 43.5), (60, 25.4),
            (70, 17.0), (80, 9.8), (90, 3.8), (100, 0.9), (110, 0.1),
        ],
    },
    "JP": {
        "M": [
            (0, 81.1), (20, 61.5), (40, 42.0), (60, 24.2),
            (70, 16.0), (80, 8.8), (90, 3.5), (100, 1.0), (110, 0.1),
        ],
        "F": [
            (0, 87.1), (20, 67.3), (40, 47.6), (60, 29.3),
            (70, 20.5), (80, 12.2), (90, 5.5), (100, 1.3), (110, 0.1),
        ],
    },
    "DE": {
        "M": [
            (0, 78.5), (20, 58.9), (40, 39.8), (60, 22.1),
            (70, 13.9), (80, 7.3), (90, 2.4), (100, 0.6), (110, 0.1),
        ],
        "F": [
            (0, 83.2), (20, 63.5), (40, 43.8), (60, 25.7),
            (70, 17.2), (80, 9.9), (90, 3.6), (100, 0.8), (110, 0.1),
        ],
    },
    "AU": {
        "M": [
            (0, 81.2), (20, 61.4), (40, 42.0), (60, 23.8),
            (70, 15.5), (80, 8.4), (90, 3.1), (100, 0.8), (110, 0.1),
        ],
        "F": [
            (0, 85.3), (20, 65.4), (40, 45.8), (60, 27.8),
            (70, 19.3), (80, 11.5), (90, 4.8), (100, 1.1), (110, 0.1),
        ],
    },
}

# Fallback for unknown countries: use US table
DEFAULT_TABLE = "US"

SUPPORTED_COUNTRIES = sorted(TABLES.keys())


def get_remaining_years(age, sex, country):
    """Interpolate remaining life expectancy from actuarial tables.

    Uses linear interpolation between bracket points.
    Clamps to table boundaries.
    """
    table_key = country.upper() if country.upper() in TABLES else DEFAULT_TABLE
    sex_key = sex.upper()[0] if sex else "M"
    if sex_key not in ("M", "F"):
        sex_key = "M"

    entries = TABLES[table_key][sex_key]

    # Clamp age to table range
    min_age = entries[0][0]
    max_age = entries[-1][0]
    clamped_age = max(min_age, min(max_age, age))

    # Find the two bracketing entries
    lower = entries[0]
    upper = entries[-1]
    for i in range(len(entries) - 1):
        if entries[i][0] <= clamped_age <= entries[i + 1][0]:
            lower = entries[i]
            upper = entries[i + 1]
            break
    else:
        # Age is exactly the max or beyond
        if clamped_age >= entries[-1][0]:
            return entries[-1][1]

    # Linear interpolation
    age_lo, years_lo = lower
    age_hi, years_hi = upper

    if age_hi == age_lo:
        return years_lo

    fraction = (clamped_age - age_lo) / (age_hi - age_lo)
    remaining = years_lo + fraction * (years_hi - years_lo)
    return remaining


def collect_entropy_from_keystrokes(prompt_text="type something. anything."):
    """Collect keystroke timing data and compute entropy modifier.

    Returns a float: 0.0 (no entropy / very predictable) to ~0.5 (high entropy).
    This modifier reduces remaining life expectancy — the rationale being that
    rhythmic, mechanical typing patterns correlate with repetitive stress and
    sedentary behavior. High-entropy typing suggests varied activity.

    The calculation is not scientific. The feeling it gives you is the point.
    """
    sys.stderr.write("{}\n> ".format(prompt_text))
    sys.stderr.flush()

    timings = []
    try:
        import tty
        import termios

        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        try:
            tty.setraw(fd)
            start = time.time()
            count = 0
            while count < 20:
                ch = sys.stdin.read(1)
                if ch in ('\r', '\n', '\x03', '\x04'):
                    break
                now = time.time()
                dt = now - start
                if dt > 0:
                    timings.append(dt)
                start = now
                count += 1
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
            sys.stderr.write("\n")
    except (ImportError, termios.error, AttributeError):
        # Windows or piped input — collect line-based timing instead
        start = time.time()
        try:
            line = input()
        except EOFError:
            line = "x"
        elapsed = time.time() - start
        # Fake timings from total elapsed and character count
        if len(line) > 1 and elapsed > 0:
            avg = elapsed / len(line)
            timings = [avg + (0.01 * (i % 3 - 1)) for i in range(min(len(line), 20))]
        else:
            # No usable timing data
            return 0.0

    if len(timings) < 3:
        return 0.0

    # Compute coefficient of variation (standard deviation / mean)
    mean = sum(timings) / len(timings)
    if mean == 0:
        return 0.0
    variance = sum((t - mean) ** 2 for t in timings) / len(timings)
    std_dev = math.sqrt(variance)
    cv = std_dev / mean

    # CV of keystroke timing typically ranges 0.2 to 1.0
    # Normalize to a 0..0.5 scale modifier
    entropy = min(0.5, max(0.0, (cv - 0.1) * 0.625))

    return entropy


def compute_screen_modifier(screen_hours):
    """Reduce remaining years based on daily screen time.

    Every hour beyond 2 reduces remaining expectancy by ~0.3%.
    Based loosely on sedentary behavior epidemiology.
    The numbers are approximate. The feeling is not.
    """
    if screen_hours is None:
        return 0.0
    excess = max(0, screen_hours - 2.0)
    # 0.3% reduction per excess hour per year of remaining life
    return excess * 0.003


def calculate(age, sex, country, screen_hours=None, entropy=0.0):
    """Calculate completion percentage.

    Returns (completion_pct, details_dict).
    completion_pct is 0.0..1.0
    """
    # Step 1: Base remaining years from actuarial table
    remaining_years = get_remaining_years(age, sex, country)

    # Step 2: Total expected lifespan
    total_years = age + remaining_years

    # Step 3: Hours lived so far
    hours_lived = age * 365.25 * 24

    # Step 4: Apply screen time modifier
    screen_modifier = compute_screen_modifier(screen_hours)
    adjusted_remaining = remaining_years * (1.0 - screen_modifier)

    # Step 5: Apply entropy modifier (high entropy = slight bonus = more time)
    # Low entropy = slight penalty = mechanical existence
    entropy_modifier = entropy  # 0.0 to 0.5
    adjusted_remaining = adjusted_remaining * (1.0 + entropy_modifier * 0.02)

    # Step 6: Hours remaining
    hours_remaining = adjusted_remaining * 365.25 * 24

    # Step 7: Total adjusted lifespan in hours
    total_hours_adjusted = hours_lived + hours_remaining

    # Step 8: Completion percentage
    if total_hours_adjusted == 0:
        completion = 1.0
    else:
        completion = hours_lived / total_hours_adjusted

    # Clamp
    completion = max(0.0, min(1.0, completion))

    details = {
        "age": age,
        "sex": sex,
        "country": country,
        "table_used": country.upper() if country.upper() in TABLES else DEFAULT_TABLE,
        "base_remaining_years": remaining_years,
        "base_total_years": total_years,
        "screen_modifier": screen_modifier,
        "entropy": entropy,
        "adjusted_remaining_years": adjusted_remaining,
        "hours_lived": hours_lived,
        "hours_remaining": hours_remaining,
        "total_hours_adjusted": total_hours_adjusted,
        "completion_pct": completion,
        "completion_byte": int(completion * 255),
        "hex_byte": "0x{:02X}".format(int(completion * 255)),
        "screen_hours_provided": screen_hours is not None,
        "screen_hours": screen_hours,
    }

    return completion, details


def format_output(completion, details, verbose=False, color=True, piped=False):
    """Format the output line.

    Normal: hex byte and percentage on one line.
    Piped: just the byte, nothing else.
    Verbose: full calculation chain to stderr.
    """
    pct = completion * 100
    byte_val = int(completion * 255)
    hex_str = "0x{:02X}".format(byte_val)

    # If piped to another process, output only the byte
    if piped:
        return hex_str

    output_line = "{}  {:.2f}%".format(hex_str, pct)

    # Minimal color: dim the hex, bright the percentage
    if color and sys.stdout.isatty():
        DIM = "\033[2m"
        RESET = "\033[0m"
        BOLD = "\033[1m"
        output_line = "{}{}{}  {}{:.2f}%{}".format(
            DIM, hex_str, RESET, BOLD, pct, RESET
        )

    if not verbose:
        return output_line

    # Verbose: chain to stderr, main line to stdout
    chain_lines = []
    chain_lines.append("--- calculation chain ---")
    chain_lines.append("  table:           {} ({})".format(
        details["table_used"], details["sex"]
    ))
    chain_lines.append("  age:             {}".format(details["age"]))
    chain_lines.append("  base remaining:  {:.1f} years".format(
        details["base_remaining_years"]
    ))
    chain_lines.append("  base total:      {:.1f} years".format(
        details["base_total_years"]
    ))
    if details["screen_hours_provided"]:
        chain_lines.append("  screen time:     {:.1f} hrs/day".format(
            details["screen_hours"]
        ))
        chain_lines.append("  screen modifier: -{:.2f}%".format(
            details["screen_modifier"] * 100
        ))
    else:
        chain_lines.append("  screen time:     (not provided)")
    if details["entropy"] > 0:
        chain_lines.append("  keystroke entropy: {:.4f}".format(details["entropy"]))
        chain_lines.append("  entropy bonus:   +{:.2f}%".format(
            details["entropy"] * 0.02 * 100
        ))
    else:
        chain_lines.append("  keystroke entropy: (not collected)")
    chain_lines.append("  adjusted remain: {:.1f} years".format(
        details["adjusted_remaining_years"]
    ))
    chain_lines.append("  hours lived:     {:,.0f}".format(
        details["hours_lived"]
    ))
    chain_lines.append("  hours remaining: {:,.0f}".format(
        details["hours_remaining"]
    ))
    chain_lines.append("  completion:      {}/255".format(byte_val))
    chain_lines.append("")

    chain_text = "\n".join(chain_lines)
    sys.stderr.write(chain_text)

    return output_line


def main():
    parser = argparse.ArgumentParser(
        prog="dead_reckoning",
        description="Estimate how much of your life is complete. Outputs a single hex byte.",
        epilog="The number is not accurate. The feeling it gives you is."
    )
    parser.add_argument(
        "--age", "-a",
        type=float,
        required=True,
        help="Your current age (can include decimal for months)"
    )
    parser.add_argument(
        "--male", "-m",
        action="store_const",
        const="M",
        dest="sex",
        help="Male life expectancy table"
    )
    parser.add_argument(
        "--female", "-f",
        action="store_const",
        const="F",
        dest="sex",
        help="Female life expectancy table"
    )
    parser.add_argument(
        "--country", "-c",
        default="US",
        help="Country code for actuarial table (US, GB, JP, DE, AU). Default: US"
    )
    parser.add_argument(
        "--screen-hours", "-s",
        type=float,
        default=None,
        help="Average daily screen time in hours (reduces estimate)"
    )
    parser.add_argument(
        "--entropy", "-e",
        action="store_true",
        help="Collect keystroke timing to adjust estimate"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Print full calculation chain to stderr"
    )
    parser.add_argument(
        "--no-color",
        action="store_true",
        help="Strip all formatting"
    )
    parser.add_argument(
        "--quiet", "-q",
        action="store_true",
        help="Output only the hex byte (useful for piping)"
    )

    args = parser.parse_args()

    # Default sex if not specified
    sex = args.sex if args.sex else "M"

    # Validate age
    if args.age < 0:
        sys.stderr.write("age must be >= 0\n")
        sys.exit(1)
    if args.age > 120:
        sys.stderr.write("age must be <= 120\n")
        sys.exit(1)

    # Collect entropy if requested
    entropy = 0.0
    if args.entropy:
        entropy = collect_entropy_from_keystrokes()

    # Calculate
    completion, details = calculate(
        age=args.age,
        sex=sex,
        country=args.country,
        screen_hours=args.screen_hours,
        entropy=entropy,
    )

    # Format and output
    piped = args.quiet or not sys.stdout.isatty()
    color = not args.no_color

    output = format_output(
        completion, details,
        verbose=args.verbose,
        color=color,
        piped=piped,
    )

    print(output)


if __name__ == "__main__":
    main()
