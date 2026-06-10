/* ===================================================================
   PHOTO BOOTH SUPPLIER — Main JavaScript
   =================================================================== */

(async function () {
  'use strict';

  // ----- Load shared HTML includes (header / footer) -----
  const placeholders = document.querySelectorAll('[data-include]');
  await Promise.all(
    Array.from(placeholders).map(async (el) => {
      const url = el.getAttribute('data-include');
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const html = await res.text();
        el.outerHTML = html;
      } catch (err) {
        // Fallback for file:// viewing where fetch() is blocked (js/includes.js)
        if (window.SITE_INCLUDES && window.SITE_INCLUDES[url]) {
          el.outerHTML = window.SITE_INCLUDES[url];
        } else {
          console.error('Failed to load include:', el, err);
        }
      }
    })
  );

  // ----- Transparent nav at top → solid after scroll -----
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Mark current page in navigation (active state) -----
  const path = location.pathname.split('/').pop() || 'index.html';
  if (path === 'ai-studio.html') {
    const aiLink = document.querySelector('.ai-link');
    if (aiLink) aiLink.classList.add('active');
  }

  // ----- Subtle parallax effect on hero orb -----
  const orb = document.querySelector('.hero-orb, .hero-orb-ai');
  if (orb) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orb.style.transform = `translate(${x}px,${y}px)`;
    });
  }

  // ----- Booth tab switching (homepage) -----
  const boothTabs = document.querySelectorAll('.booth-tab');
  if (boothTabs.length) {
    boothTabs.forEach((t) => {
      t.addEventListener('click', () => {
        boothTabs.forEach((x) => x.classList.remove('active'));
        t.classList.add('active');
      });
    });
  }

  // ----- Reveal-on-scroll fade-up animation -----
  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.style.opacity = 1;
          en.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(
      '.bento-card, .booth-card, .step, .how-step, .event-card, .addon-card, .style-card, .use-card, .stat-big'
    )
    .forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      reveal.observe(el);
    });

  // ----- Events spotlight — expanding panels with auto-rotate -----
  const spotlight = document.getElementById('events-spotlight');
  if (spotlight) {
    const panels = Array.from(spotlight.querySelectorAll('.event-panel'));
    let idx = Math.max(0, panels.findIndex((p) => p.classList.contains('active')));
    let timer = null;
    const setActive = (i) => {
      idx = i;
      panels.forEach((p, j) => p.classList.toggle('active', j === i));
    };
    const start = () => {
      stop();
      timer = setInterval(() => setActive((idx + 1) % panels.length), 3200);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    panels.forEach((p, i) => {
      p.addEventListener('mouseenter', () => {
        stop();
        setActive(i);
      });
      p.addEventListener('click', () => setActive(i));
    });
    spotlight.addEventListener('mouseleave', start);
    start();
  }

  // ----- Stats band count-up animation -----
  const counters = document.querySelectorAll('.count[data-count]');
  if (counters.length) {
    const fmt = new Intl.NumberFormat('en-US');
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          counterObs.unobserve(el);
          const target = parseInt(el.dataset.count, 10);
          const dur = 1800;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            el.textContent = fmt.format(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => counterObs.observe(c));
  }
})();
