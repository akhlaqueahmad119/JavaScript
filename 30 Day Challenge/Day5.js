// Day5 :Functions
//Activity 1 : Fuction Declaration

//Task1

// function evenOrOdd(num) {
//   if (num % 2 === 0) console.log("even");
//   else console.log("odd");
// }

// evenOrOdd(69);

//Task2

// function square(num) {
//   return num * num;
// }
// console.log(square(7));

//Activity 2 : Function Expression

// Task3

// const max = (a, b) => {
//   a > b ? console.log(a) : console.log(b);
// };
// max(9, 3);
//optiomize code 
// const max = (a, b) => a > b ? a : b;
// console.log(max(9, 3))

//Task4

// const concat = (a, b) => {
//   return a + " " + b;
// };
// console.log(concat("Akhlaque", "Ahmad"));

//Arrow Functions

//Task 5 :

// const number = (a, b) => {
//   return a + b;
// };
// console.log(number(2, 3));

//Task 6 :

// const boolean = (str, str1) => {
//   // console.log(str.toLowerCase());
//   for (let i = 0; i < str.length; i++) {
//     if (atr[i] === str1) return true;
//   }
//   return false;
// };
// console.log(boolean("Akhlaque", "e"));

// Activity 5: Function Parameters and Default Values

//Task 7 :

// function product(a, b = 5) {
//   return a * b;
// }
// console.log(product(6));

//Task 8 :

// function greet(name, age = 26) {
//   return `My name is ${name} Ahmad and age is ${age}`
// }
// console.log(greet("Akhlaque"));

//Activity 5: HOC

//Task 9

//  const fun = () => console.log("Akhlaque Ahmad");

// function hoc(fun, times) {
//   return function () {
//     for (let i = 1; i <= times; i++) {
//       fun();
//     }
//   };
// }

// hoc(fun, 3)();

//Task 10 :

// const a = function (name) {
//   return name;
// };
// const b = function (name) {
//   console.log(name);
// };

// function higherOderFunction(a, b, name) {
//   return b(a(name));
// }

// higherOderFunction(a, b, "Akhlaque");
