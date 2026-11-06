'use client';

import { useState } from 'react';

// Shared multiple-choice form for the quiz-style tools (lipstick, hair,
// foundation, jewelry). Same look as the undertone test (.ut-* styles).
// The parent owns the result; to start over it changes this component's
// `key`, which clears the answers.

export default function QuizForm({ idBase, questions, submitLabel, onSubmit, onChange }) {
  const [answers, setAnswers] = useState({});
  const answered = Object.keys(answers).length;
  const total = questions.length;
  const complete = answered === total;

  function choose(qid, idx) {
    setAnswers((a) => ({ ...a, [qid]: idx }));
    onChange?.();
  }

  return (
    <form
      className="ut-card"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (complete) onSubmit(answers);
      }}
    >
      <div className="ut-grid">
        {questions.map((q, qi) => (
          <fieldset key={q.id} className="ut-q" id={`${idBase}-q${qi}`}>
            <legend>
              <span className="ut-num" aria-hidden="true">
                {qi + 1}
              </span>
              {q.q}
            </legend>
            <div className="ut-options">
              {q.options.map((opt, oi) => {
                const inputId = `${idBase}-${q.id}-${oi}`;
                return (
                  <label key={oi} htmlFor={inputId} className="ut-opt">
                    <input
                      type="radio"
                      id={inputId}
                      name={`${idBase}-${q.id}`}
                      checked={answers[q.id] === oi}
                      onChange={() => choose(q.id, oi)}
                    />
                    <span>{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="ut-actions">
        <div
          className="ut-progress"
          role="progressbar"
          aria-label="Questions answered"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={answered}
          aria-valuetext={`${answered} of ${total} answered`}
        >
          <span style={{ width: `${(answered / total) * 100}%` }} />
        </div>
        <p className="ut-count">
          {answered} of {total} answered
        </p>
        <button type="submit" className="btn btn-primary" disabled={!complete}>
          {complete ? submitLabel : `Answer all ${total} to see result`}
        </button>
      </div>
    </form>
  );
}

// Swatch list with name and hex code, used inside tool results.
export function ShadeList({ label, shades }) {
  return (
    <ul className="tf-shades" aria-label={label}>
      {shades.map(([name, hex]) => (
        <li key={hex + name}>
          <span className="tf-chip" style={{ background: hex }} aria-hidden="true" />
          <span className="tf-name">{name}</span>
          <code>{hex}</code>
        </li>
      ))}
    </ul>
  );
}
