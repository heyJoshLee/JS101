const readline = require("readline-sync");
let loanAmount;
let apr;
let durationInYears;


function prompt(message) {
  console.log("=> " + message);
}


// get the loan amount
do {
  prompt("Enter the Loan Amount");
  loanAmount = readline.question();
} while (loanAmount < 1 || !Number(loanAmount));

do {
  prompt("How many years long is the loan?");
  durationInYears = readline.question();
} while (durationInYears < 1 || !Number(durationInYears));

do {
  prompt("Enter the APR as a decimal. 5% is 0.05.");
  apr = readline.question();
} while (apr > 1 || !Number(apr));


// 132.52

let monthlyRate = apr / 12;
let months = durationInYears * 12;

let monthlyPayment = loanAmount * 
  (monthlyRate / 
  (1 - Math.pow((1 + monthlyRate), (-months))));

console.log("Monthly payments are: " + monthlyPayment.toFixed(2));

