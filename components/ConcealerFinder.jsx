'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm, { ShadeList } from '@/components/QuizForm';
import { QUESTIONS as FOUNDATION_QUESTIONS, DEPTHS, TONES, score } from '@/components/FoundationFinder';

// Concealer shade finder: the foundation undertone questions plus "what do
// you want to cover?" → concealer undertone, how light to go, and which
// color corrector (if any) to use first.

const CONCERN_Q = {
  id: 'concern',
  q: 'What do you mainly want to cover?',
  options: [
    { label: 'Blue or purple dark circles' },
    { label: 'Brown dark circles' },
    { label: 'Redness or blemishes' },
    { label: 'Dark spots' },
    { label: 'Just brighten' },
  ],
};
const QUESTIONS = [...FOUNDATION_QUESTIONS, CONCERN_Q];

// [name, hex] corrector for each concern by depth band (0 fair–light, 1 medium–tan, 2 deep).
function corrector(concern, depth) {
  const band = depth <= 1 ? 0 : depth <= 3 ? 1 : 2;
  if (concern === 0) return [['Pink-peach corrector', '#F2B8A0'], ['Peach corrector', '#F0A878'], ['Orange-red corrector', '#D9622E']][band];
  if (concern === 1) return [['Peach-yellow corrector', '#F2C98A'], ['Orange corrector', '#E8833A'], ['Red-orange corrector', '#C9502E']][band];
  if (concern === 2) return ['Green corrector', '#9CC9A0'];
  if (concern === 3) return depth >= 3 ? ['Orange corrector', '#E8833A'] : null;
  return null;
}

const CONCERN_TIPS = [
  'Pat a thin layer of corrector only on the dark area, let it set for a minute, then add concealer on top. Blue and purple shadows are cancelled by peach and orange.',
  'Brown circles are pigment, not shadow, so they need more coverage. Use a corrector, then a concealer that matches your skin rather than a very light one.',
  'Dab green corrector only on the red spots, then cover with a concealer that matches your skin exactly. Lighter concealer makes spots stand out.',
  'Match your concealer exactly to your skin and apply with a small brush, only on the spot. On medium-to-deep skin, an orange corrector underneath helps.',
  'Choose a concealer one shade lighter than your foundation with the same undertone, and apply it under the eyes, down the nose and on the chin.',
];

export default function ConcealerFinder({ id = 'concealer-finder', heading = 'Find Your Concealer Shade', className = 'alt-bg' }) {
  const uid = useId();
  const [formKey, setFormKey] = useState(0);
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  function reset() {
    setResult(null);
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  let shades = [];
  let fix = null;
  let lighter = false;
  if (result) {
    const d = result.depth;
    // Under the eyes and for brightening, go one step lighter; on spots, match.
    lighter = (result.concern === 0 || result.concern === 4) && d > 0;
    const target = lighter ? Math.max(0, d - 1) : d;
    const fam = result.family.toLowerCase();
    shades = [[`Concealer: ${lighter ? `${DEPTHS[target]} ${fam} (one step lighter)` : `${DEPTHS[d]} ${fam}`}`, TONES[result.family][target]]];
    if (lighter) shades.push([`Foundation match: ${DEPTHS[d]} ${fam}`, TONES[result.family][d]]);
    fix = corrector(result.concern, d);
  }

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Six quick questions. Answer in daylight with a bare face.</p>
        </div>

        <QuizForm
          key={formKey}
          idBase={uid}
          questions={QUESTIONS}
          submitLabel="Show My Concealer Shade"
          onSubmit={(answers) => {
            setResult({ ...score(answers), concern: answers.concern });
            requestAnimationFrame(() => resultRef.current?.focus());
          }}
          onChange={() => setResult(null)}
        />

        <div aria-live="polite">
          {result && (
            <div className="ut-result tf-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-rt`}>
              <div className="ut-result-main">
                <p className="ut-kicker">Your concealer</p>
                <h3 id={`${uid}-rt`}>
                  {result.family} undertone{lighter ? ', one step lighter' : ', exact match'}
                </h3>
                <p className="ut-tagline">For {CONCERN_Q.options[result.concern].label.toLowerCase()}</p>
                <ShadeList label="Concealer reference tones" shades={shades} />
                <p className="ut-tip tf-gap">{CONCERN_TIPS[result.concern]}</p>
              </div>
              <div className="ut-result-side">
                <p className="ut-kicker">Color corrector</p>
                {fix ? (
                  <ShadeList label="Color corrector" shades={[fix]} />
                ) : (
                  <p className="ut-metal">You probably do not need a corrector. Concealer alone is enough.</p>
                )}
                <p className="ut-note">
                  Reference tones only; real products vary by brand. Swatch on your jaw or under
                  your eye and check in daylight.
                </p>
                <div className="ut-cta tf-cta">
                  <Link href="/foundation-undertone-finder" className="btn btn-primary btn-sm">
                    Find your foundation undertone
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
