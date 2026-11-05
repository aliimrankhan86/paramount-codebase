# Design system and decisions

Read this before changing anything visual. It records what the site is, why the
choices were made, and the conventions that must stay consistent. `NOTES.md` is the
chronological log; this file is the standing position.

---

## 0. Keeping this document true

This file is a set of claims about the code. When the two disagree, **the code is
right and this file is wrong.**

- **Verify before trusting it.** Every statement should be checkable against the
  repo: a token in `variables.css`, a rule in `styles/`, a prop in a component.
- **Delete what you cannot verify.** If a line is stale, aspirational or uncertain,
  remove it. A shorter true document beats a longer plausible one. Do not soften an
  unverified claim into vagueness — cut it.
- **Fix in the same commit.** A change that invalidates a line here edits or deletes
  that line in the same commit as the change.
- **No guidance "for later".** If it is not true today it does not belong here. Plans
  belong in `NOTES.md` or a ticket.
- When you remove or correct something, say so in that commit's `NOTES.md` entry.

Quick re-verification:

```bash
grep -n "accent-600\|ink-500\|ink-950\|paper-2" styles/helpers/variables.css
grep -oE "^\.(heading|paragraph|label|eyebrow)[a-z0-9-]*" styles/helpers/typography.css
grep -oE "^\.section-[a-z0-9-]+" styles/blocks/section.css
grep -oE "^\.container[a-z-]*" styles/blocks/container.css
ls components/breadcrumb components/figure components/motion
```

---

## 1. Ground rules

**Content honesty is a hard constraint.** Never invent qualifications, client
counts, prices, turnaround times, sectors, statistics or product features. If a fact
is not in this repo or given by the owner, ask or leave it out.

- Accounting facts may only be sourced from `sterlingbackoffice.com/about.html#team`.
- The accounting disclaimer is subject to an open AML (MLR 2017) review. Do not
  reword it. It is recorded in the "Launch gates" section of `NOTES.md`.
- Product pages may describe only what the product actually does. Where copy was
  written rather than sourced, `NOTES.md` says so.

**Stack.** Next.js 14.2.1 App Router, CSS Modules, framer-motion, Instrument Serif
and Instrument Sans via `next/font`. No UI library, no Tailwind.

---

## 2. Visual language

The site is **printed matter, not a SaaS page**: warm paper stock, hairline rules,
one deep accent, oversized serif display type. Boldness comes from scale and tight
tracking, never from weight or colour.

### Colour — `styles/helpers/variables.css`

| Role | Token | Value |
|---|---|---|
| Paper | `--paper` | `#f4f1ea` |
| Paper, deeper | `--paper-2` | `#ebe6db` |
| Ink (text, dark bands) | `--ink-950` | `#0e0e0c` |
| Secondary text | `--ink-600` | `#514e46` |
| Tertiary text | `--ink-500` | `#6a665c` |
| Accent (the only one) | `--accent-600` | `#1c3a8c` |
| Hairline | `--line` | `rgba(14, 14, 12, 0.13)` |

Rules that hold:

- **One accent.** It marks the primary action and the current location. Never add a
  second accent colour; never use the accent decoratively.
- Components reference semantic tokens, never literals. Literal colours exist only in
  `variables.css` and the generated icons (`app/icon.svg`, `app/apple-icon.js`,
  `app/opengraph-image.js`), which must be updated together with `--accent-600`.
  One exception: four dark backgrounds in `screens/home/hero/slide/slide.module.css`,
  a component nothing currently imports. Do not add more; if you touch that file,
  tokenise it or delete it.
- `--ink-500` is tuned so secondary text clears **4.5:1 on `--paper-2`**, not just on
  `--paper`. Do not lighten it. `--ink-400` is below AA for text — use it for borders
  only.
- Accent on paper is 9.16:1; `--accent-400` on ink is 5.41:1. Both safe.

### Type

- Display: **Instrument Serif 400** (roman and italic). It ships one weight, so never
  apply `font-weight` above 400 to it or you get faux-bold.
- UI/body: **Instrument Sans** 400 / 500 / 600.
- Scale lives in `styles/helpers/typography.css` as `heading-1…6`, `paragraph-*`,
  `eyebrow`, `label-small`. Use those classes; do not hand-write sizes.
- Emphasis inside a heading is italic (`<em>`), never colour.

### Layout

- `--max-width: 1320px`, `--gutter: clamp(20px, 5vw, 72px)`, `--header-height: 76px`.
- Containers: `.container` (default), `.container-narrow` (780px), `.container-prose`
  (680px), `.container-wide` (1520px).
- **Prefix-based base styles.** `styles/blocks/{section,container,button}.css` style by
  attribute selector — `[class^="section"]`, `[class^="container"]`,
  `[class^="button"]`. Any class starting with those words inherits the base, so keep
  the prefixes for their own components and never name an unrelated class `buttonish`.
- Sections: `[class^="section"]` sets padding `clamp(56px, 6vw, 96px)` and
  `position: relative`. **There is no default border** — `.section-hairline` adds a
  1px top rule. Variants: `.section-tight`, `.section-break`, `.section-tall`,
  `.section-flush`, `.section-bleed`, `.section-dark`, `.section-tint`,
  `.section-paper-2`.
- Spacing is `clamp(min, vw, max)` throughout. Do not introduce fixed px paddings.

### Motion

`components/motion/reveal.js` (scroll reveal) and `masked-lines.js` (line-by-line
heading mask). Both respect `prefers-reduced-motion`. **Only `MaskedLines` has a
no-JS fallback** (`[data-mask-line]` reset in `app/layout.js`); `Reveal` starts at
`opacity: 0` and depends on hydration. Animate opacity and small transforms only;
never delay task completion for animation.

---

## 3. Components

| Component | Path | Use for |
|---|---|---|
| `Layout` | `components/Layout.js` | Page shell, header, footer, skip link |
| `PageHero` | `components/page-hero/` | Index-page hero; owns the breadcrumb |
| `Breadcrumb` | `components/breadcrumb/` | **Every** breadcrumb. Never hand-roll one |
| `Figure` | `components/figure/` | Every photograph. Ruled placeholder when `src` is absent |
| `CtaBand` | `components/cta-band/` | Closing dark call to action |
| `ServiceRow` | `components/service-row/` | Services index rows |
| `ClientGrid` / `NameMarquee` | `components/client-grid/`, `components/name-marquee/` | Client logos and the scrolling strip |
| `Reveal` / `MaskedLines` | `components/motion/` | Scroll and heading motion |

---

## 4. Decided conventions

These were each a fix for a real defect. Keep them.

### Breadcrumbs

- **One component**: `components/breadcrumb/breadcrumb.js`, taking
  `trail={[{ label, href }, …, { label }]}`. The last item renders with
  `aria-current="page"`.
- **One position**: always first in a full `.container`, on the page gutter. Never
  inside `container-narrow` — that is what made the product breadcrumb sit 370px
  right of everything else.
- **One baseline**: detail-page heroes use `padding-top: clamp(48px, 5vw, 80px)` so
  the breadcrumb lands at the same y on every page type.
- **One style**: 12px, weight 500, `0.1em` tracking, uppercase, `--ink-500`.
  Hover/focus: `--accent-600` plus a 2px underline at 4px offset.
- Verified targets: x=132 / y=148 at 1440px, x=20 / y=124 at 390px.

### Product marks

- Products carry their real mark via `logo` in `constants/products.js`, with
  `logoWidth` / `logoHeight` for intrinsic sizing. The line icon in `icon` is the
  fallback when a product has no logo.
- Marks are shown bare at 52px (index card), 72px (product hero) and 36px ("More
  products" strip).
- If a mark needs a ground to read on paper, set `logoBackdrop: "ink"`. That renders
  it on a black rounded tile and **centres** it — the base `.logo` rule pins marks
  left for left-aligned rows, so ink tiles must override `object-position`.
- Never recolour, crop or redraw a client or product logo.

### Images

- All photography goes through `Figure`. Pass `ratio`, `sizes`, `alt`, and
  `objectPosition` when the subject is not centred.
- Ratios are set to match the source where possible; `sizes` must describe the real
  rendered width.
- Hero image is `priority`; everything below the fold is lazy by default.
- Decorative imagery gets `alt=""`; informative imagery gets a plain description of
  what is in the frame. Never put text in an image that belongs in HTML.

### Footer

- Masthead structure: statement + CTA, oversized wordmark, four link columns
  (Technology & AI / Accounting / Company / Working with us), legal, company line,
  cobalt strip.
- The `Index` row (Home/Services/Products/Clients/Contact) was **removed** because it
  duplicated the header nav. Do not reintroduce it.
- `Company` carries Products / Clients / Contact; Home is the wordmark.
- The cobalt strip carries the copyright in the legal name.

### Actions and links

- Button hierarchy: `.button` (ink), `.button-accent`, `.button-stroke`,
  `.button-inverse`, plus `.link-arrow` for tertiary links.
- Outcome-specific labels ("Start a conversation", "Open SajdaTime"), never "Submit".
- Cards and links get a visible hover **and** `:focus-visible` state. Never remove
  focus indication.

---

## 5. Accessibility baseline

WCAG 2.2 AA is the floor, verified with axe-core on every route at 1440px and 390px.

- One `<h1>` per page; headings descend in order.
- Landmarks: header `nav[aria-label="Primary"]`, footer `nav[aria-label="Footer"]`,
  breadcrumbs `nav[aria-label="Breadcrumb"]`.
- Interactive states: default / hover / focus-visible on everything focusable.
- Scrollable or clipped regions must be keyboard reachable (the client marquee takes
  `tabIndex={0}` for that reason).
- Contrast floors: body text 4.5:1, large text 3:1. Check against the actual
  background, not the default one.

---

## 6. Recipes

**Add a product** — append to `constants/products.js` with `slug`, `name`, `logo`
(+ `logoWidth`/`logoHeight`), `category`, `shortDescription`, `intro`,
`metaTitle`, `metaDescription`. Optional: `url`, `highlights`, `features`, `steps`,
`builtWith`, `relatedServices`, `logoBackdrop`, `operatingSystem`, `inLanguage`,
`free`. The detail template renders only the sections that have data; the index card,
"More products" strips and sitemap pick it up automatically.

**Add a service** — append to `constants/services.js` (title, slug, intro, involves,
process, optional image, optional relatedProduct). Routes generate from
`generateStaticParams`.

**Add a page section** — use an existing `.section-*` variant, a `.container`, and
`Reveal` for entrance. Do not invent new spacing values.

---

## 7. Operational gotchas

- **Two Next servers on one `.next` will corrupt the build.** `next dev` and
  `next start` share the directory. Symptom: random 500s, missing routes, a CSS 404,
  fake horizontal overflow. Check `lsof -ti tcp:3000 tcp:3001 tcp:3100` and
  `ps aux | grep next-server` before anything else. Always exactly one.
- **Partial builds.** `next build` can report success while `.next/server/pages/_error.js`
  is missing, and every route then 500s. Rerun `npm run build`. Never `rm -rf .next`.
- **Screenshotting the site.** Scroll-reveal content sits at `opacity: 0` until the
  observer fires. Wait ~1.6s after scrolling before sampling, or axe will report
  false contrast failures.
- **Dev image cache** keys on path, not contents; replacing a file at the same path
  serves stale bytes until the image cache is cleared.

---

## 8. Definition of done

1. `npm run build` passes; every route prerenders.
2. `npm run lint` — only the two known `<img>` warnings for client logos.
3. axe: zero violations across all routes at 1440px and 390px.
4. No horizontal overflow at 390 / 768 / 1440 / 1920.
5. Rendered and inspected at desktop and mobile, not inferred from code.
6. `NOTES.md` has a dated entry, in the same commit as the change.
7. Breadcrumb, footer and product-page conventions above are intact.
