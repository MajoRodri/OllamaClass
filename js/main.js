/* ============================================================
   STARK OS — Protocolo Ollama — Interactividad
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── HAMBURGER MENU ───────────────────────────────────────
  const hamBtn = document.getElementById('hamBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamBtn && navLinks) {
    hamBtn.addEventListener('click', () => navLinks.classList.toggle('mob'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('mob'))
    );
  }

  // ─── ACCORDION ────────────────────────────────────────────
  window.toggleAcc = function(id) {
    const item = document.getElementById(id);
    if (!item) return;
    const body  = item.querySelector('.acc-body');
    const inner = item.querySelector('.acc-inner');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.acc-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.acc-body').style.maxHeight = '0';
    });

    // Open the clicked one if it was closed
    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = (inner.scrollHeight + 48) + 'px';
    }
  };

  // ─── COPY TO CLIPBOARD ────────────────────────────────────
  window.copyCode = function(btn) {
    const block = btn.closest('.term-block');
    if (!block) return;
    const code = block.querySelector('pre code');
    const text = code ? (code.innerText || code.textContent) : '';

    const apply = () => {
      btn.textContent = '✓ Copiado';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(apply).catch(() => fallback(text, apply));
    } else {
      fallback(text, apply);
    }
  };

  function fallback(text, cb) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); cb(); } catch(e) {}
    document.body.removeChild(ta);
  }

  // ─── SCROLL REVEAL ────────────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });

  document.querySelectorAll('.anim-up').forEach(el => observer.observe(el));

  // ─── ACTIVE NAV HIGHLIGHT ─────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');

  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navAs.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => navObs.observe(s));

  // ─── HERO TERMINAL LINES FADE-IN ─────────────────────────
  document.querySelectorAll('.tline').forEach((line, i) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.transition = 'opacity .4s';
      line.style.opacity = '1';
    }, 2800 + i * 380);
  });

});
