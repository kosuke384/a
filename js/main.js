"use strict";

const ham=$('#js-hamburger');
const nav=$('#js-nav');

ham.on('click',function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
})

window.addEventListener("DOMContentLoaded", () => {
  const infiniteSlider = new Swiper(".infinite-slider", {
    loop: true,
    loopedSlides: 2,
    slidesPerView: "auto",
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});