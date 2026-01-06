//1. Sukurkite funkciją, kuri paverstų eurus į dolerius. Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000. Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį doleriais.
const rateEurToUsd = 1.17;
function conEurToUsd(eur) {
  const usd = eur * rateEurToUsd;
  return usd;
}

const myEUR = Math.floor(Math.random() * 1000) + 1;
const myUSD = conEurToUsd(myEUR);
console.log(`EUROS: ${myEUR}, US DOLLARS: ${myUSD.toFixed(2)}`);

//2. Sukurkite funkciją, kuri paverstų dolerius į eurus. Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000. Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį eurais.
function convertUsdToEur(dollars) {
  const euros = dollars / rateEurToUsd;
  return euros;
}

const randomDollars = Math.floor(Math.random() * 1000) + 1;
const randomEuros = convertUsdToEur(randomDollars);
console.log(`US DOLLARS: ${randomDollars}, EUROS: ${randomEuros.toFixed(2)}`);

//3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index), kai yra žinomas žmogaus ūgis ir svoris.
function calcBMI(heightInM, weightInKg) {
  const bmi = weightInKg / (heightInM * heightInM);
  return bmi;
}

const height = 1.9;
const weight = 90;
const bodyMass = calcBMI(height, weight);
console.log(
  `Height: ${height}, Weight: ${weight}, BMI: ${bodyMass.toFixed(1)}`
);

//4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais pasakytų kiek tai yra sekundėmis, minutėmis, valandomis, dienomis.
function age(ageInYears) {
  const days = ageInYears * 365;
  const hours = days * 24;
  const minutes = hours * 60;
  const seconds = minutes * 60;

  console.log("Age:", ageInYears);
  console.log("Days:", days);
  console.log("Hours:", hours);
  console.log("Minutes:", minutes);
  console.log("Seconds:", seconds);
}
age(32);

//5. Parašykite programą, kuri konvertuos termometro duomenis iš Farenheito į Celsijų, ir atvirkščiai.
function FtoC(f) {
  const c = (f - 32) * (5 / 9);
  return c;
}

function CtoF(c) {
  const f = c * (9 / 5) + 32;
  return f;
}

const f1 = 50;
console.log("50F to C:", FtoC(f1));

const c1 = 10;
console.log("10C to F:", CtoF(c1));

//6. Sukurkite kodą, kuris išspausdins į konsolę 1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po dešimties neturėtų būti brūkšniuko.
const numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers.join("-"));

//7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
// *
// * *
// * * *
// * * * *
// * * * * *
for (let nextLine = 1; nextLine <= 5; nextLine++) {
  let line = "";
  for (let stars = 1; stars <= nextLine; stars++) {
    line = line + "* ";
  }
  console.log(line);
}

//8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
function daysUntilChristmas() {
  const today = new Date();
  const year = today.getFullYear();

  let christmas = new Date(year, 11, 25);

  if (today > christmas) {
    christmas = new Date(year + 1, 11, 25);
  }

  const dif = christmas - today;
  const days = Math.ceil(dif / (1000 * 60 * 60 * 24));

  console.log(`Days until Christmas: ${days}`);
}
daysUntilChristmas();

//9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną tekstinę eilutę. Turėtumėte gauti tokį rezultatą: Tomas,Dainius,Paulius,Jonas. Tomas+Dainius+Paulius+Jonas.
const names = ["Tomas", "Dainius", "Paulius", "Jonas"];
const namesWithCommas = names.join(",");
const namesWithPluses = names.join("+");
console.log(`Names with commas: ${namesWithCommas}`);
console.log(`Names with pluses: ${namesWithPluses}`);

//10. Parašykite kodą, kuris sugeneruos dvylikos simbolių slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė, mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
function getRandomChar(charSet) {
  const index = Math.floor(Math.random() * charSet.length);
  return charSet[index];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generatePswrd(length = 12) {
  const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    digits: "0123456789",
    spec: "!@#$%^&*()_+-=[]{};:,.<>?",
  };

  let result = [];
  result.push(getRandomChar(charSets.uppercase));
  result.push(getRandomChar(charSets.lowercase));
  result.push(getRandomChar(charSets.digits));
  result.push(getRandomChar(charSets.spec));

  const allChars = Object.values(charSets).join("");
  for (let i = result.length; i < length; i++) {
    result.push(getRandomChar(allChars));
  }

  return shuffleArray(result).join("");
}

console.log(`Random Password: ${generatePswrd(12)}`);
