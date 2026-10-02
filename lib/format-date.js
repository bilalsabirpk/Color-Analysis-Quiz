// Tiny, dependency-free so client components can import it without pulling
// in all article text from guides-data.js.
export function formatGuideDate(iso) {
  // Fixed UTC so server and client render the same string.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
