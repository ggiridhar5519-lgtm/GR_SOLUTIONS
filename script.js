// NAVBAR EFFECT

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "rgba(0,0,0,0.85)";
navbar.style.backdropFilter = "blur(20px)";
navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";

}else{

navbar.style.background = "rgba(255,255,255,0.03)";
navbar.style.boxShadow = "none";

}

});


// BACKGROUND SLIDER

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,5000);


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
".model-card,.service-card,.feature-card,.about-text,.contact-form"
);

function reveal(){

const trigger = window.innerHeight * 0.85;

revealElements.forEach(element => {

const top = element.getBoundingClientRect().top;

if(top < trigger){

element.classList.add("show");

}

});

}

window.addEventListener("scroll", reveal);

reveal();


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
