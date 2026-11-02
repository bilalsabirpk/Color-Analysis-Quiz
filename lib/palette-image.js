import { GUIDES, getGuide } from '@/lib/guides-data';

// One saveable palette image per guide that has a hex palette block
// (the 12 sub-season guides). Served at /images/palettes/<slug>.png.

export function getPaletteBlock(guide) {
  return guide?.body?.find((b) => b.type === 'palette') || null;
}

export function paletteImagePath(slug) {
  return `/images/palettes/${slug}.png`;
}

export function getPaletteImage(guide) {
  if (!getPaletteBlock(guide)) return null;
  const name = guide.imageTitle ? `${guide.imageTitle} Color Palette` : guide.title.split(':')[0].trim(); // e.g. "Soft Summer Color Palette"
  return {
    src: paletteImagePath(guide.slug),
    alt: `${name} chart with 12 swatches, color names and hex codes`,
    width: 1000,
    height: 1500,
  };
}

export function guidesWithPaletteImage() {
  return GUIDES.filter((g) => getPaletteBlock(g));
}

export { getGuide };

// ---- Outfit combination image (second Pinterest design) ----
// Built from the guide's own "<Season> outfit color combinations" list,
// e.g. "Taupe with dusty rose: soft, tonal and very flattering…".

const EXTRA_HEX = { 'warm ivory': '#FFF1D6' };

function cleanName(s) {
  return s.trim().toLowerCase().replace(/^an? /, '').replace(/ accent$/, '');
}

export function getOutfitCombos(guide) {
  const palette = getPaletteBlock(guide);
  if (!palette) return [];
  const byName = Object.fromEntries(palette.colors.map((c) => [c.name.toLowerCase(), c]));
  const i = guide.body.findIndex((b) => b.type === 'h2' && /outfit color combinations$/i.test(b.text));
  const list = i >= 0 ? guide.body[i + 1] : null;
  if (!list || list.type !== 'ul') return [];
  return list.items
    .map((item) => {
      const [pair, ...rest] = item.split(':');
      const colors = pair
        .split(/\s+with\s+|\s+and\s+/i)
        .map(cleanName)
        .map((n) => {
          const c = byName[n];
          const hex = c?.hex || EXTRA_HEX[n];
          return hex ? { name: c?.name || n.replace(/^./, (m) => m.toUpperCase()), hex } : null;
        });
      if (colors.some((c) => !c)) return null;
      return { colors, tip: rest.join(':').trim().replace(/\.$/, '').replace(/^./, (m) => m.toUpperCase()) };
    })
    .filter(Boolean);
}

// Big heading on the Pinterest images, e.g. "Soft Summer" or "Hijab".
export function imageHeading(guide) {
  return guide.imageTitle || guide.title.split(' Color Palette')[0];
}

export function outfitImagePath(slug) {
  return `/images/outfits/${slug}.png`;
}

export function getOutfitImage(guide) {
  if (getOutfitCombos(guide).length < 3) return null;
  const season = imageHeading(guide);
  return {
    src: outfitImagePath(guide.slug),
    alt: `${season} outfit color combinations: ${getOutfitCombos(guide)
      .map((c) => c.colors.map((x) => x.name.toLowerCase()).join(' and '))
      .join('; ')}`,
    width: 1000,
    height: 1500,
  };
}

// ---- "A vs B" comparison image (third Pinterest design) ----
// Built from a guide's { type: 'compare' } block: two seasons, 6 colors each.

export function getCompareBlock(guide) {
  return guide?.body?.find((b) => b.type === 'compare') || null;
}

export function compareImagePath(slug) {
  return `/images/compare/${slug}.png`;
}

export function getCompareImage(guide) {
  const block = getCompareBlock(guide);
  if (!block) return null;
  const [a, b] = block.sides;
  return {
    src: compareImagePath(guide.slug),
    alt: `${a.name} vs ${b.name} palette comparison: ${a.colors.map((c) => c.name.toLowerCase()).join(', ')} versus ${b.colors
      .map((c) => c.name.toLowerCase())
      .join(', ')}`,
    width: 1000,
    height: 1500,
  };
}

export function guidesWithCompareImage() {
  return GUIDES.filter((g) => getCompareBlock(g));
}
