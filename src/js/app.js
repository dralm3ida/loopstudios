var btnMenu = document.querySelector("#btnMenu");
var body = document.querySelector("body");
var headerLinks = document.querySelectorAll(".header-mobile-links,.header-desktop-links");

btnMenu.addEventListener('click', event => {
   body.classList.toggle('open');
   headerLinks.forEach(linkMenu =>{
      linkMenu.classList.toggle('hide');
   })
})