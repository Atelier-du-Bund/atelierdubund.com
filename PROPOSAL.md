# Below-the-Hero — Layout Proposal

**Status:** preview only, on branch `claude/below-hero-proposal`. **Not merged to
live.** The live site (`main`) is unchanged below the hero. Approve this and I'll
merge it.

## Goal
Replace the old below-hero layout (manifesto, four "fit" cards, cloth section,
clickable heritage timeline, contact band — and the separate photo gallery from
the other branch) with an **editorial, cinematic, sparse** flow that feels like a
private club. Photography carries the mood, woven **one image per section** rather
than collected in a grid.

## Proposed flow

1. **Hero** — kept exactly as live (left-pinned text, no envelope intro).
2. **Heritage — a map.** An editorial/antique-style map tracing the lineage
   **Shanghai → Hong Kong → Montréal**, with a flowing brass route line that
   **draws itself in on scroll**. Not a click-the-pin widget. Narrative copy stays
   `[ HERITAGE COPY TO COME — DO NOT WRITE ]` until you write it.
3. **A Private Affair** — image of the private space + the exact copy you gave.
4. **The Fitting** — image of the fitting/hand-measuring + your copy, ending with
   one quiet line: *"Commissions from $999."* (no tiers, no emphasis).
5. **By Appointment** — a discreet closing scene; the only action is the email
   link to `bonjour@atelierdubund.com`. No booking widget.

Nav trims to **Heritage · The Atelier · The Fitting · Contact**. The four fits,
the cloth section, and the price tiers are gone; the single price lives only in
"The Fitting."

## Rationale (why this reads as "private club")
- **One image per section, full-height scenes** feel like an editorial spread, not
  a shop. Lots of dark space; the eye rests on one photograph at a time.
- **No catalogue grammar** — no "fit cards," no price table, no "how it works."
  The map turns provenance into the hero of the story; the prose stays minimal.
- **The map as heritage** is distinctive and ownable, and the self-drawing line
  gives a single, slow, cinematic gesture on scroll (respects reduced-motion).
- **One quiet price** answers the practical question without ever feeling like
  retail.

## What's a placeholder right now (clearly marked on the page)
- All section images are existing photos used as stand-ins, each tagged
  **"Placeholder."** Replace with your photographer's finals.
- The **map** is a stylised CSS/SVG illustration (frame, faint graticule, compass,
  brass route, three labelled cities) — good enough to show the motion and feel,
  but see "assets" below for going beautiful.
- Heritage narrative copy is the bracketed placeholder.

## Assets I need from you
1. **Section photos (4–5), one per scene**, ideally one colour grade:
   - The private space (for "A Private Affair").
   - The fitting / hands measuring (for "The Fitting").
   - A closing, atmospheric image (for "By Appointment").
   - (Hero already set.) A portrait or two in reserve is useful.
   - Sized/compressed (AVIF/WebP) for performance.
2. **The heritage map art (to make it truly beautiful).** Options, best → simplest:
   - A **licensed antique/vintage map illustration** (East-Asia-to-North-America,
     or a stylised old-world map) I can place behind the route as the background —
     this is what elevates it from "nice SVG" to "gorgeous." Must be licensed/yours
     (public-domain antique maps work well; many pre-1900 maps are public domain).
   - Or a **custom illustrated map** (commissioned) in the brand palette.
   - Or keep the **CSS/SVG version** I built (no asset needed) and just refine it.
   Tell me which, and the exact three points to mark (currently Shanghai, Hong
   Kong, Montréal) — add Ningbo as the origin if you want four.
3. **Heritage copy** when ready (length + whether to keep the
   Shanghai→Hong Kong→Montréal spine).

## Booking — optional later add (noted, not built)
You asked to keep contact as a discreet email only — done. If you later want
**self-scheduling**, **Cal.com** is the clean fit: free/open-source, embeddable as
a popup or inline, and it can stay on-brand (custom colours, your domain). We'd add
a single "Request an appointment" link that opens a Cal.com booking page, while
keeping the email as the primary, discreet path. I'd gate it behind an invite
(unlisted link) to preserve the "by invitation" feel. Say the word and I'll wire it
in as a later step.

## Open questions
- Keep the **dark** palette throughout (recommended) — the old parchment/light
  sections are gone in this proposal. OK?
- **Map**: which art route (licensed antique / commissioned / keep CSS)?
- Add **Ningbo** as a fourth point on the map, or keep three cities?
- Any image in **portrait** vs landscape? It changes the scene crops.
