const readline = require('readline-sync');

const TARGET_VALUE = 21;

const SUITS = ['S', 'C', 'H', 'D'];
const VALUES = ['2', '3', '4', '5', '6',
                '7', '8', '9', '10', 'J',
                'Q', 'K', 'A'];

const MIN_BET = 100;

function printCard(num, suit) {
  console.log(`${num} of ${suit}`);
}

function createDeck(suits, values) {
  const tempDeck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      tempDeck.push([value, suit]);
    });
  });
  return tempDeck;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function drawCard(player, deck) {
  const newCard = deck.shift();
  player.cards.push(newCard);
}

function showCards(player, hideFirstCard = false) {
  let idx = 0;

  if (hideFirstCard) {
    printCard('*', '*');
    idx = 1;
  }

  for (; idx < player.cards.length; idx++) {
    printCard(player.cards[idx][0], player.cards[idx][1]);
  }
}

function hideDealerFullTotal(dealer) {
  let total = 0;
  let numAces = 0;
  for (let i = 1; i < dealer.cards.length; i++) {
    const value = dealer.cards[i][0];
    if (value === 'A') {
      numAces += 1;
      total += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      total += 10;
    } else {
      total += Number(value);
    }
  }

  while (numAces > 0 && total > TARGET_VALUE) {
    total -= 10;
    numAces -= 1;
  }

  console.log(`${dealer.name} is showing ${total}`);
}

function handTotal(player) {
  let total = 0;
  let numAces = 0;
  player.cards.forEach((card) => {
    const value = card[0];

    if (value === 'A') {
      numAces += 1;
      total += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      total += 10;
    } else {
      total += Number(card[0]);
    }
  });

  while (numAces > 0 && total > TARGET_VALUE) {
    total -= 10;
    numAces -= 1;
  }
  return total;
}

function printHandString(player) {
  console.log(`${player.name} has ${handTotal(player)}.`);
}

function printGameBoard(player, dealer, hideFirstCard = false) {
  console.clear();
  showCards(dealer, hideFirstCard);
  if (hideFirstCard) {
    hideDealerFullTotal(dealer);
  } else {
    printHandString(dealer);
  }
  console.log('-------------');
  showCards(player);
  printHandString(player);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function checkBust(player) {
  return handTotal(player) > TARGET_VALUE;
}

function calculateWinner(player, dealer, wager) {
  if (checkBust(dealer)) {
    console.log('Dealer busts. You win!');
    player.money += wager;
  } else if (handTotal(player) > handTotal(dealer) && !checkBust(player)) {
    console.log('You win!');
    player.money += wager;
  } else {
    console.log('Dealer wins');
    player.money -= wager;
  }
}

function dealerKeepsHitting(player, dealer, deck) { 
  while (handTotal(dealer) <= handTotal(player) && !checkBust(dealer) && !checkBust(player)) {
    drawCard(dealer, deck);
    printGameBoard(player, dealer);
  }
}

function deal(player, dealer, deck) {
  drawCard(dealer, deck);
  drawCard(player, deck);
  drawCard(dealer, deck);
  drawCard(player, deck);
}

function displayMoney(player) {
  console.log(`You have $${player.money}`)
}


// Initilaize game


let keepPlaying = true;

  let player = {
    name: 'Player',
    cards: [],
    money: 1000
  };

  let dealer = {
    name: 'Dealer',
    cards: [],
  };


console.log("What's your name?");

player.name = readline.prompt();

if (!player.name) player.name = "Player";


while (true) {

  if (player.money < MIN_BET) {
    console.log("You don't have enough money to play :(.")
    break;
  }

  console.clear();

  let wager = 0;





  /// TODO FIX wagering


  do {
    displayMoney(player);
    console.log("What's your wager?");
    wager = parseInt(readline.prompt());

    if (wager > player.money) {
      console.log("You don't have that much money.")
    }
  } while (isNaN(wager) || wager > player.money)

  let deck = createDeck(SUITS, VALUES);
  shuffle(deck);
  player.cards = [];
  dealer.cards = [];

  deal(player, dealer, deck);

  printGameBoard(player, dealer, true);


  while (!checkBust(player)) {
    let wantToHit;

    do {
      prompt('Hit (H) or Stay (S)?');
      wantToHit = readline.question().toLowerCase();
    } while (!['h', 's'].includes(wantToHit));

    if (wantToHit === 'h') {
      drawCard(player, deck);
      printGameBoard(player, dealer, true);
    }
    if (wantToHit === 's') break;
  }

  printGameBoard(player, dealer);

  if (checkBust(player)) {
      calculateWinner(player, dealer, wager);
  } else {
    dealerKeepsHitting(player, dealer, deck);
    calculateWinner(player, dealer, wager);
  }

  let anotherRound;

  do {
    if (player.money < MIN_BET) break;
    prompt('Play another hand? Yes (y) / No (n)');
    displayMoney(player);
    anotherRound = readline.question().toLowerCase();
  } while (!['y', 'n'].includes(anotherRound));  

  if (anotherRound === 'n') break;

}

console.log(`Thanks for playing, ${player.name}! You go home with $${player.money}.`)