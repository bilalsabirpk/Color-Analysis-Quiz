import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import HarmonyGenerator from '@/components/HarmonyGenerator';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedTools from '@/components/RelatedTools';

// Tool page for "color harmony generator" / "what colors go together"
// searches. The homepage version also recolors your own photo; this page
// is the quick, standalone generator.

const PATH = '/color-harmony-generator';
const TITLE = 'Color Harmony Generator: Find Colors That Go Together (Free)';
const DESCRIPTION =
  'Free color harmony generator: pick any color and get complementary, analogous, triadic, split-complementary, square and monochromatic palettes with hex codes.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'color harmony generator',
    'colour harmony generator',
    'color wheel',
    'complementary colors',
    'analogous colors',
    'triadic colors',
    'what colors go together',
    'color combination generator',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const OUTFITS = [
  { name: 'Complementary', tip: 'Wear one color as the main piece and its complement as a small accent, like a navy outfit with a rust bag.' },
  { name: 'Analogous', tip: 'Great for tonal outfits: teal, green and olive, or rose, berry and plum. Easy and always polished.' },
  { name: 'Triadic', tip: 'Use one color for most of the outfit and the other two in small amounts, such as shoes and jewelry.' },
  { name: 'Monochromatic', tip: 'Light and dark versions of one shade look expensive and lengthen the body. Add texture so it does not look flat.' },
];

const FAQS = [
  {
    q: 'What is a color harmony?',
    a: 'A color harmony is a group of colors that look good together because of where they sit on the color wheel. The main types are complementary (opposites), analogous (neighbors), triadic (three evenly spaced), split-complementary, square and monochromatic.',
  },
  {
    q: 'How do I find which colors go together?',
    a: 'Pick your base color in the generator above. Complementary colors give the most contrast, analogous colors the calmest look. For outfits, start with one main color and use the others as accents.',
  },
  {
    q: 'Which color harmony is best for clothes?',
    a: 'Analogous and monochromatic harmonies are the easiest to wear every day. Complementary and triadic harmonies are bolder; they work best when one color dominates and the others are small accents.',
  },
  {
    q: 'Do color harmonies work with my color season?',
    a: 'Yes. Pick your base color from your season palette, then keep the harmony colors that also appear in your palette or are close to it. Warm seasons should keep the warm versions, and cool seasons the cool versions.',
  },
  {
    q: 'Can I try the colors on my own photo?',
    a: 'Yes. The color harmony tool on the homepage can recolor the clothing or background in your selfie, so you can see a color on you before you buy it.',
  },
];

export default function ColorHarmonyPage() {
  const url = `${siteConfig.url}${PATH}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Color Harmony Generator',
      url,
      description: DESCRIPTION,
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any (runs in browser)',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Color Harmony Generator', item: url },
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
              <Link href="/">Home</Link> / <span aria-current="page">Color Harmony Generator</span>
            </nav>
            <span className="eyebrow">🎨 Free color wheel tool</span>
            <h1>
              Color Harmony Generator: <span className="grad-text">Find Colors That Go Together</span>
            </h1>
            <p className="lead">
              Choose any color and instantly see six color harmonies from the color wheel, each
              with hex codes you can copy for outfits, makeup or design.
            </p>
            <p className="wsai-alt">
              Want to see a color on yourself?{' '}
              <Link href="/#harmony">Try it on your own photo</Link>.
            </p>
          </div>
        </section>

        <HarmonyGenerator />

        <section aria-labelledby="outfitHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="outfitHeading">How to Use Color Harmonies in Outfits</h2>
              <p>The same rules designers use, applied to what you wear.</p>
            </div>
            <div className="wsai-best">
              {OUTFITS.map((o) => (
                <div key={o.name} className="wsai-best-card">
                  <h3>{o.name}</h3>
                  <p>{o.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt-bg" aria-labelledby="seasonHeading">
          <div className="container prose">
            <h2 id="seasonHeading">Color Harmony and Your Color Season</h2>
            <p>
              A harmony tells you which colors go together; your color season tells you which
              of those colors go with <em>you</em>. Start from a shade in your own palette (the
              season buttons above are a quick way to do that) and keep the harmony colors
              that are close to your palette.
            </p>
            <p>
              Not sure of your season yet? Take the <Link href="/#quiz">free photo color analysis</Link>{' '}
              or the <Link href="/what-season-am-i">what season am I quiz</Link>, check your{' '}
              <Link href="/undertone-test">undertone</Link>, and browse all{' '}
              <Link href="/seasonal-color-palettes">12 seasonal color palettes</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="chFaqHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="chFaqHeading">Color Harmony FAQ</h2>
            </div>
            <FaqAccordion items={FAQS} idPrefix="chg" headingLevel="h3" />
          </div>
        </section>

        <RelatedTools current="/color-harmony-generator" className="alt-bg" />
      </main>
    </>
  );
}
