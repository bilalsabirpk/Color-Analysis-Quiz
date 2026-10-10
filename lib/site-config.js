// Central place for anything environment-specific: domain, AdSense publisher ID,
// analytics ID. Everything reads from env vars with safe fallbacks so the app
// builds and runs before you've set anything up. See README.md for setup steps.

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '') ||
  'https://coloranalyzerquiz.com';

export const siteConfig = {
  name: 'Color Analysis',
  shortName: 'Color Analysis',
  title: 'Free Color Analysis Quiz: Seasonal Color Analysis Online',
  description:
    'Free color analysis quiz & test online: upload a photo for instant seasonal color analysis. Get your color season, undertone, palette & colors to avoid.',
  url: rawSiteUrl,
  locale: 'en_US',
  themeColor: '#7b2ff7',
  backgroundColor: '#fbf8ff',
  // Set NEXT_PUBLIC_TWITTER_HANDLE (e.g. "@yourhandle") if you have one.
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || undefined,
  // Set NEXT_PUBLIC_CONTACT_EMAIL to a real inbox before launch.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@coloranalyzerquiz.com',
  // Shown on the Contact page. Only promise what you can keep.
  responseTime: process.env.NEXT_PUBLIC_RESPONSE_TIME || '1–2 business days',
};

// --- AdSense -----------------------------------------------------------
// Fresh application: leave NEXT_PUBLIC_ADSENSE_CLIENT unset. Nothing AdSense
// related renders (no script, no ads.txt) until you set it, so there is
// nothing invalid sitting on the site while you wait for approval.
// Once Google gives you a publisher ID (format: pub-XXXXXXXXXXXXXXXX), add:
//   NEXT_PUBLIC_ADSENSE_CLIENT=pub-XXXXXXXXXXXXXXXX
// to your environment (and Vercel project settings), redeploy, and both the
// site-wide AdSense script and /ads.txt activate automatically.
export const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || null;

// --- Analytics -----------------------------------------------------------
// Optional. Set NEXT_PUBLIC_GA_ID (format: G-XXXXXXXXXX) to turn on GA4.
export const gaId = process.env.NEXT_PUBLIC_GA_ID || null;

// --- Social profiles -------------------------------------------------------
// Shown as round icons in the footer. Replace each URL with your real
// profile link (or set the env var). Set a value to '' to hide that icon.
export const socialLinks = [
  { key: 'facebook', label: 'Facebook', url: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? 'https://www.facebook.com/' },
  { key: 'linkedin', label: 'LinkedIn', url: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://www.linkedin.com/' },
  { key: 'instagram', label: 'Instagram', url: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/' },
  { key: 'tiktok', label: 'TikTok', url: process.env.NEXT_PUBLIC_TIKTOK_URL ?? 'https://www.tiktok.com/' },
  { key: 'pinterest', label: 'Pinterest', url: process.env.NEXT_PUBLIC_PINTEREST_URL ?? 'https://www.pinterest.com/' },
].filter((s) => s.url);

// --- About page: who built this ---------------------------------------------
// Shown in the "Who Built This" section of /about. Edit freely; only state
// things that are true (Google and visitors both reward real, verifiable
// authorship). Leave a link '' to hide it.
export const founder = {
  name: 'Muhammad Bilal',
  role: 'Web Developer',
  bio: [
    'Color Analysis was designed and built by Muhammad Bilal, an independent web developer with a strong interest in UI/UX design and color.',
    'He built the in-browser analyzer, the season palettes and the interactive tools, and he maintains the site and its guides. The color guidance is based on established seasonal color theory, the same undertone, depth and contrast framework professional colorists use.',
    'He reads every message sent through the Contact page.',
  ],
  links: {
    linkedin: process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN || '',
    website: process.env.NEXT_PUBLIC_FOUNDER_WEBSITE || '',
  },
};

// Default share image (app/opengraph-image.js). Pages that set their own
// `openGraph` must list it again, because Next.js replaces the whole
// openGraph object instead of merging it with the root one.
export const DEFAULT_OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: 'Free color analysis quiz' };

// Base openGraph fields for pages that define their own `openGraph` (Next.js
// replaces the root openGraph object rather than merging it).
export const OG_DEFAULTS = {
  type: 'website',
  siteName: siteConfig.name,
  locale: siteConfig.locale,
  images: [DEFAULT_OG_IMAGE],
};
