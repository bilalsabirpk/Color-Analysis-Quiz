import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig, adsenseClientId, gaId } from '@/lib/site-config';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'color analysis quiz',
    'free color analysis quiz',
    'seasonal color analysis quiz',
    'season color analysis quiz',
    'online color analysis quiz',
    'color analysis online quiz',
    'color analysis quiz free',
    'color analysis quiz photo',
    'color analysis',
    'free color analysis',
    'seasonal color analysis',
    'color season analysis',
    'personal color analysis',
    'color palette analysis',
    'color seasons',
    '16 season color analysis',
    '12 season color analysis',
    'color test',
    'what season am i',
    'what colors suit me',
    'AI color analysis',
    'undertone test',
    'warm or cool undertone',
    'color palette from image',
    'change background color',
    'image color changer',
    'color harmony generator',
    'color wheel',
    'what season am i',
    'color palette for skin tone',
    'what colors look good on me',
    'skin undertone test',
    'soft autumn',
    'deep autumn',
    'warm autumn',
    'soft summer',
    'cool summer',
    'light summer',
    'light spring',
    'warm spring',
    'bright spring',
    'deep winter',
    'cool winter',
    'bright winter',
    'olive skin colors',
    'color analysis app',
    'free AI color analysis',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.twitterHandle ? { site: siteConfig.twitterHandle } : {}),
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  sameAs: [],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/guides?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />

        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <Header />
        {children}
        <Footer />

        {/* Google AdSense — only injected once NEXT_PUBLIC_ADSENSE_CLIENT is set
            (see lib/site-config.js and README.md for how to apply/activate). */}
        {adsenseClientId && (
          <Script
            id="adsbygoogle-init"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Google Analytics 4 — only injected once NEXT_PUBLIC_GA_ID is set. */}
        {gaId && (
          <>
            <Script
              id="ga4-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
