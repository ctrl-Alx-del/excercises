"use strict";

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("Alex"));

const person3 = {
  hired: false,
};

const person4 = {
  hired: true,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

// fireOrHire(fire, person4);

console.log(person4);
