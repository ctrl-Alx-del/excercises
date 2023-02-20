"use strict";

const animals = [
  { name: "John", type: "cat" },
  { name: "Frank", type: "Honey Badger" },
  { name: "Gwendoly", type: "cat" },
  { name: "Alexander", type: "dog" },
  { name: null, type: "cat" },
  { name: undefined, type: "cat" },
];

// names.forEach(printNames);

// function printNames(name, index, arr) {
//   if (index === 0) {
//     console.log("Array :", arr);
//   }
//   console.log(`${name} has index number ${index}`);
// }

// let shortNames = names.filter(removeLongNames);

// function removeLongNames(name) {
//   return name.length <= 5;
// }

// console.log("Short names", shortNames);

//filterer for katte kun og putter den i en ny variabel
let cats = animals.filter(findCats);

function findCats(animal) {
  return animal.type === "cat";
}

console.log("filtered animals", cats);

cats.sort(compareByName);

console.log("names sorted", cats);

//sortere alfabetisk rækkefølge
function compareByName(animalA, animalB) {
  if (animalA.name < animalB.name) {
    return -1;
  } else if (animalA.name > animalB.name) {
    return 1;
  } else {
    return 0;
  }
}
