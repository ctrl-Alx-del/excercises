"use strict";

window.addEventListener("DOMContentLoaded", start);

let isClicked = false;

let allAnimals = [];

const settings = {
  filter: null,
  sortBy: null,
  sortDir: "asc",
};

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  // TODO: Add winner-info
};

function start() {
  console.log("ready");

  loadJSON();

  // TODO: Add event-listeners to filter and sort buttons
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  buildList();
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function buildList() {
  const currentList = allAnimals; // TODO: Add filter and sort on this list, before displaying
  displayList(currentList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data

  // TODO: Display winner

  // TODO: Display star

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);

  // TODO: Add event listeners for star and winner
  const winnerSelect = document.querySelectorAll(".winner");
  winnerSelect.forEach((winners) => {
    winners.addEventListener("click", toggleWinner);
    winners.addEventListener("click", winCondition);
  });
}

function toggleWinner(event) {
  if (isClicked === false) {
    isClicked = true;
  } else {
    isClicked = false;
  }

  if (isClicked === true && winCondition() < 3) {
    event.target.setAttribute("data-winner", "true");
  } else {
    event.target.setAttribute("data-winner", "false");
  }
  console.log("clicked");
}

/*
There are no other animals of the same type being a winner
AND
There are less than two winners in total
*/

function winCondition() {
  let amountOfWinners = 0;

  //Boolean flag controls that it only counts once everytime isClicked is false
  if (isClicked === false) {
    isClicked = true;
    amountOfWinners++;
  } else {
    isClicked = false;
  }

  if (amountOfWinners >= 2) {
    amountOfWinners = 2;
  }

  console.log(amountOfWinners);
  return amountOfWinners;
}
