import Link from 'next/link';
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
