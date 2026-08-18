# Project notes

Running changelog for paramountconsultants.online. Updated on every push.

## 2026-08-18 — Initial rebuild commit

First commit of the rebuilt site. The repo started as a leftover Next.js e-commerce
template; everything below replaces it with a 4-page Apple-inspired consultancy site
(Home, Services, Clients, Contact).

- Stripped the unused e-commerce routes, cart/checkout components and product data.
- New visual system: type scale (DM Sans headings, Inter body), spacing tokens, ink/accent
  colour palette, original "P" monogram logo (favicon, apple-icon, OG image, header all
  share one SVG source).
- Home, Services (index + 6 detail pages), Clients and Contact pages, plus a working
  contact form wired to the existing n8n webhook.
- SEO: per-page metadata via `lib/seo.js`, sitemap, robots.txt, JSON-LD `ProfessionalService`
  schema, OG image, and a site-wide keyword list surfaced on every page.
- Accessibility pass: skip link, focus states, reduced-motion handling on the hero carousel
  and scroll reveals.
- Services: Agentic AI, Adobe Experience Manager, Agile Delivery, Full-Stack Development,
  Digital Marketing, and IT Project Management (added this round), each with
  research-grounded copy rather than generic filler.
- Added a dedicated "Applied AI" section on Home covering agentic orchestration, process
  automation, AI solution integration, AI-augmented CRM and AI-native app development.
- Clients page renders every client as a generated monogram tile in an infinite marquee
  (no scraped/borrowed logos) instead of a plain name table.
- Ran a pass to strip repeated AI-writing tics (the "X, not Y" contrast used as a crutch
  across nearly every heading) and vary sentence rhythm across the homepage copy.
- Removed orphaned duplicate files left over from earlier edits (`app/faqs/page 2.js`,
  `screens/about/index 2.js`, `screens/faqs/index 2.js` and their directories).

## 2026-08-18 — Real client logos

- Replaced the client strip's typographic initials with real logo marks for 14 of the
  15 listed organisations, sourced from official sites or Wikimedia Commons and saved
  under `public/clients/`. Noviform has no verifiable public presence, so it still falls
  back to the typographic tile rather than a guessed logo.
- `client-marquee` component and CSS reworked from a small square initials tile to a
  wider logo card (grayscale by default, full colour on hover) sized to fit varied logo
  aspect ratios consistently, on both the homepage and `/clients` page.
