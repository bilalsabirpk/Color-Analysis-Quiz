'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { hexToLab } from '@/components/ColorChecker';

// Skin tone analyzer: the person adds a photo (it never leaves the
// browser) and taps their cheek, or picks their skin color by hand. The
// sampled color is converted to CIELAB: lightness (L*) gives the depth,
// the hue angle gives the undertone. Camera white balance affects the
// result, so it is labelled as an estimate and points to the quiz tests.

const DEPTHS = [
  { name: 'Fair', min: 82 },
  { name: 'Light', min: 70 },
  { name: 'Medium', min: 55 },
  { name: 'Tan', min: 42 },
  { name: 'Deep', min: -1 },
];

const UNDERTONES = {
  Warm: { text: 'Golden, peachy or yellow undertone.', colors: ['#F27E63', '#B5532A', '#D4A017', '#6B7A2E', '#2E8B7A', '#C19A6B'], metal: 'Gold', foundation: 'Warm (W, Y or G) foundation shades' },
  Cool: { text: 'Pink, rosy or red undertone.', colors: ['#D47A95', '#B3446C', '#A99BC9', '#1B2A4A', '#00704A', '#0F52BA'], metal: 'Silver', foundation: 'Cool (C, R or P) foundation shades' },
  Neutral: { text: 'A balance of warm and cool.', colors: ['#3E8E8A', '#C9A0A6', '#5FA37A', '#C8102E', '#A39486', '#3E4E6E'], metal: 'Both gold and silver', foundation: 'Neutral (N) foundation shades' },
  Olive: { text: 'Neutral-warm with a green or grey cast.', colors: ['#2E6B6B', '#00704A', '#6D0F2A', '#B5532A', '#C19A6B', '#1B2A4A'], metal: 'Gold, bronze or rose gold', foundation: 'Olive (O) or neutral-warm foundation shades' },
};

function analyze(hex) {
  const lab = hexToLab(hex);
  const C = Math.hypot(lab.a, lab.b);
  let h = (Math.atan2(lab.b, lab.a) * 180) / Math.PI;
  if (h < 0) h += 360;
  const depth = DEPTHS.find((d) => lab.L >= d.min).name;
  let undertone;
  let unclear = false;
  if (C < 8) {
    undertone = 'Neutral';
    unclear = true;
  } else {
    // Deeper skin naturally has more red in it, so the hue limits shift down
    // for it; otherwise most deep brown skin would read as "cool".
    const deep = lab.L < 45;
    const warmMin = deep ? 55 : 62;
    const neutralMin = deep ? 42 : 52;
    if (h >= 78 && lab.a < 7) undertone = 'Olive';
    else if (h >= warmMin && h < 300) undertone = 'Warm';
    else if (h >= neutralMin && h < 300) undertone = 'Neutral';
    else undertone = 'Cool';
  }
  // Very red/blue or very grey samples usually mean bad light or a shadow.
  const odd = lab.L > 97 || lab.L < 8 || C > 45 || (h > 100 && h < 300);
  return { hex, depth, undertone, unclear, odd, meter: Math.round(Math.min(100, Math.max(0, ((h > 300 ? h - 360 : h) - 30) / 60 * 100))) };
}

function toHex(r, g, b) {
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
}

export default function SkinToneAnalyzer({ id = 'skin-tone-analyzer', className = 'alt-bg' }) {
  const uid = useId();
  const canvasRef = useRef(null);
  const fileRef = useRef(null);
  const resultRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [point, setPoint] = useState({ x: 0.4, y: 0.58 });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [manual, setManual] = useState('#C69477');

  function sample(p) {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    const rad = Math.max(3, Math.round(c.width * 0.025));
    const x = Math.round(p.x * c.width);
    const y = Math.round(p.y * c.height);
    const x0 = Math.max(0, x - rad);
    const y0 = Math.max(0, y - rad);
    const w = Math.min(c.width - x0, rad * 2);
    const hgt = Math.min(c.height - y0, rad * 2);
    const d = ctx.getImageData(x0, y0, Math.max(1, w), Math.max(1, hgt)).data;
    let r = 0;
    let g = 0;
    let b = 0;
    let n = 0;
    for (let i = 0; i < d.length; i += 4) {
      r += d[i];
      g += d[i + 1];
      b += d[i + 2];
      n++;
    }
    setResult({ ...analyze(toHex(Math.round(r / n), Math.round(g / n), Math.round(b / n))), source: 'photo' });
  }

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file (JPG, PNG or WebP).');
      return;
    }
    setError('');
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const c = canvasRef.current;
      const scale = Math.min(1, 560 / img.naturalWidth);
      c.width = Math.round(img.naturalWidth * scale);
      c.height = Math.round(img.naturalHeight * scale);
      c.getContext('2d', { willReadFrequently: true }).drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      setHasPhoto(true);
      const p = { x: 0.4, y: 0.58 };
      setPoint(p);
      sample(p);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError('That image could not be opened. Try a JPG or PNG photo.');
    };
    img.src = url;
  }

  function pickAt(e) {
    // Measure against the canvas itself, not its frame.
    const rect = canvasRef.current.getBoundingClientRect();
    const p = { x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)), y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)) };
    setPoint(p);
    sample(p);
  }

  function onKey(e) {
    const step = e.shiftKey ? 0.05 : 0.02;
    const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (!moves[e.key]) return;
    e.preventDefault();
    const [dx, dy] = moves[e.key];
    const p = { x: Math.min(1, Math.max(0, point.x + dx)), y: Math.min(1, Math.max(0, point.y + dy)) };
    setPoint(p);
    sample(p);
  }

  // Move focus to the result the first time one appears.
  const hadResult = useRef(false);
  useEffect(() => {
    if (result && !hadResult.current) resultRef.current?.focus();
    hadResult.current = Boolean(result);
  }, [result]);

  const u = result ? UNDERTONES[result.undertone] : null;

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>Analyze Your Skin Tone</h2>
          <p>Use a daylight selfie with no filter and no makeup. Your photo stays on your device.</p>
        </div>

        <div className="ut-card st-card">
          <div className="st-grid">
            <div>
              <p className="cc-label">1. Add a photo</p>
              <input ref={fileRef} id={`${uid}-file`} type="file" accept="image/*" className="visually-hidden" onChange={onFile} />
              <label htmlFor={`${uid}-file`} className="btn btn-primary btn-sm st-upload">
                {hasPhoto ? 'Choose another photo' : 'Upload a selfie'}
              </label>
              {error && <p className="cc-error" role="alert">{error}</p>}
              <div className={`st-photo${hasPhoto ? '' : ' is-empty'}`}>
                <div
                  className="st-canvas-wrap"
                  onClick={hasPhoto ? pickAt : undefined}
                  onKeyDown={hasPhoto ? onKey : undefined}
                  tabIndex={hasPhoto ? 0 : -1}
                  role={hasPhoto ? 'application' : undefined}
                  aria-label={hasPhoto ? 'Your photo. Click your cheek, or use the arrow keys to move the sample point.' : undefined}
                >
                  <canvas ref={canvasRef} aria-hidden="true" />
                  {hasPhoto && (
                    <span className="st-marker" style={{ left: `${point.x * 100}%`, top: `${point.y * 100}%` }} aria-hidden="true" />
                  )}
                  {!hasPhoto && <span className="st-empty">Your photo will appear here</span>}
                </div>
                {hasPhoto && <p className="cc-help">Tap your cheek, away from shadows, shine and blush. Arrow keys move the point.</p>}
              </div>
            </div>
            <div>
              <p className="cc-label">
                <label htmlFor={`${uid}-manual`}>Or pick your skin color</label>
              </p>
              <div className="harmony-input-row st-manual">
                <input
                  type="color"
                  id={`${uid}-manual`}
                  value={manual.toLowerCase()}
                  onChange={(e) => setManual(e.target.value.toUpperCase())}
                />
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setResult({ ...analyze(manual), source: 'manual' })}>
                  Analyze this color
                </button>
              </div>
              <p className="cc-help">Hold your inner wrist next to the screen in daylight and adjust the color until it matches.</p>
            </div>
          </div>
        </div>

        <div aria-live="polite">
          {result && u && (
            <div className="ut-result tf-result" tabIndex={-1} ref={resultRef} aria-labelledby={`${uid}-rt`}>
              <div className="ut-result-main">
                <div className="cc-swatch-row">
                  <span className="cc-big" style={{ background: result.hex }} aria-hidden="true" />
                  <div>
                    <p className="ut-kicker">Your skin tone</p>
                    <h3 id={`${uid}-rt`}>
                      {result.depth}, {result.undertone.toLowerCase()} undertone
                    </h3>
                    <p className="ut-tagline">
                      Sampled color <code>{result.hex}</code>
                    </p>
                  </div>
                </div>
                <div className="ut-meter" aria-hidden="true">
                  <div className="ut-meter-bar st-under-bar">
                    <span className="ut-meter-dot" style={{ left: `${result.meter}%` }} />
                  </div>
                  <div className="ut-meter-labels">
                    <span>Cool</span>
                    <span>Neutral</span>
                    <span>Warm</span>
                  </div>
                </div>
                <p className="ut-tip">{u.text}</p>
                {result.unclear && (
                  <p className="ut-note">This sample has very little color, so the undertone is hard to read from a photo. The undertone test will give a clearer answer.</p>
                )}
                {result.odd && result.source === 'photo' && (
                  <p className="cc-verdict is-maybe"><span>This sample looks unusual (a shadow, glare or colored light). Try a different spot or a daylight photo.</span></p>
                )}
                <p className="ut-metal"><strong>Best jewelry metal:</strong> {u.metal}</p>
                <p className="ut-metal"><strong>Look for:</strong> {u.foundation}</p>
              </div>
              <div className="ut-result-side">
                <p className="ut-kicker">Colors to try</p>
                <ul className="ut-palette" aria-label={`Colors for a ${result.undertone.toLowerCase()} undertone`}>
                  {u.colors.map((c) => (
                    <li key={c} style={{ background: c }} title={c}>
                      <span className="visually-hidden">{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="ut-note">
                  Phone cameras change colors, so this is an estimate. Confirm your undertone with
                  the six-question test, which does not depend on your camera.
                </p>
                <div className="ut-cta tf-cta">
                  <Link href="/undertone-test" className="btn btn-primary btn-sm">Confirm with the undertone test</Link>
                  <Link href="/foundation-undertone-finder" className="btn btn-outline btn-sm">Foundation undertone</Link>
                  <Link href="/#quiz" className="btn btn-outline btn-sm">Find your full season</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="ut-disclaimer">An estimate from one photo or color, not a professional consultation.</p>
      </div>
    </section>
  );
}
