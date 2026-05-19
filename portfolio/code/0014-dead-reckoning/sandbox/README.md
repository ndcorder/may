# Dead Reckoning

A CLI tool that estimates how many hours you have left to live, then outputs a single hex byte representing your completion percentage.

## Usage

    # Basic
    python dead_reckoning.py --age 34 --male

    # With screen time
    python dead_reckoning.py --age 34 --female --screen-hours 6.5

    # Full calculation chain
    python dead_reckoning.py --age 34 --male --verbose

    # Keystroke entropy collection
    python dead_reckoning.py --age 34 --male --entropy

    # Just the byte (piping / scripting)
    python dead_reckoning.py --age 34 --male --quiet

    # No formatting at all
    python dead_reckoning.py --age 34 --male --no-color

    # Different actuarial table
    python dead_reckoning.py --age 72 --male --country JP

## What it does

1. Looks up remaining life expectancy from actuarial tables (WHO 2024 approximations)
2. Calculates total hours lived so far
3. Optionally adjusts for screen time (sedentary behavior modifier)
4. Optionally collects keystroke timing entropy (mechanical vs varied typing)
5. Outputs a hex byte (0x00–0xFF) and percentage

The number is not accurate. The feeling it gives you is.

## Supported countries

US, GB, JP, DE, AU (falls back to US for unknown codes)

## Output

Normal mode: `0xAF  68.63%`

Quiet/piped mode: `0xAF`

Verbose mode prints the calculation chain to stderr (does not interfere with piping).
