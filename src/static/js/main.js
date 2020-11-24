'use strict';

/*-----VARIABLES -----*/

const header = document.querySelector('.header');
const headerRight = document.querySelector('.header__right');
const hero = document.querySelector('.hero');
const burger = document.querySelector('.burger');
const headerBreakpoint = window.matchMedia("(max-width: 800px)")
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('.menu__item');
const body = document.querySelector('body');
const modalLink = document.querySelectorAll('.js-modal__link');
const modal = document.querySelectorAll('.modal');
const headerWrapper = document.querySelector('.header__wrapper');

const delivery = document.querySelector('.delivery');

/*----- LISTENERS -----*/


document.addEventListener('scroll', addBoxShadow.bind(null, header, [0, 0, 10], [190, 190, 190]));
burger.addEventListener('click', menuActive);
headerBreakpoint.addEventListener('change', headerIndent);

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		if(headerBreakpoint.matches){
			menuActive()
		}
	})
});


modalLink.forEach(link => {
	link.addEventListener('click', e => {
		let curentModal = document.getElementById(link.dataset.modal)
		modalActive(e, curentModal)
	});
});

modal.forEach(i => {
	i.addEventListener('click', e => {
		if(e.target.dataset.close){
			modalActive(e, e.target.parentNode);
		}
	});
});



/*----- FUNCTIONS -----*/

function headerIndent() {
	headerRight.style.top = header.offsetHeight + 'px'
	hero.style.paddingTop = header.offsetHeight + 'px'
	sections.forEach(section => {
		section.style['scroll-margin-top'] = header.offsetHeight + 30 + 'px'
	})

}
function menuActive() {
	header.classList.toggle('active')
	burger.classList.toggle('active')
	headerRight.classList.toggle('active')
	body.classList.toggle('lock')
}

function addBoxShadow(elem, params, color) {
	elem.style['boxShadow'] = `${params[0]}px ${params[1]}px ${params[2]}px
								 rgba(${color[0]}, ${color[1]}, ${color[2]}, ${window.scrollY})`

}


function modalActive(e, curentModal) {

	curentModal.closest('.modal').classList.toggle('active');
	if (document.querySelector('body.lock')) {
		body.style.marginRight = 0;
		headerWrapper.style.marginRight = 0;
	
	} else {
		e.preventDefault()
		let scrollWidth = window.innerWidth - body.offsetWidth;
		body.style.marginRight = scrollWidth + 'px'
		headerWrapper.style.marginRight = scrollWidth + 'px'
	}
	body.classList.toggle('lock')
	

}

headerIndent()

