# Atelier du Bund — design token inventory

Extracted from `assets/styles.css` (1001 lines), `index.html` and `measurements.html`.
Read-only audit — no stylesheet or markup was changed.

---

## ⚠️ Read this first: there are two separate systems

The stylesheet contains **two palettes that do not share a single variable**.

| | `:root` token system | `.adb-home` system |
|---|---|---|
| Lines in `styles.css` | 1–647 | 648–1001 |
| Colour base | dark maroon `#200d11` | warm near-black `#14110f` |
| Uses `var(--…)` | yes — 238 references | **no — zero references** |
| Body font | `var(--sans)` → Poppins | `'Jost'` (literal) |
| Used by | `measurements.html` | `index.html` (the homepage) |

All 177 `.adb-*` rules use **literal hex values** and reference no custom property.
So "the site's visual language" as seen on the live homepage is the **literal palette in
section 1C**, not the `:root` variables. The `:root` variables are the older system, still
live on `measurements.html`.

`index.html` uses 140 `adb-*` classes plus 45 `heritage*` classes, and none of the legacy
`.btn` / `.container` / `.display` / `.eyebrow` / `.lede` classes.
`measurements.html` uses the legacy classes plus 6 `ms-*` ones.

---

## 1. Colours

### 1A. `:root` custom properties — the token system (`measurements.html`)

| Variable | Value | Used for | Uses |
|---|---|---|---|
| `--ink` | `#200d11` | deepest maroon base — page background | 6 |
| `--ink-2` | `#2a1116` | slightly lifted panel | 11 |
| `--panel` | `#34151b` | card surface | 6 |
| `--panel-2` | `#3f1820` | raised card | 1 |
| `--brass` | `#c8a24b` | primary metallic accent — the main gold | 36 |
| `--brass-soft` | `#ddc18a` | light brass, heading hints, prices | 9 |
| `--oxblood` | `#97323b` | the signature button red; `::selection` | 3 |
| `--oxblood-deep` | `#601f25` | deep lining red | 1 |
| **`--jade`** | **`#4a7361`** | **"green-marble accent" — the deep green. DECLARED BUT NEVER USED (0 references)** | **0** |
| `--ivory` | `#ece3d2` | primary text on dark | 17 |
| `--ivory-dim` | `#a99e8a` | secondary text | 27 |
| `--hair` | `rgba(200,162,75,.20)` | hairline rules (gold at 20%) | 22 |
| `--hair-soft` | `rgba(236,227,210,.10)` | softer hairline (ivory at 10%) | 4 |

### 1B. Scoped tokens — `.section--light` (light "parchment" sections, declared line 304)

| Variable | Value | Used for |
|---|---|---|
| `--parch` | `#ece1ca` | warm parchment, gradient top |
| `--parch-2` | `#e2d4b6` | deeper parchment, gradient bottom |
| `--ink-warm` | `#2a2017` | body text on parchment |
| `--ink-warm-dim` | `#6b5f4a` | secondary text on parchment |
| `--gold-deep` | `#9a6a2f` | legible gold on light backgrounds |

Applied as `linear-gradient(180deg, var(--parch), var(--parch-2))`.

### 1C. Homepage literal palette — `.adb-home` (the current visual language)

No variables; these are the raw hex values, ordered by frequency of use.

| Hex | Uses | Role |
|---|---|---|
| `#faf7f1` | 20 | off-white — headings and text on dark |
| `#c8a24b` | 19 | gold — the primary accent (same value as `--brass`) |
| `#e0c48a` | 13 | light gold — heritage glyphs, highlights |
| `#8a5e28` | 8 | mid-bronze — "brown" eyebrow variant |
| `#6e1220` | 7 | oxblood — card titles, `::selection` background |
| `#211a12` | 7 | near-black warm — pillar titles on light |
| `#1a0e10` | 6 | deep warm black |
| `#ece3d2` | 5 | ivory body text on dark |
| `#a08a5f` | 5 | muted gold |
| `#6f6450` | 5 | muted warm grey |
| `#c9bda6` | 4 | dim warm grey — hero price label |
| `#a89c86`, `#8d8474` | 4 each | secondary greys |
| `#5c5344` | 4 | body copy on light (pillar/card text) |
| `#a6863c` | — | link colour in `.adb-home` (hover → `#c8a24b`) |
| `#5c3d16` | 2 | dark bronze — mobile selector idle text (AA-safe) |
| `#14110f` | — | `.adb-home` page background |

### 1D. Greens (all three in the file)

| Hex | Where |
|---|---|
| `#4a7361` | `--jade` — declared line 18, **never referenced** |
| `#22392f` | `.adb-how` background gradient, top |
| `#182a23` | `.adb-how` background gradient, bottom |

`.adb-how{background:linear-gradient(180deg,#22392f,#182a23)}` — the "How it works"
section. This deep green gradient is the only green actually rendered on the site.

### 1E. Heritage block (shared, lines ~357–540)

Own literal colours: background `#140b0d`, text `#ece3d2`, headings `#faf7f1`,
glyphs `#e0c48a`. Uses `var(--serif)` for type but not for colour.

---

## 2. Typography

### 2A. Fonts loaded

`index.html` (line 10):
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Jost:wght@300;400;500&family=Noto+Serif+TC:wght@500;600&display=swap
```
- **Cormorant Garamond** — 400, 500, 600, plus italics 400/500/600
- **Jost** — 300, 400, 500
- **Noto Serif TC** — 500, 600

`measurements.html` (line 10):
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Poppins:wght@300;400;500&display=swap
```
- **Cormorant Garamond** + **Poppins** (300, 400, 500). No Jost, no Noto Serif TC.

Both preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`.

### 2B. Family stacks

| Variable | Value |
|---|---|
| `--serif` | `"Cormorant Garamond", Georgia, "Times New Roman", serif` |
| `--sans` | `"Poppins", system-ui, -apple-system, Segoe UI, Roboto, sans-serif` |
| `--hb-jost` | `"Jost", var(--sans)` — scoped to `.heritage` |
| homepage | `'Jost', system-ui, sans-serif` — literal, on `.adb-home` |
| CJK | `'Noto Serif TC', serif` |

### 2C. Wordmark

`.adb-brand__name`
- family `'Cormorant Garamond', serif`
- weight **600**
- size **1.12rem**
- letter-spacing **.24em**
- `text-transform: uppercase`
- colour `#faf7f1`
- `white-space: nowrap`; brand row `display:flex; gap:.85rem`

### 2D. Headings

| Element | Family | Weight | Size | Line-height | Letter-spacing | Colour |
|---|---|---|---|---|---|---|
| `.adb-hero__title` | Cormorant Garamond | 400 | `min(clamp(2.9rem,7.6vw,6.2rem),11.6vw)` | 1.02 | .005em | `#faf7f1` |
| `.adb-pillar__title` | Cormorant Garamond | 600 | `clamp(1.3rem,2.3vw,1.6rem)` | 1.15 | — | `#211a12` |
| `.adb-clcard__title` | Cormorant Garamond | 600 | `clamp(1.2rem,1.9vw,1.5rem)` | — | — | `#6e1220` |
| `.adb-how__title` | Cormorant Garamond | 500 | 1.35rem | — | — | `#faf7f1` |
| `.heritage__subtitle` | `var(--serif)` | 500 | `clamp(1.9rem,4vw,3rem)` | 1.05 | — | `#faf7f1` |
| `.display` *(legacy)* | `var(--serif)` | 500 | `clamp(2.6rem,7vw,5.2rem)` | 1.04 | .005em | `var(--ivory)` |
| `h2.heading` *(legacy)* | `var(--serif)` | 500 | `clamp(2rem,4.6vw,3.4rem)` | 1.1 | .01em | `var(--ivory)` |
| `h3` *(legacy)* | `var(--serif)` | 500 | `clamp(1.4rem,2.6vw,1.9rem)` | 1.1 | — | `var(--ivory)` |

The hero-title `min(...)` cap is deliberate: it holds the headline to three lines from
320px up. Do not "simplify" it to a plain clamp.

### 2E. Body text

| Scope | Family | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| `.adb-home` (homepage base) | Jost | **300** | inherited 1rem | **1.6** | `normal` |
| `body` (legacy base) | `var(--sans)` | **300** | 1rem | **1.7** | **.01em** |
| `.adb-pillar__text` | Jost | 300 | .95rem | 1.55 | — |
| `.adb-clcard__text` | Jost | 300 | .86rem | 1.55 | — |
| `.adb-reserve__lede` | Cormorant Garamond | — | `clamp(1.15rem,2vw,1.5rem)` | — | — |
| `.lede` *(legacy)* | `var(--sans)` | 300 | `clamp(1.05rem,1.7vw,1.25rem)` | — | — |

Max measure: `.lede` `56ch`, `.adb-pillar__text` `50ch`, `.adb-reserve__lede` `46ch`.

### 2F. Small labels / eyebrows

`.adb-eyebrow` (homepage)
- family `'Jost', sans-serif`, weight **400**
- size **.68rem**, letter-spacing **.3em**, `text-transform: uppercase`
- `display:inline-flex; align-items:center; gap:.8em`
- rule `.adb-eyebrow__rule` — `width:2rem; height:1px; background:currentColor; opacity:.8`
- variants: `--gold` `#c8a24b`, `--brown` `#8a5e28`, `--center` centres it
- in hero and reserve: size **.7rem**, letter-spacing **.32em**, rule `2.2rem`

`.eyebrow` (legacy)
- `var(--sans)` 400, **.7rem**, letter-spacing **.4em**, uppercase, `var(--brass)`
- `::before` / `--center::after` rule — `2.2rem × 1px`, `var(--brass)`, `opacity:.7`
- `margin-bottom: 1.3rem`

Other small labels: `.adb-hero__price-label` Jost .68rem/.22em uppercase `#c9bda6`;
`.footer h4` `var(--sans)` 500 .72rem/.22em; `.field label` .72rem/.16em;
`.btn` and `.textlink` .78rem/.18em uppercase weight 500.

### 2G. CJK glyphs (外灘洋服)

`.adb-mark` — the four-character seal, set as **live text in a 2×2 CSS grid**, not an image:
- family `'Noto Serif TC', serif`, weight **500**
- size **.6rem**, line-height **1**, colour `#c8a24b`
- box **33 × 33px**, `border: 1px solid rgba(166,134,60,.55)`, `border-radius: 2px`
- internal dividers `1px solid rgba(166,134,60,.28)` on cells 1–3
- footer variant `.adb-footer__brand .adb-mark` — **36 × 36px**, font-size **.66rem**

`.heritage__glyph` — city glyphs:
- `'Noto Serif TC', var(--serif)`, size `clamp(3rem,7vw,5rem)`, colour `#e0c48a`
- mobile (≤640px): `clamp(2.2rem,10vw,3rem)`

---

## 3. Spacing and rules

| Token | Value | For |
|---|---|---|
| `--container` | `1180px` | max content width (legacy `.container`) |
| `--gutter` | `clamp(1.25rem, 5vw, 4rem)` | horizontal page padding |
| `--section` | `clamp(4.5rem, 11vw, 9rem)` | vertical section rhythm (`padding-block`) |
| `--radius` | `3px` | default corner radius (10 uses) |

There is **no numeric spacing scale** — spacing is per-rule `rem` values and `clamp()`.

**Border widths:** `1px` throughout for hairlines and dividers. `.adb-mark` outer border
`1px`, inner dividers `1px`. Section tight variant: `padding-block: clamp(3rem,7vw,5rem)`.

**Hairline colours:** `--hair` `rgba(200,162,75,.20)` (gold 20%) and `--hair-soft`
`rgba(236,227,210,.10)` (ivory 10%). Homepage equivalents are literal
`rgba(166,134,60,.55)` and `rgba(166,134,60,.28)` on the seal.

**Border-radius values in use:** `3px` (`--radius`), `2px` (`.adb-mark`), `7px`,
`50%` (circles), `999px` (pill buttons).

---

## 4. Other tokens

**Shadow** — one token only:
```
--shadow: 0 30px 70px -30px rgba(0,0,0,.75);
```

**Easing:**
```
--ease: cubic-bezier(.22,.61,.36,1);   /* 20 uses */
```

**Transitions in use:** `.3s`, `.35s`, `.4s`, `.5s`, `.9s`, `1.1s`.
Buttons `.4s var(--ease)`; text links `.35s var(--ease)`; homepage links `color .3s ease`.
Reveal animation: `opacity .9s cubic-bezier(.22,.61,.36,1), transform .9s cubic-bezier(.22,.61,.36,1)`,
from `opacity:0; transform:translateY(30px)`.

**Max-widths:** `1180px` (`--container`), `1320px` (`.adb-hero__inner`), `1200px`,
`920px`, `860px`, `46rem`, `34rem`, `23rem`; measures `56ch`, `50ch`, `46ch`, `24ch`.

**Reduced motion:** every animation is guarded by
`@media (prefers-reduced-motion:reduce)` — 5 separate blocks.

---

## 5. Breakpoints

All are `max-width` (desktop-first) except the one `min-width` pair.

| Breakpoint | What it changes |
|---|---|
| `960px` | `.studio` → 1 col; homepage 960 block |
| `920px` | homepage block |
| `860px` | `.steps` → 2 col; nav/layout block; homepage block |
| `840px` | `.split` → 1 col; reverse order reset |
| `820px` | **the main mobile break** — homepage/heritage layout |
| `720px` | `.footer__grid` → 1 col |
| `680px` | `.collection__grid` → 1 col; `.tiers` → 1 col |
| `640px` | heritage mobile; homepage mobile block |
| `600px` | `.form__row`, `.choice-grid`, `.opt-grid` → 1 col |
| `520px` | `.steps` → 1 col |

Special:

| Query | Purpose |
|---|---|
| `(min-width:821px)` | desktop-only Heritage Montréal framing |
| `(max-width:860px) and (min-width:821px)` | narrow-desktop band |
| `(max-height:740px)` | short-viewport adjustment |
| `(prefers-reduced-motion:reduce)` | ×5 — disables scroll-behavior, reveals, animations |

**821 / 820 is the real desktop↔mobile boundary.** The Heritage Montréal photo framing
is defined on both sides of it and the two values are deliberate — see `CLAUDE.md`.

---

## 6. Inconsistencies found (flagged, not changed)

1. **`--jade: #4a7361` is dead.** Declared, documented as "green-marble accent",
   referenced zero times. The green actually on the site is the `.adb-how` gradient
   `#22392f → #182a23`.
2. **`--sans` promises Poppins, the homepage never loads it.** `index.html` loads
   Cormorant Garamond, Jost and Noto Serif TC — not Poppins. Any `var(--sans)` rule
   reaching the homepage falls back to `system-ui`. Poppins is only loaded by
   `measurements.html`. The homepage sets Jost literally instead.
3. **The file header comment is stale.** Line 4 of `styles.css` says
   `Type: Cormorant Garamond (display) + Poppins (body)`; the homepage body is Jost.
4. **The homepage bypasses the token system entirely** — 177 `.adb-*` rules, zero
   `var(--…)`. Changing a `:root` colour will not affect the homepage.

---

## Reuse note

For documents that should match **the live homepage**, use section 1C plus
Cormorant Garamond / Jost / Noto Serif TC.

The invoice and price-list assets are a *third*, print-side palette, deliberately
close but not identical (gold `#937029`, oxblood `#6E1220`, ink `#14110F`,
rule `#D9D3C9`, panel `#FAF7F1`, keyline `#A8201A`). See the memory note
`adb-invoice-template` — those are sampled from the M001 PDF, not from this stylesheet.
