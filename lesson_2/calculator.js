const MESSAGES = require("./calculator_messages.json");
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let language = "en"

language = readline.question("Language: 1) EN 2)CN ");

while (!["en", "cn"].includes(language.toLowerCase())) {
  console.log("Please select a language");
  language = readline.question("Language: 1) EN 2)CN ");
} 

let keepGoing = true;
do {
  prompt(MESSAGES[language]["greeting"]);

  prompt(MESSAGES[language]["firstNumber"]);
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt(MESSAGES[language]["notANumber"]);
    firstNumber = readline.question();
  }


  prompt(MESSAGES[language]["secondNumber"]);
  let secondNumber = readline.question();


  while (invalidNumber(secondNumber)) {
    prompt(MESSAGES[language]["notANumber"]);
    secondNumber = readline.question();
  }


  prompt(MESSAGES["operation"]);
  console.log(MESSAGES[language]["operationChoices"]);
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


  console.log(MESSAGES[language]["result"] + " " + output);
  console.log(`===========`);

  let checkKeepGoing = readline.question(MESSAGES[language]["keepGoing"]).toLowerCase();

  if (checkKeepGoing !== "y") {
    keepGoing = false;
  }

} while (keepGoing);

console.log(MESSAGES[language]["goodbye"]);
