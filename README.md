# Color Analysis — Next.js site

This is the original `index.html` color analysis quiz, rebuilt as a proper
Next.js (App Router) site: multiple real pages for SEO, sitemap/robots,
Open Graph images, JSON-LD structured data, and an AdSense-ready setup —
with the quiz's interactive behavior (photo sampling, palettes, color
harmony, garment recolor) preserved exactly as it was.

## Project structure

- `app/page.js` — homepage. Renders the original quiz markup (hero, quiz,
  seasons, harmony, favorites, FAQ) and loads `public/quiz-logic.js`
  (the original script, lightly patched) to run it.
- `app/about`, `app/guides` (+ 3 articles), `app/privacy-policy`,
  `app/terms`, `app/contact` — real content pages, mainly added so the site
  meets AdSense's "genuine original content" expectation.
- `app/layout.js` — shared `<head>` metadata, JSON-LD, AdSense/GA scripts
  (both inactive until you set the env vars below).
- `app/sitemap.js`, `app/robots.js`, `app/manifest.js`,
  `app/opengraph-image.js`, `app/ads.txt/route.js` — SEO/metadata file
  conventions.
- `lib/site-config.js` — the one place that reads environment variables.
- `components/Header.jsx`, `components/Footer.jsx` — shared site chrome.

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in what you have. Every
variable has a safe fallback, so the site builds and runs with none of them
set — but you need at least the domain before you go live.

| Variable | Required before... | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Launch / AdSense application | Your real domain, no trailing slash. Used in canonical URLs, sitemap, JSON-LD, Open Graph. |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | AdSense approval | Set only after Google gives you a publisher ID. Activates the AdSense script and `/ads.txt` automatically. |
| `NEXT_PUBLIC_GA_ID` | — | Optional. Turns on Google Analytics 4. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Launch | Shown on the Contact page and in the Privacy Policy/Terms. |
| `NEXT_PUBLIC_TWITTER_HANDLE` | — | Optional, for Twitter card attribution. |

## Deploying (Vercel)

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. In the project's Environment Variables, add `NEXT_PUBLIC_SITE_URL` (and
   the others above once you have them).
4. Deploy. Point your domain's DNS at Vercel (Vercel's dashboard gives you
   the exact records) and add the domain in the Vercel project settings.
5. Once the real domain is live and serving over HTTPS, re-deploy so the
   env vars take effect everywhere (sitemap, canonical URLs, etc.).

Any other Next.js-compatible host (Netlify, your own Node server, etc.)
works too — nothing here is Vercel-specific.

## Applying for Google AdSense — step by step

AdSense sign-up itself has to happen in **your own Google account** — no
one can do that step for you. Everything in this project is set up so that
once you're approved, turning ads on is just setting one environment
variable.

1. **Deploy the site to your real domain first** (see above). AdSense will
   not review a `localhost` site or a default `*.vercel.app` subdomain.
2. Let the site sit live for a bit with real content — the About page and
   the three guide articles under `/guides` exist specifically to satisfy
   AdSense's "genuine, sufficient content" requirement. Don't apply the
   same day you launch; a site with a little history and some organic
   visits reviews better.
3. Go to https://www.google.com/adsense, sign up with the same domain, and
   follow Google's verification flow (usually a snippet in `<head>` or a
   DNS TXT record — either is fine, this site's `<head>` already has room
   for it via `app/layout.js` if Google asks for a meta tag).
4. Wait for review (can take anywhere from a few days to a few weeks).
5. Once approved, Google gives you a publisher ID like
   `pub-1234567890123456`. Set:
   ```
   NEXT_PUBLIC_ADSENSE_CLIENT=pub-1234567890123456
   ```
   in your Vercel project's Environment Variables, then redeploy.
6. That's it — the site-wide AdSense script (`app/layout.js`) and
   `/ads.txt` (`app/ads.txt/route.js`) both activate automatically from
   that one variable. No further code changes needed.

If you want actual ad units placed in specific spots on the page (rather
than just Auto ads), tell me where and I'll add `<ins class="adsbygoogle">`
slots in those spots — that's a quick follow-up once you have a publisher
ID.

## What changed from the original `index.html`

- Split into a real multi-page Next.js site (see structure above) instead
  of one file.
- Added `/about`, `/guides` (3 articles), `/privacy-policy`, `/terms`,
  `/contact` — all genuine, original content, not filler.
- Added `sitemap.xml`, `robots.txt`, a dynamic Open Graph image, JSON-LD
  (Organization, WebSite, WebApplication, FAQPage, Article), and full
  per-page `<title>`/description/canonical metadata.
- The footer's Privacy Policy / Terms links used to show a "this is a demo
  page" toast — they now go to real pages.
- The quiz's own look, copy and behavior (upload → sample → analyze →
  results → seasons/harmony/favorites/FAQ) is unchanged from the original.
