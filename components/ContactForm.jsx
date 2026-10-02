'use client';

import { useRef, useState } from 'react';
import { CONTACT_TOPICS } from '@/lib/contact-topics';

const MAX = 2000;
const MIN = 10;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: '', email: '', topic: '', message: '', website: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.topic) e.topic = 'Please choose a subject.';
  if (v.message.trim().length < MIN) e.message = `Please write at least ${MIN} characters.`;
  return e;
}

export default function ContactForm({ contactEmail, siteName, initialTopic = '' }) {
  // initialTopic comes from ?topic=bug etc. (e.g. the footer "Submit a bug" link).
  const [values, setValues] = useState(() => ({
    ...EMPTY,
    topic: CONTACT_TOPICS.some((t) => t.value === initialTopic) ? initialTopic : '',
  }));
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error
  const [serverError, setServerError] = useState('');
  const statusRef = useRef(null);
  const formRef = useRef(null);


  function update(field, value) {
    const next = { ...values, [field]: field === 'message' ? value.slice(0, MAX) : value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  }

  function blur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  }

  function openMailto() {
    const topic = CONTACT_TOPICS.find((t) => t.value === values.topic);
    const subject = `[${siteName}] ${topic ? topic.label : 'Message'}`;
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, topic: true, message: true });
    if (Object.keys(errs).length) {
      // Focus the first invalid field.
      const first = ['name', 'email', 'topic', 'message'].find((k) => errs[k]);
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus('sending');
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('sent');
        setValues(EMPTY);
        setTouched({});
      } else if (data.fallback === 'mailto') {
        openMailto();
        setStatus('mailto');
      } else if (data.errors) {
        setErrors(data.errors);
        setStatus('idle');
      } else {
        setServerError(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setServerError('Network error. Check your connection and try again.');
      setStatus('error');
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const count = values.message.length;
  const sending = status === 'sending';

  if (status === 'sent') {
    return (
      <div className="cf-done" ref={statusRef} tabIndex={-1} role="status">
        <span className="cf-done-icon" aria-hidden="true">✓</span>
        <h3>Message sent!</h3>
        <p>Thanks for reaching out. We&apos;ll reply to your email as soon as we can.</p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  const fieldProps = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange: (e) => update(name, e.target.value),
    onBlur: () => blur(name),
    'aria-invalid': touched[name] && errors[name] ? 'true' : undefined,
    'aria-describedby': touched[name] && errors[name] ? `cf-${name}-err` : undefined,
    disabled: sending,
  });

  const err = (name) =>
    touched[name] && errors[name] ? (
      <p className="cf-error" id={`cf-${name}-err`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="cf" onSubmit={onSubmit} noValidate>
      {(status === 'mailto' || status === 'error') && (
        <div
          className={`cf-banner ${status === 'error' ? 'is-error' : ''}`}
          ref={statusRef}
          tabIndex={-1}
          role={status === 'error' ? 'alert' : 'status'}
        >
          {status === 'mailto' ? (
            <>
              Your email app should have opened with your message ready to send. If it
              didn&apos;t, email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </>
          ) : (
            serverError
          )}
        </div>
      )}

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" maxLength={80} required placeholder="Jane Doe" {...fieldProps('name')} />
          {err('name')}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" {...fieldProps('email')} />
          {err('email')}
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-topic">
          Subject <span aria-hidden="true">*</span>
        </label>
        <select required {...fieldProps('topic')}>
          <option value="" disabled>
            Choose a subject…
          </option>
          {CONTACT_TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {err('topic')}
      </div>

      <div className="cf-field">
        <label htmlFor="cf-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          rows={6}
          required
          placeholder="Tell us how we can help. If it's about a result, mention your season and what looked off."
          {...fieldProps('message')}
        />
        <div className="cf-meta">
          {err('message') || <span />}
          <span className={`cf-count${count > MAX - 100 ? ' is-near' : ''}`} aria-live="polite">
            {count} / {MAX}
          </span>
        </div>
      </div>

      {/* Honeypot (hidden from people and screen readers) */}
      <div className="cf-hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update('website', e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary cf-submit" disabled={sending}>
        {sending ? (
          <>
            <span className="cf-spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
      <p className="cf-note">
        We only use your email to reply to you. See our{' '}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}
