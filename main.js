const menu = document.querySelector(".menu");
function openMenu() {
  const menuNav = document.querySelector(".navMenu");
  const navbar = document.querySelector(".navbar");
  menuNav.classList.add("open");
  navbar.classList.add("ul-opened", "scale-in-top");
}
menu.addEventListener("click", openMenu);
