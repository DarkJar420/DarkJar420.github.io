// =====================================================
// NeonQuarter — shared.js
// Shared utilities used by ALL games
// =====================================================

const NQ = (function() {

  const AC = new (window.AudioContext || window.webkitAudioContext)();

  // ── AUDIO ──
  function beep(freq, dur, type, vol) {
    try {
      const o = AC.createOscillator();
      const g = AC.createGain();
      o.connect(g); g.connect(AC.destination);
      o.type = type || 'square';
      o.frequency.value = freq;
      g.gain.setValueAtTime(vol || 0.08, AC.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + dur);
      o.start(); o.stop(AC.currentTime + dur);
    } catch(e) {}
  }

  const sounds = {
    bounce:  () => beep(440, 0.05, 'square',   0.08),
    shoot:   () => beep(600, 0.07, 'square',   0.09),
    eat:     () => beep(700, 0.03, 'sine',     0.06),
    power:   () => { beep(880, 0.06, 'sine', 0.12); setTimeout(() => beep(1100, 0.1, 'sine', 0.12), 70); },
    die:     () => [300,220,150,100].forEach((f,i) => setTimeout(() => beep(f, 0.1, 'sawtooth', 0.12), i*80)),
    win:     () => [523,659,784,1047].forEach((f,i) => setTimeout(() => beep(f, 0.1, 'sine', 0.1), i*80)),
    score:   () => beep(500, 0.08, 'sine',     0.1),
    blip:    () => beep(300, 0.05, 'square',   0.07),
    explode: () => { beep(150, 0.2, 'sawtooth', 0.15); setTimeout(() => beep(80, 0.15, 'sawtooth', 0.1), 80); },
  };

  // ── CURSOR ──
  function initCursor() {
    const cur = document.createElement('div');
    cur.id = 'nq-cursor';
    cur.style.cssText = `
      position:fixed; width:18px; height:18px;
      border:2px solid #ffb000; border-radius:50%;
      pointer-events:none; z-index:9999;
      transform:translate(-50%,-50%);
      transition:transform 0.08s, background 0.1s;
      mix-blend-mode:screen;
      box-shadow:0 0 8px #ffb000;
    `;
    document.body.appendChild(cur);
    document.addEventListener('mousemove', e => {
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
    });
    document.addEventListener('mousedown', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(0.5)';
      cur.style.background = '#ffb000';
    });
    document.addEventListener('mouseup', () => {
      cur.style.transform = 'translate(-50%,-50%)';
      cur.style.background = 'transparent';
    });
  }

  // ── BACK BUTTON ──
  function initBackButton() {
    const btn = document.createElement('a');
    btn.href = '/index.html';
    btn.textContent = '← ARCADE';
    btn.style.cssText = `
      position:fixed; top:0.6rem; left:1.2rem;
      font-family:'VT323',monospace; font-size:1rem;
      color:#ffb000; text-decoration:none;
      letter-spacing:2px; z-index:200;
      text-shadow:0 0 8px #ffb000;
      transition:color 0.2s;
    `;
    btn.addEventListener('mouseenter', () => btn.style.color = '#00ff41');
    btn.addEventListener('mouseleave', () => btn.style.color = '#ffb000');
    document.body.appendChild(btn);
  }

  // ── CRT OVERLAY ──
  function initCRT() {
    const scanlines = document.createElement('div');
    scanlines.style.cssText = `
      position:fixed; inset:0; pointer-events:none; z-index:1000;
      background:repeating-linear-gradient(
        to bottom,
        transparent 0px, transparent 3px,
        rgba(0,0,0,0.28) 3px, rgba(0,0,0,0.28) 4px
      );
    `;
    const vignette = document.createElement('div');
    vignette.style.cssText = `
      position:fixed; inset:0; pointer-events:none; z-index:999;
      background:radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.8) 100%);
    `;
    document.body.appendChild(scanlines);
    document.body.appendChild(vignette);
  }

  // ── INIT ALL ──
  function init() {
    initCRT();
    initCursor();
    initBackButton();
    document.addEventListener('keydown', () => AC.resume(), { once: true });
    document.addEventListener('click',   () => AC.resume(), { once: true });
  }

  return { sounds, init, AC };

})();
