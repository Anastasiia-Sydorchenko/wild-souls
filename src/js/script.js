import $ from 'jquery'
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

//PRODUCTS SLIDER
const productsSlider = new Swiper('#products-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  lazyLoading: true,
  speed: 1000,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    1800: {
      slidesPerView: 4.5,
    }
  }
});

//PROCESS SLIDER
const processSlider = new Swiper('#process-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 240,
  lazyLoading: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//RECIPES SLIDER
const recipesSlider = new Swiper('#recipes-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  lazyLoading: true,
  speed: 1000,
});

//SCROLL DOWN BTN
$(function () {
  $('.scroll-down-btn').click(function () {
    $('html, body').animate({ scrollTop: $('#notice-section').offset().top }, 'slow');
    return false;
  });
});

//COOKIES BTN
let cookiesBlock = document.querySelector('.intro__cookies');
let cookiesButton = document.querySelector('.intro__cookies-btn');

cookiesButton.onclick = function () {
  cookiesBlock.style.display = 'none';
}

//TREASURES COUNTER RUNNING
let counterBlock = document.querySelector('.nuts-list__block');

$(window).scroll(function() {
  var top_of_element = $(counterBlock).offset().top;
  var bottom_of_element = $(counterBlock).offset().top + $(counterBlock).outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    $('.nuts-list__item-counter').each(function() {
      var $this = $(this),
      countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
        duration: 2000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });  
    });
  };
});



// $('.nuts-list__item-counter').each(function() {
//   var $this = $(this),
//   countTo = $this.attr('data-count');
  
//   $({ countNum: $this.text()}).animate({
//     countNum: countTo
//   },

//   {
//     duration: 8000,
//     easing:'linear',
//     step: function() {
//       $this.text(Math.floor(this.countNum));
//     },
//     complete: function() {
//       $this.text(this.countNum);
//     }
//   });  
// });

//100VH MOBILE FIX
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});