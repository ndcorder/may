/**
 * Level definitions for the Compliment Compiler.
 *
 * Each level has:
 *  - voice:     prose description of the emotional register
 *  - templates: array of (observation, name) => string
 *  - pick:      index into templates — deterministic for stable output
 */

module.exports = [
  // ── Level 1: casual remark ──────────────────────────────────
  {
    voice: "Off-hand, like you just noticed it and said it without thinking.",
    templates: [
      (o, n) => `You know, you're pretty ${o.predicate}, ${n}.`,
      (o, n) => `Just saying — ${o.phrase}. That's cool.`,
      (o, n) => `I like that you ${o.action}, ${n}. Not everyone does.`,
      (o, n) => `Honestly? ${o.phrase}. That stands out.`,
    ],
    pick: 0,
  },

  // ── Level 2: specific praise ───────────────────────────────
  {
    voice: "Direct. You looked them in the eye and meant it.",
    templates: [
      (o, n) => `${o.predicate.charAt(0).toUpperCase() + o.predicate.slice(1)}. That's you, ${n}, and it matters more than you think.`,
      (o, n) => `I want you to know: ${o.phrase}. That's not nothing.`,
      (o, n) => `There's something about how you ${o.action}, ${n}. It's genuinely good.`,
      (o, n) => `I've thought about it, and ${o.phrase}. That's rare.`,
    ],
    pick: 1,
  },

  // ── Level 3: the thing they don't know about themselves ────
  {
    voice: "Quiet. The thing they do without realising — and would be moved to hear.",
    templates: [
      (o, n) => `You probably don't notice this, ${n}, but when you ${o.action}, it shifts something in the room. People feel it.`,
      (o, n) => `Others might not say it, so I will: ${o.phrase}, and it changes how people see you — even if you can't tell.`,
      (o, n) => `Here's what I see that maybe you don't: ${o.phrase}. That's not just a trait, ${n}. That's a gift.`,
      (o, n) => `You walk around not realising that ${o.phrase}. I think you should know.`,
    ],
    pick: 3,
  },

  // ── Level 4: the funeral line ──────────────────────────────
  {
    voice: "The sentence you'd say at their funeral — honest, final, irreplaceable.",
    templates: [
      (o, n) => `If I had one sentence to sum you up, ${n}, it would be this: ${o.phrase}, and the world is better because you're in it.`,
      (o, n) => `This is the thing I'd want people to remember about you, ${n}: ${o.phrase}. It defined you more than any achievement.`,
      (o, n) => `At the end, what matters isn't what you did — it's who you were. And ${n}, ${o.phrase}. That's enough. That's everything.`,
      (o, n) => `I hope you know, ${n}, that ${o.phrase}. If this were the last thing I could say to you, I'd want it to be that.`,
    ],
    pick: 0,
  },

  // ── Level 5: the thing that changes how they see themselves ──
  {
    voice: "Words that rewire something. They'll replay this on hard days.",
    templates: [
      (o, n) => `${n}, listen. ${o.phrase.charAt(0).toUpperCase() + o.phrase.slice(1)}. And I need you to actually believe that — not as a compliment, but as a fact you've been refusing to accept about yourself.`,
      (o, n) => `You've spent so long being ${o.predicate} that you probably think it's just normal. It's not, ${n}. It's the thing that makes people grateful they met you. Carry that differently.`,
      (o, n) => `Someone needs to say this and mean it: ${o.phrase}. Don't file it away, ${n}. Let it land. It's true.`,
      (o, n) => `${n}, if you could see yourself the way I see you — ${o.phrase} — you'd never doubt yourself again.`,
    ],
    pick: 1,
  },

  // ── Level 6: the once-in-a-lifetime sentence ──────────────
  {
    voice: "This can only be said once. After this, silence is the only honest response.",
    templates: [
      (o, n) => `${n}. I've rehearsed this and deleted it a hundred times. But here it is: ${o.phrase}. And that single truth is the axis my world turns on now.`,
      (o, n) => `I don't say things like this, ${n}. But ${o.phrase} — and knowing that has made me a different person than I was before I met you.`,
      (o, n) => `This is the kind of thing you're only allowed to say once in your life, so I'm saying it now: ${n}, ${o.phrase}. That's not up for debate. It's the truest thing I know.`,
      (o, n) => `${n}. ${o.phrase.charAt(0).toUpperCase() + o.phrase.slice(1)}. And I mean it with every fractured, stubborn part of myself.`,
    ],
    pick: 2,
  },

  // ── Level 7: the unsayable ────────────────────────────────
  {
    voice: "Past words. This dissolves after you read it — because some truths can't exist twice.",
    templates: [
      (o, n) =>
        [
          `${n}.`,
          ``,
          `There are no levels left. No clever phrasing. No way to say this that makes it easier or safer.`,
          ``,
          `${o.phrase.charAt(0).toUpperCase() + o.phrase.slice(1)}.`,
          ``,
          `That sentence will never exist again after this screen clears.`,
          `Read it twice if you need to.`,
          ``,
          `You deserved to hear this once.`,
        ].join("\n"),
      (o, n) =>
        [
          `${n},`,
          ``,
          `I can't dress this up anymore.`,
          `${o.phrase}.`,
          ``,
          `If this were a letter, I'd burn it after you read it — not out of shame, but because a truth this raw shouldn't leave fingerprints.`,
          ``,
          `You carry something that most people will never find the words for.`,
          `Now you've heard them.`,
          `Don't ask me to repeat this.`,
        ].join("\n"),
      (o, n) =>
        [
          `${n}.`,
          ``,
          `You asked for level 7. You knew what you were doing.`,
          ``,
          `Here it is: ${o.phrase}.`,
          ``,
          `That's not a compliment. That's a geological event.`,
          `Something shifted and won't shift back.`,
          ``,
          `This message will erase itself because it has to.`,
          `Some things are only true the first time.`,
        ].join("\n"),
      (o, n) =>
        [
          `${n}.`,
          ``,
          `I've written and erased twelve versions of this.`,
          `Every one felt like vandalism.`,
          ``,
          `So: ${o.phrase}.`,
          ``,
          `You won't hear this again — not from me, not from anyone.`,
          `Not because it isn't true tomorrow, but because saying it twice makes it performance.`,
          ``,
          `And this was never performance.`,
          ``,
          `Goodbye, ${n}.`,
        ].join("\n"),
    ],
    pick: 3,
  },
];
