import Link from 'next/link';
import { OG_DEFAULTS } from '@/lib/site-config';
import ToolPage from '@/components/ToolPage';
import SkinToneAnalyzer from '@/components/SkinToneAnalyzer';

// Tool page for "skin tone analyzer" / "what is my skin tone".
// Photo analysis runs in the browser; nothing is uploaded.

const PATH = '/skin-tone-analyzer';
const TITLE = 'Skin Tone Analyzer: Find Your Skin Tone and Undertone from a Photo (Free)';
const DESCRIPTION =
  'Free skin tone analyzer: upload a selfie and tap your cheek, or pick your skin color, to find your skin depth (fair to deep), your undertone and the colors that suit you. Your photo never leaves your device.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['skin tone analyzer', 'what is my skin tone', 'skin tone finder', 'skin tone test', 'skin undertone analyzer', 'skin color analyzer', 'skin tone from photo'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const CARDS = {
  heading: 'Skin Tone vs Undertone',
  sub: 'The analyzer reads both from the color of your skin.',
  items: [
    { name: 'Skin tone (depth)', swatches: ['#F3D3B5', '#E8BF98', '#C99467', '#A8703F', '#6E4423'], text: 'How light or dark your skin is: fair, light, medium, tan or deep. It can change with a tan.' },
    { name: 'Undertone', swatches: ['#E8BF98', '#E6BCAE', '#E5BFA4', '#DCC098'], text: 'The color underneath: warm, cool, neutral or olive. It stays the same all your life.' },
    { name: 'Why both matter', swatches: ['#F27E63', '#D47A95', '#3E8E8A', '#2E6B6B'], text: 'Depth decides how light or deep your colors should be; undertone decides warm or cool.' },
  ],
};

const FAQS = [
  { q: 'How do I find my skin tone?', a: 'Look at your skin in daylight without makeup, ideally on your cheek or inner wrist. Its lightness is your skin tone (fair to deep) and its underlying color is your undertone. The analyzer above reads both from a photo or a color you pick.' },
  { q: 'Is my photo uploaded anywhere?', a: 'No. The photo is opened and analyzed inside your browser and is never sent to a server or stored.' },
  { q: 'How accurate is a skin tone analyzer?', a: 'Depth is usually reliable. Undertone from a photo is an estimate, because camera white balance, filters and indoor light can shift colors. Use a daylight photo with no filter, and confirm your undertone with the six-question undertone test.' },
  { q: 'What is the difference between skin tone and complexion?', a: 'Skin tone usually means how light or dark your skin is. Complexion often also includes texture and condition, like oily, dry or even. For choosing colors, skin tone and undertone are what matter.' },
];

export default function SkinToneAnalyzerPage() {
  return (
    <ToolPage
      path={PATH}
      crumb="Skin Tone Analyzer"
      appName="Skin Tone Analyzer"
      description={DESCRIPTION}
      eyebrow="🧑🏽 Free skin tone analyzer"
      h1="Skin Tone Analyzer:"
      h1Accent="Find Your Skin Tone and Undertone"
      lead="Upload a selfie and tap your cheek, or pick your skin color, to see your skin depth, your likely undertone and the colors that suit you. Everything runs on your device."
      alt={<>No photo? Take the <Link href="/undertone-test">six-question undertone test</Link> instead.</>}
      tool={<SkinToneAnalyzer />}
      cards={CARDS}
      prose={{
        heading: 'How to Take a Good Photo for Analysis',
        body: (
          <p>
            Face a window in daylight, turn off beauty filters and HDR, remove makeup and keep
            colored light (a red wall, a green top) out of the frame. Tap the flattest part of
            your cheek, not a shadow, shiny spot or blush. Then use your result with the{' '}
            <Link href="/foundation-undertone-finder">foundation undertone finder</Link> and the{' '}
            <Link href="/what-season-am-i">what season am I quiz</Link>.
          </p>
        ),
      }}
      faqs={FAQS}
      faqHeading="Skin Tone Analyzer FAQ"
      idPrefix="sta"
    />
  );
}
