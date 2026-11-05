// Long-form guide content for the blush, eyeshadow, concealer, color
// checker and contrast tools. Merged into TOOL_GUIDES in lib/tool-guides.js.

const BLUSH = {
  heading: 'How to Choose a Blush Color That Suits You',
  blocks: [
    {
      type: 'p',
      text: 'Blush copies the natural flush of your cheeks, so the right shade is the one that looks like your own color, just a little healthier. The wrong blush sits on top of the skin as a stripe of color; the right one seems to come from underneath.',
    },
    { type: 'h3', text: 'How the blush finder works' },
    {
      type: 'p',
      text: 'The finder estimates your color season from your undertone, depth and contrast, then shows four blush shades for that season with hex codes, the best finish and what to avoid. If you already know your season, choose it from the menu to skip the questions.',
    },
    {
      type: 'table',
      caption: 'Best blush colors by season',
      head: ['Season family', 'Blush colors', 'Finish'],
      rows: [
        ['**Spring**', 'Peach, coral, apricot, warm pink', 'Cream, satin, a soft glow'],
        ['**Summer**', 'Soft pink, rose, mauve, soft berry', 'Matte or satin powder'],
        ['**Autumn**', 'Terracotta, burnt peach, cinnamon, brick', 'Matte or warm sheen'],
        ['**Winter**', 'Berry, raspberry, plum, fuchsia', 'Satin or matte'],
      ],
    },
    { type: 'h3', text: 'Where to put blush' },
    {
      type: 'ol',
      items: [
        'Smile and find the fullest part of your cheeks (the apples).',
        'Tap a little product there and blend up and back toward your temples.',
        'Keep blush above the line of your nostrils; lower placement can drag the face down.',
        'Build in thin layers and check from arm\'s length in daylight.',
      ],
    },
    { type: 'h3', text: 'Common blush mistakes' },
    {
      type: 'ul',
      items: [
        '**Wrong undertone.** Cool pink on warm skin can look chalky; orange on cool skin can look muddy.',
        '**Too much shimmer.** Soft seasons, and anyone with texture, look better in matte or satin.',
        '**Ignoring depth.** Pale pastels can look grey on deep skin; deep berries can look harsh on fair skin.',
      ],
    },
    {
      type: 'p',
      text: 'Match your blush to your lips for an easy, polished look: find your shades with the [lipstick shade finder](/lipstick-color-finder) and your full face in [makeup colors for your color season](/guides/makeup-colors-for-your-color-season).',
    },
  ],
  faqs: [
    {
      q: 'Should my blush match my lipstick?',
      a: 'It does not have to match exactly, but blush and lipstick from the same color family (both warm or both cool) look the most natural together.',
    },
  ],
};

const EYESHADOW = {
  heading: 'How to Choose Eyeshadow Colors for Your Season',
  blocks: [
    {
      type: 'p',
      text: 'Eyeshadow does two jobs: neutrals shape and define the eye, and accent colors make your eye color stand out. Your season tells you which neutrals look natural on your skin and which accents flatter your eyes.',
    },
    { type: 'h3', text: 'How the eyeshadow finder works' },
    {
      type: 'p',
      text: 'The finder estimates your season from four questions and shows three everyday neutrals, three accent colors and the eyeliner color that suits you, all with hex codes.',
    },
    {
      type: 'table',
      caption: 'Eyeshadow neutrals and accents by season family',
      head: ['Season family', 'Neutrals', 'Accent colors', 'Eyeliner'],
      rows: [
        ['**Spring**', 'Cream, camel, golden beige', 'Peach, turquoise, warm green', 'Warm brown'],
        ['**Summer**', 'Taupe, rose beige, soft grey', 'Lavender, grey-blue, dusty mauve', 'Grey or navy'],
        ['**Autumn**', 'Camel, bronze, chocolate', 'Olive, copper, deep teal', 'Chocolate or olive'],
        ['**Winter**', 'Cool taupe, charcoal', 'Emerald, sapphire, plum, violet', 'Black or navy'],
      ],
    },
    { type: 'h3', text: 'A simple three-step eye look' },
    {
      type: 'ol',
      items: [
        'Sweep the lightest neutral all over the lid.',
        'Blend the deeper neutral into the crease and outer corner.',
        'Add an accent color as a line along the lashes or a dab on the outer corner.',
      ],
    },
    { type: 'h3', text: 'Making your eye color stand out' },
    {
      type: 'ul',
      items: [
        '**Blue eyes:** warm coppers, bronzes and peach make blue look brighter.',
        '**Green and hazel eyes:** plum, aubergine and burgundy bring out green.',
        '**Brown eyes:** almost everything works; navy, emerald and bronze are especially striking.',
      ],
    },
    {
      type: 'p',
      text: 'Keep the accent within your season palette so it flatters your skin as well as your eyes. For the rest of your makeup, see the [blush color finder](/blush-color-finder) and your season\'s full [makeup palette](/guides/makeup-colors-for-your-color-season).',
    },
  ],
  faqs: [
    {
      q: 'What eyeshadow color suits every eye color?',
      a: 'Soft brown and taupe neutrals suit almost everyone. Choose a warmer brown if your undertone is warm and a cooler taupe if it is cool.',
    },
  ],
};

const CONCEALER = {
  heading: 'How to Choose the Right Concealer Shade',
  blocks: [
    {
      type: 'p',
      text: 'Concealer needs a different shade depending on what you are covering. Under the eyes, a shade slightly lighter than your skin brightens shadows. On blemishes and dark spots, an exact match hides them; a lighter shade makes them stand out.',
    },
    { type: 'h3', text: 'How the concealer finder works' },
    {
      type: 'p',
      text: 'It uses the same undertone questions as the [foundation undertone finder](/foundation-undertone-finder), plus your depth and what you want to cover. It then tells you the concealer undertone, whether to go one step lighter or match exactly, and which color corrector (if any) to use first.',
    },
    {
      type: 'table',
      caption: 'Color correctors by concern and skin depth',
      head: ['Concern', 'Fair to light skin', 'Medium to tan skin', 'Deep skin'],
      rows: [
        ['Blue or purple circles', 'Pink-peach', 'Peach', 'Orange-red'],
        ['Brown circles', 'Peach-yellow', 'Orange', 'Red-orange'],
        ['Redness, blemishes', 'Green', 'Green', 'Green (thin layer)'],
        ['Dark spots', 'Exact-match concealer', 'Orange, then concealer', 'Orange, then concealer'],
      ],
    },
    { type: 'h3', text: 'How to apply concealer' },
    {
      type: 'ol',
      items: [
        'Apply a thin layer of corrector only where the discoloration is, and let it set.',
        'Dot concealer on top and tap it in with a finger or sponge; do not rub.',
        'Under the eyes, keep product close to the inner corner and the darkest area.',
        'Set lightly with powder if it creases, and check in daylight.',
      ],
    },
    { type: 'h3', text: 'Common concealer mistakes' },
    {
      type: 'ul',
      items: [
        '**Too light under the eyes.** More than one shade lighter can look grey or ashy, especially on deep skin.',
        '**Wrong undertone.** A pink concealer on warm skin looks ashy; a very yellow one on cool skin looks sallow.',
        '**Too much product.** Several thin layers cover better than one thick one and crease less.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Should concealer be lighter than foundation?',
      a: 'Under the eyes, usually one shade lighter with the same undertone. For blemishes and dark spots, use an exact match to your skin.',
    },
  ],
};

const COLOR_CHECKER = {
  heading: 'How to Tell If a Color Suits You',
  blocks: [
    {
      type: 'p',
      text: 'A color suits you when it matches the three qualities of your natural coloring: temperature (warm or cool), depth (light or deep) and intensity (bright or soft). Your color season sums these up, which is why its palette is the quickest way to check any color.',
    },
    { type: 'h3', text: 'How this color checker works' },
    {
      type: 'p',
      text: 'The tool converts your color and every shade in your season palette to the CIELAB color space, which is built to match how people see color. It then measures the visual difference between them with the CIEDE2000 formula. A small difference means the color is close to one of your palette shades; a large one means it is not. It also checks the color against all 12 seasons to show which ones it suits best.',
    },
    {
      type: 'table',
      caption: 'What the results mean',
      head: ['Result', 'Meaning', 'What to do'],
      rows: [
        ['Yes, this color suits you', 'Very close to a shade in your palette', 'Wear it near your face'],
        ['Close, but not your best', 'Near your palette but slightly off', 'Try the closest palette shades shown'],
        ['Not your best color', 'Far from your palette', 'Wear it away from your face, or pick an alternative'],
      ],
    },
    { type: 'h3', text: 'How to check a color when shopping online' },
    {
      type: 'ol',
      items: [
        'Find the product color. Some shops list a hex code; otherwise use a color picker on the product photo.',
        'Paste the code into the checker and choose your season.',
        'Look at the closest shades: if the product is warmer, cooler, lighter or brighter than them, adjust your choice.',
        'Remember that photos are edited. Check the real item in daylight before you keep it.',
      ],
    },
    { type: 'h3', text: 'If a color you love is "not your best"' },
    {
      type: 'p',
      text: 'Wear it further from your face, in trousers, skirts, shoes or bags, and keep a palette color near your face. Or find the version of it that suits you: a Soft Summer who loves orange can wear a dusty coral; a Winter who loves beige can wear a cool, crisp stone. The [12 seasonal color palettes](/seasonal-color-palettes) show the version of each color that suits every season.',
    },
  ],
  faqs: [
    {
      q: 'How do I find the hex code of a clothing color?',
      a: 'Some online shops show it in the product details. Otherwise, use your phone\'s or browser\'s color picker on the product photo. Choose a part of the photo without shadows or highlights.',
    },
    {
      q: 'Is the color checker accurate?',
      a: 'The color math is exact for screen colors, but screens, lighting and product photos all change how a color looks. Use the result as a guide and check the real item in daylight.',
    },
  ],
};

const CONTRAST = {
  heading: 'What Is Personal Contrast and Why It Matters',
  blocks: [
    {
      type: 'p',
      text: 'Personal contrast is the difference in lightness between your hair, skin and eyes. Someone with jet-black hair and fair skin has high contrast; someone with light brown hair, light skin and hazel eyes has low contrast. It matters because outfits look best when their contrast matches yours.',
    },
    { type: 'h3', text: 'How the contrast test works' },
    {
      type: 'p',
      text: 'The test scores how far apart your hair, skin and eyes are in depth, then adds two quick checks: how visible your eyebrows are and how your face looks in black and white. The total places you on a scale from low to high contrast.',
    },
    {
      type: 'table',
      caption: 'Contrast levels and how to dress them',
      head: ['Contrast', 'Typical look', 'Outfit pairings', 'Often these seasons'],
      rows: [
        ['Low', 'Hair, skin and eyes close in depth', 'Tonal outfits, soft combinations', 'Soft Summer, Soft Autumn, Light seasons'],
        ['Medium', 'Some difference between features', 'Mid-dark with mid-light', 'Cool Summer, Warm Autumn, Warm Spring'],
        ['High', 'Strong light and dark features', 'Very dark with very light', 'Winters, Deep Autumn, Bright Spring'],
      ],
    },
    { type: 'h3', text: 'The black and white photo test' },
    {
      type: 'ol',
      items: [
        'Take a selfie in daylight with no makeup and your natural hair visible.',
        'Turn it black and white with any photo editor.',
        'If your face and hair look like similar greys, you are low contrast. If there is a strong jump from light to dark, you are high contrast.',
      ],
    },
    { type: 'h3', text: 'Contrast vs color season' },
    {
      type: 'p',
      text: 'Contrast is one of the three traits behind your season, alongside undertone and depth. It is especially useful when you are between two seasons: high contrast points toward Winter or Bright Spring, low contrast toward the soft and light seasons. Combine it with the [undertone test](/undertone-test) and the [what season am I quiz](/what-season-am-i), then use the [color checker](/does-this-color-suit-me) to test any color.',
    },
  ],
  faqs: [
    {
      q: 'Does dyed hair change my contrast?',
      a: 'Yes. Your contrast is based on your current hair, skin and eyes, so dyeing your hair much lighter or darker changes it, and with it the outfits that suit you best. For your season, use your natural hair color.',
    },
  ],
};

export const MORE_TOOL_GUIDES = {
  '/blush-color-finder': BLUSH,
  '/eyeshadow-color-finder': EYESHADOW,
  '/concealer-shade-finder': CONCEALER,
  '/does-this-color-suit-me': COLOR_CHECKER,
  '/contrast-test': CONTRAST,
};
