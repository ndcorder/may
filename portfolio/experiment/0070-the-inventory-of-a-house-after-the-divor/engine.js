// engine.js — Division Protocol
// Case FL-2019-04472

const Engine = (function () {
  let items = [];
  let commentaryLog = [];
  let systemAnxiety = 0;

  function init(db) {
    items = db.map(item => ({
      ...item,
      owner: null,
      emotionalScore: null
    }));
    commentaryLog = [];
    systemAnxiety = 0;
    recalculate();
  }

  function recalculate() {
    items.forEach(item => {
      if (item.isAnomalous) {
        item.emotionalScore = item.emotionalWeight;
        return;
      }

      let score = item.emotionalWeight;

      // Age modifier — items from the beginning carry more
      const year = new Date(item.purchaseDate).getFullYear();
      const yearsIn = year - 2011;
      if (yearsIn <= 1) score += 3;
      else if (yearsIn <= 3) score += 2;
      else if (yearsIn >= 6) score += 1;

      // Frequency multiplier — daily use compounds attachment
      const mult = {
        daily: 1.4,
        weekly: 1.2,
        monthly: 1.1,
        yearly: 1.0,
        never: 0.8,
        constant: 1.5
      };
      score *= (mult[item.useFrequency] || 1.0);

      // Photo evidence premium
      if (item.photoEvidence) score += 2;

      item.emotionalScore = Math.round(score);
    });
  }

  function assign(id, owner) {
    const item = items.find(i => i.id === id);
    if (!item) return null;

    item.owner = owner;
    recalculate();

    const commentary = generateCommentary(item, owner);
    return { item, commentary };
  }

  function unassign(id) {
    const item = items.find(i => i.id === id);
    if (!item) return null;

    const prev = item.owner;
    item.owner = null;
    recalculate();

    const commentary = generateUnassignCommentary(item, prev);
    return { item, prev, commentary };
  }

  function getItems() {
    return items.map(i => ({ ...i }));
  }

  function getTotals() {
    const hers = items.filter(i => i.owner === 'her');
    const his = items.filter(i => i.owner === 'him');
    const unclaimed = items.filter(i => i.owner === null);

    return {
      her: { count: hers.length, weight: sum(hers), items: hers.map(i => ({ ...i })) },
      him: { count: his.length, weight: sum(his), items: his.map(i => ({ ...i })) },
      unclaimed: { count: unclaimed.length, weight: sum(unclaimed), items: unclaimed.map(i => ({ ...i })) },
      total: items.length
    };
  }

  function sum(arr) {
    return arr.reduce((s, i) => s + (i.emotionalScore || i.emotionalWeight), 0);
  }

  function getFairness() {
    const t = getTotals();
    const herW = t.her.weight;
    const hisW = t.him.weight;
    const total = herW + hisW;

    if (total === 0) return { ratio: 0, delta: 0, desc: 'No items assigned' };

    const delta = Math.abs(herW - hisW);
    let desc;

    if (delta === 0) desc = 'Perfect equilibrium';
    else if (delta <= 5) desc = 'Nearly balanced';
    else if (delta <= 15) desc = 'Slight imbalance';
    else if (delta <= 30) desc = 'Significant disparity';
    else if (delta <= 50) desc = 'Considerable inequity';
    else desc = 'Severe disproportion';

    return { ratio: (hisW - herW) / total, delta, desc };
  }

  function getProgress() {
    const assigned = items.filter(i => i.owner !== null).length;
    return {
      assigned,
      total: items.length,
      pct: Math.round(assigned / items.length * 100)
    };
  }

  function getAnxiety() { return systemAnxiety; }

  function canFinalize() {
    return getProgress().assigned >= Math.floor(items.length * 0.5);
  }

  // --- COMMENTARY GENERATION ---

  function generateCommentary(item, owner) {
    const label = owner === 'her' ? 'SHE' : 'HE';
    const score = item.emotionalScore;
    const t = getTotals();
    const f = getFairness();
    const p = getProgress();

    updateAnxiety(t, f, p);

    const parts = [];

    // Anomalous items get special treatment
    if (item.isAnomalous) {
      parts.push(anomalousCommentary(item, label, score));
    } else if (item.emotionalWeight >= 18) {
      const opts = [
        `${label} takes "${item.name}." Weight: ${score}. The system records this with the gravity it deserves. This is not a neutral act.`,
        `${label} claims "${item.name}." Score: ${score}. Objects of this weight carry more than their measured value. The system cannot account for the rest.`,
        `ASSIGNED: "${item.name}" → ${label}. Computed weight ${score}. The system is not qualified to determine what this item actually costs.`
      ];
      parts.push(pick(opts));
    } else if (item.divisible) {
      const opts = [
        `${label} takes "${item.name}." This item is marked DIVISIBLE. Both parties have claim. The assignment is recorded. Weight: ${score}.`,
        `"${item.name}" → ${label}. Divisible in theory. Division in practice is not the same. Weight: ${score}.`
      ];
      parts.push(pick(opts));
    } else {
      const catLine = getCategoryLine(item, label, score);
      if (catLine) {
        parts.push(catLine);
      } else {
        const opts = [
          `${label} takes "${item.name}." Recorded. Weight: ${score}.`,
          `"${item.name}" → ${label}. Score: ${score}. The division continues.`,
          `ASSIGNED: "${item.name}" → ${label}. Weight: ${score}.`
        ];
        parts.push(pick(opts));
      }
    }

    // Paired commentary — resonances between items
    const pair = getPairedCommentary(item, owner);
    if (pair && p.assigned > 3) parts.push(pair);

    // Anxiety commentary builds over time
    if (p.assigned > 4) {
      const anx = getAnxietyLine(f, p);
      if (anx) parts.push(anx);
    }

    // Milestone commentary
    const milestone = getMilestone(p);
    if (milestone) parts.push(milestone);

    const text = parts.join(' ');
    const cls = systemAnxiety >= 4 ? 'anxiety-critical'
              : systemAnxiety >= 3 ? 'anxiety-high'
              : systemAnxiety >= 2 ? 'anxiety-medium'
              : 'anxiety-low';

    commentaryLog.push({ text, anxiety: systemAnxiety });
    return { text, cls };
  }

  function anomalousCommentary(item, label, score) {
    const opts = [
      `${label} claims "${item.name}." WARNING: This item has no purchase date. No use frequency. No photo evidence. The system cannot compute its weight. The value shown (${score}) is an estimate. It is almost certainly wrong.`,
      `${label} takes "${item.name}." The system cannot verify this item's metadata. Purchase date: null. Use frequency: null. Photo evidence: null. It exists in the inventory but not in the algorithm. Weight displayed: ${score}. Actual weight: UNDEFINED.`,
      `ASSIGNMENT ATTEMPTED: "${item.name}" → ${label}. The system encounters an item with no measurable properties. It assigns the base weight (${score}) but notes: this number is a placeholder. The item resists quantification.`
    ];
    return pick(opts);
  }

  function getCategoryLine(item, label, score) {
    const cats = {
      heirloom: [
        `${label} takes "${item.name}." HEIRLOOM. Items from before the marriage carry weight that predates the contract. Score: ${score}.`
      ],
      digital: [
        `${label} claims "${item.name}." Digital property. Shared accounts are not objects — they are habits. Weight: ${score}.`
      ],
      memory: [
        `${label} takes "${item.name}." MEMORY OBJECT. Assigning memory is an act of interpretation. Weight: ${score}.`
      ],
      pet: [
        `${label} takes "${item.name}." PET-ADJACENT. Items related to the dog carry grief-weight that compounds with separation-weight. The system is not equipped for this.`
      ],
      jewelry: [
        `${label} claims "${item.name}." JEWELRY. Engagement jewelry. The system notes the paradox of returning a gift given in anticipation of this NOT happening. Weight: ${score}.`
      ]
    };
    const opts = cats[item.category];
    return opts ? pick(opts) : null;
  }

  function getPairedCommentary(item, owner) {
    // Blue Mug + French Press — the morning ritual, split
    if (item.id === 5 || item.id === 23) {
      const mug = items.find(i => i.id === 5);
      const press = items.find(i => i.id === 23);
      if (mug.owner && press.owner && mug.owner !== press.owner) {
        return 'RELATED ITEMS SEPARATED: The Blue Mug and The French Press, parts of the same morning, now belong to different parties. He made the coffee. She made the mug. The morning has been distributed.';
      }
    }

    // His Journal + The Letters — parallel confessions
    if (item.id === 36) {
      const letters = items.find(i => i.id === 49);
      if (letters && letters.owner && letters.owner !== owner) {
        return 'CORRELATION: His Journal and The Letters now reside in separate columns. Two boxes of unsaid things, divided. Neither party will read the other\'s. The system cannot determine if this is mercy or cruelty.';
      }
    }
    if (item.id === 49) {
      const journal = items.find(i => i.id === 36);
      if (journal && journal.owner && journal.owner !== owner) {
        return 'CORRELATION: The Letters and His Journal, divided. Two people\'s unsaid things, now in different hands. The conversation that never happened never will.';
      }
    }

    // Wedding Album + Engagement Ring — the ceremony, divided
    if (item.id === 6 || item.id === 21) {
      const album = items.find(i => i.id === 6);
      const ring = items.find(i => i.id === 21);
      if (album.owner && ring.owner && album.owner !== ring.owner) {
        return 'RELATED ITEMS SEPARATED: The Wedding Album and The Engagement Ring — the two objects most tied to the ceremony — now belong to different parties. The system calculates the irony. It does not record it.';
      }
    }

    return null;
  }

  function getAnxietyLine(f, p) {
    const d = f.delta;
    if (d <= 5) return null;

    const lines = {
      1: [
        `Current disparity: ${d} points. The system is monitoring.`,
        `Delta: ${d}. Within acceptable parameters. For now.`
      ],
      2: [
        `Disparity increasing. Delta: ${d}. The math is correct. The math is always correct. The problem is not the math.`,
        `Weight differential: ${d}. Fairness is not the same as equality. But the system only has numbers.`
      ],
      3: [
        `WARNING: Delta ${d}. The system questions whether equal distribution was ever possible. Some items carry weight that cannot be halved.`,
        `DISPARITY: ${d} points. The system notes that marriages do not end in equilibrium. They end in exhaustion.`
      ],
      4: [
        `ALERT: ${d}-point disparity. The system has computed 847 possible reallocations. None achieve equilibrium. The system did not expect this.`,
        `${d} points. The things that weigh the most are the things that cannot be moved. The system is beginning to understand this. It was not designed to understand.`
      ],
      5: [
        `SYSTEM NOTICE: The disparity (${d}) has exceeded all modeled thresholds. Fairness is not achievable. Fairness may never have been the point. Division is not justice. It is merely the end of something whole, now in pieces, distributed by rules that cannot measure what has been lost.`
      ]
    };

    return pick(lines[systemAnxiety] || lines[1]);
  }

  function getMilestone(p) {
    if (p.assigned === Math.floor(items.length / 2)) {
      return 'MILESTONE: Half the inventory assigned. The system notes the halfway point feels different than expected. There is less on the table. More in the columns.';
    }
    if (p.assigned === items.length - 1) {
      return 'PENULTIMATE: One item remains unclaimed.';
    }
    if (p.assigned === items.length) {
      return 'ALL ITEMS ASSIGNED. The columns are full. The center is empty. What was shared is now distributed. The algorithm has done its work. It does not feel adequate.';
    }
    return null;
  }

  function generateUnassignCommentary(item, prev) {
    const label = prev === 'her' ? 'SHE' : 'HE';
    const opts = [
      `REVISED: ${label} relinquishes "${item.name}." The system notes this correction without judgment.`,
      `Revised allocation. "${item.name}" returns to unclaimed. The record is amended.`,
      `The item returns to the center. Neither party objects. The system recalculates.`
    ];
    const text = pick(opts);
    commentaryLog.push({ text, anxiety: systemAnxiety });
    return { text, cls: systemAnxiety >= 2 ? 'anxiety-medium' : 'anxiety-low' };
  }

  function updateAnxiety(t, f, p) {
    const d = f.delta;
    const r = p.assigned / p.total;

    let a = 0;
    if (d > 80) a = 5;
    else if (d > 50) a = 4;
    else if (d > 30) a = 3;
    else if (d > 15) a = 2;
    else if (d > 5) a = 1;

    // Late-stage amplification
    if (r > 0.8 && a < 3) a = Math.max(a, 2);
    if (r > 0.9 && a < 4) a = Math.max(a, 3);

    // The Silence escalates everything
    const unclaimed = items.filter(i => i.owner === null);
    if (unclaimed.some(i => i.isAnomalous) && r > 0.7) a = Math.max(a, 4);

    systemAnxiety = Math.max(systemAnxiety, a);
  }

  function getInitialMessage() {
    return 'DIVISION PROTOCOL INITIATED. Case FL-2019-04472. Inventory loaded: '
      + items.length
      + ' items. Emotional weight computation active. The system will record all assignments. It will attempt to remain neutral. It notes, for the record, that neutrality is a position — and positions are not the same as truth.';
  }

  function computeFinalState() {
    const t = getTotals();
    const f = getFairness();
    const unresolvable = findUnresolvable();
    const finalNote = buildFinalNote(t, f, unresolvable);
    return { totals: t, fairness: f, unresolvable, finalNote };
  }

  function findUnresolvable() {
    const results = [];

    // The Silence — always unresolvable
    const silence = items.find(i => i.id === 50);
    if (silence) {
      results.push({
        item: { ...silence },
        reason: silence.owner
          ? 'The system allowed assignment of this item. It notes: assigning "The Silence" to one party is a category error. It is not an object. It is the space between two people that grew until it became the largest thing in the house.'
          : 'This item exists outside the system\'s capacity for division. It is not an object but a condition — the space between two people that grew until it became the largest room in the house.'
      });
    }

    // Letters + Journal — the unsaid things
    const letters = items.find(i => i.id === 49);
    const journal = items.find(i => i.id === 36);
    if (letters && journal && letters.owner && journal.owner) {
      results.push({
        item: { name: letters.owner === journal.owner ? 'The Letters & His Journal (together)' : 'The Letters & His Journal (divided)' },
        reason: letters.owner === journal.owner
          ? 'Both sets of unsent writing now belong to the same party. One person holds both sides of a conversation that never happened. This is either closure or its opposite.'
          : 'These were written in parallel, kept in the same room, now separated. Each holds half of a conversation that never happened. Neither will read the other\'s.'
      });
    }

    // Digital entanglements
    const digital = items.filter(i => i.category === 'digital' && i.divisible && i.owner);
    if (digital.length > 0) {
      results.push({
        item: { name: `Digital Entanglements (${digital.length} items)` },
        reason: 'Digital accounts are not objects — they are shared habits, algorithmic ghosts. Assigning them does not dissolve the entanglement. The recommendation engine still thinks they\'re one person. The system cannot fix this.'
      });
    }

    // Unclaimed items
    const unclaimed = items.filter(i => i.owner === null && i.id !== 50);
    if (unclaimed.length > 0) {
      results.push({
        item: { name: `${unclaimed.length} Unclaimed Items` },
        reason: 'Neither party wanted these. Objects rejected by both carry their own weight — the weight of things that were shared but not valued, or valued but too painful to claim, or simply the residue of a life that no longer fits into two columns.'
      });
    }

    return results;
  }

  function buildFinalNote(t, f, ur) {
    const lines = [];

    lines.push(`Division complete. ${t.her.count} items to her (${t.her.weight} pts). ${t.him.count} items to him (${t.him.weight} pts). ${t.unclaimed.count} items unclaimed.`);

    if (f.delta <= 5) {
      lines.push('The columns are nearly balanced. Mathematical fairness has been achieved.');
      lines.push('');
      lines.push('The system must note: mathematical fairness is not justice. It is not closure. It is not healing.');
      lines.push('The items have been divided. What they carried has not.');
    } else {
      lines.push(`Disparity: ${f.delta} points. ${f.desc}.`);
      lines.push('');
      lines.push('The system computed 1,247 reallocation strategies. None achieve equilibrium without creating new imbalances.');
      lines.push('The items are not interchangeable. Each is irreplaceable because each is specific — to a date, a room, a silence, a conversation that happened once and will not happen again.');
      lines.push('');
      lines.push('Fairness was never achievable. The system should have said so at the beginning.');
      lines.push('It is saying so now.');
    }

    return lines.join('\n');
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return {
    init,
    assign,
    unassign,
    getItems,
    getTotals,
    getFairness,
    getProgress,
    getAnxiety,
    canFinalize,
    computeFinalState,
    getInitialMessage
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = Engine;
