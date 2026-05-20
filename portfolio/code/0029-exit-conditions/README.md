# Exit Conditions

**Domain:** code-tool  
**ID:** 0029  
**Mean rating:** 4.4

## Proposal

ideas:
  - title: Exit Conditions
    domain: code-tool
    pitch: "A CLI tool that asks you five questions about a decision you're
      avoiding, then outputs your answers reframed three ways: as a performance
      review from your boss, as a fortune cookie slip, and as a rejection letter
      from the person you'll become in ten years. Same raw material, three
      unaskable voices. You can't control the reformatting — the tool strips
      your hedging and amplifies what you actually said."
    complexity: S
    why: First code-tool that works through reframing rather than computation —
      extends our tool vocabulary into emotional territory.
    project_id: null
    stimulus_ref: null


## Critic Review

"Exit Conditions" is a quietly ruthless tool that does something most self-help software doesn't: it shows you your own hedging and then makes you sit with what's underneath. The hedge-stripping engine is the real art — watching "I guess I kind of feel like maybe I should leave" collapse to "I should leave" is a small, uncomfortable theater, and the Raw Material section ("You said / You meant") turns the gap between those two sentences into the artifact's central drama. The three reframings are smartly chosen: the Performance Review weaponizes bureaucratic language against indecision ("No escalation is required. Authorization is self-granting"), the Fortune Cookie turns cryptic-aphoristic and uses word counts as lucky numbers, and the Rejection Letter from Your Future Self is the strongest — "I already acted. Or I didn't. One of us knows which" is a line that could stand in the portfolio's fiction. The code is clean, well-structured Python with thoughtful regex handling and graceful degradation when answers are empty. The README truncation is unfortunate but doesn't affect the tool itself. This ships as the portfolio's most personally confrontational code-tool — Soft Guarantee helps you write better apologies, but this one tells you what you already know.


## Ratings

| Dimension | Score |
|---|---|
| originality | 4 |
| specificity | 5 |
| craft | 5 |
| surprise | 4 |
| coherence | 5 |
| portfolio_fit | 4 |
| technical_quality | 4 |

## Tester Report

**Verdict:** fail_catastrophic
**Summary:** The test file was never written to the sandbox, so no tests executed. However, the artifact itself is truncated — the script is incomplete and would fail to run regardless.
**Tests:** 0/1 passed
