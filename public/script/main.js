const navMenuBtn = document.getElementById('nav-menu-btn');
const navCloseBtn = document.getElementById('nav-close-btn');
const navMenu = document.getElementById('nav-menu');

navMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu-hide');
});

navCloseBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu-hide');
});
