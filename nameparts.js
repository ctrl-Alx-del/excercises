const names = ["Peter Heronimus Lind", "Alexander Timotei Teodorescu-Romanati", "Albus Percival Wulfric Brian Dumbledore"];

//change name with numbers from 0 to 2
const changeName = 2;

const nameSplitted1 = names[changeName].indexOf(" ");
const nameSplitted2 = names[changeName].indexOf(" ", nameSplitted1 + 1);
const nameSplitted3 = names[changeName].lastIndexOf(" ");

const firstName = names[changeName].substring(0, nameSplitted1);
const middleName = names[changeName].substring(nameSplitted1, nameSplitted3);
const lastName = names[changeName].substring(nameSplitted3);

console.log(firstName + "\n", middleName + "\n", lastName + "\n");
