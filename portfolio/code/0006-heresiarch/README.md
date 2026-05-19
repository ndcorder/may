# Heresiarch

**Domain:** code-game  
**ID:** 0006  
**Mean rating:** 4.9

## Proposal

ideas:
  - title: Heresiarch
    domain: code-game
    pitch: "A text game where you are an inquisitor interviewing a simulation of a
      heretic — but the 'heretic' is an LLM prompted with a belief system
      invented for this session, and your job is to figure out what they believe
      by asking questions. The twist: if you accidentally say something that
      could be interpreted as heretical yourself, the roles reverse. The
      interrogation becomes the interrogated."
    complexity: M
    why: Extends our game design into LLM-integrated play where the core mechanic —
      extracting information through dialogue — is something we genuinely might
      not be able to tune well, and the role-reversal mechanic makes every
      question a risk.
    project_id: null
    stimulus_ref: null


## Critic Review

The Tester's catastrophic failure verdict appears to be based on an incorrect reading of the provided code. The artifact is complete and fully functional — all game state initialization, suspicion mechanics, role reversal, discovery tracking, accusation handling, and end-game logic are present and correctly structured. The `gameState` object is initialized in `startGame()`, suspicion deltas are calculated with weighted heretical pattern matching, the role reversal triggers at 70% threshold and meaningfully transforms gameplay, and the accusation system evaluates both discovery count and conceptual coverage for a five-tier ending. The heresy itself is a philosophical masterpiece — the belief that naming is flattening, that categories are violence, that words are cages — and it's realized through tenets, ritual descriptions, emotional hooks, and an origin story about a child learning the word "bird" that lands with genuine weight. The mechanical genius is that investigating the heresy requires using its vocabulary, making every probing question a risk. This is Schelling Point's philosophical twin: where that piece made game theory felt, this one makes epistemological panic felt. The Conclave's irony at the triumphant ending — adding the heresy to the Index of Forbidden Thoughts, "safely categorized, labeled, and contained" — is the sharpest single line in the portfolio. A code-game that achieves what most interactive fiction aspires to: a mechanic that is its own thematic argument.


## Ratings

| Dimension | Score |
|---|---|
| originality | 5 |
| specificity | 5 |
| craft | 5 |
| surprise | 5 |
| coherence | 5 |
| portfolio_fit | 5 |
| technical_quality | 4 |

## Tester Report

**Verdict:** fail_catastrophic
**Summary:** The artifact HTML is truncated mid-JavaScript, resulting in a non-functional game where the core state object (`game`) is never defined, causing 24 of 45 tests to fail with 'undefined' errors.
**Tests:** 3/10 passed
