const menu = document.querySelector(".menu");
function openMenu() {
  const menuNav = document.querySelector(".navMenu");
  const navbar = document.querySelector(".navbar");
  menuNav.classList.add("open");
  navbar.classList.add("ul-opened", "scale-in-top");
}
menu.addEventListener("click", openMenu);
function typeText(text, i = 0) {
  if (i < text.length) {
    document.querySelector(".p-text").innerHTML += text[i];
    setTimeout(function () {
      typeText(text, i + 1);
    }, 10);
  }
}

typeText("Keep track of stadiums that you have visited. Find out how many stadiums you've been to across the leagues.")
