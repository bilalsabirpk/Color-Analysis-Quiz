import Link from 'next/link';
import { TOOLS } from '@/lib/tools';
import { siteConfig, OG_DEFAULTS } from '@/lib/site-config';
import {
  QUIZ_SECTIONS_HTML,
  QUIZ_SEASONS_HTML,
  QUIZ_HARMONY_HTML,
  QUIZ_FAVORITES_HTML,
  QUIZ_TAIL_HTML,
} from '@/lib/quiz-markup';
import QuizScriptLoader from '@/components/QuizScriptLoader';
import UndertoneCheck from '@/components/UndertoneCheck';
import BlogPreview from '@/components/BlogPreview';
import UploadCta from '@/components/UploadCta';
import HeroSection from '@/components/HeroSection';
import QuizLaunchers from '@/components/QuizLaunchers';
import SubSeasons from '@/components/SubSeasons';
import {
  HowItWorks,
  WhyUs,
  ColorAnalysisGuide,
  SeasonsExplained,
  FaqPreview,
} from '@/components/HomeSections';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  // Search Console queries the homepage is targeting.
  keywords: [
    'colour analysis free',
    'color analysis test free',
    'seasonal color analysis quiz',
    'color analysis free',
    'color analysis quiz',
    'color analysis quiz free',
    '12 season colour analysis test',
    'color analysis free online',
    'seasonal color analysis quiz free',
    'colour analysis test',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    ...OG_DEFAULTS,
    url: '/',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const webApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: siteConfig.name,
  url: siteConfig.url,
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Any (runs in browser)',
  description: siteConfig.description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

// The photo analysis, harmony tool and season palettes already live on the homepage itself.
const FREE_TOOLS = TOOLS.filter((t) => !['/#quiz', '/embed-widget', '/color-harmony-generator', '/seasonal-color-palettes'].includes(t.href));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <main id="main">
        {/* Section order mirrors the reference tool homepage:
            hero → tool (upload / camera) → how it works →
            free & private → what the seasons are → the 4 seasons + palettes →
            free tools → blog → FAQ → final CTA.
            Raw quiz markup chunks (lib/quiz-markup.js) keep every id/class
            quiz-logic.js depends on. Backgrounds alternate plain / alt-bg. */}
        <HeroSection />

        <div dangerouslySetInnerHTML={{ __html: QUIZ_SECTIONS_HTML }} />

        <HowItWorks />
        <WhyUs />
        <ColorAnalysisGuide />
        <SeasonsExplained />

        {/* Interactive palette explorer — visually part of the section above. */}
        <div dangerouslySetInnerHTML={{ __html: QUIZ_SEASONS_HTML }} />

        {/* 12 sub-seasons (soft autumn, deep winter…), crawlable content. */}
        <SubSeasons />

        <div dangerouslySetInnerHTML={{ __html: QUIZ_HARMONY_HTML }} />

        {/* No-photo 6-question undertone / season self-check. */}
        <UndertoneCheck
          sub={
            <>
              Six questions, no photo needed. Want the full breakdown?{' '}
              <Link href="/what-season-am-i">What season am I?</Link>
            </>
          }
        />

        {/* Saved palettes — stays hidden until the visitor saves a result. */}
        <div dangerouslySetInnerHTML={{ __html: QUIZ_FAVORITES_HTML }} />

        {/* Links to the standalone tool pages (each targets its own search). */}
        <section id="free-tools" aria-labelledby="freeToolsHeading">
          <div className="container">
            <div className="section-head">
              <h2 id="freeToolsHeading">More Free Color Analysis Tools</h2>
              <p>Each tool runs in your browser, free and without sign-up.</p>
            </div>
            <div className="tools-grid">
              {FREE_TOOLS.map((t) => (
                <Link key={t.href} href={t.href} className="tool-card">
                  <span className="tool-icon" aria-hidden="true">{t.icon}</span>
                  <h3>{t.title}</h3>
                  <p>{t.short}</p>
                  <span className="tool-go" aria-hidden="true">Open tool →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest 3 blog posts (server-rendered, crawlable). */}
        <BlogPreview limit={3} />

        <FaqPreview />

        {/* Final call to action. */}
        <UploadCta />
      </main>

      <div dangerouslySetInnerHTML={{ __html: QUIZ_TAIL_HTML }} />

      {/* Runs the quiz's interactive logic (color sampling, canvas recolor,
          harmony generator, favorites, etc.) client-side only. Everything
          above is still real server-rendered HTML for crawlers even before
          this executes. Re-runs on every mount (see component) so it keeps
          working after client-side navigation back to this page. */}
      <QuizScriptLoader />

      {/* Upload / camera / season-tab launchers + the camera modal. */}
      <QuizLaunchers />
    </>
  );
}
