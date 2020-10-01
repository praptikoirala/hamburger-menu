let hamburgerButton = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menu-item");
let hamburgerLines = document.querySelectorAll(".line-item"); 

hamburgerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (menu.classList.contains("show")) {
		menu.classList.remove("show");
	} else {
		menu.classList.add("show");
	}
	
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].classList.contains("visible")) {
			menuItems[i].classList.remove("visible");
		} else {
			menuItems[i].classList.add("visible");
		}
	}

	for (let i = 0; i < hamburgerLines.length; i++) {
		if (hamburgerLines[i].classList.contains("rotate")) {
			hamburgerLines[i].classList.remove("rotate");
		} else {
			hamburgerLines[i].classList.add("rotate");
		}
	}
}