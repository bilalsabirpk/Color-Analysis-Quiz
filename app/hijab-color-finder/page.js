import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import SeasonShadeFinder from '@/components/SeasonShadeFinder';

// Tool page for "hijab color finder" / "what hijab color suits me".
// The long-form guide is /guides/hijab-colors-for-skin-tone.

const PATH = '/hijab-color-finder';
const TITLE = 'Hijab Color Finder: What Hijab Color Suits My Skin Tone? (Free)';
const DESCRIPTION =
  'Free hijab color finder: answer 4 quick questions to find the everyday and statement hijab colors that suit your skin tone and color season, with hex codes and the best fabrics.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['hijab color finder', 'what hijab color suits me', 'hijab color for my skin tone', 'best hijab colors for skin tone', 'hijab colors for warm skin', 'hijab colors for cool skin', 'hijab color quiz', 'hijab colours for brown skin'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Hijab Colors by Undertone',
  sub: 'The color right around your face matters most.',
  items: [
    { name: 'Warm undertone', swatches: ['#F3E2C3', '#C19A6B', '#B5532A', '#2E6B6B'], text: 'Cream, camel, rust, mustard, olive and warm teal. Avoid stark white and icy pastels.' },
    { name: 'Cool undertone', swatches: ['#F7F7F7', '#8E9DB5', '#D47A95', '#0F52BA'], text: 'White, grey-blue, rose, raspberry, navy and sapphire. Avoid orange and golden yellow.' },
    { name: 'Neutral or olive', swatches: ['#C9A0A6', '#9CAE99', '#5E8A86', '#6D1F2A'], text: 'Dusty rose, sage, soft teal and burgundy. Soft mid-tones are the easiest wins.' },
  ],
};

const FAQS = [
  { q: 'How do I know what hijab color suits me?', a: 'Hold two hijabs under your chin in daylight, one warm (like cream or camel) and one cool (like white or grey). The one that makes your skin look smoother and your eyes clearer points to your undertone. The finder above narrows it down to your color season and its exact shades.' },
  { q: 'What hijab color suits every skin tone?', a: 'Soft mid-tones work on most people: dusty rose, soft teal, navy and taupe. They are not too warm or too cool, and not too light or too dark.' },
  { q: 'What hijab colors suit brown skin?', a: 'Rich jewel tones usually look best on brown skin: emerald, burgundy, deep teal, mustard, plum and navy. Very pale beige can wash brown skin out; a warmer camel or a deeper taupe is a better neutral.' },
  { q: 'Is black a good hijab color for everyone?', a: 'Black suits Winters and some deep skin tones very well. On light, soft or warm coloring it can look harsh and cast shadows under the eyes; charcoal, navy or chocolate are softer alternatives.' },
];

export default function HijabFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Hijab Color Finder"
      appName="Hijab Color Finder"
      description={DESCRIPTION}
      eyebrow="🧕 Free hijab color quiz"
      h1="Hijab Color Finder:"
      h1Accent="What Hijab Color Suits Me?"
      lead="Answer four quick questions to find your color season and the everyday and statement hijab colors that flatter your skin, with hex codes and the fabrics that suit you."
      alt={<>Want the full explanation? Read <Link href="/guides/hijab-colors-for-skin-tone">hijab colors for your skin tone</Link>.</>}
      tool={<SeasonShadeFinder kind="hijab" id="hijab-finder" heading="Find Your Hijab Colors" />}
      cards={CARDS}
      prose={{
        heading: 'Why Hijab Color Matters So Much',
        body: (
          <p>
            A hijab frames your whole face, so it reflects color onto your skin more than any
            other piece you wear. The right shade can make your skin look even with very little
            makeup. Build a small collection of everyday neutrals from your palette first, then
            add a few statement colors for special occasions. To check a hijab you want to buy,
            paste its color into the <Link href="/does-this-color-suit-me">color checker</Link>.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Hijab Color Finder FAQ"
      idPrefix="hjf"
    />
  );
}
