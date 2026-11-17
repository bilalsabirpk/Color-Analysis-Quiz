'use client';

import { SEASON_NAMES, SEASON_SLUGS } from '@/lib/season-estimate';

// "Already know your season?" shortcut above a tool's questions.
export default function SeasonShortcut({ id, value, onPick }) {
  return (
    <div className="tf-shortcut">
      <label htmlFor={id}>Already know your color season?</label>
      <select id={id} value={value} onChange={(e) => onPick(e.target.value)}>
        <option value="">Choose your season…</option>
        {SEASON_SLUGS.map((s) => (
          <option key={s} value={s}>
            {SEASON_NAMES[s]}
          </option>
        ))}
      </select>
      <span className="tf-or">or answer the questions below</span>
    </div>
  );
}
