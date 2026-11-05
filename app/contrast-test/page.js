import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import ContrastTest from '@/components/ContrastTest';

// Tool page for "personal contrast test" / "contrast level test".

const PATH = '/contrast-test';
const TITLE = 'Personal Contrast Test: Are You Low, Medium or High Contrast? (Free)';
const DESCRIPTION =
  'Free personal contrast test: answer 5 quick questions about your hair, skin and eyes to find your contrast level, the outfit color pairings that suit you and your likely seasons.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['personal contrast test', 'contrast level test', 'high contrast coloring', 'low contrast coloring', 'color contrast test', 'what is my contrast level', 'contrast color analysis'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Low, Medium and High Contrast',
  sub: 'Dress with the same amount of contrast as your face.',
  items: [
    { name: 'Low contrast', swatches: ['#C9A0A6', '#A89A8E', '#D9BFA0', '#B9D6F2'], text: 'Tonal outfits and soft combinations, such as taupe with dusty rose.' },
    { name: 'Medium contrast', swatches: ['#1B2A4A', '#D47A95', '#6B7A2E', '#F3E2C3'], text: 'Mid-dark with mid-light, such as navy with rose or olive with cream.' },
    { name: 'High contrast', swatches: ['#111111', '#F7F7F7', '#0F52BA', '#6D0F2A'], text: 'Very dark with very light, such as black with white.' },
  ],
};

const FAQS = [
  { q: 'What is personal contrast?', a: 'It is the difference in lightness between your hair, skin and eyes. Dark hair with fair skin is high contrast; hair, skin and eyes of similar depth are low contrast.' },
  { q: 'How do I know my contrast level?', a: 'Take a selfie in daylight and turn it black and white. Similar greys mean low contrast; a strong jump from light to dark means high contrast. The test above adds your eye color and eyebrows for a fuller answer.' },
  { q: 'Can deep skin be low contrast?', a: 'Yes. Deep skin with very dark hair and eyes can be low to medium contrast, because all the features are deep. Contrast is about the difference, not how dark you are.' },
];

export default function ContrastTestPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Contrast Level Test"
      appName="Personal Contrast Test"
      description={DESCRIPTION}
      eyebrow="🌗 Free contrast level test"
      h1="Personal Contrast Test:"
      h1Accent="Low, Medium or High Contrast?"
      lead="Answer five quick questions about your natural hair, skin and eyes to find your contrast level, the outfit color pairings that suit you and the seasons it points to."
      alt={<>Want your full season? <Link href="/#quiz">Try the free photo color analysis</Link>.</>}
      tool={<ContrastTest />}
      cards={CARDS}
      prose={{
        heading: 'Why Contrast Matters as Much as Color',
        body: (
          <p>
            Two people can wear the same colors and look completely different because their
            contrast is different. A high-contrast person in soft beige can look washed out; a
            low-contrast person in black and white can look overpowered. Use your result with
            the <Link href="/does-this-color-suit-me">color checker</Link> to plan outfits.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Contrast Test FAQ"
      idPrefix="ctt"
    />
  );
}
