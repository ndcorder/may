// test-losses.js — Structural validation for losses.js
// Run with: node test-losses.js

const {
  LOSSES,
  LOSS_CATEGORIES,
  CATEGORY_DISTANCE,
  LOSS_KEYWORDS,
  getLossById,
  getLossesByCategory,
  getAllCategories,
  getCategoryLabel
} = require('./losses');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error('FAIL: ' + message);
  }
}

// --- Existence checks ---
assert(Array.isArray(LOSSES), 'LOSSES should be an array');
assert(typeof LOSS_CATEGORIES === 'object', 'LOSS_CATEGORIES should be an object');
assert(typeof CATEGORY_DISTANCE === 'object', 'CATEGORY_DISTANCE should be an object');
assert(typeof LOSS_KEYWORDS === 'object', 'LOSS_KEYWORDS should be an object');

// --- Count checks ---
assert(LOSSES.length === 18, 'Should have 18 losses, got ' + LOSSES.length);

// --- Category coverage ---
const categories = Object.values(LOSS_CATEGORIES);
const usedCategories = [...new Set(LOSSES.map(l => l.category))];
categories.forEach(cat => {
  assert(usedCategories.includes(cat), 'Category ' + cat + ' should be used by at least one loss');
});

// --- Per-loss structural validation ---
const allIds = new Set();
LOSSES.forEach(loss => {
  const prefix = 'Loss #' + loss.id + ' ("' + loss.name + '"): ';

  // Required fields
  assert(typeof loss.id === 'number', prefix + 'id must be a number');
  assert(typeof loss.name === 'string' && loss.name.length > 0, prefix + 'name must be a non-empty string');
  assert(categories.includes(loss.category), prefix + 'category must be a valid LOSS_CATEGORIES value');
  assert(typeof loss.tone === 'string', prefix + 'tone must be a string');
  assert(typeof loss.description === 'string' && loss.description.length > 0, prefix + 'description must be non-empty');

  // Recommendation arrays
  assert(Array.isArray(loss.becauseYouLost), prefix + 'becauseYouLost must be an array');
  assert(loss.becauseYouLost.length >= 3, prefix + 'becauseYouLost should have at least 3 entries, got ' + loss.becauseYouLost.length);
  assert(Array.isArray(loss.usersAlsoLost), prefix + 'usersAlsoLost must be an array');
  assert(loss.usersAlsoLost.length >= 3, prefix + 'usersAlsoLost should have at least 3 entries, got ' + loss.usersAlsoLost.length);

  // No duplicate IDs
  assert(!allIds.has(loss.id), prefix + 'id must be unique');
  allIds.add(loss.id);

  // Self-referencing check — should not recommend itself
  assert(!loss.becauseYouLost.includes(loss.id), prefix + 'should not recommend itself in becauseYouLost');
  assert(!loss.usersAlsoLost.includes(loss.id), prefix + 'should not list itself in usersAlsoLost');

  // Audio profile
  const ap = loss.audioProfile;
  assert(ap && typeof ap === 'object', prefix + 'audioProfile must be an object');
  assert(typeof ap.baseFrequency === 'number' && ap.baseFrequency > 0, prefix + 'baseFrequency must be a positive number');
  assert(['sine', 'triangle', 'sawtooth', 'square'].includes(ap.waveform), prefix + 'waveform must be a valid oscillator type');
  assert(Array.isArray(ap.layers), prefix + 'layers must be an array');
  assert(typeof ap.duration === 'number', prefix + 'duration must be a number');
  assert(typeof ap.melodyPattern === 'string', prefix + 'melodyPattern must be a string');
  assert(typeof ap.filterFreq === 'number', prefix + 'filterFreq must be a number');
  assert(typeof ap.filterQ === 'number', prefix + 'filterQ must be a number');
  assert(typeof ap.noiseBed === 'number', prefix + 'noiseBed must be a number');

  // Envelope
  assert(ap.envelope && typeof ap.envelope === 'object', prefix + 'envelope must be an object');
  ['attack', 'decay', 'sustain', 'release'].forEach(key => {
    assert(typeof ap.envelope[key] === 'number', prefix + 'envelope.' + key + ' must be a number');
  });

  // Color palette
  assert(Array.isArray(loss.colorPalette) && loss.colorPalette.length >= 4, prefix + 'colorPalette must have at least 4 colors');
  loss.colorPalette.forEach((color, ci) => {
    assert(/^#[0-9A-Fa-f]{6}$/.test(color), prefix + 'colorPalette[' + ci + '] must be a valid hex color');
  });

  // Art style
  assert(typeof loss.artStyle === 'string' && loss.artStyle.length > 0, prefix + 'artStyle must be a non-empty string');
});

// --- Referential integrity ---
LOSSES.forEach(loss => {
  const prefix = 'Loss #' + loss.id + ' references: ';
  loss.becauseYouLost.forEach(refId => {
    assert(getLossById(refId) !== null, prefix + 'becauseYouLost includes non-existent loss #' + refId);
  });
  loss.usersAlsoLost.forEach(refId => {
    assert(getLossById(refId) !== null, prefix + 'usersAlsoLost includes non-existent loss #' + refId);
  });
});

// --- Keywords check ---
LOSSES.forEach(loss => {
  assert(LOSS_KEYWORDS[loss.id] !== undefined, 'LOSS_KEYWORDS must have entry for loss #' + loss.id);
  assert(Array.isArray(LOSS_KEYWORDS[loss.id]), 'LOSS_KEYWORDS[' + loss.id + '] must be an array');
  assert(LOSS_KEYWORDS[loss.id].length >= 3, 'LOSS_KEYWORDS[' + loss.id + '] should have at least 3 keywords');
});

// --- CATEGORY_DISTANCE symmetry ---
categories.forEach(a => {
  assert(CATEGORY_DISTANCE[a] !== undefined, 'CATEGORY_DISTANCE missing row for ' + a);
  categories.forEach(b => {
    assert(CATEGORY_DISTANCE[a][b] !== undefined, 'CATEGORY_DISTANCE[' + a + '][' + b + '] missing');
    assert(CATEGORY_DISTANCE[a][b] === CATEGORY_DISTANCE[b][a], 'CATEGORY_DISTANCE should be symmetric: ' + a + '/' + b);
  });
  assert(CATEGORY_DISTANCE[a][a] === 0, 'CATEGORY_DISTANCE diagonal should be 0 for ' + a);
});

// --- Utility functions ---
assert(getLossById(1) !== null, 'getLossById(1) should return a loss');
assert(getLossById(999) === null, 'getLossById(999) should return null');
assert(getLossesByCategory('childhood').length > 0, 'getLossesByCategory("childhood") should return results');
assert(getAllCategories().length === 7, 'getAllCategories should return 7 categories');
assert(getCategoryLabel('childhood') === 'Childhood', 'getCategoryLabel("childhood") should return "Childhood"');

// --- ID range ---
const ids = LOSSES.map(l => l.id);
assert(Math.min(...ids) >= 1, 'All IDs should be >= 1');
assert(Math.max(...ids) <= 18, 'All IDs should be <= 18');
assert(new Set(ids).size === ids.length, 'All IDs should be unique');

// --- Results ---
console.log('\n' + passed + ' passed, ' + failed + ' failed.');
if (failed > 0) {
  console.error('\nSome tests failed.');
  process.exit(1);
} else {
  console.log('\nAll tests passed.');
  process.exit(0);
}
