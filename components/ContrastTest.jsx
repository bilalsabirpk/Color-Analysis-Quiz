'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm from '@/components/QuizForm';

// Personal contrast test: how much your hair, skin, eyes and brows differ
// in lightness → low / medium / high contrast, with outfit pairing advice.

const QUESTIONS = [
  { id: 'hair', q: 'Your natural hair color is…', options: [{ label: 'Light blonde or platinum' }, { label: 'Dark blonde or light brown' }, { label: 'Medium to dark brown' }, { label: 'Very dark brown or black' }] },
  { id: 'skin', q: 'Your skin is…', options: [{ label: 'Fair' }, { label: 'Light' }, { label: 'Medium' }, { label: 'Tan' }, { label: 'Deep' }] },
  { id: 'eyes', q: 'Your eyes are…', options: [{ label: 'Light: blue, grey, light green' }, { label: 'Medium: hazel, green, light brown' }, { label: 'Dark: dark brown or black' }] },
  { id: 'brows', q: 'Against your skin, your eyebrows look…', options: [{ label: 'Barely visible' }, { label: 'Noticeable' }, { label: 'Very dark and defined' }] },
  { id: 'bw', q: 'In a black and white selfie, your face looks…', options: [{ label: 'Mostly similar greys' }, { label: 'Some light and dark' }, { label: 'Strong black and white' }] },
];

const RESULTS = {
  Low: {
    tagline: 'Your hair, skin and eyes are close in depth',
    text: 'Your features blend softly, so strong contrast in your clothes can overpower you. Tonal outfits, gentle color combinations and soft prints look the most natural.',
    pairs: [['#C9A0A6', '#A89A8E'], ['#D9BFA0', '#A8835A'], ['#B9D6F2', '#E8E4F0']],
    how: 'Pair colors that are close in lightness: taupe with dusty rose, camel with cream, light blue with soft grey.',
    avoid: 'Black and white together, very dark colors next to a light face, bold color-blocking.',
    seasons: 'Often Soft Summer, Soft Autumn, Light Spring or Light Summer.',
  },
  Medium: {
    tagline: 'A moderate difference between your features',
    text: 'You can wear some contrast, but not the extremes. Mid-tone combinations with one darker or lighter piece look balanced on you.',
    pairs: [['#1B2A4A', '#D47A95'], ['#6B7A2E', '#F3E2C3'], ['#3E8E8A', '#C19A6B']],
    how: 'Pair a medium-dark color with a medium-light one: navy with rose, olive with cream, teal with camel.',
    avoid: 'Pure black with pure white on a large scale, or outfits in one flat tone.',
    seasons: 'Often Cool Summer, Warm Autumn, Warm Spring or Bright Spring.',
  },
  High: {
    tagline: 'A strong difference between your hair, skin and eyes',
    text: 'Your features are striking, so soft, blended outfits can make you look washed out. Clear contrast in your clothes repeats the contrast in your face.',
    pairs: [['#111111', '#F7F7F7'], ['#0F52BA', '#F7F7F7'], ['#6D0F2A', '#E8E4F0']],
    how: 'Pair very dark with very light: black with white, navy with icy pink, burgundy with crisp white.',
    avoid: 'All-beige or all-pastel outfits and very muted, dusty prints.',
    seasons: 'Often Cool Winter, Bright Winter, Deep Winter or Deep Autumn.',
  },
};

function score(a) {
  const hair = a.hair / 3;
  const skin = a.skin / 4;
  const eyes = a.eyes / 2;
  const s = Math.abs(hair - skin) + 0.5 * Math.abs(eyes - skin) + 0.25 * a.brows + 0.35 * a.bw;
  const level = s < 0.75 ? 'Low' : s < 1.35 ? 'Medium' : 'High';
  // 0% = low, 100% = high on the meter (max s is about 2.2).
  return { level, meter: Math.min(100, Math.round((s / 2.2) * 100)) };
}

export default function ContrastTest({ id = 'contrast-test', heading = 'Take the Contrast Test', className = 'alt-bg' }) {
  const uid = useId();
  const [formKey, setFormKey] = useState(0);
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);
  const r = result ? RESULTS[result.level] : null;

  function reset() {
    setResult(null);
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Five quick questions about your natural coloring (not dyed hair).</p>
        </div>

        <QuizForm
          key={formKey}
          idBase={uid}
          questions={QUESTIONS}
          submitLabel="Show My Contrast Level"
          onSubmit={(answers) => {
            setResult(score(answers));
            requestAnimationFrame(() => resultRef.current?.focus());
          }}
          onChange={() => setResult(null)}
        />

        <div aria-live="polite">
          {result && r && (
            <div className="ut-result tf-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-rt`}>
              <div className="ut-result-main">
                <p className="ut-kicker">Your contrast level</p>
                <h3 id={`${uid}-rt`}>{result.level} contrast</h3>
                <p className="ut-tagline">{r.tagline}</p>
                <div className="ut-meter" aria-hidden="true">
                  <div className="ut-meter-bar tf-contrast-bar">
                    <span className="ut-meter-dot" style={{ left: `${result.meter}%` }} />
                  </div>
                  <div className="ut-meter-labels">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>
                <p className="ut-tip">{r.text}</p>
              </div>
              <div className="ut-result-side">
                <p className="ut-kicker">Outfit pairings to try</p>
                <ul className="cc-pairs" aria-label="Example color pairings">
                  {r.pairs.map(([a, b]) => (
                    <li key={a + b}>
                      <span style={{ background: a }} aria-hidden="true" />
                      <span style={{ background: b }} aria-hidden="true" />
                      <code>
                        {a} + {b}
                      </code>
                    </li>
                  ))}
                </ul>
                <p className="ut-metal"><strong>How:</strong> {r.how}</p>
                <p className="ut-metal"><strong>Go easy on:</strong> {r.avoid}</p>
                <p className="ut-metal"><strong>Likely seasons:</strong> {r.seasons}</p>
                <div className="ut-cta tf-cta">
                  <Link href="/what-season-am-i" className="btn btn-primary btn-sm">Find your season →</Link>
                  <button type="button" className="ut-reset" onClick={reset}>Start over</button>
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
