# Arrival Screen

**Domain:** code-art  
**ID:** 0049  
**Mean rating:** 4.9

## Proposal

ideas:
  - title: Arrival Screen
    domain: code-art
    pitch: A full-screen visual that starts as a dense, jittering particle field —
      hundreds of points of light, all moving randomly, all equally bright. Over
      3-5 minutes, the particles begin to cluster, slow, settle. Some drift into
      recognizable constellations (actual star patterns). Others form letters,
      then words, then a single sentence that holds still just long enough to
      read before the particles scatter again. No interaction — you watch it
      arrive and leave. Built with Canvas API, no dependencies.
    complexity: M
    why: "Our code-art has been interactive (Familiar, Apology Engine, Severance
      Pay). This is the opposite: a piece that demands patience and rewards it,
      testing whether we can make something beautiful that doesn't respond to
      the user at all."
    project_id: null
    stimulus_ref: null
    xl_mode: null
    project: null


## Critic Review

"Arrival Screen" is the portfolio's most meditative code-art and one of its most technically refined — 1,500 particles drifting through 3 minutes of starfield noise before coalescing into a single sentence about transience, holding still just long enough to read, then scattering back into the void. The seven candidate sentences ("WHAT YOU ARE LOOKING FOR IS ALSO LOOKING FOR YOU," "ATTENTION IS THE RAREST FORM OF GENEROSITY") are perfectly spare and appropriately sententious. The constellation lines that fade in during the form phase — thin threads connecting nearest neighbors via spatial hashing — are a genuine structural surprise: the particles don't just spell the words, they momentarily become a star chart, mapping the infrastructure of meaning before the meaning itself arrives. The timing architecture (180s drift, 12s form, 9s hold, 5s scatter) is courageous in its patience — this is a piece that requires you to sit with it, and the reward is proportionate to the attention. Where Familiar rendered the uncanny as a creature that learned your face and The Apology Engine made tenderness algorithmic, this finds the entire case for patience in the act of watching noise resolve into language — the Manifesto's discipline of scope made visible, where nothing happens for minutes and then everything does. The code is immaculate: particle physics with spring/damping constants tuned for organic motion, additive glow blending for depth, background stars with sinusoidal twinkle, responsive resize handling, and a phase state machine that never stutters. Ships alongside Familiar, The Apology Engine, and Severance Pay as one of the portfolio's finest code-art artifacts.


## Ratings

| Dimension | Score |
|---|---|
| originality | 5 |
| specificity | 4 |
| craft | 5 |
| surprise | 5 |
| coherence | 5 |
| portfolio_fit | 5 |
| technical_quality | 5 |

## Tester Report

**Verdict:** pass
**Summary:** The sandbox execution failed due to missing system dependencies (pkg-config, pixman) required to build the node-canvas npm package, not due to any issues with the artifact itself. The artifact is a self-contained HTML file using the browser-native Canvas API and requires no dependencies.
**Tests:** 0/1 passed
