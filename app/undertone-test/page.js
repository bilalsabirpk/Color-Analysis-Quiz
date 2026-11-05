import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import UndertoneTest from '@/components/UndertoneTest';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedTools from '@/components/RelatedTools';

// Tool page for "undertone test" / "warm or cool undertone test" searches.
// The guide /guides/warm-vs-cool-undertones explains the tests in depth;
// this page is the interactive quiz, so the two link to each other.

const PATH = '/undertone-test';
const TITLE = 'Undertone Test: Warm, Cool or Neutral? Free Skin Undertone Quiz';
const DESCRIPTION =
  'Free skin undertone test: answer 6 quick questions to find out if your undertone is warm, cool or neutral, plus your best colors and jewelry metal. No photo needed.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'undertone test',
    'warm or cool undertone test',
    'skin undertone test',
    'undertone quiz',
    'warm or cool undertones',
    'how to tell if you have warm or cool undertones',
    'skin undertone analysis',
    'neutral undertone',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const TYPES = [
  {
    name: 'Warm undertone',
    swatches: ['#F27E63', '#D4A017', '#6B7A2E', '#2E8B7A'],
    signs: 'Green or olive veins, gold jewelry glows, cream suits you better than white, skin tans golden.',
    wear: 'Coral, rust, mustard, olive, camel, warm teal.',
    href: '/guides/warm-skin-tone-colors',
    link: 'Best colors for warm skin',
  },
  {
    name: 'Cool undertone',
    swatches: ['#D47A95', '#A99BC9', '#1B2A4A', '#0F52BA'],
    signs: 'Blue or purple veins, silver looks crisp, pure white flatters you, skin burns or turns pink.',
    wear: 'Rose pink, raspberry, lavender, navy, emerald, sapphire.',
    href: '/guides/warm-vs-cool-undertones',
    link: 'Cool undertone guide',
  },
  {
    name: 'Neutral undertone',
    swatches: ['#3E8E8A', '#C9A0A6', '#C8102E', '#A39486'],
    signs: 'Veins look mixed, gold and silver both work, neither cream nor white clearly wins.',
    wear: 'Soft teal, dusty rose, jade, true red, taupe.',
    href: '/guides/olive-skin-color-palette',
    link: 'Neutral and olive skin',
  },
];

const FAQS = [
  {
    q: 'How do I know if my undertone is warm or cool?',
    a: 'Check a few signs in daylight: vein color on your wrist, whether gold or silver jewelry looks better, and whether cream or bright white flatters your face. Green veins, gold and cream point to warm; blue veins, silver and white point to cool. The test above combines six of these checks.',
  },
  {
    q: 'What is a neutral undertone?',
    a: 'A neutral undertone has roughly equal warm and cool tones. Gold and silver both look fine, and you can wear colors from both sides. Depth and contrast decide your best palette more than temperature does.',
  },
  {
    q: 'Can dark or brown skin have a cool undertone?',
    a: 'Yes. Undertone and depth are separate. Very deep skin can be cool, and very fair skin can be warm. On deeper skin the vein test is harder to read, so the jewelry, lipstick and white-versus-cream tests are more reliable.',
  },
  {
    q: 'What is an olive undertone?',
    a: 'Olive skin has a slightly green or grey cast and often looks neutral-warm. Olive skin usually suits earthy jewel tones like teal, emerald, burgundy and terracotta. See the olive skin color palette guide for details.',
  },
  {
    q: 'Is undertone the same as my color season?',
    a: 'No. Undertone is one of three things that decide your season; the others are depth and contrast. Warm points to Spring or Autumn and cool points to Summer or Winter. The photo color analysis checks all three at once.',
  },
];

export default function UndertoneTestPage() {
  const url = `${siteConfig.url}${PATH}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Skin Undertone Test',
      url,
      description: DESCRIPTION,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Any (runs in browser)',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Undertone Test', item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumb-nav">
              <Link href="/">Home</Link> / <span aria-current="page">Undertone Test</span>
            </nav>
            <span className="eyebrow">🎨 Free skin undertone test</span>
            <h1>
              Undertone Test: <span className="grad-text">Are You Warm, Cool or Neutral?</span>
            </h1>
            <p className="lead">
              Answer six quick questions to find your skin undertone, the colors that suit it
              and the jewelry metal that flatters you most. No photo, no sign-up, and nothing
              you answer leaves your device.
            </p>
            <p className="wsai-alt">
              Want your full color season too?{' '}
              <Link href="/#quiz">Try the free photo color analysis</Link>.
            </p>
          </div>
        </section>

        <UndertoneTest />

        <section aria-labelledby="typesHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="typesHeading">Warm, Cool and Neutral Undertones Explained</h2>
              <p>The signs of each undertone and the colors that usually suit it.</p>
            </div>
            <div className="wsai-best tools-3">
              {TYPES.map((t) => (
                <div key={t.name} className="wsai-best-card">
                  <h3>{t.name}</h3>
                  <div className="wsai-swatches" aria-hidden="true">
                    {t.swatches.map((c) => (
                      <i key={c} style={{ background: c }} />
                    ))}
                  </div>
                  <p><strong>Signs:</strong> {t.signs}</p>
                  <p><strong>Wear:</strong> {t.wear}</p>
                  <Link href={t.href}>{t.link} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt-bg" aria-labelledby="moreHeading">
          <div className="container prose">
            <h2 id="moreHeading">More Ways to Check Your Undertone</h2>
            <p>
              No single test is perfect, because indoor lighting and makeup can change what you
              see. For the most reliable answer, check your undertone in daylight near a window,
              with a clean face, and look for two or three signs that agree.
            </p>
            <p>
              The <Link href="/guides/warm-vs-cool-undertones">skin undertone guide</Link> walks
              through five tests in detail, and the{' '}
              <Link href="/guides/gold-vs-silver-jewelry-undertone">gold or silver jewelry test</Link>{' '}
              is a quick second check. Once you know your undertone, the{' '}
              <Link href="/what-season-am-i">what season am I quiz</Link> narrows it down to
              Spring, Summer, Autumn or Winter, and the{' '}
              <Link href="/seasonal-color-palettes">seasonal color palettes</Link> show the
              exact shades for all 12 seasons.
            </p>
          </div>
        </section>

        <section aria-labelledby="utFaqHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="utFaqHeading">Undertone Test FAQ</h2>
            </div>
            <FaqAccordion items={FAQS} idPrefix="utt" headingLevel="h3" />
          </div>
        </section>

        <RelatedTools current="/undertone-test" className="alt-bg" />
      </main>
    </>
  );
}
