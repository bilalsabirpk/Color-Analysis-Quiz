// Original long-form articles. Metadata + body blocks live together so both
// the listing page and the article page can pull from one source of truth.
// Body block shapes: {type:'p', text}, {type:'h2', text}, {type:'ul', items}

import { SUB_SEASON_GUIDES } from '@/lib/sub-season-guides';

export const GUIDES = [
  {
    slug: 'how-seasonal-color-analysis-works',
    category: 'Basics',
    swatches: ['#f6c28b', '#a7b8d9', '#b5652b', '#1f2a5a'],
    title: 'How Seasonal Color Analysis Works: The 4 Seasons Explained',
    description:
      'What "your color season" actually means, the three variables that drive it, and how a browser-based tool like this one estimates it from a photo.',
    updated: '2026-10-21',
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
    category: 'Undertones',
    swatches: ['#e8b27d', '#d99a6c', '#c6a6c9', '#8fa3c8'],
    title: 'Skin Undertone Test: How to Tell Warm, Cool or Neutral',
    description:
      'How to find your undertone: five easy skin undertone tests to check if you are warm, cool or neutral, and why undertone is only half of your color season.',
    date: '2026-01-22',
    updated: '2026-10-22',
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
    category: 'Makeup',
    swatches: ['#e2725b', '#c85a7c', '#9e3b3b', '#b0526d'],
    title: 'Makeup Colors for Your Season: Lipstick, Blush & Eyeshadow',
    description:
      'Makeup colors for every color season: which lipstick, blush and eyeshadow shades flatter Spring, Summer, Autumn and Winter, plus a quick shade test.',
    date: '2026-08-18',
    updated: '2026-10-21',
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
        text: 'Within Spring, [Light Spring](/guides/light-spring-color-palette) keeps everything sheer and peachy, [Warm Spring](/guides/warm-spring-color-palette) can wear richer coral and golden bronze, and [Bright Spring](/guides/bright-spring-color-palette) carries the clearest poppy reds best.',
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
        text: 'Within Summer, [Light Summer](/guides/light-summer-color-palette) suits sheer pink and lavender, [Cool Summer](/guides/cool-summer-color-palette) suits rose and raspberry, and [Soft Summer](/guides/soft-summer-color-palette) looks best in mauve, dusty rose and taupe.',
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
        text: 'Within Autumn, [Soft Autumn](/guides/soft-autumn-color-palette) suits warm nude and soft terracotta, [Warm Autumn](/guides/warm-autumn-color-palette) suits brick and rust, and [Deep Autumn](/guides/deep-autumn-color-palette) can wear deep brick red, chocolate liner and bronze.',
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
        text: 'Within Winter, [Deep Winter](/guides/deep-winter-color-palette) suits deep berry and plum, [Cool Winter](/guides/cool-winter-color-palette) suits blue-red and fuchsia, and [Bright Winter](/guides/bright-winter-color-palette) can carry the brightest pink and true red with crisp black liner.',
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
    updated: '2026-10-22',
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
        text: 'Olive skin often has a neutral or slightly warm undertone with a green cast, so bright yellow gold can look brassy while icy silver can look harsh. Antique or brushed gold, bronze, brass and rose gold are usually the safest choices, and many olive-skinned people wear both metals well. See the full [olive skin color palette](/guides/olive-skin-color-palette) for clothes, makeup and hair.',
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
    "description": "The olive skin color palette: teal, emerald, burgundy, terracotta and mustard. How to tell if you have olive skin, its color season, and the best makeup, hair and jewelry.",
    "date": "2026-10-22",
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
        "text": "Olive is an undertone, not a skin depth. It describes a slightly green or grey-green cast that sits under the surface color of the skin, usually alongside a warm (yellow) or neutral base. Olive skin can be light, medium or deep, and it is common in people with Mediterranean, Middle Eastern, South Asian and Latin American heritage, though anyone can have it."
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
