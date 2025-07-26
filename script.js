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
