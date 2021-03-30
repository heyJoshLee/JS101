// let obj = {};

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];


// flintstones.forEach((item, index) => {
//   obj[item] = index;
// })

// console.log(obj)

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let sumAges = 0;
// Object.keys(ages).forEach((name, age) => {
//   sumAges += ages[name];
// })

// console.log(sumAges);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let youngest = ages["Herman"]

// Object.keys(ages).forEach(name => {
//   if (ages[name] < youngest) {
//     youngest = ages[name];
//   }
// })

// console.log(youngest); 

// let statement = "The Flintstones Rock";

// let returnObject = {};

// statement.split("").forEach(letter => {
//   if (letter === " ") return;
//   if (!returnObject.hasOwnProperty(letter)) {
//     returnObject[letter] = 1;
//   } else {
//     returnObject[letter] +=1;
//   }
// })
// console.log(returnObject);


let result = [1, 2, 3, 4, 5].forEach(num => num + 1);
console.log(result); // []

