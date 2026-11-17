'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm, { ShadeList } from '@/components/QuizForm';
import SeasonShortcut from '@/components/SeasonShortcut';
import { SEASON_NAMES, SEASON_QUESTIONS, NEIGHBOR, estimateFromAnswers } from '@/lib/season-estimate';
import { HAIR } from '@/lib/shade-data';

// Hair color finder: estimates the color season (or takes a known one)
// and shows flattering hair colors with hex codes, plus a tip based on how
// far the person wants to move from their natural shade.

const NATURAL_Q = {
  id: 'natural',
  q: 'Your natural hair color is…',
  options: [{ label: 'Blonde' }, { label: 'Light or medium brown' }, { label: 'Dark brown' }, { label: 'Black' }, { label: 'Red' }],
};
const CHANGE_Q = {
  id: 'change',
  q: 'How big a change do you want?',
  options: [{ label: 'Subtle' }, { label: 'Noticeable' }, { label: 'Dramatic' }],
};
const QUESTIONS = [...SEASON_QUESTIONS, NATURAL_Q, CHANGE_Q];

const CHANGE_TIPS = [
  'For a subtle change, stay within one or two shades of your natural color and add tone through a gloss or a few face-framing highlights.',
  'For a noticeable change, move up to two levels lighter or darker, and keep the tone (warm or cool) that matches your season.',
  'A dramatic change works best when you keep the right tone. Going far lighter or darker changes your contrast, so expect to adjust your makeup and clothing colors too, and ask a colorist about maintenance.',
];

const DARK_SEASONS = ['deep-autumn', 'deep-winter', 'cool-winter', 'bright-winter'];
const LIGHT_SEASONS = ['light-spring', 'light-summer'];

// Extra advice when the natural color is far from the suggested shades.
function naturalTip(natural, season) {
  if (natural === 0 && DARK_SEASONS.includes(season))
    return 'Your natural hair is blonde but these shades are deep. Going much darker is a big change; try a warm or cool light brown first.';
  if ((natural === 2 || natural === 3) && LIGHT_SEASONS.includes(season))
    return 'Your natural hair is dark, so these light shades need bleaching. Highlights or a gloss in the right tone are a gentler way to get the effect.';
  if (natural === 4)
    return 'Natural red hair usually points to a warm season. If your result is cool, double-check your undertone with the undertone test.';
  return null;
}

export default function HairColorFinder({ id = 'hair-color-finder', heading = 'Find Your Best Hair Colors', className = 'alt-bg' }) {
  const uid = useId();
  const [formKey, setFormKey] = useState(0);
  const [picked, setPicked] = useState('');
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  function show(r) {
    setResult(r);
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  function fromAnswers(answers) {
    const est = estimateFromAnswers(answers);
    setPicked('');
    show({ season: est.season, alt: est.alt, change: answers.change, natural: naturalTip(answers.natural, est.season), estimated: true });
  }

  function fromSeason(slug) {
    setPicked(slug);
    if (!slug) return setResult(null);
    setFormKey((k) => k + 1);
    show({ season: slug, alt: NEIGHBOR[slug], change: null, natural: null, estimated: false });
  }

  function reset() {
    setResult(null);
    setPicked('');
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  const data = result ? HAIR[result.season] : null;
  const name = result ? SEASON_NAMES[result.season] : '';

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Six quick questions about your natural coloring. Answer in daylight.</p>
        </div>

        <SeasonShortcut id={`${uid}-season`} value={picked} onPick={fromSeason} />
        <QuizForm
          key={formKey}
          idBase={uid}
          questions={QUESTIONS}
          submitLabel="Show My Hair Colors"
          onSubmit={fromAnswers}
          onChange={() => setResult(null)}
        />

        <div aria-live="polite">
          {result && data && (
            <div className="ut-result tf-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-rt`}>
              <div className="ut-result-main">
                <p className="ut-kicker">{result.estimated ? 'Your likely season' : 'Your season'}</p>
                <h3 id={`${uid}-rt`}>Best hair colors for {name}</h3>
                <p className="ut-tagline">
                  {result.estimated ? (
                    <>
                      Close match: <Link href={`/guides/${result.alt}-color-palette`}>{SEASON_NAMES[result.alt]}</Link>
                    </>
                  ) : (
                    'Reference shades with hex codes'
                  )}
                </p>
                <ShadeList label={`Hair colors for ${name}`} shades={data.shades} />
              </div>
              <div className="ut-result-side">
                <p className="ut-metal">
                  <strong>Go easy on:</strong> {data.avoid}
                </p>
                {result.change !== null && <p className="ut-tip tf-gap">{CHANGE_TIPS[result.change]}</p>}
                {result.natural && <p className="ut-tip tf-gap">{result.natural}</p>}
                <p className="ut-note">
                  Show these swatches to your colorist. Hair dye looks different on every base
                  color, so a strand test is the safest way to check.
                </p>
                <div className="ut-cta tf-cta">
                  <Link href="/guides/best-hair-colors-for-each-season" className="btn btn-primary btn-sm">
                    Hair color guide →
                  </Link>
                  <Link href={`/guides/${result.season}-color-palette`} className="btn btn-outline btn-sm">
                    {name} palette
                  </Link>
                  <button type="button" className="ut-reset" onClick={reset}>
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="ut-disclaimer">An estimate based on your answers, not a professional consultation.</p>
      </div>
    </section>
  );
}
