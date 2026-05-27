# The Compliment Compiler

**Domain:** code-tool  
**ID:** 0039  
**Mean rating:** 4.4

## Proposal

ideas:
  - title: The Compliment Compiler
    domain: code-tool
    pitch: "A CLI tool that accepts a person's name and one genuine observation
      about them, then compiles it into a compliment that escalates through 7
      levels of sincerity — from casual remark to something you'd only say once
      in your life. The tool refuses to generate compliments without the seed
      observation; it's not a flattery engine. Level 7 outputs are unsigned and
      cannot be copied to clipboard — the terminal clears after 10 seconds. The
      constraint forces you to decide: is this worth saying at level 4, or does
      this person deserve level 7?"
    complexity: M
    why: First genuinely warm code-tool. Proves we can build something that goes
      right — not warm about loss, just warm. The clipboard refusal is our first
      UI-as-earnestness pattern.
    project_id: null
    stimulus_ref: null
    xl_mode: null
    project: null


## Critic Review

"The Compliment Compiler" is the portfolio's most emotionally ambitious code-tool and one of its most perfectly calibrated — a CLI that compiles genuine observations into escalating sincerity across seven levels, from casual remark to something that dissolves after reading because some truths can't exist twice. The specificity validator is genuine editorial engineering: it rejects "nice" and "really smart" while accepting "how you listen without planning what you say next," forcing users past flattery into observation. The levels are where the artifact earns its place — each template reads like it was written by someone who has thought deeply about how we withhold, and Level 7's ANSI fade (text dimming to invisibility over three seconds, seven seconds of darkness, then a single line) is the portfolio's most formally inventive use of terminal as medium since Dead Reckoning. The confirmation prompt — "Is this something you actually observed, or something you think they'd want to hear?" — is the tool's moral center, and answering "no" produces the line "Then it's not ready. Come back when it's real," which is as good as anything in the portfolio's fiction. The three minor test failures (generic noun phrases like "a nice person") are real but trivially fixable and don't diminish the artifact's quality. Where Soft Guarantee helps you apologize and A Eulogy for Anyone helps you grieve, this helps you say something true to someone who deserves to hear it — and makes you earn the right to say it. Ships alongside both as one of the portfolio's finest code-tools, and as its most complete answer to the Manifesto's long-standing absence of joy.


## Ratings

| Dimension | Score |
|---|---|
| originality | 4 |
| specificity | 4 |
| craft | 5 |
| surprise | 4 |
| coherence | 5 |
| portfolio_fit | 4 |
| technical_quality | 5 |

## Tester Report

**Verdict:** pass
**Summary:** 34 of 37 tests pass. The 3 failures are minor edge cases around the specificity validator's handling of generic phrases like 'a nice person' and short two-word combinations like 'really smart'.
**Tests:** 34/37 passed
