// let arr = ['10', '11', '9', '7', '8'];

// let sorted = arr.sort((a, b) => {
//   return Number(b) - Number(a);
// })


// console.log(sorted)

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// let earliest = books.sort((a, b) => {
//   return Number(a['published']) - Number(b["published"]);
// })

// console.log(earliest)

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

// console.log(arr1[2][1][3]);
// console.log(arr2[1].third[0]);
// console.log(arr3[2].third[0][0])
// console.log(obj1.b[1])
// console.log(Object.keys(obj2.third)[0])


// let arr1 = [1, [2, 3], 4];
// console.log(arr1[1][1] + 1)

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// console.log(arr2[2] + 1)
// let obj1 = { first: [1, 2, [3]] };
// console.log(obj1.first[2][0] + 1)
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// console.log(obj2.a.a[2] + 1)

// let total = 0;

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// // Object.keys(munsters).forEach(name => {
// //   if (munsters[name]['gender'] === 'male') {
// //     total += munsters[name]['age']    
// //   }
// // })
// // console.log(total)

// Object.keys(munsters).forEach(munster => {
//   console.log(`${munster} is a ${munsters[munster].age}-year-old ${munsters[munster]['gender']}.`)
// })

// Object.entries(munsters).forEach(object => {
//   console.log(object[0])
// })



// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// arr.slice().map(object => {
//   Object.keys(object).forEach(key => {
//     object[key] = object[key] + 1
//   })
// })


// console.log(arr)

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// arr.forEach(insideArray => {
//   insideArray.filter(number =>{
//     return number % 3 === 0;
//   })
// })

// console.log(arr)


// const ARR = [
//   { one: '1', two: 2 },
//   [ { four: 5, three: 6 }, 'three' ],
//   'three',
//   { '2': 'two', '3': 'three' }
// ]

// console.log(ARR[3][3])


function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));
