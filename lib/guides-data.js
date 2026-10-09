// Original long-form articles. Metadata + body blocks live together so both
// the listing page and the article page can pull from one source of truth.
// Body block shapes: {type:'p', text}, {type:'h2', text}, {type:'ul', items}

import { SUB_SEASON_GUIDES } from '@/lib/sub-season-guides';

export const GUIDES = [
  {
    slug: 'how-seasonal-color-analysis-works',
    category: 'Basics',
    swatches: ['#f6c28b', '#a7b8d9', '#b5652b', '#1f2a5a'],
    title: 'How Seasonal Color Analysis Works: The 4-Season Method Explained',
    description:
      'What "your color season" actually means, the three variables that drive it, and how a browser-based tool like this one estimates it from a photo.',
    date: '2026-01-15',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: "Seasonal color analysis groups people into categories — usually named after the four seasons — based on which colors make their skin, eyes and hair look most alive, and which colors wash them out. It isn't astrology and it isn't a fixed law of nature; it's a practical shorthand that professional colorists, and now tools like this one, use to turn \"which colors suit me\" from a guessing game into something you can actually reason about.",
      },
      {
        type: 'p',
        text: 'The system traces back to color theorists in the early-to-mid 20th century and was popularized for a mass audience by Carole Jackson\'s 1980 book "Color Me Beautiful," which mapped everyone to one of four seasonal palettes. Modern colorists often split those four into twelve or sixteen finer categories, but the original four-season logic is still the clearest way to understand the underlying idea — and it\'s the model this quiz uses.',
      },
      { type: 'h2', text: 'The three variables that actually matter' },
      {
        type: 'p',
        text: 'Underneath the season names, real color analysis is just describing three properties of your natural coloring — skin, eyes and hair together, not any one feature alone:',
      },
      {
        type: 'ul',
        items: [
          'Undertone — whether your coloring leans warm (yellow/golden/peachy base) or cool (pink/blue/rosy base).',
          'Depth — how light or deep your overall coloring is, independent of undertone.',
          'Contrast / chroma — how much difference there is between your lightest and darkest features, and how muted or saturated your natural coloring reads.',
        ],
      },
      {
        type: 'p',
        text: 'Every "season" is really just a shorthand for a particular combination of those three things. That\'s also why professional analysis looks at skin, eyes and hair together rather than just skin tone in isolation — contrast in particular can\'t be judged from one feature.',
      },
      { type: 'h2', text: 'The four seasons at a glance' },
      {
        type: 'ul',
        items: [
          'Spring — warm undertone, light-to-medium depth, clear/bright chroma. Shines in fresh, golden, slightly warm brights.',
          'Summer — cool undertone, light-to-medium depth, soft/muted chroma. Flattered by dusty, powdery, blended tones rather than saturated brights.',
          'Autumn — warm undertone, medium-to-deep depth, rich/muted chroma. Suited to spice tones, deep golds and earthy richness.',
          'Winter — cool undertone, deep depth, high contrast/clear chroma. Carries bold, saturated colors and true black-and-white best.',
        ],
      },
      { type: 'h2', text: 'How this tool estimates your season' },
      {
        type: 'p',
        text: 'When you upload a photo, everything happens locally in your browser using the HTML5 Canvas API — nothing is ever sent to a server. The tool samples the actual pixel colors at the points you confirm for skin (required) and, optionally, eyes and hair, then runs a color-theory heuristic on those samples: it estimates warmth from the hue and channel balance of the skin sample, estimates depth from lightness, and estimates contrast/chroma from how those three samples relate to each other. That combination is matched to the closest of the four seasons.',
      },
      { type: 'h2', text: 'Where a heuristic like this falls short' },
      {
        type: 'p',
        text: 'In the interest of setting expectations correctly: this is a fast, free starting point, not a lab-grade measurement. Camera white balance, indoor lighting color casts, filters, makeup, and even the color of a wall behind you can all shift what a photo actually captures versus your real coloring in daylight. A trained colorist working in person with fabric drapes under neutral light will always be more accurate than any photo-based tool, ours included. Treat your result as a well-informed hypothesis to test, not a verdict.',
      },
      { type: 'h2', text: 'Getting the most reliable result' },
      {
        type: 'ul',
        items: [
          'Use natural daylight (near a window, not direct harsh sun) rather than indoor bulbs.',
          'Skip filters, beauty modes and heavy makeup — bare skin on the cheek or forehead samples best.',
          'Sample all three points (skin, eyes, hair), not just skin — contrast is what separates soft Summer from bold Winter.',
          'If your result feels off, retake it with a different photo before assuming the tool is wrong — lighting is the single biggest source of error.',
        ],
      },
      {
        type: 'p',
        text: 'Once you have a season you trust, the palette, metals and makeup guidance in your results are meant to be a practical starting toolkit — use the Color Harmony Generator and Recolor tool on the quiz page to test how specific shades actually look against your own photo before you commit to them in real life.',
      },
    ],
  },
  {
    slug: 'warm-vs-cool-undertones',
    category: 'Undertones',
    swatches: ['#e8b27d', '#d99a6c', '#c6a6c9', '#8fa3c8'],
    title: 'Warm vs Cool Undertones: How to Tell Which One You Are',
    description:
      'Five practical ways to check whether your undertone is warm, cool or neutral — and why undertone is only half of what determines your color season.',
    date: '2026-01-22',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Of everything in color analysis, "warm or cool" is the question people get stuck on first — partly because it\'s easy to confuse with how light or dark your skin is. Undertone and depth are different things. A very fair person and a very deep-skinned person can both be warm, and both can both be cool. Undertone is about the underlying hue in your skin, not how much melanin you have.',
      },
      { type: 'h2', text: 'What "undertone" actually means' },
      {
        type: 'p',
        text: 'Surface skin tone (how light or dark you look) changes with sun exposure, season and even skincare. Undertone is the more stable, underlying cast — warm undertones lean yellow, golden or peachy; cool undertones lean pink, red or blue; neutral undertones sit genuinely in between, with roughly equal warm and cool.',
      },
      { type: 'h2', text: 'Five practical ways to check your undertone' },
      {
        type: 'ul',
        items: [
          'Vein check — look at the veins on the inside of your wrist in natural daylight. Greenish veins usually mean warm; bluish or purplish veins usually mean cool. Can\'t tell, or see both? You may be neutral.',
          'Jewelry test — hold a gold item and a silver item against your skin. If gold looks like it\'s glowing and silver looks slightly flat or grey against you, you likely lean warm. If silver looks crisp and gold looks slightly muddy, you likely lean cool.',
          'White vs. cream test — hold up a pure/bright white fabric next to an ivory or cream fabric near your face. If pure white brightens you and cream looks dull by comparison, that points cool. If cream looks warm and alive and pure white looks harsh, that points warm.',
          'Sun reaction — this is a loose signal, not a rule: skin that tans easily and rarely burns often (not always) leans warm; skin that burns before it tans often (not always) leans cool.',
          'Photo test — take a bare-faced photo in daylight, no filter, and look at the overall cast of your skin against a neutral grey or white background: yellow/gold cast points warm, pink/rosy cast points cool.',
        ],
      },
      {
        type: 'p',
        text: 'None of these five is perfectly reliable alone — lighting conditions can throw off any single test. Checking two or three of them together, and looking for agreement, gets you a much more confident answer than any one test in isolation.',
      },
      { type: 'h2', text: 'Common mistakes people make' },
      {
        type: 'ul',
        items: [
          'Judging undertone under yellow-tinted indoor bulbs, which make almost everyone look warmer than they are.',
          'Confusing depth (how light/dark you are) with undertone (warm/cool) — they\'re independent variables.',
          'Testing with makeup, self-tanner or a very recent sunburn still on the skin, all of which distort the reading.',
          'Assuming hair or eye color alone decides undertone — they\'re useful supporting evidence, but skin is the primary signal.',
        ],
      },
      { type: 'h2', text: "What if you're neutral?" },
      {
        type: 'p',
        text: "Genuinely neutral undertones exist and are completely normal — it just means you have more flexibility, and that colors from either side of the spectrum can work, with depth and contrast doing more of the work in deciding what suits you. If your own tests keep splitting the difference, that's a real, useful result, not a failed test.",
      },
      { type: 'h2', text: 'Undertone is only half the picture' },
      {
        type: 'p',
        text: 'Undertone alone gets you halfway to a season — warm points toward Spring or Autumn, cool points toward Summer or Winter. The other half is depth and contrast: light + warm is Spring, deep + warm is Autumn; light + cool is Summer, deep + cool is Winter. See our companion guide on how seasonal color analysis works for the full four-season breakdown, or just run your photo through the quiz — it samples skin, eyes and hair together and estimates all three variables at once.',
      },
    ],
  },
  {
    slug: 'capsule-wardrobe-color-season',
    category: 'Wardrobe',
    swatches: ['#2f3b52', '#c9b79c', '#7a3b3b', '#eae4d8'],
    title: 'Building a Capsule Wardrobe Around Your Color Season',
    description:
      'A step-by-step approach to choosing neutrals, anchor colors and accents for a capsule wardrobe that actually matches your seasonal palette.',
    date: '2026-02-02',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: "A capsule wardrobe — a small, deliberately chosen set of pieces that all mix and match — lives or dies on whether the colors actually go together, and whether they suit the person wearing them. Your color season is a genuine shortcut here: instead of guessing at a palette from scratch, you start from a set of colors that's already been chosen to flatter you and to harmonize with each other.",
      },
      { type: 'h2', text: 'Why color season + capsule wardrobe work so well together' },
      {
        type: 'p',
        text: "A season's palette is built around a shared undertone and a shared depth/contrast level, which is exactly the kind of internal consistency a capsule wardrobe needs. Two colors from the same season palette will almost always sit well next to each other — which takes a lot of the trial and error out of building a small, high-mileage wardrobe.",
      },
      { type: 'h2', text: 'Step 1 — nail down your neutrals' },
      {
        type: 'p',
        text: "Neutrals are the foundation of a capsule: the pieces (usually bottoms, coats, bags, shoes) that everything else has to work with. Every season has its own best neutrals rather than a single universal \"safe\" neutral — a stark true white flatters a Winter and can wash out a Summer, while an ivory or warm cream does the opposite. Pick 2–3 neutrals from your season's own list before anything else.",
      },
      { type: 'h2', text: 'Step 2 — pick 2–3 "anchor" colors' },
      {
        type: 'p',
        text: "Anchors are the colors you'll wear the most — think of them as your wardrobe's personality. Choose these from your \"best colors\" palette, favoring versatile mid-tones you're happy to see in multiple pieces (a top, a scarf, a bag) rather than the boldest, most statement-y shades in your palette.",
      },
      { type: 'h2', text: 'Step 3 — add accent colors last' },
      {
        type: 'p',
        text: "Accents are where you spend your \"colorful budget\" — one or two standout shades from your palette used sparingly (a single top, shoes, an accessory) rather than repeated across multiple pieces. Because they're used sparingly, this is also where it's safest to be bold: a saturated accent color reads as a deliberate styling choice, not a whole outfit built around risk.",
      },
      { type: 'h2', text: 'A sample capsule for each season' },
      {
        type: 'ul',
        items: [
          'Spring — ivory and camel neutrals; coral, golden yellow or leaf green as anchors; a bright poppy or turquoise as an accent.',
          'Summer — soft white, dove grey or cool navy neutrals; dusty blue, mauve or soft teal as anchors; a berry or lavender as an accent.',
          'Autumn — chocolate brown, warm khaki or cream neutrals; rust, olive or mustard as anchors; a deep teal or brick red as an accent.',
          'Winter — true white, jet black or charcoal neutrals; sapphire, emerald or true red as anchors; a jewel-tone magenta or cobalt as an accent.',
        ],
      },
      {
        type: 'p',
        text: "These are starting points, not rules — use the quiz's \"Your Best Colors\" palette for your exact result, and try the Color Harmony Generator to see complementary and analogous matches for any single color you want to build a capsule around.",
      },
      { type: 'h2', text: 'Metals, denim and other neutral-adjacent choices' },
      {
        type: 'p',
        text: 'Two details that quietly make or break a capsule: your metal tone (gold generally suits warm seasons, silver/platinum generally suits cool seasons — see your quiz result for a specific recommendation) and your denim wash (warm seasons usually do better in a warmer, slightly faded wash; cool seasons usually do better in a crisper, cooler-toned wash). Getting these two "neutral-adjacent" choices right does more for a cohesive capsule than most people expect.',
      },
    ],
  },
  {
    slug: 'makeup-colors-for-your-color-season',
    category: 'Makeup',
    swatches: ['#e2725b', '#c85a7c', '#9e3b3b', '#b0526d'],
    title: 'Makeup Colors for Your Color Season: Lipstick, Blush and Eyeshadow',
    description:
      'Which lipstick, blush and eyeshadow families flatter Spring, Summer, Autumn and Winter — and a quick test to check any shade before you buy it.',
    date: '2026-08-18',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Makeup sits right next to your face, which makes it the fastest place to see color analysis working — or not working. A lipstick in the right family makes your skin look clearer and your eyes brighter; the wrong one can make you look tired even when you are not. The good news is you do not need a new makeup bag. You need to know which color families to reach for.',
      },
      { type: 'h2', text: 'The rule behind every recommendation' },
      {
        type: 'p',
        text: 'The same three variables that define your season apply to makeup: undertone (warm or cool), depth (light or deep) and chroma (clear or soft). A flattering shade usually matches your undertone and sits at a similar depth and intensity to your natural coloring. That is why a bright cool fuchsia can look striking on one person and harsh on another.',
      },
      { type: 'h2', text: 'Spring: fresh, warm and clear' },
      {
        type: 'ul',
        items: [
          'Lips: coral, warm pink, peach and clear warm reds.',
          'Blush: peach and apricot rather than cool rose.',
          'Eyes: golden browns, warm bronze, soft teal and champagne shimmer.',
          'Go easy on: heavy black liner, deep plum and ashy taupes, which can look heavy on light warm coloring.',
        ],
      },
      { type: 'h2', text: 'Summer: soft, cool and blended' },
      {
        type: 'ul',
        items: [
          'Lips: rose, dusty pink, soft berry and mauve.',
          'Blush: cool pink and soft rose.',
          'Eyes: taupe, soft grey, dusty lavender and cool brown.',
          'Go easy on: orange-based corals and very saturated brights, which can overpower soft coloring.',
        ],
      },
      { type: 'h2', text: 'Autumn: rich, warm and muted' },
      {
        type: 'ul',
        items: [
          'Lips: brick, terracotta, warm nude, rust and deep warm red.',
          'Blush: warm bronze, burnt peach and soft terracotta.',
          'Eyes: olive, copper, bronze, deep chocolate and moss green.',
          'Go easy on: icy pinks, frosted pastels and blue-based purples.',
        ],
      },
      { type: 'h2', text: 'Winter: bold, cool and high-contrast' },
      {
        type: 'ul',
        items: [
          'Lips: true blue-red, fuchsia, deep berry and plum.',
          'Blush: cool pink or berry, applied lightly.',
          'Eyes: charcoal, silver, navy, deep plum and crisp black liner.',
          'Go easy on: warm oranges, muddy browns and peachy nudes, which can look flat against high contrast.',
        ],
      },
      { type: 'h2', text: 'A 30-second test before you buy' },
      {
        type: 'p',
        text: 'Swatch the shade on your lips or cheek (not your hand) and look in daylight near a window. If your skin looks more even and your eyes look brighter, it is working. If you notice more shadows under your eyes, redness around your nose, or the color seems to sit on top of your face, it is probably outside your family. Our quiz result page shows your season palette, so you can hold a product up against it for a quick match.',
      },
      {
        type: 'p',
        text: 'Remember these are starting points, not rules. Plenty of people wear shades from a neighboring season beautifully, especially if their coloring sits between two seasons.',
      },
    ],
  },
  {
    slug: 'gold-vs-silver-jewelry-undertone',
    category: 'Accessories',
    swatches: ['#d4a73c', '#f1d98a', '#c0c4cc', '#8d939e'],
    title: 'Gold vs Silver Jewelry: What Your Undertone Says',
    description:
      'Why metal tone matters, which metals tend to suit warm and cool undertones, and what to do if both (or neither) look right on you.',
    date: '2026-09-02',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Jewelry is small, but it sits right against your skin, often near your face. That makes metal tone one of the easiest ways to test your undertone at home — and one of the easiest ways to make any outfit look more pulled together.',
      },
      { type: 'h2', text: 'The quick version' },
      {
        type: 'ul',
        items: [
          'Warm undertones (Spring and Autumn) usually glow in yellow gold, brass, copper and bronze.',
          'Cool undertones (Summer and Winter) usually brighten in silver, white gold, platinum and rhodium.',
          'Rose gold is a warm-cool blend and often works for Summer and softer Spring coloring.',
        ],
      },
      { type: 'h2', text: 'How to run the jewelry test' },
      {
        type: 'p',
        text: 'Take one gold piece and one silver piece of roughly the same size. In natural daylight, with no makeup on, hold each one against your neck or wear it on your wrist and compare. The better metal will make your skin look smoother and slightly brighter. The weaker one can make your skin look sallow, grey or blotchy by comparison. Trust the first impression — overthinking it usually makes both look the same.',
      },
      { type: 'h2', text: 'Matching finish to your season' },
      {
        type: 'p',
        text: 'Undertone tells you gold or silver. Depth and chroma tell you which finish:',
      },
      {
        type: 'ul',
        items: [
          'Spring: polished, bright yellow gold and delicate pieces.',
          'Summer: brushed or matte silver, pearls and soft rose gold.',
          'Autumn: antique or hammered gold, brass, copper and chunky textures.',
          'Winter: high-shine silver or platinum, crisp geometric shapes and bold contrast.',
        ],
      },
      { type: 'h2', text: 'If both metals look fine' },
      {
        type: 'p',
        text: 'You may have a neutral undertone, or you may sit between two seasons. In that case, mixed-metal pieces, rose gold and gunmetal are easy wins. Let your clothes lead: wear gold with warmer outfits and silver with cooler ones.',
      },
      {
        type: 'p',
        text: 'Not sure where you land? Upload a photo to the free quiz — it estimates your undertone from your actual skin pixels and recommends a metal tone as part of your result.',
      },
    ],
  },
  {
    slug: 'best-hair-colors-for-each-season',
    category: 'Hair',
    swatches: ['#e3b778', '#a67b5b', '#7b3f2a', '#2b2320'],
    title: 'Best Hair Colors for Each Color Season',
    description:
      'Hair color ideas for every color season: how to choose a shade that works with your season instead of against it, plus the most common mistake to avoid.',
    date: '2026-09-15',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Hair frames your whole face, so changing its color changes how every other color you wear looks on you. A shade that suits your season can make your skin look clearer with less makeup. A shade that fights it can make your complexion look dull or red, no matter what you wear.',
      },
      { type: 'h2', text: 'The most common mistake' },
      {
        type: 'p',
        text: 'Going too far from your natural depth. A very light person dyeing their hair jet black, or a very deep person going platinum, changes your contrast level dramatically. That can pull you out of your season entirely. As a general guide, staying within about two shades lighter or darker than your natural color keeps things harmonious.',
      },
      { type: 'h2', text: 'Spring' },
      {
        type: 'ul',
        items: [
          'Flattering: golden blonde, honey, strawberry blonde, light copper and warm caramel highlights.',
          'Be careful with: ash blonde, cool platinum and blue-black.',
        ],
      },
      { type: 'h2', text: 'Summer' },
      {
        type: 'ul',
        items: [
          'Flattering: ash blonde, beige blonde, soft mushroom brown and cool light brown.',
          'Be careful with: brassy gold, bright copper and very dark shades that add too much contrast.',
        ],
      },
      { type: 'h2', text: 'Autumn' },
      {
        type: 'ul',
        items: [
          'Flattering: auburn, chestnut, deep copper, warm chocolate and golden brown.',
          'Be careful with: icy blonde, ash tones and flat blue-black.',
        ],
      },
      { type: 'h2', text: 'Winter' },
      {
        type: 'ul',
        items: [
          'Flattering: espresso, blue-black, cool dark brown and deep burgundy. Silver grey also looks striking on many Winters.',
          'Be careful with: golden or brassy highlights and warm caramel balayage.',
        ],
      },
      { type: 'h2', text: 'Grey and silver hair' },
      {
        type: 'p',
        text: 'Natural grey is usually cool-toned, which often shifts people toward Summer or Winter palettes over time. If you are growing out your grey, it can be worth retaking the quiz — the colors that suited you ten years ago may not be the best ones now.',
      },
      { type: 'h2', text: 'Try before you commit' },
      {
        type: 'p',
        text: 'Before booking a salon appointment, try a semi-permanent gloss that fades in a few weeks, or hold a wig or hair swatch near your face in daylight. And bring your season palette from the quiz to your colorist — it gives them a clear starting point for warm versus cool tones.',
      },
    ],
  },
  ...SUB_SEASON_GUIDES,
];

// Newest first, for the homepage "From the Blog" strip and the blog index.
export function getLatestGuides(limit) {
  const sorted = [...GUIDES].sort((a, b) => (a.date < b.date ? 1 : -1));
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}

// Re-exported so older imports keep working.
export { formatGuideDate } from '@/lib/format-date';

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null;
}

// "Keep reading" under each article: up to 2 guides from the same topic
// (e.g. the other Autumn sub-seasons), then guides from other topics.
// The other-topic picks rotate with the article's position, so every guide
// (old ones too) gets linked from several other articles, not just the newest.
export function getRelatedGuides(guide, count = 3) {
  const others = getLatestGuides().filter((g) => g.slug !== guide.slug);
  const same = others.filter((g) => g.category === guide.category).slice(0, 2);
  const cross = others.filter((g) => g.category !== guide.category);
  const seasonal = new Set(['Spring', 'Summer', 'Autumn', 'Winter']);
  // Topic guides (wardrobe, makeup, hair...) first: they are what a reader
  // of a palette guide wants next, and they have the fewest inbound links.
  const pool = [...cross.filter((g) => !seasonal.has(g.category)), ...cross.filter((g) => seasonal.has(g.category))];
  const start = pool.length ? Math.max(0, GUIDES.findIndex((g) => g.slug === guide.slug)) % pool.length : 0;
  const rotated = [...pool.slice(start), ...pool.slice(0, start)];
  const picked = [...same];
  const usedCats = new Set(picked.map((g) => g.category));
  for (const g of rotated) {
    if (picked.length >= count) break;
    if (usedCats.has(g.category)) continue;
    picked.push(g);
    usedCats.add(g.category);
  }
  for (const g of rotated) {
    if (picked.length >= count) break;
    if (!picked.includes(g)) picked.push(g);
  }
  return picked;
}
