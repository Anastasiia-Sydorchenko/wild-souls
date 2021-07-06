// Import jQuery module (npm i jquery)
import $ from 'jquery'

// import Swiper JS
import Swiper from 'swiper';

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

//PRODUCTS SLIDER
const productsSlider = new Swiper('#products-slider', {
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 60,
  lazyLoading: true,
  speed: 1000,
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


//100VH MOBILE FIX
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});