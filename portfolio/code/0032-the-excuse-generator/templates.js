/**
 * Excuse Component Library
 * 
 * Templates organized by target type and damage tolerance.
 * Each component tagged with truthfulness level:
 *   technically-true — verified or verifiable
 *   embellished — rooted in reality, grown in imagination
 *   fabricated — built from whole cloth
 */

const truthLevels = ['technically-true', 'embellished', 'fabricated'];

// ─── OPENINGS ───────────────────────────────────────────────
// How the excuse begins. First impression matters.

const openings = {
  friend: {
    low: [
      { text: 'Hey, so something came up', truthfulness: 'technically-true' },
      { text: 'I\'m going to have to rain check', truthfulness: 'technically-true' },
      { text: 'Don\'t hate me, but', truthfulness: 'technically-true' },
      { text: 'I know, I know, but listen', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I\'m really sorry, but I can\'t make it', truthfulness: 'technically-true' },
      { text: 'I feel terrible doing this, but', truthfulness: 'technically-true' },
      { text: 'I was literally getting ready and then', truthfulness: 'embellished' },
    ],
    nuclear: [
      { text: 'I wouldn\'t do this unless it was serious', truthfulness: 'embellished' },
      { text: 'I\'m so sorry, something really important came up', truthfulness: 'embellished' },
      { text: 'You\'re going to think I\'m making this up, but', truthfulness: 'technically-true' },
    ],
  },
  boss: {
    low: [
      { text: 'I wanted to let you know I won\'t be able to make it in', truthfulness: 'technically-true' },
      { text: 'I need to take a personal day', truthfulness: 'technically-true' },
      { text: 'Something\'s come up that I need to handle', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I need to take an unexpected absence', truthfulness: 'technically-true' },
      { text: 'I\'m dealing with a situation and won\'t be in today', truthfulness: 'technically-true' },
      { text: 'Apologies for the short notice, but', truthfulness: 'technically-true' },
    ],
    nuclear: [
      { text: 'I need to take some time for a family emergency', truthfulness: 'embellished' },
      { text: 'I have an urgent personal matter to attend to', truthfulness: 'technically-true' },
      { text: 'I\'m writing to request an emergency leave of absence', truthfulness: 'technically-true' },
    ],
  },
  date: {
    low: [
      { text: 'Hey, I\'m really sorry but I need to reschedule', truthfulness: 'technically-true' },
      { text: 'I know this isn\'t ideal, but', truthfulness: 'technically-true' },
      { text: 'I was looking forward to tonight, but', truthfulness: 'embellished' },
    ],
    medium: [
      { text: 'I\'m so bummed to do this, but I have to cancel', truthfulness: 'technically-true' },
      { text: 'Something unavoidable came up', truthfulness: 'technically-true' },
      { text: 'I really wanted to see you, but', truthfulness: 'embellished' },
    ],
    nuclear: [
      { text: 'I\'m going through something right now and I wouldn\'t be good company', truthfulness: 'embellished' },
      { text: 'A situation came up that I can\'t ignore', truthfulness: 'technically-true' },
      { text: 'I owe you an honest explanation', truthfulness: 'technically-true' },
    ],
  },
  parent: {
    low: [
      { text: 'Hey Mom/Dad, I can\'t make it', truthfulness: 'technically-true' },
      { text: 'Something came up, sorry', truthfulness: 'technically-true' },
      { text: 'I need to take a rain check', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I\'m really sorry, but I have to change plans', truthfulness: 'technically-true' },
      { text: 'I was hoping this wouldn\'t happen, but', truthfulness: 'embellished' },
      { text: 'I feel awful doing this again, but', truthfulness: 'technically-true' },
    ],
    nuclear: [
      { text: 'Mom/Dad, something serious happened', truthfulness: 'embellished' },
      { text: 'I need to talk to you about something', truthfulness: 'technically-true' },
      { text: 'I don\'t know how to say this, but', truthfulness: 'technically-true' },
    ],
  },
};

// ─── INCIDENTS ──────────────────────────────────────────────
// The core event. The reason. The lie.

const incidents = {
  friend: {
    low: [
      { text: 'my car won\'t start', truthfulness: 'fabricated', details: { type: 'car_trouble', specifics: ['dead battery', 'won\'t turn over', 'clicking sound'] } },
      { text: 'I double-booked and can\'t get out of the other thing', truthfulness: 'technically-true', details: { type: 'schedule_conflict', specifics: ['prior commitment', 'can\'t reschedule the other thing'] } },
      { text: 'I\'m just really exhausted', truthfulness: 'technically-true', details: { type: 'fatigue', specifics: ['didn\'t sleep well', 'long week', 'barely functioning'] } },
      { text: 'my roommate needs help with something', truthfulness: 'fabricated', details: { type: 'roommate_issue', specifics: ['locked out', 'minor emergency', 'can\'t do it alone'] } },
    ],
    medium: [
      { text: 'I\'ve been dealing with a migraine all day', truthfulness: 'fabricated', details: { type: 'illness', specifics: ['started this morning', 'light sensitivity', 'nausea'], duration: 'all day', severity: 'moderate' } },
      { text: 'my neighbor\'s pipe burst and it\'s flooding into my apartment', truthfulness: 'fabricated', details: { type: 'home_emergency', specifics: ['water damage', 'building manager involved', 'need to be here for plumbers'] } },
      { text: 'I got called into work for an emergency', truthfulness: 'fabricated', details: { type: 'work_emergency', specifics: ['server down', 'can\'t be remote', 'won\'t take long hopefully'] } },
      { text: 'I have a family thing I completely forgot about', truthfulness: 'embellished', details: { type: 'family_obligation', specifics: ['distant relative visiting', 'can\'t skip it', 'mom would kill me'] } },
    ],
    nuclear: [
      { text: 'I have to go to the hospital — nothing serious, but I need to get checked out', truthfulness: 'fabricated', details: { type: 'medical', specifics: ['chest pain', 'turned out to be acid reflux', 'better safe than sorry'], severity: 'concerning but not critical', duration: 'ER wait times' } },
      { text: 'there was a death in the family — not someone close, but I need to be there', truthfulness: 'fabricated', details: { type: 'family_death', specifics: ['great-aunt', 'wasn\'t expected', 'family gathering tonight'], severity: 'somber', duration: 'a few days' } },
      { text: 'I witnessed an accident and I have to stay to give a statement', truthfulness: 'fabricated', details: { type: 'civic_duty', specifics: ['fender bender', 'police need witness', 'could take hours'], severity: 'inconvenient but important' } },
    ],
  },
  boss: {
    low: [
      { text: 'I\'m not feeling well', truthfulness: 'technically-true', details: { type: 'illness', specifics: ['stomach bug', '24-hour thing', 'don\'t want to spread it'] } },
      { text: 'I have a home repair situation', truthfulness: 'embellished', details: { type: 'home_issue', specifics: ['plumbing', 'waiting for repair person', 'can\'t leave unattended'] } },
      { text: 'I have a personal appointment I can\'t reschedule', truthfulness: 'technically-true', details: { type: 'appointment', specifics: ['medical', 'made weeks ago', 'hard to get'] } },
    ],
    medium: [
      { text: 'I have a severe stomach bug', truthfulness: 'embellished', details: { type: 'illness', specifics: ['food poisoning', 'can\'t be far from a bathroom', 'started last night'], duration: '24-48 hours' } },
      { text: 'my child\'s school called and I need to pick them up', truthfulness: 'fabricated', details: { type: 'childcare', specifics: ['fever', 'nurse sent them home', 'can\'t find backup care'], duration: 'rest of day' } },
      { text: 'I had a minor fender bender on the way to work', truthfulness: 'fabricated', details: { type: 'accident', specifics: ['rear-ended', 'waiting for police report', 'car is driveable but shaken up'], duration: 'a few hours' } },
    ],
    nuclear: [
      { text: 'I have a family emergency — my parent was hospitalized', truthfulness: 'fabricated', details: { type: 'family_medical', specifics: ['fell', 'possible concussion', 'I\'m the closest family member'], duration: 'uncertain', severity: 'serious' } },
      { text: 'I have a burst pipe flooding my apartment', truthfulness: 'fabricated', details: { type: 'home_catastrophe', specifics: ['major water damage', 'building condemned the unit temporarily', 'need to salvage belongings'], duration: '1-2 days' } },
      { text: 'I need to take a mental health day', truthfulness: 'technically-true', details: { type: 'mental_health', specifics: ['burnout', 'company policy supports this', 'will be back tomorrow'], duration: 'one day' } },
    ],
  },
  date: {
    low: [
      { text: 'I\'m not feeling great', truthfulness: 'technically-true', details: { type: 'illness', specifics: ['headache', 'probably stress', 'wouldn\'t be fun company'] } },
      { text: 'my friend is going through something and needs me', truthfulness: 'embellished', details: { type: 'friend_emergency', specifics: ['breakup', 'needs to talk', 'can\'t abandon them'] } },
      { text: 'work ran late and I\'m exhausted', truthfulness: 'embellished', details: { type: 'work_fatigue', specifics: ['unexpected deadline', 'just got out', 'running on empty'] } },
    ],
    medium: [
      { text: 'my ex showed up unannounced and I need to deal with this', truthfulness: 'fabricated', details: { type: 'ex_drama', specifics: ['wanting their stuff back', 'emotional', 'need to handle it tonight'] } },
      { text: 'I got food poisoning from lunch', truthfulness: 'fabricated', details: { type: 'illness', specifics: ['bad sushi', 'can\'t stop being sick', 'would not be pretty'], duration: 'tonight only' } },
      { text: 'I have a work crisis that can\'t wait', truthfulness: 'embellished', details: { type: 'work', specifics: ['client emergency', 'only I can handle it', 'probably an hour but can\'t predict'] } },
    ],
    nuclear: [
      { text: 'my apartment got broken into', truthfulness: 'fabricated', details: { type: 'crime', specifics: ['came home to open door', 'police on the way', 'need to wait for them'], duration: 'unknown' } },
      { text: 'I have a family emergency', truthfulness: 'fabricated', details: { type: 'family', specifics: ['can\'t talk about it', 'need to go home', 'nothing life-threatening'], severity: 'private' } },
      { text: 'I was in a minor car accident', truthfulness: 'fabricated', details: { type: 'accident', specifics: ['someone hit me', 'shaken up', 'need to deal with insurance'], duration: 'rest of night' } },
    ],
  },
  parent: {
    low: [
      { text: 'I\'m not feeling well', truthfulness: 'technically-true', details: { type: 'illness', specifics: ['cold coming on', 'probably fine', 'just need rest'] } },
      { text: 'work is crazy right now', truthfulness: 'embellished', details: { type: 'work', specifics: ['short-staffed', 'can\'t leave', 'would if I could'] } },
      { text: 'I have a lot going on', truthfulness: 'technically-true', details: { type: 'vague', specifics: ['behind on everything', 'need a day to catch up', 'you know how it is'] } },
    ],
    medium: [
      { text: 'my friend is having a crisis and asked me to come over', truthfulness: 'fabricated', details: { type: 'friend_emergency', specifics: ['breakup', 'has no one else', 'feels wrong to say no'] } },
      { text: 'I have a work thing I can\'t get out of', truthfulness: 'embellished', details: { type: 'work_mandatory', specifics: ['client dinner', 'mandatory team thing', 'I tried to push back'] } },
      { text: 'my car is having problems', truthfulness: 'fabricated', details: { type: 'car', specifics: ['weird noise', 'don\'t want to drive it far', 'getting it checked tomorrow'] } },
    ],
    nuclear: [
      { text: 'I need to stay home — I\'m dealing with something personal', truthfulness: 'technically-true', details: { type: 'personal', specifics: ['not ready to talk about it', 'need time', 'will explain later'] } },
      { text: 'there\'s a situation with my apartment', truthfulness: 'fabricated', details: { type: 'housing', specifics: ['landlord issue', 'might be evicted', 'need to sort it out today'], severity: 'stressful' } },
      { text: 'I haven\'t been honest about how I\'m doing', truthfulness: 'technically-true', details: { type: 'emotional', specifics: ['been struggling', 'need space', 'not about you'], severity: 'vulnerable' } },
    ],
  },
};

// ─── SUPPORTING DETAILS ─────────────────────────────────────
// Extra flavor to make the excuse land.

const supportingDetails = {
  car_trouble: [
    { text: 'I tried jumping it but nothing', truthfulness: 'fabricated' },
    { text: 'it was making a weird noise yesterday too', truthfulness: 'embellished' },
    { text: 'I think it\'s the alternator — mechanic said it might go', truthfulness: 'fabricated' },
    { text: 'waiting for Triple A', truthfulness: 'fabricated' },
    { text: 'my neighbor is taking a look', truthfulness: 'fabricated' },
  ],
  illness: [
    { text: 'I think it was something I ate', truthfulness: 'embellished' },
    { text: 'I\'ve been in bed since [TIME]', truthfulness: 'fabricated' },
    { text: 'I took something but it hasn\'t kicked in', truthfulness: 'technically-true' },
    { text: 'I was up all night with it', truthfulness: 'embellished' },
    { text: 'I hate cancelling but I really shouldn\'t be around people', truthfulness: 'technically-true' },
    { text: 'I\'m sure I\'ll be fine tomorrow', truthfulness: 'technically-true' },
  ],
  work_emergency: [
    { text: 'they can\'t reach anyone else who knows the system', truthfulness: 'fabricated' },
    { text: 'I tried to say no but it\'s my boss', truthfulness: 'embellished' },
    { text: 'should only take an hour or two', truthfulness: 'fabricated' },
    { text: 'the client is threatening to cancel', truthfulness: 'fabricated' },
    { text: 'I\'ll owe you one — make it up to you [TIMEFRAME]', truthfulness: 'technically-true' },
  ],
  family_emergency: [
    { text: 'everyone\'s okay, just shaken up', truthfulness: 'fabricated' },
    { text: 'I need to be there for [REASON]', truthfulness: 'technically-true' },
    { text: 'I don\'t have all the details yet', truthfulness: 'technically-true' },
    { text: 'it\'s been a long day', truthfulness: 'technically-true' },
    { text: 'I\'ll call you when I know more', truthfulness: 'technically-true' },
  ],
  accident: [
    { text: 'the other driver seems okay, thankfully', truthfulness: 'fabricated' },
    { text: 'traffic was backed up for an hour before it happened', truthfulness: 'embellished' },
    { text: 'the police said I need to stay to file the report', truthfulness: 'fabricated' },
    { text: 'I\'m fine, just shaken up', truthfulness: 'technically-true' },
    { text: 'my car is mostly okay — some dents', truthfulness: 'fabricated' },
  ],
  home_emergency: [
    { text: 'the building manager says it could be a few hours', truthfulness: 'fabricated' },
    { text: 'they\'re sending someone but who knows when they\'ll show up', truthfulness: 'technically-true' },
    { text: 'I need to be here when they arrive', truthfulness: 'technically-true' },
    { text: 'water got everywhere — it\'s a mess', truthfulness: 'embellished' },
    { text: 'luckily I caught it early', truthfulness: 'embellished' },
  ],
  childcare: [
    { text: 'my partner can\'t leave work either', truthfulness: 'fabricated' },
    { text: 'the babysitter cancelled too — worst timing', truthfulness: 'fabricated' },
    { text: 'they have a fever of [TEMP]', truthfulness: 'embellished' },
    { text: 'I hate doing this, especially today of all days', truthfulness: 'technically-true' },
  ],
  vague: [
    { text: 'I know this is last minute', truthfulness: 'technically-true' },
    { text: 'I wouldn\'t do this if I had another option', truthfulness: 'embellished' },
    { text: 'I owe you big time', truthfulness: 'technically-true' },
    { text: 'I feel terrible about this', truthfulness: 'technically-true' },
    { text: 'I promise I\'ll make it up to you', truthfulness: 'embellished' },
  ],
  friend_emergency: [
    { text: 'they called me crying', truthfulness: 'embellished' },
    { text: 'I\'m the only person they have out here', truthfulness: 'fabricated' },
    { text: 'they\'ve been there for me, I have to go', truthfulness: 'technically-true' },
    { text: 'I\'m sorry — I know we had plans', truthfulness: 'technically-true' },
  ],
  ex_drama: [
    { text: 'they want to talk about the lease', truthfulness: 'fabricated' },
    { text: 'I can\'t just not let them in', truthfulness: 'embellished' },
    { text: 'I need to handle this once and for all', truthfulness: 'fabricated' },
    { text: 'this shouldn\'t take too long, but I can\'t predict it', truthfulness: 'technically-true' },
  ],
  crime: [
    { text: 'they took my laptop', truthfulness: 'fabricated' },
    { text: 'the door was kicked in', truthfulness: 'fabricated' },
    { text: 'I\'m waiting for the police to finish', truthfulness: 'fabricated' },
    { text: 'I\'m actually okay, just shaken up', truthfulness: 'technically-true' },
  ],
  housing: [
    { text: 'there\'s a dispute about the lease', truthfulness: 'embellished' },
    { text: 'I need to meet with them today', truthfulness: 'fabricated' },
    { text: 'it\'s complicated — I\'d rather not get into it', truthfulness: 'technically-true' },
    { text: 'I\'ll explain when I see you next', truthfulness: 'technically-true' },
  ],
  emotional: [
    { text: 'I\'ve been putting on a brave face', truthfulness: 'technically-true' },
    { text: 'I just need a day to process things', truthfulness: 'technically-true' },
    { text: 'it\'s nothing you did', truthfulness: 'technically-true' },
    { text: 'I\'ll be okay, I just need some time', truthfulness: 'technically-true' },
  ],
};

// ─── VERIFICATION-PROOF ELEMENTS ────────────────────────────
// Details that make the excuse harder to disprove.

const verificationProof = {
  medical: [
    { text: 'I can send you my discharge papers if you need proof', truthfulness: 'fabricated', risk: 'low' },
    { text: 'I don\'t have a doctor\'s note yet — they said to follow up', truthfulness: 'fabricated', risk: 'medium' },
    { text: 'I went to urgent care, not my regular doctor', truthfulness: 'fabricated', risk: 'medium' },
    { text: 'they said it\'s going around — probably picked it up at the store', truthfulness: 'fabricated', risk: 'low' },
  ],
  accident: [
    { text: 'I have the police report number if you need it', truthfulness: 'fabricated', risk: 'high' },
    { text: 'the other driver\'s insurance is handling it', truthfulness: 'fabricated', risk: 'medium' },
    { text: 'there were witnesses — someone got it on dashcam apparently', truthfulness: 'fabricated', risk: 'high' },
    { text: 'I\'m just glad no one was hurt', truthfulness: 'technically-true', risk: 'low' },
  ],
  home: [
    { text: 'the building manager can confirm', truthfulness: 'fabricated', risk: 'high' },
    { text: 'I have photos of the damage', truthfulness: 'fabricated', risk: 'medium' },
    { text: 'the plumber\'s invoice is ridiculous — I\'ll show you sometime', truthfulness: 'fabricated', risk: 'medium' },
    { text: 'three other units were affected', truthfulness: 'fabricated', risk: 'low' },
  ],
  work: [
    { text: 'you can ask [COWORKER] if you don\'t believe me', truthfulness: 'fabricated', risk: 'extreme' },
    { text: 'I\'ll be on email if anyone needs me', truthfulness: 'technically-true', risk: 'low' },
    { text: 'it\'s a client confidentiality thing — can\'t get into specifics', truthfulness: 'fabricated', risk: 'low' },
    { text: 'our boss said it was mandatory', truthfulness: 'fabricated', risk: 'medium' },
  ],
  family: [
    { text: 'I\'d rather not get into specifics — family stuff', truthfulness: 'technically-true', risk: 'low' },
    { text: 'my [RELATIVE] is private about this stuff', truthfulness: 'technically-true', risk: 'low' },
    { text: 'I\'m the only one who can handle it', truthfulness: 'embellished', risk: 'low' },
    { text: 'they specifically asked me not to tell people', truthfulness: 'fabricated', risk: 'low' },
  ],
  general: [
    { text: 'I can show you texts if you want', truthfulness: 'fabricated', risk: 'high' },
    { text: 'I wouldn\'t make something like this up', truthfulness: 'technically-true', risk: 'low' },
    { text: 'you know I wouldn\'t cancel unless I had to', truthfulness: 'embellished', risk: 'low' },
    { text: 'I was literally getting ready when it happened', truthfulness: 'embellished', risk: 'medium' },
  ],
};

// ─── CLOSINGS ───────────────────────────────────────────────
// How to end the excuse. Seal the deal.

const closings = {
  friend: {
    low: [
      { text: 'Rain check soon?', truthfulness: 'technically-true' },
      { text: 'I owe you one.', truthfulness: 'technically-true' },
      { text: 'Next time, drinks are on me.', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I\'m really sorry. Let me make it up to you this weekend.', truthfulness: 'embellished' },
      { text: 'I feel like garbage doing this. Forgive me?', truthfulness: 'technically-true' },
      { text: 'Don\'t give up on me — I\'ll make this right.', truthfulness: 'embellished' },
    ],
    nuclear: [
      { text: 'I know this looks bad. I\'ll explain everything when I can.', truthfulness: 'technically-true' },
      { text: 'Please trust me that I wouldn\'t do this unless I had to.', truthfulness: 'embellished' },
      { text: 'I value our friendship more than you know right now.', truthfulness: 'technically-true' },
    ],
  },
  boss: {
    low: [
      { text: 'I\'ll be back online later today if anything urgent comes up.', truthfulness: 'technically-true' },
      { text: 'I\'ve updated my status in the team calendar.', truthfulness: 'technically-true' },
      { text: 'Happy to make up the hours if needed.', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I expect to be back tomorrow and will catch up on everything.', truthfulness: 'technically-true' },
      { text: 'I\'ll monitor email for anything critical.', truthfulness: 'technically-true' },
      { text: 'Thank you for understanding.', truthfulness: 'technically-true' },
    ],
    nuclear: [
      { text: 'I\'ll keep you updated on the situation.', truthfulness: 'technically-true' },
      { text: 'Please don\'t hesitate to reach out if there\'s an emergency at work.', truthfulness: 'technically-true' },
      { text: 'I appreciate your support during this time.', truthfulness: 'technically-true' },
    ],
  },
  date: {
    low: [
      { text: 'Can we reschedule? I was genuinely looking forward to this.', truthfulness: 'embellished' },
      { text: 'Rain check? My treat next time.', truthfulness: 'technically-true' },
      { text: 'Text me a time that works and I\'ll be there.', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I promise I\'m not flaking — this really is out of my control.', truthfulness: 'embellished' },
      { text: 'Please give me another chance. I\'ll make it worth your while.', truthfulness: 'embellished' },
      { text: 'I know first impressions matter and I\'m blowing it. I\'m sorry.', truthfulness: 'technically-true' },
    ],
    nuclear: [
      { text: 'I understand if you don\'t want to reschedule, but I hope you will.', truthfulness: 'technically-true' },
      { text: 'I promise to explain when I see you.', truthfulness: 'technically-true' },
      { text: 'I\'m not usually this person. Give me a chance to prove it.', truthfulness: 'embellished' },
    ],
  },
  parent: {
    low: [
      { text: 'Love you, talk soon.', truthfulness: 'technically-true' },
      { text: 'I\'ll call you tomorrow.', truthfulness: 'technically-true' },
      { text: 'Don\'t worry about me, I\'m fine.', truthfulness: 'technically-true' },
    ],
    medium: [
      { text: 'I know you\'re disappointed. I\'m sorry.', truthfulness: 'technically-true' },
      { text: 'I\'ll make it up to you, I promise.', truthfulness: 'embellished' },
      { text: 'Let\'s talk this weekend when things calm down.', truthfulness: 'technically-true' },
    ],
    nuclear: [
      { text: 'I love you both. I\'ll call when I can.', truthfulness: 'technically-true' },
      { text: 'I\'m okay. Please don\'t worry.', truthfulness: 'technically-true' },
      { text: 'Thank you for understanding. It means a lot.', truthfulness: 'technically-true' },
    ],
  },
};

// ─── NOTICE MODIFIERS ───────────────────────────────────────
// Adjustments based on how much advance notice was given.

const noticeModifiers = {
  minutes: {
    urgency: 'extreme',
    additionalText: [
      'I know this is incredibly short notice',
      'I\'m so sorry to do this right now',
      'I just found out myself',
    ],
    credibility: -20,
  },
  hours: {
    urgency: 'high',
    additionalText: [
      'I wanted to give you as much notice as possible',
      'I just found out',
      'I\'m sorry for the late notice',
    ],
    credibility: -10,
  },
  day: {
    urgency: 'moderate',
    additionalText: [
      'I wanted to let you know as soon as possible',
      'I\'m hoping this is enough notice',
    ],
    credibility: 0,
  },
  days: {
    urgency: 'low',
    additionalText: [
      'I wanted to give you plenty of notice',
      'I\'m sorry to change plans',
    ],
    credibility: 10,
  },
};

// ─── INTERROGATION QUESTIONS ────────────────────────────────
// Questions the practice mode will ask, organized by incident type.

const interrogationQuestions = {
  car_trouble: [
    'What kind of car do you drive?',
    'Where was your car when it wouldn\'t start?',
    'Did you try anything to fix it?',
    'Have you had issues with this car before?',
    'How are you getting it fixed?',
    'Do you have a mechanic you trust?',
    'Is it still in the parking spot or did you move it?',
    'When\'s the last time you got it serviced?',
  ],
  illness: [
    'What are your exact symptoms?',
    'When did this start?',
    'Have you taken any medicine for it?',
    'Have you been to a doctor?',
    'Is anyone else you know sick with this?',
    'What did you eat recently? Could it be food poisoning?',
    'Are you running a fever?',
    'Do you get sick often?',
  ],
  work_emergency: [
    'What exactly is the emergency?',
    'Can\'t someone else handle it?',
    'How long is this going to take?',
    'Does your boss know you had plans?',
    'Is this the same [client/project] as last time?',
    'Will you get paid extra for this?',
    'Have you tried pushing back?',
    'What happens if you don\'t go in?',
  ],
  family_emergency: [
    'Is everything okay?',
    'What happened?',
    'Do you need any help?',
    'Which family member is it?',
    'Is this the same [relative] who had the issue last month?',
    'How long are you going to be dealing with this?',
    'Can you talk about it, or is it private?',
    'Do your parents know?',
  ],
  accident: [
    'Are you okay?',
    'Where did this happen?',
    'Was anyone hurt?',
    'Did you call the police?',
    'What does the other driver look like?',
    'What kind of car hit you?',
    'Is your car drivable?',
    'Did you get their insurance information?',
  ],
  home_emergency: [
    'What exactly happened?',
    'How bad is the damage?',
    'Is your apartment still livable?',
    'What did the building manager say?',
    'Are your neighbors affected?',
    'How long until it\'s fixed?',
    'Did you lose any belongings?',
    'Is renter\'s insurance covering it?',
  ],
  general: [
    'Can you be more specific?',
    'That\'s pretty vague — what do you mean exactly?',
    'How are you going to handle this?',
    'Is there anything I can do to help?',
    'When will you know more?',
    'This seems to happen a lot — is everything okay?',
    'Did you know about this before we made plans?',
    'Are you sure you can\'t still make it, even for a bit?',
  ],
  crime: [
    'Oh my god, are you okay?',
    'What did they take?',
    'Did you call the police?',
    'Was anything irreplaceable taken?',
    'Did they break a window or a door?',
    'Were you home when it happened?',
    'Do you feel safe staying there tonight?',
    'Do you have renter\'s insurance?',
  ],
  childcare: [
    'What\'s wrong with [him/her/them]?',
    'Where\'s your partner?',
    'Can\'t your parents help?',
    'Is it serious?',
    'Do you need to see a doctor?',
    'How long until they\'re better?',
    'Has this happened before?',
    'Is the school being dramatic or is it legit?',
  ],
  emotional: [
    'Are you okay? Really?',
    'Do you want to talk about it?',
    'Is there something going on that I should know about?',
    'Have you talked to anyone about this?',
    'Is this related to [specific thing I probably don\'t know about]?',
    'What can I do to help?',
    'Have you been feeling like this for a while?',
    'Should I be worried?',
  ],
};

// ─── PROBING FOLLOW-UPS ─────────────────────────────────────
// These dig deeper when the initial answer feels shaky.

const probingFollowUps = [
  {
    trigger: 'hesitation',
    questions: [
      'You paused before answering. Why?',
      'That took a second. You sure about that?',
      'You don\'t sound very confident.',
      'Take your time — I want the real answer.',
    ],
  },
  {
    trigger: 'vague_answer',
    questions: [
      'That\'s not really an answer. Try again.',
      'Can you be more specific?',
      '"Something" isn\'t a thing. What thing?',
      'I asked a simple question.',
      'Details. Give me details.',
    ],
  },
  {
    trigger: 'contradiction',
    questions: [
      'Wait — that doesn\'t match what you said earlier.',
      'You said [X] before, now you\'re saying [Y]. Which is it?',
      'That\'s a different story than two minutes ago.',
      'You\'re changing your story. Why?',
      'I want to believe you, but you\'re making it hard.',
    ],
  },
  {
    trigger: 'over_explaining',
    questions: [
      'You\'re giving me a lot of detail. That\'s... interesting.',
      'That\'s a very specific answer for a simple question.',
      'You practiced that, didn\'t you?',
      'Most people don\'t remember that much detail. But you do. Convenient.',
    ],
  },
  {
    trigger: 'emotional_deflection',
    questions: [
      'Getting defensive isn\'t helping your case.',
      'Why are you getting upset if you\'re telling the truth?',
      'I\'m just asking questions. Your reaction is saying a lot.',
      'If you were honest, this wouldn\'t bother you.',
    ],
  },
];

// ─── SCORING COMMENTARY ─────────────────────────────────────
// What the tool says about the final believability score.

const scoringCommentary = {
  excellent: {
    range: [90, 100],
    comment: 'Convincing delivery. You either told the truth or you\'re a sociopath. Either way, they\'ll buy it.',
    advice: 'You don\'t need this tool. You need a long look in the mirror.',
  },
  good: {
    range: [70, 89],
    comment: 'Solid performance. A few rough edges, but nothing that would trigger real suspicion.',
    advice: 'Stay consistent with the details you committed to. Don\'t volunteer extra information.',
  },
  decent: {
    range: [50, 69],
    comment: 'They\'ll probably believe you, but they\'ll have doubts. You might get a follow-up text.',
    advice: 'Stick to your story. Don\'t elaborate if they ask again. Silence is your friend.',
  },
  poor: {
    range: [30, 49],
    comment: 'They know something\'s up. Maybe not the full truth, but they don\'t buy your excuse.',
    advice: 'Consider partial honesty: "Okay, it\'s not exactly what I said, but I really can\'t make it."',
  },
  terrible: {
    range: [0, 29],
    comment: 'That was painful to watch. They absolutely know you\'re lying.',
    advice: 'Just tell the truth. It\'s easier. Or get better at this. Your call.',
  },
};

// ─── HELPER FUNCTIONS ───────────────────────────────────────

function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function getOpening(target, tolerance) {
  const pool = openings[target]?.[tolerance];
  return getRandomItem(pool) || getRandomItem(openings.friend.low);
}

function getIncident(target, tolerance) {
  const pool = incidents[target]?.[tolerance];
  return getRandomItem(pool) || getRandomItem(incidents.friend.low);
}

function getSupportingDetail(incidentType) {
  const key = mapIncidentToDetailType(incidentType);
  const pool = supportingDetails[key] || supportingDetails.vague;
  return getRandomItem(pool);
}

function getVerificationProof(category) {
  const pool = verificationProof[category] || verificationProof.general;
  return getRandomItem(pool);
}

function getClosing(target, tolerance) {
  const pool = closings[target]?.[tolerance];
  return getRandomItem(pool) || getRandomItem(closings.friend.low);
}

function getNoticeModifier(notice) {
  return noticeModifiers[notice] || noticeModifiers.hours;
}

function getInterrogationQuestions(incidentType) {
  const key = incidentType || 'general';
  const pool = interrogationQuestions[key] || interrogationQuestions.general;
  // Return a shuffled copy of all questions
  return [...pool].sort(() => Math.random() - 0.5);
}

function getProbingFollowUp(triggerType) {
  const match = probingFollowUps.find(p => p.trigger === triggerType);
  if (match) {
    return getRandomItem(match.questions);
  }
  return getRandomItem(probingFollowUps[0].questions);
}

function getScoreCommentary(score) {
  for (const key of Object.keys(scoringCommentary)) {
    const entry = scoringCommentary[key];
    if (score >= entry.range[0] && score <= entry.range[1]) {
      return entry;
    }
  }
  return scoringCommentary.terrible;
}

function mapIncidentToDetailType(incidentType) {
  const mapping = {
    car_trouble: 'car_trouble',
    illness: 'illness',
    fatigue: 'illness',
    schedule_conflict: 'vague',
    roommate_issue: 'home_emergency',
    home_emergency: 'home_emergency',
    home_catastrophe: 'home_emergency',
    work_emergency: 'work_emergency',
    work: 'work_emergency',
    work_fatigue: 'work_emergency',
    work_mandatory: 'work_emergency',
    family_obligation: 'family_emergency',
    family_emergency: 'family_emergency',
    family_medical: 'family_emergency',
    family: 'family_emergency',
    medical: 'medical',
    family_death: 'family_emergency',
    civic_duty: 'general',
    accident: 'accident',
    appointment: 'medical',
    childcare: 'childcare',
    mental_health: 'emotional',
    friend_emergency: 'friend_emergency',
    ex_drama: 'ex_drama',
    crime: 'crime',
    housing: 'housing',
    emotional: 'emotional',
    personal: 'emotional',
    vague: 'vague',
  };
  return mapping[incidentType] || 'vague';
}

function mapIncidentToVerificationType(incidentType) {
  const mapping = {
    car_trouble: 'general',
    illness: 'medical',
    fatigue: 'medical',
    medical: 'medical',
    home_emergency: 'home',
    home_catastrophe: 'home',
    work_emergency: 'work',
    work: 'work',
    family_emergency: 'family',
    family_medical: 'family',
    family_death: 'family',
    accident: 'accident',
    childcare: 'family',
    crime: 'general',
    emotional: 'family',
  };
  return mapping[incidentType] || 'general';
}

function getInterrogationQuestionType(incidentDetails) {
  if (!incidentDetails || !incidentDetails.type) return 'general';
  return incidentDetails.type;
}

module.exports = {
  openings,
  incidents,
  supportingDetails,
  verificationProof,
  closings,
  noticeModifiers,
  interrogationQuestions,
  probingFollowUps,
  scoringCommentary,
  truthLevels,
  getOpening,
  getIncident,
  getSupportingDetail,
  getVerificationProof,
  getClosing,
  getNoticeModifier,
  getInterrogationQuestions,
  getProbingFollowUp,
  getScoreCommentary,
  mapIncidentToDetailType,
  mapIncidentToVerificationType,
  getInterrogationQuestionType,
  getRandomItem,
};
