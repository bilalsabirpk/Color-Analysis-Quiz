// Long-form guide content for each tool page, rendered by
// components/ToolGuide.jsx. `faqs` are merged into the page's FAQ section
// and FAQPage schema. Keep claims honest: the tools are rule-based quizzes
// and colour references, not professional consultations.

import { NEW_TOOL_GUIDES } from '@/lib/tool-guides-new';

const UNDERTONE = {
  heading: 'The Complete Guide to Skin Undertones',
  blocks: [
    {
      type: 'p',
      text: 'Your undertone is the color that sits underneath the surface of your skin. Your skin tone (fair, medium, deep) can change with a tan or the seasons, but your undertone stays the same your whole life. That is why it is the first thing to know before you choose foundation, lipstick, hair color, jewelry or clothes.',
    },
    { type: 'h3', text: 'Skin tone vs undertone' },
    {
      type: 'p',
      text: '**Skin tone** is how light or dark your skin is. **Undertone** is the hue under it: warm (golden, yellow, peach), cool (pink, red, blue) or neutral (a mix). Two people with the same skin tone can have opposite undertones, which is why the same foundation shade can look perfect on one and orange on the other.',
    },
    { type: 'h3', text: 'How this undertone test works' },
    {
      type: 'p',
      text: 'The test above combines six well-known signs. Each answer adds points to warm or cool; the stronger signs (veins, jewelry and red lipstick) count double. If the warm and cool scores are close, the result is neutral. A slightly green or grey cast adds an olive hint. Everything is scored in your browser and nothing is saved.',
    },
    {
      type: 'table',
      caption: 'Undertone signs and what they mean',
      head: ['Sign', 'Warm', 'Cool', 'Neutral'],
      rows: [
        ['Wrist veins', 'Green or olive', 'Blue or purple', 'Mixed, hard to tell'],
        ['Jewelry', 'Gold glows', 'Silver looks crisp', 'Both work'],
        ['White vs cream', 'Cream flatters', 'Bright white flatters', 'No clear winner'],
        ['Sun', 'Tans golden', 'Burns or turns pink', 'Burns, then tans'],
        ['Red lipstick', 'Orange-red, brick', 'Blue-red, cherry', 'True red'],
        ['Skin in daylight', 'Golden, peachy', 'Pink, rosy', 'Beige'],
      ],
    },
    { type: 'h3', text: 'How to get an accurate result' },
    {
      type: 'ol',
      items: [
        'Stand near a window in daylight. Warm indoor bulbs make everyone look warmer, and cold LED light makes everyone look cooler.',
        'Take off makeup, self-tan and tinted moisturizer, at least on your jaw and wrist.',
        'Wear white or grey, or put a white towel around your shoulders, so a bright top does not reflect color onto your face.',
        'Answer what you see, not what you hope for. If two answers seem true, pick "a mix" or "both".',
        'Look for agreement. Two or three signs pointing the same way are more reliable than any single test.',
      ],
    },
    { type: 'h3', text: 'Common undertone mistakes' },
    {
      type: 'ul',
      items: [
        '**Confusing redness with a cool undertone.** Rosacea, acne or a flush can make warm skin look pink. Check your wrist and neck, where redness is less common.',
        '**Assuming deep skin is always warm.** Deep skin can be cool, warm or neutral, just like fair skin. On deeper skin, the jewelry and lipstick tests are easier to read than veins.',
        '**Reading olive as warm.** Olive skin has a green or grey cast and often looks wrong in both very pink and very yellow foundations. See the [olive skin color palette](/guides/olive-skin-color-palette).',
        '**Testing under a yellow bulb.** Bathroom and bedroom lights are usually warm and push results toward warm.',
      ],
    },
    { type: 'h3', text: 'What to do with your result' },
    {
      type: 'p',
      text: 'Undertone narrows your color season to two families: warm points to Spring or Autumn, cool to Summer or Winter, and neutral to the soft or neighboring seasons. Use the [what season am I quiz](/what-season-am-i) or the [photo color analysis](/#quiz) to add depth and contrast, then use the [foundation undertone finder](/foundation-undertone-finder), [lipstick shade finder](/lipstick-color-finder) and [gold or silver test](/gold-or-silver-jewelry-test) to turn it into everyday choices.',
    },
  ],
  faqs: [
    {
      q: 'Can my undertone change?',
      a: 'No. Your undertone is set by your genes and stays the same. A tan, a sunburn, redness or aging can change how your skin looks on the surface, which is why it is best to test in daylight, without makeup, and on more than one sign.',
    },
    {
      q: 'Why do I get different results from different undertone tests?',
      a: 'Each test reads one sign, and lighting, makeup and redness affect some signs more than others. When tests disagree you are often neutral or olive. Combine several signs, like the six in the test above, and trust the majority.',
    },
  ],
};

const HARMONY = {
  heading: 'How to Use the Color Wheel: A Practical Guide',
  blocks: [
    {
      type: 'p',
      text: 'A color harmony is a set of colors chosen by their position on the color wheel. Designers use them so a poster or a room feels balanced; you can use exactly the same rules to put outfits together, choose makeup or plan a mood board.',
    },
    { type: 'h3', text: 'How the generator works' },
    {
      type: 'p',
      text: 'The tool converts your base color to hue, saturation and lightness. For each harmony it turns the hue around the 360° color wheel by a fixed angle, and keeps the saturation and lightness the same, so every color in the set has the same intensity as your base. Monochromatic schemes keep the hue and change only the lightness.',
    },
    {
      type: 'table',
      caption: 'Color harmony types and the angles used',
      head: ['Harmony', 'Hue angles', 'Look', 'Best for'],
      rows: [
        ['Complementary', '0°, 180°', 'Strong contrast', 'One main color plus an accent'],
        ['Analogous', '−30°, 0°, +30°', 'Calm and blended', 'Tonal outfits, everyday looks'],
        ['Triadic', '0°, 120°, 240°', 'Bold and balanced', 'Playful outfits, graphics'],
        ['Split-complementary', '0°, 150°, 210°', 'Contrast with less clash', 'A safer alternative to complementary'],
        ['Square', '0°, 90°, 180°, 270°', 'Lively, four colors', 'Patterns, one dominant color'],
        ['Monochromatic', 'Same hue, lighter and darker', 'Polished, elongating', 'Work outfits, minimalist style'],
      ],
    },
    { type: 'h3', text: 'The 60-30-10 rule' },
    {
      type: 'p',
      text: 'The easiest way to wear any harmony is to split it unevenly: about **60%** main color (for example trousers and a jacket), **30%** second color (a top) and **10%** accent (shoes, a bag or jewelry). Using equal amounts of two strong colors is what usually makes an outfit look busy.',
    },
    { type: 'h3', text: 'Example outfits from one base color' },
    {
      type: 'ul',
      items: [
        '**Navy base, complementary:** navy suit or dress with a rust or burnt-orange bag.',
        '**Teal base, analogous:** teal top, emerald trousers and an olive jacket.',
        '**Burgundy base, monochromatic:** burgundy knit, wine trousers and a soft rose scarf.',
        '**Mustard base, split-complementary:** mustard sweater with a soft violet and navy check skirt.',
      ],
    },
    { type: 'h3', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        '**Using every color at full strength.** Let one color lead and keep the rest small.',
        '**Mixing temperatures by accident.** A warm orange next to a cool, blue-pink top can look like a mistake even if the hues match. Keep the undertone consistent.',
        '**Forgetting neutrals.** Navy, charcoal, camel, cream and taupe calm any bold harmony.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is the difference between complementary and split-complementary colors?',
      a: 'Complementary colors sit directly opposite each other on the color wheel, which gives the strongest contrast. Split-complementary replaces the opposite color with the two colors on either side of it, so you still get contrast, but softer and easier to wear.',
    },
    {
      q: 'Are the hex codes from the generator exact?',
      a: 'They are exact for screens. Fabric, paint and makeup always look a little different from a screen color, so use the hex codes as a guide and compare products in daylight.',
    },
  ],
};

const PALETTES = {
  heading: 'How the 12 Seasonal Color Palettes Work',
  blocks: [
    {
      type: 'p',
      text: 'Seasonal color analysis sorts people by three qualities of their natural coloring: **hue** (warm or cool), **value** (light or deep) and **chroma** (bright and clear or soft and muted). The four classic seasons each split into three sub-seasons, named after the quality that is strongest in that person. That gives the 12 palettes above.',
    },
    {
      type: 'table',
      caption: 'The 12 seasons by their main and second trait',
      head: ['Season', 'Main trait', 'Second trait', 'Neighbor season'],
      rows: [
        ['[Light Spring](/guides/light-spring-color-palette)', 'Light', 'Warm', 'Light Summer'],
        ['[Warm Spring](/guides/warm-spring-color-palette)', 'Warm', 'Clear', 'Warm Autumn'],
        ['[Bright Spring](/guides/bright-spring-color-palette)', 'Bright', 'Warm', 'Bright Winter'],
        ['[Light Summer](/guides/light-summer-color-palette)', 'Light', 'Cool', 'Light Spring'],
        ['[Cool Summer](/guides/cool-summer-color-palette)', 'Cool', 'Soft', 'Cool Winter'],
        ['[Soft Summer](/guides/soft-summer-color-palette)', 'Soft', 'Cool', 'Soft Autumn'],
        ['[Soft Autumn](/guides/soft-autumn-color-palette)', 'Soft', 'Warm', 'Soft Summer'],
        ['[Warm Autumn](/guides/warm-autumn-color-palette)', 'Warm', 'Soft', 'Warm Spring'],
        ['[Deep Autumn](/guides/deep-autumn-color-palette)', 'Deep', 'Warm', 'Deep Winter'],
        ['[Deep Winter](/guides/deep-winter-color-palette)', 'Deep', 'Cool', 'Deep Autumn'],
        ['[Cool Winter](/guides/cool-winter-color-palette)', 'Cool', 'Clear', 'Cool Summer'],
        ['[Bright Winter](/guides/bright-winter-color-palette)', 'Bright', 'Cool', 'Bright Spring'],
      ],
    },
    { type: 'h3', text: 'Why neighbor seasons matter' },
    {
      type: 'p',
      text: 'Each season shares its main trait with one neighbor in another family. Soft Summer and Soft Autumn are both soft; one leans cool, the other warm. That is why so many people feel "between" two seasons, and why those two palettes overlap. If you are unsure, compare the two neighbors side by side, for example in [Soft Summer vs Soft Autumn](/guides/soft-summer-vs-soft-autumn) or [Light Spring vs Light Summer](/guides/light-spring-vs-light-summer).',
    },
    { type: 'h3', text: 'How to test a palette on yourself' },
    {
      type: 'ol',
      items: [
        'Sit by a window in daylight with a bare face and your hair pulled back.',
        'Hold two colors under your chin: one from each palette you are deciding between.',
        'Look at your skin, not the fabric. The right color makes skin look even, shadows softer and eyes clearer.',
        'Repeat with three or four pairs. The palette that wins most often is yours.',
      ],
    },
    { type: 'h3', text: 'Building a wardrobe from your palette' },
    {
      type: 'ul',
      items: [
        '**Neutrals first:** pick two or three neutrals from your palette (for example navy and grey for Summer, camel and olive for Autumn) for coats, trousers and bags.',
        '**Then your best colors:** use the brightest or most flattering shades for tops, scarves and dresses, near your face.',
        '**Accents last:** shoes, belts and jewelry can come from anywhere in the palette.',
      ],
    },
    {
      type: 'p',
      text: 'For a ready-made plan, see the [capsule wardrobe by color season](/guides/capsule-wardrobe-color-season) guide, and use the [makeup palettes](/guides/makeup-colors-for-your-color-season) and the [lipstick shade finder](/lipstick-color-finder) to match your makeup to the same season.',
    },
  ],
  faqs: [
    {
      q: 'Which seasonal color palette is the most common?',
      a: 'There is no reliable data on how common each season is, and results vary by population. Soft and neutral seasons, like Soft Summer and Soft Autumn, are often described as common because many people have medium, blended coloring, but that is an observation, not a statistic.',
    },
    {
      q: 'Is the 12-season system better than the 4-season system?',
      a: 'It is more precise. The 4-season system only sorts by warm or cool and light or deep, so many people fit none of the four well. The 12-season system adds chroma (bright or soft) and names each season by its strongest trait, so it fits more people.',
    },
  ],
};

const WHAT_SEASON = {
  heading: 'Getting an Accurate Season Result',
  blocks: [
    { type: 'h3', text: 'How this quiz works' },
    {
      type: 'p',
      text: 'The quiz asks six questions that cover the three traits behind every season: **undertone** (veins, jewelry, white or cream), **depth** (how light or dark your natural hair and skin are) and **contrast** (how much your features stand out from each other). Each answer moves you toward one of the four season families, and the result names your most likely family and sub-season. It is a rule-based estimate that runs in your browser; nothing you answer is stored.',
    },
    {
      type: 'table',
      caption: 'Quick season finder by undertone and contrast',
      head: ['', 'Low contrast, soft', 'Medium', 'High contrast, bright'],
      rows: [
        ['**Warm**', 'Soft Autumn', 'Warm Autumn or Warm Spring', 'Bright Spring'],
        ['**Cool**', 'Soft Summer', 'Cool Summer', 'Cool Winter or Bright Winter'],
        ['**Very light coloring**', 'Light Summer', 'Light Spring or Light Summer', 'Light Spring'],
        ['**Very deep coloring**', 'Deep Autumn', 'Deep Autumn or Deep Winter', 'Deep Winter'],
      ],
    },
    { type: 'h3', text: 'Three ways to double-check your season' },
    {
      type: 'ol',
      items: [
        '**The black and white photo test.** Take a selfie in daylight and turn it black and white. Mostly pale greys mean light coloring (Light Spring, Light Summer); mostly dark greys mean deep coloring (Deep Autumn, Deep Winter); a strong jump between hair and skin means high contrast (Winter, Bright Spring).',
        '**The drape test.** Hold two tops or scarves under your chin: one from your result season and one from its neighbor. The one that makes your skin look smoother and your eyes clearer wins.',
        '**The metal test.** Gold suits Spring and Autumn, silver suits Summer and Winter. Our [gold or silver test](/gold-or-silver-jewelry-test) checks it without you having to guess.',
      ],
    },
    { type: 'h3', text: 'Common reasons people get the wrong season' },
    {
      type: 'ul',
      items: [
        '**Dyed hair.** Judge by your natural color, including eyebrows and roots.',
        '**Indoor light.** Warm bulbs push results toward Autumn; cold LED light pushes toward Winter.',
        '**Favorite colors.** The colors you like are not always the ones that suit you. Judge by your skin, not your taste.',
        '**A tan or redness.** Test on untanned skin, and check your neck and wrist if your face is often red.',
      ],
    },
    {
      type: 'p',
      text: 'Once you have a result, compare it with its neighbor in the [12 seasonal color palettes](/seasonal-color-palettes), then use the [lipstick shade finder](/lipstick-color-finder) and [hair color finder](/hair-color-finder) for the same season.',
    },
  ],
  faqs: [
    {
      q: 'Can I be two color seasons?',
      a: 'You have one best season, but most people can borrow from a neighbor season that shares their main trait. If you keep landing between two, compare them side by side in daylight; the one that makes your skin look clearest is usually your home season.',
    },
    {
      q: 'How accurate is an online color season quiz?',
      a: 'A quiz is a good starting point but not a professional draping session. Results depend on your lighting and how you answer. Use it to narrow down to one or two seasons, then confirm with the drape test or the photo color analysis.',
    },
  ],
};

export const TOOL_GUIDES = {
  '/undertone-test': UNDERTONE,
  '/color-harmony-generator': HARMONY,
  '/seasonal-color-palettes': PALETTES,
  '/what-season-am-i': WHAT_SEASON,
  ...NEW_TOOL_GUIDES,
};
