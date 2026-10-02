import Link from 'next/link';
import { siteConfig, adsenseClientId, gaId } from '@/lib/site-config';

export const metadata = {
  title: 'Cookie Policy',
  description: `Cookie Policy for ${siteConfig.name}: which cookies and browser storage the site uses, why, how long they last, and how to control or delete them.`,
  alternates: { canonical: '/cookie-policy' },
  openGraph: {
    url: '/cookie-policy',
    title: `Cookie Policy | ${siteConfig.name}`,
  },
};

const LAST_UPDATED = 'September 25, 2026';
const LAST_UPDATED_ISO = '2026-09-25';

const SECTIONS = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-are-cookies', title: 'What Are Cookies?' },
  { id: 'how-we-use', title: 'How We Use Cookies' },
  { id: 'third-party', title: 'Third-Party Cookies' },
  { id: 'your-choices', title: 'Your Rights and Choices' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'privacy', title: 'Privacy and Security' },
  { id: 'questions', title: 'Questions About Cookies?' },
];

function Status({ on }) {
  return (
    <span className={`cp-status ${on ? 'is-on' : 'is-off'}`}>
      <span className="cp-status-dot" aria-hidden="true" />
      {on ? 'Active' : 'Not in use'}
    </span>
  );
}

export default function CookiePolicyPage() {
  const ads = Boolean(adsenseClientId);
  const analytics = Boolean(gaId);
  const email = siteConfig.contactEmail;

  const CATEGORIES = [
    {
      icon: '🛡️',
      title: 'Essential',
      on: true,
      text: 'Needed for the site to load and stay secure. We don’t set any essential cookies of our own; your browser and our hosting provider may use standard technical data (such as your IP address) to deliver pages safely over HTTPS.',
    },
    {
      icon: '⭐',
      title: 'Preferences (browser storage)',
      on: true,
      text: 'Remembers things you choose to save, like favorite results and custom palette colors. This uses your browser’s local storage, not cookies, and never leaves your device.',
    },
    {
      icon: '📊',
      title: 'Analytics',
      on: analytics,
      text: 'Helps us understand overall traffic, like which pages are popular and roughly how many people visit. It is aggregated, never linked to your photo, and only runs if analytics is switched on.',
    },
    {
      icon: '📢',
      title: 'Advertising',
      on: ads,
      text: 'Lets Google AdSense show ads and measure their performance, which keeps the tool free. Ads may be personalized based on your visits to this and other sites, unless you opt out.',
    },
  ];

  const STORAGE = [
    { name: 'colorAnalysisFavorites', type: 'Local storage', purpose: 'Results you save with "Add to Favorites"', duration: 'Until you remove it', on: true },
    { name: 'colorAnalysisCustomColors', type: 'Local storage', purpose: 'Custom colors you add to a season palette', duration: 'Until you remove it', on: true },
    { name: '_ga, _ga_*', type: 'Cookie (Google Analytics)', purpose: 'Distinguishes visitors for aggregate traffic stats', duration: 'Up to 2 years', on: analytics },
    { name: '__gads, __gpi, IDE', type: 'Cookie (Google AdSense)', purpose: 'Ad delivery, frequency capping and measurement', duration: '13–24 months', on: ads },
  ];

  const policyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Cookie Policy | ${siteConfig.name}`,
    url: `${siteConfig.url}/cookie-policy`,
    dateModified: LAST_UPDATED_ISO,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policyJsonLd).replace(/</g, '\\u003c') }}
      />
      <main id="main" className="legal-page">
        <section className="lg-hero">
          <div className="container">
            <span className="eyebrow">🍪 Legal</span>
            <h1>Cookie Policy</h1>
            <p className="lg-lead">
              What cookies and browser storage {siteConfig.name} uses, why we use them, and
              how you can control them.
            </p>
            <p className="lg-updated">
              Last updated: <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED}</time>
            </p>
            <div className="lg-summary" role="note">
              <span className="lg-summary-icon" aria-hidden="true">🔒</span>
              <p>
                <strong>The short version:</strong> your photos are never stored in cookies
                or sent to us. We don&apos;t set our own tracking cookies. Third-party
                cookies are used only for {ads || analytics ? 'the analytics and advertising services listed below' : 'analytics or ads, and neither is switched on right now'}.
              </p>
            </div>
          </div>
        </section>

        <section className="lg-body">
          <div className="container lg-grid">
            <nav className="lg-toc" aria-label="On this page">
              <p className="lg-toc-title">On this page</p>
              <ol>
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="lg-content">
              <section id="introduction" className="lg-sec">
                <h2><span className="lg-num">1</span>Introduction</h2>
                <p>
                  {siteConfig.name} (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;)
                  uses a small amount of browser storage, and may use third-party cookies,
                  to run this website, remember what you choose to save, understand overall
                  traffic and keep the tool free.
                </p>
                <p>
                  This Cookie Policy explains what cookies are, how we use them, and your
                  choices. Please read it together with our{' '}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </p>
              </section>

              <section id="what-are-cookies" className="lg-sec">
                <h2><span className="lg-num">2</span>What Are Cookies?</h2>
                <p>
                  Cookies are small text files a website stores on your device (computer,
                  tablet or phone) when you visit. They can remember information about your
                  visit and preferences. There are two main types:
                </p>
                <ul>
                  <li><strong>Session cookies:</strong> temporary, deleted when you close your browser.</li>
                  <li><strong>Persistent cookies:</strong> stay for a set time or until you delete them.</li>
                </ul>
                <p>
                  Cookies can be set by the site you visit (<em>first-party</em>) or by
                  services that site uses (<em>third-party</em>). Similar technologies, such
                  as your browser&apos;s <strong>local storage</strong>, also let a site
                  remember information on your device.
                </p>
              </section>

              <section id="how-we-use" className="lg-sec">
                <h2><span className="lg-num">3</span>How We Use Cookies</h2>
                <p>Here is every category, and whether it is currently in use on this site:</p>
                <div className="cp-cats">
                  {CATEGORIES.map((c) => (
                    <div key={c.title} className="cp-cat">
                      <div className="cp-cat-head">
                        <span className="cp-cat-icon" aria-hidden="true">{c.icon}</span>
                        <h3>{c.title}</h3>
                        <Status on={c.on} />
                      </div>
                      <p>{c.text}</p>
                    </div>
                  ))}
                </div>

                <h3 className="lg-h3">What is stored on your device</h3>
                <div className="cp-table-wrap" role="region" aria-label="Cookies and storage used" tabIndex={0}>
                  <table className="cp-table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STORAGE.map((r) => (
                        <tr key={r.name}>
                          <td><code>{r.name}</code></td>
                          <td>{r.type}</td>
                          <td>{r.purpose}</td>
                          <td>{r.duration}</td>
                          <td><Status on={r.on} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="third-party" className="lg-sec">
                <h2><span className="lg-num">4</span>Third-Party Cookies</h2>
                <p>When they are switched on, these third parties may set their own cookies:</p>
                <ul>
                  <li>
                    <strong>Google Analytics</strong> ({analytics ? 'active' : 'not in use'}):
                    aggregate traffic statistics.
                  </li>
                  <li>
                    <strong>Google AdSense</strong> ({ads ? 'active' : 'not in use'}): shows
                    ads and measures them. Google and its partners may use cookies to show
                    ads based on your visits to this and other websites. See{' '}
                    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                      how Google uses data
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  These companies have their own privacy and cookie policies, which we
                  encourage you to read. We don&apos;t control the cookies they set.
                </p>
              </section>

              <section id="your-choices" className="lg-sec">
                <h2><span className="lg-num">5</span>Your Rights and Choices</h2>
                <div className="cp-choices">
                  <div>
                    <h3>🌐 Browser settings</h3>
                    <p>
                      You can block or delete cookies and site data at any time. Guides:{' '}
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>,{' '}
                      <a href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">Firefox</a>,{' '}
                      <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>,{' '}
                      <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>.
                    </p>
                  </div>
                  <div>
                    <h3>🎯 Opt out of personalized ads</h3>
                    <p>
                      Use{' '}
                      <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>{' '}
                      or{' '}
                      <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>{' '}
                      (US) /{' '}
                      <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">youronlinechoices.eu</a>{' '}
                      (EU).
                    </p>
                  </div>
                  <div>
                    <h3>📈 Opt out of analytics</h3>
                    <p>
                      Install the{' '}
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out add-on</a>{' '}
                      or block cookies for this site.
                    </p>
                  </div>
                  <div>
                    <h3>🚫 Do Not Track</h3>
                    <p>
                      There is no common standard for &quot;Do Not Track&quot; signals, so we
                      don&apos;t respond to them. Use the options above instead.
                    </p>
                  </div>
                </div>
                <p className="lg-note">
                  <strong>Note:</strong> blocking cookies won&apos;t stop the color analysis
                  from working. Clearing site data will remove your saved favorites and
                  custom colors.
                </p>
              </section>

              <section id="retention" className="lg-sec">
                <h2><span className="lg-num">6</span>Data Retention</h2>
                <ul>
                  <li><strong>Session cookies:</strong> deleted when you close your browser.</li>
                  <li><strong>Local storage (favorites, custom colors):</strong> kept until you remove them or clear your browser&apos;s site data.</li>
                  <li><strong>Analytics cookies:</strong> up to 2 years; reports are aggregated.</li>
                  <li><strong>Advertising cookies:</strong> up to 13 months in the EU/UK and up to 24 months elsewhere, depending on the cookie.</li>
                  <li><strong>Your photos:</strong> never stored. They are gone as soon as you close or reload the page.</li>
                </ul>
              </section>

              <section id="privacy" className="lg-sec">
                <h2><span className="lg-num">7</span>Privacy and Security</h2>
                <ul className="lg-checks">
                  <li>We never upload or store the photos you analyze</li>
                  <li>All image processing happens in your own browser</li>
                  <li>The site is served over a secure HTTPS connection</li>
                  <li>We don&apos;t sell your personal information</li>
                </ul>
                <p>
                  For more detail, read our <Link href="/privacy-policy">Privacy Policy</Link>{' '}
                  and <Link href="/terms">Terms of Use</Link>.
                </p>
              </section>

              <section id="questions" className="lg-sec">
                <h2><span className="lg-num">8</span>Questions About Cookies?</h2>
                <p>If you have questions about this Cookie Policy, get in touch:</p>
                <div className="lg-contact">
                  <a href={`mailto:${email}`} className="lg-contact-item">
                    <span aria-hidden="true">✉️</span>
                    <span>
                      <small>Email</small>
                      {email}
                    </span>
                  </a>
                  <Link href="/contact?topic=privacy" className="lg-contact-item">
                    <span aria-hidden="true">💬</span>
                    <span>
                      <small>Contact form</small>
                      Send us a message
                    </span>
                  </Link>
                </div>
                <p className="lg-note">
                  We may update this Cookie Policy from time to time, for example when we
                  add a new service. Changes will be shown by the &quot;Last updated&quot;
                  date above.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
