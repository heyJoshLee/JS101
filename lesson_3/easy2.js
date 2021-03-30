// // 1

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// let newAdvice = advice.replace("important", "urgent");
// console.log(newAdvice)

// // 2
// function reverse(arr) {
//   return arr.slice().reverse();
// }


// console.log(reverse([1,2,3]));


// // 3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// console.log(numbers.includes(8));
// console.log(numbers.includes(95));

// // 5

// let famousWords = "seven years ago...";

// let returnString = "Four score and " + famousWords;

// let secondOption = "Four scor and ".concat(famousWords);


// // 5

// let arr = [1, 2, 3, 4, 5]
// arr.splice(2, 1);
// console.log(arr);


// // 6
// let flintstones = ["Fred", "Wilma"];
// flintstones = flintstones.concat(["Barney", "Betty"]);
// flintstones = flintstones.concat(["Bambam", "Pebbles"]);

// console.log(flintstones);

// 7

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let arr = Object.entries(flintstones)[2]

// console.log(arr);

// 8
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers)); 
// console.log(Array.isArray(table)); 

// 9
let title = "Flintstone Family Members";
let width = 40;

let padding = Math.floor((width - title.length) / 2);
title.padStart(padding + title.length);

// 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => === 't').length;
statement2.split('').filter(char => === 't').length;







