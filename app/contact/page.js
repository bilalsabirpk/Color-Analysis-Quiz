import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name}: ask about your color analysis result, report a bug, suggest a feature or send a privacy question. We usually reply within ${siteConfig.responseTime.toLowerCase()}.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    url: '/contact',
    title: `Contact Us | ${siteConfig.name}`,
  },
};

const RESPONSE_TIMES = [
  { label: 'General questions', time: siteConfig.responseTime },
  { label: 'Bugs & technical issues', time: siteConfig.responseTime },
  { label: 'Partnership & press', time: '2–3 business days' },
];

const TOPICS = [
  'Questions about your color season or palette',
  'Photo, lighting and accuracy tips',
  'Bugs and technical problems',
  'Feature requests and suggestions',
  'Privacy and data questions',
  'Partnerships and press',
];

export default async function ContactPage({ searchParams }) {
  const { topic } = (await searchParams) || {};
  const email = siteConfig.contactEmail;
  return (
    <main id="main" className="contact-page">
      <section className="ct-hero">
        <div className="container">
          <div className="ct-head">
            <span className="ct-head-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <div className="ct-badges">
                <span className="ct-pill">Support</span>
                <span className="ct-live">
                  <span className="ct-dot" aria-hidden="true" /> Usually replies within{' '}
                  {siteConfig.responseTime.toLowerCase()}
                </span>
              </div>
              <h1>Contact Us</h1>
              <p className="ct-lead">
                Have a question about your color season, found a bug, or want to share
                feedback? Fill in the form and we&apos;ll get back to you.
              </p>
            </div>
          </div>

          <ul className="ct-info">
            <li>
              <span className="ct-info-icon" aria-hidden="true">✉️</span>
              <div>
                <p className="ct-info-label">Email</p>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </li>
            <li>
              <span className="ct-info-icon" aria-hidden="true">🕐</span>
              <div>
                <p className="ct-info-label">Response time</p>
                <p className="ct-info-value">{siteConfig.responseTime}</p>
              </div>
            </li>
            <li>
              <span className="ct-info-icon" aria-hidden="true">🔒</span>
              <div>
                <p className="ct-info-label">Your photos</p>
                <p className="ct-info-value">Never uploaded or shared with us</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="ct-body">
        <div className="container ct-grid">
          <div className="ct-card ct-form-card">
            <h2>Send us a message</h2>
            <p className="ct-card-sub">All fields are required.</p>
            <ContactForm
              contactEmail={email}
              siteName={siteConfig.name}
              initialTopic={typeof topic === 'string' ? topic : ''}
            />
          </div>

          <aside className="ct-side" aria-label="More ways to get help">
            <div className="ct-card">
              <h2 className="ct-side-title">Email us directly</h2>
              <p className="ct-info-label">General inquiries</p>
              <a className="ct-side-email" href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <div className="ct-card">
              <h2 className="ct-side-title">Response times</h2>
              <dl className="ct-times">
                {RESPONSE_TIMES.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd>{r.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="ct-card">
              <h2 className="ct-side-title">Common topics</h2>
              <ul className="ct-topics">
                {TOPICS.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="ct-card ct-faq">
              <h2 className="ct-side-title">Check the FAQ first</h2>
              <p>
                Many questions about seasons, undertones, accuracy and privacy are already
                answered in our FAQ.
              </p>
              <Link href="/faq" className="btn btn-outline btn-sm">
                Browse FAQ →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
