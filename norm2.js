///// 2.1
// let n = 5;
// let fib = [];
// for (let i = 0; i <= 5; i++) {
//   i = i - 1 + (i - 2);
//   console.log(i);
// }
// let a = 0;
// let b = 1;
// let arr = [0];
///// 2.5

// let word = "raca";
// let newWord = word.split("").reverse().join("");

// console.log(word === newWord);

///// 2.10
// for (let i = 0; i < 6; i++) {
//   let t = a + b;
//   a = b;
//   b = t;
//   arr.push(a);
// }
// console.log(arr);

///// 2.15
// arr = [
//   { type: "fruit", name: "apple" },
//   { type: "fruit", name: "banana" },
//   { type: "vegetable", name: "carrot" },
// ];
// const flattenedArray = arr.reduce((groupedFruits, fruit) => {
//   const type = fruit.type;
//   if (groupedFruits[type] == null) groupedFruits[type] = [];
//   groupedFruits[type].push(fruit.name);
//   return groupedFruits;
// }, {});

// console.log(flattenedArray);

///// 2.20
// async function getName() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
//   const user = await res.json();
//   console.log("Input: https://jsonplaceholder.typicode.com/users/1");

//   console.log("Output: " + user.name);
// }

// getName();
