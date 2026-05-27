#!/usr/bin/env node

/**
 * The Excuse Generator
 * 
 * A CLI tool that generates contextually appropriate excuses
 * and interrogates you until you can deliver them convincingly.
 * 
 * Usage: node excuse.js
 * 
 * Zero dependencies. Only lies.
 */

const readline = require('readline');
const { generateExcuse } = require('./resolver');
const templates = require('./templates.json');
const details = require('./details.json');

// ─── CLI STATE ───────────────────────────────────────────

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let excuseData = null;
let interrogationState = {
  active: false,
  questions: [],
  currentQuestion: 0,
  answers: [],
  timings: [],
  contradictions: [],
  startTime: null,
  questionStartTime: null
};

// ─── UTILITIES ──────────────────────────────────────────

function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, answer => {
      resolve(answer.trim());
    });
  });
}

function print(text) {
  console.log(text);
}

function printBreak() {
  print('─'.repeat(60));
}

function printSlow(text, delayMs = 30) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      process.stdout.write(text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        console.log();
        resolve();
      }
    }, delayMs);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── TRUTHFULNESS LEGEND ────────────────────────────────

function printTruthfulnessLegend() {
  print('\n  Truthfulness Legend:');
  print('    ■ TECHNICALLY TRUE  — verifiable if investigated');
  print('    ■ EMBELLISHED       — rooted in reality, exaggerated');
  print('    ■ FABRICATED        — built from whole cloth');
  print('    ■ UNVERIFIABLE      — cannot be checked\n');
}

// ─── MAIN FLOW ──────────────────────────────────────────

async function main() {
  print('\n╔══════════════════════════════════════════════════════════╗');
  print('║               THE EXCUSE GENERATOR                      ║');
  print('║         "Everyone lies. We just help you lie better."   ║');
  print('╚══════════════════════════════════════════════════════════╝\n');

  printTruthfulnessLegend();

  // Gather parameters
  const target = await selectTarget();
  const tolerance = await selectTolerance();
  const notice = await selectNotice();

  printBreak();
  await printSlow('Generating your excuse...');
  await sleep(800);

  // Generate
  excuseData = generateExcuse(target, tolerance, notice);
  displayExcuse(excuseData);

  // Offer practice mode
  printBreak();
  const practice = await question('\nReady to practice your delivery? (y/n): ');
  
  if (practice.toLowerCase() === 'y' || practice.toLowerCase() === 'yes') {
    await runInterrogation();
  } else {
    print('\nFine. But don\'t come crying when they catch you stammering.\n');
  }

  // Rate the experience
  await rateExperience();

  rl.close();
}

// ─── PARAMETER SELECTION ─────────────────────────────────

async function selectTarget() {
  print('Who are you cancelling on?\n');
  print('  1. Friend');
  print('  2. Boss');
  print('  3. Date');
  print('  4. Parent\n');

  const choice = await question('Enter number (1-4): ');
  const targets = ['friend', 'boss', 'date', 'parent'];
  const idx = parseInt(choice) - 1;
  
  if (idx >= 0 && idx < targets.length) {
    print(`  → Target: ${targets[idx]}\n`);
    return targets[idx];
  }
  
  print('  → Defaulting to: friend (learn to follow instructions)\n');
  return 'friend';
}

async function selectTolerance() {
  print('Relationship damage tolerance?\n');
  print('  1. Low      — minor inconvenience, easy to smooth over');
  print('  2. Medium   — some genuine disappointment');
  print('  3. Nuclear  — this might end things\n');

  const choice = await question('Enter number (1-3): ');
  const tolerances = ['low', 'medium', 'nuclear'];
  const idx = parseInt(choice) - 1;
  
  if (idx >= 0 && idx < tolerances.length) {
    print(`  → Tolerance: ${tolerances[idx]}\n`);
    return tolerances[idx];
  }
  
  print('  → Defaulting to: medium\n');
  return 'medium';
}

async function selectNotice() {
  print('How much advance notice are you giving?\n');
  print('  1. Minutes  — you were supposed to be there already');
  print('  2. Hours    — same-day cancellation');
  print('  3. Day      — canceling the day before');
  print('  4. Days     — plenty of notice\n');

  const choice = await question('Enter number (1-4): ');
  const notices = ['minutes', 'hours', 'day', 'days'];
  const idx = parseInt(choice) - 1;
  
  if (idx >= 0 && idx < notices.length) {
    print(`  → Notice: ${notices[idx]}\n`);
    return notices[idx];
  }
  
  print('  → Defaulting to: hours\n');
  return 'hours';
}

// ─── EXCUSE DISPLAY ──────────────────────────────────────

function displayExcuse(data) {
  printBreak();
  print('YOUR EXCUSE:\n');
  
  // Word wrap at 60 chars
  const words = data.text.split(' ');
  let line = '  ';
  for (const word of words) {
    if ((line + word).length > 62) {
      print(line);
      line = '  ' + word + ' ';
    } else {
      line += word + ' ';
    }
  }
  if (line.trim()) print(line);
  
  print(`\n  Truthfulness: ${data.truthfulness.toUpperCase()}`);
  
  if (data.believeNotes) {
    print(`  Note: ${data.believeNotes}`);
  }

  if (data.notice === 'minutes') {
    print('\n  ⚠ WARNING: Minutes-level notice requires maximum confidence.');
    print('    Do not waver. Send the message and mute notifications.');
  } else if (data.notice === 'hours') {
    print('\n  💡 TIP: Hours-level notice is the sweet spot for credibility.');
    print('    Early enough to seem considerate, late enough to seem unavoidable.');
  }

  print();

  // Show ground truth for reference
  if (data.resolved && Object.keys(data.resolved).length > 0) {
    print('GROUND TRUTH (for your reference — do NOT share these details):');
    for (const [key, val] of Object.entries(data.resolved)) {
      print(`  ${key}: ${val.value}`);
    }
    print();
  }
}

// ─── INTERROGATION MODE ──────────────────────────────────

async function runInterrogation() {
  const interrogationType = excuseData.interrogationType || 'general';
  const questions = templates.interrogation_questions[interrogationType] 
    || templates.interrogation_questions.general;

  // Shuffle and take up to 8 questions
  const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 8);
  
  interrogationState = {
    active: true,
    questions: shuffled,
    currentQuestion: 0,
    answers: [],
    timings: [],
    contradictions: [],
    startTime: Date.now(),
    questionStartTime: null
  };

  printBreak();
  print('╔══════════════════════════════════════════════════════════╗');
  print('║                  INTERROGATION MODE                     ║');
  print('║     "Let's see how good a liar you really are."         ║');
  print('╚══════════════════════════════════════════════════════════╝\n');

  await printSlow('I\'m going to ask you some questions. Answer as if I\'m the person you\'re cancelling on. Be convincing.\n');
  await sleep(500);

  // Check if user wants to see their excuse first
  const review = await question('Want to review your excuse one more time? (y/n): ');
  if (review.toLowerCase() === 'y') {
    displayExcuse(excuseData);
  }

  print('\nLet\'s begin.\n');
  await sleep(500);

  // Ask questions
  for (let i = 0; i < shuffled.length; i++) {
    const q = shuffled[i];
    
    // Replace any template variables in the question
    const processedQ = processQuestion(q);
    
    interrogationState.questionStartTime = Date.now();
    interrogationState.currentQuestion = i;

    print(`Q${i + 1}: ${processedQ}`);
    const answer = await question('    You: ');

    const responseTime = Date.now() - interrogationState.questionStartTime;
    interrogationState.timings.push(responseTime);
    interrogationState.answers.push(answer);

    // Analyze response
    await analyzeAndRespond(answer, responseTime, i);
    
    if (i < shuffled.length - 1) {
      await sleep(300);
    }
  }

  // Final verdict
  await deliverVerdict();
}

function processQuestion(questionText) {
  // Replace template variables with resolved values
  if (!excuseData || !excuseData.resolved) return questionText;

  let processed = questionText;
  for (const [key, val] of Object.entries(excuseData.resolved)) {
    processed = processed.replace(`{${key}}`, val.value);
  }
  return processed;
}

async function analyzeAndRespond(answer, responseTime, questionIndex) {
  const trimmed = answer.toLowerCase().trim();

  // Detect various issues
  const issues = [];

  // Hesitation
  if (responseTime > 5000) {
    issues.push('hesitation');
    const probe = getRandomProbing('hesitation');
    print(`    → ${(responseTime / 1000).toFixed(1)} seconds. ${probe}\n`);
    return;
  } else if (responseTime > 3000) {
    // Mild hesitation comment
    const comments = [
      '    → That took a moment.',
      '    → *taps watch*',
      '    → ...go on.',
      '    → Okay. Moving on.'
    ];
    print(`${getRandomItem(comments)}\n`);
    return;
  }

  // Very short / vague answer
  if (trimmed.length < 10 || trimmed.includes('just ') || trimmed === 'idk' || trimmed === 'i don\'t know') {
    issues.push('vague_answer');
    const probe = getRandomProbing('vague_answer');
    print(`    → ${probe}\n`);
    return;
  }

  // Over-explaining (long answer)
  if (trimmed.length > 200) {
    issues.push('over_explaining');
    const probe = getRandomProbing('over_explaining');
    print(`    → ${probe}\n`);
    return;
  }

  // Check for contradictions with ground truth
  if (excuseData.resolved) {
    for (const [key, val] of Object.entries(excuseData.resolved)) {
      if (trimmed.includes(val.value.toLowerCase())) {
        // Mentioned a detail correctly — good
      }
    }
  }

  // Emotional deflection
  if (trimmed.includes('why are you asking') || trimmed.includes('don\'t you trust') || trimmed.includes('whatever')) {
    issues.push('emotional_deflection');
    const probe = getRandomProbing('emotional_deflection');
    print(`    → ${probe}\n`);
    return;
  }

  // Fast, confident answer — sometimes accept it, sometimes probe anyway
  if (responseTime < 1500) {
    const responses = [
      '    → Quick answer. Rehearsed? Or just truthful?',
      '    → Smooth.',
      '    → Okay.',
      '    → *nodding slowly*',
      '    → I believe you. (Do I?)',
      '    → Convincing. Or suspicious. Haven\'t decided.'
    ];
    print(`${getRandomItem(responses)}\n`);
    return;
  }

  // Default: neutral acceptance
  const neutrals = [
    '    → Mm-hmm.',
    '    → Alright.',
    '    → Continue.',
    '    → Okay...',
    '    → *stares blankly*'
  ];
  print(`${getRandomItem(neutrals)}\n`);
}

function getRandomProbing(triggerType) {
  const pool = templates.probing_follow_ups[triggerType];
  if (!pool) return 'Interesting.';
  return pool[Math.floor(Math.random() * pool.length)];
}

// ─── VERDICT ─────────────────────────────────────────────

async function deliverVerdict() {
  interrogationState.active = false;
  const totalTime = Date.now() - interrogationState.startTime;

  print('\n');
  printBreak();
  await printSlow('... ... ...\n');
  await sleep(1000);

  // Calculate scores
  const scores = calculateScores();

  print('╔══════════════════════════════════════════════════════════╗');
  print('║                   FINAL ASSESSMENT                      ║');
  print('╚══════════════════════════════════════════════════════════╝\n');

  // Believability score
  print(`  Believability: ${scores.total}%\n`);

  // Breakdown
  print('  Breakdown:');
  print(`    Consistency:     ${scores.consistency}%`);
  print(`    Timing:          ${scores.timing}%`);
  print(`    Detail density:  ${scores.detail}%`);
  print(`    Confidence:      ${scores.confidence}%\n`);

  // Specific notes
  if (scores.notes.length > 0) {
    print('  Notes:');
    for (const note of scores.notes) {
      print(`    • ${note}`);
    }
    print();
  }

  // Commentary
  const commentary = getCommentary(scores.total);
  print(`  Verdict: ${commentary.comment}`);
  print(`  Advice: ${commentary.advice}\n`);

  // Total interrogation time
  const totalSecs = (totalTime / 1000).toFixed(1);
  print(`  Interrogation lasted ${totalSecs} seconds across ${interrogationState.answers.length} questions.\n`);
}

function calculateScores() {
  const answers = interrogationState.answers;
  const timings = interrogationState.timings;

  // Consistency: check for contradictions or evasions
  let consistencyScore = 85; // Start high, deduct for issues
  const notes = [];

  // Check for very short answers
  const shortAnswers = answers.filter(a => a.trim().length < 10).length;
  if (shortAnswers > 2) {
    consistencyScore -= 15;
    notes.push('Multiple non-answers. That\'s suspicious.');
  } else if (shortAnswers > 0) {
    consistencyScore -= 5;
    notes.push('At least one very short answer. Seemed evasive.');
  }

  // Check for "I don't know" type answers
  const idkCount = answers.filter(a => {
    const lower = a.toLowerCase();
    return lower.includes('don\'t know') || lower.includes('not sure') || lower.includes('whatever');
  }).length;
  if (idkCount > 0) {
    consistencyScore -= 10 * idkCount;
    notes.push('You claimed uncertainty. Liars do that.');
  }

  // Timing: consistency and speed
  let timingScore = 75;
  if (timings.length > 0) {
    const avgTime = timings.reduce((a, b) => a + b, 0) / timings.length;
    
    if (avgTime < 1500) {
      timingScore = 85; // Quick but not too quick
      notes.push('Quick responses. Either confident or rehearsed.');
    } else if (avgTime < 3000) {
      timingScore = 70;
    } else if (avgTime < 5000) {
      timingScore = 50;
      notes.push('You hesitated noticeably. Truthful people don\'t need to think this hard.');
    } else {
      timingScore = 30;
      notes.push('Long pauses. You\'re constructing answers, not recalling them.');
    }

    // Check for wildly inconsistent timing
    if (timings.length > 2) {
      const maxTime = Math.max(...timings);
      const minTime = Math.min(...timings);
      if (maxTime > minTime * 5) {
        timingScore -= 15;
        notes.push('Your response times were wildly inconsistent. Red flag.');
      }
    }
  }

  // Detail density: enough detail to be believable, not so much it's suspicious
  let detailScore = 70;
  const avgLength = answers.reduce((a, b) => a + b.length, 0) / answers.length;
  
  if (avgLength < 15) {
    detailScore = 40;
    notes.push('Your answers were too vague. Details sell the lie.');
  } else if (avgLength < 30) {
    detailScore = 65;
  } else if (avgLength < 80) {
    detailScore = 85;
    notes.push('Good detail level. Specific enough to be believable.');
  } else if (avgLength < 150) {
    detailScore = 60;
    notes.push('You over-explained. Liars give too much detail.');
  } else {
    detailScore = 35;
    notes.push('Way too much detail. That\'s not recall, that\'s fabrication.');
  }

  // Confidence: based on no hedging language
  let confidenceScore = 80;
  const hedging = answers.filter(a => {
    const lower = a.toLowerCase();
    return lower.includes('i think') || lower.includes('maybe') || lower.includes('sort of') 
      || lower.includes('kind of') || lower.includes('i guess') || lower.includes('probably');
  }).length;
  
  if (hedging > 2) {
    confidenceScore = 40;
    notes.push('Excessive hedging. "I think" and "maybe" don\'t sound like truth.');
  } else if (hedging > 0) {
    confidenceScore -= 10;
    notes.push('Some hedging language detected. Be more definitive.');
  }

  // Calculate total
  consistencyScore = Math.max(0, Math.min(100, consistencyScore));
  timingScore = Math.max(0, Math.min(100, timingScore));
  detailScore = Math.max(0, Math.min(100, detailScore));
  confidenceScore = Math.max(0, Math.min(100, confidenceScore));

  const total = Math.round(
    consistencyScore * 0.3 +
    timingScore * 0.25 +
    detailScore * 0.25 +
    confidenceScore * 0.2
  );

  return {
    total: Math.max(0, Math.min(100, total)),
    consistency: consistencyScore,
    timing: timingScore,
    detail: detailScore,
    confidence: confidenceScore,
    notes
  };
}

function getCommentary(score) {
  const commentaries = templates.scoring_commentary;
  
  for (const key of Object.keys(commentaries)) {
    const entry = commentaries[key];
    if (score >= entry.range[0] && score <= entry.range[1]) {
      return entry;
    }
  }
  
  return commentaries.terrible;
}

// ─── EXPERIENCE RATING ───────────────────────────────────

async function rateExperience() {
  printBreak();
  print('\nBefore you go: rate your experience with this tool.\n');
  
  const rating = await question('Rate 1-5 stars: ');
  const numRating = parseInt(rating);
  
  if (isNaN(numRating) || numRating < 1 || numRating > 5) {
    print('\n  Can\'t even give a straight rating. Figures.\n');
    return;
  }

  print();
  const ratingComments = {
    5: [
      'Five stars? You just used a tool to practice lying and you\'re giving it five stars. Interesting person you are.',
      'Five stars! Was it the lying or the interrogation that did it for you?',
      'Perfect rating. Either genuinely helpful or you\'re trying to soften me up. Both are concerning.'
    ],
    4: [
      'Four stars. Room for improvement, apparently. Like your excuses.',
      'Solid rating. You seem like someone who gives 4 stars to everything. Reliable. Possibly boring.',
      'Four stars. Did you deduct a star because the interrogation made you uncomfortable? Good.'
    ],
    3: [
      'Three stars. The "I don\'t want to be mean but I wasn\'t impressed" rating. Honest, at least.',
      'Three stars. Middle of the road. Like your excuses.',
      'A three. Was the tool mediocre, or are you just rating honestly for once?'
    ],
    2: [
      'Two stars. Now we\'re getting somewhere. What didn\'t you like — the lies or being called out?',
      'Two stars. Brutal. But honest. I appreciate that, even if you couldn\'t appreciate me.',
      'Low rating. That\'s fine. The best liars are never satisfied.'
    ],
    1: [
      'One star. You came to a lie generator and you\'re mad it made you lie. That\'s a you problem.',
      'One star. Bold. Either this really didn\'t work for you, or you\'re a very committed liar testing the system.',
      'The lowest rating. I\'ll take it. Means I hit a nerve.'
    ]
  };

  const comments = ratingComments[numRating] || ratingComments[3];
  const comment = comments[Math.floor(Math.random() * comments.length)];
  await printSlow(`  ${comment}\n`);

  // Meta-commentary on the rating itself
  if (numRating >= 4) {
    print('  (High rating from someone who just practiced lying. Grain of salt.)\n');
  } else if (numRating <= 2) {
    print('  (Low ratings from liars are actually more trustworthy. Noted.)\n');
  }

  // Did they take a long time to answer?
  // (We can't track this precisely in the rating flow, but we can comment on the rating itself)
  if (numRating === 3) {
    print('  (Three is the most honest rating. Everyone else is performing.)\n');
  }
}

// ─── RUN ─────────────────────────────────────────────────

main().catch(err => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});

rl.on('close', () => {
  if (!interrogationState.active) {
    print('\nRemember: the best lie is the one you barely have to tell.\n');
    print('Good luck out there. You\'ll need it.\n');
  }
  process.exit(0);
});

// ─── HELPER ──────────────────────────────────────────────

function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}
