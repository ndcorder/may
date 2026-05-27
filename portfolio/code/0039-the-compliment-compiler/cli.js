#!/usr/bin/env node

const { render } = require("ink");
const React = require("react");
const chalk = require("chalk");
const { compile, validate } = require("./compiler");

// ── ANSI escape helpers ────────────────────────────────────────

function hideCursor() {
  process.stdout.write("\x1B[?25l");
}

function showCursor() {
  process.stdout.write("\x1B[?25h");
}

function clearScreen() {
  process.stdout.write("\x1B[2J\x1B[H");
}

function moveCursor(row, col) {
  process.stdout.write(`\x1B[${row};${col}H`);
}

/**
 * Slow fade for Level 7 output.
 * Progressively dims each line over 3 seconds, then waits 7 more
 * seconds before clearing to a single line.
 *
 * Uses raw ANSI writes directly to stdout so we can control
 * the terminal without Ink's interference.
 */
async function solemnFade(lines, finalMessage) {
  hideCursor();
  clearScreen();

  // Render the text initially
  const startRow = 2;
  const rendered = lines.map((line, i) => ({
    text: line,
    row: startRow + i,
  }));

  // Draw initial text
  for (const r of rendered) {
    moveCursor(r.row, 2);
    process.stdout.write(r.text);
  }

  // Phase 1: Progressive dim over 3 seconds
  const fadeSteps = 15;
  const fadeInterval = 3000 / fadeSteps;

  for (let step = 1; step <= fadeSteps; step++) {
    await sleep(fadeInterval);

    // Dim factor from 1.0 to 0.0
    const dimFactor = 1 - step / fadeSteps;

    for (let i = 0; i < rendered.length; i++) {
      const r = rendered[i];
      if (!r.text) continue;

      moveCursor(r.row, 2);

      // Clear the line
      process.stdout.write("\x1B[2K");
      moveCursor(r.row, 2);

      // Apply dimming via color
      if (dimFactor > 0.05) {
        // Approximate dim by reducing RGB values
        const gray = Math.floor(200 * dimFactor);
        const colorCode = `\x1B[38;2;${gray};${gray};${gray + Math.floor(30 * dimFactor)}m`;
        process.stdout.write(`${colorCode}${r.text}\x1B[0m`);
      }
      // Below threshold, line is effectively invisible
    }
  }

  // Phase 2: Hold in darkness for 7 seconds
  await sleep(7000);

  // Phase 3: Clear and show final message
  clearScreen();
  const centerRow = Math.floor(process.stdout.rows / 2);
  moveCursor(centerRow, 2);
  process.stdout.write(chalk.dim.white(finalMessage));
  moveCursor(centerRow + 1, 2);
  process.stdout.write("\n");

  await sleep(3000);

  showCursor();
  clearScreen();
  process.exit(0);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Main CLI App ───────────────────────────────────────────────

const GENERIC_OBSERVATION_HINTS = [
  '"the way you listen without planning what to say next"',
  '"how you notice when someone gets quiet"',
  '"you always leave things better than you found them"',
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "name", // name → observation → confirm → compile → display → done
      name: "",
      observation: "",
      rejection: null,
      compiled: null,
      currentLevel: 0,
      selectedLevel: null,
      error: null,
    };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleObservationInput = this.handleObservationInput.bind(this);
    this.handleConfirmInput = this.handleConfirmInput.bind(this);
    this.handleLevelSelect = this.handleLevelSelect.bind(this);
    this.handleProceedInput = this.handleProceedInput.bind(this);
  }

  componentDidMount() {
    this.printHeader();
    this.promptForName();
  }

  printHeader() {
    process.stdout.write("\n");
    process.stdout.write(
      chalk.dim("  ── The Compliment Compiler ──\n")
    );
    process.stdout.write(
      chalk.dim("  Genuine observation in. Escalating sincerity out.\n")
    );
    process.stdout.write("\n");
  }

  promptForName() {
    process.stdout.write(chalk.white("  Their name: "));
    this.setNameReader();
  }

  setNameReader() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("", (answer) => {
      rl.close();
      const name = answer.trim();
      if (!name) {
        process.stdout.write(
          chalk.yellow("  I need a name. Try again.\n")
        );
        this.promptForName();
        return;
      }
      this.setState({ name, phase: "observation" }, () => {
        this.promptForObservation();
      });
    });
  }

  promptForObservation() {
    process.stdout.write("\n");
    process.stdout.write(
      chalk.white(
        `  What did you observe about ${this.state.name}?\n`
      )
    );
    process.stdout.write(
      chalk.dim("  (Be specific. Not what they'd want to hear — what you noticed.)\n")
    );

    const hint =
      GENERIC_OBSERVATION_HINTS[
        Math.floor(Math.random() * GENERIC_OBSERVATION_HINTS.length)
      ];
    process.stdout.write(chalk.dim(`  e.g. ${hint}\n`));
    process.stdout.write("\n  ");

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("", (answer) => {
      rl.close();
      const observation = answer.trim();

      const rejection = validate(observation);
      if (rejection) {
        process.stdout.write("\n");
        process.stdout.write(chalk.yellow(`  ${rejection}\n`));
        process.stdout.write("\n");
        this.promptForObservation();
        return;
      }

      this.setState({ observation, rejection: null }, () => {
        this.promptForConfirmation();
      });
    });
  }

  promptForConfirmation() {
    process.stdout.write("\n");
    process.stdout.write(
      chalk.white(
        `  You wrote: "${chalk.italic(this.state.observation)}"`
      )
    );
    process.stdout.write("\n\n");
    process.stdout.write(
      chalk.white(
        "  Is this something you actually observed, or something you think they'd want to hear? "
      )
    );

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(chalk.dim("[yes/no] "), (answer) => {
      rl.close();
      const lower = answer.trim().toLowerCase();

      if (lower === "yes" || lower === "y") {
        this.setState({ phase: "compile" }, () => {
          this.runCompilation();
        });
      } else {
        process.stdout.write("\n");
        process.stdout.write(
          chalk.dim("  Then it's not ready. Come back when it's real.\n")
        );
        process.stdout.write("\n");
        process.exit(0);
      }
    });
  }

  runCompilation() {
    const { name, observation } = this.state;
    const compiled = compile(name, observation);

    this.setState({ compiled, phase: "display" }, () => {
      this.displayLevels();
    });
  }

  displayLevels() {
    const { compiled, name } = this.state;

    process.stdout.write("\n");
    process.stdout.write(
      chalk.dim(`  Compiled for ${name}. 7 levels.\n`)
    );
    process.stdout.write(
      chalk.dim("  Each level escalates. Choose wisely.\n")
    );
    process.stdout.write("\n");

    for (const entry of compiled) {
      const levelStr = `  L${entry.level}`;
      if (entry.level <= 3) {
        process.stdout.write(chalk.white(levelStr + "  "));
      } else if (entry.level <= 5) {
        process.stdout.write(chalk.yellow(levelStr + "  "));
      } else {
        process.stdout.write(chalk.red(levelStr + "  "));
      }
      process.stdout.write(chalk.dim(entry.voice + "\n"));
    }

    process.stdout.write("\n");
    process.stdout.write(chalk.white("  Which level? [1-7] "));

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("", (answer) => {
      rl.close();
      const level = parseInt(answer.trim(), 10);

      if (isNaN(level) || level < 1 || level > 7) {
        process.stdout.write(
          chalk.yellow("\n  Pick a number between 1 and 7.\n")
        );
        this.displayLevels();
        return;
      }

      this.displayOutput(level);
    });
  }

  displayOutput(level) {
    const { compiled, name } = this.state;
    const entry = compiled[level - 1];

    process.stdout.write("\n");
    process.stdout.write("\n");

    if (level < 7) {
      process.stdout.write(
        chalk.dim(`  ── Level ${level} ── ${entry.voice} ──\n`)
      );
      process.stdout.write("\n");

      // Word-wrap the output at 72 chars
      const wrapped = this.wrapText(entry.text, 70);
      for (const line of wrapped) {
        process.stdout.write(`  ${line}\n`);
      }

      process.stdout.write("\n");

      if (level < 6) {
        process.stdout.write(
          chalk.dim("  Is this enough, or do they deserve more? ")
        );

        const readline = require("readline");
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        rl.question(chalk.dim("[1-7/quit] "), (answer) => {
          rl.close();
          const trimmed = answer.trim().toLowerCase();

          if (
            trimmed === "quit" ||
            trimmed === "q" ||
            trimmed === "done"
          ) {
            process.stdout.write(
              chalk.dim("\n  Delivered at level " + level + ".\n\n")
            );
            process.exit(0);
          }

          const next = parseInt(trimmed, 10);
          if (
            !isNaN(next) &&
            next >= 1 &&
            next <= 7
          ) {
            this.displayOutput(next);
          } else {
            process.stdout.write(
              chalk.yellow("\n  Pick a level (1-7) or type 'quit'.\n")
            );
            this.displayOutput(level);
          }
        });
      } else {
        // Level 6: the once-in-a-lifetime sentence
        process.stdout.write(
          chalk.dim(
            "  You've said it now. There's no level 7 preview.\n"
          )
        );
        process.stdout.write(
          chalk.dim("  Go back? [1-6] or type 'quit' to leave. ")
        );

        const readline = require("readline");
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        rl.question("", (answer) => {
          rl.close();
          const trimmed = answer.trim().toLowerCase();

          if (
            trimmed === "quit" ||
            trimmed === "q" ||
            trimmed === "done"
          ) {
            process.stdout.write(
              chalk.dim("\n  Said once. That's enough.\n\n")
            );
            process.exit(0);
          }

          const next = parseInt(trimmed, 10);
          if (!isNaN(next) && next >= 1 && next <= 6) {
            this.displayOutput(next);
          } else {
            process.stdout.write(
              chalk.yellow("\n  There's nowhere past 6 except 7.\n")
            );
            this.displayOutput(level);
          }
        });
      }
    } else {
      // Level 7: special handling
      process.stdout.write(
        chalk.red.dim(
          "  ── Level 7 ── This will not be saved. This will not repeat. ──\n"
        )
      );
      process.stdout.write("\n");
      process.stdout.write(
        chalk.white("  Press Enter to see it. It starts fading immediately.")
      );

      const readline = require("readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("", () => {
        rl.close();

        const lines = entry.text.split("\n").map((line) =>
          line ? `  ${line}` : ""
        );

        solemnFade(lines, "That one's yours to deliver.");
      });
    }
  }

  wrapText(text, width) {
    const lines = text.split("\n");
    const result = [];

    for (const line of lines) {
      if (line.length <= width) {
        result.push(line);
        continue;
      }

      // Wrap long lines
      const words = line.split(" ");
      let current = "";
      for (const word of words) {
        if (current.length + word.length + 1 > width) {
          result.push(current);
          current = word;
        } else {
          current = current ? current + " " + word : word;
        }
      }
      if (current) result.push(current);
    }

    return result;
  }

  render() {
    return null; // All output handled via process.stdout directly
  }
}

// ── Run ────────────────────────────────────────────────────────

// Ensure cursor is restored on exit
process.on("exit", () => {
  showCursor();
});

process.on("SIGINT", () => {
  showCursor();
  clearScreen();
  process.exit(0);
});

// Start the app
render(React.createElement(App));
