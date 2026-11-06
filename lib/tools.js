// One list of the site's free tools. Used by the header "Tools" menu,
// the homepage tools section and the "Related Tools" block on tool pages,
// so adding a tool here adds it everywhere. `group` sorts the header menu
// and decides which tools are shown as "related" first.

export const TOOL_GROUPS = [
  { key: 'season', label: 'Find your season' },
  { key: 'skin', label: 'Undertone & skin' },
  { key: 'makeup', label: 'Makeup shades' },
  { key: 'style', label: 'Colors, hair & style' },
];

export const TOOLS = [
  { group: 'season', href: '/#quiz', icon: '📸', title: 'Photo Color Analysis', short: 'Upload a selfie and get your color season.' },
  { group: 'season', href: '/what-season-am-i', icon: '🌸', title: 'What Season Am I? Quiz', short: 'Six questions, no photo: find your color season.' },
  { group: 'season', href: '/contrast-test', icon: '🌗', title: 'Contrast Level Test', short: 'Low, medium or high contrast? How to dress it.' },
  { group: 'season', href: '/seasonal-color-palettes', icon: '🗂️', title: 'All 12 Seasonal Palettes', short: 'Every season palette with hex codes.' },
  { group: 'skin', href: '/skin-tone-analyzer', icon: '🧑🏽', title: 'Skin Tone Analyzer', short: 'Your skin tone and undertone from a photo.' },
  { group: 'skin', href: '/undertone-test', icon: '🎯', title: 'Undertone Test', short: 'Warm, cool or neutral? Plus your best colors.' },
  { group: 'skin', href: '/foundation-undertone-finder', icon: '🧴', title: 'Foundation Undertone Finder', short: 'Warm, cool, neutral or olive foundation?' },
  { group: 'skin', href: '/concealer-shade-finder', icon: '✨', title: 'Concealer Shade Finder', short: 'Concealer shade and color corrector for you.' },
  { group: 'skin', href: '/gold-or-silver-jewelry-test', icon: '💍', title: 'Gold or Silver Test', short: 'Find the jewelry metal that flatters you.' },
  { group: 'makeup', href: '/lipstick-color-finder', icon: '💄', title: 'Lipstick Shade Finder', short: 'Nude, everyday and bold shades for your season.' },
  { group: 'makeup', href: '/blush-color-finder', icon: '🌷', title: 'Blush Color Finder', short: 'The blush shades that suit your season.' },
  { group: 'makeup', href: '/eyeshadow-color-finder', icon: '👁️', title: 'Eyeshadow Color Finder', short: 'Neutrals, accent colors and eyeliner for you.' },
  { group: 'style', href: '/does-this-color-suit-me', icon: '✅', title: 'Does This Color Suit Me?', short: 'Check any color against your season palette.' },
  { group: 'style', href: '/hair-color-finder', icon: '💇', title: 'Hair Color Finder', short: 'Hair colors that suit your skin tone.' },
  { group: 'style', href: '/color-harmony-generator', icon: '🎨', title: 'Color Harmony Generator', short: 'See which colors go together, with hex codes.' },
  { group: 'style', href: '/embed-widget', icon: '🧩', title: 'Embed the Quiz', short: 'Add a free color season quiz to your website.' },
];

// Up to `max` other tools for a page: same group first, then the rest in
// list order. The webmaster-only embed page is left out.
export function relatedTools(current, max = 9) {
  const self = TOOLS.find((t) => t.href === current);
  const pool = TOOLS.filter((t) => t.href !== current && t.href !== '/embed-widget');
  const same = self ? pool.filter((t) => t.group === self.group) : [];
  const rest = pool.filter((t) => !same.includes(t));
  return [...same, ...rest].slice(0, max);
}

// Tool pages that have a Pinterest pin image at /public/pins/<slug>.jpg
// (1000 × 1500). ToolPage shows it with a "Save to Pinterest" button.
export const PIN_IMAGES = new Set([
  '/lipstick-color-finder',
  '/foundation-undertone-finder',
  '/hair-color-finder',
  '/gold-or-silver-jewelry-test',
  '/blush-color-finder',
  '/eyeshadow-color-finder',
  '/concealer-shade-finder',
  '/does-this-color-suit-me',
  '/contrast-test',
  '/skin-tone-analyzer',
]);
