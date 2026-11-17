import { withLinks } from '@/components/ArticleBody';
import { TOOL_GUIDES } from '@/lib/tool-guides';

// Long-form guide shown under each tool (lib/tool-guides.js). Supports
// h2, h3, p, ul, ol and table blocks; text may contain **bold** and
// [internal links](/path).

function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{withLinks(part.slice(2, -2))}</strong>
    ) : (
      <span key={i}>{withLinks(part)}</span>
    )
  );
}

export default function ToolGuide({ path, className = '' }) {
  const guide = TOOL_GUIDES[path];
  if (!guide) return null;
  const headingId = `guide-${path.replace(/\W+/g, '')}`;

  return (
    <section className={className} aria-labelledby={headingId}>
      <div className="container prose tool-guide">
        <h2 id={headingId}>{guide.heading}</h2>
        {guide.blocks.map((b, i) => {
          if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
          if (b.type === 'h3') return <h3 key={i}>{b.text}</h3>;
          if (b.type === 'p') return <p key={i}>{rich(b.text)}</p>;
          if (b.type === 'ul' || b.type === 'ol') {
            const List = b.type;
            return (
              <List key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{rich(it)}</li>
                ))}
              </List>
            );
          }
          if (b.type === 'table') {
            return (
              <div key={i} className="cp-table-wrap tg-table" tabIndex={0} role="region" aria-label={b.caption}>
                <table className="cp-table">
                  <caption className="visually-hidden">{b.caption}</caption>
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) =>
                          k === 0 ? (
                            <th key={k} scope="row">
                              {rich(cell)}
                            </th>
                          ) : (
                            <td key={k}>{rich(cell)}</td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

// Extra FAQs for a tool page, merged into its FAQ list and FAQPage schema.
export function guideFaqs(path) {
  return TOOL_GUIDES[path]?.faqs || [];
}
