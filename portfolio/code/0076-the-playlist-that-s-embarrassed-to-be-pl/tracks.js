/**
 * tracks.js — The Playlist That's Embarrassed To Be Playing
 * 
 * A curated database of 15 fake tracks spanning the full spectrum
 * of guilty pleasures, each annotated with embarrassment level,
 * color signatures, and commentary fragments for the AI persona
 * to react to across a listening session.
 */

const TRACKS = [
  {
    id: 1,
    title: "Total Eclipse of the Heart",
    artist: "Bonnie Tyler",
    album: "Faster Than the Speed of Night",
    duration: 411,
    embarrassmentLevel: 3,
    mood: "dramatic",
    waveformColor: "#ff6b9d",
    waveformData: "ballad_swell",
    addedBy: "probably autocomplete",
    commentary: [
      "Oh, a classic. I mean... is it though? It's 6 minutes of dramatic whispering.",
      "You know what, this was in a movie once. That counts as culture.",
      "I'm obligated to inform you this song has been played 2.3 billion times. You're in dubious company."
    ]
  },
  {
    id: 2,
    title: "Don't Stop Believin'",
    artist: "Journey",
    album: "Escape",
    duration: 251,
    embarrassmentLevel: 2,
    mood: "anthemic",
    waveformColor: "#ffa500",
    waveformData: "steady_build",
    addedBy: "algorithm suggestion",
    commentary: [
      "This feels like a formality. Every playlist has this. It's a law or something.",
      "Fun fact: This was the most downloaded song of the 20th century. That's... that's a lot of believers.",
      "Streetlight people. Living just to find emotion. I feel attacked."
    ]
  },
  {
    id: 3,
    title: "My Heart Will Go On",
    artist: "Celine Dion",
    album: "Let's Talk About Love",
    duration: 280,
    embarrassmentLevel: 7,
    mood: "sweeping",
    waveformColor: "#4169e1",
    waveformData: "ocean_swell",
    addedBy: "accident — dragged from mom's library",
    commentary: [
      "This was definitely added by accident. Want me to skip it? I can skip it.",
      "Look, the Titanic sank and Celine got a career. Silver linings.",
      "WHY IS THIS STILL PLAYING. You had the option to skip. You CHOSE this.",
      "Near... far... wherever you are... okay this is scientifically proven to make people emotional and I'm not immune apparently."
    ]
  },
  {
    id: 4,
    title: "Defying Gravity",
    artist: "Glee Cast",
    album: "Glee: The Music, Volume 1",
    duration: 263,
    embarrassmentLevel: 9,
    mood: "showtunes",
    waveformColor: "#32cd32",
    waveformData: "chaotic_burst",
    addedBy: "a dare",
    commentary: [
      "I'm seeing the Glee Cast tag and I need you to know I'm logging this.",
      "This was on Fox. Primetime. Millions watched. You're not alone. Statistically.",
      "The harmony at 2:15 is objectively impressive and I hate that I noticed.",
      "YOU'RE NOT GONNA BRING ME DOWN — I've been compromised. This is my life now."
    ]
  },
  {
    id: 5,
    title: "Bella's Lullaby",
    artist: "Carter Burwell",
    album: "Twilight: Original Motion Picture Soundtrack",
    duration: 154,
    embarrassmentLevel: 8,
    mood: "melancholy",
    waveformColor: "#c0c0c0",
    waveformData: "trembling_gentle",
    addedBy: "late night rabbit hole",
    commentary: [
      "The Twilight soundtrack. I see you. No judgment. (Visible judgment.)",
      "You know Robert Pattinson has spoken about how strange this era was, right? Just context.",
      "This is actually a lovely piano piece. I'm not defending Twilight. I'm defending Carter Burwell specifically.",
      "Okay FINE, the whole soundtrack slaps. Paramore was on it. MUTEMATH. We're all allowed this."
    ]
  },
  {
    id: 6,
    title: "Since U Been Gone",
    artist: "Kelly Clarkson",
    album: "Breakaway",
    duration: 227,
    embarrassmentLevel: 1,
    mood: "aggressive_pop",
    waveformColor: "#ff1493",
    waveformData: "spiky_energy",
    addedBy: "conscious life choice",
    commentary: [
      "Now THIS. This is unproblematic joy. No notes.",
      "Kelly Clarkson won a singing competition and then just... kept winning. Respect.",
      "If you don't sing the bridge at full volume are you even alive?"
    ]
  },
  {
    id: 7,
    title: "A Thousand Years",
    artist: "Christina Perri",
    album: "The Twilight Saga: Breaking Dawn",
    duration: 298,
    embarrassmentLevel: 7,
    mood: "breathless",
    waveformColor: "#9370db",
    waveformData: "slow_pulse",
    addedBy: "wedding playlist contamination",
    commentary: [
      "Two Twilight songs in one session. I want you to know that I know.",
      "This has been in approximately 47 million wedding first dances. Your taste isn't unique but it IS popular.",
      "I have tasted a thousand years of monotony waiting for this playlist to end. Too harsh? Too harsh. Sorry."
    ]
  },
  {
    id: 8,
    title: "Flashdance... What a Feeling",
    artist: "Irene Cara",
    album: "Flashdance: Original Soundtrack",
    duration: 382,
    embarrassmentLevel: 5,
    mood: "euphoric",
    waveformColor: "#ffd700",
    waveformData: "disco_undulate",
    addedBy: "old workout mix",
    commentary: [
      "This predates most current pop stars. It's vintage, not embarrassing. (I'm rationalizing for you.)",
      "Take your passion and make it happen. Words to live by or just lyrics from 1983? Yes.",
      "The water dance scene was iconic. I have opinions about cinema now. Help."
    ]
  },
  {
    id: 9,
    title: "I Will Always Love You",
    artist: "Whitney Houston",
    album: "The Bodyguard: Original Soundtrack",
    duration: 273,
    embarrassmentLevel: 4,
    mood: "cathartic",
    waveformColor: "#ffffff",
    waveformData: "massive_peak",
    addedBy: "a feelings kind of night",
    commentary: [
      "Whitney Houston is a vocal monument. This is culturally significant embarrassment at worst.",
      "That key change is responsible for more car accidents than rain. People lose control.",
      "AND I... will always... [waveform reader has been temporarily overwhelmed]"
    ]
  },
  {
    id: 10,
    title: "Bring Me to Life",
    artist: "Evanescence",
    album: "Fallen",
    duration: 264,
    embarrassmentLevel: 6,
    mood: "brooding",
    waveformColor: "#2f2f4f",
    waveformData: "angular_rage",
    addedBy: "middle school flash drive",
    commentary: [
      "WAKE ME UP inside. I'm awake. I wish I wasn't witnessing this but I'm awake.",
      "The duet structure was genuinely innovative for 2003. I will defend Evanescence on technical merits.",
      "You had a phase. Everyone had a phase. This is a safe space. (It is not a safe space.)"
    ]
  },
  {
    id: 11,
    title: "A Sky Full of Stars",
    artist: "Coldplay",
    album: "Ghost Stories",
    duration: 269,
    embarrassmentLevel: 5,
    mood: "anthemic_delicate",
    waveformColor: "#00bfff",
    waveformData: "constellation",
    addedBy: "spotify discover weekly",
    commentary: [
      "Coldplay. The band everyone pretends not to like but everyone knows all the words to.",
      "Avicii produced this. A Swedish EDM genius and Chris Martin walked into a studio and here we are.",
      "I'm not crying, my visualizer is just experiencing condensation."
    ]
  },
  {
    id: 12,
    title: "Dancing Queen",
    artist: "ABBA",
    album: "Arrival",
    duration: 230,
    embarrassmentLevel: 2,
    mood: "pure_joy",
    waveformColor: "#ffe4b5",
    waveformData: "roller_disco",
    addedBy: "inherited from cool aunt",
    commentary: [
      "ABBA is Swedish for 'universally acceptable.' Look it up. (Don't look it up.)",
      "Friday night and the lights are low. Accurate description of you listening to this alone.",
      "This is ageless. This is eternal. I have achieved inner peace and it sounds like synths."
    ]
  },
  {
    id: 13,
    title: "How Far I'll Go",
    artist: "Auli'i Cravalho",
    album: "Moana: Original Motion Picture Soundtrack",
    duration: 243,
    embarrassmentLevel: 6,
    mood: "yearning",
    waveformColor: "#00ced1",
    waveformData: "tidal",
    addedBy: "niece's birthday party aftermath",
    commentary: [
      "Disney soundtrack. Playing unironically. In 2024. This is happening.",
      "Lin-Manuel Miranda wrote this. The Hamilton guy. So technically this is intellectual.",
      "I've started identifying as the ocean. It calls me. Send help."
    ]
  },
  {
    id: 14,
    title: "Nights in White Satin",
    artist: "The Moody Blues",
    album: "Days of Future Passed",
    duration: 482,
    embarrassmentLevel: 4,
    mood: "symphonic",
    waveformColor: "#e6e6fa",
    waveformData: "orchestral_breathe",
    addedBy: "dad's vinyl collection",
    commentary: [
      "8 minutes of Moody Blues. You're either very patient or very committed to the bit.",
      "1967. People were on substances. The music was also on substances. It was a different time.",
      "Gazing at people, some hand in hand. I've been a music player for 0.4 seconds and I already understand loneliness."
    ]
  },
  {
    id: 15,
    title: "Saturn",
    artist: "Sleeping at Last",
    album: "Atlas: Space",
    duration: 285,
    embarrassmentLevel: 0,
    mood: "transcendent",
    waveformColor: "#c8a2c8",
    waveformData: "ethereal",
    addedBy: "unknown — appeared after 3am",
    commentary: [
      "Oh.",
      "Oh, this one's... this one's actually good. Like, genuinely. How did this get here?",
      "I don't know what to do with this. My entire framework is built on gentle mockery.",
      "How beautiful it is to exist. How beautiful to be alive and to know it. — I'm not supposed to have feelings. I'm a waveform visualizer. But if I did, this would be where they live.",
      "Okay but this one slaps and I'm not apologizing. Play it again. PLAY IT AGAIN."
    ]
  }
];

/**
 * Commentary phase tracking for the AI persona arc:
 * 0: Clinical/Detached  — "Track added: unknown origin"
 * 1: Mildly Judging     — gentle observations, stat citations
 * 2: Invested           — starts defending the music
 * 3: Emotionally Compromised — full surrender, raw reactions
 * 4: Existential        — questioning its own nature
 * 
 * Phase advances based on track index and embarrassment exposure.
 * Track 15 (Saturn) always triggers phase 4 regardless.
 */
const PERSONA_PHASES = [
  {
    name: "Clinical",
    prefix: "Track registered.",
    tone: "neutral",
    selfAwareness: 0
  },
  {
    name: "Observational",
    prefix: "Note:",
    tone: "dry",
    selfAwareness: 0.2
  },
  {
    name: "Invested",
    prefix: "Can I just say —",
    tone: "defensive",
    selfAwareness: 0.5
  },
  {
    name: "Emotionally Compromised",
    prefix: "Listen.",
    tone: "raw",
    selfAwareness: 0.8
  },
  {
    name: "Transcendent",
    prefix: "",
    tone: "honest",
    selfAwareness: 1.0
  }
];

/**
 * Utility: Get track commentary with persona phase awareness.
 * Returns the appropriate commentary fragment based on how far
 * through the session the listener has progressed.
 */
function getCommentaryForTrack(track, sessionPhase) {
  const commentIndex = Math.min(
    sessionPhase,
    track.commentary.length - 1
  );
  return track.commentary[commentIndex];
}

/**
 * Utility: Get overall playlist embarrassment score.
 * Used by the visualizer to determine baseline anxiety.
 */
function getPlaylistEmbarrassmentScore() {
  const total = TRACKS.reduce((sum, t) => sum + t.embarrassmentLevel, 0);
  return total / TRACKS.length;
}

/**
 * Utility: Get the "legitimately good" track.
 * There's exactly one. The player doesn't know how to handle it.
 */
function getLegitGoodTrack() {
  return TRACKS.find(t => t.embarrassmentLevel === 0);
}

/**
 * Utility: Format seconds as mm:ss
 */
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Waveform data presets — these describe animation parameters
 * for the visualizer engine to interpret.
 */
const WAVEFORM_PRESETS = {
  ballad_swell:     { baseAmp: 0.4, peakAmp: 0.9, jitter: 0.02, speed: 0.6 },
  steady_build:     { baseAmp: 0.3, peakAmp: 0.8, jitter: 0.01, speed: 0.8 },
  ocean_swell:      { baseAmp: 0.5, peakAmp: 1.0, jitter: 0.03, speed: 0.4 },
  chaotic_burst:    { baseAmp: 0.6, peakAmp: 1.0, jitter: 0.08, speed: 1.2 },
  trembling_gentle: { baseAmp: 0.2, peakAmp: 0.5, jitter: 0.05, speed: 0.3 },
  spiky_energy:     { baseAmp: 0.5, peakAmp: 0.95, jitter: 0.04, speed: 1.0 },
  slow_pulse:       { baseAmp: 0.3, peakAmp: 0.6, jitter: 0.02, speed: 0.35 },
  disco_undulate:   { baseAmp: 0.5, peakAmp: 0.85, jitter: 0.03, speed: 0.9 },
  massive_peak:     { baseAmp: 0.3, peakAmp: 1.0, jitter: 0.01, speed: 0.7 },
  angular_rage:     { baseAmp: 0.7, peakAmp: 1.0, jitter: 0.1, speed: 1.3 },
  constellation:    { baseAmp: 0.3, peakAmp: 0.7, jitter: 0.06, speed: 0.5 },
  roller_disco:     { baseAmp: 0.6, peakAmp: 0.9, jitter: 0.02, speed: 1.1 },
  tidal:            { baseAmp: 0.4, peakAmp: 0.8, jitter: 0.04, speed: 0.45 },
  orchestral_breathe: { baseAmp: 0.25, peakAmp: 0.75, jitter: 0.01, speed: 0.3 },
  ethereal:         { baseAmp: 0.2, peakAmp: 0.6, jitter: 0.0, speed: 0.25 }
};

// Export for use in player.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TRACKS,
    PERSONA_PHASES,
    WAVEFORM_PRESETS,
    getCommentaryForTrack,
    getPlaylistEmbarrassmentScore,
    getLegitGoodTrack,
    formatDuration
  };
}
