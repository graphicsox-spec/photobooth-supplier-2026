/* ===================================================================
   PHOTO BOOTH SUPPLIER — Main JavaScript
   =================================================================== */

(function () {
  'use strict';

  // Subtle parallax effect on hero orb (homepage + AI studio page)
  const orb = document.querySelector('.hero-orb, .hero-orb-ai');
  if (orb) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orb.style.transform = `translate(${x}px,${y}px)`;
    });
  }

  // Booth tab switching (homepage)
  const boothTabs = document.querySelectorAll('.booth-tab');
  if (boothTabs.length) {
    boothTabs.forEach((t) => {
      t.addEventListener('click', () => {
        boothTabs.forEach((x) => x.classList.remove('active'));
        t.classList.add('active');
      });
    });
  }

  // Reveal-on-scroll fade-up animation for cards
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
