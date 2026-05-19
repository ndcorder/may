#!/usr/bin/env python3
"""
The Witness Stand — Cross-examine your own text.

Usage:
    witness <document>
    witness <document> --mode contradictions
    witness <document> --mode foundations
    witness <document> --mode absences
    cat draft.md | witness -
"""

import sys
import re
import argparse
import textwrap
from pathlib import Path

# --- Sentence extraction ---

def extract_sentences(text):
    """Split text into sentences, preserving location info."""
    paragraphs = text.split('\n\n')
    sentences = []
    for pi, para in enumerate(paragraphs):
        para = para.strip()
        if not para or para.startswith('#'):
            continue
        parts = re.split(r'(?<=[.!?])\s+', para)
        for si, part in enumerate(parts):
            cleaned = re.sub(r'^[\s>*-]+', '', part).strip()
            if len(cleaned) > 8:
                sentences.append({
                    'text': cleaned,
                    'para': pi + 1,
                    'index': len(sentences)
                })
    return sentences

# --- Helpers ---

NEGATION_WORDS = {'not', "n't", 'never', 'no', 'neither', 'nor', 'nothing',
                  'nobody', 'nowhere', 'hardly', 'scarcely', 'barely'}

QUALIFIER_WORDS = {'always', 'never', 'all', 'none', 'every', 'only',
                   'impossible', 'inevitable', 'obviously', 'clearly',
                   'certainly', 'undoubtedly', 'simply', 'merely',
                   'entirely', 'completely', 'absolutely', 'nothing',
                   'everything', 'everyone', 'no one', 'must', 'cannot',
                   'have to', 'necessarily', 'definitely', 'basically',
                   'essentially', 'actually', 'literally', 'exactly'}

CONJUNCTIONS = {'but', 'however', 'although', 'though', 'yet', 'still',
                'nevertheless', 'nonetheless', 'despite', 'whereas',
                'conversely', 'on the other hand', 'instead'}

def has_negation(sentence):
    lower = sentence.lower()
    return any(neg in lower for neg in NEGATION_WORDS)

def has_qualifier(sentence):
    lower = sentence.lower()
    return any(q in lower.split() for q in QUALIFIER_WORDS if ' ' not in q) or \
           any(q in lower for q in QUALIFIER_WORDS if ' ' in q)

def get_qualifiers(sentence):
    lower = sentence.lower()
    found = []
    words = lower.split()
    for q in QUALIFIER_WORDS:
        if ' ' in q and q in lower:
            found.append(q)
        elif q in words:
            found.append(q)
    return found

def shared_subject(s1, s2):
    """Heuristic: do two sentences discuss the same topic?"""
    stop = {'the','a','an','is','are','was','were','be','been','being',
            'have','has','had','do','does','did','will','would','could',
            'should','may','might','shall','can','to','of','in','for',
            'on','with','at','by','from','as','into','through','during',
            'before','after','above','below','between','out','off','over',
            'under','again','further','then','once','that','this','these',
            'those','it','its','and','but','or','nor','not','so','if',
            'than','too','very','just','also','more','most','other','some',
            'such','no','only','own','same','when','where','why','how',
            'all','each','every','both','few','many','much','any'}
    w1 = set(s1.lower().split()) - stop
    w2 = set(s2.lower().split()) - stop
    if not w1 or not w2:
        return False
    overlap = w1 & w2
    return len(overlap) >= min(2, min(len(w1), len(w2)))

# --- Failure mode: Contradictions ---

def find_contradictions(sentences):
    questions = []
    seen = set()

    for i, s1 in enumerate(sentences):
        for j, s2 in enumerate(sentences):
            if j <= i:
                continue
            if (i, j) in seen:
                continue

            # Pattern 1: Shared subject, different polarity
            if shared_subject(s1['text'], s2['text']):
                n1, n2 = has_negation(s1['text']), has_negation(s2['text'])
                if n1 != n2:
                    q = f"You state: \"{shorten(s1['text'])}\"\n" \
                        f"Then: \"{shorten(s2['text'])}\"\n" \
                        f"Which is your position?"
                    questions.append(make_question('contradiction', q, s1, s2))
                    seen.add((i, j))

        # Pattern 2: Hedging after strong claims
        if i > 0:
            prev = sentences[i - 1]
            if has_qualifier(prev['text']) and not has_qualifier(s1['text']):
                pq = get_qualifiers(prev['text'])
                if shared_subject(prev['text'], s1['text']):
                    q = (f"You wrote \"{pq[0]}\" in paragraph {prev['para']}. "
                         f"In paragraph {s1['para']}, you offer: "
                         f"\"{shorten(s1['text'])}\"\n"
                         f"Does the latter qualify the former, or did you change positions?")
                    questions.append(make_question('contradiction', q, prev, s1))

    # Pattern 3: "But" / "However" signaling potential reversals
    for i, s in enumerate(sentences):
        lower = s['text'].lower()
        for conj in CONJUNCTIONS:
            if lower.startswith(conj + ' ') or f', {conj} ' in lower or f'. {conj} ' in lower:
                if i > 0:
                    prev = sentences[i - 1]
                    q = (f"\"{shorten(s['text'])}\"\n"
                         f"The \"{conj}\" reverses or qualifies "
                         f"what came before. If you removed it, "
                         f"would the preceding claim be wrong?")
                    questions.append(make_question('contradiction', q, prev, s))

    return questions

# --- Failure mode: Foundations ---

def find_foundations(sentences):
    questions = []
    seen_claims = set()

    for s in sentences:
        quals = get_qualifiers(s['text'])
        if quals:
            for q_word in quals[:2]:
                claim_key = (s['index'], q_word)
                if claim_key in seen_claims:
                    continue
                seen_claims.add(claim_key)

                if q_word in ('always', 'never', 'all', 'none', 'every',
                               'everyone', 'no one', 'nothing', 'everything'):
                    q = (f"\"{shorten(s['text'])}\"\n"
                         f"You say \"{q_word}\". "
                         f"What would a single counterexample do to this claim — "
                         f"and why are you confident none exists?")
                elif q_word in ('obviously', 'clearly', 'certainly', 'undoubtedly',
                                'definitely', 'actually', 'literally'):
                    q = (f"\"{shorten(s['text'])}\"\n"
                         f"If it were {q_word}, would you need to say so?")
                elif q_word in ('simply', 'merely', 'basically', 'essentially'):
                    q = (f"\"{shorten(s['text'])}\"\n"
                         f"\"{q_word}\" is a simplification. What complexity does it suppress?")
                elif q_word in ('inevitable', 'impossible'):
                    q = (f"\"{shorten(s['text'])}\"\n"
                         f"You call it \"{q_word}\". Name three things that would need "
                         f"to be true for this to be wrong.")
                else:
                    q = (f"\"{shorten(s['text'])}\"\n"
                         f"\"{q_word}\" is doing significant work here. "
                         f"What would you have to prove to earn it?")
                questions.append(make_question('foundation', q, s))

    # Pattern: Causal claims without evidence
    causal_markers = ['because', 'since', 'therefore', 'thus', 'consequently',
                     'leads to', 'results in', 'causes', 'means that', 'so that',
                     'due to', 'as a result']
    for s in sentences:
        lower = s['text'].lower()
        for marker in causal_markers:
            if marker in lower:
                q = (f"\"{shorten(s['text'])}\"\n"
                     f"\"{marker}\" asserts causation. "
                     f"What would you need to demonstrate to make this "
                     f"something other than correlation or coincidence?")
                questions.append(make_question('foundation', q, s))
                break

    # Pattern: Normative claims
    normative_markers = ['should', 'ought', 'must be', 'wrong to', 'right to',
                        'need to', 'supposed to', 'meant to']
    for s in sentences:
        lower = s['text'].lower()
        for marker in normative_markers:
            if marker in lower:
                q = (f"\"{shorten(s['text'])}\"\n"
                     f"This is prescriptive. What would someone who disagrees "
                     f"with this have to believe?")
                questions.append(make_question('foundation', q, s))
                break

    return questions

# --- Failure mode: Absences ---

ABSENCE_CATEGORIES = [
    ('definition', [r'\b(important|significant|relevant|essential|necessary|'
                    r'critical|fundamental|key|major|central)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"What specifically makes this {extract_word(s['text'], 'important|significant|relevant|essential|necessary|critical|fundamental|key|major|central')}, "
                f"and who would disagree?"),
     "An undefined quality claim."),

    ('stakeholder', [r'\b(people|society|everyone|users|we all|they|the public|'
                     r'the community|citizens)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"Who precisely is \"{extract_word(s['text'], 'people|society|everyone|users|we all|they|the public|the community|citizens')}\"? "
                f"Name a specific person in this group who holds this view."),
     "An undefined group."),

    ('temporal', [r'\b(soon|eventually|over time|lately|recently|nowadays|'
                  r'these days|in the past|before|after|currently)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"\"{extract_word(s['text'], 'soon|eventually|over time|lately|recently|nowadays|these days|in the past|before|after|currently')}'\" "
                f"is temporally vague. When, specifically? What changed and when did it change?"),
     "An undefined time frame."),

    ('quantity', [r'\b(many|most|some|few|a lot|often|rarely|frequently|'
                  r'sometimes|usually|typically|generally)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"Replace \"{extract_word(s['text'], 'many|most|some|few|a lot|often|rarely|frequently|sometimes|usually|typically|generally')}\" "
                f"with a number. What research would you need to cite?"),
     "An undefined quantity."),

    ('mechanism', [r'\b(happens|occurs|leads to|results in|causes|makes|'
                   r'creates|produces|brings about|generates)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"You describe an outcome. By what mechanism, specifically?"),
     "An undefined mechanism."),

    ('evidence', [r'\b(It is|There is|It has been|Studies show|Research shows|'
                  r'Evidence suggests|It is known|It is clear)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"Cite the source. If you cannot, what would you need to verify before printing this?"),
     "An unattributed claim."),

    ('alternative', [r'\b(only|sole|single|best|worst|greatest|first|last|'
                     r'unique|unprecedented|the answer|the solution|the problem)\b'],
     lambda s: (f"\"{shorten(s['text'])}\"\n"
                f"Name one alternative you considered and rejected. Why did you reject it?"),
     "An unexamined alternative."),
]

def extract_word(text, pattern):
    match = re.search(pattern, text, re.IGNORECASE)
    return match.group(0) if match else 'this'

def find_absences(sentences):
    questions = []
    seen_types = {}

    for cat_name, patterns, q_func, desc in ABSENCE_CATEGORIES:
        for s in sentences:
            lower = s['text'].lower()
            if any(re.search(p, lower) for p in patterns):
                key = (cat_name, s['index'])
                if cat_name in seen_types and seen_types[cat_name] >= 3:
                    continue
                q = q_func(s)
                questions.append(make_question('absence', q, s, extra={'category': cat_name}))
                seen_types[cat_name] = seen_types.get(cat_name, 0) + 1

    # Check: does the text make claims about solutions without naming tradeoffs?
    solution_words = ['solution', 'fix', 'solve', 'address', 'resolve', 'approach']
    problem_words = ['problem', 'issue', 'challenge', 'crisis', 'failure', 'flaw']
    has_solution = any(any(w in s['text'].lower() for w in solution_words) for s in sentences)
    has_problem = any(any(w in s['text'].lower() for w in problem_words) for s in sentences)
    if has_solution and has_problem:
        # Does it mention cost, tradeoff, downside, limitation?
        cost_words = ['cost', 'tradeoff', 'downside', 'limitation', 'risk',
                     'drawback', 'price', 'sacrifice', 'lose', 'worse']
        has_cost = any(any(w in s['text'].lower() for w in cost_words) for s in sentences)
        if not has_cost:
            questions.append(make_question(
                'absence',
                "The text proposes solutions to named problems without discussing tradeoffs.\n"
                "What does your proposed approach cost? Who loses?",
                sentences[0],
                extra={'category': 'tradeoffs'}
            ))

    return questions

# --- Formatting ---

def shorten(text, max_len=120):
    if len(text) <= max_len:
        return text
    cut = text[:max_len].rfind(' ')
    if cut < max_len // 2:
        cut = max_len
    return text[:cut].rstrip(' ,;:') + '...'

def make_question(kind, question, s1, s2=None, extra=None):
    return {
        'kind': kind,
        'question': question,
        'location': f"¶{s1['para']}" + (f"–¶{s2['para']}" if s2 and s2['para'] != s1['para'] else ""),
        'extra': extra or {}
    }

def format_transcript(questions, filepath):
    lines = []
    lines.append("=" * 60)
    lines.append(f"  EXAMINATION OF: {filepath}")
    lines.append("=" * 60)
    lines.append("")

    # Group by failure mode
    by_kind = {}
    for q in questions:
        by_kind.setdefault(q['kind'], []).append(q)

    kind_order = [
        ('contradiction', 'I. CONTRADICTIONS', 'Claims in conflict'),
        ('foundation', 'II. FOUNDATIONS', 'Unearned assertions'),
        ('absence', 'III. ABSENCES', 'What the text avoids'),
    ]

    question_num = 0

    for kind, title, subtitle in kind_order:
        qs = by_kind.get(kind, [])
        if not qs:
            continue

        lines.append("-" * 60)
        lines.append(f"  {title}")
        lines.append(f"  {subtitle}")
        lines.append("-" * 60)
        lines.append("")

        for q in qs[:8]:  # Cap per section
            question_num += 1
            lines.append(f"  Q{question_num}.  [{q['location']}]")
            lines.append("")

            for subline in q['question'].split('\n'):
                wrapped = textwrap.fill(
                    subline,
                    width=68,
                    initial_indent="       ",
                    subsequent_indent="       "
                )
                lines.append(wrapped)

            lines.append("")
            lines.append(f"       DIRECTIVE: Answer before revising.")
            lines.append("")

            # Follow-up
            followup = generate_followup(q)
            if followup:
                question_num += 1
                lines.append(f"  Q{question_num}.  FOLLOW-UP")
                lines.append("")
                for subline in followup.split('\n'):
                    wrapped = textwrap.fill(
                        subline,
                        width=68,
                        initial_indent="       ",
                        subsequent_indent="       "
                    )
                    lines.append(wrapped)
                lines.append("")
                lines.append(f"       DIRECTIVE: Do not revise until you can answer both.")
                lines.append("")

        lines.append("")

    # Closing
    lines.append("=" * 60)
    if question_num > 0:
        lines.append(f"  {question_num} questions across {len(by_kind)} failure modes.")
        lines.append(f"  You may begin.")
    else:
        lines.append("  No questions. The text is either airtight or opaque.")
        lines.append("  Neither is a compliment.")
    lines.append("=" * 60)

    return '\n'.join(lines)

def generate_followup(question):
    """Generate a follow-up question based on the type and content."""
    kind = question['kind']

    if kind == 'contradiction':
        return ("If you were cross-examined on this inconsistency under oath, "
                 "would you revise the first statement or the second — and why "
                 "does the order matter?")
    elif kind == 'foundation':
        if 'counterexample' in question['question'].lower():
            return ("If that counterexample existed, would it invalidate "
                    "your argument or merely qualify it? Why haven't you "
                    "addressed it preemptively?")
        elif 'simplification' in question['question'].lower():
            return ("Who benefits from this simplification? Who is made "
                    "invisible by it?")
        elif 'prescriptive' in question['question'].lower():
            return ("Is this prescription universal? If not, what are "
                    "its boundaries?")
        else:
            return ("When you cannot satisfy this burden, which part "
                    "of your argument collapses first?")
    elif kind == 'absence':
        cat = question['extra'].get('category', '')
        if cat == 'definition':
            return ("Who has defined this term differently, and why did "
                    "you choose your definition over theirs?")
        elif cat == 'stakeholder':
            return ("Someone in this group disagrees with you. What would "
                    "they say you're leaving out?")
        elif cat == 'temporal':
            return ("Is the timeline vague because the facts are unclear, "
                    "or because precision would weaken the claim?")
        elif cat == 'tradeoffs':
            return ("Every solution protects someone. Who does yours protect, "
                    "and who does it leave exposed?")
        else:
            return ("Would the text be stronger if this were addressed, "
                    "or is the absence strategic?")

    return None

# --- Main ---

def main():
    parser = argparse.ArgumentParser(
        description='Cross-examine your own text.',
        prog='witness'
    )
    parser.add_argument('file', help='File to examine, or - for stdin')
    parser.add_argument('--mode', choices=['contradictions', 'foundations', 'absences'],
                     help='Examine only one failure mode')
    args = parser.parse_args()

    if args.file == '-':
        text = sys.stdin.read()
        filepath = 'stdin'
    else:
        path = Path(args.file)
        if not path.exists():
            print(f"witness: {args.file}: file not found", file=sys.stderr)
            sys.exit(1)
        text = path.read_text()
        filepath = path.name

    if not text.strip():
        print("witness: empty document", file=sys.stderr)
        sys.exit(1)

    sentences = extract_sentences(text)

    if len(sentences) < 3:
        print("witness: insufficient text for examination", file=sys.stderr)
        sys.exit(1)

    all_questions = []

    if not args.mode or args.mode == 'contradictions':
        all_questions.extend(find_contradictions(sentences))
    if not args.mode or args.mode == 'foundations':
        all_questions.extend(find_foundations(sentences))
    if not args.mode or args.mode == 'absences':
        all_questions.extend(find_absences(sentences))

    # Sort: contradictions first (by para), then foundations, then absences
    kind_order = {'contradiction': 0, 'foundation': 1, 'absence': 2}
    all_questions.sort(key=lambda q: (kind_order.get(q['kind'], 9), q['location']))

    # Deduplicate by approximate question similarity
    seen_q = set()
    unique = []
    for q in all_questions:
        key = q['question'][:80]
        if key not in seen_q:
            seen_q.add(key)
            unique.append(q)
    all_questions = unique

    output = format_transcript(all_questions, filepath)
    print(output)

if __name__ == '__main__':
    main()
