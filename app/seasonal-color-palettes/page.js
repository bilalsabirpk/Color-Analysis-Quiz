import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import { SUB_SEASON_GUIDES } from '@/lib/sub-season-guides';
import { getGuide } from '@/lib/guides-data';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedTools from '@/components/RelatedTools';
import ToolGuide, { guideFaqs } from '@/components/ToolGuide';

// One page with all 12 seasonal color palettes (hex codes as real text),
// built from the sub-season guides so it never drifts from them. Targets
// "seasonal color palette(s)" / "12 season color palettes" searches and
// links every season guide and makeup palette.

const PATH = '/seasonal-color-palettes';
const TITLE = 'Seasonal Color Palettes: All 12 Seasons with Hex Codes';
const DESCRIPTION =
  'All 12 seasonal color palettes with hex codes: Light, Warm and Bright Spring, Light, Cool and Soft Summer, every Autumn and Winter season.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'seasonal color palettes',
    'seasonal color palette',
    '12 season color palettes',
    '12 season color analysis palettes',
    'color season palettes',
    'seasonal colour palettes',
    'color palette by season',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const TRAITS = {
  'light-spring': 'Light and warm',
  'warm-spring': 'Warm and clear',
  'bright-spring': 'Bright and warm',
  'light-summer': 'Light and cool',
  'cool-summer': 'Cool and soft',
  'soft-summer': 'Soft and cool',
  'soft-autumn': 'Soft and warm',
  'warm-autumn': 'Warm and soft',
  'deep-autumn': 'Deep and warm',
  'deep-winter': 'Deep and cool',
  'cool-winter': 'Cool and clear',
  'bright-winter': 'Bright and cool',
};

const FAMILIES = [
  { name: 'Spring', emoji: '🌷', note: 'Warm, clear and light to medium.', slugs: ['light-spring', 'warm-spring', 'bright-spring'] },
  { name: 'Summer', emoji: '🌊', note: 'Cool, soft and light to medium.', slugs: ['light-summer', 'cool-summer', 'soft-summer'] },
  { name: 'Autumn', emoji: '🍂', note: 'Warm, rich and muted.', slugs: ['soft-autumn', 'warm-autumn', 'deep-autumn'] },
  { name: 'Winter', emoji: '❄️', note: 'Cool, deep and high contrast.', slugs: ['deep-winter', 'cool-winter', 'bright-winter'] },
];

function season(slug) {
  const g = SUB_SEASON_GUIDES.find((x) => x.slug === `${slug}-color-palette`);
  const palette = g?.body.find((b) => b.type === 'palette');
  return {
    slug,
    name: g ? g.title.split(' Color Palette')[0] : slug,
    colors: palette ? palette.colors : [],
    hasMakeup: Boolean(getGuide(`${slug}-makeup-palette`)),
  };
}

const BASE_FAQS = [
  {
    q: 'What are the 12 seasonal color palettes?',
    a: 'They are the palettes of the 12-season color analysis system: Light Spring, Warm Spring, Bright Spring, Light Summer, Cool Summer, Soft Summer, Soft Autumn, Warm Autumn, Deep Autumn, Deep Winter, Cool Winter and Bright Winter. Each season splits into three types based on its strongest trait.',
  },
  {
    q: 'How do I know which seasonal palette is mine?',
    a: 'Find your undertone first (warm or cool), then your depth and contrast. The free photo color analysis checks all three from a selfie, and the six-question season quiz works without a photo.',
  },
  {
    q: 'Can I wear colors from another season?',
    a: 'Yes. Seasons are a guide, not a rule. Neighboring seasons share many colors, so a Soft Autumn can often wear some Soft Summer shades. Keep the colors closest to your face from your own palette.',
  },
  {
    q: 'Why do the hex codes matter?',
    a: 'Product photos and screens change how colors look. A hex code gives you a fixed reference, so you can compare a shirt, lipstick or paint against your palette when shopping online.',
  },
];

const FAQS = [...BASE_FAQS, ...guideFaqs('/seasonal-color-palettes')];

export default function SeasonalPalettesPage() {
  const url = `${siteConfig.url}${PATH}`;
  const all = FAMILIES.flatMap((f) => f.slugs.map(season));
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: TITLE,
      url,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: all.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${s.name} color palette`,
          url: `${siteConfig.url}/guides/${s.slug}-color-palette`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Seasonal Color Palettes', item: url },
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
              <Link href="/">Home</Link> / <span aria-current="page">Seasonal Color Palettes</span>
            </nav>
            <span className="eyebrow">🎨 12 season color analysis</span>
            <h1>
              Seasonal Color Palettes: <span className="grad-text">All 12 Seasons with Hex Codes</span>
            </h1>
            <p className="lead">
              Every palette of the 12-season color analysis system on one page, with 12 shades
              and hex codes for each season. Open a season for its full guide, outfit ideas
              and makeup palette.
            </p>
            <p className="wsai-alt">
              Don&apos;t know your season yet?{' '}
              <Link href="/#quiz">Find it with the free photo color analysis</Link> or the{' '}
              <Link href="/what-season-am-i">six-question quiz</Link>.
            </p>
          </div>
        </section>

        {FAMILIES.map((f, fi) => (
          <section key={f.name} className={fi % 2 ? '' : 'alt-bg'} aria-labelledby={`fam-${f.name}`}>
            <div className="container">
              <div className="section-head">
                <h2 id={`fam-${f.name}`}>
                  <span aria-hidden="true">{f.emoji}</span> {f.name} Color Palettes
                </h2>
                <p>{f.note}</p>
              </div>
              <div className="scp-grid">
                {f.slugs.map(season).map((s) => (
                  <article key={s.slug} className="scp-card" aria-labelledby={`scp-${s.slug}`}>
                    <h3 id={`scp-${s.slug}`}>
                      <Link href={`/guides/${s.slug}-color-palette`}>{s.name}</Link>
                    </h3>
                    <p className="scp-trait">{TRAITS[s.slug]}</p>
                    <ul className="scp-swatches" aria-label={`${s.name} color palette with hex codes`}>
                      {s.colors.map((c) => (
                        <li key={c.hex + c.name}>
                          <span className="scp-chip" style={{ background: c.hex }} aria-hidden="true" />
                          <span className="scp-name">{c.name}</span>
                          <code>{c.hex}</code>
                        </li>
                      ))}
                    </ul>
                    <div className="scp-links">
                      <Link href={`/guides/${s.slug}-color-palette`}>Full {s.name} guide →</Link>
                      {s.hasMakeup && (
                        <Link href={`/guides/${s.slug}-makeup-palette`}>Makeup palette →</Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="alt-bg" aria-labelledby="scpUseHeading">
          <div className="container prose">
            <h2 id="scpUseHeading">How to Use a Seasonal Color Palette</h2>
            <p>
              Wear your palette colors closest to your face: tops, scarves, collars, glasses and
              makeup. Colors further away, like trousers and shoes, matter less. When you shop
              online, compare the product color with the hex codes above, because photos often
              look brighter or warmer than the real thing.
            </p>
            <p>
              To build outfits, pick one color from your palette and use the{' '}
              <Link href="/color-harmony-generator">color harmony generator</Link> to find colors
              that go with it. If you are between two seasons, the{' '}
              <Link href="/undertone-test">undertone test</Link> and the comparison guides, such
              as <Link href="/guides/soft-summer-vs-soft-autumn">Soft Summer vs Soft Autumn</Link>,
              can help you decide.
            </p>
          </div>
        </section>

        <ToolGuide path="/seasonal-color-palettes" />

        <section className="alt-bg" aria-labelledby="scpFaqHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="scpFaqHeading">Seasonal Color Palettes FAQ</h2>
            </div>
            <FaqAccordion items={FAQS} idPrefix="scp" headingLevel="h3" />
          </div>
        </section>

        <RelatedTools current="/seasonal-color-palettes" />
      </main>
    </>
  );
}
