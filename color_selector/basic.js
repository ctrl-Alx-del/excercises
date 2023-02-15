"use strict";
//----------------------------- cssToRGB ------------------------------------------------
// function cssToRGB(rgb) {
//   let r = parseInt(rgb.substring(rgb.indexOf("(") + 1, rgb.indexOf(",")));
//   let g = parseInt(rgb.substring(rgb.indexOf(",") + 1, rgb.lastIndexOf(",")).trim());
//   let b = rgb.substring(rgb.lastIndexOf(",") + 1, rgb.indexOf(")")).trim();

//   console.log(`${r} ${g} ${b}`);
// }

// cssToRGB("rgb(12, 1, 12)");

//----------------------------- HexToRGB ------------------------------------------------
// function HexToRGB(hexColor) {
//   const r = parseInt(hexColor.substring(1, 3), 16);
//   const g = parseInt(hexColor.substring(3, 5), 16);
//   const b = parseInt(hexColor.substring(5, 7), 16);

//   return {
//     r,
//     g,
//     b,
//   };
// }

// console.log("Color as RGB", HexToRGB("#f80ea3"));
// console.log("Color of Red", HexToRGB("#f80ea3").r);

// function createPerson(firstName, lastName, age, isGinger) {
//   return { firstName, lastName, age, isGinger };
// }

// let newPerson = createPerson("Alexander", "Teodorescu-Romanati", 30, false);

// console.log("Person's details", newPerson);
