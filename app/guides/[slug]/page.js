import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig, founder } from '@/lib/site-config';
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
    // Absolute title (no " | Color Analysis" suffix) so the full title fits
    // in Google results without being cut off.
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: 'article',
      siteName: siteConfig.name,
      locale: siteConfig.locale,
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

  const pageUrl = `${siteConfig.url}/guides/${guide.slug}`;
  const articleJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      image: [`${pageUrl}/opengraph-image`],
      datePublished: guide.date,
      dateModified: guide.updated || guide.date,
      author: { '@type': 'Person', name: founder.name, url: `${siteConfig.url}/about` },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: { '@type': 'ImageObject', url: `${siteConfig.url}/icon.svg` },
      },
      mainEntityOfPage: pageUrl,
      articleSection: guide.category,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.title, item: pageUrl },
      ],
    },
  ];

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
            <nav aria-label="Breadcrumb" className="breadcrumb-nav">
              <Link href="/">Home</Link> / <Link href="/guides">Blog</Link> /{' '}
              <span aria-current="page">{guide.title}</span>
            </nav>
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
