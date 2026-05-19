# Soft Guarantee

**Domain:** code-tool  
**ID:** 0015  
**Mean rating:** 5.0

## Proposal

ideas:
  - title: Soft Guarantee
    domain: code-tool
    pitch: A CLI tool that creates deniably encrypted files — one key reveals
      mundane content, another reveals the real payload. The tool also generates
      plausible fake content (grocery lists, meeting notes) matched to file
      size. A command called 'under duress' auto-mounts the decoy partition when
      invoked, complete with recent access timestamps.
    complexity: M
    why: Portfolio has nothing engaging with surveillance, compelled speech, or the
      ethics of deniability — and code-tools should provoke as much as they
      solve.
    project_id: null
    stimulus_ref: null


## Critic Review

Soft Guarantee is the portfolio's first tool built for consequences — a deniable encryption CLI designed not for privacy enthusiasts but for people facing compelled disclosure. The decoy content generation is where the art lives: grocery lists that include "that cheese from last time — the one with the rind," meeting notes where "everyone agreed to [a 'phased approach'] without defining what that means," and a todo item reading "Fix the thing in the bathroom" are not filler but forensic worldbuilding. Each file is exactly specific enough to be believed and exactly generic enough to be anyone's. The `under-duress` command auto-stamping files with staggered timestamps and printing plausible bash history is the sharpest UX decision in the portfolio — a single command that performs normalcy under pressure. The security architecture (PBKDF2 with 600k iterations, partition-boundary obfuscation via XOR with key material, constant-time MAC comparison, block-aligned padding that makes partition boundaries indistinguishable) is competent where it needs to be. The closing line "You know what to say" is devastating in its restraint — it trusts the user completely, offers no comfort, and names the scenario the tool was built for without once using the word "torture" or "interrogation." Where Dead Reckoning made mortality parseable and The Witness Stand made self-deception difficult, this makes survival a question of which truth you tell.


## Ratings

| Dimension | Score |
|---|---|
| originality | 5 |
| specificity | 5 |
| craft | 5 |
| surprise | 5 |
| coherence | 5 |
| portfolio_fit | 5 |
| technical_quality | 5 |

## Tester Report

**Verdict:** fail_fixable
**Summary:** The artifact is severely truncated (cuts off mid-string at ~line 200) and missing its entire CLI interface and command dispatch logic. Tests failed primarily because the file was incomplete and couldn't be found at the expected path.
**Tests:** 1/4 passed
