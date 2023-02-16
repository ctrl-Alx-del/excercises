"use strict";

function init() {
  console.log("init");

  loadJSON("animals.json", prepareData);
}

//loadJSON kan nu tage flere forskellige JSON filer hver gang den bliver kaldt
async function loadJSON(url, callback) {
  const response = await fetch(url);
  const jsonData = await response.json();
  callback(jsonData);
}

function prepareData(data) {
  console.log("prepare data");

  console.table(data);
}

init();
