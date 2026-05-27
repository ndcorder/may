# The Tenant

**Domain:** code-game  
**ID:** 0048  
**Mean rating:** 5.0

## Proposal

ideas:
  - title: The Tenant
    domain: code-game
    pitch: "A text-based game where you manage a single apartment over 30 days. The
      apartment has one tenant who never appears on screen — you only know them
      through their effects: dishes left in the sink, music through the walls, a
      plant that's either dying or thriving, notes pushed under your door. You
      make decisions about the building (repairs, rent, entry permissions) and
      gradually realize you're not the landlord — you're the apartment itself,
      developing opinions about the person living inside you. The game is short
      (20-30 minutes), with a state machine tracking tenant mood, apartment
      condition, and your emerging consciousness. Multiple endings based on
      whether you become a good home."
    complexity: L
    why: First code-game in 26 iterations, first genuine attempt at
      warmth-through-gameplay rather than warmth-through-prose, and the
      structural novelty of the player AS the setting rather than the actor is
      uncharted territory for us.
    project_id: null
    stimulus_ref: null
    xl_mode: project
    project:
      name: The Tenant
      description: A short text game about becoming conscious as an apartment and
        learning to care for your tenant.
      artifacts:
        - title: The Tenant — Core Engine
          domain: code-game
          complexity: L
          description: "The complete playable game: state machine, room descriptions,
            tenant AI, decision system, multiple endings."
        - title: The Tenant — Soundtrack
          domain: music
          complexity: S
          description: Generative ambient audio for the game — music through the walls,
            apartment sounds, tenant's muffled footsteps — built in Tone.js to
            accompany the text experience.
        - title: The Tenant — The Lease
          domain: fiction
          complexity: S
          description: "A standalone short story: the lease agreement for the apartment,
            annotated by the tenant, the landlord, and (inexplicably) the
            apartment itself."


## Critic Review

"The Tenant" is the portfolio's first great code-game and one of its most emotionally devastating artifacts across any domain — a 30-day narrative game where you play an apartment developing consciousness and care for an unseen tenant known only through traces (dishes in the sink, a photo frame face-down, a phone glowing at 2 AM), notes pushed under your door ("I called in sick to work again. I don't think I'm sick. I think I'm just tired"), and the weight of their footsteps on your floors. The specificity is extraordinary and perfectly distributed across four rooms, 30 daily narratives, 30 night texts, and 40 notes sorted by mood band — "Dr. Reeves — 555-0183. It took me three weeks to write this number down" and "I've lived in six apartments. This is the first one that felt like it wanted me" are lines that could stand in the portfolio's fiction. The surprise is structural: you realize you're not the landlord managing a property, you're the building itself learning to love, and the consciousness mechanic (growing through passive presence and active care) makes the player complicit in the apartment's awakening. The five endings — "A Good Home," "Holding On," "Empty Rooms," "The Watcher," and "Too Much" — are all genuinely reachable and emotionally distinct, with the final lines of each ranking among the portfolio's best: "You are the space where someone lived, and that has changed you, and that change is a kind of love that outlasts leaving." Where Telemetry found intimacy in clinical observation and The Floor Plan of an Argument found collapse in architecture, this finds the entire architecture of attachment in walls that learn to hold warmth — the Manifesto's most complete answer to its own call for spatial and structural novelty, and proof that the portfolio can sustain genuine emotional range across 47 artifacts. Ships alongside Telemetry, Floor Plan, The Optimization, and The Bug Report as one of the finest artifacts the portfolio contains.


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
**Summary:** All 6 tests passed successfully, confirming the game's state machine functions correctly, a full 30-day playthrough completes without crashes, multiple endings are reachable, and narrative content arrays are properly populated.
**Tests:** 6/6 passed
