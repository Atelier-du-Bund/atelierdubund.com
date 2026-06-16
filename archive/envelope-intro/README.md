# Archived: Invitation / Envelope Intro

This is the full, working code for the flip-open envelope **intro animation** that
used to gate the homepage (front of the letter → turns around → flap opens → it
dissolves into the site). It was removed from the live site so the page opens
directly on the hero and loads lighter. **Nothing here is loaded by the live
site** — these files are inert until you restore them.

## Files
- `envelope.html` — the markup: the `.invitation` overlay, the `<noscript>`
  fallback (goes in `<head>`), and the footer "Replay the invitation" button.
- `envelope.css` — all the envelope/flip styles (and the footer replay-button
  style).
- `envelope.js` — the entry IIFE (session-gating, flip→open→dissolve sequence,
  Skip, `?invitation` trigger, footer replay).

## To restore later
1. In `index.html` `<head>`, re-add the `<noscript>` line from `envelope.html`.
2. Paste the `.invitation` markup block from `envelope.html` as the first thing
   inside `<body>`.
3. Re-add the footer "Replay the invitation" `<button>` (in `.footer__base`).
4. Paste the contents of `envelope.js` back inside the main `<script>` at the top
   (before "Header background on scroll").
5. Append the contents of `envelope.css` to `assets/styles.css`.

That's it — no build step. It already respects `prefers-reduced-motion` and only
shows once per session.

> Texture placeholders: the letter's paper/wax is CSS-generated. To go photoreal,
> set `--env-paper-img` / `--env-wax-img` in `envelope.css` to real image URLs.
