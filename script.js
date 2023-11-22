const password = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Num = "01234567890";
const Sym = "~!@#$%^&*()_+|{}/";

function generateRandomUpper() {
  let ranUpperChar = Math.floor(Math.random() * upperCase.length);
  return upperCase[ranUpperChar];
}
let generateRandomChara = generateRandomUpper();

function generateRandomLower() {
  let ranLowerChar = Math.floor(Math.random() * LowerCase.length);
  return LowerCase[ranLowerChar];
}
// console.log(generateRandomLower());

function generateRandomNumber() {
  let ranNumber = Math.floor(Math.random() * Num.length);
  return Num[ranNumber];
}
// console.log(generateRandomNumber());

function generateRandomSym() {
  let ranSym = Math.floor(Math.random() * Sym.length);
  return Sym[ranSym];
}
// console.log(generateRandomSym());
// let ranUpperChar;
// let ranLowerChar;
// let ranNumber;
// let ranSym;
// function generateRandomchar() {
//   ranUpperChar = Math.floor(Math.random() * upperCase.length);
//   ranLowerChar = Math.floor(Math.random() * LowerCase.length);
//   ranNumber = Math.floor(Math.random() * Num.length);
//   ranSym = Math.floor(Math.random() * Sym.length);
// }
// generateRandomchar();

function randam4CharUpper(lenght) {
  let result = "";
  for (let i = 0; i < lenght; i++) {
    result += generateRandomUpper();
  }
  return result;
}
function randam4CharLower(lenght) {
  let result = "";
  for (let i = 0; i < lenght; i++) {
    result += generateRandomLower();
  }
  return result;
}
function randam4CharNum(lenght) {
  let result = "";
  for (let i = 0; i < lenght; i++) {
    result += generateRandomNumber();
  }
  return result;
}
function randam4CharSym(lenght) {
  let result = "";
  for (let i = 0; i < lenght; i++) {
    result += generateRandomSym();
  }
  return result;
}

function mixAllFun() {
  return (
    randam4CharUpper(4) +
    randam4CharLower(4) +
    randam4CharSym(4) +
    randam4CharNum(4)
  );
}

console.log(mixAllFun());

console.log(randam4CharUpper(4));
console.log(randam4CharLower(4));
console.log(randam4CharNum(4));
console.log(randam4CharSym(4));
let chekbox = document.querySelector("#checkboxupper").value;
if (chekbox == "upperCase") {
  console.log("working bhai");
}
