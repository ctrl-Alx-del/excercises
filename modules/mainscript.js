"use strict";

// import { capitalize, makeSpaces } from "./stringscript.js";
//import
import * as stringTools from "./stringscript.js";

start();

function start() {
  console.log("Start!");

  sayHello("peter");
}

function sayHello(name) {
  const greeting = stringTools.makeSpaces(`Hello ${stringTools.capitalize(name)}`);
  document.querySelector("#output").textContent = greeting;
  console.log("greeting", greeting);
}
