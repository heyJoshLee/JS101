const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const VALID_INPUTS = ['r', 'p', 's', 'l', 'k'];
const NUM_TO_WIN = 5;


let playerPoints = 0;
let computerPoints = 0;
let round = 0;
function prompt(message) {
  console.log(`=> ${message}`);
}

function returnWinner(choice, computerChoice) {

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock') ) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'paper')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return 'player';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function displayWinnerMessage(playerPoints, computerPoints) {
  if (playerPoints > computerPoints) {
    console.log("==========");
    console.log("|You win!|");
    console.log("==========");
  } else {
    console.log("===========");
    console.log("|You lose.|");
    console.log("===========");
  }
}

function displayRoundResults(winner) {
  if (winner === "tie") {
    console.log("It's a tie");
  } else if (winner === 'player') {
    console.log("You win");
    playerPoints += 1;
  } else {
    console.log("Computer wins");
    computerPoints += 1;
  }
}

function displayStartingMessage() {
  console.log("*********************");
  console.log("Best out of 5!");
  console.log("*********************");
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function displayValidChoices () {
  prompt('Choose one:');
  for (let idx = 0; idx < VALID_CHOICES.length; idx++) {
    console.log(`Type ${VALID_INPUTS[idx]} for ${VALID_CHOICES[idx]}`);
  }
}

function displayRoundInformation(roundNumber) {
  console.log("-------");
  console.log(`Round ${roundNumber}`);
  console.log("-------");
}

displayStartingMessage();


while (true) {
  round += 1;
  displayRoundInformation(round);

  displayValidChoices();

  let input = readline.question();
  let choice = VALID_CHOICES[VALID_INPUTS.indexOf(input)];

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice");
    input = readline.question();
    choice = VALID_CHOICES[VALID_INPUTS.indexOf(input)];
  }

  let computerChoice = getComputerChoice();

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  let winner = returnWinner(choice, computerChoice);

  displayRoundResults(winner);

  console.log(`Player points: ${playerPoints}`);
  console.log(`Computer points: ${computerPoints}`);

  if (playerPoints === NUM_TO_WIN || computerPoints === NUM_TO_WIN) break;
}

displayWinnerMessage(playerPoints, computerPoints);

