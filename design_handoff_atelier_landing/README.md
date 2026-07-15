# Handoff: Atelier du Bund — Landing Page (Heritage Timeline focus)

## Overview
A single-page marketing site for **Atelier du Bund**, an appointment-only bespoke tailoring house in Montréal rooted in the Shanghai / Hong Kong "Hongbang" (紅幫, Red Gang) tailoring tradition. The page runs hero → about (photo carousel) → **heritage scrollytelling** → founding collection (men/women fit explorer) → how-it-works → reserve/CTA → footer. The bulk of recent design work is the **Heritage scrollytelling section**, which is documented here in the most detail.

## About the Design Files
The files in this bundle are a **design reference built in HTML** — a working prototype showing the intended look and behavior. They are **not** meant to be copied verbatim into the site. The task is to **recreate this design inside the target repo's environment** (`Atelier-du-Bund/atelierdubund.com`), which is a **static, hand-authored HTML + CSS site** (`index.html`, `appointment.html`, `measurements.html`, shared `assets/styles.css`, images under `images/web/`). Follow that repo's existing conventions: plain semantic HTML, one shared stylesheet, vanilla JS where needed, images under `images/web/`.

> The prototype is authored as a "Design Component" (`.dc.html`) that renders through a small runtime (`support.js`) using inline styles and `{{ }}` template holes. **Do not port the runtime or the inline-style approach to the site.** Read the prototype for exact values and behavior, then implement with normal HTML elements and CSS classes/rules added to `assets/styles.css`.

## How to view the prototype
Open `Atelier du Bund.dc.html` directly in a browser from this folder — `support.js`, `assets/`, and `heritage/` are included alongside it so it renders fully offline. Scroll into the Heritage section to see the scrollytelling + carousels; the Montréal step auto-zooms its map after ~2.4s.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, imagery, and interactions are all intended as shown. Recreate pixel-faithfully, but express it through the site's own CSS. Exact per-element values live in the copied source file — treat that file as the source of truth and lift values from it; the sections below capture the system and the parts that are easy to miss.

---

## Design Tokens

### Color
| Token | Hex | Use |
|---|---|---|
| Ink / page bg (dark) | `#14110f` (body), `#140b0d` (heritage), `#120a0c` | Dark section backgrounds |
| Header oxblood | `#2a1015` | Sticky header once past hero |
| Deep oxblood accent | `#6e1220` | Active toggles, selection highlight |
| Oxblood fill (maps/washes) | `rgba(110,18,32,0.2)` | Map landmass fill, radial washes |
| Gold (primary metal) | `#c8a24b` | Eyebrows, rules, map outlines, hovers |
| Light gold | `#e0c48a` | Chinese display numerals, map dots/markers |
| Link default / hover | `#a6863c` / `#c8a24b` | Anchor color + hover |
| Cream text | `#faf7f1` | Headings on dark |
| Warm off-white body | `#ece3d2`, `#ded2bc`, `#e6dcc9` | Body copy on dark |
| Muted taupe | `#8d8474` | Small labels, legends, inactive states |
| Light section bg | `#f2ece0` → `#faf7f1` | Collection section (light) |
| Dark-on-light text | `#2b2620` | Text on light sections |
| Map water accent | `#7ba6b0` | (used earlier; heritage maps currently have no rivers) |

### Typography
Google Fonts (already `<link>`ed in the prototype `<helmet>`; add the same `<link>` to the site `<head>`):
`Cormorant Garamond` (ital 0/1, wght 400/500/600) · `Jost` (wght 300/400/500) · `Noto Serif TC` (wght 500/600).

- **Display / headings:** `'Cormorant Garamond', serif`, weight 400–500, tight line-height (~1.02–1.05). Hero H1 `clamp(2.9rem,7.6vw,6.2rem)`.
- **Eyebrows / labels / UI / nav:** `'Jost', sans-serif`, uppercase, `letter-spacing:.24em–.34em`, small (`.54rem–.72rem`), usually `#c8a24b` or `#8d8474`.
- **Large Chinese characters:** `'Noto Serif TC', serif` (e.g. the city glyph in each heritage step, `#e0c48a`).
- **Body:** `'Jost'`, weight 300, line-height ~1.6–1.72.

### Spacing / layout
- Content max-width `1200px`–`1240px`, `margin-inline:auto`, `padding-inline:clamp(1.25rem,5vw,4rem)`.
- Section vertical rhythm `padding-block:clamp(5rem,11vw,9rem)` (light) up to `clamp(6rem,15vw,11rem)` (CTA).
- Prefer flex/grid with `gap`.

---

## Screen / Section: HERITAGE (scrollytelling) — primary deliverable

### Purpose
A four-step scroll-driven story of the Hongbang lineage: **Ningbo → Shanghai → Hong Kong → Montréal**. As the user scrolls, the background, the large Chinese glyph, the title/year, the paragraph, and a map all cross-update. It is the emotional centerpiece of the page.

### Structure & mechanics
- Outer track: `#adb-heritage-track`, `position:relative; height:440vh` (110vh per step × 4).
- Inside it, a `position:sticky; top:0; height:100vh; overflow:hidden; isolation:isolate` **stage** that stays pinned while the track scrolls.
- A scroll listener maps scroll progress through the track to a **step index 0–3** (`Math.floor(progress * 4)`), updating the visible content. Recreate with a scroll handler or `IntersectionObserver` sentinels — the key behavior is "sticky stage, 4 discrete steps as you scroll ~4 viewport-heights."

### Persistent header (top of stage, centered)
- Eyebrow (Jost, uppercase, `.34em`, `#c8a24b`, ~`.66rem`) with a hairline rule on each side:
  `The Hongbang · 紅幫 · The Red Gang Tailoring Heritage`
- Subtitle H2 (Cormorant, `#faf7f1`, `clamp(1.9rem,4vw,3rem)`): **"A long-lasting heritage."**

### Backgrounds — full-bleed auto-advancing carousels (RECENT WORK)
Behind the text, each step shows a full-bleed background image carousel:
- **Section 1 Ningbo →** `heritage/1.jpg`, `heritage/2.jpeg`
- **Section 2 Shanghai →** `heritage/3.webp`, `heritage/4.png`, `heritage/5.jpeg`
- **Section 3 Hong Kong →** `heritage/6.jpg`, `heritage/7.jpg`, `heritage/8.jpeg`
- **Section 4 Montréal →** single fixed photo `assets/img/cta.jpg` (the founder at a mirror), `object-position:50% 36%` so the face sits in the open space between subtitle, left text, and map. NOT a carousel.

Carousel behavior:
- Auto-advance **every 5s**, **crossfade** via `transition:opacity 1.4s ease` (each image absolutely positioned, `inset:0; object-fit:cover`; only the active image has `opacity:1`).
- Cycle in **numerical order** within each section; the index **resets to the first image when a new section becomes active**.
- All heritage background photos get an archival treatment: `filter:grayscale(1) contrast(1.05) brightness(.66)`.
- A **scrim** sits above the images and below the text so copy stays legible on every frame:
  - non-Montréal: `linear-gradient(90deg,rgba(16,9,10,.55) 0%,rgba(16,9,10,.42) 40%,rgba(16,9,10,.84) 100%)` plus a bottom fade `linear-gradient(0deg,rgba(16,9,10,.55),transparent 45%)`.
  - Montréal step darkens the left more (text side): `linear-gradient(90deg,rgba(16,9,10,.86) 0%,rgba(16,9,10,.5) 55%,rgba(16,9,10,.62) 100%)` + same bottom fade.
- Implementation note for the static site: a tiny vanilla-JS `setInterval` per active section (or one global 5s tick, `index = tick % count`) toggling an `.is-active` class is sufficient. Respect `prefers-reduced-motion` (the prototype pauses reveal animations under it).

### Reading panel (the text)
- Positioned block, vertically centered (`top:55%; transform:translateY(-50%)`).
- Width is **step-dependent**: `min(50%,39rem)` on Ningbo/Shanghai/Hong Kong (wider so long copy isn't too tall), `min(38%,29rem)` on Montréal (narrower to leave room for the map).
- Horizontal position: centered-right (`left:52%`) on steps 1–3; slides to the **far left** (`left:clamp(1.25rem,5vw,4rem)`) on the Montréal step, `transition:left .8s`.
- Contents, top to bottom:
  1. Large city glyph — `Noto Serif TC`, `clamp(3rem,7vw,5rem)`, `#e0c48a` (寧波 / 上海 / 香港 / 蒙特利爾).
  2. Title (Cormorant, `#faf7f1`, `clamp(1.5rem,2.6vw,2.1rem)`) + a pill "year" tag (Jost, `.62rem`, `.24em`, gold text, `1px solid rgba(200,162,75,.35)`, `border-radius:999px`).
  3. Paragraph — `#ded2bc`, `clamp(.95rem,1.25vw,1.08rem)`, line-height 1.72, `max-width:52ch`, **`white-space:pre-line`** (copy contains `\n\n` to force paragraph breaks — Ningbo before "A craft learned…", Shanghai before "Our house…", Hong Kong before "The thread was never cut…", Montréal before "It is time this heritage…").
- Copy for each step lives in the `cities` object in the prototype's logic (`ningbo`/`shanghai`/`hongkong`/`montreal` → `cn`, `title`, `year`, `text`). Lift verbatim.

### Maps (right side) — heavily iterated, keep faithful
Two SVG maps live in the right area (the China coastline appears on steps 1–3; a Canada→Montréal map appears on step 4).

**China coastline map (steps 1–3):** container `top:56%; left:clamp(1.25rem,5vw,4rem); width:min(28%,20rem); aspect-ratio:3/4`. SVG `viewBox="470 270 165 185"` with `overflow:visible`. The landmass is drawn twice (grid-pattern fill via `<pattern id="adb-grid">` + `rgba(110,18,32,0.2)` oxblood fill), `stroke:#c8a24b; stroke-width:1`. Clickable city dots (Shanghai/Ningbo/Hong Kong) jump the step. **Legend** "China 中國" top-left (`top:-1rem`), Jost `.54rem` `.24em` `#8d8474`.
- **Outline gap:** a `<mask id="hb-gap">` (white full-rect minus a black band at `y 128–162`) is applied to the stroke path so the outline **breaks where the eyebrow text crosses it** — the line does not run through "The Hongbang…". Preserve this.

**Canada → Montréal map (step 4):** shares a container `top:56%; right:clamp(0.25rem,2vw,1.5rem); width:min(52%,40rem); aspect-ratio:6/5`. Two stacked layers cross-fading:
- **Layer A — Canada** (`viewBox="8 36 444 370"`, accurate traced outline, grid + `rgba(110,18,32,0.2)` fill, `stroke:#c8a24b; stroke-width:1.7`). Legend "Canada 加拿大" centered in the western landmass (`top:57%; left:26%`, Jost `.62rem` `.26em` `#8d8474`). A Montréal marker sits at the SE: a 10px `#e0c48a` dot with a 2-line label **"Montréal / 蒙特利爾"** placed to the **left** of the dot (Jost `.545rem` `.14em` uppercase `#faf7f1`, `text-align:right`).
- **Layer B — Île de Montréal** (`viewBox="44 65 252 210"`, traced island outline, same fill/stroke treatment). A downtown dot (`#e0c48a`) + single-line "Montréal 蒙特利爾" label (Jost `.64rem`).
- **Zoom transition:** on entering step 4, Layer A (Canada) shows for ~2.4s, then it scales up (`scale(3.4)`, `transform-origin:78.6% 75.7%` = Montréal's location) and fades out while Layer B (island) fades in and settles at `scale(0.85)`. Timing: opacity `.9s`, transform `1.6s cubic-bezier(.5,0,.2,1)`.
- The map outlines were traced from real reference images — reuse the exact `d` path strings from the prototype; do not redraw by hand.

### Stepper (bottom of stage)
Four centered buttons (Ningbo / Shanghai / Hong Kong / Montréal), Jost `.72rem` uppercase; active is `#e0c48a` with a wider (`30px`) gold underline bar, inactive `#8d8474` with a short faint bar. Clicking scrolls the window to that step's slice of the track (`scrollTo` a computed offset — do **not** use `scrollIntoView`).

### Responsive / mobile
Stage stays sticky and full-bleed; carousels + scrim keep text readable. On narrow screens let the reading panel go full-width and the maps shrink/stack (or hide the map and keep the carousel + text). Verify contrast holds on every background image.

---

## Other sections (recreate as-is; less iterated)
- **Header:** transparent over the hero, turns solid oxblood `#2a1015` with a hairline gold bottom border + soft shadow once scrolled past the hero (scroll listener toggling styles).
- **Hero (`#top`):** full-viewport `assets/img/hero.jpg` with a left-weighted dark gradient, subtle `adb-heroZoom` keyframe (scale 1.08→1), eyebrow "外灘洋服 · Montréal", H1 "The art of Shanghai tailoring, made for you.", price note "Custom suits from $899 CAD".
- **About:** single large photo **carousel** (5 images: `collection-seated.png`, `cuff.jpg`, `lining.jpg`, `mirror.jpg`, `lapel.jpg`), auto-advancing ~4.2s with dot controls; copy alongside.
- **Founding Collection:** light section; Men/Women toggle (`#6e1220` active pill), interactive fit figures with numbered hotspots revealing detail text. (Figure images are placeholder slots awaiting final art.)
- **How it works:** four numbered pillars (`01–04`) with gold italic numerals and hairline top borders.
- **Reserve / CTA:** full-bleed `assets/img/cta.jpg`, oxblood gradient wash, "Begin your suit." + appointment CTA.
- **Footer:** brand mark, short blurb (founder **Zhenai Xiao**), `© 2026 Atelier du Bund · Montréal, QC`, French tagline "L'art du tailleur shanghaïen, façonné pour vous."

## Interactions & Behavior (summary)
- Header solidify on scroll past hero.
- Heritage: sticky-stage scrollytelling, 4 steps; per-step background carousel (5s crossfade); reading panel width/position changes per step; Canada→island map zoom at ~2.4s into step 4; clickable city dots + bottom stepper navigate.
- About carousel auto-advance (~4.2s) + dots.
- Collection men/women toggle + hotspot detail switching.
- Scroll-reveal fade-up on `[data-reveal]` elements via IntersectionObserver (disabled under `prefers-reduced-motion`).
- Smooth in-page anchor scrolling. Never use `scrollIntoView`.

## State (for whatever framework/JS you use)
`step` (0–3 heritage), `city`, carousel `tick` (heritage 5s) and `slide` (about ~4.2s), `mtlZoom` (boolean, set true ~2.4s after entering step 4), collection `gender` + selected `detail` hotspot, header solid boolean.

## Assets
Included in this bundle, mirroring the paths the prototype uses:
- `heritage/1.jpg 2.jpeg 3.webp 4.png 5.jpeg 6.jpg 7.jpg 8.jpeg` — the 8 archival heritage photos (Ningbo 1–2, Shanghai 3–5, Hong Kong 6–8), supplied by the client.
- `assets/img/` — hero, about-carousel, collection, and CTA/founder photos (`hero.jpg`, `collection-seated.png`, `collection-editorial.jpg`, `cuff.jpg`, `lining.jpg`, `mirror.jpg`, `lapel.jpg`, `threepiece.jpg`, `founder.jpg`, `cta.jpg`).
- `assets/image-slot.js` — drag-and-drop image placeholder web component used only by the prototype for unfilled slots; **not needed in production** (use real `<img>`).

In the site repo, place photos under `images/web/` (its existing convention) and update paths accordingly. The heritage maps are inline SVG — no image assets.

## Files
- `Atelier du Bund.dc.html` — **the design (source of truth).** All exact styles, SVG path data, copy, and logic are here. The Heritage section is roughly lines ~123–300 (markup) and the `cities` data + scroll/carousel logic in the `<script>` class below.
- `support.js` — prototype runtime (do not ship).
- `assets/`, `heritage/` — assets (see above).

## Note
Everything here is original work for Atelier du Bund; the map outlines were traced from generic public reference maps. Use the client's real brand system/fonts as shown.
