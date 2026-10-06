import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { FAQ, getFaqByCategory } from '@/lib/faq-data';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Color Analysis FAQ & 16 Season Color Guide',
  description:
    'Color analysis questions answered: the 4 color seasons, 12 and 16 season color analysis, warm vs cool undertones, and how our free color analysis quiz works.',
  alternates: { canonical: '/faq' },
  openGraph: {
    url: '/faq',
    title: `FAQ | ${siteConfig.name}`,
    description:
      'Answers to common color analysis questions: the 4 seasons, undertones, colors to wear and avoid, and how our free tool works.',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  const groups = getFaqByCategory();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main" className="faq-page">
        {/* Dark hero with curved bottom edge */}
        <section className="faq-hero">
          <div className="container">
            <p className="faq-kicker">Help Center</p>
            <h1>
              Frequently Asked <span className="faq-hero-grad">Questions</span>
            </h1>
            <p className="faq-hero-lead">
              Everything you need to know about seasonal color analysis: the four
              seasons, undertones, what to wear, and how our free tool works.
            </p>
            <ul className="faq-hero-chips" aria-label="About this page">
              <li>
                <span className="faq-glyph g1" aria-hidden="true">✦</span>
                {FAQ.length} questions answered
              </li>
              <li>
                <span className="faq-glyph g2" aria-hidden="true">◆</span>
                100% free tool
              </li>
              <li>
                <span className="faq-glyph g3" aria-hidden="true">◉</span>
                Privacy-first
              </li>
            </ul>
          </div>
        </section>

        <section className="faq-body">
          <div className="container">
            <div className="faq-try">
              <div>
                <p className="faq-try-title">Haven&apos;t found your season yet?</p>
                <p className="faq-try-text">
                  Upload a photo and get your color season instantly. It&apos;s free, with
                  no sign-up.
                </p>
              </div>
              <Link href="/#quiz" className="btn btn-primary btn-sm">
                Try It Free →
              </Link>
            </div>

            <nav className="faq-topics" aria-label="FAQ topics">
              {groups.map((g) => (
                <a key={g.id} href={`#faq-${g.id}`}>
                  <span aria-hidden="true">{g.icon}</span> {g.label}
                  <span className="faq-topic-count">{g.items.length}</span>
                </a>
              ))}
            </nav>

            {groups.map((g) => (
              <div key={g.id} id={`faq-${g.id}`} className="faq-group">
                <h2>
                  <span className="faq-group-icon" aria-hidden="true">
                    {g.icon}
                  </span>
                  {g.label}
                </h2>
                <FaqAccordion items={g.items} idPrefix={`faq-${g.id}`} />
              </div>
            ))}

            <div className="faq-still">
              <span className="faq-still-icon" aria-hidden="true">💬</span>
              <h2>Still have questions?</h2>
              <p>
                Can&apos;t find what you&apos;re looking for? Send us a message and
                we&apos;ll get back to you.
              </p>
              <div className="faq-still-actions">
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Contact us
                </Link>
                <Link href="/#undertone-test" className="btn btn-outline btn-sm">
                  Try the quick undertone check
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
