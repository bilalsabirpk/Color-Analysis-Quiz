// Lipstick and hair color recommendations for each of the 12 seasons,
// used by components/LipstickFinder.jsx and components/HairColorFinder.jsx.
// Hex codes are reference swatches to compare products against, not exact
// product shades. Lipstick shades follow the season makeup palettes in
// lib/guides-data.js.

export const LIPSTICK = {
  'light-spring': {
    nude: [['Peach nude', '#E3A587'], ['Warm pink nude', '#E29A8C']],
    everyday: [['Light coral', '#F08A75'], ['Warm rose', '#E07A72']],
    bold: [['Coral pink', '#EF6F6C'], ['Light poppy', '#F25C54']],
    finish: 'Sheer, glossy and satin finishes. Heavy matte can look harsh on your light coloring.',
    avoid: 'Dark berry, brown and blue-red shades.',
  },
  'warm-spring': {
    nude: [['Golden peach', '#D9926E'], ['Apricot nude', '#E09A72']],
    everyday: [['Coral', '#F27E63'], ['Warm salmon', '#E8735A']],
    bold: [['Tomato red', '#E5432F'], ['Orange red', '#E8492B']],
    finish: 'Satin and gloss. A little shine keeps warm shades fresh.',
    avoid: 'Cool mauve, fuchsia and blue-based berry.',
  },
  'bright-spring': {
    nude: [['Peachy pink', '#E98A7E'], ['Warm rose', '#DB6F6A']],
    everyday: [['Coral pink', '#F2665E'], ['Watermelon', '#F25F6B']],
    bold: [['Clear red', '#E63946'], ['Hot coral', '#FF5A4E']],
    finish: 'Glossy or satin. Your coloring can carry saturated color.',
    avoid: 'Dusty, brownish nudes that look flat next to your bright features.',
  },
  'light-summer': {
    nude: [['Rosy nude', '#D9A0A0'], ['Soft pink', '#E3A3B0']],
    everyday: [['Rose pink', '#D9819A'], ['Light berry', '#C76B8A']],
    bold: [['Cool watermelon', '#D65A78'], ['Soft raspberry', '#C24D73']],
    finish: 'Sheer, satin or gloss. Keep the color light and cool.',
    avoid: 'Orange, brick and very dark wine shades.',
  },
  'cool-summer': {
    nude: [['Mauve nude', '#B98390'], ['Dusty rose', '#C08497']],
    everyday: [['Rose', '#D47A95'], ['Berry', '#A84D72']],
    bold: [['Raspberry', '#B3446C'], ['Soft blue-red', '#B22A4A']],
    finish: 'Satin and cream finishes. Soft matte works too.',
    avoid: 'Coral, orange-red and golden nudes.',
  },
  'soft-summer': {
    nude: [['Rose beige', '#B98A86'], ['Mauve', '#A87882']],
    everyday: [['Dusty rose', '#B97C85'], ['Soft berry', '#9E5D72']],
    bold: [['Plum rose', '#8E4A63'], ['Muted raspberry', '#A2485F']],
    finish: 'Satin and soft matte. Avoid very glossy, neon or frosted lips.',
    avoid: 'Bright fuchsia, orange and true red.',
  },
  'soft-autumn': {
    nude: [['Warm nude', '#B5836A'], ['Salmon', '#D08C78']],
    everyday: [['Soft terracotta', '#B5735A'], ['Peachy brown', '#A8715C']],
    bold: [['Muted brick', '#9A5B4A'], ['Warm rosewood', '#9C5A55']],
    finish: 'Satin and soft matte. Blended edges look better than a sharp line.',
    avoid: 'Bright fuchsia, icy pink and blue-red.',
  },
  'warm-autumn': {
    nude: [['Caramel nude', '#B07A5A'], ['Warm beige', '#C18A68']],
    everyday: [['Terracotta', '#B3563B'], ['Cinnamon', '#A0522D']],
    bold: [['Brick red', '#9C3A28'], ['Rust', '#B5432A']],
    finish: 'Matte, satin or a warm sheen. Golden shimmer suits you.',
    avoid: 'Cool pink, lavender-pink and blue-red.',
  },
  'deep-autumn': {
    nude: [['Chestnut nude', '#8E5A44'], ['Toffee', '#9A6248']],
    everyday: [['Brick', '#8C3B2B'], ['Warm berry', '#7E2F35']],
    bold: [['Deep tomato red', '#A4271F'], ['Burgundy brown', '#6B1E22']],
    finish: 'Matte and satin. Deep, rich color looks natural on you.',
    avoid: 'Pale pastel pinks and frosted nudes.',
  },
  'deep-winter': {
    nude: [['Cool cocoa', '#7A4E4E'], ['Deep rose', '#8C4A5A']],
    everyday: [['Berry', '#8A2346'], ['Plum', '#6B2050']],
    bold: [['Blue-red', '#A3122A'], ['Deep wine', '#6D0F2A']],
    finish: 'Matte or satin. A defined lip line works well for you.',
    avoid: 'Orange, peach and pale beige nudes.',
  },
  'cool-winter': {
    nude: [['Cool rose', '#B06A7E'], ['Mauve pink', '#A8607A']],
    everyday: [['Fuchsia berry', '#B3266A'], ['Raspberry', '#B3245A']],
    bold: [['True blue-red', '#C0142E'], ['Cool plum', '#6E1F5C']],
    finish: 'Satin, cream or matte. Clean, cool color suits you best.',
    avoid: 'Coral, orange and warm brown nudes.',
  },
  'bright-winter': {
    nude: [['Clear rose', '#C9607A'], ['Cool pink', '#D9587E']],
    everyday: [['Fuchsia', '#E0218A'], ['Hot pink', '#E8317A']],
    bold: [['Cherry red', '#D2042D'], ['Bright berry', '#B0105A']],
    finish: 'Gloss, satin or a vivid matte. Your features can carry strong color.',
    avoid: 'Muted, dusty or brownish shades that look dull on you.',
  },
};

export const HAIR = {
  'light-spring': {
    shades: [['Golden blonde', '#E3B778'], ['Strawberry blonde', '#E0A070'], ['Honey blonde', '#D9A35E'], ['Light golden brown', '#B7895A'], ['Butter highlights', '#EED39A']],
    avoid: 'Ash blonde, platinum and very dark brown or black.',
  },
  'warm-spring': {
    shades: [['Honey', '#D19A55'], ['Caramel', '#B9814D'], ['Light copper', '#C8743E'], ['Golden brown', '#9C6B3F'], ['Warm strawberry', '#D78B5A']],
    avoid: 'Ash tones, cool platinum and blue-black.',
  },
  'bright-spring': {
    shades: [['Golden brown', '#8E5E35'], ['Warm chestnut', '#7B4A2D'], ['Bright copper', '#C2602E'], ['Honey highlights', '#D9A35E'], ['Rich caramel', '#B07A45']],
    avoid: 'Flat ash brown and muted, greyish shades.',
  },
  'light-summer': {
    shades: [['Ash blonde', '#CBBFA6'], ['Beige blonde', '#D4C2A0'], ['Pearl blonde', '#E2D8C4'], ['Light ash brown', '#A08C74'], ['Champagne', '#DCCBA8']],
    avoid: 'Brassy gold, bright copper and very dark shades.',
  },
  'cool-summer': {
    shades: [['Cool light brown', '#8A735E'], ['Ash brown', '#7A6A5C'], ['Mushroom brown', '#8E7F72'], ['Soft ash highlights', '#B8A892'], ['Cool mocha', '#6E5A4E']],
    avoid: 'Golden copper, orange-red and brassy highlights.',
  },
  'soft-summer': {
    shades: [['Mushroom brown', '#8E7F72'], ['Soft ash brown', '#7E6F62'], ['Bronde', '#A08A6E'], ['Muted dark blonde', '#A89478'], ['Cool taupe', '#8C7C6E']],
    avoid: 'Jet black, bright copper and high-contrast highlights.',
  },
  'soft-autumn': {
    shades: [['Soft caramel', '#A8825C'], ['Bronde', '#A08A6E'], ['Golden light brown', '#9A7350'], ['Muted copper', '#A86A48'], ['Warm beige highlights', '#C9A57C']],
    avoid: 'Jet black, icy blonde and bright red.',
  },
  'warm-autumn': {
    shades: [['Auburn', '#7B3F2A'], ['Chestnut', '#6F4026'], ['Deep copper', '#9A4A26'], ['Golden brown', '#8B5A2B'], ['Warm chocolate', '#5A3522']],
    avoid: 'Icy blonde, ash tones and flat blue-black.',
  },
  'deep-autumn': {
    shades: [['Dark chocolate', '#3D261A'], ['Mahogany', '#5A2A1E'], ['Deep auburn', '#6A2E1E'], ['Espresso', '#2E1F18'], ['Chestnut lowlights', '#5C3824']],
    avoid: 'Platinum, ash blonde and cool burgundy.',
  },
  'deep-winter': {
    shades: [['Blue-black', '#1B1B24'], ['Espresso', '#2B2320'], ['Cool dark brown', '#3A2E2A'], ['Black cherry', '#3D1420'], ['Dark ash brown', '#4A403B']],
    avoid: 'Golden blonde, copper and warm caramel highlights.',
  },
  'cool-winter': {
    shades: [['Cool dark brown', '#3A2E2A'], ['Soft black', '#262222'], ['Dark ash brown', '#4A403B'], ['Burgundy tint', '#5A1A2A'], ['Ash brown', '#5E5048']],
    avoid: 'Golden, copper and honey tones.',
  },
  'bright-winter': {
    shades: [['Jet black', '#121214'], ['Blue-black', '#1B1B24'], ['Dark espresso', '#2B2320'], ['Cool dark brown', '#3A2E2A'], ['Deep plum tint', '#3E1A33']],
    avoid: 'Muted bronde, golden blonde and warm caramel.',
  },
};

// Blush shades per season: [name, hex] plus finish and placement tips.
export const BLUSH = {
  'light-spring': { shades: [['Soft peach', '#F4B49A'], ['Warm pink', '#F2A08F'], ['Light coral', '#F08A75'], ['Apricot', '#F3A97F']], finish: 'Sheer cream or a satin powder. A soft glow suits light coloring.', avoid: 'Deep berry, brick and plum blush.' },
  'warm-spring': { shades: [['Peach', '#F2A07B'], ['Coral', '#F27E63'], ['Warm apricot', '#EE9466'], ['Golden peach', '#E8946E']], finish: 'Cream, satin or a light golden shimmer.', avoid: 'Cool pink, mauve and fuchsia blush.' },
  'bright-spring': { shades: [['Coral pink', '#F2756A'], ['Warm pink', '#F27A8A'], ['Clear peach', '#F79A7A'], ['Watermelon', '#F25F6B']], finish: 'Satin or a fresh, dewy cream. Clear color, not dusty.', avoid: 'Muddy brown and dusty rose blush.' },
  'light-summer': { shades: [['Soft pink', '#EBA8B5'], ['Cool rose', '#E59AAE'], ['Light berry', '#D98AA3'], ['Pale raspberry', '#E08FA5']], finish: 'Sheer powder or cream. Keep it light and blended.', avoid: 'Orange, peach and bronze blush.' },
  'cool-summer': { shades: [['Rose', '#D98A9E'], ['Cool pink', '#E08BA3'], ['Soft berry', '#C46F8C'], ['Mauve pink', '#C48297']], finish: 'Matte or satin powder.', avoid: 'Coral, peach and warm bronze.' },
  'soft-summer': { shades: [['Dusty rose', '#C99098'], ['Mauve', '#B98390'], ['Soft plum', '#A8768A'], ['Rose beige', '#C9A0A0']], finish: 'Matte or soft satin. Avoid glitter and strong shimmer.', avoid: 'Bright coral, neon pink and orange.' },
  'soft-autumn': { shades: [['Soft peach', '#E0A98E'], ['Muted apricot', '#C98B6B'], ['Warm rose', '#C98A7E'], ['Soft terracotta', '#B5735A']], finish: 'Matte or satin, blended softly.', avoid: 'Cool pink and bright fuchsia.' },
  'warm-autumn': { shades: [['Terracotta', '#C06A4A'], ['Burnt peach', '#D0805E'], ['Cinnamon', '#B0603E'], ['Warm bronze', '#A8714A']], finish: 'Matte or a warm golden sheen.', avoid: 'Icy pink and cool mauve.' },
  'deep-autumn': { shades: [['Brick', '#9C4A35'], ['Deep terracotta', '#A55A3E'], ['Warm berry', '#8E3E3E'], ['Spiced bronze', '#8B5A3C']], finish: 'Matte or satin. Rich color looks natural.', avoid: 'Pale pastel pink.' },
  'deep-winter': { shades: [['Deep berry', '#9C2E55'], ['Plum', '#7E2E5A'], ['Cool raspberry', '#B03A62'], ['Wine', '#7A1F3D']], finish: 'Matte or satin.', avoid: 'Peach, orange and golden bronze.' },
  'cool-winter': { shades: [['Cool pink', '#D9508A'], ['Raspberry', '#B3245A'], ['Fuchsia rose', '#C93C7E'], ['Berry', '#9E2E5E']], finish: 'Satin or matte. Clean, cool color.', avoid: 'Coral, peach and warm bronze.' },
  'bright-winter': { shades: [['Fuchsia', '#E0218A'], ['Hot pink', '#E8478A'], ['Cool cherry', '#D2335A'], ['Bright berry', '#B0105A']], finish: 'Satin or a vivid cream. Use a light hand with very bright shades.', avoid: 'Dusty, brownish and muted shades.' },
};

// Eyeshadow per season: neutrals (everyday base), accents (color) and liner.
export const EYESHADOW = {
  'light-spring': { neutrals: [['Ivory', '#F6E7CF'], ['Light camel', '#D8B48A'], ['Golden beige', '#E2C29A']], accents: [['Peach', '#F2A988'], ['Aqua', '#7FCFC8'], ['Light periwinkle', '#9FB4E8']], liner: 'Soft brown or golden brown' },
  'warm-spring': { neutrals: [['Cream', '#F3E2C3'], ['Camel', '#C9995F'], ['Golden bronze', '#B5823F']], accents: [['Warm turquoise', '#2EA8A0'], ['Coral', '#F27E63'], ['Moss green', '#8AA04B']], liner: 'Warm brown or bronze' },
  'bright-spring': { neutrals: [['Warm beige', '#E3C3A0'], ['Golden brown', '#9C6B3F'], ['Champagne', '#EAD1A4']], accents: [['Turquoise', '#1FB5AD'], ['Bright violet', '#8E5BD9'], ['Kelly green', '#2EA44F']], liner: 'Dark brown or bright teal' },
  'light-summer': { neutrals: [['Soft white', '#F2EEEA'], ['Taupe', '#B5A79A'], ['Cool beige', '#D8C8BC']], accents: [['Lavender', '#B9A7D9'], ['Powder blue', '#A9C6E8'], ['Soft rose', '#E3A3B0']], liner: 'Soft grey or taupe' },
  'cool-summer': { neutrals: [['Rose beige', '#D2B5AC'], ['Cool taupe', '#9C8C88'], ['Soft grey', '#A8A8B0']], accents: [['Lilac', '#B39CD0'], ['Slate blue', '#6E82A8'], ['Berry', '#A84D72']], liner: 'Charcoal or navy' },
  'soft-summer': { neutrals: [['Mushroom', '#A89A8E'], ['Rose taupe', '#A88A88'], ['Soft grey-brown', '#8C7E78']], accents: [['Dusty mauve', '#A8899C'], ['Grey-blue', '#7E92A8'], ['Sage', '#9CAE99']], liner: 'Soft charcoal or grey-brown' },
  'soft-autumn': { neutrals: [['Warm beige', '#D9BFA0'], ['Soft bronze', '#A8835A'], ['Taupe brown', '#8E7A66']], accents: [['Olive', '#7D7A55'], ['Muted teal', '#5E8A86'], ['Soft copper', '#B57452']], liner: 'Soft brown or olive' },
  'warm-autumn': { neutrals: [['Camel', '#C19A6B'], ['Bronze', '#9C6B30'], ['Warm brown', '#7B5035']], accents: [['Olive green', '#6B7A2E'], ['Copper', '#B5532A'], ['Deep teal', '#2E6B6B']], liner: 'Chocolate brown or bronze' },
  'deep-autumn': { neutrals: [['Warm taupe', '#9C8068'], ['Chocolate', '#5A3522'], ['Deep bronze', '#7E5530']], accents: [['Forest green', '#2E5939'], ['Aubergine', '#5A2E40'], ['Rust', '#9C3F22']], liner: 'Espresso or deep olive' },
  'deep-winter': { neutrals: [['Cool taupe', '#8C7E7A'], ['Charcoal', '#3E3E44'], ['Deep plum-brown', '#4E2E36']], accents: [['Emerald', '#00704A'], ['Sapphire', '#0F52BA'], ['Plum', '#6B2050']], liner: 'Black or deep navy' },
  'cool-winter': { neutrals: [['Icy taupe', '#B8B0B0'], ['Cool grey', '#7E7E88'], ['Charcoal', '#3A3A42']], accents: [['Royal blue', '#2B4BA8'], ['Violet', '#6E3FA8'], ['Silver', '#C0C0C8']], liner: 'Black or charcoal' },
  'bright-winter': { neutrals: [['Pure white', '#F7F7F7'], ['Cool grey', '#8E8E98'], ['Black-brown', '#2B2320']], accents: [['Electric blue', '#1F5FE0'], ['Emerald', '#009B6E'], ['Fuchsia', '#E0218A']], liner: 'Black or bright navy' },
};
