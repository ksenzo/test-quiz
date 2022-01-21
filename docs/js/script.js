let fixedHeader = document.querySelector('.header');
let openMenuBurger = document.querySelector('.header__btn-mobile');
let menuMobile = document.querySelector('.menu-mobile');
let openMenuBurgerSpan = document.querySelector('.header__span');
let downBtn = document.querySelectorAll('.services__down-vector');
let addText = document.querySelectorAll('.services__service-addtext');
let serviceStatus = document.querySelectorAll('.services__status');

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


for (let i = 0; i < downBtn.length; i++) {
   downBtn[i].addEventListener("click", function() {
      downBtn[i].classList.toggle("__active");
      addText[i].classList.toggle("__active");
      serviceStatus[i].classList.toggle("__active");
   });
}