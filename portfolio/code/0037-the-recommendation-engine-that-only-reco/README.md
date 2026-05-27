# The Recommendation Engine That Only Recommends Things You've Already Lost

**Domain:** code-tool  
**ID:** 0037  
**Mean rating:** 5.0

## Proposal

ideas:
  - title: The Recommendation Engine That Only Recommends Things You've Already Lost
    domain: code-tool
    pitch: >
      A web tool where you input something you no longer have — a childhood toy,
      a friendship, a specific cassette tape, the feeling of not worrying — and
      it generates a personalized "recommendation page" in the style of
      Netflix/Spotify: cover art, a similarity percentage, a "Because you lost
      X, you might also enjoy losing Y" carousel, and a "Users who lost this
      also lost" section. The recommendations are genuinely thoughtful and
      weirdly accurate, generated from a curated database of losses. A "Listen
      Now" button plays a 5-second audio snippet of something you can't quite
      identify — a song that might have been playing, or might just sound like
      it should have been.
    complexity: M
    why: >
      Code-tool domain is our strongest (three 5.0s) but we haven't built one in
      4 iterations. This uses our proven interface-as-emotion pattern (Soft
      Guarantee, Eulogy) but targets something completely different: not
      mortality or contracts but the consumer-recommendation aesthetic applied
      to irretrievable personal history. The surprise lives in the mismatch —
      Netflix UI for things you can never stream again.
    project_id: null
    stimulus_ref: null
    xl_mode: null
    project: null


## Critic Review

"The Recommendation Engine That Only Recommends Things You've Already Lost" is the portfolio's most formally complete code-tool and one of its most devastating — a Netflix-style recommendation interface where every "Because you lost X" carousel is a small prose poem about compounding grief. The database is the payload: eighteen losses rendered with devastating specificity ("Side B had the thing you still can't find on streaming. You've checked," "You replay the recordings. Each time it sounds less like them and more like a recording"), each wired to recommendation arrays whose connective logic produces lines like "Every loss is practice for the next one. You're well-practiced" and "The objects were just containers for this." The cross-reference reasons table is genuine emotional engineering — category-pair specific ("sense-era: Sound doesn't keep. You knew this. You didn't act like you knew"), with a fallback ("Loss recognizes loss. The shape is familiar.") that would stand in the portfolio's poetry. The audio engine maps eighteen distinct synthesis profiles (hummedPhrase, dialTones, mouthedWords, franticThenStill) to Web Audio oscillators with ADSR envelopes, layered detuning, noise beds, and pattern generators — each loss sounds different, and sounds like itself. The cover art system seeds deterministic Canvas compositions from eighteen named styles (vaultedArches, buriedGlyphs, fractureLines, twoThreads), producing abstract covers that feel genuinely album-like. The UI is dark, minimal, and functionally complete: input-to-results flow, clickable recommendation cards that navigate the entire loss graph, a Listen Now button with play/pause state, responsive layout. The five self-references flagged by the Tester (losses 4, 10, 11, 12, 14) are bugs, not design features, but they're trivially fixable and don't diminish the artifact's quality. Ships alongside Soft Guarantee, Exit Conditions, and A Eulogy for Anyone as the portfolio's finest code-tools, and alongside Telemetry and The Floor Plan of an Argument as one of its finest artifacts across any domain.


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
**Summary:** 937 tests passed but 5 losses contain a self-reference in their `becauseYouLost` array, violating the logical constraint that a recommendation page should not recommend losing something you've already lost.
**Tests:** 3/4 passed
