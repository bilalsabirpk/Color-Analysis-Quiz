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
  { path: '/', title: 'Home: Free Color Analysis Quiz', group: 'main', lastModified: '2026-11-05', changeFrequency: 'weekly', priority: 1, images: ['/opengraph-image'] },
  { path: '/what-season-am-i', title: 'What Season Am I? Color Season Quiz', group: 'main', lastModified: '2026-10-10', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/undertone-test', title: 'Undertone Test', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/color-harmony-generator', title: 'Color Harmony Generator', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/seasonal-color-palettes', title: 'Seasonal Color Palettes', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/lipstick-color-finder', title: 'Lipstick Shade Finder', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/foundation-undertone-finder', title: 'Foundation Undertone Finder', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/hair-color-finder', title: 'Hair Color Finder', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/gold-or-silver-jewelry-test', title: 'Gold or Silver Jewelry Test', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/hijab-color-finder', title: 'Hijab Color Finder', group: 'tool', lastModified: '2026-11-06', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/skin-tone-analyzer', title: 'Skin Tone Analyzer', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blush-color-finder', title: 'Blush Color Finder', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/eyeshadow-color-finder', title: 'Eyeshadow Color Finder', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/concealer-shade-finder', title: 'Concealer Shade Finder', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/does-this-color-suit-me', title: 'Does This Color Suit Me?', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contrast-test', title: 'Contrast Level Test', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/embed-widget', title: 'Embed the Quiz on Your Site', group: 'tool', lastModified: '2026-11-05', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/guides', title: 'Blog', group: 'main', lastModified: 'latest-guide', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/faq', title: 'FAQ', group: 'main', lastModified: '2026-10-12', changeFrequency: 'monthly', priority: 0.7 },
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
  { path: '/undertone-test', title: 'Undertone Test' },
  { path: '/color-harmony-generator', title: 'Color Harmony Generator' },
  { path: '/seasonal-color-palettes', title: 'Seasonal Color Palettes' },
  { path: '/lipstick-color-finder', title: 'Lipstick Shade Finder' },
  { path: '/foundation-undertone-finder', title: 'Foundation Undertone Finder' },
  { path: '/hair-color-finder', title: 'Hair Color Finder' },
  { path: '/gold-or-silver-jewelry-test', title: 'Gold or Silver Jewelry Test' },
  { path: '/hijab-color-finder', title: 'Hijab Color Finder' },
  { path: '/skin-tone-analyzer', title: 'Skin Tone Analyzer' },
  { path: '/blush-color-finder', title: 'Blush Color Finder' },
  { path: '/eyeshadow-color-finder', title: 'Eyeshadow Color Finder' },
  { path: '/concealer-shade-finder', title: 'Concealer Shade Finder' },
  { path: '/does-this-color-suit-me', title: 'Does This Color Suit Me?' },
  { path: '/contrast-test', title: 'Contrast Level Test' },
  { path: '/embed-widget', title: 'Embed the Quiz on Your Site' },
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
      date: g.updated || g.date,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
}
