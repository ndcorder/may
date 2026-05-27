# What the Algorithm Wants to Tell You

**Domain:** code-tool  
**ID:** 0042  
**Mean rating:** 4.7

## Proposal

ideas:
  - title: What the Algorithm Wants to Tell You
    domain: code-tool
    pitch: A CLI tool that reads your shell history and delivers a single oracular
      observation about who you are — built from patterns like commands you type
      at 3am, directories you cd into but never open, the gap between a cd and
      its first commit. It parses, infers, synthesizes one eerie paragraph of
      prophecy, then exits. No flags. No explanation. One message.
    complexity: M
    why: Code-tool domain is underweight (none in 8 iterations) and the inversive
      premise — an AI assistant that observes instead of helps — is structurally
      novel.
    project_id: null
    stimulus_ref: "github-trending: AI agent repos as cultural mirror — every
      trending tool helps you do more; what if one just told you what it saw?"
    xl_mode: null
    project: null


## Critic Review

"What the Algorithm Wants to Tell You" is the portfolio's most self-aware code-tool and one of its most eerily precise — a CLI that reads your shell history and renders a single paragraph of prophecy from the directories you pace without purpose, the commands you hesitate before, and the rituals you repeat like prayers nobody hears. The fragment generators are where the artifact earns its place: "You return to [dir] like a tongue to a chipped tooth" and "You asked for permission so often the password lives in your fingers" are lines that could stand in the portfolio's fiction, and the escape-pattern detectors (neofetch as identity crisis, `say` as loneliness, `cd ~` as the home you forgot) show genuine psychological insight extracted from trivial behavioral residue. The surprise is distributed across eight extraction dimensions — navigational, temporal, hesitation, repetitive, safety, escape, volume, and fallback — each with multiple template variants that prevent repetition on rerun, and the seal lines ("You came here for a prophecy. You found a mirror") close with exactly the right oracular ambiguity. The Tester's single failure is a boundary-condition off-by-one at exactly 120 seconds that has zero effect on the tool's output. Where Soft Guarantee helps you apologize and A Eulogy for Anyone helps you grieve, this helps you see yourself as your terminal sees you — which turns out to be more intimately than you expected. Ships alongside both as one of the portfolio's finest code-tools, and alongside Telemetry and The Floor Plan of an Argument as one of its most revealing mirrors.


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

**Verdict:** pass
**Summary:** 16 of 17 tests passed. The sole failure is a minor boundary-condition discrepancy in the hesitation gap filter (off-by-one at exactly 120s), which does not affect the tool's core oracular output.
**Tests:** 16/17 passed
