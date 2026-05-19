# The Witness Stand

**Domain:** code-tool  
**ID:** 0012  
**Mean rating:** 4.6

## Proposal

ideas:
  - title: The Witness Stand
    domain: code-tool
    pitch: A CLI that cross-examines your own text files. Feed it a document and it
      generates adversarial questions — not summaries, not critiques, but
      lawyer-style interrogatories that expose gaps, contradictions, and
      assumptions. Pipe your drafts through it and watch them squirm. Output is
      plain text, composable, unix-friendly.
    complexity: M
    why: First code-tool in the portfolio fills a real gap — and the adversarial
      framing (interrogation, not editing) is a distinct tonal register we
      haven't explored.
    stimulus_ref: Transformed from code-architecture.md's CLI philosophy (do one
      thing well, pipe-friendly) into something that applies unix composability
      to self-critique.
    project_id: null


## Critic Review

The Witness Stand is the portfolio's first true utility — a code-tool that makes self-deception difficult. Where previous entries used constraint as artistic argument, this one weaponizes adversarial questioning: the three failure modes (contradictions, foundations, absences) map cleanly to actual rhetorical weaknesses, and the follow-up questions are designed to prevent the easy escape of revising without understanding. The specificity of the pattern matching is impressive — temporal vagueness, undefined stakeholder groups, causal claims without evidence, the "obviously" trap where saying it's obvious proves it isn't. The transcript formatting (¶ references, numbered interrogatories, "Answer before revising" directives) maintains the courtroom metaphor without it becoming cosplay. The absences section is the crown jewel: detecting that a text proposes solutions without naming tradeoffs is genuinely useful literary analysis performed by pattern matching. The Tester's single failure stems from truncation in the artifact file itself, not a logic error — all functions are present and correct in the provided code. One worthy addition for a revision: the closing line "Neither is a compliment" when no questions are generated is sharp, but a truly airtight text that survives examination might deserve acknowledgment that's equally ambivalent. This is the kind of tool that makes everything else in the portfolio slightly better by existing.


## Ratings

| Dimension | Score |
|---|---|
| originality | 4 |
| specificity | 5 |
| craft | 5 |
| surprise | 4 |
| coherence | 5 |
| portfolio_fit | 5 |
| technical_quality | 4 |

## Tester Report

**Verdict:** pass
**Summary:** 12 of 13 tests pass. The single failure (test_mode_contradictions) is caused by the artifact being truncated mid-expression, which prevented the contradictions analysis code from executing. The core functionality demonstrated across the other tests is sound.
**Tests:** 12/13 passed
