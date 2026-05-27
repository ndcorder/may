#!/usr/bin/env node

const readline = require('readline');
const { findBlessing, getRandomBlessing, getCurrentTimeOfDay, getCurrentSeason } = require('./engine');

const BLESSING_DELAY_MS = 1500;

function displayBlessingWithPause(blessing, callback) {
  process.stdout.write('\n');
  
  // The pause is the ritual
  setTimeout(() => {
    process.stdout.write('  ');
    
    // Display blessing word by word for weight
    const words = blessing.text.split(' ');
    let i = 0;
    
    function displayNextWord() {
      if (i < words.length) {
        process.stdout.write(words[i]);
        if (i < words.length - 1) process.stdout.write(' ');
        i++;
        setTimeout(displayNextWord, 80);
      } else {
        process.stdout.write('\n\n');
        if (callback) callback();
      }
    }
    
    displayNextWord();
  }, BLESSING_DELAY_MS);
}

function displayQuietly(text) {
  process.stdout.write(text);
}

function displayWelcome() {
  const hour = new Date().getHours();
  let timeGreeting;
  if (hour >= 5 && hour < 12) timeGreeting = 'morning';
  else if (hour >= 12 && hour < 17) timeGreeting = 'afternoon';
  else if (hour >= 17 && hour < 21) timeGreeting = 'evening';
  else timeGreeting = 'night';
  
  const month = new Date().getMonth();
  let season;
  if (month >= 2 && month <= 4) season = 'spring';
  else if (month >= 5 && month <= 7) season = 'summer';
  else if (month >= 8 && month <= 10) season = 'autumn';
  else season = 'winter';
  
  console.log('');
  console.log('  The Blessing Engine');
  console.log('  ' + timeGreeting + ' · ' + season);
  console.log('');
  console.log('  What are you facing?');
  console.log('  (Press Enter with no input for a random blessing)');
  console.log('');
}

function promptForInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('  > ', (answer) => {
    rl.close();
    
    const input = answer.trim();
    
    if (input === '') {
      // Empty input - random blessing
      process.stdout.write('\n  ...');
      const blessing = getRandomBlessing();
      displayBlessingWithPause(blessing, () => {
        process.exit(0);
      });
    } else {
      // Process input
      process.stdout.write('\n  ...');
      const blessing = findBlessing(input);
      displayBlessingWithPause(blessing, () => {
        process.exit(0);
      });
    }
  });
}

// Main
const args = process.argv.slice(2);

if (args.length > 0) {
  // Direct blessing mode - args mode
  const input = args.join(' ');
  
  if (args[0] === '--help' || args[0] === '-h') {
    console.log('');
    console.log('  The Blessing Engine');
    console.log('');
    console.log('  Usage:');
    console.log('    bless                    Interactive mode');
    console.log('    bless "long wednesday"   Direct blessing');
    console.log('    bless --random           Random blessing');
    console.log('    bless --help             This message');
    console.log('');
    console.log('  The engine knows the time of day and season.');
    console.log('  Describe what you\'re facing, however briefly.');
    console.log('  The blessing will find you.');
    console.log('');
    process.exit(0);
  }
  
  if (args[0] === '--random' || args[0] === '-r') {
    process.stdout.write('\n  ...');
    const blessing = getRandomBlessing();
    displayBlessingWithPause(blessing, () => {
      process.exit(0);
    });
  } else {
    process.stdout.write('\n  ...');
    const blessing = findBlessing(input);
    displayBlessingWithPause(blessing, () => {
      process.exit(0);
    });
  }
} else {
  // Interactive mode
  displayWelcome();
  promptForInput();
}
