const readline = require("readline-sync");

console.log("Welcome to Calculator");

console.log("What is the first number?");
let firstNumber = readline.question();


console.log("What is the second number?");
let secondNumber = readline.question();


console.log("What operation would you like to perform?");
console.log("1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;
if (operation === "1") {
  output = Number(firstNumber) + Number(secondNumber); 
} else if (operation === "2") {
  output = Number(firstNumber) - Number(secondNumber); 
} else if (operation === "3") {
  output = Number(firstNumber) * Number(secondNumber);
} else if (operation === "4") {
  output = Number(firstNumber) / Number(secondNumber);
}


console.log(`The result is ${output}`);



// get first number

// get second number

// get operation

// perform operation

// print result