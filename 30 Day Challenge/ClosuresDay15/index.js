// Day 15 : Closures

//Task/Activites :
//Activity 1 : Understanding Closures

//Task 1 : Write a function that returns another function,
//where the inner function accesses
// a variable from the outer functions scope.
//Call the inner function and log the result.

// function outer() {
//   let a = 10
//   return function inner() {
//     console.log(a)
//   }
// }
// const getInner = outer();
// console.log(getInner())

//Task 2 :Create a closure that maintains a
// private counter, Implement functions to increment and
// get the current value of the counter.

// function closure() {
//   let count = 0;
//   return {
//     increment: () => {
//      return  count+=1
//     },
//     currValue: () => {
//       return count
//     }

//   }
// }
// const closure1 = closure();
// console.log(closure1)
// console.log(closure1.currValue());
// console.log(closure1.increment());
// console.log(closure1.currValue());
// console.log(closure1.increment());
// console.log(closure1.currValue());
// console.log(closure1.increment());

//Activity 2 Practical Closures

// Task 3 : Write a function that generates unique ids.
// Use a closure to keep track of the last gererated Id
// and increment it with each call.


// function generatedID() {
//   let id = Math.floor(Math.random())+1*10;
//   console.log(id)
//   return {
//     lastGeneratedID: () => {
//       return id
//     },
//     increment: () => {
//       return id += 1
//     }
//   }
// }
// let newID = generatedID();
// console.log(newID);
// console.log(newID.lastGeneratedID());
// console.log(newID.increment());
// console.log(newID.lastGeneratedID());
// console.log(newID.increment());
// console.log(newID.lastGeneratedID());
// console.log(newID.increment());


// Task 4 : Create a closure that captures a user's name
//  and returns a function that greets the user by name


// function closuer() {
//   let name = "Akhlaque"
//   return function namee() {
//     return `Hello ${name}`
//   }

// }

// let data = closuer()
// console.log(data)
// console.log(data())


//Activity 3 : Closure Loops

//Task 5 : write a loop that creates an array of functions.
//each function should log is index when called.
// Use a closure to ensure
// each function logs the correct index.

// function functionArray() {
//   let functions = []
//   for (let i = 0; i <= 6; i++){
//     functions.push(((index) => {
//       return () => {
//       console.log(index);
//       }
//     })(i))
//   }
//   return functions;
// }

// const newArr = functionArray()
// console.log(newArr[0]())
// console.log(newArr[6]());
