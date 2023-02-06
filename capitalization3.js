let theName = "peter";

//this changes the third letter to uppercase. place this lower in the script if the third letter is lowercase already
theName = theName.substring(0, 2) + theName[2].toUpperCase() + theName.substring(3, theName.length);

//this changes the third letter to lowercase
theName = theName.substring(0, 2) + theName[2].toLowerCase() + theName.substring(3, theName.length);

console.log(theName);
