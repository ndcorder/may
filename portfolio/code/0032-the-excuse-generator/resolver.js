/**
 * Slot Resolver
 * 
 * Maps slot references in templates to data paths in details.json.
 * Each slot definition contains:
 *   - data_path: dot-notation path into the details structure
 *   - extract_field (optional): which field to pull from array objects
 *   - extract_nested (optional): for complex extractions like symptom sets
 */

const details = require('./details.json');
const { slot_definitions, excuse_templates, composite_templates } = require('./templates.json');

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => {
    if (acc == null) return undefined;
    return acc[part];
  }, obj);
}

function getRandomItem(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Resolve a single slot value from details.json
 * @param {string} slotName - The slot name (e.g., 'accident_role')
 * @param {object} constraints - Optional constraints (e.g., {must_have_id: 'involved'})
 * @param {object} alreadyResolved - Slots already resolved (for correlated picks)
 * @returns {{ value: string, data: object, truthfulness: string }}
 */
function resolveSlot(slotName, constraints, alreadyResolved) {
  const def = slot_definitions[slotName];
  if (!def) {
    return { value: `[UNKNOWN:${slotName}]`, data: null, truthfulness: 'unknown' };
  }

  const pool = getByPath(details, def.data_path);
  if (!pool) {
    return { value: `[MISSING:${def.data_path}]`, data: null, truthfulness: 'unknown' };
  }

  // Handle different data structures
  let selected;

  if (def.extract_nested && def.extract_nested.from_symptom_set) {
    // Special case: illness_symptom needs to pick from the same set as illness_name
    return resolveSymptomSlot(def, alreadyResolved);
  }

  if (Array.isArray(pool)) {
    // Object arrays with extract_field
    if (constraints && constraints.must_have_id) {
      const match = pool.find(item => item.id === constraints.must_have_id);
      if (match) {
        selected = match;
      } else {
        selected = getRandomItem(pool);
      }
    } else {
      selected = getRandomItem(pool);
    }

    if (typeof selected === 'object') {
      const field = def.extract_field || 'label';
      return {
        value: selected[field] || selected.label || JSON.stringify(selected),
        data: selected,
        truthfulness: 'fabricated'
      };
    } else {
      // Simple string array
      return { value: selected, data: { value: selected }, truthfulness: 'fabricated' };
    }
  } else if (typeof pool === 'object') {
    // Object pools (e.g., symptom_sets)
    const keys = Object.keys(pool);
    const chosenKey = getRandomItem(keys);
    const chosen = pool[chosenKey];
    
    if (def.extract_field) {
      return {
        value: chosen[def.extract_field],
        data: chosen,
        key: chosenKey,
        truthfulness: 'fabricated'
      };
    } else {
      return {
        value: chosen.name || chosen.label || JSON.stringify(chosen),
        data: chosen,
        key: chosenKey,
        truthfulness: 'fabricated'
      };
    }
  }

  return { value: `[UNHANDLED:${slotName}]`, data: null, truthfulness: 'unknown' };
}

/**
 * Resolve a symptom slot correlated with the illness already selected
 */
function resolveSymptomSlot(def, alreadyResolved) {
  // If we already picked an illness, get a symptom from that same set
  if (alreadyResolved && alreadyResolved.illness) {
    const illnessData = alreadyResolved.illness.data;
    if (illnessData && illnessData.symptoms) {
      const symptom = getRandomItem(illnessData.symptoms);
      return { value: symptom, data: illnessData, truthfulness: 'fabricated' };
    }
  }

  // Otherwise pick a random illness and get a symptom
  const symptomSets = details.illnesses.symptom_sets;
  const keys = Object.keys(symptomSets);
  const chosenKey = getRandomItem(keys);
  const chosen = symptomSets[chosenKey];
  const symptom = getRandomItem(chosen.symptoms);
  
  return {
    value: symptom,
    data: chosen,
    key: chosenKey,
    truthfulness: 'fabricated'
  };
}

/**
 * Resolve all slots for a template
 * @param {object} templateDef - The template definition from templates.json
 * @returns {{ resolved: object, values: object, rawTemplate: string }}
 */
function resolveTemplate(templateDef) {
  const slots = templateDef.slots || {};
  const constraints = templateDef.slot_constraints || {};
  const resolved = {};
  const values = {};

  // First pass: resolve all slots
  for (const [slotAlias, slotName] of Object.entries(slots)) {
    const slotConstraints = constraints[slotAlias] || null;
    resolved[slotAlias] = resolveSlot(slotName, slotConstraints, values);
    values[slotAlias] = resolved[slotAlias];
  }

  // Fill in the template
  let text = templateDef.template_text;
  for (const [alias, resolved_data] of Object.entries(resolved)) {
    text = text.replace(new RegExp(`\\{${alias}\\}`, 'g'), resolved_data.value);
  }

  return {
    text: text,
    resolved: resolved,
    rawTemplate: templateDef.template_text,
    truthfulness: templateDef.truthfulness_flag,
    interrogationType: templateDef.interrogation_type,
    believeNotes: templateDef.believe_notes
  };
}

/**
 * Resolve a composite template
 */
function resolveComposite(compositeDef) {
  const componentTexts = [];
  const allResolved = {};

  for (const component of compositeDef.components) {
    const templateName = component.template;
    const templateDef = excuse_templates[templateName];
    if (!templateDef) {
      componentTexts.push(`[MISSING TEMPLATE: ${templateName}]`);
      continue;
    }

    const result = resolveTemplate({
      ...templateDef,
      slots: component.slots || templateDef.slots,
      slot_constraints: templateDef.slot_constraints
    });

    componentTexts.push(result.text);
    Object.assign(allResolved, result.resolved);
  }

  // Build composite text
  let text = compositeDef.template_text;
  componentTexts.forEach((componentText, i) => {
    const marker = i === 0 ? 'work_text' : 'family_text';
    text = text.replace(`{${marker}}`, componentText);
  });

  return {
    text: text,
    resolved: allResolved,
    truthfulness: 'fabricated',
    interrogationType: compositeDef.interrogation_type,
    believeNotes: compositeDef.believe_notes
  };
}

/**
 * Find templates matching target and tolerance
 */
function findMatchingTemplates(target, tolerance) {
  const matches = [];

  for (const [name, template] of Object.entries(excuse_templates)) {
    if (template.target_match.includes(target) && template.tolerance_match.includes(tolerance)) {
      matches.push({ name, ...template });
    }
  }

  for (const [name, composite] of Object.entries(composite_templates || {})) {
    if (composite.target_match.includes(target) && composite.tolerance_match.includes(tolerance)) {
      matches.push({ name, composite: true, ...composite });
    }
  }

  return matches;
}

/**
 * Generate a complete excuse
 */
function generateExcuse(target, tolerance, notice) {
  const matches = findMatchingTemplates(target, tolerance);

  if (matches.length === 0) {
    return {
      text: "I can't make it. Something came up.",
      resolved: {},
      truthfulness: 'embellished',
      interrogationType: 'general',
      believeNotes: 'Fallback excuse — no matching template found.',
      target,
      tolerance,
      notice
    };
  }

  const selected = getRandomItem(matches);
  const result = selected.composite
    ? resolveComposite(selected)
    : resolveTemplate(selected);

  return {
    ...result,
    templateName: selected.name,
    target,
    tolerance,
    notice
  };
}

module.exports = {
  resolveSlot,
  resolveTemplate,
  resolveComposite,
  findMatchingTemplates,
  generateExcuse,
  getByPath,
  getRandomItem
};
