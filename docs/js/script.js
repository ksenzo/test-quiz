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



const swiper = new Swiper('.steps__slider', {
   spaceBetween: 25,
   slidesPerView: 'auto',
   navigation: {
      nextEl: '.steps__step-button-next',
      prevEl: '.steps__step-button-prev',
   },
});

let limitFunc = function(){
   if (window.innerWidth < 768){
      document.querySelector('.shops__swiper').classList.add('swiper');
      document.querySelector('.shops__cards').classList.add('swiper-wrapper');
      document.querySelector('.shops__column1').classList.add('swiper-slide');
      document.querySelector('.shops__column2').classList.add('swiper-slide');
      const swiperTwo = new Swiper('.shops__swiper', {
         spaceBetween: 25,
         slidesPerView: 'auto',
      });
      
   } else if (window.innerWidth > 768) {
      document.querySelector('.shops__swiper').classList.remove('swiper');
      document.querySelector('.shops__cards').classList.remove('swiper-wrapper');
      document.querySelector('.shops__column1').classList.remove('swiper-slide');
      document.querySelector('.shops__column2').classList.remove('swiper-slide');
   }
   
};


window.addEventListener("resize", limitFunc);

window.addEventListener("onload", limitFunc);