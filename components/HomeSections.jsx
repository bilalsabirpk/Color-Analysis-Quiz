import Link from 'next/link';
import { FAQ } from '@/lib/faq-data';
import FaqAccordion from '@/components/FaqAccordion';

// Homepage content sections (server components → real HTML for crawlers).
// Kept deliberately lean: each idea appears once on the page.
//   how it works → why it's free/private → what the seasons are →
//   the 4 seasons (cards + palette explorer) → tools → blog → FAQ.
// Only claims the tool can back up: no invented reviews, ratings or user
// counts.

/* Small line icons (stroke = currentColor) used instead of emoji so the
   page reads calm and consistent. */
const S = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const ICONS = {
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" {...S} />
      <path d="M8 10.5V8a4 4 0 118 0v2.5" {...S} />
    </>
  ),
  bolt: <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" {...S} />,
  gift: (
    <>
      <rect x="3.5" y="8.5" width="17" height="5" rx="1.5" {...S} />
      <path d="M5 13.5V19a1.5 1.5 0 001.5 1.5h11A1.5 1.5 0 0019 19v-5.5M12 8.5v12" {...S} />
      <path d="M12 8.5C10.5 5 7 4.5 7 6.5S10 8.5 12 8.5zm0 0c1.5-3.5 5-4 5-2s-3 2-5 2z" {...S} />
    </>
  ),
  device: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" {...S} />
      <path d="M10.5 18.5h3" {...S} />
    </>
  ),
};

/* ---------------------------------------------------------------- */
/* 1. HOW IT WORKS                                                   */
/* ---------------------------------------------------------------- */
const STEPS = [
  {
    title: 'Upload or take a photo',
    text: 'Use a front-facing photo or take a selfie.',
  },
  {
    title: 'We sample your skin, eyes & hair',
    text: 'Points are placed automatically. Click to adjust.',
  },
  {
    title: 'Get your season & color palette',
    text: 'Best colors, colors to avoid, metals and makeup tones.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="howHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="howHeading">How Our Photo Color Analysis Test Works</h2>
        </div>

        <ol className="hs-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="hs-step">
              <span className="hs-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="hs-center">
          <button type="button" className="btn btn-primary" data-quiz-upload>
            Find my color season
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 2. FREE / PRIVATE / FAST                                          */
/* ---------------------------------------------------------------- */
const BENEFITS = [
  { icon: 'lock', title: 'Private by design', text: 'Your photo never leaves your device.' },
  { icon: 'bolt', title: 'Results in seconds', text: 'Your palette appears instantly.' },
  { icon: 'gift', title: 'Free, no sign-up', text: 'No account or payment needed.' },
  { icon: 'device', title: 'Works on any device', text: 'Phone, tablet or laptop.' },
];

export function WhyUs() {
  return (
    <section id="why" className="alt-bg" aria-labelledby="whyHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="whyHeading">Free Color Analysis Online, No Sign&#8209;Up Needed</h2>
        </div>
        <ul className="hs-benefits">
          {BENEFITS.map((b) => (
            <li key={b.title} className="hs-benefit">
              <span className="hs-benefit-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                  {ICONS[b.icon]}
                </svg>
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 3. WHAT IS SEASONAL COLOR ANALYSIS? (short explainer, SEO)        */
/* ---------------------------------------------------------------- */
export function ColorAnalysisGuide() {
  return (
    <section id="guide" aria-labelledby="guideHeading">
      <div className="container">
        <div className="hs-guide">
          <div className="prose">
            <h2 id="guideHeading">What Is Seasonal Color Analysis?</h2>
            <p>
              Seasonal color analysis sorts natural coloring into four families:{' '}
              <strong>Spring, Summer, Autumn and Winter</strong>. Your season is decided by
              your <strong>undertone</strong> (warm or cool), <strong>depth</strong> (light
              or deep), <strong>chroma</strong> (clear or soft) and{' '}
              <strong>contrast</strong> between skin, hair and eyes.
            </p>
            <p>
              Our free color analysis quiz runs this personal color analysis from a single
              photo: it samples real colors from your skin, eyes and hair, then builds your
              color palette. Prefer more detail? The 12 and 16 season color analysis systems
              split each of the four color seasons into sub-seasons, and your four-season
              result is the right starting point for both.
            </p>
            <p>
              Think of it as a seasonal color analysis quiz and a personal color test in one.
              Many AI color analysis apps upload your selfie to a server; this one reads your
              photo directly in your browser, so you can find your color palette and answer
              &ldquo;what is my color season?&rdquo; without your picture ever leaving your
              device. No photo handy? Try the{' '}
              <Link href="/what-season-am-i">6-question color season quiz</Link> instead.
            </p>
          </div>

          <aside className="hs-guide-aside" aria-label="Related guides">
            <p className="hs-aside-title">Guides</p>
            <Link href="/guides/how-seasonal-color-analysis-works" className="hs-link">
              Read the full guide →
            </Link>
            <Link href="/guides/warm-vs-cool-undertones" className="hs-link">
              Warm vs cool undertones →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 4. THE 4 SEASONS (cards; the palette explorer follows directly)   */
/* ---------------------------------------------------------------- */
const SEASON_CARDS = [
  {
    key: 'spring',
    name: 'Spring',
    tagline: 'Warm · Light · Bright',
    text: 'Golden undertones and a fresh, clear look.',
    colors: ['#FFD166', '#F6A94A', '#8CC084', '#5FA8D3', '#EF5B5B', '#7BC4C4'],
  },
  {
    key: 'summer',
    name: 'Summer',
    tagline: 'Cool · Light · Soft',
    text: 'Rosy undertones and soft, low contrast.',
    colors: ['#A7C6DA', '#C9A9D9', '#7F95D1', '#9FB8AD', '#D8A7B1', '#8E9AAF'],
  },
  {
    key: 'autumn',
    name: 'Autumn',
    tagline: 'Warm · Deep · Soft',
    text: 'Warm undertones with rich, muted depth.',
    colors: ['#B85C38', '#C48A3C', '#6B4226', '#8A9A5B', '#D9A441', '#4A5D23'],
  },
  {
    key: 'winter',
    name: 'Winter',
    tagline: 'Cool · Deep · Bright',
    text: 'Cool undertones with high contrast.',
    colors: ['#0B1F3A', '#7A0C2E', '#00727A', '#4B0082', '#C40233', '#1C1C1C'],
  },
];

export function SeasonsExplained() {
  return (
    <section id="season-types" className="alt-bg hs-seasons-top" aria-labelledby="seasonTypesHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="seasonTypesHeading">The 4 Color Seasons: Spring, Summer, Autumn &amp; Winter</h2>
        </div>

        <ul className="hs-season-grid">
          {SEASON_CARDS.map((s) => (
            <li key={s.key} className="hs-season-card">
              <div className="hs-season-swatches" aria-hidden="true">
                {s.colors.map((c) => (
                  <i key={c} style={{ background: c }} />
                ))}
              </div>
              <div className="hs-season-body">
                <h3>{s.name}</h3>
                <p className="hs-season-tagline">{s.tagline}</p>
                <p>{s.text}</p>
              </div>
              <a href="#seasons" data-season-tab={s.key} className="hs-season-more">
                View palette →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 5. FAQ PREVIEW                                                    */
/* ---------------------------------------------------------------- */
const PREVIEW_QUESTIONS = [
  'What is seasonal color analysis?',
  'What are the 4 color seasons?',
  'How do I know what season I am?',
  'What colors look good on me?',
  'How does this color analysis tool work?',
  'How do I know if I have a warm or cool undertone?',
  'Is this color analysis quiz free? Do I need an account?',
  'Is there color analysis near me, or can I do it online?',
  'Is my photo uploaded or stored anywhere?',
  'How accurate is online color analysis?',
  'What if I seem to fit two seasons?',
  'Is color analysis only for women?',
];

export function FaqPreview() {
  const items = PREVIEW_QUESTIONS.map((q) => FAQ.find((f) => f.q === q)).filter(Boolean);
  if (!items.length) return null;
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <section id="faq-preview" className="alt-bg" aria-labelledby="faqPreviewHeading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
      <div className="container">
        <div className="section-head">
          <h2 id="faqPreviewHeading">Color Analysis Quiz FAQ</h2>
        </div>
        <FaqAccordion items={items} idPrefix="home-faq" />
        <div className="hs-center">
          <Link href="/faq" className="hs-link">
            See all questions →
          </Link>
        </div>
      </div>
    </section>
  );
}
