const user = {
  name: "Ali",
};

console.log(user.hasOwnProperty("email"));

const person = {
  name: "Vali",
  age: 17,
};

if (person.age >= 7) {
  console.log("Maktabga bor!!!");
} else {
  console.log("bogchaga bor!!!");
}

const product = {
  name: "Telefon",
  price: 1200,
  color: "black",
};

for (const [key, value] of Object.entries(product)) {
  console.log(`${key} : ${value}`);
}

const book = {
  title: "JavaScript Asoslari",
  author: "John Doe",
};

let obj = Object.keys(book);

console.log(obj);

const salaries = {
  Ali: 500,
  Vali: 700,
  Hasan: 900,
};

let sal = Object.values(salaries);

let sum = 0;

for (let i = 0; i < sal.length; i++) {
  sum += sal[i];
}

console.log(sum);
