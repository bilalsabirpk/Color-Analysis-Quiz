'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { SEASON_NAMES, SEASON_SLUGS } from '@/lib/season-estimate';

// "Does this color suit me?" Compares any color with the 12 shades of a
// season palette using CIELAB color difference (ΔE 2000), explains the
// result with lightness / warmth / intensity, and lists the seasons the
// color suits best. Palettes come from the page (lib/sub-season-guides).

export function hexToLab(hex) {
  const n = parseInt(hex.slice(1), 16);
  const lin = (c) => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const r = lin((n >> 16) & 255);
  const g = lin((n >> 8) & 255);
  const b = lin(n & 255);
  const x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const L = 116 * f(y) - 16;
  return { L, a: 500 * (f(x) - f(y)), b: 200 * (f(y) - f(z)) };
}

// CIEDE2000 color difference.
function deltaE(l1, l2) {
  const rad = Math.PI / 180;
  const C1 = Math.hypot(l1.a, l1.b);
  const C2 = Math.hypot(l2.a, l2.b);
  const Cb = (C1 + C2) / 2;
  const G = 0.5 * (1 - Math.sqrt(Cb ** 7 / (Cb ** 7 + 25 ** 7)));
  const a1 = l1.a * (1 + G);
  const a2 = l2.a * (1 + G);
  const c1 = Math.hypot(a1, l1.b);
  const c2 = Math.hypot(a2, l2.b);
  const h = (a, b) => {
    const v = Math.atan2(b, a) / rad;
    return v < 0 ? v + 360 : v;
  };
  const h1 = h(a1, l1.b);
  const h2 = h(a2, l2.b);
  const dL = l2.L - l1.L;
  const dC = c2 - c1;
  let dh = h2 - h1;
  if (c1 * c2 === 0) dh = 0;
  else if (dh > 180) dh -= 360;
  else if (dh < -180) dh += 360;
  const dH = 2 * Math.sqrt(c1 * c2) * Math.sin((dh / 2) * rad);
  const Lb = (l1.L + l2.L) / 2;
  const cb = (c1 + c2) / 2;
  let hb = h1 + h2;
  if (c1 * c2 !== 0) {
    if (Math.abs(h1 - h2) > 180) hb += h1 + h2 < 360 ? 360 : -360;
    hb /= 2;
  }
  const T = 1 - 0.17 * Math.cos((hb - 30) * rad) + 0.24 * Math.cos(2 * hb * rad) + 0.32 * Math.cos((3 * hb + 6) * rad) - 0.2 * Math.cos((4 * hb - 63) * rad);
  const Sl = 1 + (0.015 * (Lb - 50) ** 2) / Math.sqrt(20 + (Lb - 50) ** 2);
  const Sc = 1 + 0.045 * cb;
  const Sh = 1 + 0.015 * cb * T;
  const Rt = -2 * Math.sqrt(cb ** 7 / (cb ** 7 + 25 ** 7)) * Math.sin(60 * Math.exp(-(((hb - 275) / 25) ** 2)) * rad);
  return Math.sqrt((dL / Sl) ** 2 + (dC / Sc) ** 2 + (dH / Sh) ** 2 + Rt * (dC / Sc) * (dH / Sh));
}

function describe(lab) {
  const C = Math.hypot(lab.a, lab.b);
  const light = lab.L > 70 ? 'light' : lab.L < 40 ? 'deep' : 'medium';
  const intensity = C > 45 ? 'bright' : C < 20 ? 'soft and muted' : 'medium intensity';
  // Temperature from the CIELAB hue angle: orange-red to yellow-green reads
  // warm, blue-green through blue, purple and blue-pink reads cool.
  // Very low-chroma colors (greys) have no clear temperature.
  let hue = (Math.atan2(lab.b, lab.a) * 180) / Math.PI;
  if (hue < 0) hue += 360;
  const temp = C < 8 ? 'neutral' : hue >= 30 && hue < 140 ? 'warm' : hue >= 140 && hue < 170 ? 'neutral' : 'cool';
  return { light, intensity, temp, achromatic: C < 8 };
}

const VALID = /^#[0-9A-F]{6}$/;

export default function ColorChecker({ palettes, id = 'color-checker', className = 'alt-bg' }) {
  const uid = useId();
  const [hex, setHex] = useState('#7B2FF7');
  const [text, setText] = useState('#7B2FF7');
  const [season, setSeason] = useState('');
  const [error, setError] = useState('');

  function apply(value) {
    let v = value.trim().toUpperCase();
    if (!v.startsWith('#')) v = `#${v}`;
    if (/^#[0-9A-F]{3}$/.test(v)) v = `#${v[1]}${v[1]}${v[2]}${v[2]}${v[3]}${v[3]}`;
    if (!VALID.test(v)) {
      setError('Please enter a 6-digit hex code, for example #7B2FF7.');
      return;
    }
    setError('');
    setHex(v);
    setText(v);
  }

  const lab = hexToLab(hex);
  const desc = describe(lab);

  // Best seasons overall for this color.
  const ranking = SEASON_SLUGS.map((s) => {
    const best = Math.min(...palettes[s].map((c) => deltaE(lab, hexToLab(c.hex))));
    return { s, best };
  }).sort((x, y) => x.best - y.best);

  let verdict = null;
  if (season) {
    const near = palettes[season]
      .map((c) => ({ ...c, d: deltaE(lab, hexToLab(c.hex)) }))
      .sort((x, y) => x.d - y.d);
    const d = near[0].d;
    const rank = ranking.findIndex((r) => r.s === season) + 1;
    const level = d < 10 ? 'great' : d < 20 ? 'close' : 'no';
    verdict = { near: near.slice(0, 3), d, rank, level };
  }

  const LEVEL = {
    great: { title: 'Yes, this color suits you', tone: 'is-yes', text: 'It is very close to a shade in your palette.' },
    close: { title: 'Close, but not your best', tone: 'is-maybe', text: 'It is near your palette. The shades below are a better version of it for you.' },
    no: { title: 'Not your best color', tone: 'is-no', text: 'It is far from your palette. Wear it away from your face, or try the closest shades below instead.' },
  };

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>Check Any Color</h2>
          <p>Pick a color (or paste a hex code from a shop), then choose your season.</p>
        </div>

        <div className="ut-card cc-card">
          <div className="cc-inputs">
            <div className="cc-field">
              <span className="cc-label" id={`${uid}-cl`}>1. Your color</span>
              <form
                className="harmony-input-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  apply(text);
                }}
              >
                <label htmlFor={`${uid}-picker`} className="visually-hidden">Pick a color</label>
                <input type="color" id={`${uid}-picker`} value={hex.toLowerCase()} onChange={(e) => apply(e.target.value)} />
                <label htmlFor={`${uid}-hex`} className="visually-hidden">Hex color code</label>
                <input
                  type="text"
                  id={`${uid}-hex`}
                  value={text}
                  maxLength={7}
                  spellCheck={false}
                  autoComplete="off"
                  onChange={(e) => setText(e.target.value)}
                  aria-describedby={`${uid}-err`}
                  aria-invalid={Boolean(error)}
                />
                <button type="submit" className="btn btn-primary btn-sm">Check →</button>
              </form>
              <p className="cc-error" id={`${uid}-err`} role={error ? 'alert' : undefined}>{error}</p>
            </div>
            <div className="cc-field">
              <label className="cc-label" htmlFor={`${uid}-season`}>2. Your color season</label>
              <select id={`${uid}-season`} className="cc-select" value={season} onChange={(e) => setSeason(e.target.value)}>
                <option value="">Choose your season…</option>
                {SEASON_SLUGS.map((s) => (
                  <option key={s} value={s}>{SEASON_NAMES[s]}</option>
                ))}
              </select>
              <p className="cc-help">
                Don&apos;t know it? Take the <Link href="/what-season-am-i">season quiz</Link> or the{' '}
                <Link href="/#quiz">photo analysis</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="ut-result tf-result cc-result" aria-live="polite">
          <div className="ut-result-main">
            <div className="cc-swatch-row">
              <span className="cc-big" style={{ background: hex }} aria-hidden="true" />
              <div>
                <p className="ut-kicker">Your color</p>
                <h3>{hex}</h3>
                <p className="ut-tagline">
                  {desc.achromatic
                    ? `A ${desc.light} neutral with almost no hue, like grey, black or white.`
                    : `A ${desc.light}, ${desc.temp}, ${desc.intensity} color.`}
                </p>
              </div>
            </div>
            {verdict ? (
              <div className={`cc-verdict ${LEVEL[verdict.level].tone}`}>
                <strong>{LEVEL[verdict.level].title}</strong>
                <span>
                  {LEVEL[verdict.level].text} For {SEASON_NAMES[season]}, it ranks #{verdict.rank} of 12 seasons.
                </span>
              </div>
            ) : (
              <p className="ut-tip">Choose your season to see if this color suits you.</p>
            )}
            {verdict && (
              <>
                <h4 className="cc-h4">Closest {SEASON_NAMES[season]} shades</h4>
                <ul className="tf-shades" aria-label={`Closest ${SEASON_NAMES[season]} shades`}>
                  {verdict.near.map((c) => (
                    <li key={c.hex + c.name}>
                      <span className="tf-chip" style={{ background: c.hex }} aria-hidden="true" />
                      <span className="tf-name">{c.name}</span>
                      <code>{c.hex}</code>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="ut-result-side">
            <p className="ut-kicker">This color suits these seasons best</p>
            <ol className="cc-rank">
              {ranking.slice(0, 3).map((r) => (
                <li key={r.s}>
                  <Link href={`/guides/${r.s}-color-palette`}>{SEASON_NAMES[r.s]}</Link>
                </li>
              ))}
            </ol>
            <p className="ut-note">
              Screens and product photos change how colors look. For clothes, compare the real
              item in daylight next to your face.
            </p>
            <div className="ut-cta tf-cta">
              <Link href="/seasonal-color-palettes" className="btn btn-outline btn-sm">All 12 palettes</Link>
              <Link href="/color-harmony-generator" className="btn btn-outline btn-sm">Colors that go with it</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
