'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import QuizForm from '@/components/QuizForm';

// Gold or silver jewelry test: six undertone signs (it deliberately does
// not ask "which metal looks better", because that is the answer) →
// gold, silver or both, with metals and gemstones to try.

const QUESTIONS = [
  {
    id: 'veins',
    q: 'In daylight, the veins on your inner wrist look…',
    options: [
      { label: 'Green or olive', v: 2 },
      { label: 'Blue or purple', v: -2 },
      { label: 'A mix / hard to tell', v: 0 },
    ],
  },
  {
    id: 'white',
    q: 'Held near your face, which looks better?',
    options: [
      { label: 'Cream / ivory', v: 1 },
      { label: 'Crisp bright white', v: -1 },
      { label: 'No real difference', v: 0 },
    ],
  },
  {
    id: 'sun',
    q: 'After time in the sun, your skin usually…',
    options: [
      { label: 'Tans golden easily', v: 1 },
      { label: 'Burns or turns pink', v: -1 },
      { label: 'Burns, then tans', v: 0 },
    ],
  },
  {
    id: 'cast',
    q: 'In an unfiltered daylight photo, your skin looks…',
    options: [
      { label: 'Golden, yellow or peachy', v: 1 },
      { label: 'Pink or rosy', v: -1 },
      { label: 'Beige or slightly olive', v: 0 },
    ],
  },
  {
    id: 'hair',
    q: 'Your natural hair has…',
    options: [
      { label: 'Golden, red or warm brown tones', v: 1 },
      { label: 'Ash, cool brown or blue-black tones', v: -1 },
      { label: 'Not sure', v: 0 },
    ],
  },
  {
    id: 'eyes',
    q: 'Your eyes look…',
    options: [
      { label: 'Warm brown, hazel or golden green', v: 1 },
      { label: 'Grey, blue or cool dark brown', v: -1 },
      { label: 'A mix', v: 0 },
    ],
  },
];

const MAX = 7;

const RESULTS = {
  Gold: {
    tagline: 'Warm undertone: gold is your metal',
    text: 'Gold, brass and bronze pick up the warmth in your skin and make it glow. Silver can work as an accent, but it can make you look a little pale.',
    metals: 'Yellow gold, brass, bronze, copper',
    stones: 'Citrine, amber, topaz, coral, peridot, turquoise',
  },
  Silver: {
    tagline: 'Cool undertone: silver is your metal',
    text: 'Silver, white gold and platinum echo the cool, rosy tones in your skin. Bright yellow gold can make your skin look sallow next to it.',
    metals: 'Silver, white gold, platinum, rhodium',
    stones: 'Sapphire, amethyst, aquamarine, ruby, emerald, pearl',
  },
  Both: {
    tagline: 'Neutral undertone: you can wear both',
    text: 'You are lucky: gold and silver both suit you. Rose gold and mixed metals are especially easy, so choose by outfit and personal style.',
    metals: 'Rose gold, mixed metals, soft yellow gold, brushed silver',
    stones: 'Rose quartz, jade, garnet, pearl, morganite',
  },
};

function score(answers) {
  const diff = QUESTIONS.reduce((s, q) => s + (q.options[answers[q.id]]?.v || 0), 0);
  const metal = diff >= 2 ? 'Gold' : diff <= -2 ? 'Silver' : 'Both';
  // 0% = gold, 100% = silver on the meter.
  const meter = Math.min(100, Math.max(0, Math.round(((MAX - diff) / (MAX * 2)) * 100)));
  return { metal, meter };
}

export default function JewelryTest({ id = 'jewelry-test', heading = 'Take the Gold or Silver Test', className = 'alt-bg' }) {
  const uid = useId();
  const [formKey, setFormKey] = useState(0);
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  function reset() {
    setResult(null);
    setFormKey((k) => k + 1);
    requestAnimationFrame(() => document.getElementById(`${uid}-q0`)?.querySelector('input')?.focus());
  }

  const r = result ? RESULTS[result.metal] : null;

  return (
    <section id={id} className={className} aria-labelledby={`${uid}-heading`}>
      <div className="container">
        <div className="section-head">
          <h2 id={`${uid}-heading`}>{heading}</h2>
          <p>Six quick questions about your natural coloring. Answer in daylight.</p>
        </div>

        <QuizForm
          key={formKey}
          idBase={uid}
          questions={QUESTIONS}
          submitLabel="Gold or Silver?"
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
                <p className="ut-kicker">Your result</p>
                <h3 id={`${uid}-rt`}>{result.metal === 'Both' ? 'Gold and silver' : result.metal}</h3>
                <p className="ut-tagline">{r.tagline}</p>
                <div className="ut-meter" aria-hidden="true">
                  <div className="ut-meter-bar tf-metal-bar">
                    <span className="ut-meter-dot" style={{ left: `${result.meter}%` }} />
                  </div>
                  <div className="ut-meter-labels">
                    <span>Gold</span>
                    <span>Both</span>
                    <span>Silver</span>
                  </div>
                </div>
                <p className="ut-tip">{r.text}</p>
              </div>
              <div className="ut-result-side">
                <p className="ut-metal">
                  <strong>Metals to try:</strong> {r.metals}
                </p>
                <p className="ut-metal">
                  <strong>Gemstones to try:</strong> {r.stones}
                </p>
                <p className="ut-note">
                  Double-check in a mirror: hold a gold and a silver piece under your chin in
                  daylight. The one that makes your skin look clearer is your metal.
                </p>
                <div className="ut-cta tf-cta">
                  <Link href="/guides/gold-vs-silver-jewelry-undertone" className="btn btn-primary btn-sm">
                    Gold vs silver guide →
                  </Link>
                  <Link href="/undertone-test" className="btn btn-outline btn-sm">
                    Undertone test
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
