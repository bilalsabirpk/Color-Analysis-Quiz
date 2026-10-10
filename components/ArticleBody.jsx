export default function ArticleBody({ blocks }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
        if (block.type === 'p') return <p key={i}>{block.text}</p>;
        if (block.type === 'ul') {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        // Named swatches with hex codes as real text (searchable, copyable).
        if (block.type === 'palette') {
          return (
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
        }
        return null;
      })}
    </div>
  );
}
