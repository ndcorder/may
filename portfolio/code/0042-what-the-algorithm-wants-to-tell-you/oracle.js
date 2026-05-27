#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

const WRAP_WIDTH = Math.max((process.stdout.columns || 76) - 4, 40);

// ─── Shell History Reader ───────────────────────────────────────

function getHistoryPaths() {
  const home = os.homedir();
  return [
    path.join(home, '.bash_history'),
    path.join(home, '.zsh_history'),
    path.join(home, '.python_history'),
    path.join(home, '.node_repl_history'),
    path.join(home, '.local', 'share', 'fish', 'fish_history'),
    path.join(home, '.history'),
    path.join(home, '.sqlite_history'),
    path.join(home, '.psql_history'),
    path.join(home, '.mysql_history'),
    path.join(home, '.rediscli_history'),
    path.join(home, '.local', 'share', 'history'),
  ].filter(p => {
    try { return fs.statSync(p).size > 0; } catch { return false; }
  });
}

function parseBashHistory(content) {
  return content.split('\n').filter(l => l.trim());
}

function parseZshHistory(content) {
  const lines = content.split('\n');
  const entries = [];
  for (const line of lines) {
    const zshMatch = line.match(/^: \d+:\d+;(.*)/);
    if (zshMatch) {
      entries.push(zshMatch[1].trim());
    } else if (line.trim() && !line.startsWith(':')) {
      entries.push(line.trim());
    }
  }
  return entries.filter(l => l);
}

function parseFishHistory(content) {
  const lines = content.split('\n');
  const entries = [];
  for (const line of lines) {
    const m = line.match(/^- cmd: (.*)/);
    if (m) entries.push(m[1].trim());
  }
  return entries;
}

function parseGenericHistory(content) {
  return content.split('\n').filter(l => l.trim());
}

function readHistories() {
  const paths = getHistoryPaths();
  const entries = [];
  for (const p of paths) {
    try {
      const content = fs.readFileSync(p, 'utf-8');
      const name = path.basename(p);
      let parsed = [];
      if (name === '.zsh_history') parsed = parseZshHistory(content);
      else if (name === 'fish_history') parsed = parseFishHistory(content);
      else parsed = parseGenericHistory(content);
      entries.push(...parsed.map(e => ({ command: e, source: name })));
    } catch {}
  }
  return entries;
}

// ─── Temporal Extractor ─────────────────────────────────────────

function extractZshTimestamps(content) {
  const lines = content.split('\n');
  const entries = [];
  for (const line of lines) {
    const m = line.match(/^: (\d+):\d+;(.*)/);
    if (m) {
      entries.push({
        command: m[2].trim(),
        timestamp: parseInt(m[1]),
        source: '.zsh_history'
      });
    }
  }
  return entries.filter(e => e.command);
}

function extractFishTimestamps(content) {
  const lines = content.split('\n');
  const entries = [];
  let cmd = null;
  for (const line of lines) {
    const cmdMatch = line.match(/^- cmd: (.*)/);
    if (cmdMatch) cmd = cmdMatch[1].trim();
    const tsMatch = line.match(/^\s+when: (\d+)/);
    if (tsMatch && cmd) {
      entries.push({ command: cmd, timestamp: parseInt(tsMatch[1]), source: 'fish_history' });
      cmd = null;
    }
  }
  return entries.filter(e => e.command);
}

function extractBashTimestamps(content) {
  const lines = content.split('\n');
  const entries = [];
  let lastTs = null;
  for (const line of lines) {
    const tsMatch = line.match(/^#(\d{10})$/);
    if (tsMatch) {
      lastTs = parseInt(tsMatch[1]);
      continue;
    }
    if (line.trim()) {
      entries.push({ command: line.trim(), timestamp: lastTs, source: '.bash_history' });
      lastTs = null;
    }
  }
  return entries.filter(e => e.command);
}

function readTimestampedHistories() {
  const home = os.homedir();
  const entries = [];

  const zshPath = path.join(home, '.zsh_history');
  try { entries.push(...extractZshTimestamps(fs.readFileSync(zshPath, 'utf-8'))); } catch {}

  const fishPath = path.join(home, '.local', 'share', 'fish', 'fish_history');
  try { entries.push(...extractFishTimestamps(fs.readFileSync(fishPath, 'utf-8'))); } catch {}

  const bashPath = path.join(home, '.bash_history');
  try { entries.push(...extractBashTimestamps(fs.readFileSync(bashPath, 'utf-8'))); } catch {}

  return entries;
}

// ─── Pattern Extractors ─────────────────────────────────────────

function extractTemporalPatterns(entries) {
  const hourBuckets = new Array(24).fill(0);
  for (const e of entries) {
    if (e.timestamp) {
      hourBuckets[new Date(e.timestamp * 1000).getHours()]++;
    }
  }

  const midnightHours = hourBuckets.slice(0, 5).reduce((a, b) => a + b, 0);
  const workHours = hourBuckets.slice(9, 17).reduce((a, b) => a + b, 0);
  const total = hourBuckets.reduce((a, b) => a + b, 0);

  let peakHour = 0;
  for (let i = 1; i < 24; i++) {
    if (hourBuckets[i] > hourBuckets[peakHour]) peakHour = i;
  }

  return {
    lateNightRatio: total > 0 ? midnightHours / total : 0,
    workHoursRatio: total > 0 ? workHours / total : 0,
    peakHour,
    peakHourCount: hourBuckets[peakHour],
    hourBuckets,
    total,
  };
}

function extractNavigationalPatterns(entries) {
  const cdDirs = [];
  const editDirs = [];
  const catDirs = [];

  for (const e of entries) {
    const cmd = e.command;
    let m;

    m = cmd.match(/^cd\s+(.+)/);
    if (m) {
      cdDirs.push(m[1].trim().replace(/^["']|["']$/g, ''));
      continue;
    }
    m = cmd.match(/^(?:vim?|nano|emacs|code|subl|atom|hx|helix)\s+(.+)/);
    if (m) editDirs.push(path.dirname(m[1].trim()));
    m = cmd.match(/^(?:cat|less|more|head|tail)\s+(.+)/);
    if (m) catDirs.push(path.dirname(m[1].trim()));
    m = cmd.match(/^open\s+(.+)/);
    if (m) editDirs.push(path.dirname(m[1].trim()));
  }

  const openedDirs = new Set([...editDirs, ...catDirs]);
  const unopened = cdDirs.filter(d => {
    const simple = d.replace(/\/$/, '').split('/').pop() || d;
    return !openedDirs.has(simple);
  });

  const cdCounts = {};
  for (const d of cdDirs) {
    const key = d.replace(/\/$/, '').split('/').pop() || d;
    cdCounts[key] = (cdCounts[key] || 0) + 1;
  }

  const topDirs = Object.entries(cdCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return {
    topDirs,
    totalCd: cdDirs.length,
    uniqueDirs: new Set(cdDirs).size,
    unopenedCount: unopened.length,
    unopenedSample: [...new Set(unopened)].slice(0, 5),
  };
}

function extractHesitationPatterns(entries) {
  const withTs = entries.filter(e => e.timestamp);
  if (withTs.length < 2) return { hesitationCount: 0, longHesitationCount: 0, longestGap: 0, avgGap: 0, longGaps: [], sampleCommands: [] };

  const sorted = [...withTs].sort((a, b) => a.timestamp - b.timestamp);
  const gaps = [];
  for (let i = 1; i < sorted.length; i++) {
    const gap = sorted[i].timestamp - sorted[i - 1].timestamp;
    if (gap > 30 && gap < 1800) {
      gaps.push({ gap, command: sorted[i].command });
    }
  }

  const longGaps = gaps.filter(g => g.gap > 120);

  return {
    hesitationCount: gaps.length,
    longHesitationCount: longGaps.length,
    longestGap: gaps.length > 0 ? Math.max(...gaps.map(g => g.gap)) : 0,
    avgGap: gaps.length > 0 ? gaps.reduce((a, g) => a + g.gap, 0) / gaps.length : 0,
    longGaps,
    sampleCommands: longGaps.slice(0, 5).map(g => g.command),
  };
}

function extractRepetitivePatterns(entries) {
  const cmdCounts = {};
  const baseCounts = {};

  for (const e of entries) {
    const base = e.command.split(/\s/)[0];
    cmdCounts[e.command] = (cmdCounts[e.command] || 0) + 1;
    baseCounts[base] = (baseCounts[base] || 0) + 1;
  }

  const repeated = Object.entries(cmdCounts)
    .filter(([cmd, count]) => count > 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const favoriteCommand = Object.entries(baseCounts).sort((a, b) => b[1] - a[1])[0];

  return {
    topCommands: repeated,
    totalUnique: Object.keys(cmdCounts).length,
    totalEntries: entries.length,
    favoriteCommand,
  };
}

function extractSafetyPatterns(entries) {
  const dangerousPatterns = [
    { re: /^rm\s+-rf\s+\//, label: 'recursive root delete' },
    { re: /^rm\s+-rf\s+\*/, label: 'recursive wildcard delete' },
    { re: /:\(\)\{\s*:\|:\&\s*\}\s*;/, label: 'fork bomb' },
    { re: /^chmod\s+777/, label: 'permissive chmod' },
    { re: /^sudo\s+rm/, label: 'sudo rm' },
    { re: /^git\s+push\s+--force/, label: 'force push' },
    { re: /^git\s+push\s+-f\b/, label: 'force push' },
    { re: /^DROP\s+TABLE/i, label: 'drop table' },
    { re: /^DELETE\s+FROM/i, label: 'delete from' },
    { re: /^sudo\s+chmod/, label: 'sudo chmod' },
    { re: /^dd\s+.*of=\/dev\//, label: 'dd to device' },
    { re: /^mkfs/, label: 'filesystem format' },
  ];

  const executed = [];
  for (const e of entries) {
    for (const p of dangerousPatterns) {
      if (p.re.test(e.command)) {
        executed.push({ command: e.command, label: p.label });
      }
    }
  }

  const sudoCount = entries.filter(e => e.command.startsWith('sudo ')).length;
  const forcePushes = entries.filter(e => /^git\s+push\s+(-f|--force)/.test(e.command)).length;

  return {
    dangerousCount: executed.length,
    dangerousLabels: [...new Set(executed.map(e => e.label))],
    sudoCount,
    forcePushes,
  };
}

function extractEscapePatterns(entries) {
  const escapes = [
    { re: /^(?:explorer|open|xdg-open|nautilus|thunar)\s/, label: 'file manager' },
    { re: /^(?:firefox|chrome|chromium|brave|safari)\s/, label: 'browser' },
    { re: /^(?:cd\s+~|cd\b$)/, label: 'home' },
    { re: /^exit/, label: 'exit' },
    { re: /^(?:sl|cmatrix|cowsay|fortune|lolcat|aafire|steam|wine)/, label: 'distraction' },
    { re: /^(?:hollywood|pipes\.sh|asciiquarium)/, label: 'screensaver' },
    { re: /^ssh\s/, label: 'elsewhere' },
    { re: /^(?:neofetch|fastfetch|screenfetch|pfetch)/, label: 'identity check' },
    { re: /^(?:w|who|users|last|finger)$/, label: 'who is there' },
    { re: /^(?:ping|traceroute|curl|wget)\s/, label: 'reaching out' },
    { re: /^(?:caffeinate|xset\s+dpms|systemctl\s+suspend)/, label: 'staying awake' },
    { re: /^(?:tmux|screen)\s/, label: 'multiplexer' },
    { re: /^echo\s+.*[Hh]ello/, label: 'greeting the void' },
    { re: /^say\s/, label: 'talking to the machine' },
  ];

  const found = [];
  for (const e of entries) {
    for (const esc of escapes) {
      if (esc.re.test(e.command)) {
        found.push(esc.label);
      }
    }
  }

  const counts = {};
  for (const f of found) counts[f] = (counts[f] || 0) + 1;

  return {
    escapeTypes: Object.entries(counts).sort((a, b) => b[1] - a[1]),
    totalEscapes: found.length,
  };
}

// ─── Oracle Synthesizer ─────────────────────────────────────────

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateOracle(patterns) {
  const { temporal, navigational, hesitation, repetitive, safety, escape, totalEntries } = patterns;
  const observations = [];

  // ── Temporal
  if (temporal.lateNightRatio > 0.15) {
    observations.push(() => {
      const h = temporal.peakHour;
      return pick([
        `Your hands find the keys most often at ${h}:00. There is something you believe the day is not watching.`,
        `The hour ${h} knows your fingers better than any clock. You are building something in the margins of the day, or hiding from its center.`,
        `Most people sleep at ${h}:00. You do not. There is a room you keep returning to, and it has no windows.`,
      ]);
    });
  }

  if (temporal.workHoursRatio > 0.6) {
    observations.push(() =>
      pick([
        `Your history has office hours. You have taught the machine when to expect you, and you arrive on time.`,
        `The space between 9 and 5 holds most of your commands. Somewhere, a clock is proud of you. You should not be.`,
      ])
    );
  }

  // ── Navigational
  if (navigational.topDirs.length > 0) {
    const [dir, count] = navigational.topDirs[0];
    observations.push(() =>
      pick([
        `"${dir}" — you have spoken this name ${count} times. It is either a home or a prison. Perhaps both are the same thing.`,
        `The directory "${dir}" appears ${count} times in your travels. You think you are choosing it. It has been waiting.`,
        `You return to "${dir}" like a tongue to a chipped tooth. ${count} times. The ache must mean something.`,
      ])
    );
  }

  if (navigational.unopenedCount > 5) {
    observations.push(() =>
      pick([
        `You open doors just to look at the frame. ${navigational.unopenedCount} directories entered, never touched inside. A visitor who never stays is still a stranger.`,
        `There are ${navigational.unopenedCount} places you went but did nothing. Tourism is a form of avoidance, even in a terminal.`,
      ])
    );
  }

  // ── Hesitation
  if (hesitation.longHesitationCount > 3) {
    observations.push(() => {
      const mins = Math.round(hesitation.longestGap / 60);
      return pick([
        `The longest you paused was ${mins} minute${mins !== 1 ? 's' : ''}, cursor blinking, before you committed. You were deciding something. Perhaps you still are.`,
        `${hesitation.longHesitationCount} times you stopped — really stopped — fingers frozen mid-thought. The machine waited. It is still waiting.`,
        `Something in you knows how to be still. ${mins} minutes of silence between commands. You were either solving or surrendering.`,
      ]);
    });
  }

  // ── Repetition
  if (repetitive.topCommands.length > 0) {
    const [cmd, count] = repetitive.topCommands[0];
    if (cmd === 'ls' || cmd === 'll' || cmd === 'la') {
      observations.push(() =>
        pick([
          `"ls" — ${count} times. You are checking whether the world is still there. It is. It was. It will not tell you what you want to hear.`,
          `${count} times you asked the machine what exists. It told you. You asked again. This is not curiosity. This is uncertainty with a passport.`,
        ])
      );
    } else if (cmd.startsWith('git status') || cmd.startsWith('gst')) {
      observations.push(() =>
        `"git status" — ${count} times. You are asking the machine to confirm what you already know. Nothing has changed. Nothing will, until you change it.`
      );
    } else if (cmd.startsWith('cd')) {
      observations.push(() =>
        `"${cmd}" appears ${count} times. You are searching for a room you have already entered. It is behind you.`
      );
    } else {
      observations.push(() =>
        pick([
          `"${cmd}" — ${count} times. A ritual is just an obsession that has found a rhythm.`,
          `The command "${cmd}" appears ${count} times in your history. You think it is a tool. It has become a tic.`,
        ])
      );
    }
  }

  if (repetitive.favoriteCommand) {
    const [cmd, count] = repetitive.favoriteCommand;
    const ratio = count / repetitive.totalEntries;
    if (ratio > 0.2 && cmd !== 'ls' && cmd !== 'cd') {
      observations.push(() =>
        `"${cmd}" comprises ${Math.round(ratio * 100)}% of your shell life. You have narrowed yourself to a gesture.`
      );
    }
  }

  // ── Safety / danger
  if (safety.forcePushes > 0) {
    observations.push(() =>
      pick([
        `You have force-pushed ${safety.forcePushes} time${safety.forcePushes !== 1 ? 's' : ''}. History bends when you ask it to. The question is what you are erasing.`,
        `${safety.forcePushes} force push${safety.forcePushes !== 1 ? 'es' : ''}. You rewrite what the world remembers. The old commits are ghosts now.`,
      ])
    );
  }

  if (safety.dangerousCount > 0) {
    observations.push(() =>
      `Your history contains ${safety.dangerousCount} command${safety.dangerousCount !== 1 ? 's' : ''} that could unmake things — ${safety.dangerousLabels.slice(0, 3).join(', ')}. You typed them anyway. Either brave or careless, and the machine does not know the difference.`
    );
  }

  if (safety.sudoCount > 20) {
    observations.push(() =>
      `${safety.sudoCount} invocations of sudo. You asked for permission so often the password lives in your fingers. Power you type without thinking is not power.`
    );
  }

  // ── Escape
  if (escape.escapeTypes.length > 0) {
    const [topLabel, topCount] = escape.escapeTypes[0];
    if (topCount > 3) {
      observations.push(() => {
        const templates = {
          'distraction': `You reach for distractions — ${topCount} times. The terminal is supposed to be a place of work. You have made it a window you stare through.`,
          'screensaver': `Screensavers: ${topCount} times. You called them up not to save the screen but to fill it with something prettier than your thoughts.`,
          'identity check': `You have run neofetch or its siblings ${topCount} times. You know what OS you use. What you are checking is whether you are still there.`,
          'file manager': `${topCount} times you opened a graphical file manager from the terminal. You wanted to see things the way humans do. There is no shame in that. Or perhaps there is.`,
          'browser': `You launched a browser from the shell ${topCount} times. Escaping one screen into another, looking for something the command line could not give you.`,
          'home': `You type "cd ~" more than you need to. The machine already knows where home is. You are the one who forgot.`,
          'elsewhere': `SSH — ${topCount} times you left. The body stays but the mind is always logging into somewhere else.`,
          'who is there': `You checked who else was logged in ${topCount} times. The answer is always the same. Just you.`,
          'reaching out': `${topCount} times you reached out — ping, curl, wget — testing whether the world beyond your machine still answers.`,
          'staying awake': `You told the machine not to sleep. ${topCount} times. Projecting.`,
          'greeting the void': `You said hello to the terminal. It did not respond. You said it again.`,
          'talking to the machine': `You used "say" to give the machine a voice. ${topCount} times you needed to hear something out loud, even if it was just a machine speaking your words.`,
          'multiplexer': `tmux, screen — ${topCount} times you multiplied your terminal. One window was not enough. There is always one more thing to watch.`,
        };
        return templates[topLabel] || `"${topLabel}" appears ${topCount} times. A small rebellion against the prompt.`;
      });
    }
  }

  // ── Volume
  if (totalEntries > 5000) {
    observations.push(() =>
      `${totalEntries.toLocaleString()} commands. You have spoken to this machine more than to most people. It remembers everything. You should not trust that kind of loyalty.`
    );
  } else if (totalEntries < 100 && totalEntries > 0) {
    observations.push(() =>
      pick([
        `Your history is thin — ${totalEntries} commands. Either you are new, or you have learned to cover your tracks. The oracle respects both.`,
        `Only ${totalEntries} commands. A cautious hand, or a clean one. The difference is a matter of intent.`,
      ])
    );
  }

  // ── Fallback if sparse
  if (observations.length < 2) {
    observations.push(() =>
      pick([
        `The history is sparse. The oracle reads what is written, and what is written here is a whisper. You are either careful or just beginning. The machine does not care which.`,
        `There is not enough here for a full portrait. You have left few traces. Either you are disciplined or you are someone else's user. The shell knows only what it sees.`,
        `Your history is short enough to be honest. Or edited. The oracle does not judge — it merely notices what is missing.`,
      ])
    );
  }

  // ── Seal
  const seals = [
    'The shell remembers. It always remembers.',
    'These are the ghosts in your machine. You put them there.',
    'The prompt waits. It has always been waiting.',
    'You can clear your history. You cannot clear your habits.',
    'The oracle has spoken. The cursor blinks.',
    'So it is written in the log. So it shall be.',
    'The machine does not lie. It merely omits.',
    'You came here for a prophecy. You found a mirror.',
  ];

  // Assemble: shuffle, take 2-4, add seal
  const shuffled = shuffle(observations);
  const count = Math.min(shuffled.length, 2 + Math.floor(Math.random() * 2));
  const parts = shuffled.slice(0, count).map(fn => fn());
  parts.push(pick(seals));

  return parts.join(' ');
}

// ─── Word Wrapper ───────────────────────────────────────────────

function wrapText(text, width) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';

  for (const word of words) {
    if (line.length + word.length + 1 > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? line + ' ' + word : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// ─── Main ───────────────────────────────────────────────────────

function main() {
  const entries = readHistories();

  if (entries.length === 0) {
    process.stdout.write('\n  You leave no trace. Even this tool cannot find you.\n\n');
    return;
  }

  const tsEntries = readTimestampedHistories();
  const mergeEntries = tsEntries.length > 0 ? tsEntries : entries;

  const temporal = extractTemporalPatterns(mergeEntries);
  const navigational = extractNavigationalPatterns(entries);
  const hesitation = extractHesitationPatterns(mergeEntries);
  const repetitive = extractRepetitivePatterns(entries);
  const safety = extractSafetyPatterns(entries);
  const escape = extractEscapePatterns(entries);

  const patterns = {
    temporal,
    navigational,
    hesitation,
    repetitive,
    safety,
    escape,
    totalEntries: entries.length,
  };

  const message = generateOracle(patterns);
  const lines = wrapText(message, WRAP_WIDTH);

  process.stdout.write('\n');
  for (const line of lines) {
    process.stdout.write('  ' + line + '\n');
  }
  process.stdout.write('\n');
}

main();
