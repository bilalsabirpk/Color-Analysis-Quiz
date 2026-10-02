'use client';

import { useState } from 'react';
import GuideCard, { CATEGORY_ICONS } from '@/components/GuideCard';

const PAGE_SIZE = 9;

// Client-side category filter + "Show more" for the /guides index.
// All cards are still in the server HTML on first load (default = All,
// first PAGE_SIZE shown), so crawlers see real links.
export default function BlogList({ guides }) {
  const categories = [...new Set(guides.map((g) => g.category).filter(Boolean))];
  const [active, setActive] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = active === 'All' ? guides : guides.filter((g) => g.category === active);
  const shown = filtered.slice(0, visible);

  function pick(cat) {
    setActive(cat);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      {categories.length > 1 && (
        <div className="blog-filters" role="group" aria-label="Filter articles by topic">
          {['All', ...categories].map((cat) => {
            const count = cat === 'All' ? guides.length : guides.filter((g) => g.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className="blog-chip"
                aria-pressed={active === cat}
                onClick={() => pick(cat)}
              >
                {cat !== 'All' && <span aria-hidden="true">{CATEGORY_ICONS[cat] || '📝'}</span>}
                {cat}
                <span className="blog-chip-count">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <p className="visually-hidden" aria-live="polite">
        Showing {shown.length} of {filtered.length} articles{active !== 'All' ? ` in ${active}` : ''}.
      </p>

      <div className="guide-list blog-grid">
        {shown.map((g) => (
          <GuideCard key={g.slug} guide={g} headingLevel="h2" />
        ))}
      </div>

      {filtered.length > visible && (
        <div className="blog-more">
          <button type="button" className="btn btn-outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Show more articles
          </button>
        </div>
      )}
    </>
  );
}
