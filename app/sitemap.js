import { siteConfig } from '@/lib/site-config';
import { SITE_PAGES, getGuidePages } from '@/lib/site-pages';
import { getGuide, getPaletteImage, getOutfitImage } from '@/lib/palette-image';

// Serves /sitemap.xml for search engines, in the same format as
// kibbybody.app/sitemap.xml: one <url> per page with a fixed <lastmod>,
// <changefreq>, <priority>, and <image:image> where a page has an image.
// The page list lives in lib/site-pages.js; guides come from lib/guides-data.js
// automatically.

const abs = (path) => (path === '/' ? siteConfig.url : `${siteConfig.url}${path}`);
const toDate = (iso) => new Date(`${iso}T00:00:00.000Z`);

export default function sitemap() {
  const guides = getGuidePages(); // newest first
  const latestGuide = guides.reduce((max, g) => (g.date > max ? g.date : max), guides[0]?.date);

  const pages = SITE_PAGES.map((p) => ({
    url: abs(p.path),
    lastModified: toDate(p.lastModified === 'latest-guide' ? latestGuide : p.lastModified),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.images?.length ? { images: p.images.map(abs) } : {}),
  }));

  const guideEntries = guides.map((g) => {
    const guide = getGuide(g.path.split('/').pop());
    const imgs = [getPaletteImage(guide), getOutfitImage(guide)].filter(Boolean);
    return {
      url: abs(g.path),
      lastModified: toDate(g.date),
      changeFrequency: g.changeFrequency,
      priority: g.priority,
      ...(imgs.length ? { images: imgs.map((x) => abs(x.src)) } : {}),
    };
  });

  return [...pages, ...guideEntries];
}
