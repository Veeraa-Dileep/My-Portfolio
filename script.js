// Small JS to control nav, theme, modal and contact form

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalLink = document.getElementById('modal-link');
  const year = document.getElementById('cur-year');
  year.textContent = new Date().getFullYear();

  // NAV TOGGLE (mobile)
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });

  // THEME TOGGLE
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark' ? false : true));
  });

  // PROJECT MODAL - open when clicking any .btn-details
  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;
      const title = card.dataset.title || 'Project';
      const desc = card.dataset.desc || '';
      const tags = card.dataset.tags || '';
      const link = card.dataset.link || '#';
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalTags.textContent = tags;
      modalLink.href = link;
      openModal();
    });
  });

  // open/close modal helpers
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

  // CONTACT FORM (simple local validation + faux submit)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    if (!name || !email || !message) {
      status.hidden = false;
      status.textContent = 'Please fill in all fields.';
      return;
    }
    // Simulate send
    status.hidden = false;
    status.textContent = 'Thanks — your message was received (demo). I will reply soon.';
    form.reset();
  });

  // Smooth scroll for internal links (extra safety)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
      // close mobile nav when clicking link
      if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
    });
  });
});
