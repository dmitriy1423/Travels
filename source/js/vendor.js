import './vendor/swiper';

function initSliders() {
  const heroSlider = new Swiper('.hero__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });
}

export default initSliders;
