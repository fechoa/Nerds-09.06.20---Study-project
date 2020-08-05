var writeUs = document.querySelector(".button-writeus");
var form = document.querySelector(".form-box");

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.remove("visually-hidden");
});

var close = document.querySelector(".close");

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (!form.classList.contains("visually-hidden")) {
			evt.preventDefault();
			form.classList.add("visually-hidden");
		}
	}
});

