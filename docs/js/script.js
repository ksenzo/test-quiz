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


document.addEventListener('DOMContentLoaded' , function () {
   const form = document.getElementById('form');
   const erorrText = document.query
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();
      let erorr = formValidate(form);

      if (erorr === 0) {
         //отправка формы
      } else {
         alert('введите email в формате ____@.com/net/ua/ru, введите номер телефона в формате своей страны!');
      }

      function formValidate(form) {
         let erorr = 0;
         let formReq = document.querySelectorAll('._req');

         for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveErorr(input);

            if (input.classList.contains('__email')) {
               if (emailTest(input)) {
                  formAddErorr(input);
                  erorr++;
               }
            } else {
               if (input.value === '') {
                  formAddErorr(input);
                  erorr++;
               }
            }

            if (input.classList.contains('__phone')) {
               if (phonetest(input)) {
                  formAddErorr(input);
                  erorr++;
               }
            } else {
               if (input.value === '') {
                  formAddErorr(input);
                  erorr++;
               }
            }
         }
         return erorr;
      }

      function formAddErorr(input) {
         input.parentElement.classList.add('__erorr');
         input.classList.add('__erorr');
         
      }
      function formRemoveErorr(input) {
         input.parentElement.classList.remove('__erorr');
         input.classList.remove('__erorr');
      }

      function emailTest(input) {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      }

      function phonetest(input) {
         return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
      }
   }
});


