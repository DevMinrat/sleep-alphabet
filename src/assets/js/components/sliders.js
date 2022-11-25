let prodSliderThumbs = new Swiper(".product-slider__thumb", {
  slidesPerView: 3,
  slideToClickedSlide: true,
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    500: {
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".slider-btn-next",
    prevEl: ".slider-btn-prev",
  },
});

let prodSliderMain = new Swiper(".product-slider__main", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: "auto",
  thumbs: {
    swiper: prodSliderThumbs,
  },
});
