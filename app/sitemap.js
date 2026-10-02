import { siteConfig } from '@/lib/site-config';
import { GUIDES } from '@/lib/guides-data';

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: '/', changeFrequency: 'weekly', priority: 1 },
    { url: '/guides', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/faq', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.6 },
    { url: '/contact', changeFrequency: 'yearly', priority: 0.4 },
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3 },
  ].map((r) => ({
    url: `${siteConfig.url}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const guideRoutes = GUIDES.map((g) => ({
    url: `${siteConfig.url}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...guideRoutes];
}
