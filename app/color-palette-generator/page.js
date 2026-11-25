import { Suspense } from 'react';
import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import { getGuide } from '@/lib/guides-data';
import ToolPage from '@/components/ToolPage';
import PaletteGenerator from '@/components/PaletteGenerator';

// Tool page for "color palette generator" searches: random palettes, palettes
// from one color, and palettes from the 12 seasonal palettes (read from the
// season guides so the colors never drift). /color-harmony-generator stays
// the page for single-color harmony schemes.

const PATH = '/color-palette-generator';
const TITLE = 'Color Palette Generator: Free Palettes with Hex Codes';
const DESCRIPTION =
  'Free color palette generator: create random palettes, palettes from one color or from your color season. Lock colors, copy hex codes and download a PNG.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'color palette generator',
    'colour palette generator',
    'color palettes generator',
    'palette generator',
    'color scheme generator',
    'random color palette generator',
    'color palette maker',
    'color palette creator',
    'hex color palette generator',
    'color palette from one color',
    'seasonal color palette generator',
    'personal color palette generator',
    'outfit color palette generator',
    'color palette ideas',
    'aesthetic color palette generator',
    'color palette picker',
    'random color generator',
    'color scheme maker',
    'color palette for clothes',
    'wardrobe color palette generator',
    'brand color palette generator',
    'website color palette generator',
    'color palette with hex codes',
    'free color palette generator',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const SEASON_SLUGS = [
  'light-spring', 'warm-spring', 'bright-spring',
  'light-summer', 'cool-summer', 'soft-summer',
  'soft-autumn', 'warm-autumn', 'deep-autumn',
  'deep-winter', 'cool-winter', 'bright-winter',
];

function seasons() {
  return SEASON_SLUGS.map((slug) => {
    const g = getGuide(`${slug}-color-palette`);
    const palette = g?.body.find((b) => b.type === 'palette');
    return {
      slug,
      name: slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '),
      colors: (palette ? palette.colors : []).map((c) => ({ name: c.name, hex: c.hex })),
    };
  }).filter((s) => s.colors.length);
}

const IDEAS = [
  { name: 'Earthy neutrals', colors: ['#F3E9D2', '#C9A27E', '#8A9A5B', '#6B4F3A', '#2F2A26'], text: 'Cream, camel, sage and espresso. Calm and warm, close to Soft and Warm Autumn.' },
  { name: 'Soft pastels', colors: ['#F7D6E0', '#F2E8CF', '#CDE7F0', '#D9D2F0', '#BFD8B8'], text: 'Blush, butter, sky, lilac and mint. Light and gentle, close to Light Summer and Light Spring.' },
  { name: 'Jewel tones', colors: ['#0F52BA', '#00704A', '#9B1B30', '#5B2A86', '#E1AD01'], text: 'Sapphire, emerald, ruby, amethyst and gold. Rich and bold, close to Deep and Bright Winter.' },
  { name: 'Coastal blues', colors: ['#EAF4F8', '#A9CBE0', '#5B8DB8', '#2A7F8F', '#1F3A5F'], text: 'Mist, sky, denim, teal and navy. Cool and fresh, close to Cool Summer.' },
];

const CARDS = {
  heading: 'Color Palette Ideas to Start From',
  sub: 'Open any idea in the generator, lock the colors you love and generate the rest.',
  items: IDEAS.map((i) => ({
    name: i.name,
    swatches: i.colors,
    text: i.text,
    href: `${PATH}?c=${i.colors.map((c) => c.slice(1)).join('-')}#generator`,
    link: 'Open in the generator',
  })),
};

const FAQS = [
  {
    q: 'What is a color palette generator?',
    a: 'A color palette generator is a tool that creates a set of colors that work together, with their hex codes. This one can make random palettes, palettes built from one base color with a color-wheel scheme, or palettes taken from one of the 12 seasonal color palettes.',
  },
  {
    q: 'How do I generate a palette from one color?',
    a: 'Choose "From a color", pick your base color or type its hex code, then choose a scheme: analogous for calm palettes, monochromatic for one hue, complementary or split complementary for contrast, triadic or square for bold palettes.',
  },
  {
    q: 'How do I make a palette that suits me?',
    a: 'Choose "From a season" and pick your color season. Every color then comes from that seasonal palette, so it suits your coloring. If you do not know your season yet, try the free photo color analysis first.',
  },
  {
    q: 'How do I keep a color I like?',
    a: 'Click the lock icon on that color. Locked colors stay in place when you generate again, and only the unlocked ones change.',
  },
  {
    q: 'How many colors should a palette have?',
    a: 'Three to five colors is enough for most outfits, rooms and designs. A common rule is 60-30-10: one main color, one secondary color and one accent. Use six to eight colors for a full wardrobe or brand palette.',
  },
  {
    q: 'Can I save or share a palette?',
    a: 'Yes. Copy the hex codes, download the palette as a PNG image, or copy a link that opens the same palette in the generator. Nothing is stored on a server.',
  },
  {
    q: 'What does "closest color season" mean?',
    a: 'The tool compares every color in your palette with the 12 seasonal palettes and shows the season whose colors are closest. It describes the palette, not you: to find your own season, use the photo color analysis or the season quiz.',
  },
  {
    q: 'Is the color palette generator free?',
    a: 'Yes. It is free, needs no sign-up and runs in your browser. You can use the palettes for clothes, makeup, design or any personal or commercial project.',
  },
];

const PROSE = {
  heading: 'How to Use a Color Palette Generator',
  body: (
    <>
      <p>
        Start with the way you want to build the palette. <strong>Random</strong> is the fastest way to find
        ideas: each palette starts from a random color and follows a color-wheel scheme, so the colors still
        work together. <strong>From a color</strong> builds a palette around a color you already have, such as
        a dress, a sofa or a brand color. <strong>From a season</strong> only uses colors from one of the{' '}
        <Link href="/seasonal-color-palettes">12 seasonal color palettes</Link>, so the result suits that coloring.
      </p>
      <p>
        Lock the colors you like and generate again until the whole palette feels right. Then copy the hex
        codes, download the palette as an image or copy the link to share it.
      </p>
      <h3>Choosing a color scheme</h3>
      <ul>
        <li><strong>Analogous:</strong> neighbors on the color wheel. Calm and easy, great for tonal outfits and rooms.</li>
        <li><strong>Monochromatic:</strong> light and dark versions of one hue. Elegant and simple.</li>
        <li><strong>Complementary:</strong> opposite colors. High contrast; use one as the main color and one as an accent.</li>
        <li><strong>Split complementary:</strong> a softer version of complementary with three hues.</li>
        <li><strong>Triadic and square:</strong> three or four evenly spaced hues. Bold and playful.</li>
      </ul>
      <p>
        For single-color schemes side by side, try the <Link href="/color-harmony-generator">color harmony generator</Link>.
        New to palettes? Read <Link href="/guides/how-to-create-a-color-palette">how to create a color palette</Link> in
        5 steps, or start from these <Link href="/guides/color-palette-ideas">color palette ideas with hex codes</Link>.
      </p>
      <h3>Using your palette for clothes and makeup</h3>
      <p>
        Pick one main color for most of the outfit, a second color for one piece, and an accent for shoes, a
        bag or jewelry: the <Link href="/guides/60-30-10-color-rule">60-30-10 color rule</Link>. A palette from your own season will flatter your skin; see{' '}
        <Link href="/guides/outfit-color-combinations">outfit color combinations</Link> for ideas and the{' '}
        <Link href="/makeup-color-palettes">makeup color palettes</Link> for lipstick and blush shades by season.
      </p>
      <h3>Using your palette for design</h3>
      <p>
        For a website, poster or room, use the lightest color as the background, the darkest for text, and the
        brighter colors for buttons and highlights. Check that text has enough contrast with its background
        before you use it.
      </p>
    </>
  ),
};

export default function ColorPaletteGeneratorPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Color Palette Generator"
      appName="Color Palette Generator"
      appCategory="DesignApplication"
      description={DESCRIPTION}
      eyebrowIcon="palette"
      eyebrow="Free color palette generator"
      h1="Color Palette Generator:"
      h1Accent="Create Palettes with Hex Codes"
      lead="Make random palettes, build a palette from one color, or generate colors from your color season. Lock the colors you love, then copy the hex codes or download the palette."
      alt={
        <>
          Want colors that suit you? <Link href="/#quiz">Find your color season</Link> first, then pick
          &quot;From a season&quot;.
        </>
      }
      tool={
        <Suspense fallback={<div className="pg-fallback" aria-hidden="true" />}>
          <PaletteGenerator seasons={seasons()} />
        </Suspense>
      }
      cards={CARDS}
      prose={PROSE}
      faqs={FAQS}
      faqHeading="Color Palette Generator: Quick Answers"
      idPrefix="pg"
    />
  );
}
