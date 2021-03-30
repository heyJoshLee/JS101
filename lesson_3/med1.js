// // 1

// let string = "The Flintstones Rock!";

// let times = 10;

// // print 10 times
// for (let i = 1; i <= times; i++ ) {

//   let spacesString = '';

//   for (let j = 1; j <= i; j++) {
//     if (i === 1) continue;
//     spacesString = spacesString + ' ';
//   }

//   console.log(spacesString + string);
// }


// // 2 

// let munstersDescription = "The Munsters are creepy and spooky.";

// function switchCase(string) {
//   let arr =  string.split('').map(function(letter) {
//     if (letter === letter.toLowerCase()) {
//       return letter.toUpperCase();
//     } else {
//       return letter.toLowerCase();
//     }
//   });
//     return arr.join('');
// } 

// console.log(switchCase(munstersDescription));

// 3

// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   for (; divisor >= 1; divisor--) {
//    if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//   }
//   return factors;
// }

// console.log(factors(-20))


// 5

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}