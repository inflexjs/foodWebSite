document.addEventListener("DOMContentLoaded", () => {
  const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    cards = require('./modules/cards'),
    timer = require('./modules/timer'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider'),
    calc = require('./modules/calc');

  tabs();
  modal();
  cards();
  timer();
  forms();
  slider();
  calc();
});