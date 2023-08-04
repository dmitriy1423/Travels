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
      },
    },
    navigation: {
      nextEl: '.next-tours__slider-next',
      prevEl: '.next-tours__slider-prev',
    },
  });

  const trainingSlider = new Swiper('.training__slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.training__slider-next',
      prevEl: '.training__slider-prev',
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 1.4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.28,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.65,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
  });
}

export default initSliders;
