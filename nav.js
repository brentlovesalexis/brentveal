// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  // Close on link click
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Header scroll effect (home page)
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.background = 'rgba(10,10,10,0.97)';
  } else {
    const isHome = document.querySelector('.hero');
    if (isHome) header.style.background = 'transparent';
  }
}, { passive: true });

// Init: transparent on home
if (document.querySelector('.hero')) {
  header.style.background = 'transparent';
  header.style.borderBottomColor = 'transparent';
  window.addEventListener('scroll', () => {
    header.style.borderBottomColor = window.scrollY > 60 ? 'var(--color-border)' : 'transparent';
  }, { passive: true });
}
