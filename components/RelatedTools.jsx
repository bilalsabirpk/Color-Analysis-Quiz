import Link from 'next/link';
import { TOOLS } from '@/lib/tools';

// "Related tools" strip shown at the bottom of tool pages and guides:
// every other free tool, so each page links to the whole tool set.
export default function RelatedTools({ current, heading = 'Related Free Tools', className = '' }) {
  const items = TOOLS.filter((t) => t.href !== current);
  return (
    <section className={className} aria-labelledby="relatedToolsHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="relatedToolsHeading">{heading}</h2>
          <p>More free color analysis tools. Each one runs in your browser, with no sign-up.</p>
        </div>
        <div className="tools-grid">
          {items.map((t) => (
            <Link key={t.href} href={t.href} className="tool-card">
              <span className="tool-icon" aria-hidden="true">{t.icon}</span>
              <h3>{t.title}</h3>
              <p>{t.short}</p>
              <span className="tool-go" aria-hidden="true">Open tool →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
