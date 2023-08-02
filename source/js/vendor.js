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

  const nextToursSlider = new Swiper('.next-tours__slider', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: '.next-tours__slider-next',
      prevEl: '.next-tours__slider-prev',
    },
  });
}

export default initSliders;
