function openModal(modalSelector, modalTimerId) {
	const modalWindow = document.querySelector(modalSelector);

	modalWindow.style.display = "block";
	document.body.style.overflow = "hidden";

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

export default modal;
export {closeModal};
export {openModal};