// Contextual links from guides to the matching free tools. Each rule
// matches an h2 heading; its sentence is added at the end of that
// section (before the next h2). Each rule is used at most once per guide,
// a rule is skipped when every tool it links to is already linked in that
// guide, and no guide gets more than MAX_PER_GUIDE of these sentences, so
// the links read as help, not as ads.

const MAX_PER_GUIDE = 4;

const RULES = [
  {
    match: /hijab/i,
    tools: ['/hijab-color-finder'],
    text: 'Want your exact shades? The free [hijab color finder](/hijab-color-finder) shows everyday and statement hijab colors for your season, with hex codes.',
  },
  {
    match: /lipstick/i,
    tools: ['/lipstick-color-finder'],
    text: 'Want shades picked for you? The [lipstick shade finder](/lipstick-color-finder) shows nude, everyday and bold lipsticks for your season, with hex codes.',
  },
  {
    match: /\bblush\b/i,
    tools: ['/blush-color-finder'],
    text: 'To see four blush shades for your season side by side, try the free [blush color finder](/blush-color-finder).',
  },
  {
    match: /eyeshadow/i,
    tools: ['/eyeshadow-color-finder'],
    text: 'The [eyeshadow color finder](/eyeshadow-color-finder) gives you everyday neutrals, accent colors and the best eyeliner shade for your season.',
  },
  {
    match: /makeup colors:/i,
    tools: ['/lipstick-color-finder', '/blush-color-finder', '/eyeshadow-color-finder'],
    text: 'Want the exact shades for your season? Try the [lipstick shade finder](/lipstick-color-finder), the [blush color finder](/blush-color-finder) and the [eyeshadow color finder](/eyeshadow-color-finder).',
  },
  {
    match: /^foundation/i,
    tools: ['/foundation-undertone-finder', '/concealer-shade-finder'],
    text: 'Not sure which base to buy? The [foundation undertone finder](/foundation-undertone-finder) tells you whether to look for warm, cool, neutral or olive shades, and the [concealer shade finder](/concealer-shade-finder) picks the right color corrector.',
  },
  {
    match: /hair colou?rs?/i,
    tools: ['/hair-color-finder'],
    text: 'Want a personal suggestion? The [hair color finder](/hair-color-finder) uses your undertone, depth and contrast to suggest hair colors with hex codes you can show your colorist.',
  },
  {
    match: /hex codes/i,
    tools: ['/does-this-color-suit-me'],
    text: 'Shopping online? Paste any product color into the [color checker](/does-this-color-suit-me) to see how close it is to your palette.',
  },
  {
    match: /jewel|metals?\b|gold or silver/i,
    tools: ['/gold-or-silver-jewelry-test'],
    text: 'Still unsure? The free [gold or silver jewelry test](/gold-or-silver-jewelry-test) checks six undertone signs and tells you which metal suits you.',
  },
  {
    match: /how to (know|tell|find)|not sure you are|start with your undertone|undertones on|to your undertone|find your exact/i,
    tools: ['/undertone-test', '/skin-tone-analyzer'],
    text: 'To check your undertone, take the [undertone test](/undertone-test), or read your skin tone from a selfie with the [skin tone analyzer](/skin-tone-analyzer).',
  },
  {
    match: /five quick tests|the three variables|undertone is only half/i,
    tools: ['/contrast-test'],
    text: 'Contrast is one of the easiest traits to misjudge. The [personal contrast test](/contrast-test) checks it in five questions.',
  },
  {
    match: /makeup (for|color palette$)|best makeup/i,
    tools: ['/lipstick-color-finder', '/blush-color-finder'],
    text: 'For shades chosen for you, use the [lipstick shade finder](/lipstick-color-finder) and the [blush color finder](/blush-color-finder).',
  },
  {
    match: /before you buy/i,
    tools: ['/does-this-color-suit-me'],
    text: 'Shopping online? Paste the product color into the [color checker](/does-this-color-suit-me) to see how close it is to your season palette.',
  },
  {
    match: /outfit colou?r combinations|starter wardrobe|anchor/i,
    tools: ['/color-harmony-generator'],
    text: 'Build more combinations from any of these shades with the [color harmony generator](/color-harmony-generator).',
  },
];

// RULES are in priority order: when a guide has more matching sections
// than MAX_PER_GUIDE, the earlier rules win.
export function withToolLinks(slug, body) {
  const linked = new Set();
  body.forEach((b) => {
    const m = (b.text || '').match(/\]\((\/[^)\s#]+)/g);
    if (m) m.forEach((x) => linked.add(x.slice(2)));
  });

  // Every (rule, section) pair that could apply, best rule first.
  const candidates = [];
  body.forEach((b, i) => {
    if (b.type !== 'h2') return;
    RULES.forEach((r, ri) => {
      if (r.match.test(b.text)) candidates.push({ ri, i });
    });
  });
  candidates.sort((a, b) => a.ri - b.ri || a.i - b.i);

  const usedRules = new Set();
  const usedSections = new Set();
  const chosen = new Map(); // h2 index -> rule
  for (const c of candidates) {
    if (chosen.size >= MAX_PER_GUIDE) break;
    const r = RULES[c.ri];
    if (usedRules.has(c.ri) || usedSections.has(c.i)) continue;
    if (!r.tools.some((t) => !linked.has(t) && !slug.includes(t.slice(1)))) continue;
    usedRules.add(c.ri);
    usedSections.add(c.i);
    r.tools.forEach((t) => linked.add(t));
    chosen.set(c.i, r);
  }

  // Insert each sentence at the end of its section.
  const out = [];
  let pending = null;
  body.forEach((b, i) => {
    if ((b.type === 'h2' || b.type === 'faq') && pending) {
      out.push({ type: 'p', text: pending.text });
      pending = null;
    }
    out.push(b);
    if (chosen.has(i)) pending = chosen.get(i);
  });
  if (pending) out.push({ type: 'p', text: pending.text });
  return out;
}
