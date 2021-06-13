var btnMenu = document.querySelector("#btnMenu");
var body = document.querySelector("body");
var headerLinks = document.querySelector(".header-mobile-links");

btnMenu.addEventListener('click', event => {
   body.classList.toggle('mobile-menu');
   headerLinks.classList.toggle('hide-mobile-menu');
})