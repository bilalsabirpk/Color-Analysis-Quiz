import Link from 'next/link';
import { siteConfig, founder } from '@/lib/site-config';
import { getLatestGuides } from '@/lib/guides-data';
import BlogList from '@/components/BlogList';
import AllGuidesIndex from '@/components/AllGuidesIndex';
import ShareLink from '@/components/ShareLink';

const DESCRIPTION =
  'Free guides on seasonal color analysis: how the 4 seasons work, how to find your undertone, and how to use your palette for clothes, makeup, hair color and jewelry.';

export const metadata = {
  title: 'Color Analysis Blog & Hair Color Ideas',
  description: DESCRIPTION,
  alternates: { canonical: '/guides' },
  openGraph: {
    url: '/guides',
    title: `Color Analysis Blog | ${siteConfig.name}`,
    description: DESCRIPTION,
  },
};

export default function GuidesIndexPage() {
  const guides = getLatestGuides();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/guides`,
    description: DESCRIPTION,
    blogPost: guides.map((g) => ({
      '@type': 'BlogPosting',
      headline: g.title,
      description: g.description,
      datePublished: g.date,
      url: `${siteConfig.url}/guides/${g.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd).replace(/</g, '\\u003c') }}
      />
      <main id="main" className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <span className="eyebrow">📝 Blog</span>
            <h1>
              Color Analysis <span className="grad-text">Blog</span>
            </h1>
            <p className="blog-sub">
              Expert guides, tips and insights on seasonal color analysis, undertones and
              wearing the colors that suit you best.
            </p>
            <div className="blog-intro">
              <p>
                This blog covers every part of color analysis and how it applies to real
                decisions: how the four seasons work, how to tell a warm undertone from a
                cool one, and how to put your palette to work in your wardrobe, makeup,
                hair color and jewelry.
              </p>
              <p>
                Browse {guides.length} guides below, or{' '}
                <Link href="/#quiz">take the free color analysis</Link> first to find your
                season, then come back for advice tailored to it. {siteConfig.name} is built
                by <Link href="/about">{founder.name}</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="blog-body">
          <div className="container">
            <BlogList guides={guides} />

            <AllGuidesIndex guides={guides} />

            <div className="blog-cta">
              <div>
                <h2>Ready to discover your color season?</h2>
                <p>
                  Use the free color analysis tool for an instant season, palette and
                  colors to avoid. Your photo never leaves your device.
                </p>
              </div>
              <Link href="/#quiz" className="btn blog-cta-btn">
                Try the free analysis →
              </Link>
            </div>

            <ShareLink title={`${siteConfig.name} Blog`} />
          </div>
        </section>
      </main>
    </>
  );
}
