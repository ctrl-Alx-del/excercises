//newarr and letters change when each of them has been changed
// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(letters);

// const newarr = letters;
// newarr[4] = "*";

// letters[7] = "gg";

// console.log(letters);
// console.log(newarr);

// const people = ["Harry", "Ron", "Hermione"];
// let result;

// //adds Draco to the end of the array and returns the length of the array in result
// result = people.push("Draco");

// //removes Draco from the end of the array and store his name in result
// result = people.pop();

// result = people.push("Neville");

// result = people.push("Luna");

// //slice only returns the specified range that it cuts out and stores it in result. People is not changed
// result = people.slice(0, 3);

// //doesn't return anything into result, but adds Cho before people[1] and after people[0]
// result = people.splice(1, 0, "Cho");

// //Cho changes to Ginny
// people[1] = "Ginny";

// //adds Fred and George to the end of the array and returns the length of the array
// result = people.push("Fred", "George");

// //Returns which index Fred is at in the array to result
// result = people.indexOf("Fred");

// //Removes Fred from the array and returns him in a new array into result
// result = people.splice(result, 1);

// console.log(people);
// console.log(result);

//makes an array with each letter of the string as an index
// const letters1 = Array.from("abcdefghijklmn");

//takes the whole string and puts it into 1 index as opposed to the other method above
// const str = "abcdefghijklmn";
// const arr1 = str.split();

const sentence = ["I", "like", "cake"];
//const newSentence = sentence.join(" ");
const newString = sentence.toString();
console.log(newString);
