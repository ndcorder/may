const levels = require("./levels");

/**
 * Rejection messages for low-quality observations.
 */
const REJECTION_MESSAGES = [
  "That's too vague. What specifically did you notice about them?",
  "Try again — but this time, describe something you actually saw them do or be.",
  "That could apply to anyone. What makes this true for THEM, specifically?",
  "Nope. Dig deeper. What's the real thing you noticed?",
  "Too generic. A compliment compiler isn't a flattery engine. Give me something real.",
];

/**
 * Generic adjectives that fail the specificity check on their own.
 * Contextual uses pass — "she has a nice way of cornering arguments" has specificity
 * beyond the adjective, but "she's nice" does not.
 */
const GENERIC_WORDS = new Set([
  "nice",
  "good",
  "great",
  "awesome",
  "amazing",
  "cool",
  "sweet",
  "kind",
  "smart",
  "funny",
  "beautiful",
  "pretty",
  "wonderful",
  "fantastic",
  "brilliant",
  "lovely",
  "perfect",
  "fine",
  "okay",
  "neat",
  "fun",
]);

/**
 * Multi-word generic phrases that fail even with intensifiers.
 */
const GENERIC_PHRASES = [
  "a good person",
  "a nice person",
  "a good friend",
];

/**
 * Intensifiers to strip before checking specificity.
 */
const INTENSIFIERS = [
  "really",
  "very",
  "so",
  "incredibly",
  "super",
  "extremely",
  "totally",
  "absolutely",
  "quite",
];

/**
 * Normalize: lowercase, collapse whitespace, strip trailing punctuation.
 */
function normalize(observation) {
  let s = observation.trim().toLowerCase();
  s = s.replace(/\s+/g, " ");
  s = s.replace(/[.!]+$/, "");
  return s;
}

/**
 * Strip intensifiers for the specificity check.
 */
function stripIntensifiers(text) {
  let s = text;
  for (const word of INTENSIFIERS) {
    const re = new RegExp("\\b" + word + "\\b", "g");
    s = s.replace(re, "");
  }
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Specificity heuristic:
 *  - Reject if the stripped text is purely generic adjectives
 *  - Accept if it contains structural specificity ("how you X", "the way you X")
 *  - Accept if it contains substantive words (5+ chars, non-generic)
 */
function isSpecific(normalized) {
  // Structural specificity markers — always pass
  if (/how you |the way you |when you |what you |how they |the way they |when they |what they /i.test(normalized)) {
    return true;
  }

  const stripped = stripIntensifiers(normalized);

  // Too short after stripping
  if (stripped.length < 10) {
    return false;
  }

  // Check against generic multi-word phrases
  if (GENERIC_PHRASES.some((p) => stripped === p)) {
    return false;
  }

  // Strip common sentence starters for the word check
  const forChecking = stripped
    .replace(/\b(you're|you are|they're|they are|she's|she is|he's|he is)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Extract remaining words
  const words = forChecking.split(/\s+/).filter((w) => w.length > 0);

  // If ALL remaining words are generic, reject
  const nonGenericWords = words.filter((w) => !GENERIC_WORDS.has(w));
  if (nonGenericWords.length === 0) {
    return false;
  }

  // Check for at least one word of substance (5+ chars, non-generic)
  const hasSubstantiveWord = nonGenericWords.some((w) => w.length >= 5);
  if (hasSubstantiveWord) {
    return true;
  }

  // Short non-generic words exist (e.g., "warm", "calm", "bold")
  // Accept if there are at least 2 non-generic words
  if (nonGenericWords.length >= 2) {
    return true;
  }

  // Single short non-generic word — borderline, reject
  return false;
}

/**
 * Transform the raw observation into structured parts for templates.
 *
 * predicate: short adjective phrase ("incredibly patient")
 * phrase:    the full observation, cleaned for direct embedding
 * action:    extracted verb phrase ("listen without interrupting")
 */
function deriveParts(raw) {
  const cleaned = raw.trim().replace(/\s+/g, " ");
  const phrase = cleaned.replace(/^[.,;:\s]+/, "").replace(/[.,;:\s]+$/, "");

  // Attempt to extract an action phrase from common patterns
  let action = phrase;

  const wayMatch = phrase.match(/the way you (.+?)(?:\.|$)/i);
  if (wayMatch) {
    action = wayMatch[1].trim();
  }

  const howMatch = phrase.match(/how you (.+?)(?:\.|$)/i);
  if (howMatch) {
    action = howMatch[1].trim();
  }

  const whenMatch = phrase.match(/when you (.+?)(?:\.|$)/i);
  if (whenMatch) {
    action = whenMatch[1].trim();
  }

  // Derive a predicate from the observation
  let predicate = phrase.toLowerCase();

  if (predicate.startsWith("you ")) {
    predicate = predicate.slice(4);
  }

  const areMatch = predicate.match(/(?:you |)are (.+)/i);
  if (areMatch) {
    predicate = areMatch[1].trim();
  }

  return {
    predicate: predicate.replace(/\.$/, ""),
    phrase: phrase.replace(/\.$/, ""),
    action: action.replace(/\.$/, ""),
  };
}

/**
 * Validate the raw observation.
 * @returns {string|null} Rejection message if invalid, null if valid.
 */
function validate(rawObservation) {
  if (!rawObservation || rawObservation.trim().length === 0) {
    return "You didn't write anything. What did you observe about them?";
  }

  const normalized = normalize(rawObservation);

  if (normalized.length < 5) {
    return "That's too short. Tell me something you actually noticed.";
  }

  if (!isSpecific(normalized)) {
    const idx = Math.floor(Math.random() * REJECTION_MESSAGES.length);
    return REJECTION_MESSAGES[idx];
  }

  return null;
}

/**
 * Compile the observation into 7 levels.
 *
 * @param {string} name         - The recipient's name
 * @param {string} observation  - The raw observation text
 * @returns {Array<{level: number, voice: string, text: string}>}
 */
function compile(name, observation) {
  const parts = deriveParts(observation);

  return levels.map((def, i) => {
    const template = def.templates[def.pick];
    const text = template(parts, name);
    return {
      level: i + 1,
      voice: def.voice,
      text,
    };
  });
}

module.exports = { compile, validate, deriveParts, isSpecific };
