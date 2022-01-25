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
   downBtn[i].addEventListener("click", function () {
      downBtn[i].classList.toggle("__active");
      addText[i].classList.toggle("__active");
      serviceStatus[i].classList.toggle("__active");
   });
}



const swiper = new Swiper('.steps__slider', {
   spaceBetween: 25,
   slidesPerView: 'auto',
   navigation: {
      nextEl: '.steps__step-button-next',
      prevEl: '.steps__step-button-prev',
   },
});


const swiperTwo = new Swiper('.shops__swiper', {
   slidesPerView: 'auto',
   navigation: {
      nextEl: '.shops__step-button-next',
      prevEl: '.shops__step-button-prev',
   },
});
