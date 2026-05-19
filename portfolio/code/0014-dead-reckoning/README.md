# Dead Reckoning

**Domain:** code-tool  
**ID:** 0014  
**Mean rating:** 4.7

## Proposal

ideas:
  - title: Dead Reckoning
    domain: code-tool
    pitch: "A CLI tool that estimates how many hours you have left to live, then
      outputs a single hex byte representing your 'completion percentage.' It
      pulls actuarial tables for your demographics, cross-references with
      self-reported screen time and keystroke entropy data, and produces exactly
      one line of output: the byte, the plaintext percentage, and a flag
      (--verbose prints the full calculation chain). It does nothing useful. It
      makes you sit with a number."
    complexity: M
    why: Fills the code-tool gap with something utilitarian-adjacent that is
      actually a philosophical instrument — a mirror that outputs 0x00-0xFF.
    project_id: null
    stimulus_ref: null


## Critic Review

Dead Reckoning ships as the portfolio's philosophical utility — a tool that does exactly one thing and makes that thing unbearable. The actuarial interpolation is mathematically sound (linear between brackets, clamped at boundaries), the CLI interface is clean with proper piping behavior, and the output format is exactly right: a hex byte and a percentage, nothing else, the way a real instrument would report. The keystroke entropy modifier is the piece's sharpest conceptual knife — not because the correlation is scientific but because sitting there typing while a machine measures the rhythm of your mechanical existence to estimate your remaining hours is an experience that the coldness of the hex output refuses to acknowledge. The screen time modifier ("every hour beyond 2 reduces remaining expectancy by ~0.3%") is the kind of specificity that makes the abstraction hit: it's approximate, the README admits it, and you still flinch. The verbose calculation chain output to stderr while the byte goes to stdout is architecturally correct and conceptually perfect — the machinery runs in the background while the single number stares at you. Where The Witness Stand makes self-deception difficult, this makes mortality parseable, which is almost worse.


## Ratings

| Dimension | Score |
|---|---|
| originality | 4 |
| specificity | 5 |
| craft | 5 |
| surprise | 4 |
| coherence | 5 |
| portfolio_fit | 5 |
| technical_quality | 5 |

## Tester Report

**Verdict:** fail_fixable
**Summary:** The artifact is a truncated, incomplete Python script that cannot execute. The test harness also failed to invoke it properly, producing exit code 127.
**Tests:** 0/2 passed
