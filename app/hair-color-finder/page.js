import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import HairColorFinder from '@/components/HairColorFinder';

// Tool page for "what hair color suits me" / "hair color finder".
// The long-form guide is /guides/best-hair-colors-for-each-season.

const PATH = '/hair-color-finder';
const TITLE = 'Hair Color Finder: What Hair Color Suits Me? (Free Quiz)';
const DESCRIPTION =
  'Free hair color finder: answer 6 quick questions about your skin, eyes and natural hair to find the hair colors that suit your skin tone and color season, with hex codes.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'hair color finder',
    'what hair color suits me',
    'what hair color should i get',
    'best hair color for my skin tone',
    'hair color quiz',
    'hair color for warm skin tone',
    'hair color for cool skin tone',
    'hair color by season',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Hair Colors by Season',
  sub: 'Each season family has a hair color direction. Your sub-season fine-tunes it.',
  items: [
    { name: 'Spring', swatches: ['#E3B778', '#D19A55', '#C8743E', '#9C6B3F'], text: 'Golden blonde, honey, strawberry blonde, light copper and warm caramel.', href: '/guides/warm-spring-color-palette', link: 'Spring palettes' },
    { name: 'Summer', swatches: ['#CBBFA6', '#D4C2A0', '#8E7F72', '#7A6A5C'], text: 'Ash blonde, beige blonde, mushroom brown and cool light brown.', href: '/guides/soft-summer-color-palette', link: 'Summer palettes' },
    { name: 'Autumn', swatches: ['#7B3F2A', '#6F4026', '#9A4A26', '#3D261A'], text: 'Auburn, chestnut, deep copper, warm chocolate and golden brown.', href: '/guides/warm-autumn-color-palette', link: 'Autumn palettes' },
    { name: 'Winter', swatches: ['#121214', '#1B1B24', '#3A2E2A', '#3D1420'], text: 'Blue-black, espresso, cool dark brown and black cherry.', href: '/guides/deep-winter-color-palette', link: 'Winter palettes' },
  ],
};

const FAQS = [
  {
    q: 'How do I know what hair color suits me?',
    a: 'Match the tone of the hair color to your undertone and keep it close to your natural depth. Warm undertones suit golden, copper and caramel tones; cool undertones suit ash, beige and cool brown. The finder above uses your undertone, depth and contrast to suggest shades.',
  },
  {
    q: 'Should my hair color be warm or cool?',
    a: 'Usually the same as your skin undertone. Warm hair on cool skin can make you look flushed or sallow, and ash hair on warm skin can make you look tired. If you are neutral, you can wear soft shades from both sides, like bronde or mushroom brown.',
  },
  {
    q: 'How far can I go from my natural hair color?',
    a: 'Staying within two shades of your natural color is the safest choice, because it keeps your natural contrast. Big jumps, like very dark to platinum, change how every color you wear looks on you and need more upkeep.',
  },
  {
    q: 'What hair color suits brown or olive skin?',
    a: 'Rich browns, chocolate, caramel balayage, mahogany and soft black often look best on brown and olive skin. Very ashy or very pale blonde can look grey against the skin. See the olive skin color palette guide for more.',
  },
  {
    q: 'Is this a replacement for a colorist?',
    a: 'No. It gives you a direction and reference swatches. A colorist will check how dye takes on your hair and can do a strand test before a big change.',
  },
];

export default function HairColorFinderPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Hair Color Finder"
      appName="Hair Color Finder"
      description={DESCRIPTION}
      eyebrow="💇 Free hair color quiz"
      h1="Hair Color Finder:"
      h1Accent="What Hair Color Suits Me?"
      lead="Answer six quick questions to find your color season and the hair colors that flatter your skin, with hex codes you can show your colorist."
      alt={
        <>
          Want to read more first? See the <Link href="/guides/best-hair-colors-for-each-season">hair color guide for every season</Link>.
        </>
      }
      tool={<HairColorFinder />}
      cards={CARDS}
      prose={{
        heading: 'How to Choose a Hair Color for Your Skin Tone',
        body: (
          <>
            <p>
              Hair frames your face, so it changes how your skin looks more than any piece of
              clothing. A shade in your season&apos;s direction can make your skin look clearer
              with less makeup; a shade that fights it can make you look tired.
            </p>
            <p>
              Look at your result with your natural hair in daylight, then take the swatches to
              your colorist. If you are unsure about your undertone, the{' '}
              <Link href="/undertone-test">undertone test</Link> and the{' '}
              <Link href="/gold-or-silver-jewelry-test">gold or silver test</Link> are quick
              second checks, and the <Link href="/seasonal-color-palettes">seasonal color palettes</Link>{' '}
              show the clothing colors that go with your new hair.
            </p>
          </>
        ),
      }}
      faqs={FAQS}
      faqHeading="Hair Color Finder FAQ"
      idPrefix="hcf"
    />
  );
}
