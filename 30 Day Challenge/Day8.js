//Day 8 ES6 + Features

//Task/Activities

//Activity 1 : Template Literals

//Task 1 :

// let name = "Akhlaque Ahmad";
// let age = 26;

// console.log(`My name is ${name} and I am ${age} years old.`);

//Task 2 :

// console.log(`My name is Akhlaque Ahmad.
//   I am 26 years old.
//   I am React Developer with 1.2years of Experience.`);

//Activity 2 : Destructuring

//Task 3 :

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const [a, b] = array;

// console.log(a, b);

//Task 4 :

// const library = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };

// const { title, author } = library;

// console.log(title, author);

//Activity 3 : Spread and Rest Operator

//task 5 :

// let array = [1, 2, 3, 4, 5];
// let newArray = [...array, 6, 7, 8];
// console.log(newArray);

//Task 6 :

// function rest(...rest) {
//   let ele = 0;
//   for (let element of rest) {
//     ele += element;
//   }
//   return ele;
// }
// console.log(rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Activity 4 : Default Parameters

// Task 7 :

// function defaultFun(a, b = 1) {
//   return a * b;
// }
// console.log(defaultFun(7));

//Activity 5 : Enchanced  Object Literals

//task 8

// let name = "Akhlaque";
// let des = "React Developer";

// let obj = {
//   name,
//   des,
//   fun() {
//     console.log(`My name is ${this.name} and I am ${this.des}.`);
//   },
//   ["age"]: 26,
// };

// console.log(obj);.

//Task 9

// let key = "Favourite Food";
// let value = "Biryani";

// let obj = {
//   [key]: value,
// };
// console.log(obj);
