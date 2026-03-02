const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const yearEl = document.getElementById('year');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
