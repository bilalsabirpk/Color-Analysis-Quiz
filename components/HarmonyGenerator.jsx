'use client';

import { useId, useState } from 'react';

// Standalone color harmony generator for /color-harmony-generator.
// Same color-wheel math as generateHarmony() in public/quiz-logic.js
// (rotate the hue, keep saturation and lightness), plus square and
// monochromatic schemes. Click a swatch to copy its hex code.

function hexToHsl(hex) {
  const n = parseInt(hex.slice(1), 16);
  let r = ((n >> 16) & 255) / 255;
  let g = ((n >> 8) & 255) / 255;
  let b = (n & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s, l };
}

function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const to = (v) => Math.round((v + m) * 255).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}

const rotate = (hex, deg) => {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h + deg, s, l);
};
const lighten = (hex, amt) => {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, Math.min(0.95, Math.max(0.08, l + amt)));
};

export function harmonySchemes(hex) {
  return [
    { name: 'Complementary', note: 'Opposite on the color wheel: the strongest contrast.', colors: [rotate(hex, 180)] },
    { name: 'Analogous', note: 'Neighbors on the wheel: calm and easy to wear together.', colors: [rotate(hex, -30), rotate(hex, 30)] },
    { name: 'Triadic', note: 'Three colors evenly spaced: bold but balanced.', colors: [rotate(hex, 120), rotate(hex, 240)] },
    { name: 'Split-Complementary', note: 'The two neighbors of the complement: contrast with less clash.', colors: [rotate(hex, 150), rotate(hex, 210)] },
    { name: 'Square', note: 'Four colors 90° apart: lively, works best with one dominant color.', colors: [rotate(hex, 90), rotate(hex, 180), rotate(hex, 270)] },
    { name: 'Monochromatic', note: 'Lighter and darker versions of one color: tonal and polished.', colors: [lighten(hex, -0.24), lighten(hex, -0.12), lighten(hex, 0.12), lighten(hex, 0.24)] },
  ];
}

// One signature shade from each of the 12 seasons.
const QUICK = [
  ['Light Spring', '#F4A08A'], ['Warm Spring', '#F2795B'], ['Bright Spring', '#E63946'],
  ['Light Summer', '#B9D6F2'], ['Cool Summer', '#D47A95'], ['Soft Summer', '#C9A0A6'],
  ['Soft Autumn', '#C19A6B'], ['Warm Autumn', '#B5532A'], ['Deep Autumn', '#2E5939'],
  ['Deep Winter', '#6D0F2A'], ['Cool Winter', '#0F52BA'], ['Bright Winter', '#E0218A'],
];

const VALID = /^#[0-9A-F]{6}$/;

export default function HarmonyGenerator({ initial = '#9333EA' }) {
  const uid = useId();
  const [hex, setHex] = useState(initial);
  const [text, setText] = useState(initial);
  const [copied, setCopied] = useState('');
  const [status, setStatus] = useState('');

  function apply(value) {
    let v = value.trim().toUpperCase();
    if (!v.startsWith('#')) v = `#${v}`;
    if (/^#[0-9A-F]{3}$/.test(v)) v = `#${v[1]}${v[1]}${v[2]}${v[2]}${v[3]}${v[3]}`;
    if (!VALID.test(v)) {
      setStatus('Please enter a 6-digit hex code, for example #9333EA.');
      return;
    }
    setHex(v);
    setText(v);
    setStatus(`Showing color harmonies for ${v}.`);
  }

  async function copy(value) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setStatus(`${value} copied.`);
      setTimeout(() => setCopied(''), 1200);
    } catch {
      setStatus(`Copy ${value} manually; your browser blocked clipboard access.`);
    }
  }

  const schemes = harmonySchemes(hex);

  return (
    <section id="harmony-tool" className="alt-bg" aria-labelledby={`${uid}-h`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-h`}>Generate a Color Harmony</h2>
          <p>Pick a base color or type a hex code. Click any swatch to copy its hex code.</p>
        </div>

        <div className="harmony-panel">
          <form
            className="harmony-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              apply(text);
            }}
          >
            <label htmlFor={`${uid}-picker`} className="visually-hidden">Pick a base color</label>
            <input
              type="color"
              id={`${uid}-picker`}
              value={hex.toLowerCase()}
              onChange={(e) => apply(e.target.value)}
            />
            <label htmlFor={`${uid}-hex`} className="visually-hidden">Hex color code</label>
            <input
              type="text"
              id={`${uid}-hex`}
              value={text}
              maxLength={7}
              spellCheck={false}
              autoComplete="off"
              onChange={(e) => setText(e.target.value)}
              aria-describedby={`${uid}-hint`}
            />
            <button type="submit" className="btn btn-primary btn-sm">Generate Harmony →</button>
          </form>
          <p className="harmony-hint" id={`${uid}-hint`}>Enter a hex code or use the picker.</p>

          <div className="harmony-quickpicks">
            <span>Start from a season color:</span>
            <div className="harmony-quick-row">
              {QUICK.map(([name, c]) => (
                <button
                  key={name}
                  type="button"
                  className="harmony-quick-swatch"
                  style={{ background: c }}
                  title={`${name} ${c}`}
                  aria-label={`Use ${name} shade ${c} as the base color`}
                  onClick={() => apply(c)}
                />
              ))}
            </div>
          </div>

          <p className="visually-hidden" aria-live="polite">{status}</p>

          {schemes.map((s) => (
            <div className="harmony-group" key={s.name}>
              <h3>{s.name}</h3>
              <p className="harmony-note">{s.note}</p>
              <div className="palette-row">
                {[hex, ...s.colors].map((c, i) => (
                  <button
                    type="button"
                    key={`${s.name}-${i}`}
                    className={`swatch harmony-swatch${copied === c ? ' copied' : ''}`}
                    onClick={() => copy(c)}
                    aria-label={`${c}${i === 0 ? ' · base' : ''}, copy hex code`}
                  >
                    <div className="sw-color" style={{ background: c }} />
                    <div className="sw-label">{c}{i === 0 ? ' · base' : ''}</div>
                    <div className="copied-badge" aria-hidden="true">Copied!</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
