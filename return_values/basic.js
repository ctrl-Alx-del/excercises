"use strict";

//---------------------------------Excercise 1--------------------------------------------

// function greeting(honeyBadger) {
//   return `Hello ${honeyBadger}`;
// }

// const result = greeting("Peter");

// console.log("Result: ", result);

// //this returns the value of the function to the console log without
// //storing it in a variable first
// console.log("Result: ", greeting("Timmy"));

//---------------------------------Excercise 2--------------------------------------------

function greeting(honeyBadger) {
  return `Hello ${honeyBadger}`;
}

// greeting("any name");

console.log(greeting("any name"));

// resultatet er: Hello undefined
// console.log(greeting());

// Man kan have funktionen inde i en template literal og stadig få det til at virke
// const txt = `Greetings is ${greeting("Alexander")}`;
// console.log(txt);
