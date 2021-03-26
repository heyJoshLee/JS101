function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


const readline = require("readline-sync");

prompt("Welcome to Calculator");

prompt("What is the first number?");
let firstNumber = readline.question();

while (invalidNumber(firstNumber)) {
  prompt("Hmm... that doesn't look like a valid number.");
  firstNumber = readline.question();
}


prompt("What is the second number?");
let secondNumber = readline.question();


while (invalidNumber(secondNumber)) {
  prompt("Hmm... that doesn't look like a valid number.");
  secondNumber = readline.question();
}


prompt("What operation would you like to perform?");
console.log("1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();


while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1, 2, 3 or 4.");
  operation = readline.question();
}


let output;
switch (operation) {
  case "1":
    output = Number(firstNumber) + Number(secondNumber);
    break;
  case "2":
    output = Number(firstNumber) - Number(secondNumber);
    break;
  case "3":
    output = Number(firstNumber) * Number(secondNumber);
    break;
  case "4":
    output = Number(firstNumber) / Number(secondNumber);
    break;
}


console.log(`The result is ${output}`);

