"use strict";

let delay;
let iterator = 0;
let maxNumberOfIterations;
initLoop();

function initLoop() {
  console.log("initLoop");
  maxNumberOfIterations = 11;
  delay = 200;
  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  delay += 100;
  if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, Math.random() * 1000);
  }
}
