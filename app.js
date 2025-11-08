const btnHamburger = document.querySelector(".hamburger");
const menuPanel = document.querySelector(".menu-panel");
const menuLinks = document.querySelectorAll(".menu-panel a");
const frameImage = document.querySelector("#frame");
const images = ['1.webp', '2.webp','3.webp','4.webp', '5.webp', '6.webp'];


btnHamburger.addEventListener("click", ()=> {
    menuPanel.classList.toggle("active");

});

let currentImageIndex = 0;

frameImage.addEventListener('click', ()=> {
    currentImageIndex++; //+1

    if(currentImageIndex >= 5) {
        currentImageIndex = 0;
    }
    
    frameImage.src = 'images/' + images[currentImageIndex];

});

document.addEventListener("click", (event)=> {
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove("active");
    } 
});

menuLinks.forEach((link)=>{

    link.addEventListener("click", ()=> {
        menuPanel.classList.remove("active");

    })

});
