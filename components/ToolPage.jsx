import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedTools from '@/components/RelatedTools';
import RatingBox from '@/components/RatingBox';
import ToolGuide, { guideFaqs } from '@/components/ToolGuide';

// Shared layout for the quiz-style tool pages: hero → tool → rating →
// explainer cards → how-to prose → long guide (lib/tool-guides) → FAQ →
// related tools, with WebApplication, BreadcrumbList and FAQPage data.
//
// Section backgrounds alternate: tool + rating (alt-bg) → cards → prose
// (alt-bg) → guide → FAQ (alt-bg) → related.

export default function ToolPage({
  path,
  crumb,
  appName,
  appCategory = 'LifestyleApplication',
  description,
  eyebrow,
  h1,
  h1Accent,
  lead,
  alt,
  tool,
  cards,
  prose,
  faqs,
  faqHeading,
  idPrefix,
}) {
  faqs = [...faqs, ...guideFaqs(path)];
  const url = `${siteConfig.url}${path}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: appName,
      url,
      description,
      applicationCategory: appCategory,
      operatingSystem: 'Any (runs in browser)',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: crumb, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
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
              <Link href="/">Home</Link> / <span aria-current="page">{crumb}</span>
            </nav>
            <span className="eyebrow">{eyebrow}</span>
            <h1>
              {h1} <span className="grad-text">{h1Accent}</span>
            </h1>
            <p className="lead">{lead}</p>
            {alt && <p className="wsai-alt">{alt}</p>}
          </div>
        </section>

        {tool}
        <section className="alt-bg rating-section" aria-label="Rate this tool">
          <div className="container">
            <RatingBox tool={path} />
          </div>
        </section>

        {cards && (
          <section aria-labelledby={`${idPrefix}-cards`}>
            <div className="container">
              <div className="section-head">
                <h2 id={`${idPrefix}-cards`}>{cards.heading}</h2>
                {cards.sub && <p>{cards.sub}</p>}
              </div>
              <div className={`wsai-best${cards.items.length === 3 ? ' tools-3' : ''}`}>
                {cards.items.map((c) => (
                  <div key={c.name} className="wsai-best-card">
                    <h3>{c.name}</h3>
                    {c.swatches && (
                      <div className="wsai-swatches" aria-hidden="true">
                        {c.swatches.map((s) => (
                          <i key={s} style={{ background: s }} />
                        ))}
                      </div>
                    )}
                    <p>{c.text}</p>
                    {c.href && <Link href={c.href}>{c.link} →</Link>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {prose && (
          <section className="alt-bg" aria-labelledby={`${idPrefix}-how`}>
            <div className="container prose">
              <h2 id={`${idPrefix}-how`}>{prose.heading}</h2>
              {prose.body}
            </div>
          </section>
        )}

        <ToolGuide path={path} />

        <section className="alt-bg" aria-labelledby={`${idPrefix}-faq`}>
          <div className="container">
            <div className="section-head">
              <h2 id={`${idPrefix}-faq`}>{faqHeading}</h2>
            </div>
            <FaqAccordion items={faqs} idPrefix={idPrefix} headingLevel="h3" />
          </div>
        </section>

        <RelatedTools current={path} />
      </main>
    </>
  );
}
