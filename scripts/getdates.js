// Responsive Menu
let icon = document.querySelector(".icon");
let menu = document.querySelectorAll(".menu");
let currentYear = document.querySelector(".currentYear");
let updated = document.querySelector(".updated");

icon.addEventListener("click", () => {
	menu.forEach((item) => {
		item.classList.toggle("active");
	});
});

// Year
let year = new Date();
currentYear.innerHTML = year.getFullYear();

// Last modified
updated.innerHTML = document.lastModified;
