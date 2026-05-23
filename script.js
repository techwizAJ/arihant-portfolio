/* ============================================
   Portfolio Interactions
   ============================================ */

// ---- Hamburger Menu ----
function toggleMenu() {
  var icon = document.getElementById('hamburger-icon');
  var overlay = document.getElementById('mobile-overlay');
  icon.classList.toggle('open');
  overlay.classList.toggle('open');

  // Update aria-expanded for accessibility
  var isOpen = overlay.classList.contains('open');
  icon.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  // Prevent body scroll when menu is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// ---- Sticky Nav Scroll Listener ----
(function () {
  var nav = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
})();

// ---- Smooth Scroll for Nav Links (with nav offset) ----
(function () {
  var NAV_HEIGHT = 80;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
        window.scrollTo({ top: top, behavior: 'smooth' });
        // Update URL hash without triggering scroll
        history.pushState(null, null, targetId);
      }
    });
  });
})();

// ---- Intersection Observer for Fade-In ----
(function () {
  var faders = document.querySelectorAll('.fade-in');
  if (!faders.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  faders.forEach(function (el) {
    observer.observe(el);
  });
})();

// ---- Card Glow Effect (mouse tracking) ----
(function () {
  var cards = document.querySelectorAll('.about__card, .skills__group, .project-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
    });
  });
})();
