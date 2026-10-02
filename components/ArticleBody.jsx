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
        return null;
      })}
    </div>
  );
}
