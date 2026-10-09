import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site-config';
import { GUIDES, getGuide, getRelatedGuides } from '@/lib/guides-data';
import ArticleBody from '@/components/ArticleBody';
import GuideCard from '@/components/GuideCard';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: 'article',
      url: `/guides/${guide.slug}`,
      title: guide.title,
      description: guide.description,
      publishedTime: guide.date,
    },
  };
}

export default async function GuideArticlePage({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}`,
  };

  const related = getRelatedGuides(guide);

  const formattedDate = new Date(guide.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="breadcrumb-nav">
              <Link href="/guides">Blog</Link> / {guide.title}
            </p>
            <h1>{guide.title}</h1>
            <p className="article-meta">
              <span>{formattedDate}</span>
              <span className="dot" aria-hidden="true"></span>
              <span>{guide.readTime}</span>
            </p>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <ArticleBody blocks={guide.body} />

            <div className="cta-banner">
              <p>Curious what your own season is?</p>
              <Link href="/#quiz" className="btn btn-primary btn-sm">
                Take the free quiz →
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="alt-bg" aria-labelledby="keepReadingHeading">
            <div className="container">
              <div className="section-head">
                <h2 id="keepReadingHeading">Keep Reading</h2>
              </div>
              <div className="guide-list">
                {related.map((g) => (
                  <GuideCard key={g.slug} guide={g} headingLevel="h3" />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
