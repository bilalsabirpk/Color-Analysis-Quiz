import Link from 'next/link';
import { CATEGORY_ICONS } from '@/components/GuideCard';

// A plain, always-visible list of every guide on /guides, grouped by topic.
// Server component, so each guide has a real text link in the HTML that
// Google can follow (the card grid above only shows the first page).

const ORDER = ['Basics', 'Undertones', 'Spring', 'Summer', 'Autumn', 'Winter', 'Wardrobe', 'Makeup', 'Hair', 'Accessories'];

export default function AllGuidesIndex({ guides }) {
  const groups = new Map();
  for (const g of guides) {
    const cat = g.category || 'More';
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat).push(g);
  }
  const cats = [...groups.keys()].sort((a, b) => {
    const ia = ORDER.indexOf(a);
    const ib = ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  return (
    <nav className="all-guides" aria-labelledby="allGuidesHeading">
      <h2 id="allGuidesHeading">All Color Analysis Guides</h2>
      <p className="all-guides-sub">Every article on the blog, grouped by topic.</p>
      <div className="all-guides-grid">
        {cats.map((cat) => (
          <div key={cat} className="all-guides-group">
            <h3>
              <span aria-hidden="true">{CATEGORY_ICONS[cat] || '📝'}</span> {cat}
            </h3>
            <ul>
              {groups.get(cat).map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
