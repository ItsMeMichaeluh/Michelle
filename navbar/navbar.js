const navbarHamburger = document.querySelector(".navbar-hamburger");
const navbarMenu = document.querySelector(".navbar-menu");

navbarHamburger.addEventListener("click", function() {
  navbarMenu.classList.toggle("active");
});