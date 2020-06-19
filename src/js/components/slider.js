import Swiper from 'swiper'

export const mySwiper = new Swiper(`.js-reviews-slider`, {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: `.js-reviews-slider-btn-next`,
    prevEl: `.js-reviews-slider-btn-prev`,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    // when window width is >= 780px
    780: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})