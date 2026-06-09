
// ========================
// LOADER
// ========================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.transition="0.6s";

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

// ========================
// MOBILE MENU
// ========================

const hamburger=document.querySelector(".hamburger");
const mobileMenu=document.querySelector(".mobile-menu");
const overlay=document.querySelector(".mobile-overlay");
const closeBtn=document.querySelector(".close-menu");

if(hamburger){

hamburger.addEventListener("click",()=>{

mobileMenu.style.right="0";
overlay.style.opacity="1";
overlay.style.visibility="visible";

});

}

if(closeBtn){

closeBtn.addEventListener("click",()=>{

mobileMenu.style.right="-100%";
overlay.style.opacity="0";
overlay.style.visibility="hidden";

});

}

if(overlay){

overlay.addEventListener("click",()=>{

mobileMenu.style.right="-100%";
overlay.style.opacity="0";
overlay.style.visibility="hidden";

});

}

// ========================
// SCROLL REVEAL
// ========================

const reveals=document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach((item)=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

reveals.forEach((item)=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="0.8s ease";

});

window.addEventListener("scroll",revealElements);

revealElements();
