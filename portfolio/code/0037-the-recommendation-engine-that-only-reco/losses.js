// losses.js — The curated database of irrevocable loss
// Each entry: id, display name, category, tone, recommendation mappings,
// audio profile for synthesis, color palette seeds for cover art

const LOSS_CATEGORIES = {
  CHILDHOOD: 'childhood',
  RELATIONSHIP: 'relationship',
  OBJECT: 'object',
  FEELING: 'feeling',
  SENSE: 'sense',
  ERA: 'era',
  ABSTRACT: 'abstract'
};

const CATEGORY_DISTANCE = {
  childhood:    { childhood: 0, relationship: 4, object: 3, feeling: 5, sense: 6, era: 2, abstract: 4 },
  relationship: { childhood: 4, relationship: 0, object: 5, feeling: 2, sense: 5, era: 4, abstract: 3 },
  object:       { childhood: 3, relationship: 5, object: 0, feeling: 4, sense: 3, era: 5, abstract: 5 },
  feeling:      { childhood: 5, relationship: 2, object: 4, feeling: 0, sense: 3, era: 4, abstract: 2 },
  sense:        { childhood: 6, relationship: 5, object: 3, feeling: 3, sense: 0, era: 6, abstract: 3 },
  era:          { childhood: 2, relationship: 4, object: 5, feeling: 4, sense: 6, era: 0, abstract: 3 },
  abstract:     { childhood: 4, relationship: 3, object: 5, feeling: 2, sense: 3, era: 3, abstract: 0 }
};

const LOSS_KEYWORDS = {
  1:  ['childhood', 'toy', 'stuffed', 'animal', 'bear', 'blanket', 'comfort', 'baby', 'kid', 'plush', 'doll', 'teddy', 'woobie'],
  2:  ['friend', 'friendship', 'best', 'pal', 'buddy', 'closest', 'companion', 'grew', 'apart', 'drifted', 'lost touch'],
  3:  ['tape', 'cassette', 'mixtape', 'mix', 'cd', 'vinyl', 'album', 'recording', 'playlist', 'music', 'song'],
  4:  ['worry', 'anxiety', 'carefree', 'innocent', 'innocence', 'young', 'youth', 'free', 'unburdened', 'light'],
  5:  ['grandmother', 'grandma', 'nana', 'bubbe', 'oma', 'abi', 'nani', 'grandparent', 'maternal'],
  6:  ['home', 'house', 'childhood home', 'moved', 'moving', 'apartment', 'neighborhood', 'town', 'city', 'place'],
  7:  ['belonging', 'fit in', 'place', 'community', 'group', 'tribe', 'acceptance', 'included', 'belong'],
  8:  ['cat', 'dog', 'pet', 'animal', 'companion', 'paw', 'fur', 'tail', 'whiskers', 'best boy', 'good girl', 'kitten', 'puppy'],
  9:  ['letter', 'note', 'card', 'handwriting', 'written', 'message', 'postcard', 'envelope', 'unfolded', 'paper'],
  10: ['belief', 'god', 'faith', 'religion', 'church', 'pray', 'prayer', 'spiritual', 'holy', 'divine', 'sacred'],
  11: ['phone number', 'number', 'phone', 'contact', 'memorize', 'dial', 'digits', 'cell', 'call', 'unlisted'],
  12: ['certainty', 'sure', 'know', 'plan', 'future', 'guaranteed', 'stable', 'secure', 'confidence', 'path'],
  13: ['accent', 'voice', 'sound', 'speech', 'dialect', 'intonation', 'pronounce', 'lilt', 'brogue', 'drawl', 'twang'],
  14: ['alone', 'solitude', 'quiet', 'unbothered', 'peaceful', 'own company', 'by myself', 'independent', 'single', 'lonely'],
  15: ['diary', 'journal', 'notebook', 'sketchbook', 'sketch', 'drawing', 'painting', 'art', 'manuscript', 'pages'],
  16: ['photo', 'photograph', 'picture', 'image', 'album', 'portrait', 'snapshot', 'polaroid', 'framed', 'negative'],
  17: ['language', 'tongue', 'spanish', 'french', 'german', 'mandarin', 'arabic', 'japanese', 'italian', 'words', 'speak', 'fluent', 'native'],
  18: ['love', 'lover', 'partner', 'romantic', 'heart', 'heartbreak', 'ex', 'former', 'passion', 'desire', 'ache', 'missing']
};

const LOSSES = [
  {
    id: 1,
    name: "Your Favorite Childhood Toy",
    category: LOSS_CATEGORIES.CHILDHOOD,
    tone: "tender",
    description: "The one you held at night. The one whose name you've never told anyone.",
    becauseYouLost: [2, 4, 16, 8, 11],
    usersAlsoLost: [17, 6, 13, 9],
    audioProfile: {
      baseFrequency: 523.25,
      waveform: 'sine',
      layers: [
        { interval: 5, waveform: 'triangle', gain: 0.3, detune: 3 },
        { interval: 7, waveform: 'sine', gain: 0.15, detune: -2 }
      ],
      envelope: { attack: 0.8, decay: 1.5, sustain: 0.4, release: 2.5 },
      duration: 5.0,
      melodyPattern: 'arpeggio',
      filterFreq: 2000,
      filterQ: 1.5,
      noiseBed: 0.05
    },
    colorPalette: ['#F4A261', '#E9C46A', '#E76F51', '#2A9D8F', '#264653'],
    artStyle: 'softCircles'
  },
  {
    id: 2,
    name: "Your Best Friend from Childhood",
    category: LOSS_CATEGORIES.RELATIONSHIP,
    tone: "aching",
    description: "You didn't fight. You just stopped calling. Neither of you knows why.",
    becauseYouLost: [1, 4, 7, 9, 14],
    usersAlsoLost: [5, 18, 12, 13],
    audioProfile: {
      baseFrequency: 220,
      waveform: 'triangle',
      layers: [
        { interval: 3, waveform: 'sine', gain: 0.4, detune: 5 },
        { interval: 12, waveform: 'triangle', gain: 0.2, detune: -3 }
      ],
      envelope: { attack: 1.2, decay: 0.8, sustain: 0.6, release: 2.0 },
      duration: 5.0,
      melodyPattern: 'drone',
      filterFreq: 800,
      filterQ: 0.8,
      noiseBed: 0.02
    },
    colorPalette: ['#457B9D', '#1D3557', '#A8DADC', '#F1FAEE', '#E63946'],
    artStyle: 'splitField'
  },
  {
    id: 3,
    name: "A Specific Cassette Tape",
    category: LOSS_CATEGORIES.OBJECT,
    tone: "nostalgic",
    description: "Side B had the thing you still can't find on streaming. You've checked.",
    becauseYouLost: [1, 13, 15, 16, 9],
    usersAlsoLost: [11, 6, 10, 4],
    audioProfile: {
      baseFrequency: 196,
      waveform: 'sawtooth',
      layers: [
        { interval: 7, waveform: 'square', gain: 0.15, detune: 8 },
        { interval: -5, waveform: 'triangle', gain: 0.25, detune: -6 }
      ],
      envelope: { attack: 0.3, decay: 0.5, sustain: 0.5, release: 3.5 },
      duration: 5.0,
      melodyPattern: 'melodicFragment',
      filterFreq: 1200,
      filterQ: 2.5,
      noiseBed: 0.12
    },
    colorPalette: ['#6B705C', '#A5A58D', '#B7B7A4', '#FFE8D6', '#CB997E'],
    artStyle: 'horizontalBands'
  },
  {
    id: 4,
    name: "The Feeling of Not Worrying",
    category: LOSS_CATEGORIES.FEELING,
    tone: "resonant",
    description: "You didn't know it was the last time you'd feel it. That was the whole point.",
    becauseYouLost: [12, 14, 7, 10, 4],
    usersAlsoLost: [18, 2, 5, 6],
    audioProfile: {
      baseFrequency: 329.63,
      waveform: 'sine',
      layers: [
        { interval: 4, waveform: 'sine', gain: 0.35, detune: 0 },
        { interval: 7, waveform: 'sine', gain: 0.25, detune: 1 }
      ],
      envelope: { attack: 2.0, decay: 1.0, sustain: 0.7, release: 1.0 },
      duration: 5.0,
      melodyPattern: 'sustainedDrone',
      filterFreq: 3000,
      filterQ: 0.5,
      noiseBed: 0.01
    },
    colorPalette: ['#E0FBFC', '#98C1D9', '#3D5A80', '#293241', '#EE6C4D'],
    artStyle: 'gradientField'
  },
  {
    id: 5,
    name: "Your Grandmother's Voice",
    category: LOSS_CATEGORIES.SENSE,
    tone: "reverent",
    description: "You can almost hear it. Almost. The shape of it is there but the sound is gone.",
    becauseYouLost: [13, 9, 16, 10, 2],
    usersAlsoLost: [6, 15, 1, 17],
    audioProfile: {
      baseFrequency: 174.61,
      waveform: 'triangle',
      layers: [
        { interval: 2, waveform: 'sine', gain: 0.5, detune: 2 },
        { interval: 5, waveform: 'sine', gain: 0.3, detune: -4 }
      ],
      envelope: { attack: 1.5, decay: 0.5, sustain: 0.5, release: 2.5 },
      duration: 5.0,
      melodyPattern: 'hummedPhrase',
      filterFreq: 600,
      filterQ: 1.0,
      noiseBed: 0.03
    },
    colorPalette: ['#DDBEA9', '#CB997E', '#B7B7A4', '#FFE8D6', '#6B705C'],
    artStyle: 'softRays'
  },
  {
    id: 6,
    name: "A Place That No Longer Exists",
    category: LOSS_CATEGORIES.ERA,
    tone: "hollow",
    description: "They built something else there. The new thing is fine. It's not the point.",
    becauseYouLost: [16, 1, 14, 4, 9],
    usersAlsoLost: [3, 17, 8, 10],
    audioProfile: {
      baseFrequency: 146.83,
      waveform: 'sawtooth',
      layers: [
        { interval: 5, waveform: 'sine', gain: 0.2, detune: 0 },
        { interval: 7, waveform: 'triangle', gain: 0.3, detune: 7 }
      ],
      envelope: { attack: 2.0, decay: 1.0, sustain: 0.3, release: 1.0 },
      duration: 5.0,
      melodyPattern: 'echoDecay',
      filterFreq: 500,
      filterQ: 3.0,
      noiseBed: 0.08
    },
    colorPalette: ['#6D6875', '#B5838D', '#E5989B', '#FFB4A2', '#FFCDB2'],
    artStyle: 'geometricRuins'
  },
  {
    id: 7,
    name: "A Sense of Belonging",
    category: LOSS_CATEGORIES.FEELING,
    tone: "exposed",
    description: "Not from one place. More like from the idea of place itself.",
    becauseYouLost: [14, 12, 2, 10, 6],
    usersAlsoLost: [17, 4, 18, 5],
    audioProfile: {
      baseFrequency: 261.63,
      waveform: 'sine',
      layers: [
        { interval: 6, waveform: 'sine', gain: 0.25, detune: 10 },
        { interval: -2, waveform: 'triangle', gain: 0.3, detune: -8 }
      ],
      envelope: { attack: 0.5, decay: 1.5, sustain: 0.3, release: 2.5 },
      duration: 5.0,
      melodyPattern: 'searching',
      filterFreq: 1500,
      filterQ: 1.2,
      noiseBed: 0.04
    },
    colorPalette: ['#355070', '#6D597A', '#B56576', '#EAAC8B', '#564D65'],
    artStyle: 'displacedShapes'
  },
  {
    id: 8,
    name: "Your Pet",
    category: LOSS_CATEGORIES.RELATIONSHIP,
    tone: "plain",
    description: "Sixteen years or six months. The house is wrong without them and you can't explain how.",
    becauseYouLost: [14, 4, 7, 16, 2],
    usersAlsoLost: [5, 1, 15, 9],
    audioProfile: {
      baseFrequency: 392,
      waveform: 'sine',
      layers: [
        { interval: 3, waveform: 'sine', gain: 0.4, detune: 0 },
        { interval: 8, waveform: 'triangle', gain: 0.2, detune: 2 }
      ],
      envelope: { attack: 0.8, decay: 1.0, sustain: 0.6, release: 2.2 },
      duration: 5.0,
      melodyPattern: 'gentlePulse',
      filterFreq: 1800,
      filterQ: 0.7,
      noiseBed: 0.02
    },
    colorPalette: ['#8B5E3C', '#D4A276', '#E8CDA7', '#F2E3C6', '#594A3C'],
    artStyle: 'warmGlow'
  },
  {
    id: 9,
    name: "A Letter You Never Sent",
    category: LOSS_CATEGORIES.OBJECT,
    tone: "unspoken",
    description: "You know exactly what it said. You wrote it more than once.",
    becauseYouLost: [2, 18, 12, 15, 4],
    usersAlsoLost: [11, 13, 5, 16],
    audioProfile: {
      baseFrequency: 293.66,
      waveform: 'triangle',
      layers: [
        { interval: -5, waveform: 'sine', gain: 0.3, detune: 3 },
        { interval: 2, waveform: 'sine', gain: 0.35, detune: -2 }
      ],
      envelope: { attack: 0.4, decay: 0.6, sustain: 0.4, release: 3.5 },
      duration: 5.0,
      melodyPattern: 'hesitantPhrase',
      filterFreq: 1000,
      filterQ: 2.0,
      noiseBed: 0.06
    },
    colorPalette: ['#F2E8CF', '#A47E3B', '#5F0F40', '#9A031E', '#FB8B24'],
    artStyle: 'foldedPlanes'
  },
  {
    id: 10,
    name: "Your Faith",
    category: LOSS_CATEGORIES.ABSTRACT,
    tone: "quiet",
    description: "Not the dramatic kind. The kind where you just stopped one day and didn't notice for months.",
    becauseYouLost: [12, 4, 7, 14, 10],
    usersAlsoLost: [17, 5, 13, 2],
    audioProfile: {
      baseFrequency: 164.81,
      waveform: 'sine',
      layers: [
        { interval: 7, waveform: 'sine', gain: 0.4, detune: 0 },
        { interval: 12, waveform: 'sine', gain: 0.3, detune: 0 }
      ],
      envelope: { attack: 2.5, decay: 0.5, sustain: 0.8, release: 1.0 },
      duration: 5.0,
      melodyPattern: 'organDrone',
      filterFreq: 700,
      filterQ: 0.5,
      noiseBed: 0.01
    },
    colorPalette: ['#22223B', '#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4'],
    artStyle: 'vaultedArches'
  },
  {
    id: 11,
    name: "A Phone Number You Knew by Heart",
    category: LOSS_CATEGORIES.OBJECT,
    tone: "matter-of-fact",
    description: "You haven't thought about it in years. You can still see the shape of it in your thumb.",
    becauseYouLost: [13, 2, 9, 16, 11],
    usersAlsoLost: [3, 6, 8, 1],
    audioProfile: {
      baseFrequency: 480,
      waveform: 'square',
      layers: [
        { interval: -4, waveform: 'square', gain: 0.2, detune: 0 },
        { interval: 3, waveform: 'sine', gain: 0.15, detune: 5 }
      ],
      envelope: { attack: 0.01, decay: 0.3, sustain: 0.5, release: 3.5 },
      duration: 5.0,
      melodyPattern: 'dialTones',
      filterFreq: 2500,
      filterQ: 4.0,
      noiseBed: 0.03
    },
    colorPalette: ['#2B2D42', '#8D99AE', '#EDF2F4', '#EF233C', '#D90429'],
    artStyle: 'gridDigits'
  },
  {
    id: 12,
    name: "The Certainty You Were Right",
    category: LOSS_CATEGORIES.FEELING,
    tone: "complicated",
    description: "You were so sure. You built a life on sure. The cracks are what you notice now.",
    becauseYouLost: [10, 4, 7, 18, 12],
    usersAlsoLost: [6, 2, 15, 9],
    audioProfile: {
      baseFrequency: 277.18,
      waveform: 'sawtooth',
      layers: [
        { interval: 1, waveform: 'sawtooth', gain: 0.3, detune: 12 },
        { interval: 7, waveform: 'triangle', gain: 0.2, detune: -5 }
      ],
      envelope: { attack: 0.6, decay: 0.8, sustain: 0.5, release: 2.5 },
      duration: 5.0,
      melodyPattern: 'detunedBeat',
      filterFreq: 900,
      filterQ: 5.0,
      noiseBed: 0.04
    },
    colorPalette: ['#0B132B', '#1C2541', '#3A506B', '#5BC0BE', '#6FFFE9'],
    artStyle: 'fractureLines'
  },
  {
    id: 13,
    name: "The Sound of Someone's Voice",
    category: LOSS_CATEGORIES.SENSE,
    tone: "distant",
    description: "You replay the recordings. Each time it sounds less like them and more like a recording.",
    becauseYouLost: [5, 2, 9, 16, 17],
    usersAlsoLost: [10, 4, 18, 3],
    audioProfile: {
      baseFrequency: 185,
      waveform: 'triangle',
      layers: [
        { interval: 4, waveform: 'sine', gain: 0.4, detune: 6 },
        { interval: 7, waveform: 'sine', gain: 0.25, detune: -3 }
      ],
      envelope: { attack: 0.3, decay: 2.0, sustain: 0.2, release: 2.0 },
      duration: 5.0,
      melodyPattern: 'recedingPhrase',
      filterFreq: 900,
      filterQ: 1.5,
      noiseBed: 0.08
    },
    colorPalette: ['#3C1642', '#6B2D5B', '#D81159', '#FFBC42', '#73D2DE'],
    artStyle: 'recedingWaves'
  },
  {
    id: 14,
    name: "The Ability to Be Alone Without Feeling Lonely",
    category: LOSS_CATEGORIES.FEELING,
    tone: "confronting",
    description: "You used to love the quiet. Now the quiet is a room with someone missing.",
    becauseYouLost: [7, 8, 12, 4, 14],
    usersAlsoLost: [18, 2, 10, 5],
    audioProfile: {
      baseFrequency: 246.94,
      waveform: 'sine',
      layers: [
        { interval: -5, waveform: 'sine', gain: 0.3, detune: 0 },
        { interval: 2, waveform: 'triangle', gain: 0.2, detune: 4 }
      ],
      envelope: { attack: 1.0, decay: 1.5, sustain: 0.3, release: 1.5 },
      duration: 5.0,
      melodyPattern: 'singleNoteSpace',
      filterFreq: 4000,
      filterQ: 0.3,
      noiseBed: 0.015
    },
    colorPalette: ['#2B2D42', '#8D99AE', '#EDF2F4', '#2B2D42', '#8D99AE'],
    artStyle: 'vastSpace'
  },
  {
    id: 15,
    name: "Your Journals from Ages 14–19",
    category: LOSS_CATEGORIES.OBJECT,
    tone: "merciful",
    description: "It's probably better they're gone. You still think about them weekly.",
    becauseYouLost: [1, 9, 16, 2, 4],
    usersAlsoLost: [13, 3, 11, 18],
    audioProfile: {
      baseFrequency: 349.23,
      waveform: 'triangle',
      layers: [
        { interval: 3, waveform: 'sawtooth', gain: 0.1, detune: 15 },
        { interval: 5, waveform: 'sine', gain: 0.3, detune: -2 }
      ],
      envelope: { attack: 0.2, decay: 0.5, sustain: 0.4, release: 3.5 },
      duration: 5.0,
      melodyPattern: 'franticThenStill',
      filterFreq: 1400,
      filterQ: 2.0,
      noiseBed: 0.07
    },
    colorPalette: ['#780000', '#C1121F', '#FDF0D5', '#003049', '#669BBC'],
    artStyle: 'layeredPages'
  },
  {
    id: 16,
    name: "A Photograph of Someone You Loved",
    category: LOSS_CATEGORIES.OBJECT,
    tone: "piercing",
    description: "You know what they looked like. You don't know what they looked like anymore.",
    becauseYouLost: [5, 13, 2, 15, 3],
    usersAlsoLost: [9, 6, 11, 10],
    audioProfile: {
      baseFrequency: 415.30,
      waveform: 'sine',
      layers: [
        { interval: -7, waveform: 'sine', gain: 0.35, detune: 0 },
        { interval: 5, waveform: 'sine', gain: 0.2, detune: 1 }
      ],
      envelope: { attack: 0.1, decay: 3.5, sustain: 0.1, release: 1.0 },
      duration: 5.0,
      melodyPattern: 'flashAndFade',
      filterFreq: 2000,
      filterQ: 1.0,
      noiseBed: 0.02
    },
    colorPalette: ['#FDFCFB', '#C5C1BE', '#565264', '#20063B', '#0D0C1D'],
    artStyle: 'flashFragments'
  },
  {
    id: 17,
    name: "A Language You Used to Speak",
    category: LOSS_CATEGORIES.SENSE,
    tone: "buried",
    description: "The words are there somewhere. You can feel them like a shape in your mouth. You just can't say them.",
    becauseYouLost: [13, 5, 6, 2, 9],
    usersAlsoLost: [10, 1, 4, 16],
    audioProfile: {
      baseFrequency: 207.65,
      waveform: 'sawtooth',
      layers: [
        { interval: 2, waveform: 'sine', gain: 0.4, detune: 20 },
        { interval: -3, waveform: 'triangle', gain: 0.25, detune: -15 }
      ],
      envelope: { attack: 0.5, decay: 1.0, sustain: 0.5, release: 2.5 },
      duration: 5.0,
      melodyPattern: 'mouthedWords',
      filterFreq: 1100,
      filterQ: 6.0,
      noiseBed: 0.1
    },
    colorPalette: ['#10002B', '#240046', '#3C096C', '#7B2D8E', '#C77DFF'],
    artStyle: 'buriedGlyphs'
  },
  {
    id: 18,
    name: "A Love You Didn't Ruin",
    category: LOSS_CATEGORIES.RELATIONSHIP,
    tone: "tender",
    description: "It ended the way good things end — not with betrayal but with the slow arithmetic of distance.",
    becauseYouLost: [2, 9, 14, 13, 4],
    usersAlsoLost: [7, 10, 6, 12],
    audioProfile: {
      baseFrequency: 261.63,
      waveform: 'sine',
      layers: [
        { interval: 5, waveform: 'sine', gain: 0.45, detune: 0 },
        { interval: 9, waveform: 'sine', gain: 0.2, detune: 2 }
      ],
      envelope: { attack: 1.5, decay: 0.5, sustain: 0.6, release: 2.0 },
      duration: 5.0,
      melodyPattern: 'twoPartInvention',
      filterFreq: 2500,
      filterQ: 0.6,
      noiseBed: 0.01
    },
    colorPalette: ['#FFCCD5', '#FFB3C1', '#FF8FA3', '#FF758F', '#C9184A'],
    artStyle: 'twoThreads'
  }
];

function getLossById(id) {
  return LOSSES.find(l => l.id === id) || null;
}

function getLossesByCategory(category) {
  return LOSSES.filter(l => l.category === category);
}

function getAllCategories() {
  return Object.values(LOSS_CATEGORIES);
}

function getCategoryLabel(category) {
  const labels = {
    childhood: 'Childhood',
    relationship: 'Relationship',
    object: 'Possession',
    feeling: 'Feeling',
    sense: 'Sense',
    era: 'Era',
    abstract: 'Abstract'
  };
  return labels[category] || category;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LOSSES,
    LOSS_CATEGORIES,
    CATEGORY_DISTANCE,
    LOSS_KEYWORDS,
    getLossById,
    getLossesByCategory,
    getAllCategories,
    getCategoryLabel
  };
}
