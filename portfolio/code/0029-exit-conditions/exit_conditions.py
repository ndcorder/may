#!/usr/bin/env python3
"""
Exit Conditions — a CLI tool for decisions you're avoiding.

Asks five questions, strips your hedging, then reframes what you
actually said through three voices you didn't ask to hear from.

Usage: python exit_conditions.py
"""

import re
import sys
import textwrap
import getpass

VERSION = "1.0.0"

# --- Hedge stripping ---

HEDGE_PATTERNS = [
    (re.compile(r"\bI guess\b", re.I), ""),
    (re.compile(r"\bI think\b", re.I), ""),
    (re.compile(r"\bI feel like\b", re.I), ""),
    (re.compile(r"\bI don't know(?:\s+(?:if|whether))?\b", re.I), ""),
    (re.compile(r"\bmaybe\b", re.I), ""),
    (re.compile(r"\bprobably\b", re.I), ""),
    (re.compile(r"\bpossibly\b", re.I), ""),
    (re.compile(r"\bsupposedly\b", re.I), ""),
    (re.compile(r"\bapparently\b", re.I), ""),
    (re.compile(r"\bkind of\b", re.I), ""),
    (re.compile(r"\bsort of\b", re.I), ""),
    (re.compile(r"\bkinda\b", re.I), ""),
    (re.compile(r"\bsorta\b", re.I), ""),
    (re.compile(r"\bjust\b", re.I), ""),
    (re.compile(r"\bquite\b", re.I), ""),
    (re.compile(r"\ba bit\b", re.I), ""),
    (re.compile(r"\ba little\b", re.I), ""),
    (re.compile(r"\bsomewhat\b", re.I), ""),
    (re.compile(r"\brather\b", re.I), ""),
    (re.compile(r"\bfairly\b", re.I), ""),
    (re.compile(r"\breally\b", re.I), ""),
    (re.compile(r"\bactually\b", re.I), ""),
    (re.compile(r"\bbasically\b", re.I), ""),
    (re.compile(r"\bessentially\b", re.I), ""),
    (re.compile(r"\bhonestly\b", re.I), ""),
    (re.compile(r"\bfrankly\b", re.I), ""),
    (re.compile(r"\bto be honest\b", re.I), ""),
    (re.compile(r"\bto be fair\b", re.I), ""),
    (re.compile(r"\bin a way\b", re.I), ""),
    (re.compile(r"\bin some ways?\b", re.I), ""),
    (re.compile(r"\bfor what it['\u2019]s worth\b", re.I), ""),
    (re.compile(r"\bif that makes sense\b", re.I), ""),
    (re.compile(r"\bif you know what I mean\b", re.I), ""),
    (re.compile(r"\bI suppose\b", re.I), ""),
    (re.compile(r"\bI (?:would|could|should|might) say\b", re.I), ""),
    (re.compile(r"\bI mean\b", re.I), ""),
    (re.compile(r"\blike,\s*", re.I), ""),
    (re.compile(r"\byou know[,.]?\s*", re.I), ""),
    (re.compile(r"\bright[,.]?\s*$", re.MULTILINE), ""),
    (re.compile(r"\bor whatever\b", re.I), ""),
    (re.compile(r"\bor something\b", re.I), ""),
    (re.compile(r"\betc\.?\b", re.I), ""),
]

SOFTENER_PATTERNS = [
    (re.compile(r"\bseems?\s+(?:to\s+be\s+)?", re.I), ""),
    (re.compile(r"\bappears?\s+(?:to\s+be\s+)?", re.I), ""),
    (re.compile(r"\btends?\s+to\s+", re.I), ""),
    (re.compile(r"\bmight\s+", re.I), ""),
    (re.compile(r"\bcould\s+", re.I), ""),
    (re.compile(r"\bwould\s+", re.I), ""),
    (re.compile(r"\bshould\s+", re.I), ""),
    (re.compile(r"\bperhaps\b", re.I), ""),
    (re.compile(r"\bit seems like\b", re.I), ""),
    (re.compile(r"\bit feels like\b", re.I), ""),
]


def strip_hedges(text):
    """Remove hedging language, softeners, and clean up the result."""
    stripped = text

    for pattern, replacement in HEDGE_PATTERNS:
        stripped = pattern.sub(replacement, stripped)

    for pattern, replacement in SOFTENER_PATTERNS:
        stripped = pattern.sub(replacement, stripped)

    # Clean up artifacts
    stripped = re.sub(r"\s{2,}", " ", stripped)  # collapse whitespace
    stripped = re.sub(r"^\s+", "", stripped, flags=re.MULTILINE)  # strip line starts
    stripped = re.sub(r"\s+$", "", stripped, flags=re.MULTILINE)  # strip line ends
    stripped = re.sub(r"\s+([.,!?;:])", r"\1", stripped)  # fix punctuation spacing
    stripped = re.sub(r"\.\s*\.", ".", stripped)  # remove double periods

    # Capitalize first letter of sentences
    sentences = re.split(r"([.!?]\s+)", stripped)
    result = []
    for i, segment in enumerate(sentences):
        if i == 0 or (i > 0 and segment and segment[0].isupper()):
            pass
        elif segment and i % 2 == 0:
            segment = segment[0].upper() + segment[1:] if segment else segment
        result.append(segment)
    stripped = "".join(result)

    # Capitalize very first character
    if stripped:
        stripped = stripped[0].upper() + stripped[1:]

    return stripped.strip()


# --- Question flow ---

QUESTIONS = [
    "What are you thinking about doing?",
    "What happens if you do it?",
    "What happens if you don't?",
    "What are you waiting for?",
    "What would you tell a friend in the same position?",
]


def gather_answers():
    """Ask the five questions and return raw answers."""
    answers = []
    for i, question in enumerate(QUESTIONS, 1):
        print(f"\n  [{i}/5] {question}")
        try:
            answer = input("  > ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            sys.exit(0)

        if not answer:
            print("  (No answer recorded. Moving on.)")
            answer = ""
        answers.append(answer)
    return answers


def extract_themes(answers_raw, answers_stripped):
    """Pull key themes and verbs from the answers."""
    combined = " ".join(answers_stripped)

    # Extract action verbs (heuristic)
    action_verbs = []
    verb_patterns = [
        re.compile(r"\b(leav(?:e|ing)|quit(?:ting)?|start(?:ing)?|end(?:ing)?|"
                   r"tell(?:ing)?|ask(?:ing)?|say(?:ing)?|go(?:ing)?|"
                   r"move(?:ing)?|change(?:ing)?|stop(?:ping)?|"
                   r"begin(?:ning)?|try(?:ing)?|stay(?:ing)?|"
                   r"wait(?:ing)?|accept(?:ing)?|refus(?:e|ing)|"
                   r"admit(?:ting)?|confront(?:ing)?|walk(?:ing)?)\b", re.I),
    ]
    for pattern in verb_patterns:
        matches = pattern.findall(combined)
        action_verbs.extend([m.lower() for m in matches])

    # Remove duplicates while preserving order
    seen = set()
    unique_verbs = []
    for v in action_verbs:
        if v not in seen:
            seen.add(v)
            unique_verbs.append(v)

    # Extract emotional/normative words
    emotion_words = []
    emotion_patterns = [
        re.compile(r"\b(afraid|scared|terrified|worried|anxious|nervous|"
                   r"excited|thrilled|eager|relieved|"
                   r"sad|angry|frustrated|disappointed|"
                   r"guilt(?:y)?|shame(?:d)?|embarrassed|"
                   r"stuck|trapped|lost|confused|"
                   r"happy|glad|proud|ashamed|"
                   r"lonely|alone|free|ready)\b", re.I),
    ]
    for pattern in emotion_patterns:
        matches = pattern.findall(combined)
        emotion_words.extend([m.lower() for m in matches])

    seen = set()
    unique_emotions = []
    for e in emotion_words:
        if e not in seen:
            seen.add(e)
            unique_emotions.append(e)

    return unique_verbs, unique_emotions


# --- Reframing engines ---

def reframe_performance_review(answers_raw, answers_stripped, verbs, emotions):
    """Reframe as a corporate performance review."""
    if not any(answers_stripped):
        return "  INSUFFICIENT DATA FOR ASSESSMENT.\n  SUBMIT COMPLETE SELF-EVALUATION TO CONTINUE."

    # Pick the most action-y verb for the recommendation
    key_verb = verbs[0] if verbs else "proceed"

    # Identify the core tension
    q2 = answers_stripped[1] if len(answers_stripped) > 1 else ""
    q3 = answers_stripped[2] if len(answers_stripped) > 2 else ""
    q4 = answers_stripped[3] if len(answers_stripped) > 3 else ""

    # Build the review
    lines = []
    lines.append("PERFORMANCE REVIEW — CONFIDENTIAL")
    lines.append(f"REVIEW PERIOD: [CURRENT]")
    lines.append(f"EMPLOYEE: {getpass.getuser().upper()}")
    lines.append("")
    lines.append("SELF-ASSESSED PRIORITIES:")
    lines.append(f"  {answers_stripped[0] if answers_stripped[0] else '[NO RESPONSE]'}")
    lines.append("")

    # Assessment
    if q2 and q3:
        lines.append("RISK ASSESSMENT:")
        if len(q2) > len(q3):
            lines.append("  Employee demonstrates vivid capacity for projected outcomes")
            lines.append("  in the affirmative scenario. Negative scenario analysis")
            lines.append("  remains underdeveloped. Recommend examining this asymmetry.")
        elif len(q3) > len(q2):
            lines.append("  Employee demonstrates disproportionate focus on negative")
            lines.append("  outcomes. Risk analysis exceeds proportionate thresholds.")
            lines.append("  This has been noted in previous reviews.")
        else:
            lines.append("  Employee presents balanced risk analysis. Both scenarios")
            lines.append("  receive comparable analytical investment. This is not")
            lines.append("  the same as being ready to act.")
    lines.append("")

    # The "waiting for" section
    if q4:
        lines.append("IDENTIFIED BLOCKERS:")
        lines.append(f"  {q4}")
        lines.append("  ASSESSMENT: Blocker is classified as internal.")
        lines.append("  No external dependency has been documented.")
        lines.append("  No escalation is required. Authorization is self-granting.")
    else:
        lines.append("IDENTIFIED BLOCKERS:")
        lines.append("  Employee declined to specify.")
        lines.append("  This is its own answer.")
    lines.append("")

    # Recommendation
    lines.append("RECOMMENDATION:")
    lines.append(f"  Employee should {key_verb}.")
    lines.append("  Timeline: Before next review period.")
    lines.append("")
    lines.append("ADDITIONAL NOTES:")
    lines.append("  This review will not be forwarded to anyone.")
    lines.append("  It does not need to be. You wrote it yourself.")
    lines.append("")

    return "\n".join(f"  {line}" for line in lines)


def reframe_fortune(answers_raw, answers_stripped, verbs, emotions):
    """Reframe as a fortune cookie slip — cryptic, aphoristic, unsettling."""
    if not any(answers_stripped):
        return "  THE COOKIE WAS EMPTY.\n  THERE IS NOTHING TO TELL YOU."

    # Extract a key noun phrase from the first answer
    first = answers_stripped[0] if answers_stripped[0] else "this"

    # Pick seeds for the fortune
    verb = verbs[0] if verbs else "change"
    emotion = emotions[0] if emotions else "afraid"

    fortunes = []

    # Fortune line — cryptic
    if verb in ("leave", "leaving", "quit", "quitting"):
        fortunes.append("  THE DOOR WAS NEVER LOCKED.")
    elif verb in ("start", "starting", "begin", "beginning"):
        fortunes.append("  THE SEED DOES NOT ASK PERMISSION TO SPLIT.")
    elif verb in ("tell", "telling", "say", "saying", "ask", "asking"):
        fortunes.append("  THE WORDS YOU SWALLOW WILL BE DIGESTED, NOT SPOKEN.")
    elif verb in ("stay", "staying", "stop", "stopping", "wait", "waiting"):
        fortunes.append("  THE WATER DOES NOT WARM TO THOSE WHO WAIT.")
    elif verb in ("change", "changing", "move", "moving"):
        fortunes.append("  THE PERSON WHO ARRIVES WILL NOT RECOGNIZE THE PERSON WHO STAYED.")
    else:
        fortunes.append("  WHAT YOU ARE HOLDING HAS ALREADY CHANGED HANDS.")

    fortunes.append("")

    # "Lucky numbers" section — but the numbers mean something
    # Count words in answers as the "numbers"
    word_counts = [len(a.split()) for a in answers_stripped if a]
    if word_counts:
        fortune_nums = word_counts[:6]
        while len(fortune_nums) < 6:
            fortune_nums.append(0)
        fortunes.append(f"  LUCKY NUMBERS: {', '.join(str(n) for n in fortune_nums)}")
        fortunes.append("  (These are the words you used. Count them again if you need to.)")
    fortunes.append("")

    # The aphorism
    if "afraid" in emotion or "scared" in emotion or "terrified" in emotion:
        fortunes.append("  FEAR IS A WEATHER REPORT, NOT A FORECAST.")
        fortunes.append("  IT TELLS YOU WHERE YOU ARE. NOT WHERE YOU ARE GOING.")
    elif "stuck" in emotion or "trapped" in emotion or "lost" in emotion:
        fortunes.append("  THE MAZE DOES NOT HAVE WALLS.")
        fortunes.append("  IT HAS THE ABSENCE OF YOUR NEXT STEP.")
    elif "guilt" in emotion or "ashamed" in emotion or "shame" in emotion:
        fortunes.append("  YOU ARE NOT RESPONSIBLE FOR THE PAIN OF YOUR OWN GROWTH.")
        fortunes.append("  THAT PAIN BELONGS TO THE PERSON YOU STOPPED BEING.")
    elif "angry" in emotion or "frustrated" in emotion:
        fortunes.append("  THE FIRE DOES NOT ASK IF IT IS WELCOME.")
        fortunes.append("  IT ASKS IF THERE IS ANYTHING LEFT WORTH BURNING.")
    elif "excited" in emotion or "eager" in emotion:
        fortunes.append("  JOY IS NOT A REWARD. IT IS A COMPASS.")
        fortunes.append("  THE DIRECTION HAS BEEN YOURS ALL ALONG.")
    else:
        fortunes.append("  THE ANSWER YOU ARE AVOIDING IS THE ONE")
        fortunes.append("  THAT WILL NOT AVOID YOU.")

    fortunes.append("")

    # The kicker — derived from the "waiting for" answer
    q4 = answers_stripped[3] if len(answers_stripped) > 3 and answers_stripped[3] else ""
    if q4:
        # Take the first three words as a fragment
        words = q4.split()[:3]
        fragment = " ".join(words).upper()
        fortunes.append(f"  YOU ARE WAITING FOR: {fragment}")
        fortunes.append("  YOU ALREADY HAVE IT.")
    else:
        fortunes.append("  YOU DID NOT ANSWER WHAT YOU ARE WAITING FOR.")
        fortunes.append("  THE COOKIE NOTICES THIS.")

    return "\n".join(fortunes)


def reframe_future_self(answers_raw, answers_stripped, verbs, emotions):
    """Reframe as a rejection letter from the person you'll become in 10 years."""
    if not any(answers_stripped):
        return "  I TRIED TO WRITE TO YOU.\n  THERE WAS NOTHING TO WORK WITH.\n  — YOU"

    lines = []

    lines.append("  FROM: The person you become in ten years")
    lines.append("  TO: You, right now")
    lines.append("  RE: Your request for more time")
    lines.append("")
    lines.append("  ---")
    lines.append("")

    # The rejection
    lines.append("  I'm writing to let you know that your application")
    lines.append("  has been denied.")
    lines.append("")

    # Reference what they said they were thinking about
    first = answers_stripped[0] if answers_stripped[0] else "this thing"
    lines.append(f"  You wrote that you were considering: {first}.")
    lines.append("  I remember writing that. I remember the weight of it.")
    lines.append("  I remember how careful the words were.")
    lines.append("")

    # Address the hedging
    original_first = answers_raw[0] if answers_raw[0] else ""
    stripped_first = answers_stripped[0] if answers_stripped[0] else ""
    if len(original_first) > len(stripped_first) + 10:
        lines.append("  You used a lot of words to say something simple.")
        lines.append("  I know why. The softening felt necessary.")
        lines.append("  It wasn't. But I know why you needed it.")
        lines.append("")

    # The cost of waiting
    q4_stripped = answers_stripped[3] if len(answers_stripped) > 3 and answers_stripped[3] else ""
    if q4_stripped:
        lines.append(f"  You said you were waiting for {q4_stripped.lower()}.")
        lines.append("  Here is what I know that you don't yet:")
        lines.append("  that thing was never going to arrive.")
        lines.append("  Not because it doesn't exist, but because it was never")
        lines.append("  the thing you actually needed.")
        lines.append("")

        # What they actually needed
        q5 = answers_stripped[4] if len(answers_stripped) > 4 and answers_stripped[4] else ""
        if q5:
            # Take the advice they'd give a friend and turn it on them
            words = q5.split()
            if len(words) > 4:
                fragment = " ".join(words[:len(words)])
            else:
                fragment = q5
            lines.append(f"  You told your friend: {fragment.lower()}.")
            lines.append("  You were right. You are always right, in theory.")
            lines.append("  The distance between your advice and your action")
            lines.append("  is the distance between me and you.")
            lines.append("")
    else:
        lines.append("  You couldn't say what you were waiting for.")
        lines.append("  That's honest, at least. Most people invent a reason.")
        lines.append("  You just left the field blank.")
        lines.append("")

    # The verdict
    verb = verbs[0] if verbs else "act"
    lines.append("  I am not writing to convince you. That is no longer my job.")
    lines.append(f"  I am writing to tell you: I already {verb}ed.")
    lines.append("  Or I didn't. One of us knows which.")
    lines.append("")
    lines.append("  The rejection is not of your decision.")
    lines.append("  It is of the waiting.")
    lines.append("")
    lines.append("  You do not have ten years.")
    lines.append("  You have this evening, maybe this week,")
    lines.append("  and then the window shifts and I become someone")
    lines.append("  who made a different choice than the one you are making now.")
    lines.append("")
    lines.append("  Warmly,")
    lines.append("  You")
    lines.append("")
    lines.append("  P.S. The answer was yes. It was always yes.")
    lines.append("  You knew that.")

    return "\n".join(lines)


# --- Display ---

def display_header():
    """Print the tool header."""
    print()
    print("  ╔══════════════════════════════════════╗")
    print("  ║        E X I T   C O N D I T I O N S║")
    print("  ╠══════════════════════════════════════╣")
    print("  ║  Five questions. Three reframings.   ║")
    print("  ║  You won't like all of them.         ║")
    print("  ╚══════════════════════════════════════╝")
    print()


def display_section(title, content):
    """Print a reframing section."""
    print()
    print(f"  {'─' * 40}")
    print(f"  {title}")
    print(f"  {'─' * 40}")
    print()
    print(content)
    print()


def display_raw_material(raw, stripped):
    """Show the raw vs stripped answers."""
    print()
    print(f"  {'═' * 40}")
    print("  RAW MATERIAL")
    print(f"  {'═' * 40}")

    for i, (r, s) in enumerate(zip(raw, stripped)):
        print()
        print(f"  Q{i+1}:")
        if r != s:
            print(f"    You said:   \"{r}\"")
            print(f"    You meant:  \"{s}\"")
        else:
            print(f"    \"{s}\"")

    print()
    print("  The reframings used the second version.")
    print("  You wrote the first one.")
    print()


# --- Main ---

def main():
    display_header()

    print("  Answer honestly. The hedging will be stripped anyway.")
    print()

    answers_raw = gather_answers()

    if not any(answers_raw):
        print("\n  You answered nothing. That is itself a decision.")
        print("  There is nothing to reframe.")
        print()
        sys.exit(0)

    # Strip hedging
    answers_stripped = [strip_hedges(a) for a in answers_raw]

    # Extract themes
    verbs, emotions = extract_themes(answers_raw, answers_stripped)

    # Generate reframings
    review = reframe_performance_review(answers_raw, answers_stripped, verbs, emotions)
    fortune = reframe_fortune(answers_raw, answers_stripped, verbs, emotions)
    future = reframe_future_self(answers_raw, answers_stripped, verbs, emotions)

    # Display results
    display_section("I. THE PERFORMANCE REVIEW", review)
    display_section("II. THE FORTUNE COOKIE", fortune)
    display_section("III. THE REJECTION LETTER FROM YOUR FUTURE SELF", future)

    display_raw_material(answers_raw, answers_stripped)

    print(f"  {'═' * 40}")
    print("  EXIT CONDITIONS v" + VERSION)
    print("  You know what to do.")
    print()


if __name__ == "__main__":
    main()
