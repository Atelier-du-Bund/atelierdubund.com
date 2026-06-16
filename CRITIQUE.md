# Atelier du Bund — Critical Review & Recommendations

> Written as you asked: a critical eye on the *whole* site, judged as a high-end
> customer / a design studio would judge it. Goal of the site: an **invitation to
> a private club** — photos first, heritage & craftsmanship storytelling, "if you
> know, you know." Vibes over information. Nothing here is implemented; it's the
> argument for the next phase. (Small safe changes already made are in `NOTES.md`.)

---

## A. The 10-second test

A premium visitor decides how they feel almost instantly. Today, after the
envelope, they land on a hero, then a one-line manifesto, then a grid of text
"fit cards," etc. It's tasteful but it still **explains** more than it **seduces**.
The single biggest lever: make the first full screen after the envelope a
**photograph that takes your breath**, with almost no words. Right now words
arrive first; for this brand, the image should.

---

## B. Section-by-section critique (current live site)

**Entry envelope** — *Strong, and now the signature.* The flip-open letter is
distinctive and on-brief. Keep it. The two things that will make or break it:
(1) real paper/wax texture (CSS approximation only goes so far), and (2) the
motion feeling *expensive* — slow, weighty, a single confident gesture. Consider
a faint ambient sound option (off by default) for a truly cinematic open.

**Hero** — *Good bones.* Wordmark + slogan over a cinematic image is right. But
it currently competes with the manifesto line that immediately follows (two
"statement" moments back to back). Recommendation: let the hero be the *only*
statement at the top, then go straight into photography.

**Manifesto ("A suit cut to one body…")** — *Nice line, wrong placement.* It's a
light (parchment) band between two dark sections, which breaks the cinematic
mood. Either fold it into the hero as a sub-line, or move it deeper as a quiet
interstitial between photo scenes. The light background especially cheapens the
"private, dim, members-only" feeling — see colour note below.

**The Collection (four fits)** — *Most "e-commerce" moment on the site.* Four
text cards in a grid reads like a product listing. For exclusivity, express the
four fits as **four portraits** (one image each) with just the name + one line,
or even hide the naming behind the photography. Names like Maximilian / Edmund /
Josephine / Maggie are lovely — reveal them with images, not bullet copy.

**The Cloth** — *Now appropriately quiet* (good — pricing removed). Still a
light band. Could become a single close-up "craftsmanship" photo scene (hands,
cloth, a working buttonhole) with one or two lines. Show, don't list.

**Heritage** — *Correctly blanked for your rewrite.* My structural advice: tell
it as a slow, scroll-revealed sequence — a few full-bleed archival-feeling
images, each with one or two lines, rather than a clickable timeline (which felt
like a museum kiosk). The Shanghai → Hong Kong → Montréal arc is a great spine;
keep the spine, lose the widget.

**Contact** — *Right idea.* "By appointment," email, one quiet price. Keep it a
closing scene over a beautiful image. Make sure the email is the only ask.

**Footer** — Fine. Trim to wordmark, email, language, replay-the-invitation.

---

## C. Branding, colour, type, feeling

**Colour — lean darker and more disciplined.** The maroon/oxblood/brass system is
genuinely good and ownable. The weakness is the **parchment "light" sections**:
they interrupt the dim, jewel-box mood and read more "boutique" than "private
club." Recommendation: go **near-black/deep-maroon throughout**, let the
*photographs* supply brightness and colour, and use brass only as a thin metallic
accent (hairlines, small caps, the envelope edge) — never as fills. Add a very
subtle film-grain overlay site-wide for tactility and cohesion with the envelope.

**Type — push the serif, quiet the sans.** Cormorant Garamond is doing the
heavy lifting and should do more: larger, more air, more italic for mood. Poppins
should shrink to small-caps labels and the rare line of body. The site should
feel *mostly serif and mostly silent*. Consider a true display/Deco face (or a
custom wordmark/monogram from the "AB") **only** for the logo, to feel like a
maison rather than a template.

**Motion — cinematic, never bouncy.** Slow fades, gentle parallax on images,
text that rises a few pixels. Everything ≥ 600ms, eased, and gated by
`prefers-reduced-motion`. The envelope sets the pace; the rest should match it.

**Voice — fewer words, more implication.** Replace explanatory copy with
suggestion. "By invitation," "the founding circle," "a private fitting." Let
scarcity and discretion do the talking. No "Buy," no "Shop," no "How it works."

**Logo/identity gap.** The brand would feel materially more premium with a real
mark: a refined "AB" monogram or a custom wordmark, plus a single consistent
motif (the plum blossom is a good candidate) used sparingly as the house signet.

---

## D. The photos must carry the site — so treat them like a gallery

- **Curate hard.** 5–6 *excellent* images beat 12 good ones. One weak photo
  undercuts the whole "exclusive" claim.
- **Vary the rhythm.** Full-bleed hero → tight detail → portrait → wide
  editorial. Give each room to breathe (lots of dark space around it).
- **Consistency.** Same grade/grain/colour treatment across all images so they
  feel like one body of work (one film, not a camera roll).
- **Captions optional.** A date, a place, a name — or nothing. Never alt-text-y
  descriptions on screen.
- **Performance.** Serve sized/compressed images (AVIF/WebP), lazy-load below the
  fold, and keep the LCP image (hero) small. A heavy gallery kills the mood with
  spinners.

---

## E. Prioritized recommendations (highest impact first)

1. **Photography system** — lock the 5–6 final images and a single colour grade.
   Everything depends on this.
2. **Go dark throughout** — remove the parchment sections; let images supply light.
3. **Reframe the four fits as portraits**, not text cards.
4. **Heritage as a scrolling photo-story** (your new copy), not a timeline.
5. **Real envelope assets** (paper + wax, or a pre-rendered open) for true
   photorealism — see options in `REDESIGN-PLAN.md` §4.
6. **Identity polish** — commission a wordmark/monogram; standardize the blossom
   signet; add subtle film grain site-wide.
7. **Voice pass** — cut explanatory copy ~40%; shift to suggestion/scarcity.
8. **Performance pass** — AVIF/WebP, lazy-load, sized images.

---

## F. Open questions (same as the plan, the ones that block design)

- How many final photos, and what are they of? Any portrait-orientation?
- Keep the parchment/light accents at all, or go fully dark? (I recommend dark.)
- Commission a custom wordmark/monogram, or keep Cormorant for the logo?
- French at launch, or later?
- Anonymous house, or do you want your name present?
- Which envelope build for launch: CSS (now), layered stills, or a 3D render?
