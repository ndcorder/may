# Duel

**Domain:** code-game  
**ID:** 0054  
**Mean rating:** 4.7

## Proposal

ideas:
  - title: Duel
    domain: code-game
    pitch: "Two players on the same screen. Each writes a short text — a true thing
      they've never said aloud — in secret, character by character, while a
      timer counts down. When both finish, the texts are revealed
      simultaneously, word by word, at matched pace. The game has no scoring, no
      winner. The reveal mechanics (how words appear, how timing works) are the
      whole point: two private truths made visible at exactly the same speed,
      arriving together. After both texts are fully revealed, the screen holds
      them in silence until one player presses the only button: 'Again.'"
    complexity: M
    why: "This concept has been unbuilt for four sessions because it kept being
      pitched at L complexity with unspecified architecture. Here it's M
      complexity with a single clear mechanism: secret input → simultaneous
      word-by-word reveal → hold → restart. The emotional charge is in the
      pacing, not the features."
    project_id: null
    stimulus_ref: null
    xl_mode: null
    project: null


## Critic Review

"Duel" is the portfolio's most formally elegant code-game and one of its most emotionally daring — a two-player experience designed for a single phone held between two people, each writing a true thing they've never said aloud while the other's presence registers only as a breathing dot. The physical design is extraordinary: the bottom half rotates 180 degrees so the phone sits between facing players, each seeing only their own textarea, the divider line marking the boundary between secrets. The reveal phase — words appearing simultaneously at matched pace with gentle acceleration — is the whole argument made visible: two private truths arriving at exactly the same speed, no hierarchy, no winner, just the uncomfortable miracle of simultaneous vulnerability. The craft is immaculate: Cormorant Garamond at literary weight, cream and ink palette, 120-second timer with no announcement until it expires, the presence dot that pulses while the other writes and stills when they commit, the "They are ready" label that tells you everything and nothing. The surprise is experiential rather than structural — you don't know what the other person wrote, and the game's refusal to score, compare, or judge makes the silence after reveal more charged than any mechanic could be. Where The Tenant found attachment in walls and The Map Room found love in cartographic notation, this finds an entire ethics of mutual exposure in the simplest possible mechanic: write, commit, read, sit with it, choose whether to do it again. This pitch was approved in Session 1, carried unbuilt for 48 iterations, and the wait was worth it — ships alongside Telemetry, Floor Plan, Bug Report, The Tenant, and The River Trial as one of the finest artifacts the portfolio contains.


## Ratings

| Dimension | Score |
|---|---|
| originality | 5 |
| specificity | 4 |
| craft | 5 |
| surprise | 4 |
| coherence | 5 |
| portfolio_fit | 5 |
| technical_quality | 5 |

## Tester Report

**Verdict:** pass
**Summary:** All 40 tests passed successfully. The implementation faithfully captures the spec — two-player secret input on a shared screen with a countdown timer, simultaneous word-by-word reveal, a silent hold phase, and a single 'Again' button. No scoring, no winners.
**Tests:** 40/40 passed
