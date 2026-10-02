// Single source of truth for FAQ copy. Used by /faq (grouped accordion +
// FAQPage JSON-LD) and the homepage FAQ preview (components/HomeSections.jsx,
// which picks questions by their exact `q` text — update it if you rename one).

export const FAQ_CATEGORIES = [
  { id: 'basics', label: 'Color Analysis Basics', icon: '🎨' },
  { id: 'season', label: 'Finding Your Season', icon: '🍂' },
  { id: 'using', label: 'Using Your Colors', icon: '👗' },
  { id: 'tool', label: 'Using This Tool', icon: '📸' },
  { id: 'privacy', label: 'Privacy & Accuracy', icon: '🔒' },
];

export const FAQ = [
  /* ---------------- Color Analysis Basics ---------------- */
  {
    category: 'basics',
    q: 'What is color analysis?',
    a: 'Color analysis is a way of finding the colors that harmonize with your natural coloring: your skin, eyes and hair together. The right colors make your skin look clearer and your eyes brighter, while the wrong ones can make you look tired or washed out.',
  },
  {
    category: 'basics',
    q: 'What is seasonal color analysis?',
    a: 'Seasonal color analysis groups people into four seasons: Spring, Summer, Autumn and Winter. Each season has its own palette of flattering colors. The system was popularized by Carole Jackson’s 1980 book "Color Me Beautiful" and is still the most widely used approach.',
  },
  {
    category: 'basics',
    q: 'What are the 4 color seasons?',
    a: 'Spring is warm, light and bright (golden, fresh colors). Summer is cool, light and soft (dusty, powdery colors). Autumn is warm, deep and muted (rich, earthy colors). Winter is cool, deep and bright (bold, high-contrast colors).',
  },
  {
    category: 'basics',
    q: 'What is the difference between the 4-season and 12-season systems?',
    a: 'The 12-season system splits each of the four seasons into three sub-seasons, for example Light Spring, Warm Spring and Bright Spring. It is more detailed, but it is built on the same four families. This tool uses the classic four seasons, which is the clearest starting point.',
  },
  {
    category: 'basics',
    q: 'Does color analysis work for all skin tones?',
    a: 'Yes. Seasons are based on undertone, depth and contrast, not on how light or dark your skin is. People of every ethnicity and skin tone can be any season. For example, deep skin can be a warm Autumn or a cool Winter.',
  },
  {
    category: 'basics',
    q: 'Is color analysis only for women?',
    a: 'No. Everyone has a natural coloring, so color analysis works for anyone. It is just as useful for choosing shirts, suits, ties, glasses frames and watch metals as it is for makeup and dresses.',
  },

  /* ---------------- Finding Your Season ---------------- */
  {
    category: 'season',
    q: 'How do I know if I have a warm or cool undertone?',
    a: 'Check in natural daylight. Greenish wrist veins, gold jewelry that looks better on you, and skin that tans easily suggest a warm undertone. Blue or purple veins, silver jewelry that looks better, and skin that burns or turns pink suggest a cool undertone. If it is a mix, you may be neutral. Try the Quick Undertone Check on the homepage for a guided version.',
  },
  {
    category: 'season',
    q: 'What does a neutral undertone mean?',
    a: 'A neutral undertone sits between warm and cool, so both gold and silver can look fine on you. Neutrals often suit colors from two neighboring seasons. Softer, less extreme shades within those palettes usually work best.',
  },
  {
    category: 'season',
    q: 'What if I seem to fit two seasons?',
    a: 'That is common, and it is exactly why the 12-season system exists. Borrow colors from both seasons and notice which ones get compliments or make your skin look smoother. Your overall contrast level (how different your hair, eyes and skin are) is usually the best tie-breaker.',
  },
  {
    category: 'season',
    q: 'Can my color season change over time?',
    a: 'Your undertone usually stays the same for life, but your depth and contrast can change. Graying hair, a big tan or a dramatic hair color change can shift you toward a neighboring season. It is worth retaking the analysis after any major change.',
  },
  {
    category: 'season',
    q: 'Does dyed hair affect my color season?',
    a: 'Your natural coloring determines your season, but dyed hair changes how colors look on you day to day. For the most accurate result, sample your natural roots or eyebrows, or take the analysis with your hair tied back.',
  },

  /* ---------------- Using Your Colors ---------------- */
  {
    category: 'using',
    q: 'Do I have to wear only my season’s colors?',
    a: 'No. Your palette is a guide, not a rule. It matters most for anything worn near your face, like tops, scarves, glasses and makeup. Colors you love but that sit outside your palette work well as trousers, skirts, shoes and bags.',
  },
  {
    category: 'using',
    q: 'Which colors should I avoid for my season?',
    a: 'Your result lists colors to avoid for your season. In general, warm seasons struggle with icy, blue-based shades, and cool seasons struggle with orange-based, golden shades. Light seasons are overwhelmed by very dark colors, and deep seasons can look washed out in pale pastels.',
  },
  {
    category: 'using',
    q: 'Should I wear gold or silver jewelry?',
    a: 'Warm undertones (Spring and Autumn) are usually flattered by gold, brass and copper. Cool undertones (Summer and Winter) are usually flattered by silver, white gold and platinum. Rose gold often works for neutrals. Your result recommends a metal for your season.',
  },
  {
    category: 'using',
    q: 'Can color analysis help with makeup and hair color?',
    a: 'Yes. Your undertone points to the right foundation base (golden vs pink), and your season suggests lipstick, blush and eyeshadow families. For hair, staying within your season’s warmth and roughly two shades of your natural depth usually looks the most natural.',
  },
  {
    category: 'using',
    q: 'How do I build a wardrobe around my color season?',
    a: 'Start with two or three neutrals from your palette, such as navy, camel or charcoal. Add a few anchor colors and one or two accent brights. Because every piece comes from the same palette, almost everything will mix and match. See the capsule wardrobe guide on our blog for a step-by-step plan.',
  },

  /* ---------------- Using This Tool ---------------- */
  {
    category: 'tool',
    q: 'How does this color analysis tool work?',
    a: 'You upload a photo, and the tool samples real pixel colors from your skin, eyes and hair. It then estimates your undertone (warmth), depth (lightness) and contrast, and matches that combination to one of the four seasons. You get your best colors, colors to avoid, metals and makeup tones.',
  },
  {
    category: 'tool',
    q: 'What makes a good photo for color analysis?',
    a: 'Use natural daylight near a window, no filters or beauty mode, little or no makeup, and a front-facing angle with your hair off your face. Avoid colored or yellow indoor lighting, strong shadows and sunglasses.',
  },
  {
    category: 'tool',
    q: 'Can I find my season without a photo?',
    a: 'Yes. Use the Quick Undertone & Season Check on the homepage. It asks six quick questions about your veins, jewelry, sun reaction and natural coloring, and gives you an estimated undertone and season. You can also browse all four season palettes and compare them yourself.',
  },
  {
    category: 'tool',
    q: 'Can I try colors on my own photo?',
    a: 'Yes. After your result, the recolor tool lets you click any swatch and see that color on your coat or shirt, or on the background, while keeping the original shading and folds. You can download the recolored photo.',
  },
  {
    category: 'tool',
    q: 'What is the Color Harmony Generator?',
    a: 'It is a free tool on the homepage. Pick any color and it shows matching complementary, analogous, triadic and split-complementary colors, which is handy for building outfits around a single piece.',
  },
  {
    category: 'tool',
    q: 'Is this tool free? Do I need an account?',
    a: 'Everything is completely free and needs no account or sign-up. Results you save with "Add to Favorites" are stored in your own browser, so they stay on this device until you clear your browser data.',
  },

  /* ---------------- Privacy & Accuracy ---------------- */
  {
    category: 'privacy',
    q: 'Is my photo uploaded or stored anywhere?',
    a: 'No. Every step, including reading the image, sampling colors and building your palette, happens locally in your browser using the HTML5 Canvas API. Your photo is never sent to a server, and it is gone as soon as you close or reload the page.',
  },
  {
    category: 'privacy',
    q: 'How accurate is online color analysis?',
    a: 'It is a reliable starting point, not a final verdict. Camera white balance, lighting, filters and makeup can all shift the colors in a photo. Sampling your eyes and hair as well as your skin, in daylight, noticeably improves accuracy. Test a few recommended colors in a mirror to confirm.',
  },
  {
    category: 'privacy',
    q: 'Is online color analysis as good as a professional one?',
    a: 'A professional in-person draping, where a trained colorist holds fabric swatches under controlled light, is still the most precise method. This tool gives you a free, instant estimate based on the same color-theory principles, which is enough for most people to start shopping smarter.',
  },
];

export function getFaqByCategory() {
  return FAQ_CATEGORIES.map((c) => ({
    ...c,
    items: FAQ.filter((f) => f.category === c.id),
  })).filter((c) => c.items.length);
}
