// Menu Footer
const year = new Date().getFullYear();
const menu_footer_copyright = document.querySelector(".menu-footer-copyright-container");
menu_footer_copyright.innerHTML = "&copy; " + year + " Google LLC";

// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const menu_container = document.querySelector(".menu-container");
window.addEventListener("click",function(e){
    if(e.target == hamburger){
        menu_container.classList.add("menu-toggler");
    }else{
        menu_container.classList.remove("menu-toggler");
    }
});