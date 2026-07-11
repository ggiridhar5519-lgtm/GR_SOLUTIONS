
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


// ================================
// TECH CARD MAGNETIC EFFECT
// ================================

const techCards = document.querySelectorAll(".tech-card");

techCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)
             scale(1.08)
             rotate(${x * 0.05}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});





// Hero animation code



// =========================
// ABOUT REVEAL
// =========================

document.addEventListener("DOMContentLoaded",()=>{

const about=document.querySelector(".about");

if(!about) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

about.classList.add("show");

observer.disconnect();

}

});

},{
threshold:.25
});

observer.observe(about);

});

/*=========================================
SERVICES REVEAL
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const services=document.querySelector(".services");

if(!services) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

services.classList.add("show");

observer.disconnect();

}

});

},{
threshold:.25
});

observer.observe(services);

});


/*=========================================
TECH STACK REVEAL
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const tech=document.querySelector(".tech-stack");

if(!tech) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

tech.classList.add("show");

observer.disconnect();

}

});

},{
threshold:.25
});

observer.observe(tech);

});

/*=========================================
INDUSTRIES LIVE DEMO
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const exploreBtn = document.querySelector(".explore-btn");
    const exploreArea = document.querySelector(".explore-area");
    const browser = document.querySelector(".demo-browser");

    const loader = document.querySelector(".demo-loader");
    const site = document.querySelector(".demo-site");
    const progress = document.querySelector(".loader-fill");

    if (!exploreBtn || !browser) return;

    browser.style.display = "none";
    loader.style.display = "flex";
    loader.style.opacity = "1";
    site.style.display = "none";

    exploreBtn.addEventListener("click", () => {

        exploreArea.style.display = "none";

        browser.style.display = "block";

        browser.animate([
            {
                opacity: 0,
                transform: "translateY(70px) scale(.96)"
            },
            {
                opacity: 1,
                transform: "translateY(0) scale(1)"
            }
        ], {
            duration: 700,
            easing: "ease-out",
            fill: "forwards"
        });

        let value = 0;

        progress.style.width = "0%";

        const loading = setInterval(() => {

            value++;

            progress.style.width = value + "%";

            if (value >= 100) {

                clearInterval(loading);

                setTimeout(() => {

                    loader.style.transition = "opacity .6s ease";
                    loader.style.opacity = "0";

                    setTimeout(() => {

                        loader.style.display = "none";

                        site.style.display = "block";

                        site.animate([
                            {
                                opacity: 0,
                                transform: "translateY(40px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ], {
                            duration: 700,
                            easing: "ease-out",
                            fill: "forwards"
                        });

                    }, 600);

                }, 300);

            }

        }, 25);

    });

});
