import Link from 'next/link';
import { siteConfig, founder, OG_DEFAULTS } from '@/lib/site-config';

export const metadata = {
  title: `About Us: Built by ${founder.name}`,
  description: `${siteConfig.name} is a free, private color analysis tool built by ${founder.name}. Our mission, values and what makes this seasonal color analysis different.`,
  alternates: { canonical: '/about' },
  openGraph: {
    ...OG_DEFAULTS,
    url: '/about',
    title: `About | ${siteConfig.name}`,
    description: `Why ${siteConfig.name} exists, who built it, and how it keeps your photos private.`,
  },
};

const PRIORITIES = [
  {
    title: 'Everything runs on your device',
    text: 'Your photo is read and analyzed in your browser. We chose this even though a server would have been easier to build, because it is the only way to truly protect your photo.',
  },
  {
    title: 'Free, with no premium tier',
    text: 'The full result (season, best colors, colors to avoid, metals, makeup and try-on tools) is free. There is no blurred preview, trial or paywall.',
  },
  {
    title: 'Grounded in real color theory',
    text: 'Recommendations follow the established undertone, depth and contrast framework used by professional colorists, not generic "wear more blue" advice.',
  },
];

const VALUES = [
  { icon: '🔒', title: 'Privacy first', text: 'Photos are processed in your browser and never stored, shared or uploaded. Not even we can see them.' },
  { icon: '🎯', title: 'Honest accuracy', text: 'We explain exactly how the estimate is made and where its limits are, so you can judge the result yourself.' },
  { icon: '🌍', title: 'Accessible to everyone', text: 'Free, no account, and it works on any modern phone, tablet or computer.' },
  { icon: '🤝', title: 'Inclusive by design', text: 'Seasons depend on undertone, depth and contrast, not skin lightness. Every skin tone, age and gender belongs here.' },
  { icon: '💪', title: 'Empowerment', text: 'Clear, specific guidance so you can shop, dress and do your makeup with confidence, without guesswork.' },
  { icon: '✨', title: 'Always improving', text: 'We keep refining the palettes, tools and guides based on color theory and on your feedback.' },
];

const DIFFERENT = [
  {
    icon: '🎁',
    title: 'Always free, no bait and switch',
    text: 'Some tools show a "free" result that turns out to be partial until you pay or sign up. Here the complete analysis, with all palettes and tools, is free for everyone, with no email address needed.',
  },
  {
    icon: '📱',
    title: 'No app, no download, no account',
    text: 'It runs in your web browser on iPhone, Android, tablet or desktop. There is nothing to install and nothing to sign up for. Close the tab and nothing is left behind.',
  },
  {
    icon: '🔍',
    title: 'Private, and you can check it',
    text: 'Open your browser’s developer tools, go to the Network tab and run an analysis. You will see that no image is sent anywhere. The analysis runs with the HTML5 Canvas API on your own device.',
  },
  {
    icon: '🎨',
    title: 'More than a season label',
    text: 'Beyond your season, you get best and worst colors, metals, makeup tones and neutrals. You can also recolor your own clothes in a photo and build matching palettes with the harmony generator.',
  },
];

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${siteConfig.name}`,
    url: `${siteConfig.url}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      founder: { '@type': 'Person', name: founder.name, jobTitle: founder.role },
    },
  };
  const links = Object.entries(founder.links || {}).filter(([, url]) => url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, '\\u003c') }}
      />
      <main id="main" className="about-page">
        {/* HERO */}
        <section className="ab-hero">
          <div className="container">
            <span className="eyebrow">👋 About Us</span>
            <h1>
              About <span className="grad-text">{siteConfig.name}</span>
            </h1>
            <p className="ab-lead">
              We provide a free, private color analysis tool that helps people everywhere
              find their seasonal palette and make confident choices about clothes, makeup,
              hair color and jewelry.
            </p>
            <ul className="ab-facts" aria-label="Quick facts">
              <li><strong>100%</strong> runs in your browser</li>
              <li><strong>0</strong> photos uploaded</li>
              <li><strong>4</strong> seasonal palettes</li>
              <li><strong>Free</strong> with no sign-up</li>
            </ul>
          </div>
        </section>

        {/* MISSION */}
        <section className="ab-section" aria-labelledby="missionHeading">
          <div className="container ab-split">
            <div>
              <p className="ab-kicker">Our Mission</p>
              <h2 id="missionHeading">Color guidance that everyone can access</h2>
              <p>
                Our mission is to make professional-style color guidance accessible to
                everyone. We help you understand your undertone and color season, then
                turn that into practical advice: which colors to wear, which to avoid, and
                which metals and makeup shades bring out your natural features.
              </p>
              <p>
                We believe knowing your colors is empowering. When you know what works for
                you, you can shop and dress with confidence, without trial and error or an
                expensive consultation. Our goal is to bridge the gap between a professional
                color analysis and everyday life.
              </p>
            </div>
            <div className="ab-promise">
              <p className="ab-promise-title">Our promise to you</p>
              <ul>
                <li>Your photo never leaves your device</li>
                <li>The full result is always free</li>
                <li>No account, no email, no tracking of your photos</li>
                <li>Honest about what an online analysis can and can&apos;t do</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WHO BUILT THIS */}
        <section className="ab-section alt-bg" aria-labelledby="founderHeading">
          <div className="container">
            <div className="ab-founder">
              <div className="ab-avatar" aria-hidden="true">
                {initials(founder.name)}
              </div>
              <div className="ab-founder-body">
                <p className="ab-kicker">Who Built This</p>
                <h2 id="founderHeading">{founder.name}</h2>
                <p className="ab-role">{founder.role}</p>
                {founder.bio.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
                <div className="ab-founder-links">
                  <Link href="/contact" className="btn btn-primary btn-sm">
                    Get in touch
                  </Link>
                  {links.map(([key, url]) => (
                    <a key={key} href={url} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
                      {key === 'linkedin' ? 'LinkedIn' : 'Website'} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WE BUILT THIS */}
        <section className="ab-section" aria-labelledby="whyBuiltHeading">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">💡 Our Story</span>
              <h2 id="whyBuiltHeading">Why We Built This</h2>
            </div>
            <div className="ab-story">
              <article className="ab-card">
                <h3>The problem we kept running into</h3>
                <p>
                  Search for &quot;what colors suit me&quot; and you usually find one of
                  two things: a vague quiz that asks you to guess your own undertone, or an
                  app that wants an account, an email address or a paid upgrade before it
                  shows you anything useful.
                </p>
                <p>
                  Neither felt right. Most people can&apos;t judge their own coloring
                  objectively, and handing over a selfie just to learn your colors
                  shouldn&apos;t be the price of a result. We wanted something instant,
                  free and private, so we built it.
                </p>
              </article>
              <article className="ab-card">
                <h3>What we prioritized</h3>
                <ol className="ab-priorities">
                  {PRIORITIES.map((p, i) => (
                    <li key={p.title}>
                      <span className="ab-num" aria-hidden="true">{i + 1}</span>
                      <div>
                        <strong>{p.title}</strong>
                        <p>{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="ab-section alt-bg" aria-labelledby="valuesHeading">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">💜 What Guides Us</span>
              <h2 id="valuesHeading">Our Core Values</h2>
              <p>These principles guide every decision we make, from design to privacy.</p>
            </div>
            <ul className="ab-values">
              {VALUES.map((v) => (
                <li key={v.title}>
                  <span className="ab-value-icon" aria-hidden="true">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT SETS US APART */}
        <section className="ab-section" aria-labelledby="apartHeading">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">⭐ Why Choose Us</span>
              <h2 id="apartHeading">What Sets Us Apart</h2>
              <p>There are other color analysis tools out there. Here&apos;s what&apos;s different about this one.</p>
            </div>
            <div className="ab-apart">
              {DIFFERENT.map((d) => (
                <article key={d.title} className="ab-apart-item">
                  <span className="ab-apart-icon" aria-hidden="true">{d.icon}</span>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ab-section ab-cta-wrap">
          <div className="container">
            <div className="ab-cta">
              <h2>Start Finding Your Colors Today</h2>
              <p>
                Upload a photo and discover your season, best colors and colors to avoid in
                under a minute. It&apos;s fast, free and private.
              </p>
              <div className="ab-cta-actions">
                <Link href="/#quiz" className="btn ab-cta-btn">
                  Try the free analysis →
                </Link>
                <Link href="/guides" className="btn ab-cta-ghost">
                  Read the blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
