"use strict";

function createPerson(firstName, lastName, age, isGinger) {
  return { firstName, lastName, age, isGinger };
}

let newPerson = createPerson("Alexander", "Teodorescu-Romanati", 30, false);

console.log("Person's details", newPerson);
