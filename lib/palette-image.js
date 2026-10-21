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
  const name = guide.title.split(':')[0].trim(); // e.g. "Soft Summer Color Palette"
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
