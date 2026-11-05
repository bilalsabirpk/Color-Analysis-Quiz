'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';

// Standalone skin undertone test for /undertone-test: six undertone-only
// questions → warm / cool / neutral (+ an olive hint). Pure client-side
// scoring, nothing stored or sent. Reuses the .ut-* styles of
// components/UndertoneCheck.jsx so both quizzes look the same.

const QUESTIONS = [
  {
    id: 'veins',
    q: 'In daylight, the veins on your inner wrist look…',
    options: [
      { label: 'Green or olive', value: { warm: 2 } },
      { label: 'Blue or purple', value: { cool: 2 } },
      { label: 'A mix / hard to tell', value: {} },
    ],
  },
  {
    id: 'metal',
    q: 'Which jewelry makes your skin look brighter?',
    options: [
      { label: 'Gold', value: { warm: 2 } },
      { label: 'Silver', value: { cool: 2 } },
      { label: 'Both look fine', value: {} },
    ],
  },
  {
    id: 'lipstick',
    q: 'Which red lipstick looks more natural on you?',
    options: [
      { label: 'Orange-red or brick', value: { warm: 2 } },
      { label: 'Blue-red or cherry', value: { cool: 2 } },
      { label: 'Both / not sure', value: {} },
    ],
  },
  {
    id: 'white',
    q: 'Held near your face, which looks better?',
    options: [
      { label: 'Cream / ivory', value: { warm: 1 } },
      { label: 'Crisp bright white', value: { cool: 1 } },
      { label: 'No real difference', value: {} },
    ],
  },
  {
    id: 'sun',
    q: 'After time in the sun, your skin usually…',
    options: [
      { label: 'Tans golden easily', value: { warm: 1 } },
      { label: 'Burns or turns pink', value: { cool: 1 } },
      { label: 'Burns, then tans', value: {} },
    ],
  },
  {
    id: 'cast',
    q: 'In an unfiltered daylight photo, your skin looks…',
    options: [
      { label: 'Golden, yellow or peachy', value: { warm: 1 } },
      { label: 'Pink, rosy or slightly blue', value: { cool: 1 } },
      { label: 'Slightly green or grey (olive)', value: { olive: 1 } },
    ],
  },
];

const MAX = 9; // largest possible warm − cool difference

const RESULTS = {
  Warm: {
    tagline: 'Golden, peachy or yellow undertone',
    text: 'Colors with yellow in them make your skin glow: coral, rust, mustard, olive, camel and warm teal. Cream looks better on you than stark white.',
    palette: ['#F27E63', '#B5532A', '#D4A017', '#6B7A2E', '#2E8B7A', '#C19A6B'],
    avoid: 'Icy pastels, cool grey and blue-based pinks near your face.',
    metal: 'Gold, brass and bronze',
    seasons: 'Usually Spring or Autumn.',
    guide: { href: '/guides/warm-skin-tone-colors', label: 'Best colors for warm skin' },
  },
  Cool: {
    tagline: 'Pink, rosy or blue undertone',
    text: 'Blue-based colors flatter you: rose pink, raspberry, lavender, navy, emerald and sapphire. Pure white looks clean on you.',
    palette: ['#D47A95', '#B3446C', '#A99BC9', '#1B2A4A', '#00704A', '#0F52BA'],
    avoid: 'Orange, golden yellow, rust and camel right next to your face.',
    metal: 'Silver, white gold and platinum',
    seasons: 'Usually Summer or Winter.',
    guide: { href: '/guides/warm-vs-cool-undertones', label: 'Cool undertone guide' },
  },
  Neutral: {
    tagline: 'A balance of warm and cool',
    text: 'You can borrow from both sides. Soft teal, dusty rose, jade, true red and mid-tone neutrals like taupe are easy wins. Depth and contrast matter more than temperature for you.',
    palette: ['#3E8E8A', '#C9A0A6', '#5FA37A', '#C8102E', '#A39486', '#3E4E6E'],
    avoid: 'Very extreme colors on either side, like neon orange or icy lilac.',
    metal: 'Both work: rose gold and mixed metals are safe picks',
    seasons: 'Often a soft or neighboring season, such as Soft Summer or Soft Autumn.',
    guide: { href: '/guides/warm-vs-cool-undertones', label: 'Neutral undertone tips' },
  },
};

function score(answers) {
  const t = { warm: 0, cool: 0, olive: 0 };
  QUESTIONS.forEach((q) => {
    const idx = answers[q.id];
    if (idx === undefined) return;
    Object.entries(q.options[idx].value).forEach(([k, v]) => {
      t[k] += v;
    });
  });
  const diff = t.warm - t.cool;
  const undertone = diff >= 2 ? 'Warm' : diff <= -2 ? 'Cool' : 'Neutral';
  // 0% = warm, 100% = cool on the meter.
  const meter = Math.min(100, Math.max(0, Math.round(((MAX - diff) / (MAX * 2)) * 100)));
  const olive = t.olive > 0 && undertone !== 'Cool';
  return { undertone, meter, olive };
}

export default function UndertoneTest({ id = 'undertone-quiz', heading = 'Take the Undertone Test', className = 'alt-bg', newTab = false } = {}) {
  // Inside an embed iframe, links open in a new tab instead of inside the widget.
  const ext = newTab ? { target: '_blank', rel: 'noopener' } : {};
  const uid = useId();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  const answered = Object.keys(answers).length;
  const total = QUESTIONS.length;
  const complete = answered === total;

  function choose(qid, idx) {
    setAnswers((a) => ({ ...a, [qid]: idx }));
    setResult(null);
  }

  function showResult(e) {
    e.preventDefault();
    if (!complete) return;
    setResult(score(answers));
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  function reset() {
    setAnswers({});
    setResult(null);
    requestAnimationFrame(() =>
      document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus()
    );
  }

  const r = result ? RESULTS[result.undertone] : null;

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Six questions, about one minute. Answer in natural daylight, without makeup if you can.</p>
        </div>

        <form className="ut-card" onSubmit={showResult} noValidate>
          <div className="ut-grid">
            {QUESTIONS.map((q, qi) => (
              <fieldset key={q.id} className="ut-q" id={`${uid}-q${qi}`}>
                <legend>
                  <span className="ut-num" aria-hidden="true">
                    {qi + 1}
                  </span>
                  {q.q}
                </legend>
                <div className="ut-options">
                  {q.options.map((opt, oi) => {
                    const inputId = `${uid}-${q.id}-${oi}`;
                    return (
                      <label key={oi} htmlFor={inputId} className="ut-opt">
                        <input
                          type="radio"
                          id={inputId}
                          name={`${uid}-${q.id}`}
                          checked={answers[q.id] === oi}
                          onChange={() => choose(q.id, oi)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="ut-actions">
            <div
              className="ut-progress"
              role="progressbar"
              aria-label="Questions answered"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={answered}
              aria-valuetext={`${answered} of ${total} answered`}
            >
              <span style={{ width: `${(answered / total) * 100}%` }} />
            </div>
            <p className="ut-count">
              {answered} of {total} answered
            </p>
            <button type="submit" className="btn btn-primary" disabled={!complete}>
              {complete ? 'See My Undertone' : `Answer all ${total} to see result`}
            </button>
          </div>
        </form>

        <div aria-live="polite">
          {result && r && (
            <div className="ut-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-result-title`}>
              <div className="ut-result-main">
                <p className="ut-kicker">Your result</p>
                <h3 id={`${uid}-result-title`}>{result.undertone} undertone</h3>
                <p className="ut-tagline">{r.tagline}</p>

                <div className="ut-meter" aria-hidden="true">
                  <div className="ut-meter-bar">
                    <span className="ut-meter-dot" style={{ left: `${result.meter}%` }} />
                  </div>
                  <div className="ut-meter-labels">
                    <span>Warm</span>
                    <span>Neutral</span>
                    <span>Cool</span>
                  </div>
                </div>

                <p className="ut-tip">{r.text}</p>
                <p className="ut-metal">
                  <strong>Best jewelry metal:</strong> {r.metal}
                </p>
                <p className="ut-metal">
                  <strong>Go easy on:</strong> {r.avoid}
                </p>
                <p className="ut-metal">
                  <strong>Likely seasons:</strong> {r.seasons}
                </p>
                {result.olive && (
                  <p className="ut-note">
                    You noticed a slightly green or grey cast, which often means an olive
                    undertone. See the <Link href="/guides/olive-skin-color-palette" {...ext}>olive skin color palette</Link>.
                  </p>
                )}
              </div>

              <div className="ut-result-side">
                <p className="ut-kicker">Colors to try</p>
                <ul className="ut-palette" aria-label={`Colors for a ${result.undertone.toLowerCase()} undertone`}>
                  {r.palette.map((hex) => (
                    <li key={hex} style={{ background: hex }} title={hex}>
                      <span className="visually-hidden">{hex}</span>
                    </li>
                  ))}
                </ul>
                <div className="ut-cta">
                  <Link href="/#quiz" className="btn btn-primary btn-sm" {...ext}>
                    Find your full season →
                  </Link>
                  <Link href={r.guide.href} className="btn btn-outline btn-sm" {...ext}>
                    {r.guide.label}
                  </Link>
                  <button type="button" className="ut-reset" onClick={reset}>
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="ut-disclaimer">An estimate, not a professional consultation.</p>
      </div>
    </section>
  );
}
