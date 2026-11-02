import Link from 'next/link';
import { getLatestGuides } from '@/lib/guides-data';
import GuideCard from '@/components/GuideCard';

// Homepage "From the Blog" section. Server component: fully rendered HTML,
// so the article links are crawlable and work before any JS loads.
export default function BlogPreview({ limit = 3 }) {
  const posts = getLatestGuides(limit);
  if (!posts.length) return null;

  return (
    <section id="blog" aria-labelledby="blogHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="blogHeading">Seasonal Color Analysis Guides</h2>
        </div>

        <div className="guide-list">
          {posts.map((g) => (
            <GuideCard key={g.slug} guide={g} headingLevel="h3" />
          ))}
        </div>

        <div className="blog-preview-more">
          <Link href="/guides" className="btn btn-outline btn-sm">
            View all style guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
