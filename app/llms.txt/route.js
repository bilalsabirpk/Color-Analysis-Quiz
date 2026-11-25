import { siteConfig } from '@/lib/site-config';
import { TOOLS } from '@/lib/tools';
import { GUIDES } from '@/lib/guides-data';

// /llms.txt: a plain-text map of the site for AI assistants and answer
// engines (https://llmstxt.org). Built from the same lists as the menus and
// sitemap, so new tools and guides appear automatically.

export const dynamic = 'force-static';

const SEASON_SLUGS = [
  'light-spring', 'warm-spring', 'bright-spring',
  'light-summer', 'cool-summer', 'soft-summer',
  'soft-autumn', 'warm-autumn', 'deep-autumn',
  'deep-winter', 'cool-winter', 'bright-winter',
];

export function GET() {
  const base = siteConfig.url;
  const abs = (p) => (p.startsWith('http') ? p : `${base}${p}`);
  const tools = TOOLS.filter((t) => t.href !== '/embed-widget');
  const seasonGuides = SEASON_SLUGS.map((s) => GUIDES.find((g) => g.slug === `${s}-color-palette`)).filter(Boolean);
  const other = GUIDES.filter((g) => !seasonGuides.includes(g));

  const lines = [
    `# ${siteConfig.name} (coloranalyzerquiz.com)`,
    '',
    '> Free seasonal color analysis. Upload a selfie or answer a short quiz to find your color season (12-season system), skin undertone, best colors and colors to avoid, all with hex codes. The photo is analyzed in the browser and never uploaded. No sign-up.',
    '',
    'Results are estimates from color theory (undertone, depth and contrast), not a professional in-person draping. Palettes, hex codes and guides are free to reference.',
    '',
    '## Main pages',
    `- [Photo color analysis quiz](${base}/#quiz): upload a selfie to get your color season, undertone and palette.`,
    `- [What season am I? quiz](${base}/what-season-am-i): six questions, no photo.`,
    `- [All 12 seasonal color palettes](${base}/seasonal-color-palettes): every season with 12 hex codes.`,
    `- [Makeup color palettes](${base}/makeup-color-palettes): lipstick, blush and eyeshadow shades for all 12 seasons.`,
    `- [All free tools](${base}/tools)`,
    `- [Blog](${base}/guides)`,
    `- [FAQ](${base}/faq)`,
    `- [About](${base}/about)`,
    '',
    '## Free tools',
    ...tools.map((t) => `- [${t.title}](${abs(t.href)}): ${t.short.replace(/\.$/, '')}.`),
    '',
    '## The 12 color seasons',
    ...seasonGuides.map((g) => `- [${g.title}](${base}/guides/${g.slug}): ${g.description}`),
    '',
    '## Guides',
    ...other.map((g) => `- [${g.title}](${base}/guides/${g.slug}): ${g.description}`),
    '',
    '## Optional',
    `- [Privacy policy](${base}/privacy-policy)`,
    `- [Contact](${base}/contact)`,
    `- [Sitemap](${base}/sitemap.xml)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
