import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import { TOOLS, TOOL_GROUPS } from '@/lib/tools';

// /tools: every free tool on one page, grouped the same way as the header
// "Tools" menu. Reads lib/tools.js, so a new tool shows up here automatically.

const TITLE = 'Free Color Analysis Tools: Season, Undertone & Makeup';
const DESCRIPTION =
  'All our free color analysis tools in one place: find your color season, undertone and skin tone, plus lipstick, blush, foundation, hair and outfit color finders.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/tools' },
  openGraph: { ...OG_DEFAULTS, url: '/tools', title: TITLE, description: DESCRIPTION },
};

const GROUP_INTRO = {
  season: 'Start here: find your color season and contrast level.',
  skin: 'Check your undertone, skin tone, foundation, concealer and jewelry metal.',
  makeup: 'Lipstick, blush and eyeshadow shades for your season.',
  style: 'Clothing colors, hijab, hair color and color combinations.',
};

const publicTools = TOOLS.filter((t) => t.href !== '/embed-widget');
const embed = TOOLS.find((t) => t.href === '/embed-widget');

export default function ToolsPage() {
  const url = `${siteConfig.url}/tools`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: TITLE,
      description: DESCRIPTION,
      url,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: publicTools.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: t.title,
          url: `${siteConfig.url}${t.href}`,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumb-nav">
              <Link href="/">Home</Link> / <span aria-current="page">Tools</span>
            </nav>
            <span className="eyebrow">🧰 {publicTools.length} free tools</span>
            <h1>
              Free Color Analysis Tools: <span className="grad-text">All in One Place</span>
            </h1>
            <p className="lead">
              Every tool runs in your browser, free and without sign-up. Photos stay on your
              device. Not sure where to start? Find your season first, then use the other tools
              to pick makeup, clothes and hair colors that match it.
            </p>
          </div>
        </section>

        {TOOL_GROUPS.map((g, gi) => {
          const list = publicTools.filter((t) => t.group === g.key);
          if (!list.length) return null;
          return (
            <section key={g.key} className={gi % 2 ? '' : 'alt-bg'} aria-labelledby={`tg-${g.key}`}>
              <div className="container">
                <div className="section-head">
                  <h2 id={`tg-${g.key}`}>{g.label}</h2>
                  <p>{GROUP_INTRO[g.key]}</p>
                </div>
                <div className="tools-grid">
                  {list.map((t) => (
                    <Link key={t.href} href={t.href} className="tool-card">
                      <span className="tool-icon" aria-hidden="true">{t.icon}</span>
                      <h3>{t.title}</h3>
                      <p>{t.short}</p>
                      <span className="tool-go" aria-hidden="true">Open tool →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section aria-labelledby="tg-more">
          <div className="container">
            <div className="section-head">
              <h2 id="tg-more">Learn more</h2>
              <p>
                Read the <Link href="/guides">color analysis blog</Link> for palettes, makeup and
                outfit ideas, or see the <Link href="/faq">FAQ</Link>.
                {embed && (
                  <>
                    {' '}Have a website? <Link href={embed.href}>Embed the free quiz</Link> on it.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
