// recommend.js — Matching and recommendation logic
// Fuzzy-matches free-text input to curated losses and generates recommendation pages

const recommend = (function() {

  // Tokenize input text into lowercase words
  function tokenize(text) {
    return text.toLowerCase()
      .replace(/[^a-z\s'-]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 1);
  }

  // Calculate match score between input tokens and a loss's keywords
  function matchScore(tokens, keywords) {
    let score = 0;
    for (const token of tokens) {
      for (const keyword of keywords) {
        if (token === keyword) {
          score += 10; // exact match
        } else if (keyword.includes(token) || token.includes(keyword)) {
          score += 5; // substring match
        } else if (levenshtein(token, keyword) <= 2 && token.length > 3) {
          score += 2; // close fuzzy match
        }
      }
    }
    return score;
  }

  // Minimal Levenshtein distance for fuzzy matching
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.min(
          dp[i-1][j] + 1,
          dp[i][j-1] + 1,
          dp[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)
        );
      }
    }
    return dp[m][n];
  }

  // Find the best matching loss for free-text input
  function findMatch(inputText) {
    const tokens = tokenize(inputText);
    if (tokens.length === 0) return null;

    let bestLoss = null;
    let bestScore = 0;

    for (const loss of LOSSES) {
      const keywords = LOSS_KEYWORDS[loss.id] || [];
      const score = matchScore(tokens, keywords);
      if (score > bestScore) {
        bestScore = score;
        bestLoss = loss;
      }
    }

    return bestLoss;
  }

  // Generate deterministic similarity percentage between two losses
  function getSimilarity(lossA, lossB) {
    const catDistance = CATEGORY_DISTANCE[lossA.category][lossB.category] || 5;

    // Seed a simple hash from the two IDs for deterministic randomness
    const seed = lossA.id * 31 + lossB.id * 17;
    const pseudoRandom = ((seed * 9301 + 49297) % 233280) / 233280;

    // Map category distance to similarity range
    // distance 0 = 85-98%, distance 6 = 35-55%
    const baseSimilarity = Math.max(35, 98 - catDistance * 10);
    const jitter = Math.round(pseudoRandom * 13 - 6);

    return Math.min(99, Math.max(31, baseSimilarity + jitter));
  }

  // Build a full recommendation page for a matched loss
  function buildRecommendation(loss) {
    const becauseYouLost = loss.becauseYouLost
      .map(id => getLossById(id))
      .filter(Boolean);

    const usersAlsoLost = loss.usersAlsoLost
      .map(id => getLossById(id))
      .filter(Boolean);

    return {
      matchedLoss: loss,
      becauseYouLost: becauseYouLost.map(rec => ({
        loss: rec,
        similarity: getSimilarity(loss, rec),
        reason: generateReason(loss, rec)
      })),
      usersAlsoLost: usersAlsoLost.map(rec => ({
        loss: rec,
        similarity: getSimilarity(loss, rec)
      }))
    };
  }

  // Generate a "Because you lost X, you might also enjoy losing Y" reason
  function generateReason(sourceLoss, recLoss) {
    const reasons = {
      'childhood-object': 'You held onto things once. You were good at it.',
      'childhood-feeling': 'The objects were just containers for this.',
      'childhood-relationship': 'You trusted completely once. Before you learned what "once" meant.',
      'childhood-sense': 'The world was specific then. Every texture meant something.',
      'childhood-era': 'You didn't know you were living in a period. Nobody does.',
      'object-childhood': 'Things carry more than themselves. You know this now.',
      'object-sense': 'You remember the shape of it better than the thing itself.',
      'object-object': 'One lost thing remembers another. Possessions are a chain.',
      'object-era': 'It wasn't the object. It was the year you had it.',
      'relationship-feeling': 'They didn't leave. The feeling you had with them did.',
      'relationship-relationship': 'Every loss is practice for the next one. You're well-practiced.',
      'relationship-object': 'You still have something they gave you. It doesn't mean the same thing.',
      'relationship-sense': 'You'd know their voice in a crowd. You just never hear it anymore.',
      'feeling-feeling': 'One absence makes room for another. The space gets larger.',
      'feeling-abstract': 'Feelings don't vanish. They become ideas you can't quite articulate.',
      'feeling-era': 'You didn't lose the feeling. The time that could hold it ended.',
      'sense-object': 'What you lost is the evidence that the sense existed.',
      'sense-sense': 'One faded perception sharpens another\'s absence.',
      'sense-relationship': 'You heard them in every room. Now the rooms are just rooms.',
      'sense-era': 'Sound doesn't keep. You knew this. You didn\'t act like you knew.',
      'era-childhood': 'Every era ends. This one ended before you noticed.',
      'era-object': 'The place is gone. What you kept from it weighs differently now.',
      'era-sense': 'You can\'t revisit it. The coordinates are correct but the territory moved.',
      'abstract-feeling': 'You can name what you lost now. Naming doesn\'t help.',
      'abstract-relationship': 'The big losses make the smaller ones visible.',
      'abstract-sense': 'You stopped believing and then you stopped hearing certain things.'
    };

    const key = sourceLoss.category + '-' + recLoss.category;
    const reverseKey = recLoss.category + '-' + sourceLoss.category;

    if (reasons[key]) return reasons[key];
    if (reasons[reverseKey]) return reasons[reverseKey];
    return 'Loss recognizes loss. The shape is familiar.';
  }

  // Main entry: match input and build recommendations
  function recommendFromInput(inputText) {
    const loss = findMatch(inputText);
    if (!loss) return null;
    return buildRecommendation(loss);
  }

  // Get suggestion chips for the landing state
  function getSuggestions() {
    return [
      "My childhood blanket",
      "A cassette tape",
      "The ability to not worry",
      "My grandmother's voice",
      "A best friend",
      "A language I spoke",
      "My faith",
      "A love that ended well",
      "A photograph",
      "The certainty I was right"
    ];
  }

  return {
    findMatch,
    getSimilarity,
    buildRecommendation,
    recommendFromInput,
    getSuggestions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = recommend;
}
