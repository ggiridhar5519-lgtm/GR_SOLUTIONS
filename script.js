// =========================
// SCROLL REVEAL
// =========================

const revealItems = document.querySelectorAll(
'.service-card,.project-card,.about-box,.why-card,.contact,.process-grid div'
);

function revealOnScroll(){

revealItems.forEach(item=>{

const itemTop = item.getBoundingClientRect().top;

const triggerPoint = window.innerHeight - 100;

if(itemTop < triggerPoint){

item.classList.add('show');

}

});

}

window.addEventListener('scroll',revealOnScroll);

revealOnScroll();


// =========================
// ACTIVE NAV
// =========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll',()=>{

let current = '';

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute('id');

}

});

navLinks.forEach(link=>{

link.classList.remove('active');

if(link.getAttribute('href') === '#' + current){

link.classList.add('active');

}

});

});


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{

navMenu.classList.toggle('mobile-active');

});
