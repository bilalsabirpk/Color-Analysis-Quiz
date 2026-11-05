import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import JewelryTest from '@/components/JewelryTest';

// Tool page for "gold or silver jewelry test" / "does gold or silver look
// better on me". The long-form guide is /guides/gold-vs-silver-jewelry-undertone.

const PATH = '/gold-or-silver-jewelry-test';
const TITLE = 'Gold or Silver Jewelry Test: Which Metal Suits My Skin Tone? (Free)';
const DESCRIPTION =
  'Free gold or silver jewelry test: answer 6 quick questions to find out if gold, silver or both suit your skin tone, plus the metals and gemstones to try.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'gold or silver jewelry test',
    'gold or silver quiz',
    'does gold or silver look better on me',
    'gold or silver for my skin tone',
    'jewelry for warm undertones',
    'jewelry for cool undertones',
    'rose gold skin tone',
    'which metal suits my skin',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Gold, Silver or Both?',
  sub: 'What each result means and what to wear.',
  items: [
    { name: 'Gold', swatches: ['#D4A017', '#B5832A', '#CD7F32', '#E4A11B'], text: 'Warm undertones. Yellow gold, brass and bronze, with citrine, amber or coral.' },
    { name: 'Silver', swatches: ['#C0C0C0', '#E5E4E2', '#8A9BB0', '#0F52BA'], text: 'Cool undertones. Silver, white gold and platinum, with sapphire, amethyst or pearl.' },
    { name: 'Both', swatches: ['#B76E79', '#D4A017', '#C0C0C0', '#E8C4C0'], text: 'Neutral undertones. Rose gold and mixed metals, with jade, garnet or rose quartz.' },
  ],
};

const FAQS = [
  {
    q: 'How do I know if gold or silver looks better on me?',
    a: 'Hold a gold and a silver piece under your chin in daylight, with a bare face. The metal that makes your skin look clearer and more even is yours. If the result is unclear, the test above checks six other undertone signs.',
  },
  {
    q: 'What does it mean if both gold and silver suit me?',
    a: 'You most likely have a neutral undertone. You can wear either metal, and rose gold and mixed-metal pieces are especially easy for you.',
  },
  {
    q: 'Does rose gold suit warm or cool skin?',
    a: 'Rose gold sits in between, so it suits most neutral undertones and many warm ones. Very cool undertones often prefer a pinker rose gold or white gold.',
  },
  {
    q: 'Can I wear silver if I have warm skin?',
    a: 'Yes. Your undertone is a guide, not a rule. If you love silver, choose brushed or oxidized silver, or mix it with gold so the warmer metal is near your face.',
  },
  {
    q: 'Does my jewelry metal match my color season?',
    a: 'Usually. Spring and Autumn suit gold, Summer and Winter suit silver. Soft seasons often look best in brushed or rose gold rather than shiny metal. The photo color analysis finds your full season.',
  },
];

export default function JewelryTestPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Gold or Silver Jewelry Test"
      appName="Gold or Silver Jewelry Test"
      description={DESCRIPTION}
      eyebrow="💍 Free jewelry metal test"
      h1="Gold or Silver Jewelry Test:"
      h1Accent="Which Metal Suits My Skin Tone?"
      lead="Answer six quick questions about your natural coloring to find out whether gold, silver or both flatter you, plus the metals and gemstones to try."
      alt={
        <>
          Want the full explanation? Read the <Link href="/guides/gold-vs-silver-jewelry-undertone">gold vs silver jewelry guide</Link>.
        </>
      }
      tool={<JewelryTest />}
      cards={CARDS}
      prose={{
        heading: 'Why Some Metals Suit You Better',
        body: (
          <>
            <p>
              Jewelry sits right against your skin, so it reflects color onto your face. Gold
              reflects warm, yellow light; silver reflects cool, bluish light. When the reflected
              color matches your undertone, your skin looks clearer and more even.
            </p>
            <p>
              Your jewelry metal is also a quick clue to your color season. Check it against the{' '}
              <Link href="/undertone-test">undertone test</Link>, then find your season with the{' '}
              <Link href="/what-season-am-i">what season am I quiz</Link> and pair your metal with
              colors from the <Link href="/seasonal-color-palettes">12 seasonal color palettes</Link>.
            </p>
          </>
        ),
      }}
      faqs={FAQS}
      faqHeading="Gold or Silver Jewelry FAQ"
      idPrefix="gst"
    />
  );
}
