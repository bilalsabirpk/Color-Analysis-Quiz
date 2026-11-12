// Shared, rule-based season estimate used by the shade-finder tools
// (lipstick, hair). Three inputs, the same three the 12-season system uses:
// undertone (warm / cool / neutral), depth (light / medium / deep) and
// clarity (soft / balanced / bright). It is a quick estimate, not a
// replacement for the photo analysis, so every result also shows the
// closest neighboring season.

export const SEASON_NAMES = {
  'light-spring': 'Light Spring',
  'warm-spring': 'Warm Spring',
  'bright-spring': 'Bright Spring',
  'light-summer': 'Light Summer',
  'cool-summer': 'Cool Summer',
  'soft-summer': 'Soft Summer',
  'soft-autumn': 'Soft Autumn',
  'warm-autumn': 'Warm Autumn',
  'deep-autumn': 'Deep Autumn',
  'deep-winter': 'Deep Winter',
  'cool-winter': 'Cool Winter',
  'bright-winter': 'Bright Winter',
};

export const SEASON_SLUGS = Object.keys(SEASON_NAMES);

// Standard 12-season neighbors: the season that shares the dominant trait.
export const NEIGHBOR = {
  'light-spring': 'light-summer',
  'warm-spring': 'warm-autumn',
  'bright-spring': 'bright-winter',
  'light-summer': 'light-spring',
  'cool-summer': 'cool-winter',
  'soft-summer': 'soft-autumn',
  'soft-autumn': 'soft-summer',
  'warm-autumn': 'warm-spring',
  'deep-autumn': 'deep-winter',
  'deep-winter': 'deep-autumn',
  'cool-winter': 'cool-summer',
  'bright-winter': 'bright-spring',
};

// MAP[undertone][depth] = [soft, balanced, bright]
const MAP = {
  warm: {
    light: ['light-spring', 'light-spring', 'bright-spring'],
    medium: ['soft-autumn', 'warm-autumn', 'warm-spring'],
    deep: ['warm-autumn', 'deep-autumn', 'deep-autumn'],
  },
  cool: {
    light: ['light-summer', 'light-summer', 'cool-summer'],
    medium: ['soft-summer', 'cool-summer', 'cool-winter'],
    deep: ['deep-winter', 'deep-winter', 'bright-winter'],
  },
  neutral: {
    light: ['light-summer', 'light-spring', 'bright-spring'],
    medium: ['soft-summer', 'soft-autumn', 'bright-spring'],
    deep: ['deep-autumn', 'deep-winter', 'bright-winter'],
  },
};

const CLARITY = ['soft', 'balanced', 'bright'];

// The four questions every season-based tool asks. Option values are read
// by estimateFromAnswers() below.
export const SEASON_QUESTIONS = [
  {
    id: 'veins',
    q: 'In daylight, the veins on your inner wrist look…',
    options: [
      { label: 'Green or olive', value: 'warm' },
      { label: 'Blue or purple', value: 'cool' },
      { label: 'A mix / hard to tell', value: 'neutral' },
    ],
  },
  {
    id: 'metal',
    q: 'Which jewelry makes your skin look brighter?',
    options: [
      { label: 'Gold', value: 'warm' },
      { label: 'Silver', value: 'cool' },
      { label: 'Both look fine', value: 'neutral' },
    ],
  },
  {
    id: 'depth',
    q: 'Overall, your coloring (skin and natural hair together) is…',
    options: [
      { label: 'Light', value: 'light' },
      { label: 'Medium', value: 'medium' },
      { label: 'Deep', value: 'deep' },
    ],
  },
  {
    id: 'clarity',
    q: 'Your features look…',
    options: [
      { label: 'Soft and blended', value: 'soft' },
      { label: 'In between', value: 'balanced' },
      { label: 'Bright, high contrast', value: 'bright' },
    ],
  },
];

export function undertoneFrom(veins, metal) {
  const score = (v) => (v === 'warm' ? 1 : v === 'cool' ? -1 : 0);
  const s = score(veins) + score(metal);
  return s >= 1 ? 'warm' : s <= -1 ? 'cool' : 'neutral';
}

// `answers` maps question id → option index (as stored by QuizForm).
export function estimateFromAnswers(answers) {
  const val = (id) => {
    const q = SEASON_QUESTIONS.find((x) => x.id === id);
    return q.options[answers[id]]?.value;
  };
  const undertone = undertoneFrom(val('veins'), val('metal'));
  const depth = val('depth') || 'medium';
  const clarity = CLARITY.indexOf(val('clarity'));
  const season = MAP[undertone][depth][clarity < 0 ? 1 : clarity];
  return { season, alt: NEIGHBOR[season], undertone, depth };
}
