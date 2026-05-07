/* ===================================================================
   PHOTO BOOTH SUPPLIER — Main JavaScript
   =================================================================== */

(async function () {
  'use strict';

  // ----- Load shared HTML includes (header / footer) -----
  const placeholders = document.querySelectorAll('[data-include]');
  await Promise.all(
    Array.from(placeholders).map(async (el) => {
      try {
        const url = el.getAttribute('data-include');
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const html = await res.text();
        el.outerHTML = html;
      } catch (err) {
        console.error('Failed to load include:', el, err);
      }
    })
  );

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
      '.bento-card, .booth-card, .step, .how-step, .event-card, .addon-card, .style-card, .use-card'
    )
    .forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      reveal.observe(el);
    });
})();
