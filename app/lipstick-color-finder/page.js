import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import LipstickFinder from '@/components/LipstickFinder';

// Tool page for "what lipstick color suits me" / "lipstick shade finder".
// Shades come from lib/shade-data.js and match the season makeup palettes.

const PATH = '/lipstick-color-finder';
const TITLE = 'Lipstick Shade Finder: What Lipstick Color Suits Me? (Free Quiz)';
const DESCRIPTION =
  'Free lipstick shade finder: answer 5 quick questions to find the nude, everyday and bold lipstick colors that suit your skin tone and color season, with hex codes.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'lipstick shade finder',
    'what lipstick color suits me',
    'lipstick color finder',
    'best lipstick for my skin tone',
    'lipstick for warm undertones',
    'lipstick for cool undertones',
    'lipstick color quiz',
    'nude lipstick for my skin tone',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Lipstick Colors by Undertone',
  sub: 'The quickest rule: match the base of the lipstick to the base of your skin.',
  items: [
    {
      name: 'Warm undertone',
      swatches: ['#E09A72', '#F27E63', '#B3563B', '#E5432F'],
      text: 'Peach, coral, terracotta, brick and orange-red. Look for lipsticks with a golden or orange base.',
      href: '/guides/warm-autumn-makeup-palette',
      link: 'Warm makeup palette',
    },
    {
      name: 'Cool undertone',
      swatches: ['#C08497', '#D47A95', '#B3446C', '#C0142E'],
      text: 'Mauve, rose, berry, raspberry and blue-red. Look for lipsticks with a pink or blue base.',
      href: '/guides/cool-summer-makeup-palette',
      link: 'Cool makeup palette',
    },
    {
      name: 'Neutral undertone',
      swatches: ['#B98A86', '#B5836A', '#9E5D72', '#A2485F'],
      text: 'Rose-beige, warm rose and soft berry. Shades that are neither very orange nor very blue are the easiest wins.',
      href: '/guides/makeup-colors-for-your-color-season',
      link: 'Makeup colors by season',
    },
  ],
};

const FAQS = [
  {
    q: 'How do I know what lipstick color suits me?',
    a: 'Start with your undertone. Warm undertones suit lipsticks with a golden or orange base, like coral and brick; cool undertones suit pink and blue-based shades, like rose and raspberry. Your depth and contrast then decide how light, deep or bright the shade should be. The finder above combines all three.',
  },
  {
    q: 'What is the most flattering nude lipstick?',
    a: 'A good nude is one or two shades deeper than your lips, not your skin, and has the same undertone as your skin. Warm skin suits peachy and caramel nudes, cool skin suits rosy and mauve nudes. A nude that matches your skin exactly tends to wash you out.',
  },
  {
    q: 'Which red lipstick is best for my skin tone?',
    a: 'Warm undertones look best in orange-reds and brick reds; cool undertones in blue-reds and cherry. If you are neutral, a true red with no strong orange or blue lean is a safe choice. Deep skin can carry deeper reds, and bright, high-contrast features can carry vivid ones.',
  },
  {
    q: 'What lipstick colors suit brown or dark skin?',
    a: 'Deep, rich shades usually look most natural: brick, berry, plum, chocolate nude and deep red. Very pale or frosted shades can look chalky. See the guide to the best lipstick colors for brown skin for more ideas.',
  },
  {
    q: 'Are the hex codes exact lipstick shades?',
    a: 'No. They are reference swatches to compare products against. Lipstick looks different on every pair of lips and in every light, so always test in daylight before you buy.',
  },
];

export default function LipstickFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Lipstick Shade Finder"
      appName="Lipstick Shade Finder"
      description={DESCRIPTION}
      eyebrow="💄 Free lipstick color quiz"
      h1="Lipstick Shade Finder:"
      h1Accent="What Lipstick Color Suits Me?"
      lead="Answer five quick questions to find your color season and the nude, everyday and bold lipstick shades that flatter it, with hex codes you can compare when you shop."
      alt={
        <>
          Want your full color palette too? <Link href="/#quiz">Try the free photo color analysis</Link>.
        </>
      }
      tool={<LipstickFinder />}
      cards={CARDS}
      prose={{
        heading: 'How to Choose a Lipstick Color That Suits You',
        body: (
          <>
            <p>
              Lipstick sits right next to your skin, eyes and teeth, so its undertone matters
              more than almost any other makeup. The wrong base can make teeth look yellow or skin
              look tired; the right one makes your whole face look brighter.
            </p>
            <p>
              Test in daylight near a window, on bare lips, and look at your whole face rather
              than just your mouth. If you are not sure of your undertone, take the{' '}
              <Link href="/undertone-test">undertone test</Link> first, then see the complete{' '}
              <Link href="/guides/makeup-colors-for-your-color-season">makeup colors for your season</Link>{' '}
              and your season&apos;s blush and eyeshadow in the{' '}
              <Link href="/seasonal-color-palettes">12 seasonal color palettes</Link>.
            </p>
          </>
        ),
      }}
      faqs={FAQS}
      faqHeading="Lipstick Shade Finder FAQ"
      idPrefix="lsf"
    />
  );
}
