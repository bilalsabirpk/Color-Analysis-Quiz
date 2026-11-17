'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm, { ShadeList } from '@/components/QuizForm';
import SeasonShortcut from '@/components/SeasonShortcut';
import { SEASON_NAMES, SEASON_QUESTIONS, NEIGHBOR, estimateFromAnswers } from '@/lib/season-estimate';
import { BLUSH, EYESHADOW, HIJAB } from '@/lib/shade-data';

// Season-based shade finder shared by the blush, eyeshadow and hijab tools:
// four season questions (or a known season) → shades with hex codes.

const KINDS = {
  blush: {
    noun: 'blush',
    submit: 'Show My Blush Shades',
    groups: (d) => [['Best blush shades', d.shades]],
    side: (d) => [
      ['Best finish', d.finish],
      ['Go easy on', d.avoid],
    ],
    note: 'Smile and apply to the apples of your cheeks, then blend up toward your temples. Build color slowly; it is easier to add than remove.',
  },
  eyeshadow: {
    noun: 'eyeshadow',
    submit: 'Show My Eyeshadow Colors',
    groups: (d) => [
      ['Everyday neutrals', d.neutrals],
      ['Accent colors', d.accents],
    ],
    side: (d) => [['Best eyeliner', d.liner]],
    note: 'Use a neutral all over the lid, a deeper neutral in the crease, and an accent color as liner or on the outer corner for a pop.',
  },
  hijab: {
    noun: 'hijab',
    submit: 'Show My Hijab Colors',
    groups: (d) => [
      ['Everyday hijab colors', d.everyday],
      ['Statement hijab colors', d.statement],
    ],
    side: (d) => [
      ['Best fabrics', d.fabric],
      ['Keep away from your face', d.avoid],
    ],
    note: 'Your hijab frames your face, so it matters more than any other color you wear. If you love a color outside your palette, wear it as an abaya or dress and keep a palette color as the hijab.',
    cta: { href: '/guides/hijab-colors-for-skin-tone', label: 'Hijab colors guide →' },
    second: { href: '/does-this-color-suit-me', label: 'Check a hijab color' },
  },
};

const DATA = { blush: BLUSH, eyeshadow: EYESHADOW, hijab: HIJAB };

export default function SeasonShadeFinder({ kind, id, heading, className = 'alt-bg', newTab = false }) {
  const cfg = KINDS[kind];
  // Inside an embed iframe, links open in a new tab instead of inside the widget.
  const ext = newTab ? { target: '_blank', rel: 'noopener' } : {};
  const uid = useId();
  const [formKey, setFormKey] = useState(0);
  const [picked, setPicked] = useState('');
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  function show(r) {
    setResult(r);
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  function fromSeason(slug) {
    setPicked(slug);
    if (!slug) return setResult(null);
    setFormKey((k) => k + 1);
    show({ season: slug, alt: NEIGHBOR[slug], estimated: false });
  }

  function reset() {
    setResult(null);
    setPicked('');
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  const data = result ? DATA[kind][result.season] : null;
  const name = result ? SEASON_NAMES[result.season] : '';

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Four quick questions. Answer in daylight, without makeup if you can.</p>
        </div>

        <SeasonShortcut id={`${uid}-season`} value={picked} onPick={fromSeason} />
        <QuizForm
          key={formKey}
          idBase={uid}
          questions={SEASON_QUESTIONS}
          submitLabel={cfg.submit}
          onSubmit={(answers) => {
            const est = estimateFromAnswers(answers);
            setPicked('');
            show({ season: est.season, alt: est.alt, estimated: true });
          }}
          onChange={() => setResult(null)}
        />

        <div aria-live="polite">
          {result && data && (
            <div className="ut-result tf-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-rt`}>
              <div className="ut-result-main">
                <p className="ut-kicker">{result.estimated ? 'Your likely season' : 'Your season'}</p>
                <h3 id={`${uid}-rt`}>
                  {name} {cfg.noun} colors
                </h3>
                <p className="ut-tagline">
                  {result.estimated ? (
                    <>
                      Close match: <Link href={`/guides/${result.alt}-color-palette`} {...ext}>{SEASON_NAMES[result.alt]}</Link>
                    </>
                  ) : (
                    'Reference shades with hex codes'
                  )}
                </p>
                {cfg.groups(data).map(([label, shades]) => (
                  <div key={label} className="tf-group">
                    <h4>{label}</h4>
                    <ShadeList label={`${name} ${label.toLowerCase()}`} shades={shades} />
                  </div>
                ))}
              </div>
              <div className="ut-result-side">
                {cfg.side(data).map(([k, v]) => (
                  <p key={k} className="ut-metal">
                    <strong>{k}:</strong> {v}
                  </p>
                ))}
                <p className="ut-note">{cfg.note}</p>
                <div className="ut-cta tf-cta">
                  <Link href={cfg.cta ? cfg.cta.href : `/guides/${result.season}-makeup-palette`} className="btn btn-primary btn-sm" {...ext}>
                    {cfg.cta ? cfg.cta.label : `Full ${name} makeup palette →`}
                  </Link>
                  <Link href={cfg.second ? cfg.second.href : '/lipstick-color-finder'} className="btn btn-outline btn-sm" {...ext}>
                    {cfg.second ? cfg.second.label : 'Matching lipstick'}
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
