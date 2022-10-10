const bars = document.querySelector('.bars');
const crossIcon = document.querySelector('.cross_icon');
const navLinks = document.querySelectorAll('.nav_links');
const mobileMenu = document.querySelector('.mobile_menu');
bars.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
crossIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('hide');
  });
});