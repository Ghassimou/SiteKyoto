const navMenu = document.querySelector(".nav__menu");
const btnMenu = document.querySelector(".menu__icone");

btnMenu.addEventListener("click", () => {
  console.log("click");
  navMenu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((menu) => {
  menu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
