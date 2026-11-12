import Link from 'next/link';
import { siteConfig, footerSocial } from '@/lib/site-config';
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
                <small style={{ color: '#94a3b8' }}>Free Color Season Analysis</small>
              </span>
            </Link>
            <p style={{ fontSize: '13.5px' }}>
              Free, instant and 100% private color analysis. Your photo never leaves your
              device.
            </p>

            {footerSocial.length > 0 && (
              <ul className="footer-social" aria-label="Follow us on social media">
                {footerSocial.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel={s.pending ? 'nofollow noopener noreferrer' : 'noopener noreferrer'}
                      aria-label={s.pending ? `${s.label} (opens in a new tab)` : `${siteConfig.name} on ${s.label} (opens in a new tab)`}
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
            <h3>Explore</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#season-types">All Color Seasons</Link></li>
              <li><Link href="/tools">All Free Tools</Link></li>
              <li><Link href="/guides">Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Free Tools</h3>
            <ul>
              <li><Link href="/#quiz">Color Analysis Quiz</Link></li>
              <li><Link href="/what-season-am-i">What Season Am I? Quiz</Link></li>
              <li><Link href="/skin-tone-analyzer">Skin Tone Analyzer</Link></li>
              <li><Link href="/undertone-test">Undertone Test</Link></li>
              <li><Link href="/lipstick-color-finder">Lipstick Shade Finder</Link></li>
              <li><Link href="/foundation-undertone-finder">Foundation Undertone Finder</Link></li>
              <li><Link href="/hair-color-finder">Hair Color Finder</Link></li>
              <li><Link href="/gold-or-silver-jewelry-test">Gold or Silver Test</Link></li>
              <li><Link href="/concealer-shade-finder">Concealer Shade Finder</Link></li>
              <li><Link href="/blush-color-finder">Blush Color Finder</Link></li>
              <li><Link href="/eyeshadow-color-finder">Eyeshadow Color Finder</Link></li>
              <li><Link href="/does-this-color-suit-me">Does This Color Suit Me?</Link></li>
              <li><Link href="/hijab-color-finder">Hijab Color Finder</Link></li>
              <li><Link href="/contrast-test">Contrast Level Test</Link></li>
              <li><Link href="/color-harmony-generator">Color Harmony Generator</Link></li>
              <li><Link href="/seasonal-color-palettes">Seasonal Color Palettes</Link></li>
              <li><Link href="/embed-widget">Embed the Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><a href="/sitemap.xml">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-featured" aria-label="Featured on">
          <span className="footer-featured-label">Featured on</span>
          <a
            href="https://findly.tools/color-analysis-quiz-1?utm_source=color-analysis-quiz-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://findly.tools/badges/findly-tools-badge-light.svg"
              alt="Featured on Findly.tools"
              width="175"
              height="55"
              loading="lazy"
            />
          </a>
          <a href="https://fazier.com" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=light"
              alt="Fazier badge"
              width="120"
              height="40"
              loading="lazy"
            />
          </a>
        </div>
        <div className="footer-bottom">
          © <span id="year">{year}</span> Color Analysis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
