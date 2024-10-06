//Day 7 : Objects

// Task/Activities

//Activity 1 : Object Creation and Access

//Task 1 :

// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
// };
// console.log(book);

//Task: 2

// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
// };
// console.log(book.title);
// console.log(book.author);

//Activity 2 : Object Methods

// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
//   fun: function () {
//     // console.log(this);
//     return `The ${this.title} book is written by ${this.author}.`;
//   },
// };

// const data = book.fun();
// console.log(data);

// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
//   fun: function (newYear) {
//     // console.log(this);
//     this.year = newYear;
//   },
// };

// const data = book.fun(2024);
// console.log(data);
// console.log(book);

//Activity 3 : Nested Objects

//Task 5 :

// Create a nested object representing a library
//with properties like name and book(an array of book objects),
// and log the library object to the console.

// const library = {
//   name: "Central Library",
//   books: [
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//   ],
// };

// console.log(library);

//Task 6 :
// const library = {
//   name: "Central Library",
//   books: [
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       year: 1949,
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//     },
//   ],
// };

// console.log(library.name);

// for (let element of library.books) {
//   console.log(element.title);
// }

//Activity 4 : The this Keyword

//Task 7 :

// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
//   fun: function () {
//     // console.log(this);
//     return `Book name is ${this.title} which is published in ${this.year}.`;
//   },
// };

// const data = book.fun();
// console.log(data);
// console.log(book);

//Activity 5 : Object Iteration

//Task 8:
// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
//   fun: function () {
//     // console.log(this);
//     return `Book name is ${this.title} which is published in ${this.year}.`;
//   },
// };

// // const data = book.fun();
// // console.log(data);

// for (let element in book) {
//   console.log(element);
// }

//Task 9 :
// let book = {
//   title: "Dont know js",
//   author: "Jonny Bhai",
//   year: 2021,
//   fun: function () {
//     // console.log(this);
//     return `Book name is ${this.title} which is published in ${this.year}.`;
//   },
// };

// console.log(Object.keys(book));
// console.log(Object.values(book));

// delete book.year;
// console.log(Object.values(book));
