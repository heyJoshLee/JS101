// 1
let numbers = [1, 2, 3, 4];


// let counter = numbers.length;
// for (let i = 0; i < counter; i++) {
//   numbers.pop();
// }

// console.log(numbers);


// let counter = numbers.length;
// for (let i = 0; i < counter; i++) {
//   numbers.shift();
// }

// console.log(numbers);

numbers.splice(0, numbers.length);

// 5
function isValid Color (color) {
  return (color === "blue" || color === "green");
}