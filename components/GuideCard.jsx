import Link from 'next/link';
import { formatGuideDate } from '@/lib/format-date';

// One blog card, shared by the /guides index, the homepage "From the Blog"
// strip and the "Keep reading" list under each article so they always match.
// The cover is drawn from the post's own swatches (no image files to load).
// `headingLevel` keeps the outline correct: h2 on /guides, h3 elsewhere.

export const CATEGORY_ICONS = {
  Basics: '🎨',
  Undertones: '🌡️',
  Wardrobe: '👗',
  Makeup: '💄',
  Accessories: '💍',
  Hair: '💇',
  Spring: '🌷',
  Summer: '🌊',
  Autumn: '🍂',
  Winter: '❄️',
};

export default function GuideCard({ guide, headingLevel = 'h3', hidden = false }) {
  const Heading = headingLevel;
  const swatches = guide.swatches?.length ? guide.swatches : ['#7b2ff7', '#c026d3', '#f3e8ff', '#241536'];
  const icon = CATEGORY_ICONS[guide.category] || '📝';

  return (
    <article className="guide-card" hidden={hidden || undefined}>
      <div className="guide-cover" aria-hidden="true">
        <div className="guide-cover-stripes">
          {swatches.map((hex) => (
            <span key={hex} style={{ background: hex }} />
          ))}
        </div>
        <span className="guide-cover-icon">{icon}</span>
        <span className="guide-cover-read">{guide.readTime}</span>
      </div>

      <div className="guide-card-body">
        {guide.category && (
          <p className="guide-cat">
            <span aria-hidden="true">{icon}</span> {guide.category}
          </p>
        )}
        <Heading className="guide-title">
          {/* Stretched link: the whole card is clickable, but screen readers
              hear one link named after the article, not the whole card text. */}
          <Link href={`/guides/${guide.slug}`} className="guide-link">
            {guide.title}
          </Link>
        </Heading>
        <p className="guide-excerpt">{guide.description}</p>
        <div className="guide-foot">
          <span className="guide-date">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <rect x="3" y="4.5" width="18" height="16.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 2.5v4M16 2.5v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <time dateTime={guide.date}>{formatGuideDate(guide.date)}</time>
          </span>
          <span className="guide-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
