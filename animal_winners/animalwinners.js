"use strict";

window.addEventListener("DOMContentLoaded", start);

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
  isWinner: false,
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
  let trophyToShow;
  trophyToShow = animal.isWinner ? "🏆" : "🏆";

  // TODO: Display star

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;
  clone.querySelector("[data-field=winner]").textContent = trophyToShow;

  // TODO: Add event listeners for star and winner
  clone.querySelector("[data-field=winner]").addEventListener("click", trophyClicked);

  function trophyClicked(event) {
    let animalWinners = allAnimals.filter((animal) => animal.isWinner === true);
    let winnerCount = animalWinners.length;

    //Samme function som arrow function på linje 101
    // function isAnimal(element) {
    //   //element er det dyr i listen og animal er den man klikker på
    //   return element.type === animal.type;
    // }

    const isSameAnimalType = (element) => element.type === animal.type;

    let oneType = animalWinners.some(isSameAnimalType);

    if (winnerCount < 2 && !oneType) {
      animal.isWinner = !animal.isWinner;
    } else {
      animal.isWinner = false;
    }

    if (animal.isWinner === true) {
      event.target.setAttribute("data-winner", "true");
    } else {
      event.target.setAttribute("data-winner", "false");
    }
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

/*
There are no other animals of the same type being a winner
AND
There are less than two winners in total
*/
