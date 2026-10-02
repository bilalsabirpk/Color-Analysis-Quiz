'use client';

import { useEffect, useState } from 'react';

// Interactive hero visuals (desktop only, ≥1180px):
//  left  — a "draping" portrait inside a season color-wheel ring, with a skin
//          sample point linked to the sampled skin swatch (like the quiz).
//  right — a result-style palette card. Clicking any swatch drapes that color
//          on the portrait; the 4 dots switch season palettes. Until the
//          visitor interacts it auto-cycles through the seasons (never with
//          prefers-reduced-motion).

const SEASONS = [
  { name: 'Spring', dot: '#F6A94A', pick: 1, colors: ['#FFD166', '#F6A94A', '#8CC084', '#5FA8D3', '#EF5B5B', '#7BC4C4', '#F9C74F', '#90BE6D', '#F8961E'] },
  { name: 'Summer', dot: '#7F95D1', pick: 2, colors: ['#A7C6DA', '#C9A9D9', '#7F95D1', '#9FB8AD', '#D8A7B1', '#8E9AAF', '#B5C7E3', '#CDB4DB', '#A3B8C9'] },
  { name: 'Autumn', dot: '#B85C38', pick: 0, colors: ['#B85C38', '#C48A3C', '#6B4226', '#8A9A5B', '#D9A441', '#4A5D23', '#E07A5F', '#A0522D', '#556B2F'] },
  { name: 'Winter', dot: '#0B1F3A', pick: 1, colors: ['#0B1F3A', '#7A0C2E', '#00727A', '#4B0082', '#C40233', '#1C1C1C', '#1E3A8A', '#9D174D', '#0F766E'] },
];

export default function HeroVisuals() {
  const [season, setSeason] = useState(0);
  const [pick, setPick] = useState(SEASONS[0].pick);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      setSeason((s) => {
        const next = (s + 1) % SEASONS.length;
        setPick(SEASONS[next].pick);
        return next;
      });
    }, 2600);
    return () => clearInterval(id);
  }, [auto]);

  const current = SEASONS[season];
  const drape = current.colors[pick];

  function chooseSeason(i) {
    setAuto(false);
    setSeason(i);
    setPick(SEASONS[i].pick);
  }
  function chooseColor(i) {
    setAuto(false);
    setPick(i);
  }

  return (
    <>
      <div className="hero-side hero-side-left" aria-hidden="true">
        <span className="hp-ring" />
        <div className="hp-frame">
          <svg viewBox="28 24 144 144" width="100%" height="100%">
            <rect width="200" height="200" fill="#f4ecfb" />
            <path d="M52 122C40 62 70 30 100 30s60 32 48 92c-2 30 2 55 8 78H44c6-23 10-48 8-78z" fill="#4a2c1d" />
            <rect x="86" y="116" width="28" height="40" rx="12" fill="#d9a585" />
            <path className="hp-drape" d="M18 200c6-38 40-54 82-54s76 16 82 54z" style={{ fill: drape }} />
            <path d="M86 146l14 20 14-20z" fill="#d9a585" />
            <ellipse cx="100" cy="92" rx="34" ry="42" fill="#e8bc98" />
            <path d="M66 90c-2-32 16-48 36-48 22 0 36 16 34 42-14-4-28-14-36-26-8 14-20 24-34 32z" fill="#4a2c1d" />
            <path d="M84 50c8-6 20-8 30-4" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="4" strokeLinecap="round" />
            <path d="M80 85q8-4 15 0M105 85q8-4 15 0" fill="none" stroke="#3b2416" strokeWidth="2.6" strokeLinecap="round" />
            <ellipse cx="88" cy="96" rx="2.8" ry="3.4" fill="#2b1a10" />
            <ellipse cx="112" cy="96" rx="2.8" ry="3.4" fill="#2b1a10" />
            <path d="M100 100q-3 9 2 11" fill="none" stroke="#c98f6e" strokeWidth="2" strokeLinecap="round" />
            <path d="M91 119q9 6 18 0q-9 3-18 0z" fill="#c4675a" stroke="#c4675a" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="80" cy="108" r="6" fill="#e79c86" opacity=".35" />
            <circle cx="120" cy="108" r="6" fill="#e79c86" opacity=".35" />
            <circle cx="66" cy="110" r="3" fill="#d4a73c" />
            <circle cx="134" cy="110" r="3" fill="#d4a73c" />
          </svg>
          <span className="hp-pt" />
        </div>
        <svg className="hp-link" viewBox="0 0 260 260" width="260" height="260">
          <path d="M153 147C188 156 214 184 228 216" fill="none" stroke="#7b2ff7" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
        </svg>
        <span className="hp-swatch" />
      </div>

      <div className="hero-side hero-side-right">
        <span className="hr-back hr-back-1" aria-hidden="true" />
        <span className="hr-back hr-back-2" aria-hidden="true" />
        <div className="hr-card" role="group" aria-label="Try a season color on the portrait">
          <div className="hr-top">
            <span className="hr-avatar" aria-hidden="true" style={{ background: drape }} />
            <div className="hr-seasons">
              {SEASONS.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  className="hr-season"
                  style={{ background: s.dot }}
                  aria-label={`${s.name} palette`}
                  aria-pressed={i === season}
                  onClick={() => chooseSeason(i)}
                />
              ))}
            </div>
          </div>
          <div className="hr-grid">
            {current.colors.map((c, i) => (
              <button
                key={i}
                type="button"
                className="hr-sw"
                style={{ background: c }}
                aria-label={`Try ${c}`}
                aria-pressed={i === pick}
                onClick={() => chooseColor(i)}
              />
            ))}
          </div>
          <div className="hr-foot" aria-hidden="true">
            <span className="hr-metal" />
            <span className="hr-bar" />
          </div>
          <span className="hr-check" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M5 12.5l4.2 4.2L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
