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
    "description": "The olive skin color palette: teal, emerald, burgundy, terracotta and mustard. How to tell if you have olive skin, its color season, and the best makeup, hair and jewelry.",
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
    "category": "Undertones",
    "swatches": [
      "#00704A",
      "#C2185B",
      "#D4A017",
      "#6D1A2E"
    ],
    "title": "Brown Skin Color Palette: Best Colors for South Asian Skin",
    "description": "The best colors for brown and South Asian skin: emerald, cobalt, fuchsia, mustard and rust. Find your undertone and season, plus makeup, hair and jewelry tips.",
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
        "text": "For shades by season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
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
    "title": "Hijab Colors for Your Skin Tone: Best Shades for Warm, Cool & Olive Skin",
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
        "text": "For shades by season, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season)."
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
