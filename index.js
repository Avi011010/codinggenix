"use strict";

// Dark Mode

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
  // Save the value of the checkbox in local storage
  localStorage.setItem("dark-mode", checkbox.checked);
};
// Get the value of the checkbox from local storage or use false as default
checkbox.checked = localStorage.getItem("dark-mode") === "true" || false;
toggleDarkMode();
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

// Get the elements from the document
var editor = document.getElementById("editor");
var output = document.getElementById("output");

// Add an event listener to the editor
editor.addEventListener("input", function () {
  // Get the code from the editor
  var code = editor.value;

  // Write the code to the output iframe
  output.contentWindow.document.open();
  output.contentWindow.document.write(code);
  output.contentWindow.document.close();
});
