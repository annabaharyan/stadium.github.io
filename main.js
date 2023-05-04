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
function typeText(text, i = 0) {
  if (i < text.length) {
    document.querySelector(".p-text").innerHTML += text[i];
    setTimeout(function () {
      typeText(text, i + 1);
    }, 10);
  }
}

typeText("Keep track of stadiums that you have visited. Find out how many stadiums you've been to across the leagues.")
