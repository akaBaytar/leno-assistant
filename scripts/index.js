const navbar = document.querySelector('.navbar');
const navbarBackground = document.querySelector('.navbar__background');

const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
const toggleIcon = document.querySelector('.navbar__mobile-menu-toggle i');

const modal = document.querySelector('#video-modal');
const playButton = document.querySelector('.preview__video-button');
const videoPlayer = document.querySelector('#video-player');

const date = document.querySelector('#date')

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  toggleIcon.classList.toggle('fa-xmark');
  navbarBackground.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  scrollY > 75
    ? navbar.classList.add('scroll')
    : navbar.classList.remove('scroll');
});

playButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  videoPlayer.src = 'https://www.youtube.com/embed/Cw_tQXh6X34';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    videoPlayer.src = '';
  }
});

date.innerText = new Date().getFullYear()