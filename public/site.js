// Uoink — site-wide JS behaviors
// Mobile nav, year stamp, simple in-view triggers.
(function () {
  // mobile nav toggle
  function setupNav() {
    var burger = document.querySelector('[data-nav-burger]');
    var menu   = document.querySelector('[data-mobile-menu]');
    var close  = menu ? menu.querySelector('[data-nav-close]') : null;
    if (!burger || !menu) return;
    burger.addEventListener('click', function () {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    if (close) close.addEventListener('click', function () {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  // year stamp
  function stampYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }
  // animate corpus lines on load
  function animateCorpus() {
    document.querySelectorAll('[data-corpus-animate] .ln').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(function () {
        el.style.opacity = '';
        el.style.transform = '';
      }, 240 + i * 90);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setupNav(); stampYear(); animateCorpus();
    });
  } else {
    setupNav(); stampYear(); animateCorpus();
  }
})();
