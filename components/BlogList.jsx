'use client';

import { useEffect, useRef, useState } from 'react';
import GuideCard, { CATEGORY_ICONS } from '@/components/GuideCard';

const PAGE_SIZE = 9;

// Client-side category filter + "Show more" for the /guides index.
// Every card is always in the HTML (cards past the first PAGE_SIZE just get
// the `hidden` attribute), so Google sees a real link to every guide, not
// only the first page. "Show more" only reveals cards that are already there.
export default function BlogList({ guides }) {
  const categories = [...new Set(guides.map((g) => g.category).filter(Boolean))];
  const [active, setActive] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = active === 'All' ? guides : guides.filter((g) => g.category === active);
  const shownCount = Math.min(visible, filtered.length);
  const listRef = useRef(null);
  const focusFrom = useRef(null);

  // After "Show more", move keyboard focus to the first newly shown article.
  useEffect(() => {
    if (focusFrom.current == null || !listRef.current) return;
    const links = listRef.current.querySelectorAll('article:not([hidden]) .guide-link');
    links[focusFrom.current]?.focus();
    focusFrom.current = null;
  }, [visible]);

  function showMore() {
    focusFrom.current = visible;
    setVisible((v) => v + PAGE_SIZE);
  }

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
        Showing {shownCount} of {filtered.length} articles{active !== 'All' ? ` in ${active}` : ''}.
      </p>

      <div className="guide-list blog-grid" ref={listRef}>
        {filtered.map((g, i) => (
          <GuideCard key={g.slug} guide={g} headingLevel="h2" hidden={i >= visible} />
        ))}
      </div>

      {filtered.length > visible && (
        <div className="blog-more">
          <button type="button" className="btn btn-outline" onClick={showMore}>
            Show more articles ({filtered.length - visible} more)
          </button>
        </div>
      )}
    </>
  );
}
