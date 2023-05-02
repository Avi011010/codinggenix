"use strict";

// Dark Mode

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
  localStorage.setItem("darkMode", checkbox.checked);
};

// Initialize dark mode on page load
const darkMode = JSON.parse(localStorage.getItem("darkMode"));
checkbox.checked = darkMode;
if (darkMode) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// Handle toggle click event
checkbox.addEventListener("click", toggleDarkMode);

/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
});

/**
 * HEADER
 */
const AddEventonElem = (elem, elemType, callback) => {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener(elemType, callback);
  }
};

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const Navlinks = document.querySelectorAll("[data-nav-links]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
AddEventonElem(navTogglers, "click", toggleNavbar);

const ClosetoggleNavbar = function () {
  navbar.classList.remove("active");
  navToggleBtn.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
};

AddEventonElem(Navlinks, "click", ClosetoggleNavbar);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);
