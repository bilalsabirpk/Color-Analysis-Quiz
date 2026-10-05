// One list of every page on the site. Used by:
//   - app/sitemap.js       → /sitemap.xml (for Google)
//   - app/sitemap/page.js  → /sitemap (optional human-readable page)
// Guides are read from lib/guides-data.js, so a new guide appears in both
// automatically. To add a new normal page, add one line to SITE_PAGES below.

import { GUIDES } from '@/lib/guides-data';

// `lastModified` = when that page's content last changed. Update the date when
// you edit a page, so Google knows to re-crawl it (same as kibbybody.app).
// `images` = shown to Google Images via <image:image> tags.
export const SITE_PAGES = [
  { path: '/', title: 'Home: Free Color Analysis Quiz', group: 'main', lastModified: '2026-10-02', changeFrequency: 'weekly', priority: 1, images: ['/opengraph-image'] },
  { path: '/guides', title: 'Blog', group: 'main', lastModified: 'latest-guide', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/faq', title: 'FAQ', group: 'main', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', title: 'About Us', group: 'main', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/contact', title: 'Contact', group: 'main', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy-policy', title: 'Privacy Policy', group: 'legal', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/terms', title: 'Terms of Use', group: 'legal', lastModified: '2026-09-24', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/cookie-policy', title: 'Cookie Policy', group: 'legal', lastModified: '2026-09-25', changeFrequency: 'monthly', priority: 0.3 },
];

// Tools live in sections of the homepage. They are shown on the Sitemap page
// for visitors but not in sitemap.xml (Google doesn't index #anchors).
export const TOOL_LINKS = [
  { path: '/#quiz', title: 'Color Analysis Quiz' },
  { path: '/#undertone-test', title: 'Undertone Check' },
  { path: '/#harmony', title: 'Color Harmony Generator' },
  { path: '/#seasons', title: 'Season Palettes' },
  { path: '/#season-types', title: 'All Color Seasons' },
];

// Newest guide first.
export function getGuidePages() {
  return [...GUIDES]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((g) => ({
      path: `/guides/${g.slug}`,
      title: g.title,
      category: g.category,
      date: g.date,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
}
