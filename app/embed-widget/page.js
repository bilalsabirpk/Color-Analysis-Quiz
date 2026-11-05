import Link from 'next/link';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import EmbedCodeBox from '@/components/EmbedCodeBox';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedTools from '@/components/RelatedTools';

// "For professionals": lets other websites embed the season quiz or the
// undertone test. Each embed carries a visible credit link back here.

const PATH = '/embed-widget';
const TITLE = 'Free Color Analysis Quiz Widget for Your Website (Embed Code)';
const DESCRIPTION =
  'Add a free color season quiz or skin undertone test to your website with one copy-paste embed code. No sign-up, no ads, private and mobile-friendly.';

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['color analysis widget', 'color season quiz embed', 'undertone test widget', 'free quiz widget for website', 'beauty quiz embed code'],
  alternates: { canonical: PATH },
  openGraph: { ...OG_DEFAULTS, url: PATH, title: TITLE, description: DESCRIPTION },
};

const AUDIENCES = [
  { name: 'Beauty and fashion bloggers', text: 'Let readers find their season or undertone right inside your post about colors, makeup or outfits.' },
  { name: 'Personal stylists and color consultants', text: 'Give visitors a quick first estimate before they book a full consultation with you.' },
  { name: 'Makeup artists and salons', text: 'Help clients pick lipstick, blush and hair colors that suit their undertone.' },
  { name: 'Boutiques and online stores', text: 'Add the quiz to a style guide or lookbook page so shoppers can pick colors that flatter them.' },
];

const FAQS = [
  { q: 'Is the widget really free?', a: 'Yes. The widget is free for personal and commercial websites. We only ask that you keep the small credit link under the widget.' },
  { q: 'Will it slow down my site?', a: 'No. The widget loads lazily in an iframe, so it does not block your page from loading. The quiz itself is lightweight and runs in the visitor\'s browser.' },
  { q: 'Does the widget collect my visitors\' data?', a: 'No. Answers are scored in the visitor\'s browser and are not stored or sent anywhere. The widget shows no ads and loads no analytics.' },
  { q: 'How do I add it to WordPress?', a: 'Edit your page or post, add a "Custom HTML" block, paste the embed code and update the page. It works the same way in Wix (Embed HTML), Squarespace (Code block) and Shopify (Custom Liquid or HTML section).' },
  { q: 'What does the small script do?', a: 'It only resizes the iframe to fit the quiz, so there is no inner scrollbar. If your site does not allow scripts, you can remove that line; the widget still works with its default height.' },
];

export default function EmbedWidgetPage() {
  const url = `${siteConfig.url}${PATH}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: TITLE,
      url,
      description: DESCRIPTION,
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Embed Widget', item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
              <Link href="/">Home</Link> / <span aria-current="page">Embed Widget</span>
            </nav>
            <span className="eyebrow">🧩 For websites and professionals</span>
            <h1>
              Add a Free Color Analysis Quiz <span className="grad-text">to Your Website</span>
            </h1>
            <p className="lead">
              Put our color season quiz or skin undertone test on your own site with one
              copy-paste code. It is free, shows no ads, works on mobile, and keeps your
              visitors&apos; answers private in their browser.
            </p>
          </div>
        </section>

        <section className="alt-bg" aria-labelledby="getCodeHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="getCodeHeading">Choose a Widget and Copy the Code</h2>
              <p>Pick a widget, copy the code, and paste it into any page on your site.</p>
            </div>
            <EmbedCodeBox />
          </div>
        </section>

        <section aria-labelledby="howHeading">
          <div className="container prose">
            <h2 id="howHeading">How to Add the Widget in 3 Steps</h2>
            <ol>
              <li>Choose the Color Season Quiz or the Undertone Test above and click <strong>Copy embed code</strong>.</li>
              <li>Open the page on your website where you want it, and add an HTML block (in WordPress: a &quot;Custom HTML&quot; block).</li>
              <li>Paste the code and publish. The widget resizes itself to fit your page.</li>
            </ol>
            <p>
              Please keep the short credit line under the widget. It is how we keep the tool
              free for everyone.
            </p>
          </div>
        </section>

        <section className="alt-bg" aria-labelledby="whoHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="whoHeading">Built for Beauty and Style Websites</h2>
            </div>
            <div className="wsai-best">
              {AUDIENCES.map((a) => (
                <div key={a.name} className="wsai-best-card">
                  <h3>{a.name}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="ewFaqHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="ewFaqHeading">Embed Widget FAQ</h2>
            </div>
            <FaqAccordion items={FAQS} idPrefix="ew" headingLevel="h3" />
            <p className="wsai-note">
              Questions or a custom request? <Link href="/contact">Contact us</Link>.
            </p>
          </div>
        </section>

        <RelatedTools current={PATH} className="alt-bg" />
      </main>
    </>
  );
}
