import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site-config';
import { CONTACT_TOPICS } from '@/lib/contact-topics';

// POST /api/contact — receives the contact form.
//
// Delivery: if RESEND_API_KEY is set, the message is emailed to
// CONTACT_TO_EMAIL (or NEXT_PUBLIC_CONTACT_EMAIL) via Resend's REST API
// (free tier, no extra npm package). If it is NOT set, the route answers
// { fallback: 'mailto' } and the form opens the visitor's own email app
// with the message pre-filled instead, so nothing is lost before setup.

const LIMITS = { name: 80, email: 254, message: 2000, minMessage: 10 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort in-memory rate limit: 5 messages / 10 min per IP per instance.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function clean(v, max) {
  return typeof v === 'string' ? v.replace(/\r/g, '').trim().slice(0, max) : '';
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (body?.website) return NextResponse.json({ ok: true });

  const name = clean(body?.name, LIMITS.name);
  const email = clean(body?.email, LIMITS.email);
  const message = clean(body?.message, LIMITS.message);
  const topic = CONTACT_TOPICS.find((t) => t.value === body?.topic);

  const errors = {};
  if (!name) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (!topic) errors.topic = 'Please choose a subject.';
  if (message.length < LIMITS.minMessage) errors.message = `Please write at least ${LIMITS.minMessage} characters.`;
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail;
  if (!apiKey || !to || to.endsWith('@example.com')) {
    // Not configured yet: not an error, the client opens the visitor's email app.
    return NextResponse.json({ ok: false, fallback: 'mailto' });
  }

  const from = process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`;
  const subject = `[${siteConfig.name}] ${topic.label} — ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nTopic: ${topic.label}\n\n${message}`;
  const html = `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Topic:</strong> ${escapeHtml(topic.label)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, text, html }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err);
    return NextResponse.json({ ok: false, fallback: 'mailto' }, { status: 502 });
  }
}
