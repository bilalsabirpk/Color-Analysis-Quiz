import Link from 'next/link';
import styles from './SubSeasons.module.css';

const guideHref = (name) => `/guides/${name.toLowerCase().replace(/\s+/g, '-')}-color-palette`;

// 12 season color analysis: the three sub-seasons inside each of the four
// color seasons. Server component, so all copy is real HTML for search
// engines. People search for these sub-season names (soft autumn, deep
// winter, light spring…) far more than for the four main seasons alone.

const FAMILIES = [
  {
    season: 'Spring',
    trait: 'Warm and clear',
    subs: [
      {
        name: 'Light Spring',
        text: 'Light, warm-leaning coloring with gentle contrast. Wear peach, warm pastels, light aqua and ivory.',
        colors: ['#FFD8B1', '#F7C59F', '#A8E0D4', '#FFF4DE'],
      },
      {
        name: 'Warm Spring',
        text: 'The warmest Spring, also called True Spring. Golden yellow, coral, turquoise and warm green glow on you.',
        colors: ['#F4B43A', '#F2795B', '#2EC4B6', '#7CB342'],
      },
      {
        name: 'Bright Spring',
        text: 'Clear, high-contrast coloring, also called Clear Spring. Choose vivid coral, poppy red, kelly green and bright aqua.',
        colors: ['#FF6F59', '#E63946', '#2BA84A', '#00B4D8'],
      },
    ],
  },
  {
    season: 'Summer',
    trait: 'Cool and soft',
    subs: [
      {
        name: 'Light Summer',
        text: 'Light, cool-leaning coloring. Powder blue, lavender, soft rose and light grey are your easiest colors.',
        colors: ['#B9D6F2', '#CDB4DB', '#F1C0CB', '#D9D9E0'],
      },
      {
        name: 'Cool Summer',
        text: 'The coolest Summer, also called True Summer. Rose pink, periwinkle, cool blue and soft navy suit you best.',
        colors: ['#E58FAF', '#8E9AE6', '#5C8BC6', '#3D4F7A'],
      },
      {
        name: 'Soft Summer',
        text: 'Muted, low-contrast coloring. The soft summer color palette is dusty rose, sage, mauve, slate blue and taupe.',
        colors: ['#C9A0A6', '#A3B18A', '#A88AA6', '#6D8299'],
      },
    ],
  },
  {
    season: 'Autumn',
    trait: 'Warm and rich',
    subs: [
      {
        name: 'Soft Autumn',
        text: 'Muted, warm-neutral coloring. The soft autumn color palette is camel, olive, sage, salmon and warm taupe.',
        colors: ['#C19A6B', '#8A8B4E', '#9CAF88', '#E39B7B'],
      },
      {
        name: 'Warm Autumn',
        text: 'The warmest Autumn, also called True Autumn. Rust, mustard, pumpkin, olive and teal bring out your glow.',
        colors: ['#B7410E', '#D4A017', '#E07B24', '#2A7F7A'],
      },
      {
        name: 'Deep Autumn',
        text: 'Deep, warm coloring, also called Dark Autumn. The deep autumn color palette is chocolate, burgundy, forest green and deep teal.',
        colors: ['#5C3A21', '#7B1E2B', '#2E5939', '#145C63'],
      },
    ],
  },
  {
    season: 'Winter',
    trait: 'Cool and bold',
    subs: [
      {
        name: 'Deep Winter',
        text: 'Deep, cool coloring, also called Dark Winter. Black, burgundy, emerald and navy look striking on you.',
        colors: ['#141414', '#6D0F2A', '#00704A', '#14213D'],
      },
      {
        name: 'Cool Winter',
        text: 'The coolest Winter, also called True Winter. Pure white, icy blue, fuchsia and royal blue are your power colors.',
        colors: ['#FAFAFA', '#BFE3F5', '#D6177E', '#2541B2'],
      },
      {
        name: 'Bright Winter',
        text: 'Very high contrast, also called Clear Winter. Wear hot pink, cobalt, emerald and crisp black and white.',
        colors: ['#FF1F8E', '#0047AB', '#009B77', '#000000'],
      },
    ],
  },
];

export default function SubSeasons() {
  return (
    <section id="sub-seasons" aria-labelledby="subSeasonsHeading">
      <div className="container">
        <div className="section-head">
          <h2 id="subSeasonsHeading">12 Season Color Analysis: Find Your Sub-Season</h2>
          <p>
            Each color season splits into three sub-seasons. Take the color analysis quiz to
            find your main season, then use these color palettes to narrow it down.
          </p>
        </div>

        <div className={styles.grid}>
          {FAMILIES.map((f) => (
            <div key={f.season} className={styles.family}>
              <h3 className={styles.familyTitle}>
                {f.season} <span>{f.trait}</span>
              </h3>
              <ul className={styles.list}>
                {f.subs.map((s) => (
                  <li key={s.name} className={styles.item}>
                    <div className={styles.swatches} aria-hidden="true">
                      {s.colors.map((c) => (
                        <i key={c} style={{ background: c }} />
                      ))}
                    </div>
                    <div>
                      <h4>
                        <Link href={guideHref(s.name)}>{s.name}</Link>
                      </h4>
                      <p>{s.text}</p>
                      <Link href={guideHref(s.name)} className={styles.more}>
                        {s.name} palette guide →
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          The 16 season color analysis system adds one more sub-season to each family, but
          it starts from the same four color seasons.
        </p>
      </div>
    </section>
  );
}
