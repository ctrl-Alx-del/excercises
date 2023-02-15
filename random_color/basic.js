"use strict";

function randomBackground() {
  let body = document.querySelector("body");
  body.style.backgroundColor = rgbToCSS(randomColor());
}

function randomColor() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
}

// console.log("RGB's", randomColor());

function rgbToCSS(rgb) {
  const r = rgb.r;
  const g = rgb.g;
  const b = rgb.b;
  return `rgb(${r}, ${g}, ${b})`;
}

randomBackground();
