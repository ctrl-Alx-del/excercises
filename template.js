"use strict";

const theName = "Peter";
const animal = "cat";
const animalName = "Mandu";
const completeStr = `My name is ${theName}. \nI have a ${animal} called ${animalName}`;

console.log(`My name is ${theName}. 
I have a ${animal} called ${animalName}`);

document.querySelector("p").textContent = completeStr;

const str1 = "   There is   space here \n  ";
const str2 = str1.trim();

console.log(str1);
console.log(str2);
