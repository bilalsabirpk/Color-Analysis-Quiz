import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name}: what data this site collects, how photos are processed locally in your browser, and how advertising and analytics cookies are used.`,
  alternates: { canonical: '/privacy-policy' },
};

const LAST_UPDATED = 'September 2026';

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">🔒 Privacy</span>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="content-card prose">
            <h2>1. Photos you upload</h2>
            <p>
              When you upload a photo to the color analysis quiz, it is processed entirely
              in your own browser using the HTML5 Canvas API. The photo is never uploaded
              to, transmitted to, or stored on any server operated by us or any third
              party. If you close or reload the tab, the photo is gone — we have no copy
              of it and no way to retrieve it.
            </p>

            <h2>2. Local storage</h2>
            <p>
              The site uses your browser&apos;s local storage (not cookies) to remember
              things you choose to save between visits — favorited results and any custom
              colors you add to a season&apos;s palette. This data stays on your device,
              is never transmitted to us, and can be cleared at any time by clearing your
              browser&apos;s site data for this domain.
            </p>

            <h2>3. Cookies and advertising</h2>
            <p>
              This site may display advertisements served by Google AdSense. Google and
              its partners may use cookies (including the DoubleClick cookie) or similar
              technologies to serve ads based on your prior visits to this site or other
              websites, and to measure ad performance. You can opt out of personalized
              advertising by visiting{' '}
              <a
                href="https://adssettings.google.com/authenticated"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>{' '}
              or, for non-personalized approaches generally,{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                www.aboutads.info/choices
              </a>
              . Learn more about how Google uses data at{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/technologies/partner-sites
              </a>
              . For full details, see our <Link href="/cookie-policy">Cookie Policy</Link>.
            </p>

            <h2>4. Analytics</h2>
            <p>
              If enabled, this site may use a standard web analytics service (such as
              Google Analytics) to understand aggregate traffic — for example, which pages
              are visited and roughly how many people visit. Analytics data is aggregated
              and is not linked to the photos you process in the quiz, which never leave
              your browser in the first place.
            </p>

            <h2>5. Information you provide directly</h2>
            <p>
              If you contact us by email or through the contact form, we receive the name,
              email address and message you provide and use them only to reply to you.
              Contact-form messages are delivered to our inbox by an email-delivery
              provider. We do not run a mailing list and never add you to one.
            </p>

            <h2>6. Children&apos;s privacy</h2>
            <p>
              This site is not directed at children under 13, and we do not knowingly
              collect personal information from children under 13.
            </p>

            <h2>7. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will
              be reflected by updating the &quot;Last updated&quot; date above.
            </p>

            <h2>8. Contact</h2>
            <p>
              Questions about this policy can be sent to{' '}
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>,
              or via the <Link href="/contact">Contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
