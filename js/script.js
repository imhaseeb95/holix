'use strict'

const addEventOnListener = function(elem, type, callback){
	if(elem.length > 1){
		for(let i = 0; i < elem.length; i++){
			elem[i].addEventListener(type, callback);
		}
	}else{
		elem.addEventListener(type, callback);
	} 
}

const navBar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');


const navBarToggler = function(){
	navBar.classList.toggle('active');
	overlay.classList.toggle('active');
}

addEventOnListener(navToggler, "click", navBarToggler);

const navLinks = document.querySelectorAll('[data-nav-links]');

const closeToggle = function(){
	navBar.classList.remove('active');
	overlay.classList.remove('active');
}

addEventOnListener(navLinks, "click", closeToggle);

const header =  document.querySelector('[data-header]');

const scrollHeader = function(){
	if(window.scrollY > 100){
		header.classList.add('active');
	}else{
		header.classList.remove('active');
	}
}
addEventOnListener(window, "scroll", scrollHeader);

// ==============================
//  dynamic Slidedown and Slideup
// ==============================

const accordionAction = document.querySelectorAll('[data-accordion-action]');
const menueSec = function() {this.classList.toggle('active');}
addEventOnListener(accordionAction, "click", menueSec);
