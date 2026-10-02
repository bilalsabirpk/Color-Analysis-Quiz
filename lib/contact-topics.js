// Subjects for the contact form (shared by the form and /api/contact).
// `value` is also accepted as ?topic= in the URL, e.g. /contact?topic=bug.
export const CONTACT_TOPICS = [
  { value: 'question', label: 'Question about my color analysis result' },
  { value: 'bug', label: 'Report a bug or technical issue' },
  { value: 'feature', label: 'Feature request or suggestion' },
  { value: 'privacy', label: 'Privacy or data question' },
  { value: 'partnership', label: 'Partnership, press or media' },
  { value: 'other', label: 'Something else' },
];
