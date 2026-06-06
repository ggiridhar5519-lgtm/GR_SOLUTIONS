window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="rgba(2,6,23,0.75)";
navbar.style.boxShadow="0 10px 40px rgba(0,0,0,0.35)";

}else{

navbar.style.background="rgba(255,255,255,0.03)";
navbar.style.boxShadow="none";

}

});
