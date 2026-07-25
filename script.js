// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
});
