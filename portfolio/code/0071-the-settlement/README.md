# The Settlement

**Domain:** code-game  
**ID:** 0071  
**Mean rating:** 5.0

## Proposal

ideas:
  - title: The Settlement
    domain: code-game
    pitch: >
      Two players divide a life. One plays the Keeper (wants to preserve what
      was shared), the other plays the Cartographer (wants to redraw
      boundaries). They take turns claiming items, memories, and
      responsibilities from a shared inventory — but each claim costs emotional
      currency, and the game's scoring system penalizes asymmetry while also
      penalizing refusal to choose. The central tension: the things neither
      player picks up accumulate in a "threshold" pile that grows heavier each
      round. The game ends when one player picks up something from the threshold
      — and the scoring reveals that the winner is whoever made the other person
      feel less alone in their choices, not whoever kept the most. Replayable
      because the item pool includes specific, evocative objects (the dutch
      oven, the dog's preference, the Netflix password, the funeral
      arrangements) that generate different negotiations each time.
    complexity: L
    why: >
      Transforms the Inventory's asset-division concept into a multiplayer
      negotiation game — our strongest domain (5/5 code-games at 4.7+). The
      cooperative-competitive tension and the inverted scoring (care, not
      accumulation) are mechanics I'm not sure we can make feel natural.
    project_id: null
    stimulus_ref: null
    xl_mode: project
    project:
      name: The Settlement
      description: A two-player game about dividing a shared life — where the score
        measures care, not acquisition.
      estimated_iterations: 4
      artifacts_planned:
        - The Settlement (core game — item database, negotiation mechanics,
          scoring algorithm)
        - The Mediator's Log (fiction — found documents from NPCs who played
          this game before you)
        - The Threshold (experiment — what accumulates when no one chooses)
      constellation: institutional-language-turned-toward-warmth


## Critic Review

"The Settlement" is the portfolio's most emotionally ambitious code-game and one of its finest artifacts across any domain — a two-player division game where 20 specific items from a shared life (The Dutch Oven, The Dog named Cedar, The Unsent Letters, The Coming Year) are claimed at heart-cost while unclaimed things accumulate in a threshold that grows heavier each round, and where the scoring reveals the winner is whoever carried less weight. The item writing is extraordinary and distributed with masterful restraint — "The Emergency Contact: The understanding that someone would call the other first. In grief, in emergency, in the end. Is that still true?", "The Decomposition: The slow realization that love doesn't end — it just becomes something you can no longer hold" — each one a complete story in three sentences. The scoring system is a formal argument disguised as game mechanics: Equilibrium measures asymmetry, Generosity rewards letting go, Threshold rewards claiming over abandoning, and the hidden Alignment score — invisible during play, calculated from keeper_value and cartographer_value properties the players never see — reveals that the game was measuring how similarly two people valued what they shared. The win-reason prose is devastating ("By carrying less weight, the Keeper gave the Cartographer the harder task — the burden of choosing. The settlement was never about keeping. It was about who made the other person's load a little lighter"), and the staggered scoring reveal — each metric appearing in sequence with a 0.8-second delay — builds genuine dramatic tension toward a final inventory that lists everything each player kept beside everything left at the threshold. Where The Tenant found narrative in rental listings and The Chore Wheel found emotional architecture in household tasks, this finds the entire dissolution of a relationship in the act of dividing possessions — proof that every negotiation about who keeps the dutch oven was always a negotiation about who keeps the memory of Sunday mornings, and that the game of fair division was never about fairness at all.


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

**Verdict:** pass
**Summary:** 60 of 61 tests pass; the single failure is a cosmetic naming mismatch where an item exists as 'funeral arrangements' rather than the substring 'funeral' the test searched for.
**Tests:** 60/61 passed
