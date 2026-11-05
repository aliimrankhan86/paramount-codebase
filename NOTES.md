# Project notes

Running changelog for paramountconsultants.online. Updated on every push.

## Launch gates

- **AML supervision (MLR 2017) — open.** The accounting practice needs a solicitor to
  confirm the correct supervisory position and the wording used on the site before
  launch. This is a legal/regulatory gate, not a build task. Do not remove or reword the
  current accounting disclaimer until that advice is settled.

## 2026-11-05 — DESIGN.md

- Added `DESIGN.md`: the standing design position rather than the chronology. Covers the
  ground rules, colour and type tokens, layout, the component map, the conventions that
  were each a fix for a real defect (breadcrumbs, product marks, footer, images), the
  accessibility floor, recipes for adding products and services, operational gotchas and
  the definition of done.
- `CLAUDE.md`, `AGENTS.md` and `README.md` now point at it, so any agent reads the design
  rules before touching the UI. It is tracked in git, not ignored.
- It carries its own maintenance rule at the top: verify claims against the code, delete
  anything stale or unverifiable, and fix the file in the same commit that invalidates it.
- Two claims were corrected during that first verification pass: sections have no default
  border (`.section-hairline` adds one, and base styles come from `[class^="section"]`),
  and only `MaskedLines` has a no-JS fallback — `Reveal` depends on hydration.
- Recorded as a known exception: `screens/home/hero/slide/slide.module.css` holds four
  hardcoded dark backgrounds and is imported by nothing.

## 2026-11-05 — Logo centring, breadcrumb hover

- The PilgrimCompare mark sat left of centre in its black tile: the base `.logo` rule pins
  marks to `object-position: left center` for left-aligned layouts, and the tile inherited
  it. Both ink variants now centre.
- Breadcrumb links: weight raised to 500 at rest, and hover/focus now draws a 2px underline
  at 4px offset in the accent colour. Weight is fixed so nothing nudges on hover.

## 2026-11-05 — One breadcrumb, everywhere

- Three hand-rolled breadcrumbs had drifted: page hero, service detail, product detail. The
  product one was the worst — inside `container-narrow`, so it started 370px right of every
  other breadcrumb on the site.
- Replaced all three with `components/breadcrumb/breadcrumb.js`, which takes a trail of
  `{ label, href }`. Duplicated CSS removed from the page hero and service detail modules.
- The product hero now uses the same top padding as the service detail hero, so the
  breadcrumb sits on the same baseline on both. Measured: every breadcrumb on the site now
  starts at x=132, y=148 at 1440, and x=20, y=124 at 390.

## 2026-11-05 — PilgrimCompare logo on ink

- The gold hexagon has a white cut-out, so on paper it read as a pale smudge. Products can
  now set `logoBackdrop: "ink"`, which renders the mark on a black rounded tile at every
  size: 52px on the index card, 72px in the product hero, 36px in the "More products" strip.
- Only PilgrimCompare sets it. The other four marks carry their own contrast and stay
  untitled, as before.

## 2026-11-05 — Product breadcrumb

- "All products" was a back link at the very bottom of every product page, underneath
  the "More products" grid — after 3,000px of scrolling. It is now a breadcrumb at the
  top of the hero: Home / Products / <Product>, matching the service detail pages.
- The bottom link is gone. "More products" already carries onward navigation, so the
  trailing duplicate was noise.

## 2026-11-05 — MetaMind AI page written

- No public source exists for MetaMind AI: nothing in search engines, no Play listing, and
  none of twelve candidate domains resolve to it. The page has been written from scratch
  at the owner's instruction.
- It is framed as an AI workspace for research and thinking — notes, documents and
  conversations in one place, answers drawn from that material with the source attached.
  **This framing is our copy, not sourced fact.** It needs the owner's confirmation
  before it is treated as accurate.
- No numbers, dates, client names or pricing are claimed anywhere on the page.

## 2026-11-05 — SajdaTime copy, cross-product links

- SajdaTime now lists six languages including Bengali, and its structured data carries
  `bn`. Note: the Play Store listing still lists five and does not mention Bengali — the
  store description needs updating to match.
- Added the owner-supplied points: 4.5+ Google Play rating, modern uncluttered design,
  pro bono work for different communities, and an iOS version rolling out soon.
  The listing currently shows 5.0 from 10 reviews, so "4.5+" is a floor, not the headline.
- Every product page now ends with a "More products" strip linking to the other four,
  so the range is discoverable from any single product.

## 2026-11-05 — Marquee keyboard access

- The client marquee on `/` clips an overflowing track, which axe reports as a scrollable
  region no keyboard user can reach. The wrapper is now `tabIndex={0}` with a visible
  `:focus-visible` outline, so it can be scrolled from the keyboard.

## 2026-11-05 — Company identity

- `constants/site.js` gains `legalName` ("Paramount Consultants Limited") and `director`
  ("Ali Imran Khan"), set from the owner's instruction.
- Organisation structured data now carries `legalName` and a `founder` Person node.
- The footer's copyright line reads "© Paramount Consultants Limited", and a new line
  above the cobalt strip reads "Paramount Consultants Limited · Director: Ali Imran Khan".
- The accounting disclaimer is untouched — it is still covered by the open AML gate.

## 2026-11-05 — Real product marks

- Each product now carries its own mark instead of the generic line icon: the Play Store
  icon for SajdaTime and Point Poker, Voicecake's black SVG, PilgrimCompare's hexagon, and
  the MetaMind mark already in `public/clients/`. Assets live in `public/products/`; the
  MetaMind one is referenced from `public/clients/` rather than duplicated.
- Cards show the mark at 52px, product heroes at 72px, `object-fit: contain`, no tinted
  tile behind them. The line icons remain as the fallback when a product has no logo.
- Intrinsic `width`/`height` come from `logoWidth`/`logoHeight` so nothing shifts while
  the image loads.
- Point Poker's is a 192px PNG — the largest official source. Fine at 52px, short of
  retina at 72px.

## 2026-11-05 — Four more products

- Added `/products/sajdatime`, `/products/voicecake`, `/products/metamind-ai` and
  `/products/pilgrimcompare` to `constants/products.js`.
- SajdaTime copy is taken from its Google Play listing; Voicecake and PilgrimCompare from
  their live sites. MetaMind AI has no public source, so its entry is deliberately thin —
  it needs a one-line description before it goes out.
- The product detail template now treats `url`, `highlights`, `features`, `steps`,
  `builtWith` and `relatedServices` as optional, and the structured data is built per
  product instead of being hardcoded to Point Poker's languages and free offer.
- `/products` hero changed from "Software we build and run ourselves" / "free to use",
  which stopped being true once client-built products were listed.

## 2026-11-05 — Current University of East London logo

- The client tile was using UEL's pre-rebrand "UEL" block wordmark. Replaced with the
  current official lockup (crest, wordmark and "Pioneering Futures since 1898"), taken
  from `uel.ac.uk/sites/default/files/2025-04/UEL_Logo_Strapline_white.svg` and recoloured
  white → black for the light grid, since only a knockout version is published.
- Same file, no path change: `public/clients/university-of-east-london.svg`.

## 2026-11-05 — Repo cleanup

- Removed the three superseded photographs from `public/art/` (`hero-glass.jpg`,
  `ai-orb.jpg`, `practice-banner.jpg`), about 1 MB of assets nothing referenced.
- Removed 18 Finder duplicate artefacts (`… 2.js`, `… 2.css`, `AGENTS 2.md`). Every one
  was either byte-identical to its original or a stale snapshot of a file edited since.
- The working tree now matches what ships: only the eight new WebP assets under
  `public/art/` are new.

## 2026-11-05 — Accessibility pass

- `/accounting`: the engagement steps were an `<ol>` containing `<div>` wrappers, so the
  `<li>`s had no list parent. Now `<Reveal as="li">`, matching every other numbered list
  on the site.
- Contrast: `--ink-400` index numbers on `/accounting` and the four area pages moved to
  `--ink-600` (3.2:1 → 7.4:1). `--ink-500` nudged from `#6c685e` to `#6a665c` so secondary
  text clears 4.5:1 on paper-2, where it was 4.46:1.
- axe-core now reports zero violations across all 17 routes at 1440px and 390px.

## 2026-11-05 — Royal blue accent, footer trimmed

- Accent scale retuned from electric cobalt (`#1d2bff`) to a deep royal blue
  (`accent-600` is now `#1c3a8c`). Gradient, shadow and the generated app/OG icons
  follow. Contrast is unchanged or better: 9.16:1 for accent on paper, 5.41:1 for
  `accent-400` on ink.
- Footer lost its `Index` row (Home / Services / Accounting / Products / Clients /
  Contact) because it repeated the header nav. A `Company` column now carries
  Products / Clients / Contact; Home is the wordmark.
- Footer wordmark scaled down from `clamp(68px, 12vw, 180px)` to
  `clamp(50px, 8.4vw, 122px)` and section padding tightened. Desktop footer is
  723px, down from 849px.

## 2026-11-05 — Image kit

- Swapped the three flagged photographs for the supplied kit: `home-hero.webp` on the
  home hero, `agentic-ai.webp` in the AI section, `accounting-practice.webp` on the
  `/accounting` banner. The AI frame moved from 4:5 to 3:2 so the illustration is not
  cropped; the accounting banner stays 21:9.
- Added one optional image slot to the service-detail template, rendered from
  `service.image` in `constants/services.js`, so all six technology services use the same
  figure at 2:1, 500px maximum, below the workstream list.
- `Figure` gained an optional `objectPosition` prop for per-image focal points.
- Not used: `our-approach.webp` and `contact-cta.webp` (both optional in the kit brief).
- Old `hero-glass.jpg`, `ai-orb.jpg` and `practice-banner.jpg` are unreferenced and were
  removed from `public/art/` in the cleanup below.

## 2026-11-04 — Technology photography

- Replaced the placeholder art with four Pexels photographs (free for commercial use):
  circuit board on the home hero, server rack in the AI section, logic-board die on
  `/contact`, and a cabinet row as the `/accounting` banner.
- All four run through one grade (88% desaturation, +10% contrast, warm highlights) so
  they read as a single commissioned set rather than unrelated stock.
- Exported at the exact frame ratios: 1600×1200, 1600×2000, 1600×1600, 2520×1080.
- Alt text and caption notes rewritten to describe the new images; the `/accounting`
  banner previously had no image and now has a `src`.

## 2026-11-04 — Bold editorial pass

- Type: display scale widened to `clamp(3.25rem, 10vw, 12rem)` at -0.05em tracking, with
  the heading tiers enlarged to match. Boldness comes from scale and tight tracking only;
  Instrument Serif ships weight 400, so no faux-bold anywhere.
- Cobalt is now structural rather than decorative: a full-bleed solid band between the hero
  and the stats, and the footer's legal strip. Removed every "one word in blue" emphasis
  across the site; italic emphasis keeps its own colour.
- Home rhythm rebuilt: hero → cobalt statement → stat ledger → services → ink AI section →
  full-bleed client marquee → tall intro → values → approach → CTA. Added section variants
  (`section-tall`, `section-break`, `section-flush`, `section-bleed`, `section-unruled`) so
  not every band is a hairline plus the same padding.
- Motion: headings reveal line-by-line out of a mask (`MaskedLines`); body copy keeps a
  short fade; images use one frame. Fixed an observer bug where the translated line sat
  outside its own `overflow: hidden` mask and never fired `whileInView`.
- Images: single `Figure` component (frame, index tile, two-part caption, paper/ink/accent
  tones, ruled placeholder). Applied on home, `/services`, `/contact` and `/accounting`.
- Footer rebuilt as a masthead: oversized wordmark, inline index row, three detail clusters,
  full-bleed cobalt legal strip.
- Hero copy column now bottom-aligns to the figure caption line instead of floating.
- Contact form no longer sits in a white card; it is a ruled column on the paper stock.
  The message prompt now adapts to the chosen practice (technology vs accounting) without
  touching the `nature` option values or the n8n webhook.
- Footer small text raised from `--ink-500` to `--ink-600` so 12px legal copy clears 4.5:1
  on the `--paper-2` background.

## 2026-11-04 — Services index and navigation

- Journey audit found the gap: the nav said "Technology & AI" and `/services` listed only
  the six technology services, so "what does Paramount offer?" had no single answer.
- Nav item renamed to "Services" (same route). Footer index updated; the footer's technology
  column is now labelled "Technology & AI" so there are not two things called Services.
- `/services` is now the complete index: six technology services, then all fifteen accounting
  services grouped by their four areas, with an in-page jump nav and a link into `/accounting`.
- Removed the decorative material image from `/services` so the two practices sit adjacent.
- Metadata and the `ItemList` schema now cover the accounting services as well.
- Home services link changed from "All services" to "See every service".

## 2026-11-04 — Density pass

- Measured the vertical space first: Intro had 390px of pure padding, CTA 367px, Approach
  294px, and every section repeated 86–130px top and bottom.
- Section rhythm reduced to 96px default, 64px tight, 128px tall (mobile 44/32/56).
- Hero image 4:5 → 4:3 and hero padding cut; hero section 1069px → 806px.
- Stats, service rows, AI capability items, client strip, values, approach and footer all
  tightened at the same ratios. Type scale unchanged.
- Page height at 1440: 10,018px → 8,342px (−17%). At 390: 11,245px → 10,323px.
- Service rows: split the single hover effect from three (background + accent bar + filled
  button) down to the arrow only, and baseline-aligned the description with the title.

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
