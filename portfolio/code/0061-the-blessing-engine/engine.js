const blessings = require('./blessings');

function getCurrentTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

function getCurrentSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

function extractKeywords(input) {
  const normalized = normalizeText(input);
  const words = normalized.split(' ');
  
  const bigrams = [];
  for (let i = 0; i < words.length - 1; i++) {
    bigrams.push(words[i] + ' ' + words[i + 1]);
  }
  
  const trigrams = [];
  for (let i = 0; i < words.length - 2; i++) {
    trigrams.push(words[i] + ' ' + words[i + 1] + ' ' + words[i + 2]);
  }
  
  return [...trigrams, ...bigrams, ...words];
}

function detectType(input) {
  const normalized = normalizeText(input);
  
  const lossPatterns = [
    'loss', 'lost', 'gone', 'missing', 'died', 'death', 'funeral', 'grief',
    'mourning', 'passed away', 'widow', 'orphan', 'bereavement', 'condolences',
    'breakup', 'broke up', 'divorce', 'separated', 'left me', 'over',
    'empty', 'alone', 'abandoned', 'goodbye', 'farewell',
    'scar', 'wound', 'broken', 'shattered', 'destroyed',
    'can\'t find', 'nowhere', 'disappeared', 'vanished'
  ];
  
  const anticipationPatterns = [
    'anticipat', 'waiting', 'dreading', 'nervous', 'anxious', 'worried',
    'about to', 'going to', 'will', 'soon', 'tomorrow',
    'interview', 'test', 'exam', 'presentation', 'performance',
    'first day', 'new job', 'moving', 'starting',
    'before', 'upcoming', 'approaching', 'impending',
    'hope', 'afraid', 'scared', 'fear',
    'ask', 'tell', 'confess', 'reveal',
    'meet', 'call', 'confront',
    'prepare', 'ready', 'brave', 'courage'
  ];
  
  const returnPatterns = [
    'return', 'coming back', 'home', 'back to', 'reunion',
    'arrived', 'arriving', 'visit', 'visiting',
    'returning', 'returned', 'came back',
    'see again', 'reconnect', 'reconnecting',
    'where i started', 'where i began', 'origins',
    'familiar', 'remember when', 'used to'
  ];
  
  let scores = { loss: 0, anticipation: 0, tedium: 0, return: 0 };
  
  lossPatterns.forEach(pattern => {
    if (normalized.includes(pattern)) scores.loss += 3;
  });
  
  anticipationPatterns.forEach(pattern => {
    if (normalized.includes(pattern)) scores.anticipation += 3;
  });
  
  returnPatterns.forEach(pattern => {
    if (normalized.includes(pattern)) scores.return += 3;
  });
  
  const maxScore = Math.max(scores.loss, scores.anticipation, scores.tedium, scores.return);
  if (maxScore === 0) return null;
  
  return Object.keys(scores).find(key => scores[key] === maxScore);
}

function scoreBlessing(blessing, input, timeOfDay, season) {
  let score = 0;
  const inputKeywords = extractKeywords(input);
  const normalizedInput = normalizeText(input);
  
  // Score from keyword matching (highest weight - specific match)
  let keywordMatches = 0;
  blessing.keywords.forEach(keyword => {
    const normalizedKeyword = normalizeText(keyword);
    if (normalizedInput.includes(normalizedKeyword)) {
      keywordMatches += 2;
    }
    inputKeywords.forEach(inputWord => {
      if (inputWord === normalizedKeyword || 
          normalizedKeyword.includes(inputWord) ||
          inputWord.includes(normalizedKeyword)) {
        keywordMatches += 1;
      }
    });
  });
  score += keywordMatches * 3;
  
  // Score from type matching
  const detectedType = detectType(input);
  if (detectedType && blessing.type === detectedType) {
    score += 5;
  }
  
  // Score from time of day matching
  if (blessing.time === timeOfDay) {
    score += 2;
  } else if (blessing.time !== 'anytime') {
    score -= 1;
  }
  
  // Score from season matching
  if (blessing.season === season) {
    score += 2;
  } else if (blessing.season !== 'anytime') {
    score -= 1;
  }
  
  // CRITICAL: Avoidance logic - SUBTRACT score if user mentions what they're avoiding
  // If the user's input contains keywords related to a blessing's avoidance topics,
  // that blessing should score LOWER, not higher.
  if (blessing.avoidance && blessing.avoidance.length > 0) {
    blessing.avoidance.forEach(avoidKeyword => {
      const normalizedAvoid = normalizeText(avoidKeyword);
      if (normalizedInput.includes(normalizedAvoid)) {
        score -= 10; // Strong penalty - this blessing is about what user wants to avoid
      }
      inputKeywords.forEach(inputWord => {
        if (inputWord === normalizedAvoid || 
            normalizedAvoid.includes(inputWord) ||
            inputWord.includes(normalizedAvoid)) {
          score -= 5;
        }
      });
    });
  }
  
  // Small random factor to prevent same blessing every time for same input
  score += Math.random() * 2;
  
  return score;
}

function findBlessing(input) {
  const timeOfDay = getCurrentTimeOfDay();
  const season = getCurrentSeason();
  
  // Score all blessings
  const scored = blessings.map(blessing => ({
    blessing,
    score: scoreBlessing(blessing, input, timeOfDay, season)
  }));
  
  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);
  
  // Get the top scoring blessings (within a small range for variety)
  const topScore = scored[0].score;
  const candidates = scored.filter(s => s.score >= topScore - 3);
  
  // Pick randomly from top candidates
  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  
  return chosen.blessing;
}

function getRandomBlessing() {
  const anytime = blessings.filter(b => 
    b.time === 'anytime' && b.season === 'anytime'
  );
  return anytime[Math.floor(Math.random() * anytime.length)];
}

module.exports = {
  findBlessing,
  getRandomBlessing,
  getCurrentTimeOfDay,
  getCurrentSeason
};
