'use strict';

/* add event on multiple elements */

const addEventOnElement = function (elements, evetType, callback){
  for (let i =0, len = elements.lenght; i <len; i++) {
    elements[i].addEventListener (evetType, callback);
  }
}

/*  Navbar toogle for mobile*/

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector ("[data-nav-toggle-btn]");
const overlay =document.querySelector ("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle ("active");
  navToggleBtn.classList.toggle("active")
  overlay.classList.toggle("active");
  documents.body.classList.toggle("active");

}

addEventOnElement ([navToogleBtn, overlay], "click", toogleNavbar);


/* parallax effect*/

const parallaxElements= document.querySelectorAll ("[data-parallax]");

window.addEventListener("mousemove",event =>  {
   for (let i=0, len =parallaxElements.length; i< len; i++) {

    const movementX = (event.clientX/  window.innerWidth) * Number 
    (parallaxElements[i].dataset.parallaxSpeed);
    const movementY = (event.clientY/  window.innerHeight) * Number 
    (parallaxElements[i].dataset.parallaxSpeed);


    parallaxElements[i].animate({
      transform: `translate(${movementX}px, ${movementY}px)`
    }, { duration: 500, fill: "forwards"});
   }
})

