import HeroVisuals from '@/components/HeroVisuals';

// Homepage hero — centered layout modelled on the reference tool sites:
// H1 question, one-paragraph promise, two primary actions (Upload Photo /
// Use Camera) and a row of short trust facts. The two buttons are plain
// <button>s handled by components/QuizLaunchers.jsx (event delegation), so
// this stays a server component and the copy is real HTML for crawlers.

const TRUST = [
  {
    key: 'private',
    text: '100% private',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
        <path d="M8 10.5V8a4 4 0 118 0v2.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'free',
    text: 'Free, no sign-up',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'fast',
    text: 'Results in seconds',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const UploadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 15V4m0 0L7.5 8.5M12 4l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CameraIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 8.5A2.5 2.5 0 016.5 6h1.6l1.2-1.8A1.5 1.5 0 0110.55 3.5h2.9a1.5 1.5 0 011.25.7L15.9 6h1.6A2.5 2.5 0 0120 8.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5v-8z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.9" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="hero hero-centered" id="top" aria-labelledby="heroHeading">
      <HeroVisuals />
      <div className="container hero-inner">
        <h1 id="heroHeading">
          Free Color Analysis Quiz: <span className="grad-text">Find Your Color Season</span>
        </h1>
        <div className="hero-seasonbar" aria-hidden="true">
          <i style={{ background: '#F6A94A' }} />
          <i style={{ background: '#7F95D1' }} />
          <i style={{ background: '#B85C38' }} />
          <i style={{ background: '#0B1F3A' }} />
        </div>
        <p className="lead">
          Upload a selfie for a free color analysis test online. Find your color season, personal color palette, best colors and colors to avoid in seconds.
        </p>
        <div className="hero-ctas">
          <button type="button" className="btn btn-primary btn-lg" data-quiz-upload>
            <UploadIcon /> Upload Photo
          </button>
          <button type="button" className="btn btn-outline btn-lg" data-quiz-camera>
            <CameraIcon /> Use Camera
          </button>
        </div>
        <ul className="hero-trust-row" aria-label="Why use this tool">
          {TRUST.map((t) => (
            <li key={t.key}>
              <span className="htr-icon">{t.icon}</span>
              {t.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
