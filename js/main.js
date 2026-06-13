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

  // ----- Events marquee — duplicate cards for a seamless infinite scroll -----
  const eventsTrack = document.getElementById('events-track');
  if (eventsTrack && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    eventsTrack.innerHTML += eventsTrack.innerHTML; // second identical copy
    eventsTrack.querySelectorAll(':scope > *:nth-child(n+8)')
      .forEach((el) => el.setAttribute('aria-hidden', 'true'));
  }

  // ----- Mega-menu live preview pane -----
  const megaFeature = document.getElementById('megaFeature');
  if (megaFeature) {
    const featImg = document.getElementById('featImg');
    const featTag = document.getElementById('featTag');
    const featTitle = document.getElementById('featTitle');
    const featDesc = document.getElementById('featDesc');
    const featCta = document.getElementById('featCta');
    const def = { ...megaFeature.dataset };
    const links = Array.from(document.querySelectorAll('.dropdown-mega-col a[data-img]'));

    [def.defaultImg, ...links.map((a) => a.getAttribute('data-img'))].forEach((src) => {
      if (src) { const i = new Image(); i.src = src; }
    });

    const showImg = (src) => {
      if (featImg.getAttribute('src') === src) return;
      featImg.style.opacity = '0';
      featImg.onload = () => { featImg.style.opacity = '1'; };
      featImg.src = src;
      if (featImg.complete) featImg.style.opacity = '1';
    };

    const preview = (a) => {
      megaFeature.classList.remove('is-flagship');
      showImg(a.getAttribute('data-img'));
      featTag.innerHTML = 'In our lineup';
      featTitle.textContent = a.textContent.trim();
      featDesc.textContent = a.getAttribute('data-desc') || '';
      featCta.innerHTML = 'View booth <span>→</span>';
      megaFeature.setAttribute('href', a.getAttribute('href'));
    };

    const restore = () => {
      megaFeature.classList.add('is-flagship');
      showImg(def.defaultImg);
      featTag.innerHTML = '<span class="feat-dot"></span> ' + (def.defaultTag || '').replace(/^✨\s*/, '');
      featTitle.textContent = def.defaultTitle || '';
      featDesc.textContent = def.defaultDesc || '';
      featCta.innerHTML = (def.defaultCta || 'Explore') + ' <span>→</span>';
      megaFeature.setAttribute('href', def.defaultHref || '#');
    };

    let resetTimer = null;
    links.forEach((a) => {
      a.addEventListener('mouseenter', () => { clearTimeout(resetTimer); preview(a); });
    });
    const mega = megaFeature.closest('.dropdown-mega');
    if (mega) {
      mega.addEventListener('mouseleave', () => { resetTimer = setTimeout(restore, 120); });
      mega.addEventListener('mouseenter', () => clearTimeout(resetTimer));
    }
  }

  // ----- Mobile drawer (hamburger menu) -----
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('mobileDrawer');
  if (burger && drawer) {
    const closeBtn = document.getElementById('mdClose');
    const backdrop = document.getElementById('mdBackdrop');
    let closeTimer = null;
    const openDrawer = () => {
      clearTimeout(closeTimer);
      drawer.classList.add('show');   // display:block — layer exists only while open
      void drawer.offsetWidth;        // reflow so the slide-in transition runs
      drawer.classList.add('open');
      document.body.classList.add('drawer-open');
      burger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    };
    const closeDrawer = () => {
      drawer.classList.remove('open');
      document.body.classList.remove('drawer-open');
      burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      closeTimer = setTimeout(() => {
        if (!drawer.classList.contains('open')) drawer.classList.remove('show');
      }, 420);
    };
    burger.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
    drawer.querySelectorAll('.md-acc-head').forEach((head) => {
      head.addEventListener('click', () => {
        const acc = head.parentElement;
        const isOpen = acc.classList.toggle('open');
        head.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
    drawer.querySelectorAll('a[href]').forEach((a) => {
      a.addEventListener('click', closeDrawer);
    });
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
