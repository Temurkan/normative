// ///// 2.1
// // let n = 5;
// // let fib = [];
// // for (let i = 0; i <= 5; i++) {
// //   i = i - 1 + (i - 2);
// //   console.log(i);
// // }
// // let a = 0;
// // let b = 1;
// // let arr = [0];
// ///// 2.5

// // let word = "raca";
// // let newWord = word.split("").reverse().join("");

// // console.log(word === newWord);

// ///// 2.10
// // for (let i = 0; i < 6; i++) {
// //   let t = a + b;
// //   a = b;
// //   b = t;
// //   arr.push(a);
// // }
// // console.log(arr);

// ///// 2.15
// // arr = [
// //   { type: "fruit", name: "apple" },
// //   { type: "fruit", name: "banana" },
// //   { type: "vegetable", name: "carrot" },
// // ];
// // const flattenedArray = arr.reduce((groupedFruits, fruit) => {
// //   const type = fruit.type;
// //   if (groupedFruits[type] == null) groupedFruits[type] = [];
// //   groupedFruits[type].push(fruit.name);
// //   return groupedFruits;
// // }, {});

// // console.log(flattenedArray);

// ///// 2.20
// // async function getName() {
// //   const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
// //   const user = await res.json();
// //   console.log("Input: https://jsonplaceholder.typicode.com/users/1");

// //   console.log("Output: " + user.name);
// // }

// // getName();

// // 1
// function makeNegative(num) {
//   if (num > 0) {
//     num = -num;
//   }
//   console.log(num);
// }

// makeNegative(-54);
// makeNegative(54);
// makeNegative(0);
// // 2
// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }
// evenOrOdd(4);
// evenOrOdd(5);
// // 3
// function removeChar(str) {
//   let str1 = str.split("");
//   str1.shift();
//   str1.pop();
//   let str2 = str1.join("");

//   console.log(str2);
// }
// removeChar("hello");

// // 4 //
// function solution(string) {
//   let rev = string.split("").reverse().join("");
//   console.log(rev);
// }

// solution("world");

// // 5 //
// function positiveSum(arr) {
//   evenNumbers = arr.filter((x) => x > 0);

//   let more = 0;

//   evenNumbers.forEach((x) => {
//     more += x;
//   });
//   console.log(more);
// }

// positiveSum([2, -4, 6, -5, 1, 13]);

// // 6 //
// function stringRepeat(n, s) {
//   for (let i = 0; i < n; i++) {
//     console.log(s);
//   }
// }

// stringRepeat(3, "ha");
// // 7 //
// function getMiddle(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s.length % 2 === 0) {
//       let mid = s.length / 2;
//       let letter = s[mid - 1] + s[mid];
//       console.log(letter);
//       return;
//     } else {
//       let midl = s.length / 2 + 0.5;
//       let letter = s[midl];
//       console.log(letter);
//       return;
//     }
//   }
// }

// getMiddle("test");
// getMiddle("hello");

// // 8 //
// function findShort(sent) {
//   let word = sent.split(" ");
//   let small = word[0].length;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length < small) small = word[i].length;
//   }
//   console.log(small);
// }

// findShort("Simple and easy");

// // 9 //
// function accum(x) {
//   let result = "";
//   for (let i = 0; i < x.length; i++) {
//     result = x[i] + x[+i] + x[++i];
//   }
//   console.log(result);
// }

// accum("hello");

// function descend(f) {
//   const arr = f.toString().split("");
//   arr.sort((a, b) => b - a);
//   arr.join("");
//   console.log(arr.join(""));
// }
// descend(1873173);

// // 10 //
// function repeatByIndex(word) {
//   let result = word
//     .split("")
//     .map((letter, index) => letter.repeat(index + 1))
//     .join("-");
//   return result;
// }

// console.log(repeatByIndex("cat"));
// console.log(repeatByIndex("FdmsmdF"));
