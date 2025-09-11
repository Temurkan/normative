///// 1 /////

// function checkIfEven() {
//   const input = prompt("Введите число:");
//   const number = Number(input);

//   if (isNaN(number)) {
//     alert("Пожалуйста, введите корректное число.");
//     return;
//   }

//   if (number % 2 === 0) {
//     alert("Число делится на 2.");
//   } else {
//     alert("Число не делится на 2.");
//   }
// }

// checkIfEven();

///// 2 /////

// function whatNumber() {
//   const input = prompt("Введите число:");
//   const number = Number(input);

//   if (isNaN(number)) {
//     alert("Пожалуйста, введите корректное число.");
//     return;
//   } else if (number < 0) {
//     alert("Число меньше нуля.");
//   } else if (number > 0) {
//     alert("Число больше нуля.");
//   } else if (number === 0) {
//     alert("Число равно нулю.");
//   }
// }
// whatNumber();

///// 3 /////

// function compare() {
//   let a = parseFloat(prompt("Введите первое число:"));
//   let b = parseFloat(prompt("Введите второе число:"));

//   if (isNaN(a) || isNaN(b)) {
//     alert("Пожалуйста, введите корректное число.");
//   }

//   if (a < b) {
//     alert("a меньше b");
//   } else if (a > b) {
//     alert("а больше b.");
//   }
// }
// compare();

///// 4 /////

// function markOfStudent() {
//   let mark = parseFloat(prompt("Сколько у вас балов:"));

//   if (isNaN(mark) || mark < 0) {
//     alert("Пожалуйста, введите корректное число.");
//   }

//   if (mark < 60) {
//     alert(`Вы не прошли экзамен 🙁 у вас ${mark} оценка 2`);
//   } else if (mark > 59 && mark < 70) {
//     alert(`Вы прошли экзамен 😊 у вас ${mark} оценка 3 `);
//   } else if (mark > 69 && mark < 90) {
//     alert(`Вы прошли экзамен 😄 у вас ${mark} оценка 4`);
//   } else if (mark > 89 && mark < 101) {
//     alert(`Вы прошли экзамен 😎 у вас ${mark} оценка 5`);
//   }
// }

// markOfStudent();

///// 5 /////

// function loginCheck() {
//   let login = prompt("Введите логин:");
//   let password = prompt("Введите пароль:");

//   if (login === "ustudy2025" && password === "u9frontend") {
//     alert("Успешно");
//   } else if (login !== "ustudy2025" && password !== "u9frontend") {
//     alert("Введено неправильное логин и пароль");
//   } else if (login !== "ustudy2025") {
//     alert("Введен неправильный логин");
//   } else if (password !== "u9frontend") {
//     alert("Введен неправильный пароль");
//   }
// }
// loginCheck();

///// 2.1 /////

///// Even numbers from 1 to 20 /////

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

///// 2.2 /////

///// Total numbers /////

// let userNumber = parseFloat(prompt("Введите число:"));
// let sum = 0;

// for (let i = 1; i <= userNumber; i++) {
//   sum += i;
// }

// alert(sum);

///// 2.3 /////

///// Total of positive and even numbers /////

// let evenPosNumbers = [7, -8, 2, 6, 9, -4, 12, 3, -11, 18];
// let a = 0;

// evenPosNumbers.forEach((x) => {
//   if (x > 0 && x % 2 === 0) {
//     a += x;
//   }
// });

// console.log(a);

///// 2.4 /////

///// Division by 3 and 5 from 100 /////

// let division = [];

// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     division.push(i);
//   }
// }

// console.log(division);

///// 2.5 /////

///// Biggest and smallest number /////

// let bigSmallNumber = [2, -8, 1, 5, 4, -15, 9, 13];

// let small = bigSmallNumber[0];
// let big = bigSmallNumber[0];

// for (let i = 1; i < bigSmallNumber.length; i++) {
//   if (bigSmallNumber[i] < small) small = bigSmallNumber[i];
//   if (bigSmallNumber[i] > big) big = bigSmallNumber[i];
// }

// console.log(small);
// console.log(big);

///// 3.1 /////

///// Delete last array and do square /////

// arr = [3, 8, 9, 7, 5];

// number = arr.length;

// multi = arr[number];

// arr.unshift(number * number);

// arr.pop();

// console.log(arr);

///// 3.2 /////

// arr = [9, 8, 1, 5, 6, 4];

// let a = 0;

// arr.forEach((x) => {
//   if (x > 0 && x % 2 === 0) {
//     a += x;
//   }
// });

// console.log(a);

///// 3.3 /////

// arr = [2, -8, 9, 1, -15, 3, 0, 5];

//  evenNumbers = arr.filter((x) => x > 0);

// let more = 1;

// evenNumbers.forEach((x) => {
//   more *= x;
// });

// console.log(more);

///// 3.4 /////

// const arr = [6, 1, 3, 5, 6, 2, 0, 4];

// arr.sort((a, b) => {
//   return a - b;
// });

// less = arr.filter((number) => number > 2);

// square = less.map((number) => number * number);
// console.log(square);

///// 3.5 /////
//  arr = [1, [2, 3], [4, [5, 6, 7]]];

//  newArr = arr.flat(Infinity);

// for (let i = 1; i <= newArr.length; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

///// 4.1 /////

// arr = ["Jasmina", "Muhammadior", "Bek", "Yusufxon", "Asad", "John"];

// let more = arr.filter((item) => item.length > 5);
// let less = arr.filter((item) => item.length < 5);

// console.log(more, less);

///// 4.2 /////

// arr = [4, 8, 9, 3, 14, 57];

// let small = arr[0];
// let big = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < small) small = arr[i];
//   if (arr[i] > big) big = arr[i];
// }

// console.log(big - small);

///// 4.3 /////
// arr = ["seVinCh", "IbrohiM", "miRKomil", "JURABEK", "abdulaziz"];

// let upper = arr.map(
//   (a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
// );

// console.log(upper);

///// 4.4 /////

// arr = [16, 20, 8,2,12,27, 13];

// let newArr = arr[arr.length - 1];

// let array = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < newArr) {
//     array.push(arr[i]);
//   }
// }
// if (array.length === 0) {
//   array = [0];
// }
// console.log(array);

///// 4.5 /////

// arr = [1, 2, 2, 3, 4, 4, 5];

// let counts = arr.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;
//   return acc;
// }, {});

// let result = arr.filter((num) => counts[num] === 1);

// console.log(result);

///// 5.1 /////

// let obj = {};

// obj.name = "Marshall";
// obj.age = "45";
// obj.country = "Detroit";

// console.log(obj);

///// 5.2 /////

// let obj = { cur: "dollar", quan: 100 };

// let prodPrice = { cola: 5, potato: 2 };

// let kimsanbek = { cola: 6, potato: 10 };

// obj.quan =
//   obj.quan - prod.cola * kimsanbek.cola - prod.potato * kimsanbek.potato;

// console.log(obj);

///// 5.3 /////

// let obj = { Anvar: 19, Salim: 21, Jasur: 13 };

// let value = Object.values(obj);

// const maxAge = Math.max(...value);

// console.log(maxAge);

///// 5.4 /////
// let obj = { name: "Marsh", age: 30, city: "Detroit" };

// obj.age = 45;

// obj.city = "California";

// let ent = Object.entries(obj);

// console.log(ent);

///// 5.5 /////

// let obj = { Salim: 60, Ali: 50, Kimsan: 90 };

// let keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   let value = obj[key];

//   if (value < 60) {
//     delete obj[key];
//   } else {
//     let newValue = value + "%";
//     obj[key] = newValue;
//   }
// }

// console.log(obj);

///// 6.1 /////

// const user = {
//   name: "Salimxon",
//   age: 25,
//   values() {
//     return Object.values(user);
//   },
// };

// console.log(user.values());

///// 6.2 /////

// const square = {
//   a: 15,
//   b: 10,
//   yuzasi() {
//     let s = this.a * this.b;
//     return s;
//   },
// };

// console.log(square.yuzasi());

///// 6.3 /////

// order = {
//   soliq: 20,
//   kamunal: 12,
//   prava: 980,
//   havo: 3,
//   qanchaKotarildi() {
//     let keys = Object.keys(order);
//     for (let i = 0; i < keys.length; i++) {
//       let key = keys[i];
//       let value = order[key];

//       if (typeof value === "number") {
//         order[key] = order[key] + order[key] * (15 / 100);
//       }
//     }
//   },
// };

// order.qanchaKotarildi();
// console.log(order);

///// 6.4 /////

// person = {
//   Salim: 50,
//   Vali: 87,
//   Ali: 12,
//   deleteUser() {
//     delete person.Vali;
//   },
// };
// person.deleteUser();
// console.log(person);

///// 6.5 /////

// fruits = { olma: 7, mandarin: 4, banan: 6, apelsin: 1 };

// for (const key in fruits) {
//   if (fruits[key] % 2 === 1) {
//     delete fruits[key];
//   }
// }

// console.log(fruits);

///// 7.1 /////
// plusTwo = { Salim: 25, Ali: 17, Malika: 21 };

// for (const key in plusTwo) {
//   plusTwo[key] = plusTwo[key] + 2;
// }

// console.log(plusTwo);

///// 7.2 /////

// users = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 22 },
// ];

// for (const key in users) {
//   let userAll = users[key];
//   console.log(userAll.name + ":" + userAll.age);
// }

///// 7.3 /////
// number = { a: 10, b: "hello", c: 5, d: true };

// let op = Object.keys(number);

// for (const key in number) {
//   if (Number.isFinite(number[key])) {
//     let res = '"' + key + "=" + number[key] + '"';
//     console.log(res);
//   }
// }

///// 7.4 /////
// person = { name: "Lola", age: null, job: "Teacher", city: null };
// for (const key in person) {
//   if (person[key] === null) {
//     delete person[key];
//   }
// }
// console.log(person);

///// 7.5 /////
// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Vali", age: 19 },
//   { name: "Sami", age: 21 },
// ];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].age < 18) {
//     users.splice(i, 1);
//   }
// }

// console.log(users);

// let input = "google";
// function firstRepeat() {
//   for (let i = 0; i < input.length; i++) {
//     if (input.lastIndexOf(input[i]) !== i) {
//       return input[i];
//     }
//   }
//   return null;
// }

// console.log(firstRepeat());

///// 8 /////
// function calculate(a, b) {
//   try {
//     if (isNaN(a) || isNaN(b)) {
//       throw new Error("Оба аргумента должны быть числами.");
//     }

//     let operator = prompt("Введите оператор (+, -, *, /):");
//     let result;

//     if (operator === "+") {
//       result = a + b;
//     } else if (operator === "-") {
//       result = a - b;
//     } else if (operator === "*") {
//       result = a * b;
//     } else if (operator === "/") {
//       if (b === 0) {
//         throw new Error("Деление на ноль невозможно.");
//       }
//       result = a / b;
//     } else {
//       throw new Error("Неверный оператор.");
//     }

//     alert("Результат: " + result);
//   } catch (error) {
//     alert("Ошибка: " + error.message);
//   }
// }
// calculate(4, 5);

///// 8.2 /////

///// 8.4 /////
// function registerUser() {
//   try {
//     let user = {};

//     user.name = prompt("Введите имя:");
//     if (typeof user.name !== "string" || user.name.length < 3) {
//       throw new Error("Имя должно содержать не менее 3 символов");
//     }

//     user.age = Number(prompt("Введите возраст:"));
//     if (isNaN(user.age) || user.age < 7) {
//       throw new Error("Возраст должен быть числом и не меньше 7");
//     }
//     user.email = prompt("Введите почту:");
//     const at = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if (typeof user.email !== "string" || at.test(user.email) == false) {
//       throw new Error("Некорректный email. Он должен содержать '@'");
//     }
//     let answer = prompt("Вы студент? (да/нет)").toLowerCase();
//     if (answer === "да") {
//       user.isStudent = true;
//     } else if (answer === "нет") {
//       user.isStudent = false;
//     } else {
//       throw new Error(
//         "Ответ на вопрос 'Вы студент?' должен быть 'да' или 'нет'"
//       );
//     }
//     alert(`Регистрация успешна! Добро пожаловать, ${user.name}!`);
//     console.log(user);
//   } catch (error) {
//     alert("Ошибка: " + error.message);
//   }
// }

// registerUser();

///// 8.3 /////
// function checkType(x) {
//   if (Array.isArray(x)) {
//     console.log("Bu array");
//   } else {
//     console.log("Bu " + typeof x);
//   }
// }
// checkType({});

///// Closure and Callbacks /////

// function customForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// const numbers = [2, 2, 3];

// customForEach(numbers, function (item) {
//   console.log(item);
// });

// function customFind(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return array[i];
//     }
//   }
//   return undefined;
// }
// const array = [5, 80, 40, 130];

// const result = customFind(array, (item) => item % 10 === 0);
// console.log(result);

// function customSome(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return true;
//     }
//   }
//   return false;
// }
// const array = [5, 80, 40, 130];

// const result = customSome(array, (item) => item % 10 === 0);
// console.log(result);

// function customEvery(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (!callback(array[i], i, array)) {
//       return false;
//     }
//   }
//   return true;
// }
// const array = [10, 80, 40, 130];

// const result = customEvery(array, (item) => item % 10 === 0);
// console.log(result);

/////  Async Await /////

// async function getUserData() {
//   try {
//     const response = await fetch("https://api.escuelajs.co/api/v1/products");
//     const data = await response.json();
//     const title = data.map((p) => p.title);
//     console.log(title);
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }
// getUserData();

// async function getUserData() {
//   try {
//     const response = await fetch("https://api.escuelajs.co/api/v1/users");
//     const data = await response.json();
//     const title = data.map((p) => p.name);
//     console.log(title);
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }
// getUserData();

// async function getUserData() {
//   try {
//     const response = await fetch("https://api.escuelajs.co/api/v1/categories");
//     const data = await response.json();
//     const title = data.map((p) => p.name);
//     console.log(title);
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }
// getUserData();

// const body = document.querySelector("#div");
// const div = document.querySelector("#change");
// const btn = document.querySelector("#changeText");
// const hover = document.querySelector("#hover");
// const toggle = document.querySelector("#toogle");
// const tog = document.querySelector("#tog");
// const img = document.querySelector("#img");
// const imgBtn = document.querySelector("#imgBtn");
// const input = document.querySelector("#input");
// const changeBg = document.querySelector("#changeBg");
// const red = document.querySelector("#red");
// const green = document.querySelector("#green");
// const blue = document.querySelector("#blue");
// const mode = document.querySelector("#mode");

// ///// EXERCISE 1 /////
// btn.addEventListener("click", () => {
//   div.style.backgroundColor = "green";
// });

// ///// EXERCISE 2 /////
// hover.addEventListener("mouseover", () => {
//   hover.classList.add("active");
// });
// hover.addEventListener("mouseout", () => {
//   hover.classList.remove("active");
// });

// ///// EXERCISE 3 /////
// toggle.addEventListener("click", () => {
//   tog.classList.toggle("highlight");
// });

// ///// EXERCISE 4 /////
// imgBtn.addEventListener("click", () => {
//   img.classList.toggle("img");
// });

// ///// EXERCISE 5 /////
// input.addEventListener("input", () => {
//   if (input.value.length < 5) {
//     input.style.border = "2px solid red"; // меньше 5 символов
//   } else {
//     input.style.border = "2px solid green"; // 5 и больше
//   }
// });

// ///// EXERCISE 6 /////
// red.addEventListener("click", () => {
//   changeBg.style.backgroundColor = "red";
// });
// green.addEventListener("click", () => {
//   changeBg.style.backgroundColor = "green";
// });
// blue.addEventListener("click", () => {
//   changeBg.style.backgroundColor = "blue";
// });

// ///// EXERCISE 7 /////
// mode.addEventListener("click", () => {
//   body.classList.toggle("mode");
// });

////// DOM ACCORDION ///////

// const btn = document.querySelectorAll(".btn");
// const text = document.querySelector("p");

// btn.forEach((header) => {
//   header.addEventListener("click", () => {
//     const content = header.nextElementSibling;
//     const openItem = document.querySelector("p.active");
//     if (openItem && openItem !== content) openItem.classList.remove("active");
//     content.classList.toggle("active");
//   });
// });

// const btns = document.querySelectorAll(".btn");
// const texts = document.querySelectorAll("p");
// const svgs = document.querySelectorAll(".btn svg");

// btns.forEach((header) => {
//   header.addEventListener("click", () => {
//     const accordionItem = header.parentElement;
//     const text = accordionItem.querySelector("p");
//     const svg = accordionItem.querySelector("svg");

//     texts.forEach((content) => {
//       if (content !== text) {
//         content.classList.remove("active");
//         content.style.maxHeight = "0";
//       }
//     });
//     svgs.forEach((s) => {
//       if (s !== svg) s.classList.remove("active");
//     });

//     text.classList.toggle("active");
//     svg.classList.toggle("active");

//     if (text.classList.contains("active")) {
//       text.style.maxHeight = text.scrollHeight + "px";
//     } else {
//       text.style.maxHeight = "0";
//     }
//   });
// // });

const toastBtn = document.querySelector("#btn");
const sonner = document.querySelector("#sonner");
const undoBtn = document.querySelector("#undo");

toastBtn.addEventListener("click", () => {
  sonner.classList.add("active");
  function greet() {
    sonner.classList.remove("active");
  }

  setTimeout(greet, 4000);
});

undoBtn.addEventListener("click", () => {
  sonner.classList.remove("active");
});
