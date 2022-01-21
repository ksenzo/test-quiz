let fixedHeader = document.querySelector('.header');
let openMenuBurger = document.querySelector('.header__btn-mobile');
let menuMobile = document.querySelector('.menu-mobile');
let openMenuBurgerSpan = document.querySelector('.header__span');


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header');
   if (window.pageYOffset > 0) {
      fixedHeader.classList.add('__active');
   } else {
      fixedHeader.classList.remove('__active');
   }
};

function menuBurger() {
   menuMobile.classList.toggle('__active');
   openMenuBurgerSpan.classList.toggle('__active');
   openMenuBurger.classList.toggle('__active');
}

openMenuBurger.addEventListener('click', () => menuBurger());