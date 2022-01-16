import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import timer from './modules/forms';
import slider from './modules/slider';
import forms from './modules/forms';
import calc from './modules/calc';
import {openModal} from './modules/modal';


document.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 50000);

  tabs();
  modal("[data-modal]", ".modal", modalTimerId);
  timer();
  cards();
  calc();
  forms("form", modalTimerId);
  slider();
});