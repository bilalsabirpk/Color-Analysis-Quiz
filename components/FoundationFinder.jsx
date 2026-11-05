'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm, { ShadeList } from '@/components/QuizForm';

// Foundation undertone finder: five questions → warm / cool / neutral /
// olive foundation family plus a depth range to swatch. It does not name
// brand shades (those vary and change); it explains the labels many
// brands use so people can shop any range.

const QUESTIONS = [
  {
    id: 'veins',
    q: 'In daylight, the veins on your inner wrist look…',
    options: [
      { label: 'Green or olive', v: { warm: 2 } },
      { label: 'Blue or purple', v: { cool: 2 } },
      { label: 'A mix / hard to tell', v: {} },
    ],
  },
  {
    id: 'metal',
    q: 'Which jewelry makes your skin look brighter?',
    options: [
      { label: 'Gold', v: { warm: 2 } },
      { label: 'Silver', v: { cool: 2 } },
      { label: 'Both look fine', v: {} },
    ],
  },
  {
    id: 'wrong',
    q: 'When a foundation looks wrong on you, it usually looks…',
    options: [
      { label: 'Too orange or yellow', v: { cool: 2 } },
      { label: 'Too pink or ashy', v: { warm: 2 } },
      { label: 'Grey or green; nothing matches', v: { olive: 2 } },
      { label: 'Not sure', v: {} },
    ],
  },
  {
    id: 'cast',
    q: 'In an unfiltered daylight photo, your skin looks…',
    options: [
      { label: 'Golden, yellow or peachy', v: { warm: 1 } },
      { label: 'Pink or rosy', v: { cool: 1 } },
      { label: 'Beige, neither', v: {} },
      { label: 'Slightly green or grey', v: { olive: 1 } },
    ],
  },
  {
    id: 'depth',
    q: 'Your skin depth is…',
    options: [{ label: 'Fair' }, { label: 'Light' }, { label: 'Medium' }, { label: 'Tan' }, { label: 'Deep' }],
  },
];

const DEPTHS = ['Fair', 'Light', 'Medium', 'Tan', 'Deep'];

// Reference foundation tones: [fair, light, medium, tan, deep] per family.
const TONES = {
  Warm: ['#F3D3B5', '#E8BF98', '#C99467', '#A8703F', '#6E4423'],
  Cool: ['#F2D0C9', '#E6BCAE', '#C8957F', '#A6705C', '#6B4236'],
  Neutral: ['#F1D2BF', '#E5BFA4', '#C69477', '#A47152', '#6A4430'],
  Olive: ['#E9D3B4', '#DCC098', '#B99A6E', '#957548', '#604A2E'],
};

const RESULTS = {
  Warm: {
    tagline: 'Golden, yellow or peachy base',
    labels: 'W (warm), Y (yellow), G (golden) or P (peach)',
    text: 'Foundations with a yellow or golden base will melt into your skin. Pink-based shades tend to look ashy or grey on you.',
  },
  Cool: {
    tagline: 'Pink, rosy or red base',
    labels: 'C (cool), R (rosy) or P (pink)',
    text: 'Foundations with a pink or rosy base match you best. Yellow-based shades can look orange or sallow on your skin.',
  },
  Neutral: {
    tagline: 'A balance of yellow and pink',
    labels: 'N (neutral) or beige',
    text: 'Neutral shades match you best. If you are between two, a slightly warm neutral usually looks more natural than a pink one.',
  },
  Olive: {
    tagline: 'Neutral-warm with a green or grey cast',
    labels: 'O (olive), or neutral-warm shades with a green-yellow base',
    text: 'Olive skin often looks grey in pink foundations and orange in very yellow ones. Look for olive shades, or a neutral-warm shade with a slightly green base.',
  },
};

function score(answers) {
  const t = { warm: 0, cool: 0, olive: 0 };
  QUESTIONS.slice(0, 4).forEach((q) => {
    Object.entries(q.options[answers[q.id]]?.v || {}).forEach(([k, n]) => {
      t[k] += n;
    });
  });
  const diff = t.warm - t.cool;
  let family = diff >= 2 ? 'Warm' : diff <= -2 ? 'Cool' : 'Neutral';
  if (t.olive >= 2 && diff > -2) family = 'Olive';
  return { family, depth: answers.depth ?? 2 };
}

export default function FoundationFinder({ id = 'foundation-finder', heading = 'Find Your Foundation Undertone', className = 'alt-bg' }) {
  const uid = useId();
  const [formKey, setFormKey] = useState(0);
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  function reset() {
    setResult(null);
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  const r = result ? RESULTS[result.family] : null;
  const d = result?.depth;
  const swatches = result
    ? [d - 1, d, d + 1]
        .filter((i) => i >= 0 && i < DEPTHS.length)
        .map((i) => [
          `${i === d ? 'Your range' : i < d ? 'Lighter' : 'Deeper'}: ${DEPTHS[i]} ${result.family.toLowerCase()}`,
          TONES[result.family][i],
        ])
    : [];

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Five quick questions. Answer in daylight with a bare face.</p>
        </div>

        <QuizForm
          key={formKey}
          idBase={uid}
          questions={QUESTIONS}
          submitLabel="Show My Foundation Undertone"
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
                <p className="ut-kicker">Your foundation undertone</p>
                <h3 id={`${uid}-rt`}>
                  {DEPTHS[d]} {result.family.toLowerCase()}
                </h3>
                <p className="ut-tagline">{r.tagline}</p>
                <p className="ut-tip">{r.text}</p>
                <p className="ut-metal">
                  <strong>Labels to look for:</strong> {r.labels}. Many brands use these letters, but
                  not all; check each brand&apos;s own shade guide.
                </p>
              </div>
              <div className="ut-result-side">
                <p className="ut-kicker">Swatch these {swatches.length === 3 ? 'three' : 'two'}</p>
                <ShadeList label="Foundation tones to compare" shades={swatches} />
                <p className="ut-note">
                  Reference tones only; real foundations vary by brand. Swatch shades in stripes on
                  your jawline, wait 10 minutes for the color to settle, and check by a window.
                </p>
                <div className="ut-cta tf-cta">
                  <Link href="/undertone-test" className="btn btn-primary btn-sm">
                    Take the full undertone test
                  </Link>
                  <Link href="/guides/makeup-colors-for-your-color-season" className="btn btn-outline btn-sm">
                    Makeup colors guide
                  </Link>
                  <button type="button" className="ut-reset" onClick={reset}>
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="ut-disclaimer">An estimate based on your answers, not a professional shade match.</p>
      </div>
    </section>
  );
}
