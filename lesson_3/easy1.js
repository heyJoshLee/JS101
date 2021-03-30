// 4

let munstersDescription = "the Munsters are CREEPY and Spooky.";

function sentenceCase(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(sentenceCase(munstersDescription));


// 5
// true
// false


// 6

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges)

console.log(ages);

// 7

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

// 8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// 9
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy");
// console.log(flintstones);


// 10

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0, advice.indexOf("house")));