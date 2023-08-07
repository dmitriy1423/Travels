import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import initSliders from './vendor';
import './modules/mobile-menu/locomotive-scroll';
import {Burger} from './modules/mobile-menu/burger';
import {initLocomotiveScroll} from './modules/mobile-menu/init-locomotive-scroll';
import initVideo from './modules/video/video';
import initAudio from './modules/audio/audio';
import initLeaflet from './modules/map/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initLocomotiveScroll();
    const form = new Form();
    window.form = form;
    form.init();
    const burger = new Burger();
    burger.init();
  });

  const formWrapper = document.querySelector('.form__wrapper');
  if (formWrapper) {
    formWrapper.addEventListener('submit', () => {
      window.form.validateForm(formWrapper);
    });
  }

  initVideo();
  initSliders();
  initAudio();
  initLeaflet();
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
