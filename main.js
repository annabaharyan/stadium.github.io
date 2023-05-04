const menu = document.querySelector(".menu");
function openMenu() {
  const menuNav = document.querySelector(".navMenu");
  const navbar = document.querySelector(".navbar");
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else {
    menuNav.style.display = "flex";
  }
  menuNav.classList.add("open");
  navbar.classList.add("ul-opened");
}
menu.addEventListener("click", openMenu);

function showSection() {
  let show = document.querySelectorAll(".show");
  for (let i = 0; i < show.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = show[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      show[i].classList.add("active");
    } else {
      show[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", showSection);
