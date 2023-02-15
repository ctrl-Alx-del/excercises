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

//----------------------------- RBGtoHex ------------------------------------------------

//breaks when only adding two digits

function rgbToHex(rgb) {
  const rHex = Number(rgb.r).toString(16);
  const gHex = Number(rgb.g).toString(16);
  const bHex = Number(rgb.b).toString(16);

  // console.log(`${rHex} ${gHex} ${bHex}`);

  return {
    rHex,
    gHex,
    bHex,
  };
}

console.log(rgbToHex({ r: 9, g: 0, b: 37 }));
