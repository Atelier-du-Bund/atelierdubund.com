# Atelier du Bund — Redesign Plan

> **Status:** proposal only. Nothing in this document has been implemented except
> the small, reversible "safe changes" listed at the very bottom (and tracked in
> `NOTES.md`). The full redesign waits for your review.

---

## 1. The brief, in one line

Turn the site from a *shop/catalogue* into an **invitation to a private club** —
exclusive, "if you know, you know." Its job is **vibes**, not information:
(a) show a small set of beautiful photos, and (b) tell the heritage &
craftsmanship story. No prices (beyond one tasteful "from $999 CAD"), no booking
form, no configurator.

---

## 2. Judging the current site as a high-end customer

Imagine a discerning buyer (or a fashion house) landing here. Here's the honest read:

**What already works**
- The colour world (deep maroon, brass, oxblood, ivory) and the type pairing
  (Cormorant Garamond + Poppins) are genuinely premium and on-theme.
- The Wong Kar-wai / 1930s Shanghai positioning is distinctive — nobody else in
  Montréal custom suiting is telling *this* story.
- The envelope/invitation entry is the right instinct for "by invitation."

**What undercuts the premium feeling today**
1. **It reads like a product page, not a world.** Four text "fit cards," a
   three-tier price table, a "how it works" flow — this is e-commerce grammar.
   Luxury houses (Brioni, Kiton, Cifonelli, The Armoury) sell *atmosphere and
   provenance first*, product second.
2. **Pricing tiers cheapen it.** A visible $999/$1,099/$1,399 table invites
   comparison shopping. Exclusivity means the price is discovered in
   conversation, not advertised. One quiet "from $999 CAD" is plenty.
3. **The photos aren't the star.** Right now imagery is wallpaper behind text.
   For a brand whose pitch is "look at these suits," the photography should be
   the architecture of the page, not the background.
4. **Too many words, too much explaining.** Manifesto + collection + fabric +
   process + heritage + contact is a lot of reading. A private client wants to
   *feel* something in 20 seconds, then be intrigued enough to ask.
5. **The heritage section is interactive trivia.** The clickable city timeline
   feels like a museum kiosk, not a heritage house. (You've also said the copy
   needs a full rewrite — agreed.)

**The gap to close:** less "here is our product and how to buy it," more "here is
a rare world you've been let into." Restraint, negative space, photography, and a
story told like a memoir.

---

## 3. Design direction

### 3.1 Layout — photo-first, editorial
- **Full-bleed cinematic photography** as the spine of the page. Think a fashion
  editorial or a film, not a storefront: large images that fill the viewport,
  generous black/maroon space between them, one idea per "scene."
- **Scroll as a sequence of scenes**, each anchored by one hero photo with a
  single short line of type (a name, a place, a feeling) — not paragraphs.
- A **gallery** of 5–6 images is the centrepiece (your shoot with your
  photographer). Mix of full-bleed and framed; allow one or two to be portrait,
  one panoramic.
- Keep the four fits, but express them **through photography** (a portrait per
  fit) rather than text cards — name + one evocative line overlaid.

### 3.2 Type
- Keep Cormorant Garamond for display — lean into it harder: bigger, more air,
  more italic for mood. Consider a true Art-Deco capitals face (e.g. a Cinzel or
  a custom wordmark) *only* for the logo, to feel like a maison.
- Poppins is fine for body but use it sparingly and small; this site should be
  mostly serif and mostly silence.
- Set copy in short, confident lines. No paragraph should exceed ~2 lines.

### 3.3 Colour & finish
- Hold the maroon/oxblood/brass palette — it's an asset. Push **contrast and
  darkness**: more near-black, brass used as a thin metallic accent (hairlines,
  small caps), never as fills. Let the photographs bring the colour.
- Add a subtle **film grain / paper texture** overlay site-wide for tactility
  (very low opacity) to match the envelope.

### 3.4 Motion
- Cinematic and slow. Images that drift/parallax gently on scroll; text that
  fades up. Nothing bouncy. Everything respects `prefers-reduced-motion`.
- The **entry envelope** sets the tone (see §4).

### 3.5 The exclusivity cues ("if you know, you know")
- No "Buy," no "Shop," no price table. The only call to action is *contact /
  by appointment*, framed as a request, not a transaction.
- Language of membership: "by invitation," "the founding circle," "a private
  fitting." Numbers that imply scarcity ("a limited founding round").
- The unlisted appointment page (already built, `appointment.html`, noindex) is
  exactly right — the prep instructions are only seen *after* you're in.

---

## 4. The entry envelope (target experience)

Motion you described: **front of the letter (wax seal + "You're invited to the
Atelier") → the letter turns around → opens from the fold → dissolves into the
site.**

Three ways to build it, cheapest → most photoreal:

1. **Pure CSS 3D (scaffolded tonight).** A flip-card envelope: front face with
   seal + invite line, rotates `rotateY(180°)` to the back, flap opens with
   `rotateX`, then the scene scales and fades into the site. *Pros:* tiny, instant,
   no assets, fully reversible. *Cons:* "stylised real," not literal paper.
2. **Layered real images + CSS 3D (semi-photoreal).** You supply transparent PNGs
   shot/rendered straight-on: envelope front, envelope back, flap (separate
   layer), wax seal. I map them onto the same flip/open rig. *Pros:* real paper
   texture and lighting; still lightweight. *Cons:* needs clean, registered
   assets; angled source photos won't work.
3. **Pre-rendered video / image sequence (true photoreal).** You (or a 3D artist
   in Blender/Cinema4D) render the exact motion once — front → turn → open — as a
   short transparent video (HEVC/WebM alpha) or a PNG frame sequence. The site
   just plays it, then reveals the page. *Pros:* genuinely photorealistic, full
   art-direction over lighting/paper/wax. *Cons:* needs the render; larger file;
   a few hours of 3D work or a commissioned asset.

**My recommendation:** ship the CSS scaffold now (done — see §"safe changes"), and
go to **option 3** for launch if you want true photorealism. It's the only route
to "looks like a real letter filmed opening." Option 2 is the middle ground if you
can get flat, registered stills but not a render.

**What I need from you for option 2 or 3** — see `NOTES.md` → "Assets needed."

---

## 5. Proposed page structure (for your review — not yet built)

1. **Entry** — envelope opens (§4).
2. **Opening scene** — one full-bleed hero photo, the wordmark, a single line.
   No buttons but a quiet scroll cue.
3. **The gallery** — 5–6 cinematic photographs, the heart of the site. Minimal or
   no captions; let them breathe.
4. **The four fits** — one portrait each (Maximilian / Edmund / Josephine /
   Maggie), name + one line.
5. **Heritage** — a quiet, scroll-told story (your new copy), paired with one or
   two archival-feeling images. No clickable kiosk.
6. **Craftsmanship** — a short scene on the hand-work / cloth (one image, few words).
7. **The invitation / contact** — "by appointment," the email, and the single
   tasteful "from $999 CAD." No form.
8. **Footer** — wordmark, email, language toggle, replay-the-invitation.

---

## 6. Open questions for you

1. **Logo/wordmark:** keep "Atelier du Bund" set in Cormorant, or commission a
   proper Art-Deco wordmark/monogram (the "AB" seal could become the logo)?
2. **Photography:** how many final images, and what are they of (full-length
   suits? details? the city? portraits of you/clients)? Any in portrait
   orientation? This drives the gallery grid.
3. **Heritage copy:** you're rewriting it — roughly how long, and do you want the
   Shanghai→Hong Kong→Montréal arc kept as the spine, just told better?
4. **Name vs. discretion:** do you want your name / the tailor's name anywhere, or
   stay fully anonymous ("the atelier")?
5. **Languages:** is French (Montréal) a launch requirement or later? It affects
   layout and the nav.
6. **Booking:** confirm there's truly no form anywhere — contact is email only,
   and the appointment page link is sent manually. (Currently: yes.)
7. **The envelope:** which of the three build options (§4) do you want for launch?
8. **Instagram/social:** is there a handle to link, or remove the placeholder?

---

## 7. Risks / things to keep honest

- "Exclusive and minimal" can tip into "empty and unfinished" if the photography
  isn't strong. The whole bet rests on the images — they must be excellent.
- A heavy entry animation can annoy repeat visitors; we gate it to once-per-session
  with a Skip and a replay link (done).
- Going fully photoreal on the envelope adds weight (a video). We'll lazy-load it
  and keep the CSS version as the reduced-motion / fallback path.
