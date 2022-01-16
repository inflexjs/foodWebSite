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

export default calc;