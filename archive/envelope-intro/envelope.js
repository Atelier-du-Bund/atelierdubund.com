/* ============================================================
   ARCHIVED — Invitation / Envelope intro script (not loaded live)
   Paste back inside the main <script> in index.html (before the
   "Header background on scroll" block). See README.md.
   ============================================================ */

// ----- The Invitation: flip-open envelope entry -----
(function(){
  const inv = document.getElementById('invitation');
  if(!inv) return;
  const enterBtn = document.getElementById('enterBtn');
  const skipBtn = document.getElementById('envSkip');
  const replayBtn = document.getElementById('replayInvitation');
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timers = [];
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  const seen = (() => { try { return sessionStorage.getItem('adb_entered') === '1'; } catch(e){ return false; } })();
  const forced = /[?&]invitation\b/.test(location.search) || location.hash === '#invitation';

  function show(){
    clearTimers();
    inv.hidden = false;
    inv.classList.remove('invitation--gone', 'is-flipping', 'is-open');
    document.body.classList.add('inv-lock');
    requestAnimationFrame(() => enterBtn.focus());
  }

  function dismiss(){
    try { sessionStorage.setItem('adb_entered', '1'); } catch(e){}
    document.body.classList.remove('inv-lock');
  }

  // full sequence: turn around → open the flap → dissolve into the site
  function enter(){
    if(inv.hidden || inv.classList.contains('is-flipping')) return;
    dismiss();
    if(reduce()){
      inv.classList.add('invitation--gone');
      timers.push(setTimeout(() => { inv.hidden = true; }, 300));
      return;
    }
    inv.classList.add('is-flipping');                                           // 1) turn around
    timers.push(setTimeout(() => inv.classList.add('is-open'), 1000));          // 2) open from the fold
    timers.push(setTimeout(() => inv.classList.add('invitation--gone'), 2050)); // 3) dissolve into the site
    timers.push(setTimeout(() => { inv.hidden = true; }, 3050));
  }

  // skip straight in (also the reduced-motion / no-patience path)
  function skip(){
    if(inv.hidden) return;
    clearTimers();
    dismiss();
    inv.classList.add('invitation--gone');
    timers.push(setTimeout(() => { inv.hidden = true; }, reduce() ? 200 : 650));
  }

  enterBtn.addEventListener('click', enter);
  if(skipBtn) skipBtn.addEventListener('click', skip);
  inv.addEventListener('keydown', e => {
    if(e.key === 'Escape'){ e.preventDefault(); skip(); }
    else if((e.key === 'Enter' || e.key === ' ') && e.target === enterBtn){ e.preventDefault(); enter(); }
  });
  if(replayBtn) replayBtn.addEventListener('click', () => { show(); window.scrollTo({top:0, behavior: reduce() ? 'auto' : 'smooth'}); });

  if(seen && !forced){ inv.hidden = true; }
  else { show(); }
})();
