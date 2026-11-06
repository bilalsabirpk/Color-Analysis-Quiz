import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import SeasonShadeFinder from '@/components/SeasonShadeFinder';

// Tool page for "eyeshadow color finder" / "what eyeshadow colors suit me".

const PATH = '/eyeshadow-color-finder';
const TITLE = 'Eyeshadow Color Finder: What Eyeshadow Colors Suit Me? (Free)';
const DESCRIPTION =
  'Free eyeshadow color finder: answer 4 quick questions to find the eyeshadow neutrals, accent colors and eyeliner that suit your skin tone and color season, with hex codes.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['eyeshadow color finder', 'what eyeshadow colors suit me', 'eyeshadow shade finder', 'best eyeshadow for my skin tone', 'eyeshadow for my color season', 'eyeshadow color quiz'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Eyeshadow by Season Family',
  sub: 'Neutrals for every day, accents to make your eyes stand out.',
  items: [
    { name: 'Spring', swatches: ['#F3E2C3', '#C9995F', '#F2A988', '#2EA8A0'], text: 'Cream, camel and golden beige with peach, turquoise and warm green.' },
    { name: 'Summer', swatches: ['#D2B5AC', '#9C8C88', '#B39CD0', '#7E92A8'], text: 'Taupe and rose beige with lavender, grey-blue and dusty mauve.' },
    { name: 'Autumn', swatches: ['#C19A6B', '#9C6B30', '#6B7A2E', '#B5532A'], text: 'Camel, bronze and chocolate with olive, copper and deep teal.' },
    { name: 'Winter', swatches: ['#8C7E7A', '#3E3E44', '#00704A', '#0F52BA'], text: 'Cool taupe and charcoal with emerald, sapphire and plum.' },
  ],
};

const FAQS = [
  { q: 'How do I choose eyeshadow colors?', a: 'Pick neutrals that match your undertone for the base and crease, then one accent color from your season that contrasts with your eye color. Warm seasons suit golden and bronze neutrals; cool seasons suit taupe and grey.' },
  { q: 'What eyeshadow makes brown eyes pop?', a: 'Almost any color works with brown eyes. Navy, emerald, plum and bronze are especially striking. Choose the version that matches your season: clear for bright seasons, muted for soft ones.' },
  { q: 'What eyeshadow makes blue eyes pop?', a: 'Warm shades opposite blue on the color wheel: copper, bronze, peach and warm brown. Soft seasons should choose muted coppers rather than bright orange.' },
  { q: 'Should eyeliner be black?', a: 'Only if your coloring is high contrast, like most Winters. Softer seasons usually look better in brown, grey, navy or olive liner.' },
];

export default function EyeshadowFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Eyeshadow Color Finder"
      appName="Eyeshadow Color Finder"
      description={DESCRIPTION}
      eyebrow="👁️ Free eyeshadow color quiz"
      h1="Eyeshadow Color Finder:"
      h1Accent="What Eyeshadow Colors Suit Me?"
      lead="Answer four quick questions to find your color season, the eyeshadow neutrals and accent colors that flatter you, and the best eyeliner color, all with hex codes."
      alt={<>Need the rest of your makeup? See <Link href="/guides/makeup-colors-for-your-color-season">makeup colors for your season</Link>.</>}
      tool={<SeasonShadeFinder kind="eyeshadow" id="eyeshadow-finder" heading="Find Your Eyeshadow Colors" />}
      cards={CARDS}
      prose={{
        heading: 'Neutrals First, Then Color',
        body: (
          <p>
            Most eye looks are built from neutrals. Get those right for your undertone and any
            accent will look intentional. If you are not sure of your season, start with the{' '}
            <Link href="/what-season-am-i">what season am I quiz</Link>, then come back with your
            result.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Eyeshadow Color Finder FAQ"
      idPrefix="esf"
    />
  );
}
