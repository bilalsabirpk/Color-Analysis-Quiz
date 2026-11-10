import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import { SUB_SEASON_GUIDES } from '@/lib/sub-season-guides';
import ToolPage from '@/components/ToolPage';
import ColorChecker from '@/components/ColorChecker';

// Tool page for "does this color suit me" / "color checker for my season".
// Palettes are read from the sub-season guides so they never drift.

const PATH = '/does-this-color-suit-me';
const TITLE = 'Does This Color Suit Me? Free Color Checker for Your Season';
const DESCRIPTION =
  'Free color checker: paste any hex code or pick a color, choose your season, and see if it suits you, plus the closest shades in your palette.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['does this color suit me', 'what colors suit me', 'color checker', 'does this color look good on me', 'color season checker', 'is this color in my palette', 'color suitability test'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

function palettes() {
  const out = {};
  SUB_SEASON_GUIDES.forEach((g) => {
    const slug = g.slug.replace(/-color-palette$/, '');
    const p = g.body.find((b) => b.type === 'palette');
    if (p) out[slug] = p.colors.map((c) => ({ name: c.name, hex: c.hex.toUpperCase() }));
  });
  return out;
}

const CARDS = {
  heading: 'What Makes a Color Suit You',
  sub: 'Every color has three qualities. The closer they are to your own, the better it looks.',
  items: [
    { name: 'Temperature', swatches: ['#F27E63', '#D4A017', '#0F52BA', '#D47A95'], text: 'Warm colors have yellow in them; cool colors have blue. Match your undertone.' },
    { name: 'Depth', swatches: ['#F4D9C6', '#C9A0A6', '#6D0F2A', '#1B2A4A'], text: 'Light seasons suit light colors; deep seasons suit deep ones.' },
    { name: 'Intensity', swatches: ['#E63946', '#E0218A', '#A89A8E', '#9C8A78'], text: 'Bright seasons suit clear, vivid colors; soft seasons suit muted, dusty ones.' },
  ],
};

const FAQS = [
  { q: 'How do I know if a color suits me?', a: 'Hold it under your chin in daylight. A color that suits you makes your skin look even and your eyes clearer; one that does not makes shadows, redness or dullness stand out. The checker above compares any color with your season palette to give you a quick answer.' },
  { q: 'What if I do not know my color season?', a: 'Take the free what season am I quiz or the photo color analysis first, then come back and choose your season in the checker.' },
  { q: 'Can I check a color from an online shop?', a: 'Yes. If the shop does not list a hex code, use a color picker on the product photo, picking an area without shadows or shine, and paste the code into the checker.' },
];

export default function ColorCheckerPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Does This Color Suit Me?"
      appName="Does This Color Suit Me? Color Checker"
      appCategory="DesignApplication"
      description={DESCRIPTION}
      eyebrow="✅ Free color checker"
      h1="Does This Color Suit Me?"
      h1Accent="Check Any Color Against Your Season"
      lead="Pick any color or paste a hex code from a shop, choose your color season, and see instantly whether it suits you, which palette shades are closest and which seasons it suits best."
      alt={<>Don&apos;t know your season? <Link href="/what-season-am-i">Take the six-question quiz</Link>.</>}
      tool={<ColorChecker palettes={palettes()} />}
      cards={CARDS}
      prose={{
        heading: 'Why Some Colors Look Better on You',
        body: (
          <p>
            Colors near your face reflect onto your skin. When a color shares your temperature,
            depth and intensity, it makes you look clear and healthy; when it clashes, it can
            make you look tired. See every season&apos;s shades in the{' '}
            <Link href="/seasonal-color-palettes">12 seasonal color palettes</Link>.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Color Checker FAQ"
      idPrefix="dcs"
    />
  );
}
