# NOTES — overnight session summary

Quick orientation for the morning. Three docs to read in this order:
1. **NOTES.md** (this file) — what changed, what's live, what you need to supply.
2. **CRITIQUE.md** — critical review of the whole site + prioritized recommendations.
3. **REDESIGN-PLAN.md** — the photo-first, invitation-only redesign proposal.

---

## What is LIVE now (pushed to `main` → atelierdubund.com)

- **Custom domain restored** (CNAME) and HTTPS enforced.
- **Configurator removed** entirely; public booking form removed.
- **Entry envelope** reworked: front shows *"You're invited to the Atelier"* on a
  sleek, glossy waxed letter (no wax seal) → the letter turns around → the flap
  opens from the fold → it dissolves into the site. Skip button; respects
  reduced-motion; shows once per session; replay from the footer or `?invitation`.
- **Hero**: "Atelier du Bund" on one line; copy pulled to the left with the photo
  shifted right so it doesn't block the suit.
- **All pricing removed** except one quiet *"Bespoke · from $999 CAD"* in Contact.
- Contact is email-only (`bonjour@atelierdubund.com`); unlisted, `noindex`
  `appointment.html` kept for sending prep details to booked clients.

## What is ON THE BRANCH only (NOT live — for your review)

Branch: `claude/atelier-du-bund-redesign-g05w7t`. These commits are pushed to the
branch but **not** to `main`, so the live site does not show them yet:

- **Photo-first gallery** added right after the hero — a large 6-image cinematic
  grid (wide + tall, hover zoom, captions). Uses existing photos as clearly
  marked **"Placeholder"** stand-ins. Added "Gallery" to nav + footer.
- **Heritage** section blanked to `[ HERITAGE COPY TO COME — DO NOT WRITE ]`
  (timeline + copy removed; skyline kept); its JavaScript removed.

To put these live: merge the branch into `main` (or tell me and I'll push). I left
them off live so you can approve the photo-first layout and the blanked heritage
first.

---

## Assets I need from you

**Photography (highest priority)**
- 5–6 final images, ideally a mix: 2 wide/cinematic (landscape) + 3–4 portrait.
- One colour grade across all of them so they feel like one body of work.
- Sized/compressed (AVIF or WebP) for performance; I'll wire them into the gallery
  (replace the `images/web/*.jpg` placeholders + captions in `index.html`).

**Envelope (for true photorealism — see REDESIGN-PLAN.md §4)**
- *Option B (layered stills):* transparent PNGs shot/rendered **straight-on**:
  envelope front, envelope back, flap (separate layer). Drop the paper texture
  into the CSS var `--env-paper-img` and (if you still want one) a wax image into
  `--env-wax-img` — both already wired in `assets/styles.css`.
- *Option C (best):* a short pre-rendered clip (transparent WebM/HEVC or a PNG
  frame sequence) of the exact motion: front → turn → open. I'll play it and then
  reveal the site. This is the route to "looks like a real letter."
- Must be **licensed / yours** — the Vecteezy image was watermarked and can't be
  used.

**Heritage copy** — you're writing it; send length + whether to keep the
Shanghai → Hong Kong → Montréal arc as the spine.

**Identity (optional but high-impact)** — decide on a custom wordmark/monogram vs.
keeping Cormorant for the logo.

---

## Open questions (decisions that unblock the redesign)

1. Go **fully dark** (drop the parchment/light sections), as I recommend? Or keep light accents?
2. Reframe the **four fits as portraits** instead of text cards? (Recommended.)
3. **Heritage** as a scrolling photo-story rather than a timeline? (Recommended.)
4. **French** at launch or later?
5. **Anonymous** house, or your name present?
6. Which **envelope** build for launch: CSS (current), layered stills, or 3D render?
7. **Instagram** — real handle to link, or remove the placeholder?

---

## Commits this session (newest first, on the branch)

- Heritage: replace timeline + copy with a marked placeholder *(branch only)*
- Photo-first: add cinematic gallery centrepiece (placeholder images) *(branch only)*
- Entry + hero refinements (no seal / glossy wax; one-line wordmark; hero left) *(live)*
- Fix entry: release envIn's held transform so the flip/open/dissolve animates *(live)*
- Remove pricing tiers; keep one quiet "from $999 CAD" in Contact *(live)*
- Entry: flip-open envelope — front turns around, flap opens, dissolves *(live)*
- Add REDESIGN-PLAN.md *(doc)*
- (earlier) full-bleed envelope, "Enter the atelier", CNAME, configurator removal, etc.

Nothing destructive; every step is a separate commit and reversible.
