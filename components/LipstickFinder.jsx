'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm, { ShadeList } from '@/components/QuizForm';
import SeasonShortcut from '@/components/SeasonShortcut';
import { SEASON_NAMES, SEASON_QUESTIONS, NEIGHBOR, estimateFromAnswers } from '@/lib/season-estimate';
import { LIPSTICK } from '@/lib/shade-data';

// Lipstick shade finder: estimates the color season from four questions
// (or takes a known season) and shows nude, everyday and bold lipstick
// shades with hex codes. Everything runs in the browser.

const LOOK_Q = {
  id: 'look',
  q: 'Which lipstick look do you want most?',
  options: [{ label: 'Natural nude' }, { label: 'Everyday color' }, { label: 'Bold statement' }],
};
const QUESTIONS = [...SEASON_QUESTIONS, LOOK_Q];
const GROUPS = [
  ['nude', 'Nude lipstick shades'],
  ['everyday', 'Everyday lipstick shades'],
  ['bold', 'Bold lipstick shades'],
];

export default function LipstickFinder({ id = 'lipstick-finder', heading = 'Find Your Lipstick Shades', className = 'alt-bg' }) {
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
    show({ season: est.season, alt: est.alt, look: answers.look, estimated: true });
  }

  function fromSeason(slug) {
    setPicked(slug);
    if (!slug) return setResult(null);
    setFormKey((k) => k + 1);
    show({ season: slug, alt: NEIGHBOR[slug], look: 1, estimated: false });
  }

  function reset() {
    setResult(null);
    setPicked('');
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  const data = result ? LIPSTICK[result.season] : null;
  const name = result ? SEASON_NAMES[result.season] : '';
  // Put the look the person asked for first.
  const order = result ? [GROUPS[result.look], ...GROUPS.filter((_, i) => i !== result.look)] : GROUPS;

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Five quick questions. Answer in daylight, without makeup if you can.</p>
        </div>

        <SeasonShortcut id={`${uid}-season`} value={picked} onPick={fromSeason} />
        <QuizForm
          key={formKey}
          idBase={uid}
          questions={QUESTIONS}
          submitLabel="Show My Lipstick Shades"
          onSubmit={fromAnswers}
          onChange={() => setResult(null)}
        />

        <div aria-live="polite">
          {result && data && (
            <div className="ut-result tf-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-rt`}>
              <div className="ut-result-main">
                <p className="ut-kicker">{result.estimated ? 'Your likely season' : 'Your season'}</p>
                <h3 id={`${uid}-rt`}>{name} lipstick shades</h3>
                <p className="ut-tagline">
                  {result.estimated ? (
                    <>
                      Close match: <Link href={`/guides/${result.alt}-color-palette`}>{SEASON_NAMES[result.alt]}</Link>
                    </>
                  ) : (
                    'Reference shades with hex codes'
                  )}
                </p>
                {order.map(([key, label]) => (
                  <div key={key} className="tf-group">
                    <h4>{label.replace(' lipstick shades', '')}</h4>
                    <ShadeList label={`${name} ${label.toLowerCase()}`} shades={data[key]} />
                  </div>
                ))}
              </div>
              <div className="ut-result-side">
                <p className="ut-metal">
                  <strong>Best finish:</strong> {data.finish}
                </p>
                <p className="ut-metal">
                  <strong>Go easy on:</strong> {data.avoid}
                </p>
                <p className="ut-note">
                  Compare the swatch, not the shade name: one brand&apos;s &quot;nude&quot; can be
                  another brand&apos;s peach. Test on your lips in daylight.
                </p>
                <div className="ut-cta tf-cta">
                  <Link href={`/guides/${result.season}-makeup-palette`} className="btn btn-primary btn-sm">
                    Full {name} makeup palette →
                  </Link>
                  <Link href="/#quiz" className="btn btn-outline btn-sm">
                    Check your season with a photo
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
