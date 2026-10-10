import Link from 'next/link';
import { siteConfig, socialLinks } from '@/lib/site-config';
import { SOCIAL_ICON_PATHS } from '@/lib/social-icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo" style={{ color: '#fff', marginBottom: 12 }}>
              <span className="logo-mark" aria-hidden="true"></span>
              <span>
                Color Analysis
                <small style={{ color: '#bfb0d6' }}>AI-Powered Color Analysis</small>
              </span>
            </Link>
            <p style={{ fontSize: '13.5px' }}>
              Free, instant and 100% private color analysis. Your photo never leaves your
              device.
            </p>

            {socialLinks.length > 0 && (
              <ul className="footer-social" aria-label="Follow us on social media">
                {socialLinks.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${s.label} (opens in a new tab)`}
                      title={s.label}
                    >
                      <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
                        <path d={SOCIAL_ICON_PATHS[s.key]} fill="currentColor" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <Link
              className="footer-feedback"
              href="/contact?topic=bug"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H9l-4.2 3.5a.5.5 0 01-.8-.4V5.5z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path d="M12 7.5v5M9.5 10h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              Submit a bug or request a feature here.
            </Link>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#season-types">All Color Seasons</Link></li>
              <li><Link href="/guides">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Free Tools</h4>
            <ul>
              <li><Link href="/#quiz">Color Analysis Quiz</Link></li>
              <li><Link href="/what-season-am-i">What Season Am I? Quiz</Link></li>
              <li><Link href="/#undertone-test">Undertone Check</Link></li>
              <li><Link href="/#harmony">Color Harmony Generator</Link></li>
              <li><Link href="/#seasons">Season Palettes</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><a href="/sitemap.xml">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © <span id="year">{year}</span> Color Analysis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
