(function() {
  'use strict';

  // ---------- Header scroll state ----------
  const header = document.querySelector('.site-header');
  const setHeaderState = () => {
    if (!header) return;
    if (header.classList.contains('always-solid')) return;
    header.classList.toggle('solid', window.scrollY > 40);
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  // ---------- Mobile menu ----------
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => menu.classList.add('open'));
    menu.addEventListener('click', (e) => {
      if (e.target.classList.contains('close') || e.target.tagName === 'A') {
        menu.classList.remove('open');
      }
    });
  }

  // ---------- Scroll reveal ----------
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  // ---------- Booking form ----------
  const form = document.getElementById('enquiry-form');
  const modal = document.getElementById('success-modal');
  if (form && modal) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic validation
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach(f => {
        if (!f.value.trim()) {
          f.style.borderColor = '#b3261e';
          valid = false;
        } else {
          f.style.borderColor = '';
        }
      });
      if (!valid) return;

      // Date sanity check
      const ci = form.querySelector('input[name=checkIn]').value;
      const co = form.querySelector('input[name=checkOut]').value;
      if (ci && co && new Date(co) <= new Date(ci)) {
        alert('Check-out must be after check-in.');
        return;
      }

      // TODO: wire this up to a real backend (Formspree, Netlify Forms, EmailJS, etc.)
      // For now, show success modal.
      console.log('Enquiry submitted:', Object.fromEntries(new FormData(form)));
      modal.classList.add('open');
      form.reset();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  // ---------- Auto footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
