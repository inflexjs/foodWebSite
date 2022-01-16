/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
	// Calc
	const result = document.querySelector(".calculating__result span");

	let sex, height, weight, age, ratio;

	function initLocalSettings() {
		if (localStorage.getItem('sex')) {
			sex = localStorage.getItem('sex');
		} else {
			sex = 'female';
			localStorage.setItem('sex', 'female');
		}

		if (localStorage.getItem('ratio')) {
			ratio = localStorage.getItem('ratio');
		} else {
			ratio = 'female';
			localStorage.setItem('ratio', 1.375);
		}
	}

	function setLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.classList.remove(activeClass);

			if (elem.getAttribute('id') == localStorage.getItem('sex')) {
				elem.classList.add(activeClass);
			}

			if (elem.getAttribute('data-ratio') == localStorage.getItem('ratio')) {
				elem.classList.add(activeClass);
			}
		});
	}

	function calcTotal() {
		if (!sex || !height || !weight || !age || !ratio) {
			result.textContent = "0";
			return;
		}

		if (sex === "female") {
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}

	function getStaticInfo(selector, activeClass) {
		const elements = document.querySelectorAll(`${selector}`);

		elements.forEach(elem => {
			elem.addEventListener("click", (e) => {
				if (e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio');
					localStorage.setItem('ratio', ratio);
				} else {
					sex = e.target.getAttribute('id');
					localStorage.setItem('sex', sex);
				}

				elements.forEach(elem => {
					elem.classList.remove(activeClass);
				});

				e.target.classList.add(activeClass);

				calcTotal();
			});
		});
	}

	function getDynamicInfo(selector) {
		const input = document.querySelector(selector);

		input.addEventListener("input", () => {

			if (input.value.match(/\D/g)) {
				input.style.border = '1px solid red';

			} else {
				input.style.border = 'none';
			}

			switch (input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}

			calcTotal();
		});
	}

	initLocalSettings();

	setLocalSettings('#gender div', 'calculating__choose-item_active');
	setLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

	calcTotal();

	getStaticInfo('#gender div', 'calculating__choose-item_active');
	getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

	getDynamicInfo('#height');
	getDynamicInfo('#weight');
	getDynamicInfo('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
	// Card template
	class CardMenu {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.chanceToUAH();
		}

		chanceToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement("div");

			if (this.classes.length === 0) {
				this.element = "menu__item";
				element.classList.add(this.element);
			}

			this.classes.forEach(className => element.classList.add(className));
			element.innerHTML = `
          <img src=${this.src} alt=${this.altimg}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
      `;

			this.parent.append(element);
		}
	}

	// const getResource = async (url) => {
	//   const res = await fetch(url);

	//   if (!res.ok) {
	//     throw new Error(`Could not fetch ${url}, status ${res.status}`);
	//   }

	//   return await res.json();
	// };

	// getResource("http://localhost:3000/menu")
	//   .then(data => {
	//     data.forEach(({
	//       img,
	//       altimg,
	//       title,
	//       descr,
	//       price
	//     }) => {
	//       new CardMenu(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
	//     })
	//   })

	axios.get("http://localhost:3000/menu")
		.then(data => {
			data.data.forEach(({
				img,
				altimg,
				title,
				descr,
				price
			}) => {
				new CardMenu(img, altimg, title, descr, price, '.menu .container').render();
			});
		});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function forms() {
	// Forms
	const forms = document.querySelectorAll("form");

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	};

	function bindPostData(form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        margin-top: 30px;
      `;

			form.insertAdjacentElement("afterend", statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector(".modal__dialog");

		prevModalDialog.style.display = "none";
		(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();

		const thanksModal = document.createElement("div");
		thanksModal.classList.add("modal__dialog");
		thanksModal.innerHTML = `
    <div class="modal__content">
      <div data-close class="modal__close"> x </div>
      <div class="modal__title">${message}</div>
    </div>
    `;

		modalWindow.append(thanksModal);

		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.style.display = "";
			(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
		}, 4000);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
	const modalWindow = document.querySelector(modalSelector);

	modalWindow.style.display = "block";
	document.body.style.overflow = "hidden";

	console.log(modalTimerId);
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modalWindow = document.querySelector(modalSelector);

	modalWindow.style.display = "none";
	document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	// Modal
	const modalOpenBtn = document.querySelectorAll(triggerSelector),
		modalWindow = document.querySelector(modalSelector);

	function showModelByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener("scroll", showModelByScroll);
		}
	}

	modalOpenBtn.forEach((item) => {
		item.addEventListener("click", () => openModal(modalSelector, modalTimerId));
	});

	modalWindow.addEventListener("click", (e) => {
		if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
			closeModal(modalSelector);
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modalWindow.style.display == "block") {
			closeModal(modalSelector);
		}
	});

	window.addEventListener("scroll", showModelByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
	// Slider
	const slides = document.querySelectorAll(".offer__slide"),
		slider = document.querySelector(".offer__slider"),
		prev = document.querySelector(".offer__slider-prev"),
		next = document.querySelector(".offer__slider-next"),
		total = document.querySelector("#total"),
		current = document.querySelector("#current"),
		slidesWrapper = document.querySelector(".offer__slider-wrapper"),
		slidesField = document.querySelector(".offer__slider-inner"),
		width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1,
		offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';

	slidesField.style.display = "flex";
	slidesField.style.transition = "0.5s all";

	slidesWrapper.style.overflow = "hidden";

	slides.forEach(slide => {
		slide.style.width = width;
	});

	slider.style.position = "relative";

	const indicators = document.createElement('ol'),
		dots = [];

	indicators.classList.add("carousel-indicators");
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute("data-slide-to", i + 1);
		dot.classList.add("dot");

		if (i == 0) {
			dot.style.opacity = 1;
		}

		indicators.append(dot);
		dots.push(dot);
	}

	function currentIndex() {
		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = ".5");
		dots[slideIndex - 1].style.opacity = 1;
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, "");
	}

	next.addEventListener("click", () => {
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		currentIndex();
	});

	prev.addEventListener("click", () => {
		if (offset == 0) {
			offset = deleteNotDigits(width) * (slides.length - 1);
		} else {
			offset -= deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		currentIndex();
	});

	dots.forEach(dot => {
		dot.addEventListener("click", (e) => {
			const slideTo = e.target.getAttribute("data-slide-to");

			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;

			currentIndex();
		});
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
	// Tabs
	const tabsContent = document.querySelectorAll(".tabcontent"),
		tabsParent = document.querySelector(".tabheader__items"),
		tabs = document.querySelectorAll(".tabheader__item");

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = "none";
		});

		tabs.forEach(item => {
			item.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = "block";
		tabs[i].classList.add("tabheader__item_active");
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener("click", (e) => {
		const target = e.target;

		if (target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");










document.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimerId), 50000);

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]", ".modal", modalTimerId);
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map