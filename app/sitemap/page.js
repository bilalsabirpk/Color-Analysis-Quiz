import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { formatGuideDate } from '@/lib/format-date';
import { SITE_PAGES, TOOL_LINKS, getGuidePages } from '@/lib/site-pages';
import styles from './sitemap.module.css';

export const metadata = {
  title: 'Sitemap',
  description: `Every page on ${siteConfig.name} in one place: the free color analysis tools, all blog guides, and site information.`,
  alternates: { canonical: '/sitemap' },
};

export default function SitemapPage() {
  const guides = getGuidePages();
  const sections = [
    { id: 'pages', heading: 'Main Pages', links: SITE_PAGES.filter((p) => p.group === 'main') },
    { id: 'tools', heading: 'Free Tools', links: TOOL_LINKS },
    { id: 'guides', heading: 'Blog Guides', links: guides },
    { id: 'legal', heading: 'Legal', links: SITE_PAGES.filter((p) => p.group === 'legal') },
  ];

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">🗺️ Sitemap</span>
          <h1>Sitemap</h1>
          <p className="lead">
            Every page on {siteConfig.name} in one place. Looking for the XML version for
            search engines? It&apos;s at <a href="/sitemap.xml">/sitemap.xml</a>.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={`content-card prose ${styles.card}`}>
            <div className={styles.grid}>
              {sections.map((s) => (
                <div key={s.id} className={styles.group}>
                  <h2 id={`sitemap-${s.id}`}>
                    {s.heading} <span className={styles.count}>({s.links.length})</span>
                  </h2>
                  <ul>
                    {s.links.map((l) => (
                      <li key={l.path}>
                        <Link href={l.path}>{l.title}</Link>
                        {l.date && (
                          <span className={styles.meta}>
                            {l.category} · {formatGuideDate(l.date)}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
