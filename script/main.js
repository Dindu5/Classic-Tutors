const menu = document.querySelector('.menu-btn');

const nav = document.querySelector('nav');

let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menu.classList.add('close');
		nav.classList.add('show');
		// navLinks.forEach((item) => item.classList.add('show'));

		//set menu state
		showMenu = true;
	} else {
		menu.classList.remove('close');
		nav.classList.remove('show');
		// navLinks.forEach((item) => item.classList.remove('show'));

		//set menu state
		showMenu = false;
	}
}
