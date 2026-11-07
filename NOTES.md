# Project notes

Running changelog for paramountconsultants.online. Updated on every push.

## Launch gates

- **AML supervision (MLR 2017) — open.** The accounting practice needs a solicitor to
  confirm the correct supervisory position and the wording used on the site before
  launch. This is a legal/regulatory gate, not a build task. Do not remove or reword the
  current accounting disclaimer until that advice is settled.

## 2026-11-07 — White product marks on the cream products index

- Voicecake and MetaMind AI rendered as white marks on a now-cream field and were
  unreadable. Both given `logoBackdrop: "ink"`, matching PilgrimCompare's black tile.
- Fixed a trap while doing it: `logoBackdrop` used to paint the tile as the
  `<img>` background, and the `invert` filter then inverted the tile too, turning it
  white. The tile is now a separate wrapper (`.logoTile`); the filter stays on the
  image alone. The tile sizes to the mark so wordmarks are not squashed.

## 2026-11-07 — Colour fields across the site

- Added a reusable colour-field system in `styles/blocks/section.css`:
  `.section-paper-light`, `.section-orange`, `.section-violet`. Each remaps the ink
  ramp (`--ink-*`, `--line`, `--accent-600`, `--surface-1`, `--paper*`) so every nested
  component flips to dark-on-light without a component-level override.
- Placed one field per page where the dark run was longest: `/services` Practice 02
  → cream, `/accounting` engagement rhythm → orange, `/clients` "The constant" →
  violet, `/products` index → cream, `/product` detail "How it works" → cream,
  `/contact` form → cream, `/services/[slug]` rhythm → cream.
- Two contrast fixes found by axe after the first pass: the shared ink ramp was tuned
  for cream only and failed on orange (the darkest field), so it was darkened against
  orange; and the spectrum italic `<em>` is tuned for dark grounds and disappeared on
  light fields, so `em` now inherits inside a field.

## 2026-11-07 — Client logo plates, orange block, Practice 02 realignment

- **Client logos** now sit on a white plate inside each cell and are shown
  unmodified. The `brightness(0) invert(1)` filter and the `invert` flag in
  `constants/clients.js` are gone: nine marks were being flattened to white and the
  coloured ones lost contrast against the dark cell.
- **Orange block.** The home Approach section is now the page's orange colour block
  (`--spectrum-orange`, `#ff7a45`) with dark ink, matching the reference the owner
  supplied. `--ink-strong-dim` raised from 0.66 to 0.8 alpha: on orange the lighter
  value only reached 3.9:1.
- **Practice 02 (accounting) rebuilt.** The uneven spacing was not padding — it was
  `.areaTitle { min-height: 2.1em }` reserving two title lines in every column, which
  left a ~100px dead gap under one-line titles such as "Tax". Replaced with real grid
  rows: `.area { display: contents }` promotes each title and list to its own grid
  item, so all four titles share row 1 and all four lists share row 2. A rule under
  the title row closes the title zone. Measured: every list now starts at the same y
  (spread 0.00px). Mobile reverts to block per area.

## 2026-11-07 — Nav alignment, orange accent, grid spacing audit

- **Nav realigned.** `.link` carried a `padding-bottom: 4px` that pushed the labels
  off the optical centre, and `font-weight: 600` on hover changed the text width, so
  the whole row shifted when you pointed at it. Weight is now constant (600, set on
  `.links .link` so it beats `label-small`), the underline is absolutely positioned at
  `bottom: -9px` so it never affects layout. All five labels now centre at the same y
  and hovering moves nothing.
- **Orange accent.** Added `--spectrum-orange` (`#ff7a45`, 7.18:1 on `--paper`) and
  applied it to the accounting area counts and engagement-step numbers on `/services`.
- **Grid spacing audit.** Five blocks had a near-zero bottom padding on bordered grid
  cells, which left the content flush with the column rule and made columns end at
  different heights: `.area` and `.processStep` on `/services` (4px / 0), `.card` on
  `/clients` (8px), `.processStep` on service detail (8px), `.item` in home Values
  (0). All now use symmetric padding and the grid carries a bottom rule. Also evened
  the service-list gap (8px → 10px) and its offset from the title (16px → 18px).

## 2026-11-07 — Header nav: clearer active and hover states

- Made the nav's active item and hover state unmistakable: the active link is bold
  (600) with a persistent 3px **cobalt** underline and a larger 8px accent dot with a
  3px soft ring; hovering any link bolds it and draws the same 3px underline.
  Previously the active item had only a 5px dot and no underline, and hover used a
  1px hairline.
- Raised the nav to read as primary navigation rather than body text: 15px (was 14px),
  brighter resting colour (`--ink-700`, was `--ink-600`), more space between the dot
  and label.
- Kept the mobile menu on its single-weight serif (400) so the bolder desktop state
  doesn't faux-bold the Instrument Serif.

## 2026-11-07 — Colour blocks to break up the charcoal

- Added two full-bleed colour blocks to the home page, following the reference the
  owner shared: the **Intro** section is now a warm cream "paper insert"
  (`--paper-light`) with dark ink, and the **Approach** section is a violet spectrum
  block (`--spectrum-violet`) with dark ink. Both join the existing cobalt Statement
  band so the page no longer reads as one long black column.
- Added reverse-block tokens (`--paper-light`, `--ink-strong`, `--ink-strong-dim`,
  `--line-dark`) for light fills with dark text.

## 2026-11-07 — Ledger hover breathing room + site-wide heading colour

- Gave the accounting ledger rows real horizontal padding (`clamp(16px, 2.4vw, 28px)`)
  and a rounded highlight, so the hover no longer runs edge-to-edge with the text flush
  against it; the row lifts to `--ink-100` with a spectrum-tinted bottom rule.
- Added site-wide colour: italic emphasis words inside headings (`<em>`) now carry the
  editorial spectrum instead of plain ink, rotated per section in `common.css`
  (amber → rose → teal → violet → green). Cobalt stays the only action accent.
- Updated `DESIGN.md` (heading emphasis is no longer "never colour") and added the
  `--em-accent` default to `variables.css`.

## 2026-11-07 — Accounting ledger: spectrum identity + dark hover

- Gave each of the four accounting areas a spectrum hue (amber/rose/teal/violet),
  applied to the ledger index number and the service count on `/accounting`, and to
  the service numbers on each area page — so the rows read as distinct instead of a
  single monochrome block.
- Fixed the accounting row hover, which still used a light-theme wash
  (`rgba(236,231,220,0.4)`): it now lifts to `--ink-100` and tints the row rule in the
  area's spectrum colour, with the index number nudging right.

## 2026-11-07 — Dark-only consolidation + dead-code cleanup

- Collapsed `variables.css` to a single dark `:root` block: the light theme values are
  gone entirely (previously just disabled), and the stale "system preference / header
  toggle" comment is corrected.
- Removed dead tokens: `--gradient-ink` (unused) and the `--logo-tile*` group, which
  only the old logo-tile marquee referenced.
- Deleted the orphaned `components/client-marquee/` component (superseded by
  `NameMarquee`), leaving `next lint` with a single known `<img>` warning.
- Updated `DESIGN.md` to show dark-only values and the Working-across word instead of
  the removed "hero ticker". Verified: build (29 routes), no horizontal overflow or
  axe violations at 390/768/1440/1920, no console errors.

## 2026-11-06 — SonarGrid "Working across" hero + contrast + cleanup

- Replaced the hero "Working across" ticker with a SonarGrid section: a canvas dot-field
  with tap-triggered sonar rings behind a big centered headline, with the discipline word
  rotating rapidly (1.5s) through the editorial spectrum.
- Ported the 21st.dev `SonarGrid` to JS + CSS Modules (no Tailwind / `motion` / lucide added
  — framer-motion and the inline arrow already cover them).
- Fixed dim product/service category text: foreground `--accent-700` (dark navy in dark
  mode) → `--accent-600` (light cobalt) on product categories, feature links, and the
  service product eyebrow.
- Deleted the now-unused `components/theme-toggle/`.

## 2026-11-06 — Dark-only + inverted dark marks

- The site is now dark-only: the header theme toggle is removed and `app/layout.js`
  forces `data-theme="dark"` (no localStorage override), so the light theme can't be
  selected.
- Dark client/product wordmarks now render as white (`brightness(0) invert(1)` via an
  `invert` flag in `clients.js` / `products.js`), replacing the earlier light-tile
  approach, so black/navy marks stay legible on dark while coloured marks (Eseye, XPO,
  Virgin Media, HSBC, Tesco) keep their brand colour.

## 2026-11-06 — Colour layer + dark-mode logo legibility

- Added an editorial spectrum (`--spectrum-amber` / `-rose` / `-teal` / `-violet` /
  `-green`) used only decoratively: the hero "Working across" ticker word now cycles
  through it, the four stat figures and their top rules are coloured, and the
  client-name diamonds follow the same rhythm. Cobalt stays the single action accent.
- Added ambient radial glows (`--glow-warm` / `--glow-cool`) behind the hero for depth,
  and warmed the dark-theme secondary ink (`--ink-600`/`--ink-500`) so it reads less
  grey.
- Fixed dark-theme client logos: `ClientGrid` flips to light paper cells in dark mode
  (`--logo-tile`), so dark brand marks stay legible instead of vanishing.
- Framed the Spline scene at 4:3 so the full object is visible instead of cropping to
  the face.

## 2026-11-06 — Interactive 3D panel (Spline)

- Ported the 21st.dev "Interactive 3D" component into the existing JS + CSS Modules stack
  (no Tailwind / shadcn / TypeScript added, per DESIGN.md). Three new components:
  `SplineScene` (lazy-loaded Spline with a Suspense loader), `Spotlight` (framer-motion
  cursor glow), and `SplinePanel` — an "Agentic AI, made tangible" panel wired onto the
  home page right after the hero (always visible, no scroll-reveal gating).
- Installed `@splinetool/react-spline` and `@splinetool/runtime`; framer-motion and
  classnames were already present. The Spline scene URL is a 21st.dev placeholder — swap
  for the client's own `.splinecode` before launch.
- Verified: `npm run build` (all 29 routes), `npm run lint` (the two known `<img>`
  warnings), and Playwright — the panel renders on the dark band in Instrument Serif, the
  Spline canvas mounts, and there are no console errors.

## 2026-11-06 — Hero "Working across" panel + colour

- Rebuilt the hero "Working across" strip as a full-width panel: the rotating discipline
  word is now set in display serif (matching "Intelligence, engineered") at up to 96px,
  in the accent colour, above a hairline rule. It sits on its own row below the hero
  copy/figure instead of being tucked into the 520px copy column.
- Removed the grayscale wash on client logos in `ClientGrid` and `ClientMarquee` so the
  marks render in their full brand colour (a scale-up on hover replaced the old
  grayscale-to-colour reveal). This is the main "more colour" change.
- Verified: `npm run build` (all 29 routes) and `npm run lint` (two known `<img>`
  warnings) pass; the panel renders full-width in Instrument Serif at 96px, and client
  logos compute `filter: none`.

## 2026-11-06 — Dark default, contrast and type pass

- Made dark mode the default: the pre-paint script in `app/layout.js` now sets
  `data-theme="dark"` unless an explicit choice is stored. The header toggle still
  switches to light and persists.
- Fixed the colour-combination bugs round one missed because they live in `screens/`
  (outside `components/`): the "Accounting" cobalt statement block, the AI-capabilities
  and accounting-promise dark sections, the service-detail side card, and the product
  "ink" logo tiles were using `--accent-600` / `--ink-950` / `--paper` as solid fills and
  band text, so in dark mode they inverted to light-on-light. They now use the role
  tokens (`--accent-solid`, `--band`, `--on-band`, `--on-accent`) and stay a solid deep
  blue / dark band in both themes.
- Raised body type for desktop: paragraph-large 18px, paragraph-medium 17px,
  paragraph-small 15px, service-row descriptions 16px, and every remaining 11/12px label
  in `screens/` up to 13px.
- Darkened secondary text in light mode (`--ink-600` → `#47433a`, `--ink-500` →
  `#5f5b51`); tertiary text now clears 5.44:1 on `--paper-2`.
- Rebuilt the hero "Working across" ticker as a bordered panel with a 24px rotating
  value instead of a 12px inline label.
- Verified: `npm run build` (all 29 routes) and `npm run lint` (two known `<img>`
  warnings) pass; statement block contrast 7.69:1 (dark) / 10.33:1 (light); every text
  pair clears 4.5:1 in both themes. Hit the two-servers-on-one-`.next` gotcha during
  verification — a stale `next dev` made CSS tokens vanish until it was killed.

## 2026-11-06 — Dark theme + larger small text

- Added a dark theme (`:root[data-theme="dark"]` in `styles/helpers/variables.css`) to
  answer the "too bright / too white" feedback. An inline script in `app/layout.js` sets
  `data-theme` before first paint (system preference by default); a new
  `components/theme-toggle/` button in the header flips it and persists the choice to
  `localStorage`.
- Introduced role tokens so the theme inverts cleanly: `--band`/`--band-2` plus
  `--on-band`/`--on-band-dim` for solid ink bands and their text, `--accent-solid` plus
  `--on-accent` for solid accent fills, and `--surface-1`/`--surface-1-hover` for cards,
  inputs and tiles. Migrated the dark-band, accent-fill and white-surface usages off
  `--ink-950` / `--paper` / `--white` / `--accent-600` accordingly.
- Raised the small-text floor from 12px to 13px, and 13px sentence-case text to 14px:
  breadcrumbs, eyebrows, captions, form labels, footer legal (now 14px), header nav,
  footer column labels and client names among others.
- Fixed a latent bug: `--surface-1` was referenced by the service card but never defined,
  so cards rendered transparent. Defined it and `--surface-1-hover`.
- Verified: `npm run build` passes (all 29 routes), `npm run lint` shows only the two
  known `<img>` warnings, and the dark theme's text ramp clears WCAG AA (computed floor
  5.27:1; body 16.17:1). Theme toggle and system-preference default confirmed live.

## 2026-11-05 — Clean sweep before parking

- Removed the last two unreferenced files: `screens/home/hero/slide/` (an unimported
  carousel slide that held four hardcoded dark backgrounds) and `public/art/paper-form.jpg`.
  Nothing imported either.
- `DESIGN.md` lost its literal-colour exception for that slide, since the file no longer
  exists. The colour rule now has no exceptions beyond the generated icons.
- Known and deliberately left: `digital-marketing.webp` carries Instagram / LinkedIn / Meta
  / Mail marks and a magenta palette; `it-project-management.webp` has "Programme Delivery"
  rendered into the image. Both are supplied kit assets with no replacement available, so
  they stay until new art exists. Four service illustrations are ~505px wide, which is fine
  at the 500px render size but soft on retina.
- Verified: build passes, every route prerenders, lint shows only the two known `<img>`
  warnings, axe reports zero violations across 21 routes at 1440px and 390px, no overflow
  at 768 / 1920.

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
