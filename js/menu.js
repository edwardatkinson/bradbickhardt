const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}