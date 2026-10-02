'use client';

import { useEffect, useRef, useState } from 'react';

// Interactive hero demo: switch seasons, tap a color to "try it on" the
// illustrated portrait. Palettes match SEASONS.best in public/quiz-logic.js.
// It's a demo (clearly labelled), the real analysis is the quiz below.

const SEASONS = [
  {
    key: 'spring', name: 'Spring', emoji: '🌸', formula: 'Warm · Light · Bright', meter: 26,
    skin: '#f1c9a5', blush: '#f19a86', hair: '#c27c3a', eyes: '#3f7a4a',
    colors: ['#FFD166', '#F6A94A', '#8CC084', '#5FA8D3', '#EF5B5B', '#7BC4C4'],
    metal: 'Gold jewelry', lips: 'Coral lips',
  },
  {
    key: 'summer', name: 'Summer', emoji: '💧', formula: 'Cool · Light · Soft', meter: 72,
    skin: '#efcfc2', blush: '#e39aa7', hair: '#9c8468', eyes: '#5b7a99',
    colors: ['#A7C6DA', '#C9A9D9', '#7F95D1', '#9FB8AD', '#D8A7B1', '#8E9AAF'],
    metal: 'Silver jewelry', lips: 'Rose lips',
  },
  {
    key: 'autumn', name: 'Autumn', emoji: '🍂', formula: 'Warm · Deep · Soft', meter: 18,
    skin: '#e2b48f', blush: '#e79c86', hair: '#5a3322', eyes: '#4a2f1c',
    colors: ['#B85C38', '#C48A3C', '#6B4226', '#8A9A5B', '#D9A441', '#4A5D23'],
    metal: 'Gold jewelry', lips: 'Terracotta lips',
  },
  {
    key: 'winter', name: 'Winter', emoji: '❄️', formula: 'Cool · Deep · Bright', meter: 84,
    skin: '#d9ad92', blush: '#d9899a', hair: '#1c1616', eyes: '#2b1a12',
    colors: ['#0B1F3A', '#7A0C2E', '#00727A', '#4B0082', '#C40233', '#1C1C1C'],
    metal: 'Silver jewelry', lips: 'Berry lips',
  },
];

export default function HeroPreview() {
  const [si, setSi] = useState(2); // start on Autumn
  const [ci, setCi] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef(null);
  const s = SEASONS[si];
  const shirt = s.colors[ci];

  // Gentle auto-demo until the visitor interacts; never with reduced motion.
  useEffect(() => {
    if (!auto || paused) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      setSi((i) => (i + 1) % SEASONS.length);
      setCi(0);
    }, 3800);
    return () => clearInterval(id);
  }, [auto, paused]);

  function pickSeason(i) {
    setAuto(false);
    setSi(i);
    setCi(0);
  }
  function pickColor(i) {
    setAuto(false);
    setCi(i);
  }

  return (
    <div
      className="hero-art"
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-card" style={{ '--hc-accent': shirt }}>
        <div className="hc-top">
          <span className="hc-live"><i aria-hidden="true" /> Live preview</span>
          <span className="hc-hint">Pick a season</span>
        </div>

        <div className="hc-tabs" role="group" aria-label="Preview a color season">
          {SEASONS.map((x, i) => (
            <button
              key={x.key}
              type="button"
              className="hc-tab"
              aria-pressed={i === si}
              onClick={() => pickSeason(i)}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div className="hc-main">
          <div className="hc-portrait" aria-hidden="true">
            <svg viewBox="0 0 120 140" width="100%" height="100%">
              <rect width="120" height="140" fill="#f6ecfb" />
              <path className="hc-t" d="M26 70c-4-30 12-52 34-52s38 22 34 52c-2 16-6 30-10 38H36c-4-8-8-22-10-38z" style={{ fill: s.hair }} />
              <rect className="hc-t" x="50" y="92" width="20" height="18" rx="6" style={{ fill: s.skin, filter: 'brightness(.94)' }} />
              <path className="hc-t" d="M14 140c2-20 20-32 46-32s44 12 46 32z" style={{ fill: shirt }} />
              <ellipse className="hc-t" cx="60" cy="64" rx="24" ry="30" style={{ fill: s.skin }} />
              <path className="hc-t" d="M35 58c2-20 14-30 27-30 14 0 24 10 24 26-10-2-22-8-30-18-4 10-12 18-21 22z" style={{ fill: s.hair }} />
              <path d="M44 40c6-6 14-8 22-6" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="3" strokeLinecap="round" />
              <circle className="hc-t" cx="36.5" cy="74" r="2.6" style={{ fill: s.metal.includes('Gold') ? '#d4a73c' : '#c0c4cc' }} />
              <circle className="hc-t" cx="83.5" cy="74" r="2.6" style={{ fill: s.metal.includes('Gold') ? '#d4a73c' : '#c0c4cc' }} />
              <ellipse className="hc-t" cx="51" cy="67" rx="2.8" ry="3.2" style={{ fill: s.eyes }} />
              <ellipse className="hc-t" cx="69" cy="67" rx="2.8" ry="3.2" style={{ fill: s.eyes }} />
              <path d="M54 82c3 2.5 9 2.5 12 0" fill="none" stroke="#b86a55" strokeWidth="2" strokeLinecap="round" />
              <circle className="hc-t" cx="44" cy="76" r="4" style={{ fill: s.blush }} opacity=".45" />
              <circle className="hc-t" cx="76" cy="76" r="4" style={{ fill: s.blush }} opacity=".45" />
              <g fontFamily="system-ui,sans-serif" fontSize="7" fontWeight="800" textAnchor="middle">
                <circle cx="72" cy="80" r="7" fill="#7b2ff7" stroke="#fff" strokeWidth="2" /><text x="72" y="82.5" fill="#fff">S</text>
                <circle cx="51" cy="59" r="6" fill="#0891b2" stroke="#fff" strokeWidth="2" /><text x="51" y="61.5" fill="#fff">E</text>
                <circle cx="84" cy="44" r="6" fill="#b45309" stroke="#fff" strokeWidth="2" /><text x="84" y="46.5" fill="#fff">H</text>
              </g>
            </svg>
          </div>
          <div className="hc-info" aria-live="polite">
            <span className="hc-kicker">Season</span>
            <strong className="hc-season">
              {s.name}
            </strong>
            <span className="hc-sub">{s.formula}</span>
            <div className="hc-meter" aria-hidden="true">
              <span className="hc-meter-bar"><i style={{ left: `${s.meter}%` }} /></span>
              <span className="hc-meter-labels"><b>Warm</b><b>Cool</b></span>
            </div>
          </div>
        </div>

        <div className="hc-block">
          <span className="hc-kicker">Best colors: tap to try one on</span>
          <div className="hc-swatches" role="group" aria-label={`${s.name} best colors`}>
            {s.colors.map((hex, i) => (
              <button
                key={hex}
                type="button"
                className="hc-swatch"
                style={{ background: hex }}
                aria-pressed={i === ci}
                aria-label={`Try ${hex}`}
                title={hex}
                onClick={() => pickColor(i)}
              />
            ))}
          </div>
        </div>

        <div className="hc-foot">
          <span className="hc-pill">{s.metal}</span>
          <span className="hc-pill">{s.lips}</span>
        </div>

        <a href="#quiz" className="btn btn-primary btn-sm hc-cta">
          Find my real season →
        </a>
      </div>


    </div>
  );
}
