document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalLink = document.getElementById('modal-link');
  const year = document.getElementById('cur-year');
  year.textContent = new Date().getFullYear();

  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;
      modalTitle.textContent = card.dataset.title || 'Project';
      modalDesc.textContent = card.dataset.desc || '';
      modalTags.textContent = card.dataset.tags || '';
      modalLink.href = card.dataset.link || '#';
      openModal();
    });
  });

  function openModal(){
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    setTimeout(() => modal.querySelector('.modal-panel')?.focus?.(), 50);
  }
  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  }
  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') closeModal();
  });

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
      if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
    });
  });

  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {

    gsap.set(".hero-left > *", { autoAlpha: 0, y: 30 });
    gsap.set("#hero-image", { autoAlpha: 0, scale: 0.95 });
    gsap.set(".site-header", { y: -20, autoAlpha: 0 });

    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    heroTl.to(".site-header", { y: 0, autoAlpha: 1, duration: 0.6 }, 0)
      .to(".hero-left .eyebrow", { autoAlpha: 1, y: 0 }, "-=0.3")
      .to(".hero-left h2", { autoAlpha: 1, y: 0 }, "-=0.4")
      .to(".hero-left .lead", { autoAlpha: 1, y: 0 }, "-=0.3")
      .to(".hero-cta", { autoAlpha: 1, y: 0 }, "-=0.3")
      .to("#hero-image", { autoAlpha: 1, scale: 1 }, "-=0.5");

    gsap.utils.toArray(".section").forEach(section => {

      const heading = section.querySelector("h2");
      if (heading) {
        gsap.from(heading, {
          autoAlpha: 0, y: 20, duration: 0.6, ease: "power3.out",
          scrollTrigger: {
            trigger: section, start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

      const subtitle = section.querySelector(".muted");
      if (subtitle) {
        gsap.from(subtitle, {
          autoAlpha: 0, y: 15, duration: 0.5, ease: "power3.out",
          scrollTrigger: {
            trigger: section, start: "top 82%",
            toggleActions: "play none none reverse"
          }
        });
      }

      const cards = section.querySelectorAll(
        ".skills-card, .project-card, .cert, .edu-card, .contact-card, .initiative-card"
      );
      if (cards.length) {
        gsap.from(cards, {
          autoAlpha: 0, y: 30, duration: 0.7, ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cards.length > 1 ? cards[0] : section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

      const bullets = section.querySelectorAll(".experience-bullets li");
      if (bullets.length) {
        gsap.from(bullets, {
          autoAlpha: 0, y: 15, duration: 0.5, ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: bullets[0], start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    gsap.from(".site-footer", {
      autoAlpha: 0, y: 20, duration: 0.6, ease: "power3.out",
      scrollTrigger: {
        trigger: ".site-footer", start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });

    ScrollTrigger.refresh();
  });
});
