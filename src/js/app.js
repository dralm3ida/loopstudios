var btnMenu = document.querySelector("#btnMenu");
var body = document.querySelector("body");
var headerLinks = document.querySelectorAll(".header-mobile-links,.header-desktop-links");

btnMenu.addEventListener('click', event => {
   body.classList.toggle('mobile-menu');
   headerLinks.forEach(linkMenu =>{
      linkMenu.classList.toggle('hide');
   })
})