'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';

// Quick no-photo self-check: 6 questions → undertone (warm / cool / neutral)
// and a likely season. Pure client-side scoring, nothing stored or sent.
// Palettes mirror SEASONS.best in public/quiz-logic.js so results match
// what the photo quiz shows.

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
    id: 'sun',
    q: 'After time in the sun, your skin usually…',
    options: [
      { label: 'Tans golden easily', value: { warm: 1 } },
      { label: 'Burns or turns pink', value: { cool: 1 } },
      { label: 'Burns, then tans', value: {} },
    ],
  },
  {
    id: 'white',
    q: 'Held near your face, which looks better?',
    options: [
      { label: 'Cream / ivory', value: { warm: 1, soft: 1 } },
      { label: 'Crisp bright white', value: { cool: 1, bright: 1 } },
      { label: 'No real difference', value: {} },
    ],
  },
  {
    id: 'depth',
    q: 'Your natural hair and eyes are overall…',
    options: [
      { label: 'Light (blonde, light brown, light eyes)', value: { light: 2 } },
      { label: 'Medium', value: {} },
      { label: 'Deep (dark brown/black, dark eyes)', value: { deep: 2 } },
    ],
  },
  {
    id: 'chroma',
    q: 'Bold, saturated colors on you feel…',
    options: [
      { label: 'Great — they light me up', value: { bright: 2 } },
      { label: 'Too much — softer shades suit me', value: { soft: 2 } },
      { label: 'Depends on the color', value: {} },
    ],
  },
];

const SEASONS = {
  spring: {
    name: 'Spring',
    emoji: '🌸',
    tagline: 'Warm & Fresh',
    palette: ['#FFD166', '#F6A94A', '#8CC084', '#5FA8D3', '#EF5B5B', '#7BC4C4'],
    tip: 'Reach for clear warm brights, ivory instead of stark white, and gold jewelry.',
  },
  summer: {
    name: 'Summer',
    emoji: '💧',
    tagline: 'Cool & Soft',
    palette: ['#A7C6DA', '#C9A9D9', '#7F95D1', '#9FB8AD', '#D8A7B1', '#8E9AAF'],
    tip: 'Dusty, blended cool shades flatter you most — think rose, powder blue and soft grey.',
  },
  autumn: {
    name: 'Autumn',
    emoji: '🍂',
    tagline: 'Warm & Rich',
    palette: ['#B85C38', '#C48A3C', '#6B4226', '#8A9A5B', '#D9A441', '#4A5D23'],
    tip: 'Earthy spice tones, olive and deep gold are your strongest colors.',
  },
  winter: {
    name: 'Winter',
    emoji: '❄️',
    tagline: 'Cool & Bold',
    palette: ['#0B1F3A', '#7A0C2E', '#00727A', '#4B0082', '#C40233', '#1C1C1C'],
    tip: 'High contrast and saturated jewel tones suit you — true black and white too.',
  },
};

function score(answers) {
  const t = { warm: 0, cool: 0, light: 0, deep: 0, bright: 0, soft: 0 };
  QUESTIONS.forEach((q) => {
    const idx = answers[q.id];
    if (idx === undefined) return;
    Object.entries(q.options[idx].value).forEach(([k, v]) => {
      t[k] += v;
    });
  });

  const diff = t.warm - t.cool; // range roughly -6..+6
  const undertone = diff >= 2 ? 'Warm' : diff <= -2 ? 'Cool' : 'Neutral';

  // Neutral undertones lean whichever way the (smaller) difference points.
  // On an exact tie, pick purely from depth × chroma.
  const isLight = t.light >= t.deep;
  const isBright = t.bright > t.soft;
  let season;
  if (diff === 0) {
    if (isLight) season = isBright ? 'spring' : 'summer';
    else season = isBright ? 'winter' : 'autumn';
  } else if (diff > 0) {
    // Spring = light / clear, Autumn = deep / muted
    season = t.light + t.bright >= t.deep + t.soft ? 'spring' : 'autumn';
  } else {
    // Summer = light / soft, Winter = deep / clear
    season = t.light + t.soft >= t.deep + t.bright ? 'summer' : 'winter';
  }

  // Marker position on the warm ↔ cool meter, 0% = warm, 100% = cool.
  const meter = Math.round(((6 - diff) / 12) * 100);
  return { undertone, season, meter: Math.min(100, Math.max(0, meter)) };
}

export default function UndertoneCheck() {
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
    // Move focus to the result so keyboard / screen-reader users land on it.
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  function reset() {
    setAnswers({});
    setResult(null);
    requestAnimationFrame(() =>
      document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus()
    );
  }

  const season = result ? SEASONS[result.season] : null;

  return (
    <section id="undertone-test" className="alt-bg" aria-labelledby="undertoneHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="undertoneHeading">Undertone Test: Are You Warm or Cool?</h2>
          <p>Six questions, no photo needed.</p>
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
              {complete ? 'See My Result' : 'Answer all 6 to see result'}
            </button>
          </div>
        </form>

        <div aria-live="polite">
          {result && season && (
            <div
              className="ut-result"
              tabIndex={-1}
              ref={resultRef}
              aria-labelledby={`${uid}-result-title`}
            >
              <div className="ut-result-main">
                <p className="ut-kicker">Your quick estimate</p>
                <h3 id={`${uid}-result-title`}>
                  {result.undertone} undertone · likely {season.emoji} {season.name}
                </h3>
                <p className="ut-tagline">{season.tagline}</p>

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

                <p className="ut-tip">{season.tip}</p>
                {result.undertone === 'Neutral' && (
                  <p className="ut-note">
                    Neutral undertones can often borrow from a neighbouring season — the
                    photo quiz will narrow it down.
                  </p>
                )}
              </div>

              <div className="ut-result-side">
                <p className="ut-kicker">Colors to try</p>
                <ul className="ut-palette" aria-label={`${season.name} sample palette`}>
                  {season.palette.map((hex) => (
                    <li key={hex} style={{ background: hex }} title={hex}>
                      <span className="visually-hidden">{hex}</span>
                    </li>
                  ))}
                </ul>
                <div className="ut-cta">
                  <Link href="/#quiz" className="btn btn-primary btn-sm">
                    Confirm with photo analysis →
                  </Link>
                  <Link href="/guides/warm-vs-cool-undertones" className="btn btn-outline btn-sm">
                    Undertone guide
                  </Link>
                  <button type="button" className="ut-reset" onClick={reset}>
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="ut-disclaimer">
          An estimate, not a professional consultation.
        </p>
      </div>
    </section>
  );
}
