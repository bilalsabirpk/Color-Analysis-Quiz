import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import { getGuide } from '@/lib/guides-data';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedTools from '@/components/RelatedTools';
import Icon from '@/components/Icon';

// One page with the makeup palettes of all 12 seasons (hex codes as real
// text), built from the "<season>-makeup-palette" guides so it never drifts
// from them. Targets "makeup color palette" / "seasonal makeup palette"
// searches and links every makeup guide, the 4 family makeup guides and
// the lipstick, blush and eyeshadow finders.

const PATH = '/makeup-color-palettes';
const TITLE = 'Makeup Color Palettes for All 12 Seasons (Hex Codes)';
const DESCRIPTION =
  'Makeup color palettes for all 12 color seasons with hex codes: the best lipstick, blush and eyeshadow shades for every Spring, Summer, Autumn and Winter.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'makeup color palette',
    'makeup colour palette',
    'seasonal makeup palette',
    'makeup palette by season',
    'color season makeup',
    'makeup colors for your season',
    '12 season makeup palettes',
  ],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const TRAITS = {
  'light-spring': 'Light, warm and fresh',
  'warm-spring': 'Golden and warm',
  'bright-spring': 'Clear and vivid',
  'light-summer': 'Light, cool and sheer',
  'cool-summer': 'Cool and rosy',
  'soft-summer': 'Dusty and muted',
  'soft-autumn': 'Warm and muted',
  'warm-autumn': 'Golden and earthy',
  'deep-autumn': 'Rich and warm',
  'deep-winter': 'Deep and cool',
  'cool-winter': 'Icy and bold',
  'bright-winter': 'Vivid and cool',
};

const FAMILIES = [
  { name: 'Spring', icon: 'spring', note: 'Peach, coral and warm pink with gold and bronze.', slugs: ['light-spring', 'warm-spring', 'bright-spring'] },
  { name: 'Summer', icon: 'summer', note: 'Rose, mauve and raspberry with taupe and slate.', slugs: ['light-summer', 'cool-summer', 'soft-summer'] },
  { name: 'Autumn', icon: 'autumn', note: 'Warm nude, terracotta and brick with bronze and olive.', slugs: ['soft-autumn', 'warm-autumn', 'deep-autumn'] },
  { name: 'Winter', icon: 'winter', note: 'True red, berry and fuchsia with charcoal and navy.', slugs: ['deep-winter', 'cool-winter', 'bright-winter'] },
];

function season(slug) {
  const g = getGuide(`${slug}-makeup-palette`);
  const palette = g?.body.find((b) => b.type === 'palette');
  return {
    slug,
    name: slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '),
    colors: palette ? palette.colors : [],
  };
}

const FAQS = [
  {
    q: 'What is a makeup color palette?',
    a: 'It is the set of lipstick, blush and eyeshadow shades that suit your color season. The shades follow the same undertone, depth and softness as your clothing palette, so your makeup looks like part of your face rather than sitting on top of it.',
  },
  {
    q: 'How do I find my makeup color palette?',
    a: 'Find your color season first with the free photo color analysis or the six-question season quiz, then open your season above. The lipstick, blush and eyeshadow finders can also suggest shades from a few quick questions.',
  },
  {
    q: 'Is my makeup palette the same as my clothing palette?',
    a: 'They follow the same rules but are not identical. Makeup sits directly on skin, so the makeup palette uses softer, skin-friendly versions of your season colors: rosy and peachy nudes, blush tones and wearable eyeshadow neutrals.',
  },
  {
    q: 'Can I wear makeup from another season?',
    a: 'Yes. Neighboring seasons share many shades, for example Soft Summer and Soft Autumn both suit muted rose-brown. Keep lipstick and blush closest to your own season, because they affect how your skin looks the most.',
  },
  {
    q: 'Why are the shades given as hex codes?',
    a: 'Shade names differ between brands and product photos are often edited. A hex code is a fixed color reference, so you can compare a swatch online with your palette before you buy.',
  },
];

export default function MakeupPalettesPage() {
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
          name: `${s.name} makeup color palette`,
          url: `${siteConfig.url}/guides/${s.slug}-makeup-palette`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Makeup Color Palettes', item: url },
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
              <Link href="/">Home</Link> / <span aria-current="page">Makeup Color Palettes</span>
            </nav>
            <span className="eyebrow"><Icon name="lipstick" size={16} /> Makeup by color season</span>
            <h1>
              Makeup Color Palettes: <span className="grad-text">All 12 Seasons with Hex Codes</span>
            </h1>
            <p className="lead">
              The best lipstick, blush and eyeshadow shades for every color season, with 12 hex
              codes each. Open a season for its full makeup guide, looks and shades to avoid.
            </p>
            <p className="wsai-alt">
              Don&apos;t know your season yet?{' '}
              <Link href="/#quiz">Find it with the free photo color analysis</Link>, or try the{' '}
              <Link href="/lipstick-color-finder">lipstick shade finder</Link>.
            </p>
          </div>
        </section>

        {FAMILIES.map((f, fi) => (
          <section key={f.name} className={fi % 2 ? '' : 'alt-bg'} aria-labelledby={`mk-${f.name}`}>
            <div className="container">
              <div className="section-head">
                <h2 id={`mk-${f.name}`}>
                  <Icon name={f.icon} size={24} /> {f.name} Makeup Palettes
                </h2>
                <p>
                  {f.note}{' '}
                  <Link href={`/guides/${f.name.toLowerCase()}-makeup-palette`}>Compare all three {f.name} makeup palettes →</Link>
                </p>
              </div>
              <div className="scp-grid">
                {f.slugs.map(season).map((s) => (
                  <article key={s.slug} className="scp-card" aria-labelledby={`mkc-${s.slug}`}>
                    <h3 id={`mkc-${s.slug}`}>
                      <Link href={`/guides/${s.slug}-makeup-palette`}>{s.name} Makeup</Link>
                    </h3>
                    <p className="scp-trait">{TRAITS[s.slug]}</p>
                    <ul className="scp-swatches" aria-label={`${s.name} makeup color palette with hex codes`}>
                      {s.colors.map((c) => (
                        <li key={c.hex + c.name}>
                          <span className="scp-chip" style={{ background: c.hex }} aria-hidden="true" />
                          <span className="scp-name">{c.name}</span>
                          <code>{c.hex}</code>
                        </li>
                      ))}
                    </ul>
                    <div className="scp-links">
                      <Link href={`/guides/${s.slug}-makeup-palette`}>Full {s.name} makeup guide →</Link>
                      <Link href={`/guides/${s.slug}-color-palette`}>Clothing palette →</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="alt-bg" aria-labelledby="mkUseHeading">
          <div className="container prose">
            <h2 id="mkUseHeading">How to Use Your Makeup Color Palette</h2>
            <p>
              Start with lipstick and blush, because they change how your skin looks the most.
              Pick an everyday nude, an office shade and an evening shade from your palette, then
              choose eyeshadow neutrals in the same temperature. When you shop online, compare the
              swatch with the hex codes above rather than trusting the shade name.
            </p>
            <p>
              For shade-by-shade help, use the{' '}
              <Link href="/lipstick-color-finder">lipstick shade finder</Link>,{' '}
              <Link href="/blush-color-finder">blush color finder</Link>,{' '}
              <Link href="/eyeshadow-color-finder">eyeshadow color finder</Link> and{' '}
              <Link href="/foundation-undertone-finder">foundation undertone finder</Link>. For
              the theory behind each recommendation, read{' '}
              <Link href="/guides/makeup-colors-for-your-color-season">makeup colors for your color season</Link>,
              and for clothing colors see{' '}
              <Link href="/seasonal-color-palettes">all 12 seasonal color palettes</Link>.
            </p>
          </div>
        </section>

        <section aria-labelledby="mkFaqHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="mkFaqHeading">Makeup Color Palettes FAQ</h2>
            </div>
            <FaqAccordion items={FAQS} idPrefix="mk" headingLevel="h3" />
          </div>
        </section>

        <RelatedTools current="/makeup-color-palettes" />
      </main>
    </>
  );
}
