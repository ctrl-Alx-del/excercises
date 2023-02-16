"use strict";

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
];

function isCat(animal) {
  console.log(animal.name);
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

// console.log(isCat(animals[0]));

function all() {
  return true;
}

function none() {
  return false;
}

// console.log("ALL", animals.filter(all));
// console.log("NONE", animals.filter(none));
console.log("ONLY CATS", animals.filter(isCat));
