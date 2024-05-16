"use strict";

const toggleThemeBtn = document.querySelector("#toggleTheme");
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const nav = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
const navLogo = document.querySelector(".nav-logo");
const hamburger = document.querySelector(".bi-list");

toggleThemeBtn.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const lightThemeIcon = document.querySelector("#lightThemeIcon");
  const dataThemeIcon = document.querySelector("#dataThemeIcon");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  const logoHTML =
    currentTheme === "light"
      ? `<img class="nav-logo-img" src="assets/image/elephandora white logo.png" alt="elephandora-logo" />`
      : `<img class="nav-logo-img" src="assets/image/elephandora black logo.png" alt="elephandora-logo" />`;

  navLogo.innerHTML = logoHTML;

  document.documentElement.setAttribute("data-theme", newTheme);
  lightThemeIcon.classList.toggle("hide");
  dataThemeIcon.classList.toggle("hide");
  hamburger.classList.toggle("hamburger-black");
});

hamburger.addEventListener("click", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hide");
});

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 100, fill: "forwards" }
  );

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 700, fill: "forwards" }
  );
});

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const obsObject = {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
};

const headerObserver = new IntersectionObserver(stickyNav, obsObject);
headerObserver.observe(header);
