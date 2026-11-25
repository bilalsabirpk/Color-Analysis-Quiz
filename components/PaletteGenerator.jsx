'use client';

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Icon from '@/components/Icon';

// Color palette generator for /color-palette-generator.
// Three ways to build a 3–8 color palette: random, from one base color with a
// color-wheel scheme, or from one of the 12 seasonal palettes (passed in from
// the server page so it never drifts from the guides). Colors can be locked,
// copied, shared as a link and downloaded as a PNG. Every palette also shows
// its closest color season. Everything runs in the browser.

const SCHEMES = [
  { key: 'analogous', label: 'Analogous (calm)' },
  { key: 'monochromatic', label: 'Monochromatic (one hue)' },
  { key: 'complementary', label: 'Complementary (contrast)' },
  { key: 'split', label: 'Split complementary' },
  { key: 'triadic', label: 'Triadic (bold)' },
  { key: 'square', label: 'Square (four hues)' },
];
const COUNTS = [3, 4, 5, 6, 7, 8];
const HEX_RE = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
const DEFAULT_BASE = '#2A7F8F';

// ---------- color math ----------
function normHex(v) {
  const m = String(v || '').trim().match(HEX_RE);
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  return `#${h.toUpperCase()}`;
}
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function hexToHsl(hex) {
  let [r, g, b] = hexToRgb(hex).map((v) => v / 255);
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
  s = Math.min(1, Math.max(0, s));
  l = Math.min(1, Math.max(0, l));
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
function toLab(hex) {
  const lin = (v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = hexToRgb(hex).map(lin);
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const x = f((r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047);
  const y = f(r * 0.2126 + g * 0.7152 + b * 0.0722);
  const z = f((r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}
function deltaE(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}
function isLight(hex) {
  const [r, g, b] = hexToRgb(hex);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}
const lightness = (hex) => hexToHsl(hex).l;

// ---------- generators ----------
const HUE_OFFSETS = {
  analogous: [0, -25, 25, -50, 50],
  monochromatic: [0],
  complementary: [0, 180],
  split: [0, 150, 210],
  triadic: [0, 120, 240],
  square: [0, 90, 180, 270],
};
// Spread the palette from light to dark, keep the base color itself in the
// slot closest to its own lightness, and turn the hue for the other slots.
function fromBase(base, scheme, n) {
  const { h, s, l } = hexToHsl(base);
  const offs = HUE_OFFSETS[scheme] || HUE_OFFSETS.analogous;
  const lts = Array.from({ length: n }, (_, i) => 0.88 - (n === 1 ? 0 : (i / (n - 1)) * 0.66));
  let k = 0;
  lts.forEach((v, i) => {
    if (Math.abs(v - l) < Math.abs(lts[k] - l)) k = i;
  });
  return lts.map((lt, i) => {
    if (i === k) return base;
    const off = offs[(((i - k) % offs.length) + offs.length) % offs.length];
    const sat = Math.min(0.9, Math.max(0.1, s * (1 - 0.35 * Math.abs(lt - l))));
    return hslToHex(h + off, sat, lt);
  });
}
function randomSet(n) {
  const scheme = SCHEMES[Math.floor(Math.random() * SCHEMES.length)].key;
  const base = hslToHex(Math.random() * 360, 0.35 + Math.random() * 0.45, 0.38 + Math.random() * 0.25);
  return fromBase(base, scheme, n);
}
function seasonSet(season, n) {
  const pool = [...season.colors].map((c) => c.hex.toUpperCase());
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const picked = pool.slice(0, n);
  while (picked.length < n) picked.push(pool[picked.length % pool.length]);
  return picked;
}
const byLightness = (list) => [...list].sort((a, b) => lightness(b) - lightness(a));

// ---------- component ----------
export default function PaletteGenerator({ seasons }) {
  const uid = useId();
  const [mode, setMode] = useState('random');
  const [count, setCount] = useState(5);
  const [base, setBase] = useState(DEFAULT_BASE);
  const [baseText, setBaseText] = useState(DEFAULT_BASE);
  const [baseError, setBaseError] = useState('');
  const [scheme, setScheme] = useState('analogous');
  const [seasonSlug, setSeasonSlug] = useState('soft-autumn');
  const [colors, setColors] = useState(() =>
    byLightness(fromBase(DEFAULT_BASE, 'analogous', 5)).map((hex) => ({ hex, locked: false }))
  );
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState('');
  const statusTimer = useRef(null);

  const season = seasons.find((s) => s.slug === seasonSlug) || seasons[0];

  // Lab values of every named season color, for "closest season" and names.
  const named = useMemo(
    () =>
      seasons.flatMap((s) =>
        s.colors.map((c) => ({ name: c.name, hex: c.hex, season: s, lab: toLab(c.hex.toUpperCase()) }))
      ),
    [seasons]
  );

  const say = useCallback((msg) => {
    setStatus(msg);
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setStatus(''), 2500);
  }, []);

  const freshSet = useCallback(
    (n, opts = {}) => {
      const m = opts.mode || mode;
      if (m === 'season') return seasonSet(opts.season || season, n);
      if (m === 'color') return byLightness(fromBase(opts.base || base, opts.scheme || scheme, n));
      return byLightness(randomSet(n));
    },
    [mode, season, base, scheme]
  );

  const generate = useCallback(
    (opts = {}) => {
      setColors((prev) => {
        const n = opts.count || prev.length;
        const fresh = freshSet(n, opts);
        let k = 0;
        const next = [];
        for (let i = 0; i < n; i++) {
          const keep = !opts.unlockAll && prev[i] && prev[i].locked;
          next.push(keep ? prev[i] : { hex: fresh[k++] || fresh[0], locked: false });
        }
        return next;
      });
      say('New palette generated.');
    },
    [freshSet, say]
  );

  // Load a shared palette from ?c=AABBCC-112233-... (also when a palette
  // idea link on the page changes the query without a reload).
  const params = useSearchParams();
  const shared = params.get('c');
  useEffect(() => {
    const raw = shared;
    if (!raw) return;
    const list = raw.split(/[-,]/).map(normHex).filter(Boolean).slice(0, 8);
    if (list.length >= 3) {
      setColors(list.map((hex) => ({ hex, locked: false })));
      setCount(list.length);
    }
  }, [shared]);

  // Space bar generates, like most palette tools (not while typing or on a control).
  useEffect(() => {
    function onKey(e) {
      if (e.code !== 'Space' || e.repeat) return;
      const t = e.target;
      if (t.closest && t.closest('input, textarea, select, button, a, [contenteditable="true"], summary')) return;
      e.preventDefault();
      generate();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [generate]);

  function changeMode(m) {
    setMode(m);
    generate({ mode: m });
  }
  function changeCount(n) {
    setCount(n);
    setColors((prev) => {
      if (n <= prev.length) {
        // Drop unlocked colors from the end first.
        const next = [...prev];
        for (let i = next.length - 1; i >= 0 && next.length > n; i--) if (!next[i].locked) next.splice(i, 1);
        return next.slice(0, n);
      }
      const extra = freshSet(n).slice(prev.length, n);
      return [...prev, ...extra.map((hex) => ({ hex, locked: false }))];
    });
  }
  function applyBase(value) {
    const hex = normHex(value);
    if (!hex) {
      setBaseError('Enter a hex code like #2A7F8F or #F80.');
      return;
    }
    setBaseError('');
    setBase(hex);
    setBaseText(hex);
    generate({ mode: 'color', base: hex });
  }
  function toggleLock(i) {
    setColors((prev) => prev.map((c, j) => (j === i ? { ...c, locked: !c.locked } : c)));
  }

  async function copyText(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(''), 1200);
      say(`${label} copied.`);
    } catch {
      say('Your browser blocked copying. Select the text and copy it manually.');
    }
  }

  function shareUrl() {
    const c = colors.map((x) => x.hex.slice(1)).join('-');
    return `${window.location.origin}/color-palette-generator?c=${c}`;
  }

  function downloadPng() {
    const W = 1200;
    const H = 630;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
    const pad = 40;
    const gap = 12;
    const w = (W - pad * 2 - gap * (colors.length - 1)) / colors.length;
    const top = 40;
    const swH = 460;
    colors.forEach((c, i) => {
      const x = pad + i * (w + gap);
      ctx.fillStyle = c.hex;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, top, w, swH, 16);
      else ctx.rect(x, top, w, swH);
      ctx.fill();
      ctx.fillStyle = isLight(c.hex) ? '#1F2937' : '#FFFFFF';
      ctx.font = '600 22px system-ui, -apple-system, Segoe UI, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.hex, x + w / 2, top + swH - 24);
    });
    ctx.fillStyle = '#4B5563';
    ctx.font = '500 20px system-ui, -apple-system, Segoe UI, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(match ? `Closest season: ${match.season.name}` : 'Color palette', pad, H - 50);
    ctx.textAlign = 'right';
    ctx.fillText('coloranalyzerquiz.com/color-palette-generator', W - pad, H - 50);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `color-palette-${colors.map((x) => x.hex.slice(1)).join('-')}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      say('Palette image downloaded.');
    }, 'image/png');
  }

  // Closest named shade per swatch, and the closest season for the palette.
  const nearest = useMemo(
    () =>
      colors.map((c) => {
        const lab = toLab(c.hex);
        let best = null;
        for (const n of named) {
          const d = deltaE(lab, n.lab);
          if (!best || d < best.d) best = { ...n, d };
        }
        return best;
      }),
    [colors, named]
  );
  const match = useMemo(() => {
    let best = null;
    for (const s of seasons) {
      const labs = s.colors.map((c) => toLab(c.hex.toUpperCase()));
      const avg =
        colors.reduce((sum, c) => {
          const lab = toLab(c.hex);
          return sum + Math.min(...labs.map((l) => deltaE(lab, l)));
        }, 0) / colors.length;
      if (!best || avg < best.avg) best = { season: s, avg };
    }
    return best;
  }, [colors, seasons]);
  const strength = match && (match.avg < 10 ? 'Very close match' : match.avg < 18 ? 'Good match' : 'Loose match');

  const swatchesLabel = `Generated palette: ${colors.map((c) => c.hex).join(', ')}`;

  return (
    <section id="generator" className="alt-bg pg-section" aria-labelledby={`${uid}-h`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-h`}>Generate a Color Palette</h2>
          <p>Choose how to build it, lock the colors you like and generate again. Click a hex code to copy it.</p>
        </div>

        <div className="pg-card">
          <div className="pg-controls">
            <fieldset className="pg-modes">
              <legend className="pg-label">Build palettes</legend>
              {[
                ['random', 'Random', 'dice'],
                ['color', 'From a color', 'palette'],
                ['season', 'From a season', 'autumn'],
              ].map(([key, label, icon]) => (
                <label key={key} className={`pg-mode${mode === key ? ' is-active' : ''}`}>
                  <input
                    type="radio"
                    name={`${uid}-mode`}
                    value={key}
                    checked={mode === key}
                    onChange={() => changeMode(key)}
                  />
                  <span>
                    <Icon name={icon} size={18} />
                    {label}
                  </span>
                </label>
              ))}
            </fieldset>

            <div className="pg-options">
              {mode === 'color' && (
                <>
                  <form
                    className="pg-field pg-base"
                    onSubmit={(e) => {
                      e.preventDefault();
                      applyBase(baseText);
                    }}
                  >
                    <label className="pg-label" htmlFor={`${uid}-hex`}>Base color</label>
                    <div className="pg-base-row">
                      <input
                        type="color"
                        aria-label="Pick a base color"
                        value={base.toLowerCase()}
                        onChange={(e) => applyBase(e.target.value)}
                      />
                      <input
                        type="text"
                        id={`${uid}-hex`}
                        value={baseText}
                        maxLength={7}
                        spellCheck={false}
                        autoComplete="off"
                        inputMode="text"
                        aria-invalid={baseError ? 'true' : 'false'}
                        aria-describedby={baseError ? `${uid}-err` : undefined}
                        onChange={(e) => setBaseText(e.target.value)}
                        onBlur={() => baseText !== base && applyBase(baseText)}
                      />
                      <button type="submit" className="btn btn-outline btn-sm">Apply</button>
                    </div>
                    {baseError && <p className="pg-error" id={`${uid}-err`} role="alert">{baseError}</p>}
                  </form>
                  <div className="pg-field">
                    <label className="pg-label" htmlFor={`${uid}-scheme`}>Color scheme</label>
                    <select
                      id={`${uid}-scheme`}
                      value={scheme}
                      onChange={(e) => {
                        setScheme(e.target.value);
                        generate({ mode: 'color', scheme: e.target.value });
                      }}
                    >
                      {SCHEMES.map((s) => (
                        <option key={s.key} value={s.key}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              {mode === 'season' && (
                <div className="pg-field">
                  <label className="pg-label" htmlFor={`${uid}-season`}>Color season</label>
                  <select
                    id={`${uid}-season`}
                    value={seasonSlug}
                    onChange={(e) => {
                      setSeasonSlug(e.target.value);
                      generate({ mode: 'season', season: seasons.find((s) => s.slug === e.target.value) });
                    }}
                  >
                    {seasons.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                </div>
              )}
              {mode === 'random' && (
                <p className="pg-note">Each click mixes a random base color with a color-wheel scheme, so the colors still work together.</p>
              )}
              <div className="pg-field pg-count">
                <label className="pg-label" htmlFor={`${uid}-count`}>Colors</label>
                <select id={`${uid}-count`} value={count} onChange={(e) => changeCount(Number(e.target.value))}>
                  {COUNTS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <ul className="pg-strip" aria-label={swatchesLabel}>
            {colors.map((c, i) => {
              const light = isLight(c.hex);
              const near = nearest[i];
              return (
                <li
                  key={i}
                  className={`pg-swatch${light ? ' is-light' : ''}${c.locked ? ' is-locked' : ''}`}
                  style={{ background: c.hex }}
                >
                  <button
                    type="button"
                    className="pg-lock"
                    aria-pressed={c.locked}
                    aria-label={`${c.locked ? 'Unlock' : 'Lock'} ${c.hex}`}
                    title={c.locked ? 'Unlock this color' : 'Lock this color'}
                    onClick={() => toggleLock(i)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                      <rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d={c.locked ? 'M8 11V8a4 4 0 0 1 8 0v3' : 'M8 11V8a4 4 0 0 1 7.5-2'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="pg-info">
                    <button
                      type="button"
                      className="pg-hex"
                      onClick={() => copyText(c.hex, c.hex)}
                      aria-label={`Copy ${c.hex}`}
                    >
                      {copied === c.hex ? 'Copied!' : c.hex}
                    </button>
                    {near && <span className="pg-name">{near.name}</span>}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="pg-actions">
            <button type="button" className="btn btn-primary" onClick={() => generate()}>
              Generate palette
            </button>
            <span className="pg-kbd" aria-hidden="true">or press <kbd>Space</kbd></span>
            <div className="pg-secondary">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => copyText(colors.map((c) => c.hex).join(', '), 'Hex codes')}
              >
                Copy hex codes
              </button>
              <button type="button" className="btn btn-outline btn-sm" onClick={downloadPng}>
                Download PNG
              </button>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => copyText(shareUrl(), 'Link')}>
                Copy link
              </button>
            </div>
          </div>
          <p className="pg-status" aria-live="polite">{status}</p>

          {match && (
            <div className="pg-match">
              <p>
                <strong>Closest color season:</strong>{' '}
                <Link href={`/guides/${match.season.slug}-color-palette`}>{match.season.name}</Link>{' '}
                <span className="pg-strength">({strength})</span>
              </p>
              <p className="pg-match-sub">
                Not sure this palette suits you? Find your own season with the{' '}
                <Link href="/#quiz">free photo color analysis</Link>, or check one color with{' '}
                <Link href="/does-this-color-suit-me">does this color suit me</Link>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
