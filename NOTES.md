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

## 2026-08-18 — Noviform logo, Eseye fix, leaner footer

- Added a Noviform logo (supplied directly), so all 15 clients now show a real mark;
  Noviform was the only one still on the typographic fallback.
- Fixed `eseye.svg`: the wordmark paths were `fill="white"`, invisible on the marquee's
  white cards. Recoloured to the brand's own dark purple so the wordmark is now visible
  in both the grayscale default and colour-on-hover states.
- Footer was oversized: brand block and nav column were spaced across the full 1280px
  container width, and vertical padding was excessive. Capped the row width so the
  columns sit close together and cut padding throughout for a leaner footer.

## 2026-08-18 — Eseye's real logo, footer nav row

- Swapped `eseye.svg` for the official dark-variant logo pulled directly from
  eseye.com (`logo_dark.svg`), replacing the earlier recoloured white-fill asset.
  Renders centred and legible in both the grayscale default and colour-on-hover states.
- Footer nav links (`Home`, `Services`, `Clients`, `Contact`) now sit in a single row on
  desktop instead of stacking vertically; still stack on mobile.

## 2026-08-18 — Client tile hover: shadow instead of blue border

- Client marquee tiles had a blue border + tinted shadow on hover that looked uneven
  across different logo shapes (border visibly clipped on some tiles). Replaced with a
  neutral, all-round soft shadow lift (no border-color change), so every tile hovers
  consistently regardless of logo aspect ratio.

## 2026-09-24 — Products section and the Point Poker page

- New `/products` index and `/products/point-poker` page, driven by
  `constants/products.js`: what Point Poker does, how a session runs, how it was built,
  links into the relevant pointpoker.app guides, and `SoftwareApplication` plus
  `BreadcrumbList` structured data with Paramount Consultants as publisher.
- "Products" added to the header and footer navigation, and both routes added to the
  sitemap.
- Agile Project Delivery and Full-Stack Software Development pages show a "Built by us"
  callout linking to the Point Poker page and the live product (`relatedProduct` on the
  service entry).
- New `Cards` icon. Footer top row widened from 640px to 720px so the five nav links
  stay on one line.
