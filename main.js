"use strict";

console.log("This page loaded");

var menuNav = document.getElementById("menu_nav");

var menuTrigger = document.getElementById('menu_trigger');


menuTrigger.onclick = function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
  } else (menuNav.style.display === "none") {
      menuNav.style.display = "flex";
    }
    console.log("The menu has been toggled")
}
