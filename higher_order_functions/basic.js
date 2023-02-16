"use strict";

const people = ["Harry", "Mark", "John", "Lou"];

function sayHello(person) {
  console.log(`${person} says hello`);
}

//det på linje 10 er deet samme som det nedenunder der starter på linje 13
people.forEach(sayHello);

// people.forEach((person) => {
//   console.log(`${person} says hello`);
// });
