import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import UndertoneCheck from '@/components/UndertoneCheck';
import FaqAccordion from '@/components/FaqAccordion';

// Dedicated landing page for "what season am I" / "color season quiz"
// searches. The homepage targets the photo-based color analysis quiz; this
// page targets people who want a quick question quiz and an explanation of
// how to tell the seasons apart, so the two pages don't compete.

const PATH = '/what-season-am-i';
const TITLE = 'What Season Am I? Free Color Season Quiz (No Photo)';
const DESCRIPTION =
  'What season am I? Take the free 6-question color season quiz, no photo needed. Find out if you are a Spring, Summer, Autumn or Winter, plus your undertone.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const SEASON_SIGNS = [
  {
    season: 'Spring',
    emoji: '🌷',
    href: '/guides/warm-spring-color-palette',
    undertone: 'Warm',
    look: 'Light to medium, clear and bright',
    hair: 'Golden blonde, strawberry blonde, light golden brown',
    eyes: 'Bright blue, green, turquoise, light hazel',
  },
  {
    season: 'Summer',
    emoji: '🌊',
    href: '/guides/cool-summer-color-palette',
    undertone: 'Cool',
    look: 'Light to medium, soft and blended',
    hair: 'Ash blonde, light to medium ash brown',
    eyes: 'Soft blue, grey, grey-green, cool hazel',
  },
  {
    season: 'Autumn',
    emoji: '🍂',
    href: '/guides/warm-autumn-color-palette',
    undertone: 'Warm',
    look: 'Medium to deep, rich and muted',
    hair: 'Auburn, copper, chestnut, golden or warm dark brown',
    eyes: 'Warm brown, hazel, amber, olive green',
  },
  {
    season: 'Winter',
    emoji: '❄️',
    href: '/guides/cool-winter-color-palette',
    undertone: 'Cool',
    look: 'High contrast, clear and bold',
    hair: 'Dark brown, black, or cool silver',
    eyes: 'Dark brown, black-brown, icy blue, cool grey',
  },
];

const BEST_COLORS = [
  {
    season: 'Spring',
    emoji: '🌷',
    href: '/guides/warm-spring-color-palette',
    swatches: ['#F6A94A', '#FF7F6E', '#2EC4B6', '#8CC084', '#FFF4DE'],
    wear: 'Clear warm colors: coral, peach, golden yellow, turquoise, warm green and ivory.',
    avoid: 'Black, stark white and dusty, greyed shades that dull warm skin.',
  },
  {
    season: 'Summer',
    emoji: '🌊',
    href: '/guides/cool-summer-color-palette',
    swatches: ['#A7C6DA', '#C9A9D9', '#E58FAF', '#7F95D1', '#8E9AAF'],
    wear: 'Soft cool colors: powder blue, lavender, rose pink, periwinkle and soft navy.',
    avoid: 'Orange, mustard and very bright, saturated colors that overpower soft coloring.',
  },
  {
    season: 'Autumn',
    emoji: '🍂',
    href: '/guides/warm-autumn-color-palette',
    swatches: ['#B7410E', '#D4A017', '#6B8E23', '#2A7F7A', '#C19A6B'],
    wear: 'Rich warm earth tones: rust, mustard, olive, teal, camel and chocolate brown.',
    avoid: 'Icy pastels, fuchsia and cool bright blues that make warm skin look grey.',
  },
  {
    season: 'Winter',
    emoji: '❄️',
    href: '/guides/cool-winter-color-palette',
    swatches: ['#141414', '#FAFAFA', '#D6177E', '#2541B2', '#00704A'],
    wear: 'Bold cool colors: true black, pure white, fuchsia, royal blue and emerald.',
    avoid: 'Beige, camel, orange and muted earth tones that wash out high contrast.',
  },
];

const SUB_SEASONS = [
  ['Spring', ['Light Spring', 'Warm Spring', 'Bright Spring']],
  ['Summer', ['Light Summer', 'Cool Summer', 'Soft Summer']],
  ['Autumn', ['Soft Autumn', 'Warm Autumn', 'Deep Autumn']],
  ['Winter', ['Deep Winter', 'Cool Winter', 'Bright Winter']],
];
const slug = (name) => `/guides/${name.toLowerCase().replace(/\s+/g, '-')}-color-palette`;

const FAQS = [
  {
    q: 'How do I know what season I am?',
    a: 'Your color season comes from three things: your undertone (warm or cool), your depth (how light or deep your hair, eyes and skin are) and your contrast or clarity (whether bright, saturated colors or softer shades suit you). The quiz above asks about each of these. For a second opinion, upload a selfie to the free photo color analysis, which samples your actual skin, hair and eye colors.',
  },
  {
    q: 'Can I find my color season without a photo?',
    a: 'Yes. The six questions on this page work without a photo: vein color, which metal flatters you, how your skin reacts to sun, ivory vs bright white, your natural hair and eye depth, and how bold colors look on you. Answer from what you see in natural daylight, not under indoor lighting.',
  },
  {
    q: 'What is the difference between 4, 12 and 16 season color analysis?',
    a: 'The 4 season system sorts everyone into Spring, Summer, Autumn or Winter. The 12 season system splits each season into three, such as Soft Autumn, Warm Autumn and Deep Autumn, based on which trait is strongest. The 16 season system adds one more variation to each family. All of them start from the same four seasons, so finding your main season first is the right first step.',
  },
  {
    q: 'Can people with dark skin or olive skin be any season?',
    a: 'Yes. Seasons depend on undertone, depth and contrast, not on how light or dark your skin is. Deep skin tones are often Winter or Autumn, and olive skin is frequently Autumn or Soft Summer, but any skin tone can fall in any season.',
  },
  {
    q: 'What if my result is between two seasons?',
    a: 'That is common, and it usually means you sit in a neighboring sub-season. A Spring and Autumn mix often points to Warm Spring or Warm Autumn, and a Summer and Winter mix often points to Cool Summer or Cool Winter. Hold colors from both palettes next to your face in daylight and keep the one that makes your skin look clearer.',
  },
  {
    q: 'Is this color season quiz free?',
    a: `Yes. The quiz and the photo color analysis on ${siteConfig.name} are completely free, with no sign-up. The quiz runs in your browser and your answers are not stored or sent anywhere.`,
  },
];

export default function WhatSeasonAmIPage() {
  const url = `${siteConfig.url}${PATH}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: TITLE,
      url,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'What Season Am I?', item: url },
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
              <Link href="/">Home</Link> / <span aria-current="page">What Season Am I?</span>
            </nav>
            <span className="eyebrow">🎨 Color season quiz</span>
            <h1>
              What Season Am I? <span className="grad-text">Free Color Season Quiz</span>
            </h1>
            <p className="lead">
              Answer six quick questions to find out if you are a Spring, Summer, Autumn or
              Winter, and whether your undertone is warm, cool or neutral. No photo, no
              sign-up, and nothing you answer leaves your device.
            </p>
            <p className="wsai-alt">
              Prefer to use a selfie?{' '}
              <Link href="/#quiz">Try the free photo color analysis</Link>.
            </p>
          </div>
        </section>

        <UndertoneCheck
          id="season-quiz"
          heading="Take the Color Season Quiz"
          sub="Six questions, about one minute. Answer in natural daylight if you can."
        />

        <section aria-labelledby="signsHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="signsHeading">How to Tell Which Season You Are</h2>
              <p>Typical signs of each color season. Most people match three or four, not all of them.</p>
            </div>
            <div className="cp-table-wrap" tabIndex={0} role="region" aria-labelledby="signsHeading">
              <table className="cp-table">
                <thead>
                  <tr>
                    <th scope="col">Season</th>
                    <th scope="col">Undertone</th>
                    <th scope="col">Overall look</th>
                    <th scope="col">Typical hair</th>
                    <th scope="col">Typical eyes</th>
                  </tr>
                </thead>
                <tbody>
                  {SEASON_SIGNS.map((s) => (
                    <tr key={s.season}>
                      <th scope="row">
                        <span aria-hidden="true">{s.emoji}</span>{' '}
                        <Link href={s.href}>{s.season}</Link>
                      </th>
                      <td>{s.undertone}</td>
                      <td>{s.look}</td>
                      <td>{s.hair}</td>
                      <td>{s.eyes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="wsai-note">
              Skin depth alone does not decide your season. Every skin tone, from very fair to
              very deep, appears in all four seasons.
            </p>
          </div>
        </section>

        <section className="alt-bg" aria-labelledby="bestHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="bestHeading">What Colors Look Good on Me? Best Colors for Your Skin Tone</h2>
              <p>
                Once you know your season, you know your color palette. Here is a quick
                version for each one. Open a palette guide for the full list of shades.
              </p>
            </div>
            <div className="wsai-best">
              {BEST_COLORS.map((b) => (
                <div key={b.season} className="wsai-best-card">
                  <h3>
                    <span aria-hidden="true">{b.emoji}</span> {b.season}
                  </h3>
                  <div className="wsai-swatches" aria-hidden="true">
                    {b.swatches.map((c) => (
                      <i key={c} style={{ background: c }} />
                    ))}
                  </div>
                  <p><strong>Wear:</strong> {b.wear}</p>
                  <p><strong>Avoid:</strong> {b.avoid}</p>
                  <Link href={b.href}>{b.season} palette guide →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="stepsHeading">
          <div className="container prose">
            <h2 id="stepsHeading">Find Your Color Season in 3 Steps</h2>
            <h3>1. Check your undertone</h3>
            <p>
              Look at the veins on your inner wrist in daylight. Green or olive veins usually
              mean a warm undertone (Spring or Autumn). Blue or purple veins usually mean a cool
              undertone (Summer or Winter). If gold and silver jewelry both look good on you,
              you may be neutral. Our{' '}
              <Link href="/guides/warm-vs-cool-undertones">skin undertone test guide</Link>{' '}
              has five more ways to check.
            </p>
            <h3>2. Judge your depth and contrast</h3>
            <p>
              Compare your hair, eyes and skin. Light hair and eyes with little contrast point
              to Spring or Summer. Deep hair and eyes, or a strong difference between hair and
              skin, point to Autumn or Winter.
            </p>
            <h3>3. Test bright vs soft colors</h3>
            <p>
              Hold a bright, saturated color and a dusty, muted one next to your face. If the
              bright one makes your skin look clearer, you lean Spring or Winter. If the soft
              one looks better, you lean Summer or Autumn. Then narrow it down with the{' '}
              <Link href="/#sub-seasons">12 season color analysis</Link>.
            </p>
          </div>
        </section>

        <section className="alt-bg" aria-labelledby="subHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="subHeading">Found Your Season? Pick Your Sub-Season</h2>
              <p>Each season has three sub-seasons. Open a palette guide to see your best colors, makeup and hair colors.</p>
            </div>
            <div className="wsai-subs">
              {SUB_SEASONS.map(([season, subs]) => (
                <div key={season} className="wsai-sub">
                  <h3>{season}</h3>
                  <ul>
                    {subs.map((name) => (
                      <li key={name}>
                        <Link href={slug(name)}>{name} color palette</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="wsaiFaqHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="wsaiFaqHeading">What Season Am I? FAQ</h2>
            </div>
            <FaqAccordion items={FAQS} idPrefix="wsai" headingLevel="h3" />
            <p className="wsai-note">
              More questions? See the full <Link href="/faq">color analysis FAQ</Link>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
