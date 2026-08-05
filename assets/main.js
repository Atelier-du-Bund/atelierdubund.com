/* Atelier du Bund — homepage behaviors.
   Moved verbatim from index.html's end-of-body inline script;
   loaded from the same position, so execution timing is unchanged.
   Bump the ?v= token in index.html on every change to this file. */

// ---- Header: transparent over the hero, solid oxblood once scrolled past it.
//      The mobile book plate rides the same threshold, and stands down over
//      Heritage so it never covers the city stepper. ----
(function(){
  const header = document.getElementById('adb-header');
  const hero = document.getElementById('top');
  const cta = document.getElementById('adbMobileCta');
  const heritage = document.getElementById('heritage');
  if (!header || !hero) return;
  // the plate sits ~1.1rem off the bottom; treat the lowest 8rem as its zone
  const PLATE_ZONE = 128;
  const onHdr = () => {
    const solid = window.scrollY > hero.offsetHeight - header.offsetHeight - 8;
    header.classList.toggle('is-solid', solid);
    if (!cta) return;
    let overHeritage = false;
    if (heritage) {
      const r = heritage.getBoundingClientRect();
      overHeritage = r.top < innerHeight && r.bottom > innerHeight - PLATE_ZONE;
    }
    cta.classList.toggle('is-visible', solid && !overHeritage);
  };
  onHdr(); addEventListener('scroll', onHdr, {passive:true});
})();

// ---- Mobile nav (added; the prototype has no mobile menu) ----
(function(){
  const header = document.getElementById('adb-header');
  const toggle = document.getElementById('adbNavToggle');
  if (!header || !toggle) return;
  const setOpen = (open) => {
    header.classList.toggle('is-navopen', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '✕' : '☰';
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-navopen')));
  header.querySelectorAll('.adb-nav a, .adb-header__right a').forEach(a => a.addEventListener('click', () => setOpen(false)));
})();

// ---- Reveal on scroll ----
(function(){
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const els = document.querySelectorAll('[data-reveal]');
  if (reduce) { els.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  els.forEach(el => io.observe(el));
})();

// ---- About carousel (6 photos, 4.2s auto-advance, dots, swipe — no arrows) ----
(function(){
  const frame = document.querySelector('.adb-about__frame');
  if (!frame) return;
  const slides = Array.from(frame.querySelectorAll('.adb-about__slide'));
  const dotsWrap = document.getElementById('aboutDots');
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  let cur = 0, timer = null;
  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'adb-about__dot'; b.setAttribute('aria-label', 'View photo ' + (i + 1));
    b.addEventListener('click', () => { go(i); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });
  const paint = () => {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === cur));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === cur));
  };
  const go = (i) => { cur = (i + slides.length) % slides.length; paint(); };
  const restart = () => { if (timer) { clearInterval(timer); tick(); } };
  const tick = () => { if (!reduce) timer = setInterval(() => go(cur + 1), 4200); };
  const step = (d) => { go(cur + d); restart(); };
  // swipe (40px threshold, matching the prototype)
  let swipeX = null;
  frame.addEventListener('touchstart', (e) => {
    swipeX = e.touches && e.touches[0] ? e.touches[0].clientX : null;
  }, {passive:true});
  frame.addEventListener('touchend', (e) => {
    if (swipeX === null) return;
    const t = e.changedTouches && e.changedTouches[0];
    const dx = t ? t.clientX - swipeX : 0;
    swipeX = null;
    if (Math.abs(dx) < 40) return;
    step(dx < 0 ? 1 : -1);
  }, {passive:true});
  paint(); tick();
})();

// ---- Language toggle (label only — no French copy exists yet) ----
(function(){
  const btn = document.getElementById('adbLang');
  const label = document.getElementById('adbLangLabel');
  if (!btn || !label) return;
  let lang = 'EN';
  btn.addEventListener('click', () => {
    lang = lang === 'EN' ? 'FR' : 'EN';
    label.textContent = lang === 'EN' ? 'EN-CA' : 'FR-CA';
    const aria = lang === 'EN' ? 'Passer en français' : 'Switch to English';
    btn.setAttribute('aria-label', aria);
    btn.setAttribute('title', aria);
  });
})();

// ---- Founding Collection: house styles, front/back figures, connector line ----
(function(){
  const stage = document.getElementById('adb-cl-stage');
  if (!stage) return;
  const tagEl = document.getElementById('clTag');
  const nameEl = document.getElementById('clName');
  const blurbEl = document.getElementById('clBlurb');
  const numEl = document.getElementById('clNum');
  const metaEl = document.getElementById('clMeta');
  const titleEl = document.getElementById('clTitle');
  const textEl = document.getElementById('clText');
  const art = { front: document.getElementById('clArtFront'), back: document.getElementById('clArtBack') };
  const panel = { front: document.getElementById('clPanelFront'), back: document.getElementById('clPanelBack') };
  const svg = document.getElementById('adb-cl-svg');
  const linePath = document.getElementById('adb-cl-line');
  const o1 = document.getElementById('adb-cl-o1');
  const o2 = document.getElementById('adb-cl-o2');
  const card = document.getElementById('adb-cl-card');

  const BASE = 'images/web/collection/';
  const panelUrls = { green: BASE + 'marble-green.png', oxblood: BASE + 'marble-oxblood.png' };

  const styleData = {
    vincent: { name:'The Vincent', tag:"Men's · Signature", blurb:'Our signature unisex cut — effortless from the office to a soirée.', panel:'oxblood',
      front:{ src: BASE + 'vincent-front.png', alt:'The Vincent — navy single-breasted suit, front view.',
        hotspots:[
          { num:1, title:'Peak lapel', text:'The sharpest lapel there is. It\u00a0broadens the shoulder and narrows everything below it.', top:'21%', left:'58%' },
          { num:2, title:'Shaped through the body', text:'Seams that draw the jacket in at the waist, so it follows the taper of your body instead of boxing it.', top:'27%', left:'52%' },
          { num:3, title:'Single button', text:'Fastens at the waist, so your jacket opens in a long V that lengthens your silhouette.', top:'36%', left:'49%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'66%', left:'47%' },
          { num:5, title:'Straight leg', text:'Cut to flatter more bodies than a slim leg does, especially through the calf and thigh.', top:'78%', left:'47%' },
        ] },
      back:{ src: BASE + 'vincent-back.png', alt:'The Vincent — navy single-breasted suit, back view.',
        hotspots:[
          { num:6, title:'Structured shoulder', text:'A defined shoulder line that squares your frame and gives structure to any body shape.', top:'22%', left:'40%' },
          { num:7, title:'Contrast stitching', text:'Buttonholes and buttons stitched in the colour of your lining. Professional, with personality.', top:'43%', left:'36%' },
          { num:8, title:'Single vent', text:'One opening at the back, so\u00a0your jacket moves with you when you sit. A clean line from behind.', top:'47%', left:'50%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'72%', left:'47%' },
        ] } },
    maximilian: { name:'The Maximilian', tag:"Men's · Double-breasted", blurb:'The double-breasted, elegance in the traditional way.', panel:'green',
      front:{ src: BASE + 'maximilian-front.png', alt:'The Maximilian — brown double-breasted suit, front view.',
        hotspots:[
          { num:1, title:'Peak lapel', text:'The sharpest lapel there is. It\u00a0broadens the shoulder and narrows everything below it.', top:'21%', left:'58%' },
          { num:2, title:'Straight through the body', text:'Cut to fall straight from chest to hem, for a broader, more architectural line.', top:'27%', left:'52%' },
          { num:3, title:'Six-on-two', text:'Six buttons, two fastening, the classic double-breasted arrangement.', top:'36%', left:'49%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'66%', left:'47%' },
          { num:5, title:'Straight leg', text:'Cut to flatter more bodies than a slim leg does, especially through the calf and thigh.', top:'78%', left:'47%' },
        ] },
      back:{ src: BASE + 'maximilian-back.png', alt:'The Maximilian — brown double-breasted suit, back view.',
        hotspots:[
          { num:6, title:'Structured shoulder', text:'A defined shoulder line that squares your frame and gives structure to any body shape.', top:'22%', left:'40%' },
          { num:7, title:'Contrast stitching', text:'Buttonholes and buttons stitched in the colour of your lining. Professional, with personality.', top:'43%', left:'36%' },
          { num:8, title:'Double vent', text:'Two openings rather than one, so the jacket falls cleanly over the hip.', top:'47%', left:'50%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'72%', left:'47%' },
        ] } },
    vivienne: { name:'The Vivienne', tag:"Women's · Signature", blurb:'Our signature unisex cut — effortless from the office to a soirée.', panel:'oxblood',
      front:{ src: BASE + 'vivienne-front.png', alt:'The Vivienne — black peak-lapel suit, front view.',
        hotspots:[
          { num:1, title:'Peak lapel', text:'The sharpest lapel there is. It\u00a0broadens the shoulder and narrows everything below it.', top:'21%', left:'58%' },
          { num:2, title:'Princess seams', text:'Seams that curve over the bust and draw in at the waist, so the jacket cinches for a flattering fit.', top:'27%', left:'52%' },
          { num:3, title:'Single button', text:'Fastens at the waist, so your jacket opens in a long V that lengthens your silhouette.', top:'36%', left:'49%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'66%', left:'47%' },
          { num:5, title:'Straight leg', text:'Cut to flatter more bodies than a slim leg does, especially through the calf and thigh.', top:'78%', left:'47%' },
        ] },
      back:{ src: BASE + 'vivienne-back.png', alt:'The Vivienne — black peak-lapel suit, back view.',
        hotspots:[
          { num:6, title:'Structured shoulder', text:'A defined shoulder line that squares your frame and gives structure to any body shape.', top:'22%', left:'40%' },
          { num:7, title:'Contrast stitching', text:'Buttonholes and buttons stitched in the colour of your lining. Professional, with personality.', top:'43%', left:'36%' },
          { num:8, title:'Single vent', text:'One opening at the back, so\u00a0your jacket moves with you when you sit. A clean line from behind.', top:'47%', left:'50%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'72%', left:'47%' },
        ] } },
    maggie: { name:'The Maggie', tag:"Women's · Evening", blurb:'Our feminine evening wear — romantic, cut for day and night.', panel:'green',
      front:{ src: BASE + 'maggie-front.png', alt:'The Maggie — grey notch-lapel suit, front view.',
        hotspots:[
          { num:1, title:'Rounded lapel', text:'The points are curved rather than cut sharp, for a softer line that carries into the evening.', top:'21%', left:'58%' },
          { num:2, title:'Princess seams', text:'Seams that curve over the bust and draw in at the waist, so the jacket cinches for a flattering fit.', top:'27%', left:'52%' },
          { num:3, title:'Two buttons', text:'Fastened higher, lifting your waistline and lengthening your legs.', top:'36%', left:'49%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'66%', left:'47%' },
          { num:5, title:'Straight leg', text:'Cut to flatter more bodies than a slim leg does, especially through the calf and thigh.', top:'78%', left:'47%' },
        ] },
      back:{ src: BASE + 'maggie-back.png', alt:'The Maggie — grey notch-lapel suit, back view.',
        hotspots:[
          { num:6, title:'Puffed shoulder', text:'A soft rise at the shoulder, romantic without losing the line of a suit.', top:'22%', left:'40%' },
          { num:7, title:'Contrast stitching', text:'Buttonholes and buttons stitched in the colour of your lining. Professional, with personality.', top:'43%', left:'36%' },
          { num:8, title:'Single vent', text:'One opening at the back, so\u00a0your jacket moves with you when you sit. A clean line from behind.', top:'47%', left:'50%' },
          { num:4, title:'Pintuck seam', text:'A narrow fold stitched the length of the leg, front and back, so your trouser holds its line for a\u00a0structured look.', top:'72%', left:'47%' },
        ] } },
  };

  let style = 'vivienne';
  let detail = { view:'front', idx:0 };
  const mq = matchMedia('(max-width: 860px)');
  let narrow = mq.matches;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  const buildHotspots = (view) => {
    const figure = art[view].parentElement;
    figure.querySelectorAll('.adb-hotspot').forEach(b => b.remove());
    styleData[style][view].hotspots.forEach((h, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'adb-hotspot';
      b.dataset.mk = view + '-' + i;
      b.dataset.view = view;
      b.dataset.idx = i;
      b.style.top = h.top;
      b.style.left = h.left;
      b.textContent = h.num;
      b.setAttribute('aria-label', h.title);
      const act = () => setDetail(view, i);
      b.addEventListener('mouseenter', act);
      b.addEventListener('focus', act);
      b.addEventListener('click', act);
      figure.appendChild(b);
    });
  };

  const paintHotspots = () => {
    stage.querySelectorAll('.adb-hotspot').forEach(b => {
      b.classList.toggle('is-active', b.dataset.view === detail.view && +b.dataset.idx === detail.idx);
    });
  };

  const animateLine = () => {
    if (reduce) return;
    let len;
    try { len = linePath.getTotalLength(); } catch (e) { return; }
    if (!len) return;
    linePath.style.transition = 'none';
    linePath.style.strokeDasharray = len;
    linePath.style.strokeDashoffset = len;
    linePath.getBoundingClientRect();
    linePath.style.transition = 'stroke-dashoffset .55s cubic-bezier(.4,0,.2,1)';
    linePath.style.strokeDashoffset = '0';
    [o1, o2].forEach((el, i) => {
      if (!el) return;
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.getBoundingClientRect();
      el.style.transition = 'opacity .35s ease ' + (i ? '.32s' : '.12s');
      el.style.opacity = '1';
    });
  };

  const computeLine = () => {
    if (narrow) { svg.style.display = 'none'; return; }
    svg.style.display = '';
    const mk = stage.querySelector('[data-mk="' + detail.view + '-' + detail.idx + '"]');
    if (!mk || !card) return;
    const sr = stage.getBoundingClientRect();
    const mr = mk.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    if (!sr.width || !sr.height) return;
    svg.setAttribute('viewBox', '0 0 ' + sr.width + ' ' + sr.height);
    const x1 = mr.left + mr.width / 2 - sr.left;
    const y1 = mr.top + mr.height / 2 - sr.top;
    const leftSide = x1 < sr.width / 2;
    const x2 = (leftSide ? cr.left : cr.right) - sr.left;
    const y2 = Math.min(Math.max(y1, cr.top - sr.top + 22), cr.bottom - sr.top - 22);
    const midx = leftSide ? Math.min(x2, (x1 + x2) / 2 + 26) : Math.max(x2, (x1 + x2) / 2 - 26);
    linePath.setAttribute('d', 'M ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' L ' + midx.toFixed(1) + ' ' + y1.toFixed(1) + ' L ' + x2.toFixed(1) + ' ' + y2.toFixed(1));
    o1.setAttribute('cx', x1); o1.setAttribute('cy', y1);
    o2.setAttribute('cx', x2); o2.setAttribute('cy', y2);
    animateLine();
  };

  const scheduleLine = () => requestAnimationFrame(() => requestAnimationFrame(computeLine));

  function setDetail(view, idx){
    detail = { view, idx };
    const sd = styleData[style];
    const h = sd[view].hotspots[idx];
    numEl.textContent = String(h.num).padStart(2, '0');
    metaEl.textContent = sd.name + ' · ' + (view === 'front' ? 'Front' : 'Back');
    titleEl.textContent = h.title;
    textEl.textContent = h.text;
    paintHotspots();
    scheduleLine();
  }

  const setStyle = (k) => {
    style = k;
    const sd = styleData[k];
    tagEl.textContent = sd.tag;
    nameEl.textContent = sd.name;
    blurbEl.textContent = sd.blurb;
    ['front','back'].forEach(v => {
      art[v].style.backgroundImage = "url('" + sd[v].src + "')";
      art[v].setAttribute('aria-label', sd[v].alt);
      panel[v].style.backgroundImage = "linear-gradient(rgba(250,247,241,.34), rgba(250,247,241,.34)), url('" + panelUrls[sd.panel] + "')";
      buildHotspots(v);
    });
    document.querySelectorAll('.adb-styletab').forEach(b => {
      const on = b.dataset.style === k;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on);
    });
    setDetail('front', 0);
  };

  document.querySelectorAll('.adb-styletab').forEach(b => {
    // setStyle resets the card to the front detail, so the mobile figure follows it back
    b.addEventListener('click', () => { setStyle(b.dataset.style); flipTo('front'); });
  });

  // ---- mobile: one figure at a time, swipe or tap the toggle to flip ----
  const flipWrap = document.getElementById('adb-cl-flip');
  const flipBtns = flipWrap ? Array.from(flipWrap.querySelectorAll('.adb-clflip__btn')) : [];
  const flipTo = (view) => {
    stage.classList.toggle('is-back', view === 'back');
    flipBtns.forEach(b => b.classList.toggle('is-active', b.dataset.view === view));
    setDetail(view, 0);
  };
  flipBtns.forEach(b => b.addEventListener('click', () => flipTo(b.dataset.view)));

  let figX = null;
  stage.addEventListener('touchstart', (e) => {
    if (!narrow) return;
    figX = e.touches && e.touches[0] ? e.touches[0].clientX : null;
  }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (!narrow || figX === null) return;
    const t = e.changedTouches && e.changedTouches[0];
    const dx = t ? t.clientX - figX : 0;
    figX = null;
    if (Math.abs(dx) < 40) return;
    flipTo(dx < 0 ? 'back' : 'front');
  }, { passive: true });

  mq.addEventListener('change', (e) => {
    narrow = e.matches;
    if (!narrow) { stage.classList.remove('is-back'); flipBtns.forEach((b, i) => b.classList.toggle('is-active', i === 0)); }
    computeLine();
  });
  addEventListener('resize', computeLine, { passive: true });

  setStyle('vivienne');
  setTimeout(computeLine, 400);
})();

// ---- Heritage scrollytelling (sticky stage, 4 steps: Ningbo → Shanghai → Hong Kong → Montréal) ----
(function(){
  const section = document.getElementById('heritage');
  const track = document.getElementById('heritageTrack');
  if (!section || !track) return;

  const photos = Array.from(section.querySelectorAll('.heritage__photo'));
  const stepBtns = Array.from(section.querySelectorAll('.heritage__step'));
  const glyph = document.getElementById('heritageGlyph');
  const cityEl = document.getElementById('heritageCity');
  const yearEl = document.getElementById('heritageYear');
  const copyEl = document.getElementById('heritageCopy');

  const cities = [
    { cn:'寧波', title:'Ningbo — where it begins', year:'Late 1800s',
      text:'A Qing-dynasty scholar wrote that “tailors are found everywhere, especially in Ningbo.” From this coastal city along the Fenghua River came the artisans who would master the Western suit. They earned their name from the men they dressed — Westerners the Chinese then called the “red-haired,” 紅毛 — and so became the Hongbang, the Red Band: the tailors of the red-haired foreigners.\n\nA craft learned where two worlds met.' },
    { cn:'上海', title:'Shanghai — the Bund', year:'1920s–30s',
      text:'In 1896, a Ningbo tailor opened one of Shanghai’s first suit houses; within a generation, more than four hundred lined Nanjing Road and the city’s grandest avenues. In Shanghai’s golden age, the Red Band became the master tailors of the city — structured shoulders, curved chests, hand-stitched lapels, techniques drawn from British and Russian cutters and made entirely their own. By the 1940s, they were six of every ten tailors in the city, dressing its bankers, its film stars, and its foreign houses.\n\nOur house takes its name from the Bund, the emblem of that golden age.' },
    { cn:'香港', title:'Hong Kong — carried south', year:'1949',
      text:'When the era turned, the Red Band masters carried their craft south to Hong Kong, many following the international clients they had long dressed. The Shanghai hand met the rhythm of a new city, and the lineage lived on — the same methods, the same quiet precision, carried faithfully into the present. What began on the Fenghua River, and flourished on the Bund, continues now in Montréal.\n\nThe thread was never cut; it only traveled.' },
    { cn:'蒙特利爾', title:'Montréal — a new chapter', year:'Today',
      text:'Canada has been home to Chinese people for well over 200 years. From the first workers who arrived from Canton in the 1780s to take part in the fur trade, to the labourers who built the Canadian railway in the 1880s, to the families who immigrated in the decades since. Atelier du Bund writes itself into that long story. Founded in Montréal by Zhenai Xiao, a proud Chinese Canadian, the atelier carries the Red Band’s craft into a new country and a new century.\n\nIt is time this heritage — a century and a half of Chinese tailoring — was made known to Canadians, cut for the lives they lead today: a lineage of precise, enduring craftsmanship, offered to all who wish to discover it.' },
  ];
  const counts = [2, 3, 3, 1];      // background photos per step
  const N = cities.length;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  let step = -1, tick = 0, zoomT = null;

  const paintCarousel = () => {
    const cur = counts[step] ? tick % counts[step] : 0;
    photos.forEach(img => {
      img.classList.toggle('is-active', +img.dataset.step === step && +img.dataset.idx === cur);
    });
  };

  const setStep = (next) => {
    if (next === step) return;
    step = next; tick = 0;
    section.setAttribute('data-step', step);
    const c = cities[step];
    glyph.textContent = c.cn;
    cityEl.textContent = c.title;
    yearEl.textContent = c.year;
    copyEl.textContent = c.text;
    stepBtns.forEach((b, i) => b.classList.toggle('is-active', i === step));
    paintCarousel();
    // Canada → Île de Montréal zoom, ~2.4s after entering the Montréal step
    if (zoomT) { clearTimeout(zoomT); zoomT = null; }
    section.classList.remove('is-zoomed');
    if (step === 3) {
      if (reduce) section.classList.add('is-zoomed');
      else zoomT = setTimeout(() => section.classList.add('is-zoomed'), 2400);
    }
  };

  const computeStep = () => {
    const total = track.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-track.getBoundingClientRect().top, 0), total);
    const p = total > 0 ? scrolled / total : 0;
    return Math.min(N - 1, Math.floor(p * N));
  };
  setStep(computeStep());   // set the initial step synchronously, before first paint
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; setStep(computeStep()); });
  };
  addEventListener('scroll', onScroll, {passive:true});

  if (!reduce) setInterval(() => { tick++; paintCarousel(); }, 5000);

  // stepper + clickable map dots switch the panel and map in place — no page scroll
  section.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => setStep(+btn.dataset.go));
  });
})();
