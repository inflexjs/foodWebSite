function modal() {
	// Modal
	const modalOpenBtn = document.querySelectorAll("[data-modal]"),
		modalWindow = document.querySelector(".modal");

	function openModal() {
		modalWindow.style.display = "block";
		document.body.style.overflow = "hidden";
		clearInterval(modalTimerId);
	}

	function closeModal() {
		modalWindow.style.display = "none";
		document.body.style.overflow = "";
	}

	function showModelByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener("scroll", showModelByScroll);
		}
	}

	modalOpenBtn.forEach((item) => {
		item.addEventListener("click", openModal);
	});

	modalWindow.addEventListener("click", (e) => {
		if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modalWindow.style.display == "block") {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 50000);

	window.addEventListener("scroll", showModelByScroll);
}

export default modal;