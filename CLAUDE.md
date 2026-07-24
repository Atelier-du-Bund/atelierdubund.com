# atelierdubund.com

Live static site for Atelier du Bund, a made-to-measure tailoring house in Montréal.
Hand-built. No framework, no build step. `index.html` + `assets/styles.css`, deployed from `main`.

Read this before touching anything.

---

## Claude Design exports are NOT drop-ins

The site is designed in Claude Design and exported as a zip, but the export is a
**reference prototype**, not shippable code. Its own README says so: inline styles,
`{{ }}` template holes, and a React runtime (`support.js`) that must never be ported.

Applying an export means **hand-porting values file by file** into `index.html` and
`assets/styles.css`. Zero files are ever copied across as-is.

Standard procedure when a new export arrives:

1. Unzip to a scratchpad. Never overwrite in place.
2. Diff against the live tree and report what changed.
3. Flag anything hand-written that the export would overwrite.
4. **Stop and wait for approval before applying.**

The export knows nothing about the code below. It will silently revert it.

---

## Never regress these

Exports have broken every one of these at least once.

- **Booking links.** `https://cal.com/atelierdubund/appointment`. Never `mailto:`,
  never an in-page anchor. This applies to the header button, the hero CTA, the
  footer, and the mobile booking bar.
- **Images are hand-optimized.** The repo versions are 5–10× smaller than the export
  raws. Never commit an export's raw images.
- **The Heritage section** is a hand-built scrollytelling rig: `#heritageTrack`,
  `data-step` on the section, `.heritage__photo` carousel with `counts = [2,3,3,1]`,
  the `is-zoomed` Montréal transition, and the `data-go` city stepper. The export's
  version is state-driven and knows nothing about this.
- **All `<head>` content** — title, meta description, OG and Twitter cards, favicons,
  `theme-color`, `lang`. Exports ship an empty head.
- **The mobile nav** and the **EN-CA / FR-CA language toggle**.
- **URL-encoded heritage image paths** (e.g. `15.%20vintage%20measurement%20form.webp`)
  — a deliberate workaround for spaces in filenames.

---

## Locked terminology

Non-negotiable, site-wide:

- **house styles** — never "signatures," never "models"
- **made-to-measure** — never "bespoke"
- **master tailors** — no hyphen
- **canvassed** — half canvas; never claim full canvas anywhere
- **hand-finished** — never "handcrafted"
- **the Red Band** — capital B. Never "Red Gang" (the export README uses it; reject that)
- Polyester is named plainly. Never "performance blend" or "performance fibre"
- The word **cashmere** must not appear anywhere on the site
- **Tap**, never **hover** — hover doesn't exist on mobile

## Voice

- Show, don't label. Concrete nouns over adjectives.
- Never claim what can't be defended.
- No em-dashes where a comma works. One deliberate exception, in the footer.
- Panels close on a short fragment as a house device.
- Second person throughout: *your jacket*, *your frame*.
- No hardcoded `<br>` or mid-paragraph `\n` in copy. These were deliberately stripped
  and exports keep reintroducing them.
- Repetition **across** sections is intentional — visitors skim and land mid-page.

Do not invent product details. Hotspot and cloth copy comes only from supplied spec.

---

## Verification

- Check responsive behaviour by **screenshotting at the actual device width**, not by
  measuring the DOM.
- Check desktop, laptop and mobile. Line breaks and photo focal points move with
  viewport width.
- After pushing, confirm the deploy succeeded and check the live site, not the preview.

---

## Known outstanding

- Heritage map on mobile: the China outline is cropped to a coastal sliver and doesn't
  read as China; the Canada-to-Montréal island zoom is missing.
- Line-break orphan pass: no line should end with or begin with a stranded short word.
  Fix with `text-wrap: pretty` plus targeted non-breaking spaces — never by changing
  copy, font size, column width or line height.
- Heritage background photo framing: the headline covers the founder's face.
- French version (FR-CA) not started. Vouvoiement, heritage register. The orphan pass
  will need repeating for French, which wraps at different points and has its own
  spacing rules.
- Two copy claims are pending supplier confirmation and must not be strengthened:
  the machine-washable claim on the Signature, and the "CASHMERE" selvedge marking.
