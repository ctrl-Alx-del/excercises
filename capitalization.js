let theName = "petER";

// theName = theName[0].toUpperCase() + theName.substring(1).toLowerCase();

// console.log(theName);

function capitalization(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

let result = capitalization(theName);

console.log(result);
