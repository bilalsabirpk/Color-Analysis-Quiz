// Original long-form articles. Metadata + body blocks live together so both
// the listing page and the article page can pull from one source of truth.
// Body block shapes: {type:'p', text}, {type:'h2', text}, {type:'ul', items}

import { SUB_SEASON_GUIDES } from '@/lib/sub-season-guides';

export const GUIDES = [
  {
    slug: 'how-seasonal-color-analysis-works',
    keywords: ['seasonal color analysis', 'seasonal colour analysis', 'seasonal color', 'color season analysis', 'colour season analysis', 'season color analysis', 'seasonal color analysis quiz', 'online seasonal color analysis', '12 season colour analysis test'],
    category: 'Basics',
    swatches: ['#f6c28b', '#a7b8d9', '#b5652b', '#1f2a5a'],
    title: 'Seasonal Color Analysis: How It Works, 4 Seasons and 12 Types',
    description:
      'What "your color season" actually means, the three variables that drive it, and how a browser-based tool like this one estimates it from a photo.',
    updated: '2026-10-29',
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
          'Spring — warm undertone, light-to-medium depth, clear/bright chroma. Shines in fresh, golden, slightly warm brights. Sub-seasons: [Light Spring](/guides/light-spring-color-palette), [Warm Spring](/guides/warm-spring-color-palette) and [Bright Spring](/guides/bright-spring-color-palette).',
          'Summer — cool undertone, light-to-medium depth, soft/muted chroma. Flattered by dusty, powdery, blended tones rather than saturated brights. Sub-seasons: [Light Summer](/guides/light-summer-color-palette), [Cool Summer](/guides/cool-summer-color-palette) and [Soft Summer](/guides/soft-summer-color-palette).',
          'Autumn — warm undertone, medium-to-deep depth, rich/muted chroma. Suited to spice tones, deep golds and earthy richness. Sub-seasons: [Soft Autumn](/guides/soft-autumn-color-palette), [Warm Autumn](/guides/warm-autumn-color-palette) and [Deep Autumn](/guides/deep-autumn-color-palette).',
          'Winter — cool undertone, deep depth, high contrast/clear chroma. Carries bold, saturated colors and true black-and-white best. Sub-seasons: [Deep Winter](/guides/deep-winter-color-palette), [Cool Winter](/guides/cool-winter-color-palette) and [Bright Winter](/guides/bright-winter-color-palette).',
        ],
      },
      { type: 'h2', text: 'From 4 seasons to 12: the 12-season system' },
      {
        type: 'p',
        text: 'Modern seasonal color analysis usually splits each season into three, giving 12 types. Each type is named after its strongest trait, and its second trait links it to the parent season. Grouped by that main trait, the 12 seasons look like this:',
      },
      {
        type: 'ul',
        items: [
          'Light: [Light Spring](/guides/light-spring-color-palette) (light and warm) and [Light Summer](/guides/light-summer-color-palette) (light and cool).',
          'Deep: [Deep Autumn](/guides/deep-autumn-color-palette) (deep and warm) and [Deep Winter](/guides/deep-winter-color-palette) (deep and cool).',
          'Warm: [Warm Spring](/guides/warm-spring-color-palette) (warm and clear) and [Warm Autumn](/guides/warm-autumn-color-palette) (warm and soft).',
          'Cool: [Cool Summer](/guides/cool-summer-color-palette) (cool and soft) and [Cool Winter](/guides/cool-winter-color-palette) (cool and clear).',
          'Bright: [Bright Spring](/guides/bright-spring-color-palette) (bright and warm) and [Bright Winter](/guides/bright-winter-color-palette) (bright and cool).',
          'Soft: [Soft Summer](/guides/soft-summer-color-palette) (soft and cool) and [Soft Autumn](/guides/soft-autumn-color-palette) (soft and warm).',
        ],
      },
      {
        type: 'p',
        text: 'This is why two people can both be "Autumn" and still need quite different colors: a Soft Autumn looks best in muted camel and sage, while a Deep Autumn needs rich chocolate and burgundy. If two neighboring types both seem to fit, the comparison guides help, such as [Soft Summer vs Soft Autumn](/guides/soft-summer-vs-soft-autumn) or [Dark Autumn vs Dark Winter](/guides/dark-autumn-vs-dark-winter).',
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
        text: 'Once you have a season you trust, the palette, metals and makeup guidance in your results are meant to be a practical starting toolkit — use the [Color Harmony Generator](/#harmony) and Recolor tool on the [quiz page](/#quiz) to test how specific shades actually look against your own photo before you commit to them in real life. From there, the [makeup colors](/guides/makeup-colors-for-your-color-season), [hair color](/guides/best-hair-colors-for-each-season) and [capsule wardrobe](/guides/capsule-wardrobe-color-season) guides show how to apply your season day to day.',
      },
    ],
  },
  {
    slug: 'warm-vs-cool-undertones',
    keywords: ['warm undertone skin', 'warm or cool undertones', 'cool undertone', 'warm undertone', 'warm undertones', 'warm or cool skin tone', 'warm skin tone', 'warm and cool undertones', 'skin undertone analysis', 'how to tell if you have cool or warm undertones', 'warm or cool undertone test'],
    category: 'Undertones',
    swatches: ['#e8b27d', '#d99a6c', '#c6a6c9', '#8fa3c8'],
    title: 'Warm or Cool Undertones? Skin Undertone Test (5 Easy Ways)',
    description:
      'Warm or cool undertones? Five easy skin undertone tests, the signs of warm and cool undertone skin, and the best colors and makeup for each.',
    date: '2026-01-22',
    updated: '2026-11-02',
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
      { type: 'h2', text: 'How to find your undertone: 5 easy tests' },
      {
        type: 'ul',
        items: [
          'Vein check — look at the veins on the inside of your wrist in natural daylight. Greenish veins usually mean warm; bluish or purplish veins usually mean cool. Can\'t tell, or see both? You may be neutral.',
          'Jewelry test ([full gold or silver jewelry quiz](/guides/gold-vs-silver-jewelry-undertone)) — hold a gold item and a silver item against your skin. If gold looks like it\'s glowing and silver looks slightly flat or grey against you, you likely lean warm. If silver looks crisp and gold looks slightly muddy, you likely lean cool.',
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
      { type: 'h2', text: 'Warm undertone skin: signs and best colors' },
      {
        type: 'ul',
        items: [
          'Your veins look green or olive in daylight.',
          'Gold jewelry makes your skin glow, while silver looks a little grey on you.',
          'Cream and ivory look better near your face than pure, bright white.',
          'Your skin has a golden, peachy or yellow cast, and it often tans easily.',
        ],
      },
      {
        type: 'p',
        text: 'Warm undertones look best in colors with yellow in them: coral, peach, camel, olive, mustard, rust, warm red and turquoise. Light warm skin usually suits the Spring palettes ([Light Spring](/guides/light-spring-color-palette) or [Warm Spring](/guides/warm-spring-color-palette)), while medium to deep warm skin often suits Autumn ([Warm Autumn](/guides/warm-autumn-color-palette) or [Deep Autumn](/guides/deep-autumn-color-palette)). For makeup, look for peach or apricot blush and coral, brick or warm nude lipstick. For a full list with hex codes, see [best colors for a warm skin tone](/guides/warm-skin-tone-colors).',
      },
      { type: 'h2', text: 'Cool undertone skin: signs and best colors' },
      {
        type: 'ul',
        items: [
          'Your veins look blue or purple in daylight.',
          'Silver, white gold and platinum look crisp on you; yellow gold can look brassy.',
          'Pure white looks clean on you, while cream can make you look sallow.',
          'Your skin has a pink, rosy or slightly blue cast, and it often burns before it tans.',
        ],
      },
      {
        type: 'p',
        text: 'Cool undertones look best in blue-based colors: rose pink, raspberry, lavender, navy, emerald, sapphire and fuchsia. Light or soft cool coloring usually suits Summer ([Light Summer](/guides/light-summer-color-palette), [Cool Summer](/guides/cool-summer-color-palette) or [Soft Summer](/guides/soft-summer-color-palette)), while deep, high-contrast cool coloring suits Winter ([Cool Winter](/guides/cool-winter-color-palette) or [Deep Winter](/guides/deep-winter-color-palette)). For makeup, look for cool pink or berry blush and rose, berry or blue-red lipstick.',
      },
      { type: 'h2', text: 'Warm vs cool undertones at a glance' },
      {
        type: 'ul',
        items: [
          'Veins: green or olive means warm; blue or purple means cool.',
          'Jewelry: gold flatters warm; silver flatters cool.',
          'White: cream suits warm; pure white suits cool.',
          'Red lipstick: orange-red or brick suits warm; blue-red or cherry suits cool.',
          'Neutrals: camel, chocolate and olive suit warm; navy, charcoal and cool grey suit cool.',
        ],
      },
      { type: 'h2', text: "What if you're neutral?" },
      {
        type: 'p',
        text: "Genuinely neutral undertones exist and are completely normal — it just means you have more flexibility, and that colors from either side of the spectrum can work, with depth and contrast doing more of the work in deciding what suits you. If your own tests keep splitting the difference, that's a real, useful result, not a failed test. If your skin also has a slight green or grey cast, read the [olive skin color palette](/guides/olive-skin-color-palette) guide.",
      },
      { type: 'h2', text: 'Undertone is only half the picture' },
      {
        type: 'p',
        text: 'Undertone alone gets you halfway to a season — warm points toward Spring or Autumn, cool points toward Summer or Winter. The other half is depth and contrast: light + warm is Spring, deep + warm is Autumn; light + cool is Summer, deep + cool is Winter. See our companion guide on [how seasonal color analysis works](/guides/how-seasonal-color-analysis-works) for the full four-season breakdown, take the [what season am I quiz](/what-season-am-i), or just run your photo through the [photo quiz](/#quiz) — it samples skin, eyes and hair together and estimates all three variables at once.',
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
    updated: '2026-10-21',
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
        text: "A season's palette is built around a shared undertone and a shared depth/contrast level ([how seasons work](/guides/how-seasonal-color-analysis-works)), which is exactly the kind of internal consistency a capsule wardrobe needs. Two colors from the same season palette will almost always sit well next to each other — which takes a lot of the trial and error out of building a small, high-mileage wardrobe.",
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
          'Spring — ivory and camel neutrals; coral, golden yellow or leaf green as anchors; a bright poppy or turquoise as an accent. Full palettes: [Light Spring](/guides/light-spring-color-palette), [Warm Spring](/guides/warm-spring-color-palette), [Bright Spring](/guides/bright-spring-color-palette).',
          'Summer — soft white, dove grey or cool navy neutrals; dusty blue, mauve or soft teal as anchors; a berry or lavender as an accent. Full palettes: [Light Summer](/guides/light-summer-color-palette), [Cool Summer](/guides/cool-summer-color-palette), [Soft Summer](/guides/soft-summer-color-palette).',
          'Autumn — chocolate brown, warm khaki or cream neutrals; rust, olive or mustard as anchors; a deep teal or brick red as an accent. Full palettes: [Soft Autumn](/guides/soft-autumn-color-palette), [Warm Autumn](/guides/warm-autumn-color-palette), [Deep Autumn](/guides/deep-autumn-color-palette).',
          'Winter — true white, jet black or charcoal neutrals; sapphire, emerald or true red as anchors; a jewel-tone magenta or cobalt as an accent. Full palettes: [Deep Winter](/guides/deep-winter-color-palette), [Cool Winter](/guides/cool-winter-color-palette), [Bright Winter](/guides/bright-winter-color-palette).',
        ],
      },
      {
        type: 'p',
        text: "These are starting points, not rules — use the [quiz's](/#quiz) \"Your Best Colors\" palette for your exact result, and try the [Color Harmony Generator](/#harmony) to see complementary and analogous matches for any single color you want to build a capsule around.",
      },
      { type: 'h2', text: 'Metals, denim and other neutral-adjacent choices' },
      {
        type: 'p',
        text: 'Two details that quietly make or break a capsule: your metal tone (gold generally suits warm seasons, silver/platinum generally suits cool seasons — see the [gold or silver jewelry guide](/guides/gold-vs-silver-jewelry-undertone)) and your denim wash (warm seasons usually do better in a warmer, slightly faded wash; cool seasons usually do better in a crisper, cooler-toned wash). Getting these two "neutral-adjacent" choices right does more for a cohesive capsule than most people expect.',
      },
    ],
  },
  {
    slug: 'makeup-colors-for-your-color-season',
    keywords: ['cool summer makeup color palette', 'light spring color palette makeup', 'cool summer color palette makeup', 'cool summer palette makeup', 'warm autumn color palette makeup', 'warm spring makeup', 'winter cool tone makeup'],
    category: 'Makeup',
    swatches: ['#e2725b', '#c85a7c', '#9e3b3b', '#b0526d'],
    title: 'Makeup Colors for Your Season: Lipstick, Blush & Eyeshadow',
    description:
      'Makeup colors for every color season: which lipstick, blush and eyeshadow shades flatter Spring, Summer, Autumn and Winter, plus a quick shade test.',
    date: '2026-08-18',
    updated: '2026-11-05',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Makeup sits right next to your face, which makes it the fastest place to see color analysis working — or not working. A lipstick in the right family makes your skin look clearer and your eyes brighter; the wrong one can make you look tired even when you are not. The good news is you do not need a new makeup bag. You need to know which color families to reach for.',
      },
      { type: 'h2', text: 'The rule behind every recommendation' },
      {
        type: 'p',
        text: 'The same [three variables that define your season](/guides/how-seasonal-color-analysis-works) apply to makeup: [undertone](/guides/warm-vs-cool-undertones) (warm or cool), depth (light or deep) and chroma (clear or soft). A flattering shade usually matches your undertone and sits at a similar depth and intensity to your natural coloring. That is why a bright cool fuchsia can look striking on one person and harsh on another.',
      },
      { type: 'h2', text: 'Spring makeup colors: fresh, warm and clear' },
      {
        type: 'ul',
        items: [
          'Lips: coral, warm pink, peach and clear warm reds.',
          'Blush: peach and apricot rather than cool rose.',
          'Eyes: golden browns, warm bronze, soft teal and champagne shimmer.',
          'Go easy on: heavy black liner, deep plum and ashy taupes, which can look heavy on light warm coloring.',
        ],
      },
      {
        type: 'p',
        text: 'Within Spring, [Light Spring](/guides/light-spring-color-palette) keeps everything sheer and peachy (see the [Light Spring makeup palette](/guides/light-spring-makeup-palette)), [Warm Spring](/guides/warm-spring-color-palette) can wear richer coral and golden bronze ([Warm Spring makeup palette](/guides/warm-spring-makeup-palette)), and [Bright Spring](/guides/bright-spring-color-palette) carries the clearest poppy reds best ([Bright Spring makeup palette](/guides/bright-spring-makeup-palette)).',
      },
      { type: 'h2', text: 'Summer makeup colors: soft, cool and blended' },
      {
        type: 'ul',
        items: [
          'Lips: rose, dusty pink, soft berry and mauve.',
          'Blush: cool pink and soft rose.',
          'Eyes: taupe, soft grey, dusty lavender and cool brown.',
          'Go easy on: orange-based corals and very saturated brights, which can overpower soft coloring.',
        ],
      },
      {
        type: 'p',
        text: 'Within Summer, [Light Summer](/guides/light-summer-color-palette) suits sheer pink and lavender ([Light Summer makeup palette](/guides/light-summer-makeup-palette)), [Cool Summer](/guides/cool-summer-color-palette) suits rose and raspberry (see the [Cool Summer makeup palette](/guides/cool-summer-makeup-palette)), and [Soft Summer](/guides/soft-summer-color-palette) looks best in mauve, dusty rose and taupe. See the full [Soft Summer makeup palette](/guides/soft-summer-makeup-palette) with hex codes.',
      },
      { type: 'h2', text: 'Autumn makeup colors: rich, warm and muted' },
      {
        type: 'ul',
        items: [
          'Lips: brick, terracotta, warm nude, rust and deep warm red.',
          'Blush: warm bronze, burnt peach and soft terracotta.',
          'Eyes: olive, copper, bronze, deep chocolate and moss green.',
          'Go easy on: icy pinks, frosted pastels and blue-based purples.',
        ],
      },
      {
        type: 'p',
        text: 'Within Autumn, [Soft Autumn](/guides/soft-autumn-color-palette) suits warm nude and soft terracotta (see the [Soft Autumn makeup palette](/guides/soft-autumn-makeup-palette)), [Warm Autumn](/guides/warm-autumn-color-palette) suits brick and rust (see the [Warm Autumn makeup palette](/guides/warm-autumn-makeup-palette)), and [Deep Autumn](/guides/deep-autumn-color-palette) can wear deep brick red, chocolate liner and bronze ([Deep Autumn makeup palette](/guides/deep-autumn-makeup-palette)).',
      },
      { type: 'h2', text: 'Winter makeup colors: bold, cool and high-contrast' },
      {
        type: 'ul',
        items: [
          'Lips: true blue-red, fuchsia, deep berry and plum.',
          'Blush: cool pink or berry, applied lightly.',
          'Eyes: charcoal, silver, navy, deep plum and crisp black liner.',
          'Go easy on: warm oranges, muddy browns and peachy nudes, which can look flat against high contrast.',
        ],
      },
      {
        type: 'p',
        text: 'Within Winter, [Deep Winter](/guides/deep-winter-color-palette) suits deep berry and plum ([Deep Winter makeup palette](/guides/deep-winter-makeup-palette)), [Cool Winter](/guides/cool-winter-color-palette) suits blue-red and fuchsia ([Cool Winter makeup palette](/guides/cool-winter-makeup-palette)), and [Bright Winter](/guides/bright-winter-color-palette) can carry the brightest pink and true red with crisp black liner ([Bright Winter makeup palette](/guides/bright-winter-makeup-palette)).',
      },
      { type: 'h2', text: 'A 30-second test before you buy' },
      {
        type: 'p',
        text: 'Swatch the shade on your lips or cheek (not your hand) and look in daylight near a window. If your skin looks more even and your eyes look brighter, it is working. If you notice more shadows under your eyes, redness around your nose, or the color seems to sit on top of your face, it is probably outside your family. Our [free color analysis quiz](/#quiz) shows your season palette, so you can hold a product up against it for a quick match.',
      },
      {
        type: 'p',
        text: 'Remember these are starting points, not rules. Plenty of people wear shades from a neighboring season beautifully, especially if their coloring sits between two seasons. Not sure of your season yet? Try the [what season am I quiz](/what-season-am-i).',
      },
    ],
  },
  {
    slug: 'gold-vs-silver-jewelry-undertone',
    category: 'Accessories',
    swatches: ['#d4a73c', '#f1d98a', '#c0c4cc', '#8d939e'],
    title: 'Gold or Silver Jewelry Quiz: Which Suits Your Undertone?',
    description:
      'Am I a gold or silver person? Take the free gold or silver jewelry quiz, try three quick tests, and find the best metal and finish for your color season.',
    date: '2026-09-02',
    updated: '2026-10-26',
    // Shows the 6-question undertone quiz (with "best jewelry metal") above the article.
    quiz: {
      heading: 'Gold or Silver Jewelry Quiz',
      sub: 'Six quick questions. Warm undertone suits gold, cool suits silver, neutral can wear both.',
    },
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Jewelry is small, but it sits right against your skin, often near your face. That makes metal tone one of the easiest ways to [test your undertone](/guides/warm-vs-cool-undertones) at home — and one of the easiest ways to make any outfit look more pulled together.',
      },
      { type: 'h2', text: 'Am I a gold or silver person? The quick answer' },
      {
        type: 'ul',
        items: [
          'Warm undertones (Spring and Autumn) usually glow in yellow gold, brass, copper and bronze.',
          'Cool undertones (Summer and Winter) usually brighten in silver, white gold, platinum and rhodium.',
          'Rose gold is a warm-cool blend and often works for Summer and softer Spring coloring.',
        ],
      },
      { type: 'h2', text: 'How to know if you are a gold or silver person' },
      {
        type: 'p',
        text: 'Take one gold piece and one silver piece of roughly the same size. In natural daylight, with no makeup on, hold each one against your neck or wear it on your wrist and compare. The better metal will make your skin look smoother and slightly brighter. The weaker one can make your skin look sallow, grey or blotchy by comparison. Trust the first impression — overthinking it usually makes both look the same.',
      },
      {
        type: 'p',
        text: 'Still unsure? Two more checks point the same way:',
      },
      {
        type: 'ul',
        items: [
          'Vein test (more in the [warm vs cool undertone guide](/guides/warm-vs-cool-undertones)): green or olive veins on your inner wrist suggest a warm undertone (gold); blue or purple veins suggest a cool one (silver).',
          'White test: if cream or ivory flatters you more than bright white, lean gold; if crisp white looks better, lean silver.',
          'If two of the three tests agree, go with that metal.',
        ],
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
      { type: 'h2', text: 'Gold or silver jewellery for olive skin' },
      {
        type: 'p',
        text: 'Olive skin often has a neutral or slightly warm undertone with a green cast, so bright yellow gold can look brassy while icy silver can look harsh. Antique or brushed gold, bronze, brass and rose gold are usually the safest choices, and many olive-skinned people wear both metals well. See the full [olive skin color palette](/guides/olive-skin-color-palette) for clothes, makeup and hair. For deeper brown skin, see the [brown skin color palette](/guides/brown-skin-color-palette).',
      },
      { type: 'h2', text: 'If both metals look fine' },
      {
        type: 'p',
        text: 'You may have a neutral undertone, or you may sit between two seasons. In that case, mixed-metal pieces, rose gold and gunmetal are easy wins. Let your clothes lead: wear gold with warmer outfits and silver with cooler ones. If you are building a small wardrobe around your season, the [capsule wardrobe guide](/guides/capsule-wardrobe-color-season) shows how metals fit in.',
      },
      {
        type: 'p',
        text: 'Not sure where you land? Upload a photo to the [free color analysis quiz](/#quiz) — it estimates your undertone from your actual skin pixels and recommends a metal tone as part of your result.',
      },
    ],
  },
  {
    slug: 'best-hair-colors-for-each-season',
    category: 'Hair',
    swatches: ['#e3b778', '#a67b5b', '#7b3f2a', '#2b2320'],
    title: 'Best Hair Color for Your Skin Tone and Color Season',
    description:
      'Best hair colors for every skin tone and color season: how to choose a hair color that works with your undertone, plus the most common mistake to avoid.',
    date: '2026-09-15',
    updated: '2026-10-21',
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
      { type: 'h2', text: 'Best hair colors for Spring' },
      {
        type: 'ul',
        items: [
          'Flattering: golden blonde, honey, strawberry blonde, light copper and warm caramel highlights.',
          'Be careful with: ash blonde, cool platinum and blue-black.',
        ],
      },
      {
        type: 'p',
        text: 'By sub-season: [Light Spring](/guides/light-spring-color-palette) looks best in golden or strawberry blonde, [Warm Spring](/guides/warm-spring-color-palette) in honey, caramel and light copper, and [Bright Spring](/guides/bright-spring-color-palette) in clear golden brown or bright copper that keeps some contrast with the skin.',
      },
      { type: 'h2', text: 'Best hair colors for Summer' },
      {
        type: 'ul',
        items: [
          'Flattering: ash blonde, beige blonde, soft mushroom brown and cool light brown.',
          'Be careful with: brassy gold, bright copper and very dark shades that add too much contrast.',
        ],
      },
      {
        type: 'p',
        text: 'By sub-season: [Light Summer](/guides/light-summer-color-palette) suits ash and beige blonde, [Cool Summer](/guides/cool-summer-color-palette) suits cool light-to-medium brown with ash highlights, and [Soft Summer](/guides/soft-summer-color-palette) suits mushroom brown and soft, blended ash tones.',
      },
      { type: 'h2', text: 'Best hair colors for Autumn' },
      {
        type: 'ul',
        items: [
          'Flattering: auburn, chestnut, deep copper, warm chocolate and golden brown.',
          'Be careful with: icy blonde, ash tones and flat blue-black.',
        ],
      },
      {
        type: 'p',
        text: 'By sub-season: [Soft Autumn](/guides/soft-autumn-color-palette) looks best in soft golden brown or bronde, [Warm Autumn](/guides/warm-autumn-color-palette) in copper, auburn and golden chestnut, and [Deep Autumn](/guides/deep-autumn-color-palette) in chocolate, mahogany and deep auburn.',
      },
      { type: 'h2', text: 'Best hair colors for Winter' },
      {
        type: 'ul',
        items: [
          'Flattering: espresso, blue-black, cool dark brown and deep burgundy. Silver grey also looks striking on many Winters.',
          'Be careful with: golden or brassy highlights and warm caramel balayage.',
        ],
      },
      {
        type: 'p',
        text: 'By sub-season: [Deep Winter](/guides/deep-winter-color-palette) suits espresso and soft black, [Cool Winter](/guides/cool-winter-color-palette) suits cool dark brown, blue-black or icy silver, and [Bright Winter](/guides/bright-winter-color-palette) suits true black or very dark brown that keeps strong contrast with the skin.',
      },
      { type: 'h2', text: 'Grey and silver hair color' },
      {
        type: 'p',
        text: 'Natural grey is usually cool-toned, which often shifts people toward Summer or Winter palettes over time. If you are growing out your grey, it can be worth [retaking the color analysis quiz](/#quiz) — the colors that suited you ten years ago may not be the best ones now.',
      },
      { type: 'h2', text: 'Match hair color to your undertone' },
      {
        type: 'p',
        text: 'If you only remember one rule, make it this: warm undertones look best with golden, copper or caramel tones, and cool undertones look best with ash, beige or blue-based tones. Neutral undertones can usually wear soft versions of both. If you are not sure which you have, the [skin undertone test](/guides/warm-vs-cool-undertones) takes about two minutes.',
      },
      { type: 'h2', text: 'Try before you commit' },
      {
        type: 'p',
        text: 'Before booking a salon appointment, try a semi-permanent gloss that fades in a few weeks, or hold a wig or hair swatch near your face in daylight. Once your new shade is in, check that your lipstick and blush still work with the [makeup colors guide](/guides/makeup-colors-for-your-color-season). And bring your season palette from the quiz to your colorist — it gives them a clear starting point for warm versus cool tones.',
      },
    ],
  },
  {
    "slug": "olive-skin-color-palette",
    "category": "Undertones",
    "swatches": [
      "#1F7A7A",
      "#7A1F35",
      "#C99A2E",
      "#2F5A3A"
    ],
    "title": "Olive Skin Color Palette: Best Colors, Makeup & Hair",
    "description": "The olive skin color palette: teal, emerald, burgundy, terracotta and mustard. How to tell if you have olive skin, plus makeup, hair and jewelry tips.",
    "date": "2026-10-22",
    "updated": "2026-10-26",
    "readTime": "7 min read",
    "body": [
      {
        "type": "p",
        "text": "Olive skin is one of the most common skin tones in the world and one of the most misunderstood in color analysis. Many people with olive skin find that most foundations look either too pink or too yellow, and that both \"warm\" and \"cool\" advice only half works for them. That is usually a sign of an olive undertone, and once you know it, choosing colors gets much easier."
      },
      {
        "type": "h2",
        "text": "What is olive skin?"
      },
      {
        "type": "p",
        "text": "Olive is an undertone, not a skin depth. It describes a slightly green or grey-green cast that sits under the surface color of the skin, usually alongside a warm (yellow) or neutral base. Olive skin can be light, medium or deep, and it is common in people with Mediterranean, Middle Eastern, South Asian and Latin American heritage, though anyone can have it. If your skin is medium to deep brown, the [brown skin color palette](/guides/brown-skin-color-palette) goes into more detail."
      },
      {
        "type": "h2",
        "text": "How to tell if you have olive skin"
      },
      {
        "type": "ul",
        "items": [
          "Your skin can look slightly greenish or grey in some lights, especially when you are tired or pale in winter.",
          "Most foundations look too pink or too orange on you, and \"neutral\" or \"olive\" shades match best.",
          "Both gold and silver jewelry look fine, but neither one clearly wins. Try the [gold or silver jewelry quiz](/guides/gold-vs-silver-jewelry-undertone) to see which way you lean.",
          "Your wrist veins look green-blue and are hard to call either way.",
          "You usually tan easily and rarely burn (a loose sign, not a rule)."
        ]
      },
      {
        "type": "p",
        "text": "If two or three of these sound like you, you probably have an olive undertone. The [skin undertone test](/guides/warm-vs-cool-undertones) explains each check in more detail."
      },
      {
        "type": "h2",
        "text": "Which color season is olive skin?"
      },
      {
        "type": "p",
        "text": "Olive skin does not belong to one season. Your season also depends on how deep your coloring is and how much contrast there is between your skin, hair and eyes. Most people with olive skin land in [Soft Autumn](/guides/soft-autumn-color-palette) or [Deep Autumn](/guides/deep-autumn-color-palette) when the undertone leans warm, and in [Soft Summer](/guides/soft-summer-color-palette) or [Deep Winter](/guides/deep-winter-color-palette) when it leans cool. Muted, slightly earthy colors tend to suit olive skin better than very clear, bright or icy ones, because they harmonise with the green cast instead of fighting it."
      },
      {
        "type": "h2",
        "text": "The olive skin color palette: best colors"
      },
      {
        "type": "ul",
        "items": [
          "Greens: olive, forest green, emerald and khaki echo the green in your skin and look rich rather than dull.",
          "Blues: teal, petrol blue and deep navy are flattering cool-leaning shades that still suit olive skin.",
          "Warm accents: terracotta, rust, mustard and camel bring warmth to your face.",
          "Reds and purples: burgundy, wine, berry and plum are some of the easiest bold colors for olive skin.",
          "Neutrals: cream, warm taupe, chocolate brown and charcoal work better than stark white or cool grey."
        ]
      },
      {
        "type": "h2",
        "text": "Olive skin color palette hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 olive-friendly shades and hex codes to shop online, match fabrics, or save as a reference before you buy clothes or makeup."
      },
      {
        "type": "palette",
        "label": "Olive skin color palette with hex codes",
        "colors": [
          {
            "name": "Teal",
            "hex": "#1F7A7A"
          },
          {
            "name": "Emerald",
            "hex": "#0F7A55"
          },
          {
            "name": "Forest green",
            "hex": "#2F5A3A"
          },
          {
            "name": "Olive",
            "hex": "#6B7A3A"
          },
          {
            "name": "Mustard",
            "hex": "#C99A2E"
          },
          {
            "name": "Terracotta",
            "hex": "#C0603F"
          },
          {
            "name": "Rust",
            "hex": "#A8471F"
          },
          {
            "name": "Burgundy",
            "hex": "#7A1F35"
          },
          {
            "name": "Plum",
            "hex": "#6E3B5C"
          },
          {
            "name": "Deep navy",
            "hex": "#1E2A4A"
          },
          {
            "name": "Camel",
            "hex": "#B98A5A"
          },
          {
            "name": "Warm cream",
            "hex": "#F2E6CC"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Colors that can be harder on olive skin"
      },
      {
        "type": "ul",
        "items": [
          "Pastel yellow, lime and neon yellow-green, which can exaggerate the green cast and make skin look sallow.",
          "Very icy pastels such as baby pink or ice blue, which can make olive skin look grey.",
          "Beige and nude shades very close to your own skin tone, which can wash you out near the face.",
          "Bright orange, which often looks harsh unless your undertone is strongly warm."
        ]
      },
      {
        "type": "p",
        "text": "You do not have to avoid these completely. Wear them away from your face, for example as trousers, shoes or a bag, and keep a flattering color near your face."
      },
      {
        "type": "h2",
        "text": "Olive Skin outfit color combinations"
      },
      {
        "type": "ul",
        "items": [
          "Camel with teal: an easy everyday pairing that warms the face without looking yellow.",
          "Warm cream with burgundy: rich and polished, softer than black and white.",
          "Forest green with mustard: earthy and warm, and the green echoes the olive in your skin.",
          "Deep navy with terracotta: a deep neutral with a warm, glowing accent."
        ]
      },
      {
        "type": "h2",
        "text": "Best makeup for olive skin"
      },
      {
        "type": "ul",
        "items": [
          "Foundation: look for shades labelled olive or neutral, and test them on your jaw in daylight.",
          "Blush: terracotta, warm rose and soft berry look natural; very cool baby pink can look chalky.",
          "Lips: brick red, rosewood, berry and warm mauve are reliable choices.",
          "Eyes: bronze, copper, plum and deep brown flatter most olive skin tones."
        ]
      },
      {
        "type": "p",
        "text": "For shades by season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      },
      {
        "type": "h2",
        "text": "Best hair colors for olive skin"
      },
      {
        "type": "p",
        "text": "Rich, medium-to-dark shades usually look best: chocolate brown, espresso, warm chestnut, caramel or bronze balayage, and deep auburn. Very ashy platinum can make olive skin look grey, and brassy orange can bring out redness. The [hair color guide](/guides/best-hair-colors-for-each-season) has shades for every season."
      },
      {
        "type": "h2",
        "text": "Gold or silver jewelry for olive skin?"
      },
      {
        "type": "p",
        "text": "Antique or brushed gold, bronze, brass and rose gold are usually the safest metals for olive skin. Many people with olive skin wear both gold and silver well; if that is you, choose the metal that matches your outfit. The [gold or silver jewelry quiz](/guides/gold-vs-silver-jewelry-undertone) can help you decide."
      },
      {
        "type": "h2",
        "text": "Find your exact color season"
      },
      {
        "type": "p",
        "text": "Olive skin narrows your options, but your exact palette depends on your whole coloring. Upload a photo to the [free color analysis quiz](/#quiz), or answer six quick questions in the [what season am I quiz](/what-season-am-i) if you do not want to use a photo."
      }
    ]
  },
  {
    "slug": "brown-skin-color-palette",
    "keywords": ["brown skin tone", "colors that look good on brown skin", "colours that suit brown skin", "which colors look good on brown skin", "brown skin tones", "brown skintone", "what color goes best with brown skin"],
    "category": "Undertones",
    "swatches": [
      "#00704A",
      "#C2185B",
      "#D4A017",
      "#6D1A2E"
    ],
    "title": "Best Colors for Brown Skin Tone: Palette & Color Combinations",
    "description": "What colors suit brown skin? Emerald, cobalt, fuchsia, mustard and rust, with hex codes, outfit color combinations, makeup, hair and jewelry for every undertone.",
    "date": "2026-10-26",
    "readTime": "7 min read",
    "body": [
      {
        "type": "p",
        "text": "Brown skin can wear a huge range of color, but a lot of color advice online is written with fair skin in mind. That is why many people with brown or South Asian skin end up with clothes that look fine on the hanger and dull on them. The fix is not a single \"safe\" list. It is knowing your undertone and your depth, and then choosing colors that match both."
      },
      {
        "type": "h2",
        "text": "Brown skin is not one skin tone"
      },
      {
        "type": "p",
        "text": "Brown skin ranges from light wheatish to deep brown, and the undertone under it can be warm (golden or yellow), cool (red or blue), neutral or olive. Olive and warm undertones are especially common in South Asian skin, but cool brown skin is common too, and it is often mislabeled as warm. Depth and undertone are separate things, so two people with the same shade of brown can suit very different colors. If your skin is very deep, the [dark skin color palette](/guides/dark-skin-color-palette) goes further."
      },
      {
        "type": "h2",
        "text": "How to find your undertone on brown skin"
      },
      {
        "type": "ul",
        "items": [
          "Gold vs silver: hold both against your neck in daylight. Gold glowing on you points warm; silver looking cleaner points cool. See the [gold or silver jewelry quiz](/guides/gold-vs-silver-jewelry-undertone).",
          "Orange-red vs blue-red lipstick: if a tomato or brick red looks natural, lean warm; if a berry or blue-red looks better, lean cool.",
          "Cream vs bright white: cream that looks warm and soft points warm; crisp white that looks clean points cool.",
          "A greenish or grey cast in some lights, and most foundations looking too orange or too pink, often means an [olive undertone](/guides/olive-skin-color-palette)."
        ]
      },
      {
        "type": "p",
        "text": "Vein colour is harder to read on deeper skin, so lean on the jewelry, lipstick and white tests instead. The [skin undertone test](/guides/warm-vs-cool-undertones) explains each check in more detail."
      },
      {
        "type": "h2",
        "text": "Which color seasons suit brown skin?"
      },
      {
        "type": "p",
        "text": "Most brown skin falls into the deeper seasons. Warm and olive undertones often land in [Deep Autumn](/guides/deep-autumn-color-palette), [Warm Autumn](/guides/warm-autumn-color-palette) or [Soft Autumn](/guides/soft-autumn-color-palette). Cool undertones with dark hair and eyes are often [Deep Winter](/guides/deep-winter-color-palette) or [Bright Winter](/guides/bright-winter-color-palette). Lighter brown skin with golden undertones can be [Warm Spring](/guides/warm-spring-color-palette) or [Bright Spring](/guides/bright-spring-color-palette). The lighter, softer Summer seasons are less common on brown skin, though some people with cool, muted coloring are [Soft Summer](/guides/soft-summer-color-palette)."
      },
      {
        "type": "h2",
        "text": "The brown skin color palette: best colors"
      },
      {
        "type": "ul",
        "items": [
          "Jewel tones: emerald, sapphire, cobalt, ruby and amethyst look rich against brown skin and are hard to get wrong.",
          "Warm brights: mustard, saffron, marigold and rust flatter warm and olive undertones.",
          "Cool brights: fuchsia, magenta and true red flatter cool undertones and high contrast.",
          "Deep tones: burgundy, plum, teal and forest green work for almost every undertone.",
          "Neutrals: cream, camel, chocolate brown and navy are softer and more flattering than flat beige."
        ]
      },
      {
        "type": "h2",
        "text": "Brown skin color palette hex codes"
      },
      {
        "type": "p",
        "text": "Here are 12 shades that work well on most brown and South Asian skin, with hex codes you can use when shopping online or picking fabric for an outfit."
      },
      {
        "type": "palette",
        "label": "Brown skin color palette with hex codes",
        "colors": [
          {
            "name": "Emerald",
            "hex": "#00704A"
          },
          {
            "name": "Cobalt",
            "hex": "#1F4FBF"
          },
          {
            "name": "Teal",
            "hex": "#00757A"
          },
          {
            "name": "Fuchsia",
            "hex": "#C2185B"
          },
          {
            "name": "Ruby red",
            "hex": "#9B111E"
          },
          {
            "name": "Burgundy",
            "hex": "#6D1A2E"
          },
          {
            "name": "Plum",
            "hex": "#5E2A5A"
          },
          {
            "name": "Mustard",
            "hex": "#D4A017"
          },
          {
            "name": "Saffron",
            "hex": "#F4A300"
          },
          {
            "name": "Rust",
            "hex": "#B7410E"
          },
          {
            "name": "Chocolate",
            "hex": "#4A2C1D"
          },
          {
            "name": "Cream",
            "hex": "#F3E5C8"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Colors that can be harder on brown skin"
      },
      {
        "type": "ul",
        "items": [
          "Beige, tan and nude shades very close to your skin tone, which can make an outfit look washed out near the face.",
          "Very pale pastels such as baby pink or powder blue, especially on deeper skin, where they can look chalky.",
          "Neon yellow-green, which can bring out a sallow or grey cast.",
          "Very dusty, greyed colors on high-contrast coloring, which can look flat next to dark hair and eyes."
        ]
      },
      {
        "type": "p",
        "text": "None of these are banned. Wear them as trousers, shoes or a dupatta away from your face, and keep a richer color near your face. If you wear a hijab, see [hijab colors for your skin tone](/guides/hijab-colors-for-skin-tone)."
      },
      {
        "type": "h2",
        "text": "Brown Skin outfit color combinations"
      },
      {
        "type": "ul",
        "items": [
          "Cream with emerald: fresh and elegant, a great choice for daytime events.",
          "Chocolate with mustard: warm and earthy, easy for everyday outfits.",
          "Burgundy with saffron: rich and festive, perfect for weddings and Eid.",
          "Teal with rust: a bold but balanced pairing that suits warm and olive skin."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup for brown skin"
      },
      {
        "type": "ul",
        "items": [
          "Foundation: match the undertone, not only the depth. Many South Asian shades are labelled olive, golden or neutral.",
          "Lips: brick, terracotta and warm nudes for warm undertones; berry, plum and blue-red for cool undertones.",
          "Blush: warm rose, terracotta and soft berry show up well; very pale pink can look chalky.",
          "Eyes: bronze, copper, deep plum, olive and gold shimmer work for most brown skin."
        ]
      },
      {
        "type": "p",
        "text": "For shades by season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season). For lipstick in detail, read the [best lipstick colors for brown skin](/guides/best-lipstick-colors-for-brown-skin)."
      },
      {
        "type": "h2",
        "text": "Hair colors for brown skin"
      },
      {
        "type": "p",
        "text": "Rich, dark shades usually look best: espresso, chocolate brown, deep burgundy, mahogany and warm caramel or honey balayage. Very ashy blonde or platinum can make brown skin look grey, and very bright orange can clash with warm undertones. The [hair color guide](/guides/best-hair-colors-for-each-season) has shades for every season."
      },
      {
        "type": "h2",
        "text": "Gold or silver jewelry for brown skin?"
      },
      {
        "type": "p",
        "text": "Gold is the traditional choice and suits warm and olive undertones beautifully. Cool undertones often look even better in silver, white gold or platinum, so it is worth testing both rather than assuming gold. Rose gold and antique finishes are an easy middle ground for neutral undertones."
      },
      {
        "type": "h2",
        "text": "Brown skin colours: quick answers"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What colours go best with brown skin?",
            "a": "Rich, saturated colours: emerald, cobalt, fuchsia, mustard, rust, burgundy and teal. Jewel tones and deep earth tones make brown skin glow, while pale beige and grey can look dull near the face."
          },
          {
            "q": "What colour combinations suit brown skin?",
            "a": "Easy combinations are emerald with gold accents, cobalt with white, mustard with deep teal, and rust with cream. Pair one rich colour with a lighter or neutral one so the outfit does not look heavy."
          },
          {
            "q": "Does black suit brown skin?",
            "a": "Black usually suits deeper brown skin well, especially with gold jewelry or a bright colour near the face. On lighter or warmer brown skin, chocolate brown, navy or deep olive can look softer and more flattering."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Find your exact season"
      },
      {
        "type": "p",
        "text": "Your undertone and depth narrow things down, but your best palette depends on your whole coloring. Try the [free color analysis quiz](/#quiz) with a daylight photo, or answer six quick questions in the [what season am I quiz](/what-season-am-i)."
      }
    ]
  },
  {
    "slug": "dark-autumn-vs-dark-winter",
    "category": "Basics",
    "swatches": [
      "#5C3A21",
      "#7B1E2B",
      "#141414",
      "#C2185B"
    ],
    "title": "Dark Autumn vs Dark Winter: How to Tell the Difference",
    "description": "Dark Autumn or Dark Winter? Both are deep, but one is warm and one is cool. Use these simple tests to find your season, with palettes, makeup and hair tips.",
    "date": "2026-10-26",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Dark Autumn and Dark Winter (also called Deep Autumn and Deep Winter) are neighbours on the color wheel. Both have deep coloring and both look powerful in rich, dark shades. That is exactly why people swap between them. The good news is that one question settles it: does your coloring lean warm or cool?"
      },
      {
        "type": "h2",
        "text": "What the two seasons share"
      },
      {
        "type": "ul",
        "items": [
          "Depth is the main feature. Hair and eyes are usually dark, and skin can be anywhere from light to very deep.",
          "Both look best in deep, saturated colors rather than pastels.",
          "Both can handle stronger contrast than the soft or light seasons."
        ]
      },
      {
        "type": "h2",
        "text": "The difference in one line"
      },
      {
        "type": "p",
        "text": "Dark Autumn is deep and warm, with an earthy, slightly muted richness. Dark Winter is deep and cool, with a crisp, jewel-like clarity. Dark Autumn looks like a forest in October; Dark Winter looks like a night sky with jewels in it."
      },
      {
        "type": "h2",
        "text": "Five quick tests"
      },
      {
        "type": "ul",
        "items": [
          "Neutrals: compare dark chocolate with true black. Chocolate looking richer points to Dark Autumn; black looking sharper points to Dark Winter.",
          "Whites: compare ivory with optic white. Ivory flatters Dark Autumn; optic white flatters Dark Winter.",
          "Greens: compare olive with emerald. Olive suits Dark Autumn; a cool emerald or pine suits Dark Winter.",
          "Lipstick: brick or warm brown-red suits Dark Autumn; deep berry or blue-red suits Dark Winter.",
          "Metals: antique gold and bronze suit Dark Autumn; silver and platinum suit Dark Winter."
        ]
      },
      {
        "type": "p",
        "text": "Do the tests in daylight with no makeup. If three or more point the same way, you have your answer."
      },
      {
        "type": "h2",
        "text": "Side-by-side palettes"
      },
      {
        "type": "ul",
        "items": [
          "Dark Autumn: chocolate, espresso, burgundy, brick red, burnt orange, mustard, forest green, olive and deep teal.",
          "Dark Winter: black, charcoal, pure white, burgundy, true red, emerald, pine green, navy, royal purple and fuchsia."
        ]
      },
      {
        "type": "compare",
        "label": "Dark Autumn vs Dark Winter palettes",
        "tagline": "Both deep. One warm, one cool.",
        "sides": [
          {
            "name": "Dark Autumn",
            "note": "Warm and rich",
            "colors": [
              {
                "name": "Chocolate",
                "hex": "#5C3A21"
              },
              {
                "name": "Brick red",
                "hex": "#9C3D2E"
              },
              {
                "name": "Burnt orange",
                "hex": "#B8541B"
              },
              {
                "name": "Mustard",
                "hex": "#C79A1E"
              },
              {
                "name": "Olive",
                "hex": "#5E6B2E"
              },
              {
                "name": "Forest green",
                "hex": "#2E5939"
              }
            ]
          },
          {
            "name": "Dark Winter",
            "note": "Cool and crisp",
            "colors": [
              {
                "name": "Black",
                "hex": "#141414"
              },
              {
                "name": "Pure white",
                "hex": "#FAFAFA"
              },
              {
                "name": "True red",
                "hex": "#C8102E"
              },
              {
                "name": "Emerald",
                "hex": "#00704A"
              },
              {
                "name": "Royal purple",
                "hex": "#4B2C82"
              },
              {
                "name": "Fuchsia",
                "hex": "#C2185B"
              }
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "Burgundy appears in both, which is a good clue. If you look great in burgundy but cannot decide on the rest, use the neutral and white tests above, because they show the warm and cool difference most clearly."
      },
      {
        "type": "h2",
        "text": "Makeup and hair"
      },
      {
        "type": "p",
        "text": "Dark Autumn looks best in bronze, copper and olive eyeshadow, warm brick lips and chocolate liner. Dark Winter looks best in charcoal, plum and silver eyeshadow, berry or blue-red lips and crisp black liner. For hair, Dark Autumn suits chocolate, mahogany and deep auburn, while Dark Winter suits espresso, soft black and cool dark brown."
      },
      {
        "type": "h2",
        "text": "Common mistakes that cause the mix-up"
      },
      {
        "type": "ul",
        "items": [
          "Judging by hair alone. Dark hair is common to both seasons, so it cannot decide between them.",
          "Testing under warm indoor lights, which push almost everyone toward Dark Autumn.",
          "Assuming deep skin must be warm. Many people with deep brown skin have cool undertones and are Dark Winter.",
          "Choosing by favourite colors. Liking black does not make you a Winter; look at what your skin does next to it."
        ]
      },
      {
        "type": "h2",
        "text": "A starter wardrobe for each season"
      },
      {
        "type": "p",
        "text": "For Dark Autumn, build around espresso or chocolate trousers, a camel or olive coat, cream knitwear, and a few rich accents such as burgundy, rust or deep teal. For Dark Winter, build around black or charcoal trousers, a navy or black coat, crisp white shirts, and jewel-tone accents such as emerald, royal purple or true red. Either way, a burgundy piece is a safe first buy while you are still deciding."
      },
      {
        "type": "h2",
        "text": "What if you sit between them?"
      },
      {
        "type": "p",
        "text": "Some people are close to the line, often with neutral or olive undertones. In that case, stay with the colors both palettes share: burgundy, deep teal, navy and dark charcoal. Then lean warm or cool depending on the outfit and your jewelry."
      },
      {
        "type": "h2",
        "text": "See the full palettes"
      },
      {
        "type": "p",
        "text": "The [Deep Autumn](/guides/deep-autumn-color-palette) guide and the [Deep Winter](/guides/deep-winter-color-palette) guide each have 12 hex codes, outfit combinations, makeup and hair colors. Not sure you are a deep season at all? Try the [free color analysis quiz](/#quiz) or the [what season am I quiz](/what-season-am-i)."
      }
    ]
  },
  {
    "slug": "soft-summer-vs-soft-autumn",
    "category": "Basics",
    "swatches": [
      "#C9A0A6",
      "#6D8299",
      "#C19A6B",
      "#8A8B4E"
    ],
    "title": "Soft Summer vs Soft Autumn: How to Tell the Difference",
    "description": "Soft Summer or Soft Autumn? Both are muted, but one is cool and one is warm. Use five simple tests, side-by-side hex palettes, makeup and hair tips.",
    "date": "2026-10-26",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Soft Summer and Soft Autumn are the two most muted seasons in color analysis, and they are easy to confuse. Both look best in gentle, slightly greyed colors, and both look tired in neon brights. What separates them is temperature: Soft Summer leans cool and Soft Autumn leans warm. Once you know which way you lean, the rest of the palette falls into place."
      },
      {
        "type": "h2",
        "text": "What the two soft seasons share"
      },
      {
        "type": "ul",
        "items": [
          "Low chroma. Blended, dusty colors flatter you more than clear, saturated ones.",
          "Low to medium contrast. Hair, eyes and skin tend to blend rather than stand out sharply from each other.",
          "Many people in both seasons have a neutral or [olive undertone](/guides/olive-skin-color-palette), which is a big reason for the mix-up."
        ]
      },
      {
        "type": "h2",
        "text": "The difference in one line"
      },
      {
        "type": "p",
        "text": "Soft Summer looks like a misty morning: dusty rose, mauve, slate blue and soft white. Soft Autumn looks like a hazy autumn field: camel, salmon, olive and cream. Same softness, different temperature."
      },
      {
        "type": "h2",
        "text": "Five quick tests"
      },
      {
        "type": "ul",
        "items": [
          "Pinks: hold dusty rose and then salmon under your face. Dusty rose points to Soft Summer; salmon points to Soft Autumn.",
          "Neutrals: compare soft charcoal or grey-taupe with camel. Grey-taupe flatters Soft Summer; camel flatters Soft Autumn.",
          "Whites: compare soft white with cream. Soft white looks cleaner on Soft Summer; cream looks warmer and healthier on Soft Autumn.",
          "Greens: compare eucalyptus with olive. The blue-leaning green suits Soft Summer; the yellow-leaning olive suits Soft Autumn.",
          "Metals: brushed silver and pewter suit Soft Summer; brushed gold and bronze suit Soft Autumn."
        ]
      },
      {
        "type": "p",
        "text": "Test in daylight near a window, without makeup. If three or more tests point the same way, trust that result."
      },
      {
        "type": "h2",
        "text": "Side-by-side palettes"
      },
      {
        "type": "p",
        "text": "Six signature shades from each season, with hex codes. Notice that both columns are muted. The left one has blue and grey in it; the right one has yellow and golden warmth."
      },
      {
        "type": "compare",
        "label": "Soft Summer vs Soft Autumn palettes",
        "tagline": "Both muted. One cool, one warm.",
        "sides": [
          {
            "name": "Soft Summer",
            "note": "Cool and muted",
            "colors": [
              {
                "name": "Dusty rose",
                "hex": "#C9A0A6"
              },
              {
                "name": "Mauve",
                "hex": "#A88AA6"
              },
              {
                "name": "Slate blue",
                "hex": "#6D8299"
              },
              {
                "name": "Dusty teal",
                "hex": "#5E8C8A"
              },
              {
                "name": "Taupe",
                "hex": "#A39486"
              },
              {
                "name": "Soft white",
                "hex": "#F2EFEA"
              }
            ]
          },
          {
            "name": "Soft Autumn",
            "note": "Warm and muted",
            "colors": [
              {
                "name": "Salmon",
                "hex": "#E39B7B"
              },
              {
                "name": "Dusty coral",
                "hex": "#D4826B"
              },
              {
                "name": "Camel",
                "hex": "#C19A6B"
              },
              {
                "name": "Olive",
                "hex": "#8A8B4E"
              },
              {
                "name": "Soft teal",
                "hex": "#5F8D8B"
              },
              {
                "name": "Cream",
                "hex": "#F3E9D2"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "text": "Common mistakes that cause the mix-up"
      },
      {
        "type": "ul",
        "items": [
          "Testing under warm indoor bulbs, which make almost everyone look like an Autumn.",
          "Judging by hair alone. Ash brown and dark blonde hair appear in both seasons.",
          "Testing with very bright colors. Both seasons look bad in neon, so bright swatches cannot separate them.",
          "Reading olive skin as warm. A greenish cast can belong to either season, so rely on the pink and white tests instead."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup and hair"
      },
      {
        "type": "p",
        "text": "Soft Summer looks best in rose, mauve and muted berry lips, with taupe, grey-brown and soft plum eyeshadow. Soft Autumn looks best in warm peach, terracotta and soft brick lips, with bronze, olive and warm brown eyeshadow. For hair, Soft Summer suits ash brown, mushroom brown and cool dark blonde, while Soft Autumn suits golden brown, soft caramel and honey highlights."
      },
      {
        "type": "h2",
        "text": "A starter wardrobe for each season"
      },
      {
        "type": "p",
        "text": "For Soft Summer, build around grey-taupe or soft navy trousers, a slate blue or charcoal coat, soft white tops and accents in dusty rose, mauve or dusty teal. For Soft Autumn, build around camel or warm taupe trousers, an olive or khaki jacket, cream knitwear and accents in salmon, dusty coral or soft teal."
      },
      {
        "type": "h2",
        "text": "What if you sit between them?"
      },
      {
        "type": "p",
        "text": "If every test splits the difference, you probably have a neutral undertone. Stay with the shades both palettes share, such as sage, soft teal, taupe and muted denim, and choose your metal to match the outfit."
      },
      {
        "type": "h2",
        "text": "See the full palettes"
      },
      {
        "type": "p",
        "text": "The [Soft Summer](/guides/soft-summer-color-palette) and [Soft Autumn](/guides/soft-autumn-color-palette) guides each have 12 hex codes, outfit combinations, makeup and hair colors. Not sure you are a soft season at all? Try the [free color analysis quiz](/#quiz) or the [what season am I quiz](/what-season-am-i)."
      }
    ]
  },
  {
    "slug": "hijab-colors-for-skin-tone",
    "category": "Wardrobe",
    "imageTitle": "Hijab",
    "swatches": [
      "#C9A0A6",
      "#14213D",
      "#00704A",
      "#C19A6B"
    ],
    "title": "Hijab Colors for Your Skin Tone: Warm, Cool & Olive Skin",
    "description": "Which hijab colors suit your skin tone? The best hijab shades for warm, cool, olive and deep skin, a 12-color palette with hex codes and easy outfit pairings.",
    "date": "2026-10-26",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "A hijab sits right around your face, so its color has more effect on how you look than almost anything else you wear. The right shade makes your skin look even and your eyes brighter. The wrong one can make you look tired, even with makeup. You do not need dozens of hijabs to get this right, just a few colors chosen for your undertone."
      },
      {
        "type": "h2",
        "text": "Start with your undertone"
      },
      {
        "type": "ul",
        "items": [
          "Gold vs silver: if gold jewelry glows on you, you lean warm; if silver looks cleaner, you lean cool. The [gold or silver jewelry quiz](/guides/gold-vs-silver-jewelry-undertone) takes two minutes.",
          "White vs cream: hold a bright white scarf and a cream one under your chin in daylight. Bright white winning points cool; cream winning points warm.",
          "If both look only half right and foundations often look too pink or too orange, you may have an [olive undertone](/guides/olive-skin-color-palette)."
        ]
      },
      {
        "type": "p",
        "text": "Also notice your depth. Lighter skin usually looks best in soft, lighter hijab colors, while deeper skin can carry richer, more saturated ones. If you are still unsure, the step-by-step [warm vs cool undertone guide](/guides/warm-vs-cool-undertones) has more checks."
      },
      {
        "type": "h2",
        "text": "Best hijab colors for warm undertones"
      },
      {
        "type": "p",
        "text": "Camel, mocha, olive, mustard, rust, peach, coral and warm cream. Earthy shades look natural on warm skin. If you want a bright color, choose a warm one such as coral or marigold rather than icy pink."
      },
      {
        "type": "h2",
        "text": "Best hijab colors for cool undertones"
      },
      {
        "type": "p",
        "text": "Dusty rose, mauve, navy, slate blue, emerald, plum, burgundy and soft grey. Cool skin looks fresh in blue-based shades. Soft white flatters lighter cool skin; bright white and black suit cool skin with high contrast."
      },
      {
        "type": "h2",
        "text": "Best hijab colors for olive undertones"
      },
      {
        "type": "p",
        "text": "Teal, emerald, burgundy, olive, dusty rose, mocha and muted navy. Olive skin does well in slightly muted colors that sit between warm and cool. Very yellow mustard and very icy pastels are the two that most often clash."
      },
      {
        "type": "h2",
        "text": "Hijab colors for deep and brown skin"
      },
      {
        "type": "p",
        "text": "Deeper skin looks striking in jewel tones such as emerald, cobalt, fuchsia, burgundy and plum, and in warm brights such as saffron and tangerine. Beige and nude hijabs very close to your skin tone can blur your features, so pick a shade a few steps lighter or darker. The [brown skin color palette](/guides/brown-skin-color-palette) and [dark skin color palette](/guides/dark-skin-color-palette) have more ideas."
      },
      {
        "type": "h2",
        "text": "Hijab color palette with hex codes"
      },
      {
        "type": "p",
        "text": "These 12 shades suit a wide range of skin tones and are easy to find in jersey, chiffon and modal. Use the hex codes to match colors when shopping online."
      },
      {
        "type": "palette",
        "label": "Hijab color palette with hex codes",
        "colors": [
          {
            "name": "Dusty rose",
            "hex": "#C9A0A6"
          },
          {
            "name": "Mauve",
            "hex": "#A88AA6"
          },
          {
            "name": "Navy",
            "hex": "#1F2A44"
          },
          {
            "name": "Slate blue",
            "hex": "#6D8299"
          },
          {
            "name": "Emerald",
            "hex": "#00704A"
          },
          {
            "name": "Teal",
            "hex": "#00757A"
          },
          {
            "name": "Olive",
            "hex": "#6B6B3A"
          },
          {
            "name": "Camel",
            "hex": "#C19A6B"
          },
          {
            "name": "Mocha",
            "hex": "#7B5E4B"
          },
          {
            "name": "Burgundy",
            "hex": "#6D1A2E"
          },
          {
            "name": "Cream",
            "hex": "#F3E5C8"
          },
          {
            "name": "Black",
            "hex": "#141414"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Hijab outfit color combinations"
      },
      {
        "type": "ul",
        "items": [
          "Dusty rose with navy: soft and polished, easy for work or university.",
          "Camel with cream: warm and elegant, great for everyday wear.",
          "Emerald with black: rich and striking, ideal for evenings and Eid.",
          "Mauve with slate blue: calm and tonal, flattering on cool skin."
        ]
      },
      {
        "type": "p",
        "text": "A simple rule: if your outfit is busy or printed, pick a hijab in one of the print's quieter colors. If your outfit is plain, the hijab can be the accent."
      },
      {
        "type": "h2",
        "text": "Colors to be careful with"
      },
      {
        "type": "ul",
        "items": [
          "Beige or nude very close to your skin tone, which can make your face look washed out.",
          "Neon colors such as lime and bright yellow, which reflect harsh color onto the skin.",
          "Bright white on warm or soft coloring. Cream or ivory usually looks kinder.",
          "Black on light, soft coloring. Navy, charcoal or mocha give the same depth more gently."
        ]
      },
      {
        "type": "h2",
        "text": "Fabric changes the color too"
      },
      {
        "type": "p",
        "text": "Shiny satin and silk reflect more light and make a color look brighter, while matte jersey and cotton soften it. If a color feels a little strong for you, try it in a matte fabric first. If a muted shade looks dull, a fabric with a soft sheen can lift it."
      },
      {
        "type": "h2",
        "text": "Find your exact season"
      },
      {
        "type": "p",
        "text": "Undertone gets you most of the way. For your full palette, including makeup and the best colors for abayas and outfits, try the [free color analysis quiz](/#quiz) with a daylight photo, or the [what season am I quiz](/what-season-am-i) if you prefer not to upload a photo."
      }
    ]
  },
  {
    "slug": "dark-skin-color-palette",
    "category": "Undertones",
    "swatches": [
      "#1F4FBF",
      "#C2185B",
      "#EAA221",
      "#00704A"
    ],
    "title": "Dark Skin Color Palette: Best Colors for Deep and Black Skin",
    "description": "The best colors for dark and deep skin: cobalt, fuchsia, emerald, marigold and bright white. Find your undertone and season, plus makeup, hair and jewelry tips.",
    "date": "2026-10-26",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Dark skin can carry color in a way few other skin tones can. Saturated brights, rich jewel tones and crisp white all look strong against deep skin. Even so, not every bold color suits every person with dark skin, because undertone still matters. This guide helps you find the shades that make your skin look its richest."
      },
      {
        "type": "h2",
        "text": "Undertones on dark skin"
      },
      {
        "type": "p",
        "text": "Deep skin can be warm (golden, copper or red-orange), cool (blue, red or plum), or neutral. Vein color is hard to read on deeper skin, so use these checks instead:"
      },
      {
        "type": "ul",
        "items": [
          "Gold vs silver: gold glowing on you points warm; silver or platinum looking brighter points cool. Try the [gold or silver jewelry quiz](/guides/gold-vs-silver-jewelry-undertone).",
          "Orange-red vs blue-red lipstick: a brick or orange-red looking natural points warm; a berry or blue-red looking better points cool.",
          "Mustard vs fuchsia: if mustard makes your skin glow, lean warm; if fuchsia makes it glow and mustard looks dull, lean cool."
        ]
      },
      {
        "type": "p",
        "text": "Two out of three agreeing is enough to go on. For more ways to check, read [warm vs cool undertones](/guides/warm-vs-cool-undertones)."
      },
      {
        "type": "h2",
        "text": "Which color seasons suit dark skin?"
      },
      {
        "type": "p",
        "text": "Most dark skin falls into the deep or bright seasons. Cool undertones with high contrast are often [Deep Winter](/guides/deep-winter-color-palette), [Bright Winter](/guides/bright-winter-color-palette) or [Cool Winter](/guides/cool-winter-color-palette). Warm undertones are often [Deep Autumn](/guides/deep-autumn-color-palette) or [Warm Autumn](/guides/warm-autumn-color-palette). Some people with softer, lower-contrast coloring are [Soft Autumn](/guides/soft-autumn-color-palette). Not sure between the two deep seasons? Read [Dark Autumn vs Dark Winter](/guides/dark-autumn-vs-dark-winter)."
      },
      {
        "type": "h2",
        "text": "The dark skin color palette: best colors"
      },
      {
        "type": "ul",
        "items": [
          "Clear brights: cobalt, fuchsia, true red and tangerine look vivid instead of loud.",
          "Jewel tones: emerald, royal purple, sapphire and turquoise add richness for every undertone.",
          "Warm golds: marigold, mustard and burnt orange are beautiful on warm undertones.",
          "Crisp white: bright white is one of the most flattering colors for high-contrast dark skin.",
          "Neutrals: camel, chocolate, navy and charcoal are easier than flat beige or khaki."
        ]
      },
      {
        "type": "h2",
        "text": "Dark skin color palette hex codes"
      },
      {
        "type": "p",
        "text": "Here are 12 shades that look great on most dark and deep skin, with hex codes for shopping online or matching fabric."
      },
      {
        "type": "palette",
        "label": "Dark skin color palette with hex codes",
        "colors": [
          {
            "name": "Cobalt",
            "hex": "#1F4FBF"
          },
          {
            "name": "Royal purple",
            "hex": "#5B2A86"
          },
          {
            "name": "Emerald",
            "hex": "#00704A"
          },
          {
            "name": "Turquoise",
            "hex": "#15A3A3"
          },
          {
            "name": "Fuchsia",
            "hex": "#C2185B"
          },
          {
            "name": "True red",
            "hex": "#C8102E"
          },
          {
            "name": "Tangerine",
            "hex": "#F28500"
          },
          {
            "name": "Marigold",
            "hex": "#EAA221"
          },
          {
            "name": "Burnt orange",
            "hex": "#B8541B"
          },
          {
            "name": "Camel",
            "hex": "#C19A6B"
          },
          {
            "name": "Chocolate",
            "hex": "#4A2C1D"
          },
          {
            "name": "Bright white",
            "hex": "#FAFAFA"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Colors that can be harder on dark skin"
      },
      {
        "type": "ul",
        "items": [
          "Brown, tan or nude shades very close to your own skin tone, which can make an outfit look flat near the face.",
          "Very dusty, greyed colors such as muddy khaki or grey-green, which can make deep skin look ashy.",
          "Chalky pastels. Clear pastels such as lavender, mint and butter yellow often look lovely, so it is the dull, greyed versions to avoid."
        ]
      },
      {
        "type": "p",
        "text": "None of these are off-limits. Wear them on the lower half of your outfit and keep a richer color near your face."
      },
      {
        "type": "h2",
        "text": "Dark Skin outfit color combinations"
      },
      {
        "type": "ul",
        "items": [
          "Cobalt with marigold: bold and joyful, made for summer and celebrations.",
          "Bright white with emerald: crisp and fresh, a strong choice for daytime.",
          "Camel with fuchsia: warm base with a bright pop of color.",
          "Burnt orange with turquoise: a vivid pairing that suits warm undertones."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup for dark skin"
      },
      {
        "type": "ul",
        "items": [
          "Foundation: match both depth and undertone. Deep shades are often labelled red, golden or neutral; test on your jaw in daylight.",
          "Lips: berry, plum, wine and blue-red for cool undertones; brick, bronze, orange-red and warm brown for warm undertones.",
          "Blush: deep berry, terracotta and bright orange-red show up well; pale pink can look chalky.",
          "Eyes: gold, copper, bronze, plum and cobalt liner all stand out beautifully on deep skin."
        ]
      },
      {
        "type": "p",
        "text": "For shades by season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season). Many of the [lipstick shades for brown skin](/guides/best-lipstick-colors-for-brown-skin) also suit deeper skin."
      },
      {
        "type": "h2",
        "text": "Hair colors for dark skin"
      },
      {
        "type": "p",
        "text": "Jet black, soft black and espresso always look rich. Burgundy, plum and deep wine suit cool undertones, while copper, auburn and honey highlights suit warm ones. Platinum and bright colors can look striking on high-contrast coloring, but ashy mid-blonde often makes deep skin look grey. The [hair color guide](/guides/best-hair-colors-for-each-season) has shades for every season."
      },
      {
        "type": "h2",
        "text": "Gold or silver jewelry for dark skin?"
      },
      {
        "type": "p",
        "text": "Yellow gold is a classic on warm undertones, and it looks stunning against deep skin. Cool undertones often look just as good, or better, in silver, white gold and platinum. Many people with dark skin wear both metals well; if that is you, choose the metal that suits your outfit."
      },
      {
        "type": "h2",
        "text": "Find your exact season"
      },
      {
        "type": "p",
        "text": "Your undertone and contrast decide your best palette. Try the [free color analysis quiz](/#quiz) with a daylight photo, or answer six quick questions in the [what season am I quiz](/what-season-am-i)."
      }
    ]
  },
  {
    "slug": "light-spring-vs-light-summer",
    "category": "Basics",
    "swatches": [
      "#FFCBA4",
      "#F9E07F",
      "#B9D6F2",
      "#CDB4DB"
    ],
    "title": "Light Spring vs Light Summer: How to Tell the Difference",
    "description": "Light Spring or Light Summer? Both are light and delicate, but one is warm and one is cool. Five easy tests, side-by-side hex palettes, makeup and hair tips.",
    "date": "2026-10-27",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Light Spring and Light Summer are the two lightest seasons in color analysis. Both look lovely in soft, airy shades, and both can be overpowered by black or very dark colors. That is why people so often land between them. The deciding question is temperature: Light Spring leans warm and golden, Light Summer leans cool and rosy."
      },
      {
        "type": "h2",
        "text": "What the two light seasons share"
      },
      {
        "type": "ul",
        "items": [
          "Light overall coloring. Hair is often blonde, light brown or light ash, and eyes are usually light or medium.",
          "Both look best in light to medium shades and look heavy in black, espresso or deep burgundy near the face.",
          "Both can wear pastels well, which is a big reason they get mixed up."
        ]
      },
      {
        "type": "h2",
        "text": "The difference in one line"
      },
      {
        "type": "p",
        "text": "Light Spring is light and warm, like a spring morning: peach, light coral, buttercup yellow and ivory. Light Summer is light and cool, like a misty summer sky: powder blue, lavender, soft rose and soft white."
      },
      {
        "type": "h2",
        "text": "Five quick tests"
      },
      {
        "type": "ul",
        "items": [
          "Pinks: hold peach and then powder pink under your face. Peach that makes your skin glow points to Light Spring; powder pink that looks fresher points to Light Summer.",
          "Yellows: a soft buttercup yellow usually suits Light Spring. On Light Summer the same yellow tends to look sallow.",
          "Whites: ivory or cream flatters Light Spring; a soft cool white flatters Light Summer.",
          "Neutrals: light camel and warm beige suit Light Spring; light grey and cool taupe suit Light Summer.",
          "Metals: light gold and rose gold suit Light Spring; silver and white gold suit Light Summer."
        ]
      },
      {
        "type": "p",
        "text": "Test in daylight with no makeup. If three or more of the tests point the same way, go with that season."
      },
      {
        "type": "h2",
        "text": "Side-by-side palettes"
      },
      {
        "type": "p",
        "text": "Six signature shades from each season, with hex codes. Both columns are light. The left one has peach and golden yellow in it; the right one has blue and lilac."
      },
      {
        "type": "compare",
        "label": "Light Spring vs Light Summer palettes",
        "tagline": "Both light. One warm, one cool.",
        "sides": [
          {
            "name": "Light Spring",
            "note": "Warm and light",
            "colors": [
              {
                "name": "Peach",
                "hex": "#FFCBA4"
              },
              {
                "name": "Light coral",
                "hex": "#F4A28C"
              },
              {
                "name": "Buttercup yellow",
                "hex": "#F9E07F"
              },
              {
                "name": "Light aqua",
                "hex": "#A8E0D4"
              },
              {
                "name": "Light camel",
                "hex": "#D9B48F"
              },
              {
                "name": "Ivory",
                "hex": "#FFF4DE"
              }
            ]
          },
          {
            "name": "Light Summer",
            "note": "Cool and light",
            "colors": [
              {
                "name": "Powder blue",
                "hex": "#B9D6F2"
              },
              {
                "name": "Lavender",
                "hex": "#CDB4DB"
              },
              {
                "name": "Soft rose",
                "hex": "#F1C0CB"
              },
              {
                "name": "Seafoam",
                "hex": "#9FD8C8"
              },
              {
                "name": "Light grey",
                "hex": "#D9D9E0"
              },
              {
                "name": "Soft white",
                "hex": "#F8F8F6"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "text": "Common mistakes that cause the mix-up"
      },
      {
        "type": "ul",
        "items": [
          "Calling yourself a Summer just because you are fair. Fair skin can be warm, and many fair people are Light Spring.",
          "Judging by blonde hair. Golden blonde hints at Light Spring, ash blonde at Light Summer, but hair dye hides this, so look at your roots or brows.",
          "Testing in yellow indoor light, which pushes almost everyone toward Spring.",
          "Comparing very bright colors. Neither season wears neon well, so bright swatches will not separate them."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup and hair"
      },
      {
        "type": "p",
        "text": "Light Spring looks best in peach, coral and warm pink lips with soft bronze or champagne eyeshadow. Light Summer looks best in rose, soft berry and pink-mauve lips with taupe, grey-lilac or soft plum eyeshadow. For hair, Light Spring suits golden blonde, strawberry blonde and honey highlights, while Light Summer suits ash blonde, beige blonde and soft cool light brown."
      },
      {
        "type": "h2",
        "text": "A starter wardrobe for each season"
      },
      {
        "type": "p",
        "text": "For Light Spring, build around ivory, light camel and warm light grey, with peach, light coral and light aqua as accents. For Light Summer, build around soft white, light grey and cool taupe, with powder blue, lavender and soft rose as accents. Light navy works for both if you need a darker anchor."
      },
      {
        "type": "h2",
        "text": "What if you sit between them?"
      },
      {
        "type": "p",
        "text": "Some people are almost exactly neutral. If so, choose the shades both palettes share, such as periwinkle, mint and soft aqua, and pick your jewelry to match the outfit."
      },
      {
        "type": "h2",
        "text": "See the full palettes"
      },
      {
        "type": "p",
        "text": "The [Light Spring](/guides/light-spring-color-palette) and [Light Summer](/guides/light-summer-color-palette) guides each have 12 hex codes, outfit combinations, makeup and hair colors. If you are not sure you are a light season at all, upload a daylight photo to the [free color analysis quiz](/#quiz), or answer six questions in the [what season am I quiz](/what-season-am-i)."
      }
    ]
  },
  {
    "slug": "bright-spring-vs-bright-winter",
    "category": "Basics",
    "swatches": [
      "#FF6F59",
      "#FFD23F",
      "#FF1F8E",
      "#0047AB"
    ],
    "title": "Bright Spring vs Bright Winter: How to Tell the Difference",
    "description": "Bright Spring or Bright Winter? Both need vivid, clear colors, but one is warm and one is cool. Five quick tests, side-by-side hex palettes, makeup and hair tips.",
    "date": "2026-10-27",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Bright Spring and Bright Winter are the two clearest, most vivid seasons. Both light up in saturated color and both look dull in dusty, muted shades. Because they share that sparkle, people often bounce between them. What separates them is temperature: Bright Spring leans warm, Bright Winter leans cool."
      },
      {
        "type": "h2",
        "text": "What the two bright seasons share"
      },
      {
        "type": "ul",
        "items": [
          "High clarity. Clear, saturated colors suit you better than soft or greyed ones.",
          "Noticeable contrast between hair, skin and eyes, and often bright, sparkling eyes.",
          "Both look tired in beige, khaki, dusty pink and other muted shades."
        ]
      },
      {
        "type": "h2",
        "text": "The difference in one line"
      },
      {
        "type": "p",
        "text": "Bright Spring is bright and warm, like a tropical fruit bowl: coral, poppy red, bright yellow and kelly green. Bright Winter is bright and cool, like jewels on black velvet: hot pink, cobalt, emerald, black and optic white."
      },
      {
        "type": "h2",
        "text": "Five quick tests"
      },
      {
        "type": "ul",
        "items": [
          "Pinks: compare coral with fuchsia. Coral that glows points to Bright Spring; fuchsia that glows points to Bright Winter.",
          "Reds: an orange-leaning poppy red suits Bright Spring; a blue-leaning true red suits Bright Winter.",
          "Black: Bright Winter wears black easily. Bright Spring usually looks better in bright navy or charcoal.",
          "Whites: a clear warm white suits Bright Spring; pure optic white suits Bright Winter.",
          "Metals: polished yellow gold suits Bright Spring; bright silver and platinum suit Bright Winter."
        ]
      },
      {
        "type": "p",
        "text": "Do the tests in daylight with no makeup. Three or more results pointing one way is your answer."
      },
      {
        "type": "h2",
        "text": "Side-by-side palettes"
      },
      {
        "type": "p",
        "text": "Six signature shades from each season, with hex codes. Both columns are vivid. The left one carries yellow warmth; the right one carries blue coolness and true black."
      },
      {
        "type": "compare",
        "label": "Bright Spring vs Bright Winter palettes",
        "tagline": "Both vivid. One warm, one cool.",
        "sides": [
          {
            "name": "Bright Spring",
            "note": "Warm and clear",
            "colors": [
              {
                "name": "Poppy red",
                "hex": "#E63946"
              },
              {
                "name": "Vivid coral",
                "hex": "#FF6F59"
              },
              {
                "name": "Bright yellow",
                "hex": "#FFD23F"
              },
              {
                "name": "Kelly green",
                "hex": "#2BA84A"
              },
              {
                "name": "Bright aqua",
                "hex": "#00B4D8"
              },
              {
                "name": "Clear white",
                "hex": "#FFFDF7"
              }
            ]
          },
          {
            "name": "Bright Winter",
            "note": "Cool and clear",
            "colors": [
              {
                "name": "Hot pink",
                "hex": "#FF1F8E"
              },
              {
                "name": "True red",
                "hex": "#D7002E"
              },
              {
                "name": "Cobalt",
                "hex": "#0047AB"
              },
              {
                "name": "Emerald",
                "hex": "#009B77"
              },
              {
                "name": "Black",
                "hex": "#000000"
              },
              {
                "name": "Optic white",
                "hex": "#FFFFFF"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "text": "Common mistakes that cause the mix-up"
      },
      {
        "type": "ul",
        "items": [
          "Assuming dark hair means Winter. Many Bright Springs have dark brown hair with warm, bright eyes.",
          "Judging by how much you like bold colors. Both seasons can wear bold color; the question is warm or cool.",
          "Using cobalt as a test. Cobalt is in both palettes, so it cannot separate them.",
          "Testing next to a warm wall or under yellow bulbs, which hides the cool side of Bright Winter."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup and hair"
      },
      {
        "type": "p",
        "text": "Bright Spring looks best in coral, warm pink and poppy red lips with bronze, warm teal or gold eyeshadow. Bright Winter looks best in fuchsia, blue-red and berry lips with charcoal, silver, plum or cobalt liner. For hair, Bright Spring suits golden brown, warm chestnut and copper highlights, while Bright Winter suits espresso, soft black and cool dark brown."
      },
      {
        "type": "h2",
        "text": "A starter wardrobe for each season"
      },
      {
        "type": "p",
        "text": "For Bright Spring, build around bright navy, charcoal and clear white, with coral, kelly green and bright aqua as accents. For Bright Winter, build around black, charcoal and optic white, with hot pink, emerald and cobalt as accents. A cobalt piece is a safe first buy while you decide."
      },
      {
        "type": "h2",
        "text": "What if you sit between them?"
      },
      {
        "type": "p",
        "text": "If both sides look good, you may be close to neutral. Stay with the shared shades, such as cobalt, bright teal, true red with a slight warm or cool lean, and charcoal. Then let your jewelry decide the outfit."
      },
      {
        "type": "h2",
        "text": "See the full palettes"
      },
      {
        "type": "p",
        "text": "The [Bright Spring](/guides/bright-spring-color-palette) and [Bright Winter](/guides/bright-winter-color-palette) guides each have 12 hex codes, outfit combinations, makeup and hair colors. Still unsure whether you are a bright season? The [photo color analysis](/#quiz) checks your contrast and clarity, and the [six-question season quiz](/what-season-am-i) works without a photo."
      }
    ]
  },
  {
    "slug": "best-lipstick-colors-for-brown-skin",
    "category": "Makeup",
    "imageTitle": "Brown Skin Lipstick",
    "swatches": [
      "#8E3B2E",
      "#9C6644",
      "#8A2846",
      "#A3122A"
    ],
    "title": "Best Lipstick Colors for Brown Skin: Nudes, Reds & Berries",
    "description": "The best lipstick shades for brown and South Asian skin by undertone: brown nudes, brick and blue-reds, berries and plums, with 12 hex codes.",
    "date": "2026-10-27",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Lipstick is one of the quickest ways to see color analysis working on brown skin. The right shade makes your whole face look brighter and more even. The wrong one, often a pale pink or a beige nude made for fair skin, can make lips look ashy or chalky. The good news is that a few simple rules make choosing easy."
      },
      {
        "type": "h2",
        "text": "Start with your undertone"
      },
      {
        "type": "p",
        "text": "Brown skin can be warm (golden), cool (red or blue) or olive. A quick lipstick test: swatch a tomato or brick red and then a berry or blue-red on your lips in daylight. If the brick looks more natural, you lean warm. If the berry looks cleaner, you lean cool. If both look fine, you may be neutral or olive. For more checks, see the [skin undertone test](/guides/warm-vs-cool-undertones) or the [brown skin color palette](/guides/brown-skin-color-palette)."
      },
      {
        "type": "h2",
        "text": "Nude lipstick for brown skin"
      },
      {
        "type": "p",
        "text": "A nude should match your lips, not the beige in a fashion photo. For brown skin that usually means a shade one or two steps deeper than your skin, with brown, caramel or rose in it. Light beige nudes are the most common mistake: they sit on top of the lips and look grey."
      },
      {
        "type": "ul",
        "items": [
          "Warm undertones: caramel, toffee and warm brown nudes.",
          "Cool undertones: rosewood, mauve brown and pink-brown nudes.",
          "Olive undertones: soft terracotta and neutral brown nudes that are not too orange or too pink."
        ]
      },
      {
        "type": "h2",
        "text": "Red lipstick for brown skin"
      },
      {
        "type": "p",
        "text": "Red suits almost every brown skin tone; the trick is the base. Brick, orange-red and tomato red flatter warm and olive undertones. Blue-red, cherry and wine flatter cool undertones. On deeper brown skin, richer reds such as wine or deep brick look more striking than light, bright reds."
      },
      {
        "type": "h2",
        "text": "Berry, plum and wine shades"
      },
      {
        "type": "p",
        "text": "Berry, plum, wine and deep chocolate are some of the easiest bold colors for brown skin, especially in the evening. Cool undertones can go very deep; warm undertones look best when the berry has a little red or brown in it rather than blue-purple."
      },
      {
        "type": "h2",
        "text": "Brown skin lipstick color palette"
      },
      {
        "type": "p",
        "text": "Here are 12 lipstick shades that work well on brown and South Asian skin, with hex codes you can match when shopping online."
      },
      {
        "type": "palette",
        "label": "Brown skin lipstick colors with hex codes",
        "colors": [
          {
            "name": "Brick red",
            "hex": "#8E3B2E"
          },
          {
            "name": "Terracotta",
            "hex": "#B5563C"
          },
          {
            "name": "Orange-red",
            "hex": "#C8372D"
          },
          {
            "name": "Warm nude",
            "hex": "#A86B52"
          },
          {
            "name": "Caramel nude",
            "hex": "#9C6644"
          },
          {
            "name": "Rosewood",
            "hex": "#8C4A4E"
          },
          {
            "name": "Mauve brown",
            "hex": "#7E5160"
          },
          {
            "name": "Berry",
            "hex": "#8A2846"
          },
          {
            "name": "Blue-red",
            "hex": "#A3122A"
          },
          {
            "name": "Plum",
            "hex": "#5E2440"
          },
          {
            "name": "Wine",
            "hex": "#5A1A2A"
          },
          {
            "name": "Deep chocolate",
            "hex": "#4A2620"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Shades by skin depth"
      },
      {
        "type": "ul",
        "items": [
          "Light brown or wheatish skin: rosewood, soft terracotta, warm pink and brick red.",
          "Medium brown skin: caramel nude, berry, orange-red and mauve brown.",
          "Deep brown skin: deep chocolate, wine, plum, blue-red and rich brick."
        ]
      },
      {
        "type": "h2",
        "text": "Lipstick for everyday, office and weddings"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: a brown nude or rosewood with a lip balm underneath.",
          "Office: mauve brown, soft berry or terracotta, which look polished without being loud.",
          "Weddings and Eid: brick red, blue-red, berry or wine, depending on your undertone and outfit."
        ]
      },
      {
        "type": "p",
        "text": "If your outfit is very bright, keep the lip a little softer. If the outfit is plain or dark, a bold lip can be the accent."
      },
      {
        "type": "h2",
        "text": "Tips that make any shade look better"
      },
      {
        "type": "ul",
        "items": [
          "Use a lip liner close to your natural lip line color, not lighter, to avoid a ring around the lips.",
          "If your lips are darker at the edges, a liner one shade deeper blends the color evenly.",
          "Try lipstick on your lips in daylight, not on the back of your hand; your hand is often a different shade.",
          "Very matte formulas can look dry on deeper lips; a satin finish is more forgiving."
        ]
      },
      {
        "type": "h2",
        "text": "Find your exact season"
      },
      {
        "type": "p",
        "text": "Undertone gets you most of the way. For blush, eyeshadow and lipstick together, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season), or try the [free color analysis quiz](/#quiz) to find your full palette."
      }
    ]
  },
  {
    "slug": "soft-summer-makeup-palette",
    "keywords": ["soft summer makeup colour palette", "soft summer makeup color palette", "soft summer color palette makeup", "soft summer makeup colors", "soft summer colour palette makeup"],
    "category": "Makeup",
    "imageTitle": "Soft Summer Makeup",
    "swatches": [
      "#B07C83",
      "#C9A0A6",
      "#8C8193",
      "#8E5A6E"
    ],
    "title": "Soft Summer Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Soft Summer makeup color palette with 12 hex codes: dusty rose and mauve lipsticks, soft pink blush, taupe and slate eyeshadow, plus shades to avoid.",
    "date": "2026-10-29",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Soft Summer makeup works best when nothing jumps off the face. Your coloring is cool to neutral, medium in depth and muted, so the most flattering shades have a little grey in them: dusty rose instead of bubblegum pink, mauve instead of fuchsia, taupe instead of chocolate. When the shade is right, your skin looks smooth and even and your eyes look clearer. When it is too bright or too warm, the makeup arrives before you do."
      },
      {
        "type": "p",
        "text": "This guide turns the [Soft Summer color palette](/guides/soft-summer-color-palette) into a makeup colour palette you can shop with: lipstick, blush and eyeshadow shades, each with a hex code."
      },
      {
        "type": "h2",
        "text": "The rule for Soft Summer makeup"
      },
      {
        "type": "p",
        "text": "Think soft, cool and blended. A good Soft Summer shade is a mid-tone, not very light and not very dark, and it looks slightly smoky rather than clean and bright. Rosy, berry and plum families work because they are cool. Muting them is what makes them yours. Matte, satin and soft-sheen finishes usually look better than high shine or chunky glitter."
      },
      {
        "type": "h2",
        "text": "Soft Summer makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a reference when you shop online. Product photos are often brighter than the real thing, so compare the swatch, not the name on the box."
      },
      {
        "type": "palette",
        "label": "Soft Summer makeup colors with hex codes",
        "colors": [
          {
            "name": "Rosewood",
            "hex": "#9E6B6E"
          },
          {
            "name": "Dusty rose",
            "hex": "#C9A0A6"
          },
          {
            "name": "Mauve",
            "hex": "#A88AA6"
          },
          {
            "name": "Muted berry",
            "hex": "#8E5A6E"
          },
          {
            "name": "Rose-brown",
            "hex": "#A47B78"
          },
          {
            "name": "Soft plum",
            "hex": "#7A5A72"
          },
          {
            "name": "Cool pink",
            "hex": "#D4A5AE"
          },
          {
            "name": "Soft rose",
            "hex": "#B07C83"
          },
          {
            "name": "Taupe",
            "hex": "#A39486"
          },
          {
            "name": "Grey-brown",
            "hex": "#7E7067"
          },
          {
            "name": "Slate",
            "hex": "#6D7480"
          },
          {
            "name": "Smoky lavender",
            "hex": "#8C8193"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Soft Summer lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: dusty rose, rosewood and rose-brown. These are the easiest Soft Summer nudes because they match the natural color of most lips.",
          "Office: mauve and soft berry, which look polished without looking loud.",
          "Evening: muted berry, soft plum or a cool, slightly greyed red such as raspberry wine.",
          "Finish: satin or cream. A very matte formula can look flat on soft coloring, and a high-shine gloss can look too sharp."
        ]
      },
      {
        "type": "h2",
        "text": "Soft Summer blush"
      },
      {
        "type": "p",
        "text": "Choose cool pink, soft rose or a dusty mauve, applied lightly and blended toward the cheekbone. Peach and coral blush is the most common mistake: on cool, muted skin it can look orange. If your cheeks already have natural redness, a mauve blush looks calmer than a bright pink."
      },
      {
        "type": "h2",
        "text": "Soft Summer eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base and transition shades: taupe, grey-brown and soft greige.",
          "Depth: slate, smoky lavender, soft plum and muted navy.",
          "Accent: dusty teal or sage green, which bring out grey, green and hazel eyes.",
          "Liner: soft brown, grey or charcoal instead of jet black. Smudge it slightly rather than drawing a sharp line."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation, contour and highlighter"
      },
      {
        "type": "p",
        "text": "Most Soft Summers suit a neutral or neutral-cool foundation. Contour with a cool taupe rather than a warm bronzer, which can look muddy. For highlighter, pick a soft pearl or champagne-pink sheen; strong gold highlighters look out of place on muted cool skin."
      },
      {
        "type": "h2",
        "text": "Makeup colors Soft Summer should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Bright fuchsia, neon pink and hot coral lipstick, which look harsh against soft coloring.",
          "Orange-based corals, peach blush and golden bronzer.",
          "Jet black liner and very dark brown-black smoky eyes.",
          "Frosty white or icy silver eyeshadow."
        ]
      },
      {
        "type": "p",
        "text": "You do not have to throw these away. Wear a bright lipstick blotted down to a stain, or mix it with a rosy balm, and it becomes much softer."
      },
      {
        "type": "h2",
        "text": "Soft Summer makeup looks"
      },
      {
        "type": "ul",
        "items": [
          "Natural day: neutral-cool base, soft rose blush, taupe on the lids, rosewood lips.",
          "Office: grey-brown crease, brown liner, mauve lips.",
          "Evening: smoky slate and plum eyes with a soft berry lip.",
          "Weddings and events: dusty rose eyes, cool pink blush and muted berry lips."
        ]
      },
      {
        "type": "h2",
        "text": "Soft Summer vs Soft Autumn makeup"
      },
      {
        "type": "p",
        "text": "Both seasons look best in muted makeup, and both suit taupe eyeshadow. The difference is temperature. Soft Summer leans to rose, mauve and berry; [Soft Autumn makeup](/guides/soft-autumn-makeup-palette) leans to peach, terracotta and warm brown. A quick test: try a dusty rose lipstick and a soft terracotta lipstick in daylight. Whichever makes your skin look smoother is probably your side. For the full comparison, read [Soft Summer vs Soft Autumn](/guides/soft-summer-vs-soft-autumn)."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Soft Summer?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "soft-autumn-makeup-palette",
    "keywords": ["soft autumn makeup color palette", "soft autumn makeup colour palette"],
    "category": "Makeup",
    "imageTitle": "Soft Autumn Makeup",
    "swatches": [
      "#B5735A",
      "#C98B6B",
      "#8B7355",
      "#9A5B4A"
    ],
    "title": "Soft Autumn Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Soft Autumn makeup color palette with 12 hex codes: warm nude, terracotta and salmon lipsticks, peach blush, bronze and olive eyeshadow, plus what to avoid.",
    "date": "2026-10-29",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Soft Autumn makeup should look warm, gentle and blended. Your coloring is warm to neutral, medium in depth and muted, so the shades that flatter you look like they have been softened with a little brown or grey: warm nude instead of orange, terracotta instead of tomato red, bronze instead of shiny gold. The right shades make your skin look healthy and glowing; bright or icy shades tend to look like a mask."
      },
      {
        "type": "p",
        "text": "This guide turns the [Soft Autumn color palette](/guides/soft-autumn-color-palette) into a makeup colour palette with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Soft Autumn makeup"
      },
      {
        "type": "p",
        "text": "Warm, muted and medium. Peach, salmon, terracotta and warm brown are your main families. Keep the intensity low and the edges blended. Satin and soft-matte finishes suit you best; very frosty or glittery products look sharper than your natural coloring."
      },
      {
        "type": "h2",
        "text": "Soft Autumn makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a reference when you shop. Compare the swatch, not the shade name: one brand's \"nude\" can be another brand's peach."
      },
      {
        "type": "palette",
        "label": "Soft Autumn makeup colors with hex codes",
        "colors": [
          {
            "name": "Warm nude",
            "hex": "#B5836A"
          },
          {
            "name": "Soft terracotta",
            "hex": "#B5735A"
          },
          {
            "name": "Salmon",
            "hex": "#D08C78"
          },
          {
            "name": "Peachy brown",
            "hex": "#A8715C"
          },
          {
            "name": "Muted brick",
            "hex": "#9A5B4A"
          },
          {
            "name": "Rosy brown",
            "hex": "#A27A6E"
          },
          {
            "name": "Soft peach",
            "hex": "#E0A98E"
          },
          {
            "name": "Muted apricot",
            "hex": "#C98B6B"
          },
          {
            "name": "Warm taupe",
            "hex": "#9C8A78"
          },
          {
            "name": "Bronze",
            "hex": "#8B7355"
          },
          {
            "name": "Olive",
            "hex": "#7D7A55"
          },
          {
            "name": "Soft brown",
            "hex": "#6E5444"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Soft Autumn lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: warm nude, peachy brown and rosy brown. These look like your lips, only better.",
          "Office: soft terracotta and salmon, which add color without shouting.",
          "Evening: muted brick or a warm, brownish red rather than a bright tomato or blue-red.",
          "Finish: satin, cream or a sheer balm. Very matte liquid lipsticks can look dry on soft coloring."
        ]
      },
      {
        "type": "h2",
        "text": "Soft Autumn blush"
      },
      {
        "type": "p",
        "text": "Soft peach, muted apricot and warm rose are the easiest choices. Apply lightly and blend upward. Cool baby pink blush can look chalky on Soft Autumn skin, and a bright coral can look orange."
      },
      {
        "type": "h2",
        "text": "Soft Autumn eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base and transition shades: warm taupe, camel and soft beige.",
          "Depth: bronze, soft brown and olive.",
          "Accent: khaki, moss or a muted teal, which bring out hazel and green eyes.",
          "Liner: brown or olive-brown instead of black, smudged slightly."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation, bronzer and highlighter"
      },
      {
        "type": "p",
        "text": "Most Soft Autumns suit a warm or neutral-warm foundation, often golden-beige. A soft matte bronzer works better than contour with a cool grey tone. Choose a champagne or soft gold highlighter rather than icy pearl."
      },
      {
        "type": "h2",
        "text": "Makeup colors Soft Autumn should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Icy pink, frosted lilac and pale pastel lipstick.",
          "Fuchsia, blue-red and other cool, bright reds.",
          "Jet black liner and silver or white eyeshadow.",
          "Very bright orange coral, which can look harsh against muted skin."
        ]
      },
      {
        "type": "h2",
        "text": "Soft Autumn makeup looks"
      },
      {
        "type": "ul",
        "items": [
          "Natural day: warm base, soft peach blush, camel on the lids, warm nude lips.",
          "Office: bronze crease, brown liner, soft terracotta lips.",
          "Evening: olive and soft brown smoky eye with a muted brick lip.",
          "Weddings and events: bronze eyes with a little shimmer, apricot blush and salmon or rosy brown lips."
        ]
      },
      {
        "type": "h2",
        "text": "Soft Autumn vs Soft Summer makeup"
      },
      {
        "type": "p",
        "text": "Both seasons wear muted makeup well. Soft Autumn leans warm (peach, terracotta, bronze), while [Soft Summer makeup](/guides/soft-summer-makeup-palette) leans cool (dusty rose, mauve, slate). If a warm nude lipstick makes you look brighter than a dusty rose one, you are probably on the Autumn side. For the full comparison, see [Soft Summer vs Soft Autumn](/guides/soft-summer-vs-soft-autumn)."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Soft Autumn?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For lipstick, blush and eyeshadow tips for all four seasons, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "warm-skin-tone-colors",
    "category": "Undertones",
    "imageTitle": "Warm Skin Tone",
    "keywords": [
      "warm skin tone",
      "warm skin tone colors",
      "warm undertone skin",
      "colors for warm skin tone",
      "best colors for warm undertones",
      "warm skin tone outfits"
    ],
    "swatches": [
      "#C8553D",
      "#D4A017",
      "#2E8B7A",
      "#8B4A2B"
    ],
    "title": "Warm Skin Tone: Best Colors to Wear and What to Avoid",
    "description": "Have a warm skin tone? The best colors for warm undertones with 12 hex codes, colors to avoid, outfit ideas, makeup, hair and jewelry, from fair to deep skin.",
    "date": "2026-11-02",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "A warm skin tone has a golden, peachy or yellow cast under the surface. It can be very fair, medium, olive-leaning or deep brown: warmth is about the undertone, not how light or dark you are. The good news is that warm skin has a clear set of colors that make it glow, and a few that make it look tired."
      },
      {
        "type": "p",
        "text": "Not sure yet? Do the quick [skin undertone test](/guides/warm-vs-cool-undertones) first, then come back to this guide for colors."
      },
      {
        "type": "h2",
        "text": "Signs you have a warm skin tone"
      },
      {
        "type": "ul",
        "items": [
          "Your veins look green or olive in daylight rather than blue or purple.",
          "Gold jewelry looks bright and natural on you; silver can look a little grey.",
          "Cream and ivory flatter you more than pure, bright white.",
          "Your skin turns golden or bronze in the sun, often without burning much.",
          "Orange-red and brick lipstick look more natural on you than blue-red."
        ]
      },
      {
        "type": "p",
        "text": "If you tick three or more, you probably have warm undertones. If you get a mix, you may be neutral or olive; the [olive skin color palette](/guides/olive-skin-color-palette) covers that case."
      },
      {
        "type": "h2",
        "text": "Best colors for a warm skin tone"
      },
      {
        "type": "p",
        "text": "Warm skin looks best in colors that have yellow in them. Think of spice, sun and earth: rust, mustard, coral, olive, camel and warm teal. These colors repeat the gold in your skin, so your face looks even and healthy instead of grey."
      },
      {
        "type": "palette",
        "label": "Best colors for warm skin tones with hex codes",
        "colors": [
          {
            "name": "Coral",
            "hex": "#F27E63"
          },
          {
            "name": "Tomato red",
            "hex": "#D2452E"
          },
          {
            "name": "Rust",
            "hex": "#B5532A"
          },
          {
            "name": "Terracotta",
            "hex": "#C8553D"
          },
          {
            "name": "Mustard",
            "hex": "#D4A017"
          },
          {
            "name": "Golden yellow",
            "hex": "#F2B632"
          },
          {
            "name": "Olive",
            "hex": "#6B7A2E"
          },
          {
            "name": "Warm teal",
            "hex": "#2E8B7A"
          },
          {
            "name": "Turquoise",
            "hex": "#2BB3A3"
          },
          {
            "name": "Camel",
            "hex": "#C19A6B"
          },
          {
            "name": "Chocolate brown",
            "hex": "#5C3A21"
          },
          {
            "name": "Cream",
            "hex": "#F3E5C8"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Colors a warm skin tone should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Icy pastels such as baby pink, lilac and powder blue, which can make warm skin look sallow.",
          "Blue-based pinks and purples like fuchsia and magenta right next to your face.",
          "Cool grey, silver-grey and stark black, which drain the warmth from your skin.",
          "Pure optic white; cream, ivory or warm white is softer and more flattering."
        ]
      },
      {
        "type": "p",
        "text": "You can still wear these colors. Keep them away from your face, as trousers, shoes or a bag, and wear a warm color on top."
      },
      {
        "type": "h2",
        "text": "Warm skin tone by depth"
      },
      {
        "type": "ul",
        "items": [
          "Fair or light warm skin: peach, light coral, warm aqua and buttercup yellow. This usually points to [Light Spring](/guides/light-spring-color-palette) or [Warm Spring](/guides/warm-spring-color-palette).",
          "Medium warm skin: coral, turquoise, mustard, olive and camel. Often [Warm Spring](/guides/warm-spring-color-palette) or [Warm Autumn](/guides/warm-autumn-color-palette).",
          "Muted, soft warm skin: camel, salmon, sage and soft teal, which suit [Soft Autumn](/guides/soft-autumn-color-palette).",
          "Deep warm or brown skin: rust, burgundy, forest green, deep teal and chocolate, which suit [Deep Autumn](/guides/deep-autumn-color-palette). See also the [brown skin color palette](/guides/brown-skin-color-palette)."
        ]
      },
      {
        "type": "h2",
        "text": "Outfit ideas for a warm skin tone"
      },
      {
        "type": "ul",
        "items": [
          "Camel with warm teal: easy, polished and good for work.",
          "Cream with rust: soft contrast that suits almost every warm skin depth.",
          "Olive with mustard: a relaxed earthy look for weekends.",
          "Chocolate brown with coral: a warm alternative to black and pink."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup, hair and jewelry for warm skin"
      },
      {
        "type": "ul",
        "items": [
          "Foundation: yellow, golden or peach-based shades; avoid pink-based foundation.",
          "Lipstick: coral, brick, terracotta, warm nude and orange-red. See [makeup colors for your color season](/guides/makeup-colors-for-your-color-season).",
          "Blush: peach, apricot and warm bronze.",
          "Hair: golden brown, copper, caramel, honey and auburn. Very ashy blonde or blue-black can look flat. See the [best hair colors for each season](/guides/best-hair-colors-for-each-season).",
          "Jewelry: yellow gold, rose gold, brass and copper. The [gold or silver jewelry test](/guides/gold-vs-silver-jewelry-undertone) helps if you are unsure."
        ]
      },
      {
        "type": "h2",
        "text": "Warm skin tone: quick answers"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What colors look best on a warm skin tone?",
            "a": "Colors with yellow in them: coral, rust, mustard, olive, camel, warm teal and turquoise, with cream instead of white and chocolate brown instead of black."
          },
          {
            "q": "Can a warm skin tone wear black?",
            "a": "Yes, but black is not the most flattering color near a warm face. Chocolate brown, deep olive or warm navy give a similar effect. If you love black, add a cream or rust layer, or gold jewelry, near your face."
          },
          {
            "q": "Is a warm skin tone the same as a dark skin tone?",
            "a": "No. Warm and cool describe the undertone; light and dark describe depth. Very fair skin can be warm and very deep skin can be cool."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Find your exact palette"
      },
      {
        "type": "p",
        "text": "Warm undertones point you to Spring or Autumn, but depth and softness decide which of the six warm seasons fits best. Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i) to see your full palette."
      }
    ]
  },
  {
    "slug": "cool-summer-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Cool Summer Makeup",
    "keywords": [
      "cool summer makeup palette",
      "cool summer makeup color palette",
      "cool summer color palette makeup",
      "cool summer palette makeup",
      "true summer makeup",
      "cool summer lipstick"
    ],
    "swatches": [
      "#C25B7A",
      "#E8A0B4",
      "#8A7FA8",
      "#7D8FA3"
    ],
    "title": "Cool Summer Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Cool Summer (True Summer) makeup palette with 12 hex codes: rose and raspberry lipstick, cool pink blush, grey and plum eyeshadow, plus shades to avoid.",
    "date": "2026-11-02",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Cool Summer, also called True Summer, is the coolest of the Summer seasons. Your makeup should look fresh, rosy and blue-based, with medium intensity: brighter than Soft Summer, softer than Winter. When the shade is right, your skin looks clear and your eyes look brighter. Warm, orange or golden makeup tends to sit on top of Cool Summer skin and look out of place."
      },
      {
        "type": "p",
        "text": "This guide turns the [Cool Summer color palette](/guides/cool-summer-color-palette) into makeup shades with hex codes you can match when shopping."
      },
      {
        "type": "h2",
        "text": "The rule for Cool Summer makeup"
      },
      {
        "type": "p",
        "text": "Pick shades with a clear pink, blue or grey base and avoid anything golden. Medium depth works best: very pale pastels can wash you out, and very deep or neon shades can overpower you. Satin and soft-shimmer finishes usually look better than heavy matte or strong gold glitter."
      },
      {
        "type": "h2",
        "text": "Cool Summer makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight; indoor bulbs make everything look warmer."
      },
      {
        "type": "palette",
        "label": "Cool Summer makeup colors with hex codes",
        "colors": [
          {
            "name": "Rose pink",
            "hex": "#D47A95"
          },
          {
            "name": "Raspberry",
            "hex": "#B3446C"
          },
          {
            "name": "Watermelon",
            "hex": "#E06A86"
          },
          {
            "name": "Cool berry",
            "hex": "#8E3B5E"
          },
          {
            "name": "Mauve pink",
            "hex": "#C08497"
          },
          {
            "name": "Rosy nude",
            "hex": "#C9939A"
          },
          {
            "name": "Cool pink",
            "hex": "#E8A0B4"
          },
          {
            "name": "Soft plum",
            "hex": "#7D4F6E"
          },
          {
            "name": "Lavender",
            "hex": "#A99BC9"
          },
          {
            "name": "Cool taupe",
            "hex": "#9A8E8C"
          },
          {
            "name": "Blue-grey",
            "hex": "#7D8FA3"
          },
          {
            "name": "Soft navy",
            "hex": "#3E4E6E"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Cool Summer lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: rosy nude, rose pink and mauve pink, which look like a healthier version of your natural lip.",
          "Office: watermelon or a soft raspberry for color that still looks professional.",
          "Evening: raspberry, cool berry or a blue-based red with a slightly soft edge.",
          "Skip: coral, orange-red, brown nudes and golden glosses."
        ]
      },
      {
        "type": "h2",
        "text": "Cool Summer blush"
      },
      {
        "type": "p",
        "text": "Cool pink and soft rose are the safest blushes for Cool Summer. A sheer berry blush works for evening. Peach, apricot and bronze blush usually look orange on cool skin, so leave those for the warm seasons."
      },
      {
        "type": "h2",
        "text": "Cool Summer eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base and crease: cool taupe, soft grey and greige.",
          "Depth: soft plum, slate and blue-grey.",
          "Accent: lavender, periwinkle or a soft cool teal, which bring out blue and grey eyes.",
          "Liner: charcoal, soft navy or grey-brown rather than warm brown or jet black."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation, contour and highlighter"
      },
      {
        "type": "p",
        "text": "Choose a pink-neutral or neutral foundation. Contour with a cool taupe shade instead of a warm bronzer. A pearl or pink-champagne highlighter suits Cool Summer far better than strong gold."
      },
      {
        "type": "h2",
        "text": "Makeup Cool Summer should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Orange coral, tomato red and brick lipstick.",
          "Golden bronzer and peach or apricot blush.",
          "Warm copper, gold and khaki eyeshadow.",
          "Neon pink and very dark, almost-black lipstick."
        ]
      },
      {
        "type": "h2",
        "text": "Cool Summer vs Soft Summer makeup"
      },
      {
        "type": "p",
        "text": "Both seasons are cool, but Cool Summer can wear clearer pinks and raspberry, while [Soft Summer makeup](/guides/soft-summer-makeup-palette) looks best in dustier mauve and rose-brown. If a clean rose pink makes you look brighter than a dusty mauve, you are likely Cool Summer."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Cool Summer?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for all four seasons, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "warm-autumn-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Warm Autumn Makeup",
    "keywords": [
      "warm autumn makeup palette",
      "warm autumn makeup color palette",
      "warm autumn color palette makeup",
      "true autumn makeup",
      "warm autumn lipstick"
    ],
    "swatches": [
      "#A8452E",
      "#C2602F",
      "#8B6B2E",
      "#6B4A2E"
    ],
    "title": "Warm Autumn Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Warm Autumn (True Autumn) makeup palette with 12 hex codes: brick, terracotta and rust lipstick, peach and bronze blush, copper and olive eyeshadow.",
    "date": "2026-11-02",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "Warm Autumn, also called True Autumn, is the warmest Autumn season. Your best makeup is rich, golden and earthy: brick instead of cherry, bronze instead of silver, copper instead of plum. Warm Autumn coloring can carry fairly strong color, as long as it is warm. Cool pinks and icy shimmers are what tend to look wrong."
      },
      {
        "type": "p",
        "text": "Here is the [Warm Autumn color palette](/guides/warm-autumn-color-palette) translated into makeup, with hex codes for each shade."
      },
      {
        "type": "h2",
        "text": "The rule for Warm Autumn makeup"
      },
      {
        "type": "p",
        "text": "Look for a golden, orange or brown base in every product. Medium to rich depth suits you better than pale shades. Matte, satin and warm metallic finishes like bronze and copper are all flattering; frosty silver and icy pearl are not."
      },
      {
        "type": "h2",
        "text": "Warm Autumn makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a reference when shopping online or matching products in store."
      },
      {
        "type": "palette",
        "label": "Warm Autumn makeup colors with hex codes",
        "colors": [
          {
            "name": "Brick red",
            "hex": "#A8452E"
          },
          {
            "name": "Terracotta",
            "hex": "#C2602F"
          },
          {
            "name": "Rust",
            "hex": "#B5532A"
          },
          {
            "name": "Burnt orange",
            "hex": "#CC5A1E"
          },
          {
            "name": "Warm nude",
            "hex": "#B07A5A"
          },
          {
            "name": "Warm brown",
            "hex": "#8A5236"
          },
          {
            "name": "Peach",
            "hex": "#E39B76"
          },
          {
            "name": "Warm bronze",
            "hex": "#A9733F"
          },
          {
            "name": "Copper",
            "hex": "#B66A3C"
          },
          {
            "name": "Olive",
            "hex": "#6B6B2E"
          },
          {
            "name": "Moss green",
            "hex": "#6E7B3A"
          },
          {
            "name": "Chocolate",
            "hex": "#5C3A21"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Warm Autumn lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: warm nude, warm brown and soft terracotta.",
          "Office: terracotta or rust, which add color without looking loud.",
          "Evening: brick red, burnt orange or a deep warm red.",
          "Skip: fuchsia, cool pink, blue-red and lilac nudes."
        ]
      },
      {
        "type": "h2",
        "text": "Warm Autumn blush and bronzer"
      },
      {
        "type": "p",
        "text": "Peach, warm apricot and soft terracotta blush look natural on Warm Autumn. A matte or softly shimmering bronzer is one of your best products. Cool baby pink blush can look chalky."
      },
      {
        "type": "h2",
        "text": "Warm Autumn eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base and crease: camel, warm taupe and soft bronze.",
          "Depth: copper, chocolate and warm brown.",
          "Accent: olive, moss green or a deep warm teal, which make green, hazel and brown eyes stand out.",
          "Liner: brown, bronze or olive instead of black."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "Choose a golden or yellow-based foundation. A gold or bronze highlighter looks natural; skip icy pearl and silver."
      },
      {
        "type": "h2",
        "text": "Makeup Warm Autumn should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Fuchsia, magenta and blue-red lipstick.",
          "Cool pink or lilac blush.",
          "Silver, icy blue and grey eyeshadow.",
          "Jet black liner and very pale, frosty nudes."
        ]
      },
      {
        "type": "h2",
        "text": "Warm Autumn vs Soft Autumn makeup"
      },
      {
        "type": "p",
        "text": "Both seasons wear warm makeup, but Warm Autumn can carry richer, clearer brick and copper, while [Soft Autumn makeup](/guides/soft-autumn-makeup-palette) looks best in muted salmon, warm nude and soft terracotta. If rust and copper make you look more alive than salmon, you lean Warm Autumn."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Warm Autumn?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For lipstick, blush and eyeshadow ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "light-spring-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Light Spring Makeup",
    "keywords": [
      "light spring makeup palette",
      "light spring makeup color palette",
      "light spring color palette makeup",
      "light spring lipstick",
      "light spring blush"
    ],
    "swatches": [
      "#F4A08A",
      "#F7B7A3",
      "#E98A7A",
      "#C9A27E"
    ],
    "title": "Light Spring Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Light Spring makeup palette with 12 hex codes: peach, coral and warm pink lipstick, peach blush, champagne and soft brown eyeshadow, plus shades to avoid.",
    "date": "2026-11-02",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Light Spring makeup should look light, warm and fresh, like a little sunshine on the skin. Your coloring is light with a warm-leaning undertone and gentle contrast, so heavy, dark or very cool makeup can look like it is wearing you. Sheer peach, coral and warm pink are where Light Spring shines."
      },
      {
        "type": "p",
        "text": "This guide turns the [Light Spring color palette](/guides/light-spring-color-palette) into makeup colors with hex codes."
      },
      {
        "type": "h2",
        "text": "The rule for Light Spring makeup"
      },
      {
        "type": "p",
        "text": "Keep it light and warm. Choose sheer or satin formulas over heavy matte, and soft champagne shimmer over dark smoky shades. Every product should have a hint of peach, coral or gold rather than blue or grey."
      },
      {
        "type": "h2",
        "text": "Light Spring makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "These 12 shades are a good starting point. Light Spring shades often look stronger in the tube than on the lips, so swatch them if you can."
      },
      {
        "type": "palette",
        "label": "Light Spring makeup colors with hex codes",
        "colors": [
          {
            "name": "Peach",
            "hex": "#F4A08A"
          },
          {
            "name": "Light coral",
            "hex": "#F08A78"
          },
          {
            "name": "Warm pink",
            "hex": "#EE8C98"
          },
          {
            "name": "Light salmon",
            "hex": "#F7B7A3"
          },
          {
            "name": "Clear warm nude",
            "hex": "#D9A08A"
          },
          {
            "name": "Apricot",
            "hex": "#F3B27E"
          },
          {
            "name": "Coral pink",
            "hex": "#E98A7A"
          },
          {
            "name": "Champagne",
            "hex": "#EED9B8"
          },
          {
            "name": "Light camel",
            "hex": "#C9A27E"
          },
          {
            "name": "Soft golden brown",
            "hex": "#A57A52"
          },
          {
            "name": "Light aqua",
            "hex": "#8FD3C9"
          },
          {
            "name": "Periwinkle",
            "hex": "#9AA6E0"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Light Spring lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: peach, light salmon and a clear warm nude.",
          "Office: warm pink or coral pink.",
          "Evening: light coral or a clear, warm watermelon shade.",
          "Skip: deep berry, brown and plum lipsticks, which look heavy on light coloring."
        ]
      },
      {
        "type": "h2",
        "text": "Light Spring blush"
      },
      {
        "type": "p",
        "text": "Peach and apricot blush are the easiest. A sheer warm pink also works. Keep blush light and blended; deep rose or bronze blush can look muddy."
      },
      {
        "type": "h2",
        "text": "Light Spring eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: champagne and soft peach.",
          "Crease: light camel and soft golden brown.",
          "Accent: light aqua or periwinkle as a liner or inner-corner pop.",
          "Liner: soft brown or golden brown instead of black."
        ]
      },
      {
        "type": "h2",
        "text": "Makeup Light Spring should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Black liner and dark smoky eyes.",
          "Deep berry, wine and brown lipstick.",
          "Ashy taupe and grey eyeshadow, which can look dull.",
          "Heavy bronzer or contour."
        ]
      },
      {
        "type": "h2",
        "text": "Light Spring vs Light Summer makeup"
      },
      {
        "type": "p",
        "text": "Both are light, but Light Spring leans warm (peach, coral) while Light Summer leans cool (soft rose, lavender). If a peach lipstick looks fresher than a cool pink, you are likely Light Spring. For the full comparison, read [Light Spring vs Light Summer](/guides/light-spring-vs-light-summer)."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Light Spring?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "warm-spring-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Warm Spring Makeup",
    "keywords": [
      "warm spring makeup palette",
      "warm spring makeup",
      "warm spring makeup colors",
      "true spring makeup",
      "warm spring lipstick"
    ],
    "swatches": [
      "#F2795B",
      "#F58A3C",
      "#E0A35A",
      "#A8743A"
    ],
    "title": "Warm Spring Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Warm Spring (True Spring) makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Warm Spring, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Warm Spring, also called True Spring, is the warmest and most golden of the Spring seasons. Your makeup should look sunny and fresh: coral instead of pink, golden bronze instead of grey, peach instead of rose. Warm Spring coloring is clear rather than muted, so slightly brighter warm shades suit you better than dusty ones."
      },
      {
        "type": "p",
        "text": "This guide turns the [Warm Spring color palette](/guides/warm-spring-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Warm Spring makeup"
      },
      {
        "type": "p",
        "text": "Every product should lean golden, peachy or coral. Keep it fresh and clear rather than smoky or muddy. Satin finishes and warm gold shimmer flatter you; icy silver and cool pink shimmer tend to look grey on golden skin."
      },
      {
        "type": "h2",
        "text": "Warm Spring makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Warm Spring makeup colors with hex codes",
        "colors": [
          {
            "name": "Coral",
            "hex": "#F2795B"
          },
          {
            "name": "Warm orange-red",
            "hex": "#E5533D"
          },
          {
            "name": "Peach",
            "hex": "#F4A27C"
          },
          {
            "name": "Warm pink",
            "hex": "#EF7F7A"
          },
          {
            "name": "Golden nude",
            "hex": "#C98A62"
          },
          {
            "name": "Apricot",
            "hex": "#F3A25E"
          },
          {
            "name": "Warm coral blush",
            "hex": "#F08C6E"
          },
          {
            "name": "Gold",
            "hex": "#D4A84B"
          },
          {
            "name": "Bronze",
            "hex": "#A8743A"
          },
          {
            "name": "Copper",
            "hex": "#B8682F"
          },
          {
            "name": "Warm brown",
            "hex": "#7A5232"
          },
          {
            "name": "Olive",
            "hex": "#7E8A35"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Warm Spring lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: golden nude, peach or a sheer coral.",
          "Office: warm pink or a soft coral.",
          "Evening: warm orange-red or bright coral.",
          "Skip: fuchsia, blue-red, plum and brown-grey nudes."
        ]
      },
      {
        "type": "h2",
        "text": "Warm Spring blush"
      },
      {
        "type": "p",
        "text": "Peach, warm coral and apricot are your easiest blushes. A soft bronzer warms the face nicely too. Cool baby pink or mauve blush can look flat on golden Warm Spring skin."
      },
      {
        "type": "h2",
        "text": "Warm Spring eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: soft peach or champagne-gold.",
          "Crease: warm brown and bronze.",
          "Accent: copper, olive or turquoise for a pop that suits blue, green and golden-brown eyes.",
          "Liner: warm brown or bronze instead of black."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "Choose a golden or warm-yellow foundation and avoid pink-based shades. A gold or peach highlighter suits you far better than icy pearl."
      },
      {
        "type": "h2",
        "text": "Makeup Warm Spring should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Fuchsia, magenta and blue-red lipstick.",
          "Cool pink, lilac or mauve blush.",
          "Grey, silver and icy blue eyeshadow.",
          "Heavy black liner and very deep plum shades."
        ]
      },
      {
        "type": "h2",
        "text": "Warm Spring makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both are warm, but Warm Spring is fresher and clearer, while [Warm Autumn makeup](/guides/warm-autumn-makeup-palette) is richer and more earthy (brick, rust, olive). If a clear coral lipstick looks better on you than a brick red, you lean Warm Spring."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Warm Spring?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "bright-spring-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Bright Spring Makeup",
    "keywords": [
      "bright spring makeup palette",
      "bright spring makeup",
      "clear spring makeup",
      "bright spring lipstick",
      "bright spring makeup colors"
    ],
    "swatches": [
      "#E63946",
      "#FF6F59",
      "#FF5C8A",
      "#00A896"
    ],
    "title": "Bright Spring Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Bright Spring (Clear Spring) makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Bright Spring, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Bright Spring, also called Clear Spring, has the clearest and most vivid coloring of the Spring seasons. Your eyes are usually bright and your contrast is noticeable, so your makeup can be bolder than other Springs: poppy red, vivid coral and a defined liner all suit you. What does not suit you is dusty, muddy makeup."
      },
      {
        "type": "p",
        "text": "This guide turns the [Bright Spring color palette](/guides/bright-spring-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Bright Spring makeup"
      },
      {
        "type": "p",
        "text": "Choose clear, saturated shades with a warm-leaning base. Defined is better than smoky. Glossy and satin finishes flatter Bright Spring, and a touch of bright color on the eyes or lips is usually better than an all-neutral face."
      },
      {
        "type": "h2",
        "text": "Bright Spring makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Bright Spring makeup colors with hex codes",
        "colors": [
          {
            "name": "Poppy red",
            "hex": "#E63946"
          },
          {
            "name": "Coral red",
            "hex": "#F0533F"
          },
          {
            "name": "Vivid coral",
            "hex": "#FF6F59"
          },
          {
            "name": "Hot coral pink",
            "hex": "#FF5C8A"
          },
          {
            "name": "Watermelon",
            "hex": "#F45B69"
          },
          {
            "name": "Bright peach",
            "hex": "#FF9A76"
          },
          {
            "name": "Warm pink blush",
            "hex": "#F27C8C"
          },
          {
            "name": "Bronze shimmer",
            "hex": "#B07A3C"
          },
          {
            "name": "Gold",
            "hex": "#D9A63A"
          },
          {
            "name": "Bright teal",
            "hex": "#00A896"
          },
          {
            "name": "Kelly green",
            "hex": "#2BA84A"
          },
          {
            "name": "Bright navy",
            "hex": "#1B3A6B"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Bright Spring lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: clear watermelon or a bright peach-pink.",
          "Office: coral or a warm bright pink.",
          "Evening: poppy red or coral red, Bright Spring's signature shades.",
          "Skip: brown nudes, mauve, dusty rose and very dark plum."
        ]
      },
      {
        "type": "h2",
        "text": "Bright Spring blush"
      },
      {
        "type": "p",
        "text": "Bright peach, warm pink or coral blush gives Bright Spring a fresh look. Avoid brownish or dusty blush, which can make clear skin look dull."
      },
      {
        "type": "h2",
        "text": "Bright Spring eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: champagne or light gold shimmer.",
          "Crease: soft bronze or warm brown.",
          "Accent: bright teal, kelly green or cobalt as a liner or lower-lash color.",
          "Liner: brown-black or bright navy, kept crisp."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "A neutral-warm or peach foundation usually matches Bright Spring skin. Use a clear gold or peach highlighter, and keep bronzer light so your skin still looks clear."
      },
      {
        "type": "h2",
        "text": "Makeup Bright Spring should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Dusty rose, mauve and brown-grey nudes.",
          "Muted, ashy eyeshadow palettes.",
          "Heavy matte bronzer and muddy contour.",
          "Very pale, chalky nudes that remove your natural contrast."
        ]
      },
      {
        "type": "h2",
        "text": "Bright Spring makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both seasons wear bright makeup, but Bright Spring leans warm (coral, poppy red), while [Bright Winter](/guides/bright-winter-color-palette) leans cool (hot pink, cherry, fuchsia). If coral looks fresher on you than fuchsia, you are probably Bright Spring. See [Bright Spring vs Bright Winter](/guides/bright-spring-vs-bright-winter)."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Bright Spring?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "light-summer-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Light Summer Makeup",
    "keywords": [
      "light summer makeup palette",
      "light summer makeup",
      "light summer makeup colors",
      "light summer lipstick",
      "light summer blush"
    ],
    "swatches": [
      "#F1C0CB",
      "#E89AB3",
      "#CDB4DB",
      "#BDB2AA"
    ],
    "title": "Light Summer Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Light Summer makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Light Summer, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Light Summer has light, cool and gentle coloring, so your makeup should look soft and airy: rosy pink, light berry, lavender and soft grey. Heavy, dark or orange-based makeup tends to overpower Light Summer and can make your skin look tired."
      },
      {
        "type": "p",
        "text": "This guide turns the [Light Summer color palette](/guides/light-summer-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Light Summer makeup"
      },
      {
        "type": "p",
        "text": "Light, cool and sheer. Pick shades with a pink, blue or grey base, keep the depth light to medium, and blend well. Satin and soft pearl finishes suit Light Summer better than heavy matte or gold glitter."
      },
      {
        "type": "h2",
        "text": "Light Summer makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Light Summer makeup colors with hex codes",
        "colors": [
          {
            "name": "Soft rose",
            "hex": "#E8A3B0"
          },
          {
            "name": "Rosy nude",
            "hex": "#D4A0A4"
          },
          {
            "name": "Cool pink",
            "hex": "#EBA2B6"
          },
          {
            "name": "Light berry",
            "hex": "#C96F8E"
          },
          {
            "name": "Light raspberry",
            "hex": "#E89AB3"
          },
          {
            "name": "Soft mauve-pink",
            "hex": "#C99AAE"
          },
          {
            "name": "Pink blush",
            "hex": "#F1B8C4"
          },
          {
            "name": "Lavender",
            "hex": "#CDB4DB"
          },
          {
            "name": "Light plum",
            "hex": "#A887A6"
          },
          {
            "name": "Soft grey",
            "hex": "#B7B6BE"
          },
          {
            "name": "Cool taupe",
            "hex": "#BDB2AA"
          },
          {
            "name": "Grey-brown",
            "hex": "#8E8480"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Light Summer lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: rosy nude or a sheer soft rose.",
          "Office: cool pink or soft mauve-pink.",
          "Evening: light berry or light raspberry.",
          "Skip: orange, coral, brick and brown lipsticks."
        ]
      },
      {
        "type": "h2",
        "text": "Light Summer blush"
      },
      {
        "type": "p",
        "text": "Soft pink, rose or a light mauve-pink blush suits Light Summer best. Apply lightly. Peach and bronze blush usually look orange on cool, light skin."
      },
      {
        "type": "h2",
        "text": "Light Summer eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: soft pink-champagne or pearl.",
          "Crease: cool taupe and soft grey.",
          "Accent: lavender, light plum or a silvery shimmer.",
          "Liner: grey-brown or soft grey instead of black."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "A pink, rosy or neutral-cool foundation matches most Light Summers. Skip strong bronzer; a light cool contour and a pearl highlighter look more natural."
      },
      {
        "type": "h2",
        "text": "Makeup Light Summer should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Black liner and dark smoky eyes.",
          "Orange, coral and brick lipstick.",
          "Gold glitter and warm copper shadows.",
          "Very deep wine or plum lipstick."
        ]
      },
      {
        "type": "h2",
        "text": "Light Summer makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both seasons are light, but Light Summer leans cool (rose, lavender), while [Light Spring makeup](/guides/light-spring-makeup-palette) leans warm (peach, coral). If a cool pink lipstick looks fresher on you than peach, you are probably Light Summer."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Light Summer?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "deep-autumn-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Deep Autumn Makeup",
    "keywords": [
      "deep autumn makeup palette",
      "dark autumn makeup",
      "deep autumn makeup",
      "deep autumn lipstick",
      "dark autumn makeup palette"
    ],
    "swatches": [
      "#7B1E2B",
      "#9C3D2E",
      "#B8541B",
      "#5C3A21"
    ],
    "title": "Deep Autumn Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Deep Autumn (Dark Autumn) makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Deep Autumn, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Deep Autumn, also called Dark Autumn, has rich, deep and warm coloring with medium to high contrast. You can wear the deepest, richest makeup of the Autumn seasons: burgundy, brick red, bronze and chocolate liner all look natural on you. Pale, frosty or icy makeup usually looks washed out."
      },
      {
        "type": "p",
        "text": "This guide turns the [Deep Autumn color palette](/guides/deep-autumn-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Deep Autumn makeup"
      },
      {
        "type": "p",
        "text": "Rich, deep and warm. Choose shades with a warm or brown base and enough depth to match your coloring. Matte and satin finishes look elegant; warm metallics like bronze and copper add glow. Frosty pastels and silver are the main things to avoid."
      },
      {
        "type": "h2",
        "text": "Deep Autumn makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Deep Autumn makeup colors with hex codes",
        "colors": [
          {
            "name": "Brick red",
            "hex": "#9C3D2E"
          },
          {
            "name": "Burgundy",
            "hex": "#7B1E2B"
          },
          {
            "name": "Deep berry-brown",
            "hex": "#6A2E35"
          },
          {
            "name": "Terracotta",
            "hex": "#B5563C"
          },
          {
            "name": "Rich warm nude",
            "hex": "#8F5A43"
          },
          {
            "name": "Tomato red",
            "hex": "#C1372B"
          },
          {
            "name": "Deep peach blush",
            "hex": "#C9785A"
          },
          {
            "name": "Warm berry blush",
            "hex": "#9E4A4F"
          },
          {
            "name": "Bronze",
            "hex": "#9C6B3A"
          },
          {
            "name": "Copper",
            "hex": "#A85A2E"
          },
          {
            "name": "Deep olive",
            "hex": "#4F5A27"
          },
          {
            "name": "Chocolate",
            "hex": "#5C3A21"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Deep Autumn lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: rich warm nude or terracotta.",
          "Office: brick red or a deep berry-brown.",
          "Evening: burgundy, deep tomato red or a wine-brown.",
          "Skip: pale pink, lilac, frosty nudes and bright fuchsia."
        ]
      },
      {
        "type": "h2",
        "text": "Deep Autumn blush"
      },
      {
        "type": "p",
        "text": "Deep peach, terracotta, warm berry or a bronze blush suits Deep Autumn. Light baby pink blush tends to disappear or look chalky on deep, warm skin."
      },
      {
        "type": "h2",
        "text": "Deep Autumn eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: warm beige or soft bronze.",
          "Crease: copper and chocolate brown.",
          "Accent: deep olive, forest green or aubergine.",
          "Liner: dark brown or black-brown; a soft black also works for evening."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "Choose a warm or neutral-warm golden foundation that matches your depth. Bronzer and a gold or bronze highlighter suit you; skip icy pearl."
      },
      {
        "type": "h2",
        "text": "Makeup Deep Autumn should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Pale pastel and frosty pink lipstick.",
          "Icy silver and pale blue eyeshadow.",
          "Cool baby pink blush.",
          "Very light nude lipstick that makes lips look ashy."
        ]
      },
      {
        "type": "h2",
        "text": "Deep Autumn makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both are deep, but Deep Autumn leans warm (brick, bronze, olive), while [Deep Winter](/guides/deep-winter-color-palette) leans cool (wine, true red, plum). If brick red looks better on you than a blue-red, you are probably Deep Autumn. See [Dark Autumn vs Dark Winter](/guides/dark-autumn-vs-dark-winter)."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Deep Autumn?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "deep-winter-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Deep Winter Makeup",
    "keywords": [
      "deep winter makeup palette",
      "dark winter makeup",
      "deep winter makeup",
      "deep winter lipstick",
      "dark winter makeup palette"
    ],
    "swatches": [
      "#6D0F2A",
      "#C8102E",
      "#4B2C82",
      "#141414"
    ],
    "title": "Deep Winter Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Deep Winter (Dark Winter) makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Deep Winter, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Deep Winter, also called Dark Winter, has deep, cool and high-contrast coloring. Your makeup can be dramatic: wine, true red, plum and a crisp black liner all look natural on you. Soft, warm or pale makeup tends to look faded against Deep Winter coloring."
      },
      {
        "type": "p",
        "text": "This guide turns the [Deep Winter color palette](/guides/deep-winter-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Deep Winter makeup"
      },
      {
        "type": "p",
        "text": "Deep, cool and defined. Choose shades with a blue or neutral base and real depth. Matte, satin and cool metallic finishes look striking. Warm oranges, peachy nudes and golden shimmer are the shades to skip."
      },
      {
        "type": "h2",
        "text": "Deep Winter makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Deep Winter makeup colors with hex codes",
        "colors": [
          {
            "name": "Wine",
            "hex": "#5E1224"
          },
          {
            "name": "Deep berry",
            "hex": "#7A1F45"
          },
          {
            "name": "True red",
            "hex": "#C8102E"
          },
          {
            "name": "Plum",
            "hex": "#5B2A4E"
          },
          {
            "name": "Cool deep pink",
            "hex": "#B0285E"
          },
          {
            "name": "Rosy brown nude",
            "hex": "#8A5A5E"
          },
          {
            "name": "Berry blush",
            "hex": "#9B3A5E"
          },
          {
            "name": "Deep rose blush",
            "hex": "#A8475F"
          },
          {
            "name": "Charcoal",
            "hex": "#333438"
          },
          {
            "name": "Deep plum shadow",
            "hex": "#4A2A48"
          },
          {
            "name": "Navy",
            "hex": "#14213D"
          },
          {
            "name": "Emerald",
            "hex": "#00704A"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Deep Winter lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: rosy brown nude or a sheer berry.",
          "Office: deep berry or cool deep pink.",
          "Evening: true red, wine or plum, Deep Winter's strongest shades.",
          "Skip: coral, orange-red, peach nudes and pale beige."
        ]
      },
      {
        "type": "h2",
        "text": "Deep Winter blush"
      },
      {
        "type": "p",
        "text": "Berry, cool plum or deep rose blush flatters Deep Winter. Use a light hand. Peach and warm bronze blush can look muddy on cool deep skin."
      },
      {
        "type": "h2",
        "text": "Deep Winter eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: soft taupe or cool beige.",
          "Crease: charcoal or deep plum.",
          "Accent: emerald, navy or deep teal.",
          "Liner: black, worn crisp or slightly smudged."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "A neutral or cool foundation that matches your depth works best. Contour with a cool brown rather than an orange bronzer, and choose a silver-pearl or champagne-pink highlighter."
      },
      {
        "type": "h2",
        "text": "Makeup Deep Winter should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Coral, peach and orange lipstick.",
          "Golden bronzer and warm peach blush.",
          "Warm copper and gold eyeshadow.",
          "Pale, beige nudes that wash out your contrast."
        ]
      },
      {
        "type": "h2",
        "text": "Deep Winter makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both are deep, but Deep Winter leans cool (wine, true red, plum), while [Deep Autumn makeup](/guides/deep-autumn-makeup-palette) leans warm (brick, bronze, olive). If a blue-red lipstick looks cleaner on you than brick, you are probably Deep Winter."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Deep Winter?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "cool-winter-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Cool Winter Makeup",
    "keywords": [
      "cool winter makeup palette",
      "true winter makeup",
      "cool winter makeup",
      "cool winter lipstick",
      "cool winter makeup colors"
    ],
    "swatches": [
      "#C8102E",
      "#D6177E",
      "#2541B2",
      "#111111"
    ],
    "title": "Cool Winter Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Cool Winter (True Winter) makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Cool Winter, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Cool Winter, also called True Winter, is the coolest Winter season, with high contrast and clear, blue-based coloring. Your best makeup is crisp and cool: blue-red, fuchsia, berry and a sharp black liner. Warm, golden or peachy makeup usually looks out of place on you."
      },
      {
        "type": "p",
        "text": "This guide turns the [Cool Winter color palette](/guides/cool-winter-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Cool Winter makeup"
      },
      {
        "type": "p",
        "text": "Cool and clear. Every shade should have a blue or pink base, and contrast is your friend. Satin, cream and cool icy shimmer finishes suit Cool Winter. Avoid orange, gold and brown-based products near the face."
      },
      {
        "type": "h2",
        "text": "Cool Winter makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Cool Winter makeup colors with hex codes",
        "colors": [
          {
            "name": "Blue-red",
            "hex": "#B5102E"
          },
          {
            "name": "Fuchsia",
            "hex": "#D6177E"
          },
          {
            "name": "Cool berry",
            "hex": "#8E1F55"
          },
          {
            "name": "Magenta",
            "hex": "#C2187A"
          },
          {
            "name": "Cool pink",
            "hex": "#E36A9C"
          },
          {
            "name": "Cool rose nude",
            "hex": "#B97D8A"
          },
          {
            "name": "Cool pink blush",
            "hex": "#E7849F"
          },
          {
            "name": "Berry blush",
            "hex": "#A63A6A"
          },
          {
            "name": "Silver",
            "hex": "#B9BEC5"
          },
          {
            "name": "Charcoal",
            "hex": "#333438"
          },
          {
            "name": "Navy",
            "hex": "#1B2A4A"
          },
          {
            "name": "Icy plum",
            "hex": "#8A6A93"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Cool Winter lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: cool rose nude or a sheer berry.",
          "Office: cool pink or cool berry.",
          "Evening: true blue-red, fuchsia or magenta.",
          "Skip: coral, orange-red, peach and brown nudes."
        ]
      },
      {
        "type": "h2",
        "text": "Cool Winter blush"
      },
      {
        "type": "p",
        "text": "Cool pink, berry or a fuchsia-pink blush, applied lightly, suits Cool Winter. Peach and bronze blush can make cool skin look sallow."
      },
      {
        "type": "h2",
        "text": "Cool Winter eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: icy pink or cool white shimmer.",
          "Crease: cool grey or charcoal.",
          "Accent: navy, plum or a silver shimmer.",
          "Liner: black, crisp and defined."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "Choose a cool or neutral-cool foundation. Skip warm bronzer; a cool contour and a silver or icy pink highlighter look more natural."
      },
      {
        "type": "h2",
        "text": "Makeup Cool Winter should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Coral, orange and brick lipstick.",
          "Golden bronzer and peach blush.",
          "Warm brown, copper and gold eyeshadow.",
          "Brown-based nude lipstick."
        ]
      },
      {
        "type": "h2",
        "text": "Cool Winter makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both are cool, but Cool Winter is clearer and higher contrast (blue-red, fuchsia, black liner), while [Cool Summer makeup](/guides/cool-summer-makeup-palette) is softer (rose, raspberry, grey liner). If a sharp blue-red looks better on you than a soft rose, you are probably Cool Winter."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Cool Winter?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
  },
  {
    "slug": "bright-winter-makeup-palette",
    "category": "Makeup",
    "imageTitle": "Bright Winter Makeup",
    "keywords": [
      "bright winter makeup palette",
      "clear winter makeup",
      "bright winter makeup",
      "bright winter lipstick",
      "bright winter makeup colors"
    ],
    "swatches": [
      "#FF1F8E",
      "#D7002E",
      "#0047AB",
      "#000000"
    ],
    "title": "Bright Winter Makeup Palette: Lipstick, Blush & Eyeshadow Colors",
    "description": "The Bright Winter (Clear Winter) makeup palette with 12 hex codes: the best lipstick, blush and eyeshadow shades for Bright Winter, plus the makeup colors to avoid.",
    "date": "2026-11-05",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "Bright Winter, also called Clear Winter, has the most vivid and high-contrast coloring of all the seasons: usually dark hair, bright eyes and clear skin. You can wear bold, saturated makeup that would overwhelm most people: hot pink, cherry red and electric accents. Soft, muted makeup tends to dull you."
      },
      {
        "type": "p",
        "text": "This guide turns the [Bright Winter color palette](/guides/bright-winter-color-palette) into makeup colors with hex codes for lipstick, blush and eyeshadow."
      },
      {
        "type": "h2",
        "text": "The rule for Bright Winter makeup"
      },
      {
        "type": "p",
        "text": "Bright, cool and clear. Choose saturated shades with a cool base, and keep edges crisp. Glossy, satin and cool shimmer finishes suit Bright Winter. Dusty, earthy or muted shades are the ones to skip."
      },
      {
        "type": "h2",
        "text": "Bright Winter makeup color palette with hex codes"
      },
      {
        "type": "p",
        "text": "Use these 12 shades as a shopping reference. Compare swatches in daylight, because indoor bulbs and product photos change how colors look."
      },
      {
        "type": "palette",
        "label": "Bright Winter makeup colors with hex codes",
        "colors": [
          {
            "name": "Hot pink",
            "hex": "#FF1F8E"
          },
          {
            "name": "Fuchsia",
            "hex": "#E0218A"
          },
          {
            "name": "Cherry red",
            "hex": "#D7002E"
          },
          {
            "name": "Clear berry",
            "hex": "#B0105A"
          },
          {
            "name": "Bright cool pink",
            "hex": "#F2559A"
          },
          {
            "name": "Clear raspberry",
            "hex": "#D12B6B"
          },
          {
            "name": "Cool pink blush",
            "hex": "#F07AA8"
          },
          {
            "name": "Silver",
            "hex": "#C0C4CC"
          },
          {
            "name": "Charcoal",
            "hex": "#2F3136"
          },
          {
            "name": "Cobalt",
            "hex": "#0047AB"
          },
          {
            "name": "Emerald",
            "hex": "#009B77"
          },
          {
            "name": "Violet",
            "hex": "#7F00FF"
          }
        ]
      },
      {
        "type": "h2",
        "text": "Bright Winter lipstick colors"
      },
      {
        "type": "ul",
        "items": [
          "Everyday: a sheer clear berry or bright cool pink.",
          "Office: clear raspberry or fuchsia.",
          "Evening: cherry red or hot pink, Bright Winter's signature shades.",
          "Skip: brown nudes, terracotta, mauve and dusty rose."
        ]
      },
      {
        "type": "h2",
        "text": "Bright Winter blush"
      },
      {
        "type": "p",
        "text": "Bright cool pink or clear raspberry blush, applied lightly, keeps Bright Winter looking fresh. Brownish or peach blush looks muddy against your contrast."
      },
      {
        "type": "h2",
        "text": "Bright Winter eyeshadow and liner"
      },
      {
        "type": "ul",
        "items": [
          "Base: icy white or silver shimmer.",
          "Crease: charcoal.",
          "Accent: cobalt, emerald or violet liner for a vivid pop.",
          "Liner: black, sharp and defined."
        ]
      },
      {
        "type": "h2",
        "text": "Foundation and highlighter"
      },
      {
        "type": "p",
        "text": "A neutral-cool or cool foundation usually works. Keep contour cool and subtle, and use a silver or icy highlighter."
      },
      {
        "type": "h2",
        "text": "Makeup Bright Winter should avoid"
      },
      {
        "type": "ul",
        "items": [
          "Brown and terracotta lipstick.",
          "Muted, ashy eyeshadow palettes.",
          "Warm bronzer and peach blush.",
          "Soft mauve and dusty rose shades that hide your contrast."
        ]
      },
      {
        "type": "h2",
        "text": "Bright Winter makeup vs a neighboring season"
      },
      {
        "type": "p",
        "text": "Both seasons wear bright makeup, but Bright Winter leans cool (hot pink, cherry, cobalt), while [Bright Spring makeup](/guides/bright-spring-makeup-palette) leans warm (coral, poppy red, teal). If fuchsia looks better on you than coral, you are probably Bright Winter. See [Bright Spring vs Bright Winter](/guides/bright-spring-vs-bright-winter)."
      },
      {
        "type": "h2",
        "text": "Not sure you are a Bright Winter?"
      },
      {
        "type": "p",
        "text": "Try the [free photo color analysis](/#quiz) or the [six-question season quiz](/what-season-am-i). For makeup ideas for every season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
      }
    ]
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
