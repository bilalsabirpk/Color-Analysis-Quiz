// Long-form guide content for the lipstick, foundation, hair and jewelry
// tools. Merged into TOOL_GUIDES in lib/tool-guides.js.

const LIPSTICK = {
  heading: 'Lipstick Colors for Every Season: The Full Guide',
  blocks: [
    {
      type: 'p',
      text: 'The right lipstick does more than add color. Because it sits right next to your skin, eyes and teeth, its undertone changes how your whole face looks. A shade with the right base makes your skin look even and your teeth whiter; the wrong one can make skin look grey or teeth look yellow.',
    },
    { type: 'h3', text: 'How the lipstick finder works' },
    {
      type: 'p',
      text: 'The finder estimates your color season from three things: your undertone (from the vein and jewelry questions), your overall depth and how soft or bright your features look. It then shows the lipstick shades for that season, grouped into nude, everyday and bold, with the look you chose first. The shades match our season makeup palettes, and the close-match season is the neighbor you can also borrow from.',
    },
    {
      type: 'table',
      caption: 'Best lipstick colors for each color season',
      head: ['Season', 'Nude', 'Everyday', 'Bold'],
      rows: [
        ['[Light Spring](/guides/light-spring-makeup-palette)', 'Peach nude', 'Light coral, warm rose', 'Coral pink, light poppy'],
        ['[Warm Spring](/guides/warm-spring-makeup-palette)', 'Golden peach', 'Coral, warm salmon', 'Tomato red, orange red'],
        ['[Bright Spring](/guides/bright-spring-makeup-palette)', 'Peachy pink', 'Coral pink, watermelon', 'Clear red, hot coral'],
        ['[Light Summer](/guides/light-summer-makeup-palette)', 'Rosy nude', 'Rose pink, light berry', 'Cool watermelon'],
        ['[Cool Summer](/guides/cool-summer-makeup-palette)', 'Mauve nude', 'Rose, berry', 'Raspberry, soft blue-red'],
        ['[Soft Summer](/guides/soft-summer-makeup-palette)', 'Rose beige', 'Dusty rose, soft berry', 'Plum rose'],
        ['[Soft Autumn](/guides/soft-autumn-makeup-palette)', 'Warm nude, salmon', 'Soft terracotta', 'Muted brick'],
        ['[Warm Autumn](/guides/warm-autumn-makeup-palette)', 'Caramel nude', 'Terracotta, cinnamon', 'Brick red, rust'],
        ['[Deep Autumn](/guides/deep-autumn-makeup-palette)', 'Chestnut, toffee', 'Brick, warm berry', 'Deep tomato red'],
        ['[Deep Winter](/guides/deep-winter-makeup-palette)', 'Cool cocoa', 'Berry, plum', 'Blue-red, deep wine'],
        ['[Cool Winter](/guides/cool-winter-makeup-palette)', 'Cool rose', 'Fuchsia berry, raspberry', 'True blue-red'],
        ['[Bright Winter](/guides/bright-winter-makeup-palette)', 'Clear rose', 'Fuchsia, hot pink', 'Cherry red'],
      ],
    },
    { type: 'h3', text: 'How to test a lipstick shade' },
    {
      type: 'ol',
      items: [
        'Test on your lips, not the back of your hand. Lip color changes how a lipstick looks, especially sheer formulas.',
        'Check in daylight and look at your whole face in a mirror at arm\'s length.',
        'Smile. If your teeth suddenly look more yellow, the shade is probably too warm or too orange for you.',
        'Wait a few minutes. Some formulas darken or turn more orange as they settle.',
      ],
    },
    { type: 'h3', text: 'Choosing a finish' },
    {
      type: 'p',
      text: 'Finish matters almost as much as color. **Soft seasons** look best in satin and soft matte, because high shine adds a brightness their coloring does not have. **Bright seasons** can wear gloss and vivid matte. **Light seasons** usually suit sheer and glossy textures, and **deep seasons** look polished in matte and satin.',
    },
    { type: 'h3', text: 'Common lipstick mistakes' },
    {
      type: 'ul',
      items: [
        '**A nude that matches your skin.** A nude should be close to your natural lip color, usually one or two shades deeper than your skin. Exact skin-color nudes wash most people out.',
        '**Choosing by the name.** "Nude", "berry" and "red" mean different things in every brand. Compare the color, or the hex codes above, instead.',
        '**Ignoring the base.** Two reds can be opposites: one orange-based, one blue-based. Match the base to your undertone.',
      ],
    },
    {
      type: 'p',
      text: 'For blush and eyeshadow that go with your lipstick, see [makeup colors for your color season](/guides/makeup-colors-for-your-color-season). If your skin is brown or deep, the guide to the [best lipstick colors for brown skin](/guides/best-lipstick-colors-for-brown-skin) has more shade ideas.',
    },
  ],
  faqs: [
    {
      q: 'Do I need to know my color season to use the lipstick finder?',
      a: 'No. Answer the five questions and the finder estimates your season for you. If you already know your season, choose it from the menu above the questions to jump straight to your shades.',
    },
    {
      q: 'What lipstick color suits everyone?',
      a: 'No shade suits literally everyone, but a soft rose or a true red with no strong orange or blue lean works on many people, because it sits between warm and cool. Adjust the depth to your skin: lighter for fair skin, deeper for deep skin.',
    },
  ],
};

const FOUNDATION = {
  heading: 'How to Choose the Right Foundation Undertone',
  blocks: [
    {
      type: 'p',
      text: 'Most foundation mistakes are not about the shade being too light or too dark. They are about the undertone. A foundation with the wrong base can be exactly your depth and still look orange, pink, ashy or grey. Get the undertone right first, then fine-tune the depth.',
    },
    { type: 'h3', text: 'How the foundation undertone finder works' },
    {
      type: 'p',
      text: 'The finder scores four signs: vein color, which metal suits you, how wrong foundations look on you, and your skin in daylight. The question about wrong foundations counts double, because it is the most direct sign: if yellow foundations look orange on you, you are probably cooler; if pink ones look ashy, you are probably warmer; if every shade looks grey or green, you may be olive. Your depth answer is used to pick the reference tones to swatch.',
    },
    {
      type: 'table',
      caption: 'Foundation undertones, labels and signs',
      head: ['Undertone', 'Labels many brands use', 'Wrong shades look', 'Usually suits'],
      rows: [
        ['Warm', 'W, Y, G, sometimes P (peach)', 'Pink, ashy or grey', 'Golden, yellow, peach bases'],
        ['Cool', 'C, R, P (pink)', 'Orange, yellow, sallow', 'Pink, rosy, red bases'],
        ['Neutral', 'N, beige', 'Slightly pink or slightly yellow', 'Balanced bases'],
        ['Olive', 'O, or neutral-warm with green', 'Grey in pink shades, orange in yellow ones', 'Olive or green-yellow bases'],
      ],
    },
    {
      type: 'p',
      text: 'These letters are a convention, not a standard. Some brands use P for pink and others for peach, and some use numbers only. Always check the brand\'s own shade guide.',
    },
    { type: 'h3', text: 'How to swatch foundation properly' },
    {
      type: 'ol',
      items: [
        'Choose three shades: your best guess and the shades either side of it.',
        'Swatch them in stripes on your jawline, running down onto your neck. Your hand and wrist are usually a different color from your face.',
        'Wait about 10 minutes. Many foundations darken or warm up slightly as they dry (oxidize).',
        'Check in daylight by a window. The stripe that disappears is your match; the one you can see is wrong.',
        'If you are between two shades, buy both and mix them, or use the lighter one with a little bronzer.',
      ],
    },
    { type: 'h3', text: 'Special cases' },
    {
      type: 'ul',
      items: [
        '**Olive skin:** if there is no olive range, a neutral or warm shade with a yellow-green base is usually closer than a pink one. A thin layer of a peach color corrector can also help.',
        '**Redness or rosacea:** your skin may look cool on the surface but have a warm undertone. Check your neck and wrist, and consider a green corrector rather than a pink-based foundation.',
        '**Deep skin:** look for ranges with several undertones at each depth. Many deep skin tones have red or golden undertones that a single "deep" shade misses.',
        '**Tans:** your undertone stays the same, but your depth changes. Keep a lighter and a deeper shade and mix them as your skin changes.',
      ],
    },
    {
      type: 'p',
      text: 'Want to go deeper? Take the full [undertone test](/undertone-test), see the [warm vs cool undertones guide](/guides/warm-vs-cool-undertones), and then find your [lipstick shades](/lipstick-color-finder) with the same undertone.',
    },
  ],
  faqs: [
    {
      q: 'Can I wear a neutral foundation if I am warm or cool?',
      a: 'Often yes, especially if you are only slightly warm or cool. Neutral shades are a safe middle ground. If a neutral still looks a little pink or a little yellow on you, move one step toward your undertone.',
    },
    {
      q: 'Why does my foundation look fine in the shop but wrong outside?',
      a: 'Shop lighting is usually warm or very bright, and it hides mismatches. Always check your swatches in daylight before you buy.',
    },
  ],
};

const HAIR = {
  heading: 'Choosing a Hair Color for Your Skin Tone: The Full Guide',
  blocks: [
    {
      type: 'p',
      text: 'Hair frames your face, so it changes how your skin looks more than any single piece of clothing. The right hair color can make your skin look clearer and brighter with less makeup; the wrong one can make you look tired or washed out, even if it is a beautiful shade on someone else.',
    },
    { type: 'h3', text: 'How the hair color finder works' },
    {
      type: 'p',
      text: 'The finder estimates your color season from your undertone, depth and contrast, and shows the hair colors that suit that season. Your natural hair color and how big a change you want are used for the tips: for example, it warns you when the suggested shades are far from your natural color and would need bleach or a big change in contrast.',
    },
    { type: 'h3', text: 'The two rules that matter most' },
    {
      type: 'ol',
      items: [
        '**Match the tone to your undertone.** Warm skin suits golden, honey, copper and warm brown. Cool skin suits ash, beige, cool brown and blue-black. Neutral skin can wear soft shades from both, like bronde or mushroom brown.',
        '**Stay close to your natural depth.** Within one or two levels of your natural color is the safest change. Big jumps change your contrast, which changes how every color you wear looks on you.',
      ],
    },
    {
      type: 'table',
      caption: 'Best hair colors by color season',
      head: ['Season', 'Flattering hair colors', 'Be careful with'],
      rows: [
        ['Light Spring', 'Golden, honey and strawberry blonde', 'Ash blonde, very dark brown'],
        ['Warm Spring', 'Honey, caramel, light copper', 'Ash tones, blue-black'],
        ['Bright Spring', 'Golden brown, warm chestnut, bright copper', 'Flat ash brown'],
        ['Light Summer', 'Ash, beige and pearl blonde', 'Brassy gold, bright copper'],
        ['Cool Summer', 'Cool light brown, ash brown', 'Golden copper, orange-red'],
        ['Soft Summer', 'Mushroom brown, soft ash brown, bronde', 'Jet black, bright copper'],
        ['Soft Autumn', 'Soft caramel, bronde, muted copper', 'Jet black, icy blonde'],
        ['Warm Autumn', 'Auburn, chestnut, deep copper', 'Icy blonde, ash tones'],
        ['Deep Autumn', 'Dark chocolate, mahogany, espresso', 'Platinum, ash blonde'],
        ['Deep Winter', 'Blue-black, espresso, black cherry', 'Golden blonde, copper'],
        ['Cool Winter', 'Cool dark brown, soft black, ash brown', 'Golden, honey tones'],
        ['Bright Winter', 'Jet black, blue-black, dark espresso', 'Muted bronde, golden blonde'],
      ],
    },
    { type: 'h3', text: 'Highlights, balayage and grey hair' },
    {
      type: 'ul',
      items: [
        '**Highlights and balayage** are the gentlest way to try a new tone, because your natural color stays at the root. Keep the highlights in your season\'s tone: golden for warm, beige or ash for cool.',
        '**Lowlights** add depth without a full dark dye, which suits soft seasons who want more definition.',
        '**Grey and silver hair** is naturally cool. Cool seasons often look striking with it; warm seasons may prefer to blend grey with warm beige or honey highlights.',
      ],
    },
    { type: 'h3', text: 'Before a big change' },
    {
      type: 'p',
      text: 'Show your colorist the swatches from your result, bring photos of the tone you want in daylight, and ask for a strand test. Dye looks different on every base color, and lightening dark hair usually needs bleach and more upkeep. For the clothing colors that go with your new hair, see the [seasonal color palettes](/seasonal-color-palettes) and the full [hair color guide for each season](/guides/best-hair-colors-for-each-season).',
    },
  ],
  faqs: [
    {
      q: 'What hair color makes you look younger?',
      a: 'Usually a shade one or two levels lighter than your natural color, in a tone that matches your undertone, with soft dimension rather than one flat color. Very dark, flat colors can emphasize shadows and fine lines on many people.',
    },
    {
      q: 'Should I choose hair color by my eye color?',
      a: 'Eye color helps, but undertone and contrast matter more. Warm hazel or golden-green eyes often point to warm hair colors, and grey, blue or cool brown eyes to cool ones. The finder uses your overall coloring rather than eye color alone.',
    },
  ],
};

const JEWELRY = {
  heading: 'Gold, Silver or Rose Gold: How to Choose Your Metal',
  blocks: [
    {
      type: 'p',
      text: 'Jewelry sits right on your skin, so it reflects light and color onto your face. Gold reflects warm, yellow light and silver reflects cool, bluish light. When the metal matches your undertone, your skin looks clearer and more even; when it clashes, skin can look sallow or pale.',
    },
    { type: 'h3', text: 'How this jewelry test works' },
    {
      type: 'p',
      text: 'The test reads six undertone signs: veins, white or cream, how you tan, your skin in daylight, your natural hair and your eyes. On purpose, it does not ask which metal you think looks better, because that is the question you want answered. Veins count double. The total places you on a scale from gold to silver, and a score near the middle means both metals suit you.',
    },
    {
      type: 'table',
      caption: 'Which metals and gemstones suit each undertone',
      head: ['Result', 'Undertone', 'Metals', 'Gemstones'],
      rows: [
        ['Gold', 'Warm', 'Yellow gold, brass, bronze, copper', 'Citrine, amber, topaz, coral, peridot'],
        ['Silver', 'Cool', 'Silver, white gold, platinum', 'Sapphire, amethyst, aquamarine, ruby'],
        ['Both', 'Neutral', 'Rose gold, mixed metals', 'Rose quartz, jade, garnet, pearl'],
      ],
    },
    { type: 'h3', text: 'The mirror test' },
    {
      type: 'ol',
      items: [
        'Stand by a window in daylight with a bare face.',
        'Hold a gold piece under your chin, then a silver one. Fabric works too: gold and silver lamé or foil.',
        'Look at your skin, not the jewelry. The right metal makes your skin look smoother and your eyes brighter; the wrong one makes shadows and redness stand out.',
      ],
    },
    { type: 'h3', text: 'Metals by color season' },
    {
      type: 'ul',
      items: [
        '**Spring:** shiny yellow gold and light rose gold.',
        '**Summer:** soft silver, white gold and brushed or matte finishes.',
        '**Autumn:** antique and brushed gold, bronze and copper.',
        '**Winter:** bright silver, platinum and high-shine white gold.',
        '**Soft seasons** (Soft Summer, Soft Autumn) look best in brushed, matte or rose gold rather than very shiny metal.',
      ],
    },
    { type: 'h3', text: 'If you love the "wrong" metal' },
    {
      type: 'p',
      text: 'Wear it. Undertone is a guide, not a rule. Choose a finish that suits you (brushed silver for warm skin, rose gold for cool skin), wear it a little further from your face, as rings or bracelets, or mix both metals in one piece. For the full explanation, read the [gold vs silver jewelry guide](/guides/gold-vs-silver-jewelry-undertone), and use the [undertone test](/undertone-test) to double-check your result.',
    },
  ],
  faqs: [
    {
      q: 'Is it okay to mix gold and silver jewelry?',
      a: 'Yes. Mixed metals are common and look intentional when you repeat each metal at least twice, or wear one piece that combines both. Neutral undertones can mix freely; warm or cool undertones can keep their best metal closest to the face.',
    },
    {
      q: 'Does pearl jewelry suit warm or cool skin?',
      a: 'Both. White and silvery pearls suit cool undertones, while cream, golden and peach pearls suit warm undertones.',
    },
  ],
};

export const NEW_TOOL_GUIDES = {
  '/lipstick-color-finder': LIPSTICK,
  '/foundation-undertone-finder': FOUNDATION,
  '/hair-color-finder': HAIR,
  '/gold-or-silver-jewelry-test': JEWELRY,
};
