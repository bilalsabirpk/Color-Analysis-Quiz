import Link from 'next/link';

// Turns "[text](/path)" inside guide text into real internal links, so
// guides can link to each other in context (not only via cards).
const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

function withLinks(text) {
  if (!text || !text.includes('](/')) return text;
  const out = [];
  let last = 0;
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Link key={m.index} href={m[2]}>
        {m[1]}
      </Link>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function ArticleBody({ blocks, paletteImage, outfitImage, compareImage }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
        if (block.type === 'p') return <p key={i}>{withLinks(block.text)}</p>;
        if (block.type === 'ul') {
          const prev = blocks[i - 1];
          const isOutfits = outfitImage && prev?.type === 'h2' && /outfit color combinations$/i.test(prev.text);
          const ul = (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{withLinks(item)}</li>
              ))}
            </ul>
          );
          if (!isOutfits) return ul;
          return [
            ul,
            <figure key={`${i}-img`} className="palette-figure">
              <img
                src={outfitImage.src}
                alt={outfitImage.alt}
                width={outfitImage.width}
                height={outfitImage.height}
                loading="lazy"
                decoding="async"
              />
            </figure>,
          ];
        }
        // Named swatches with hex codes as real text (searchable, copyable).
        if (block.type === 'palette') {
          const list = (
            <ul key={i} className="hex-palette" aria-label={block.label || 'Color palette with hex codes'}>
              {block.colors.map((c) => (
                <li key={c.hex + c.name}>
                  <span className="hex-chip" style={{ background: c.hex }} aria-hidden="true" />
                  <span className="hex-name">{c.name}</span>
                  <code className="hex-code">{c.hex}</code>
                </li>
              ))}
            </ul>
          );
          if (!paletteImage) return list;
          return [
            list,
            <figure key={`${i}-img`} className="palette-figure">
              <img
                src={paletteImage.src}
                alt={paletteImage.alt}
                width={paletteImage.width}
                height={paletteImage.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Save this chart for shopping or pin it for later.{' '}
                <a href={paletteImage.src} download>
                  Download the palette image (PNG)
                </a>
              </figcaption>
            </figure>,
          ];
        }
        // Two seasons side by side: hex codes as text, plus the saveable image.
        if (block.type === 'compare') {
          return (
            <div key={i}>
              <div className="compare-grid">
                {block.sides.map((s) => (
                  <div key={s.name}>
                    <h3>{s.name}</h3>
                    <ul className="hex-palette" aria-label={`${s.name} colors with hex codes`}>
                      {s.colors.map((c) => (
                        <li key={c.hex + c.name}>
                          <span className="hex-chip" style={{ background: c.hex }} aria-hidden="true" />
                          <span className="hex-name">{c.name}</span>
                          <code className="hex-code">{c.hex}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {compareImage && (
                <figure className="palette-figure">
                  <img
                    src={compareImage.src}
                    alt={compareImage.alt}
                    width={compareImage.width}
                    height={compareImage.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    Save this comparison or pin it for later.{' '}
                    <a href={compareImage.src} download>
                      Download the comparison image (PNG)
                    </a>
                  </figcaption>
                </figure>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
