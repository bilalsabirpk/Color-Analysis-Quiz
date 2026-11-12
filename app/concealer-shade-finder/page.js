import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import ConcealerFinder from '@/components/ConcealerFinder';

// Tool page for "concealer shade finder" / "what color corrector do I need".

const PATH = '/concealer-shade-finder';
const TITLE = 'Concealer Shade Finder & Color Corrector Quiz (Free)';
const DESCRIPTION =
  'Free concealer shade finder: 6 quick questions reveal your concealer undertone, how light to go and which color corrector fixes dark circles or redness.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['concealer shade finder', 'what concealer shade am i', 'concealer color finder', 'color corrector for dark circles', 'what color corrector do i need', 'concealer for dark skin', 'concealer undertone'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Color Correctors at a Glance',
  sub: 'Opposite colors cancel each other out.',
  items: [
    { name: 'Peach and orange', swatches: ['#F2B8A0', '#F0A878', '#E8833A', '#D9622E'], text: 'Cancel blue, purple and brown dark circles. Go deeper and more orange as your skin gets deeper.' },
    { name: 'Green', swatches: ['#9CC9A0', '#B7D9B0'], text: 'Cancels redness from blemishes, rosacea or broken capillaries. Use only on the red area.' },
    { name: 'Yellow', swatches: ['#F2D98A', '#F2C98A'], text: 'Brightens mild purple shadows and dullness on fair to medium skin.' },
  ],
};

const FAQS = [
  { q: 'How do I find my concealer shade?', a: 'Start with your foundation undertone. Under the eyes, choose one shade lighter with the same undertone; for blemishes and dark spots, match your skin exactly. Swatch on your jaw or under your eye and check in daylight.' },
  { q: 'What color corrector do I need for dark circles?', a: 'For blue or purple circles, peach on fair skin, peach or orange on medium skin and orange-red on deep skin. Brown circles usually need a slightly more orange corrector than blue ones.' },
  { q: 'Do I need a color corrector?', a: 'Only if concealer alone does not hide the color, or you need a lot of concealer to cover it. Mild shadows usually only need a good concealer.' },
  { q: 'Why does my concealer look grey?', a: 'It is usually too light or too pink for you, which is common on medium and deep skin. Try a warmer, slightly deeper shade, or add a peach or orange corrector underneath.' },
];

export default function ConcealerFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Concealer Shade Finder"
      appName="Concealer Shade Finder"
      description={DESCRIPTION}
      eyebrow="✨ Free concealer shade finder"
      h1="Concealer Shade Finder:"
      h1Accent="Which Concealer and Corrector?"
      lead="Answer six quick questions to find your concealer undertone, whether to go lighter or match exactly, and which color corrector to use for dark circles, redness or dark spots."
      alt={<>Need your foundation first? Try the <Link href="/foundation-undertone-finder">foundation undertone finder</Link>.</>}
      tool={<ConcealerFinder />}
      cards={CARDS}
      prose={{
        heading: 'Concealer vs Corrector',
        body: (
          <p>
            A corrector changes the color of a dark area; a concealer then matches it to your
            skin. Using both, in thin layers, covers better than piling on concealer. Your
            concealer undertone should match your foundation, so check it with the{' '}
            <Link href="/undertone-test">undertone test</Link> if you are unsure.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Concealer Shade Finder FAQ"
      idPrefix="csf"
    />
  );
}
