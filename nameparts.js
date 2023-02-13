const names = ["Peter Heronimus Lind", "Alexander Timotei Teodorescu-Romanati", "Albus Percival Wulfric Brian Dumbledore"];

//change name with numbers from 0 to 2
const changeName = 2;

// const nameSplitted1 = names[changeName].indexOf(" ");
// const nameSplitted2 = names[changeName].indexOf(" ", nameSplitted1 + 1);
// const nameSplitted3 = names[changeName].lastIndexOf(" ");

// const firstName = names[changeName].substring(0, nameSplitted1);
// const middleName = names[changeName].substring(nameSplitted1, nameSplitted3);
// const lastName = names[changeName].substring(nameSplitted3);

// // console.log(firstName + "\n", middleName + "\n", lastName + "\n");
// console.log({ firstName, middleName, lastName });

//-------------------------------Med funktion i stedet for---------------------------------
// function getNameParts(fullname) {
//   const nameSplitted1 = fullname.indexOf(" ");
//   const nameSplitted2 = fullname.indexOf(" ", nameSplitted1 + 1);
//   const nameSplitted3 = fullname.lastIndexOf(" ");

//   const firstName = fullname.substring(0, nameSplitted1);
//   let middleName = fullname.substring(nameSplitted1, nameSplitted3);
//   const lastName = fullname.substring(nameSplitted3);

//   //sets middlename to undefined if nothing is found
//   if (middleName === "") {
//     middleName = undefined;
//   }

//   // console.log(firstName + "\n", middleName + "\n", lastName + "\n");
//   console.log({ firstName, middleName, lastName });
//   //Der kommer ekstra spaces når man kalder funktionen fullName indeni getNameParts!
//   //fullName(lastName, firstName, middleName);
// }

// getNameParts("Monkey Junkey Skunky");

//---------------------------FullName excercise--------------------------------------------

function fullName(lastName, firstName, middleName) {
  //sets middlename to undefined if nothing is found
  if (middleName === undefined) {
    middleName = "";
  }

  if (middleName) {
    middleName = middleName + " ";
  }

  console.log(firstName + " " + middleName + lastName);
}

fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Harry", "Potter");
fullName("Potter", "Harry", "James", "Pottypotpot");
