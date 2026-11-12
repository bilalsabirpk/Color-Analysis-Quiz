import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import FoundationFinder from '@/components/FoundationFinder';

// Tool page for "foundation undertone test" / "what foundation undertone am I".
// Gives the undertone family and depth range, not brand shades.

const PATH = '/foundation-undertone-finder';
const TITLE = 'Foundation Undertone Finder: Warm, Cool or Olive? (Free)';
const DESCRIPTION =
  'Free foundation undertone test: 5 quick questions tell you if you need a warm, cool, neutral or olive foundation and which shade labels to look for.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'foundation undertone test',
    'foundation undertone finder',
    'what foundation undertone am i',
    'warm or cool foundation',
    'neutral undertone foundation',
    'olive undertone foundation',
    'how to choose foundation undertone',
    'foundation shade finder',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'The Four Foundation Undertones',
  sub: 'Most foundation ranges sort shades into these families.',
  items: [
    { name: 'Warm', swatches: ['#E8BF98', '#C99467', '#A8703F', '#6E4423'], text: 'Golden, yellow or peach base. Often labelled W, Y or G.' },
    { name: 'Cool', swatches: ['#E6BCAE', '#C8957F', '#A6705C', '#6B4236'], text: 'Pink, rosy or red base. Often labelled C, R or P.' },
    { name: 'Neutral', swatches: ['#E5BFA4', '#C69477', '#A47152', '#6A4430'], text: 'A balance of yellow and pink. Often labelled N.' },
    { name: 'Olive', swatches: ['#DCC098', '#B99A6E', '#957548', '#604A2E'], text: 'Neutral-warm with a green or grey cast. Labelled O in some ranges.' },
  ],
};

const FAQS = [
  {
    q: 'How do I know my foundation undertone?',
    a: 'Look at a few signs in daylight: vein color, whether gold or silver suits you, and how wrong foundations look on you. If yellow foundations look orange, you are probably cool; if pink ones look ashy, you are probably warm; if everything looks grey or green, you may be olive.',
  },
  {
    q: 'What do W, C, N and O mean on foundation?',
    a: 'Many brands use W for warm (yellow or golden), C for cool (pink), N for neutral and O for olive. Some use Y, G, R or P instead. Labels are not standard across brands, so always check the brand\'s own shade guide.',
  },
  {
    q: 'Why does my foundation look orange or grey?',
    a: 'Orange usually means the foundation is too warm or too deep for you, or it has oxidized. Grey or ashy usually means it is too cool or too light, which is common on olive and deeper skin. Try the next undertone family over before changing depth.',
  },
  {
    q: 'How do I test foundation shades?',
    a: 'Swatch three shades in stripes on your jawline, not your hand. Wait about 10 minutes for the color to settle, then check in daylight. The stripe that disappears into your skin is your match.',
  },
  {
    q: 'Is my foundation undertone the same as my color season?',
    a: 'They are related. A warm foundation undertone usually means a Spring or Autumn season, and cool means Summer or Winter. Your season also depends on depth and contrast, which the photo color analysis checks.',
  },
];

export default function FoundationFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Foundation Undertone Finder"
      appName="Foundation Undertone Finder"
      description={DESCRIPTION}
      eyebrow="🧴 Free foundation undertone test"
      h1="Foundation Undertone Finder:"
      h1Accent="Warm, Cool, Neutral or Olive?"
      lead="Answer five quick questions to find your foundation undertone and depth range, which shade labels to look for, and how to swatch so your foundation finally matches."
      alt={
        <>
          Want your best makeup colors too? See <Link href="/guides/makeup-colors-for-your-color-season">makeup colors for your season</Link>.
        </>
      }
      tool={<FoundationFinder />}
      cards={CARDS}
      prose={{
        heading: 'Undertone vs Shade: Why Both Matter',
        body: (
          <>
            <p>
              A foundation has a depth (how light or dark it is) and an undertone (the color
              underneath). Most mismatches are undertone problems: the depth is right but the
              foundation still looks orange, pink or grey. Fix the undertone first, then adjust
              the depth.
            </p>
            <p>
              Your skin undertone does not change with a tan, but your depth can, so many people
              need a lighter shade in winter and a deeper one in summer. For more ways to check
              your undertone, take the full <Link href="/undertone-test">undertone test</Link>{' '}
              or read the <Link href="/guides/warm-vs-cool-undertones">skin undertone guide</Link>.
              Olive skin has its own guide too: the{' '}
              <Link href="/guides/olive-skin-color-palette">olive skin color palette</Link>.
            </p>
          </>
        ),
      }}
      faqs={FAQS}
      faqHeading="Foundation Undertone FAQ"
      idPrefix="fuf"
    />
  );
}
