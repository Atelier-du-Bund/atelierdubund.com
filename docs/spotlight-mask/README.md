# feature/spotlight-mask — Founding Collection spotlight reveal

Preserved implementation of the **spotlight** interaction for the Founding Collection
section, shelved on 2026-07-24 in favour of the numbered-marker + leader-line treatment
that ships on `main`. Kept here to revive once the house-style illustrations are redrawn.

The full working file is alongside this note:
`Atelier du Bund (spotlight-mask).dc.html` — a complete, runnable copy of the whole page
with the spotlight interaction intact. To branch it in git:

```
git checkout -b feature/spotlight-mask
# replace "Atelier du Bund.dc.html" with the copy in this folder, or cherry-pick the
# collection section from it, then commit.
```

## What the branch contains

- **Tap-to-spotlight interaction.** The centre column is an index of the eight cut
  details. Tapping one throws a soft radial "light" over that region of the figure and
  veils the rest (front, back, or both trouser views for the pintuck). Tap again / tap
  outside to release. Hover previews the same on desktop; tap is the mechanism.
- **New per-cut copy** for all eight details, with Maggie's three substitutions
  (rounded lapel, puffed shoulder, two buttons) and Maximilian's two (six-on-two,
  double vent). Lives in `copyBase` / `copyPatch` in the logic class.
- **Region geometry** as centre/radius percentages per detail in `spotGeo` (+ `geoPatch`
  for Maximilian), consumed by `mkScrim()` which builds the veil + glow gradients.
- **Contrast-stitching inset** — a drawn SVG close-up shown in the centre column when the
  stitch detail is selected, since the stitching is not present on the figures.
- **Founding-members block** with a placeholder "AdB" monogram inset (removed on `main`).

## Why it was shelved, and what it needs to work

The house-style figures are **flat PNGs**. A radial mask over a flat photo lights a
circular patch of the *image plane*, not the garment feature, and produces a visible
halo rather than a clean highlight — the veil can't follow the lapel edge, the vent, or
the trouser seam.

To make the spotlight read correctly, each figure needs to be **redrawn as a layered
SVG with a named path per detail** (`#lapel`, `#shoulder`, `#vent`, `#pintuck`, …), so
selecting a detail can highlight or isolate that actual shape instead of masking a
circular region of a bitmap. Once the illustrations exist in that form, swap the
percentage-based `spotGeo` regions for per-path highlighting and this branch becomes viable.
