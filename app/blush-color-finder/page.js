import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import SeasonShadeFinder from '@/components/SeasonShadeFinder';

// Tool page for "blush color finder" / "what blush color suits me".

const PATH = '/blush-color-finder';
const TITLE = 'Blush Color Finder: What Blush Color Suits Me? (Free Quiz)';
const DESCRIPTION =
  'Free blush color finder: answer 4 quick questions to find the blush shades that suit your skin tone and color season, with hex codes, the best finish and placement tips.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['blush color finder', 'what blush color suits me', 'blush shade finder', 'best blush for my skin tone', 'blush for warm undertones', 'blush for cool undertones', 'blush color quiz'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Blush Colors by Undertone',
  sub: 'Match the blush to the natural flush of your skin.',
  items: [
    { name: 'Warm undertone', swatches: ['#F2A07B', '#F27E63', '#C06A4A', '#B0603E'], text: 'Peach, coral, apricot, terracotta and cinnamon.', href: '/guides/warm-spring-makeup-palette', link: 'Warm makeup palette' },
    { name: 'Cool undertone', swatches: ['#EBA8B5', '#D98A9E', '#B3245A', '#9C2E55'], text: 'Soft pink, rose, raspberry and berry.', href: '/guides/cool-summer-makeup-palette', link: 'Cool makeup palette' },
    { name: 'Neutral undertone', swatches: ['#C99098', '#E0A98E', '#C98A7E', '#B98390'], text: 'Dusty rose, soft peach and warm rose.', href: '/guides/makeup-colors-for-your-color-season', link: 'Makeup colors by season' },
  ],
};

const FAQS = [
  { q: 'How do I know what blush color suits me?', a: 'Pinch your cheek gently and look at the natural flush: a blush close to that color, adjusted for your undertone, will look the most natural. Warm undertones suit peach, coral and terracotta; cool undertones suit pink, rose and berry.' },
  { q: 'What blush color suits everyone?', a: 'A soft rose-peach sits between warm and cool, so it works on many people. Choose a lighter version for fair skin and a deeper, richer version for deep skin.' },
  { q: 'What blush works on dark skin?', a: 'Rich, saturated shades: brick, deep berry, plum, warm terracotta and bright fuchsia. Very pale pastels can look ashy on deep skin.' },
  { q: 'Are the hex codes exact blush shades?', a: 'No. They are reference colors to compare products against. Blush looks different on every skin tone, so swatch on your cheek in daylight.' },
];

export default function BlushFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Blush Color Finder"
      appName="Blush Color Finder"
      description={DESCRIPTION}
      eyebrow="🌷 Free blush color quiz"
      h1="Blush Color Finder:"
      h1Accent="What Blush Color Suits Me?"
      lead="Answer four quick questions to find your color season and the blush shades that look like your natural flush, with hex codes, the best finish and where to apply it."
      alt={<>Want matching lips too? Try the <Link href="/lipstick-color-finder">lipstick shade finder</Link>.</>}
      tool={<SeasonShadeFinder kind="blush" id="blush-finder" heading="Find Your Blush Shades" />}
      cards={CARDS}
      prose={{
        heading: 'Why Blush Color Matters',
        body: (
          <p>
            Blush adds warmth and life to the center of your face. The right shade makes you look
            rested and healthy; the wrong one can look like a stripe of color sitting on top of
            your skin. Check your undertone with the <Link href="/undertone-test">undertone test</Link>{' '}
            if you are not sure which side you are on.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Blush Color Finder FAQ"
      idPrefix="bcf"
    />
  );
}
