//Day 12 : Error Handling

//Task/Activites

//Activity 1: Basic Error Handling with Try-Catch

//Task1 : write a function that intentionally throw an error and
// use a try catch block to handle the error and log an appropriate message to the console

// function throwErrorExample() {
//   throw new Error("This is an intentional error!");
// }

// function handleError() {
//   try {
//     throwErrorExample();
//   } catch (error) {
//     console.error("Caught an error:", error.message);
//   } finally {
//     console.log("Error handling complete.");
//   }
// }

// handleError();

// function javas(){
//   throw new Error("Intentionally error !")
// }


// function errorHandle() {
//   try {
//     javas()
//   }
//   catch (error) {
//     console.log(error.message)
//   }
// }

// errorHandle()

//Task 2 : Create a function that divides two numbers and throws an error if the denomiator is zero.
//  Use a try-catch block to handle this error

// function divideNumbers(numerator, denominator) {
//   if (denominator === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return numerator / denominator;
// }

// try {
//   const result = divideNumbers(10, 0); // Change 0 to any other number to avoid the error
//   console.log(`Result: ${result}`);
// } catch (error) {
//   console.log(`Error: ${error.message}`);
// }

// function num(num, denominator) {
//   if (denominator === 0) {
//     throw new Error("denomiantor can not be 0 !")
//   }

//   return num/denominator
// }


// try {
//   const data = num(10, 0)
//   console.log(data)
// }
// catch (error) {
//   console.log(error.message)
// }

//Activity 2 : Finally Block

//Task 3 : Write a script that includes a try-catch block and finally block.log messages in the try, catch, and finally blocks to observe the execution flow

// function finally1(a, b) {
//   if (a % b !== 0) throw new Error("not fully divisible")
  
//   return a/b
// }

// try {
//   const data = finally1(10, 4)
//   console.log(data)
// }
// catch (error) {
//    console.log(error.message)
// }
// finally{
//  console.log("Akhlaque Ahmad")
// }

//Activity 3 : Custom Error Objects

// Task 4 : Create a custom error class that extends the built in Error class.
//Thow an instance of this custom error in a function and handle it using a try catch block.


// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     console.dir(this)
//     this.name = "CustomError";
//   }
// }

// let obj = new CustomError()

// function fun(a,b) {
//   if (a > b) throw new CustomError("this is customError")
//   else if(a === 0) throw new Error("Error is there !")
// }

// try {
//   const data = fun(2, 1)
//   console.log(data)
// }
// catch (error) {
//   if (error instanceof CustomError) {
//   console.log(error.message);
    
//   } else {
//   console.log(error.message);
    
//   }
// } finally {
//   console.log("object")
// }


// function Employee(name,age,gender) {
//   this.name = name
//   this.age = age
//   this.gender = gender
// }
// const emp = new Employee("Akhlaque", 26, "Male")
// Function = emp;

// console.dir(Function);

//Task 5 : Write a function that validates user input (e.g., checking if a string is not not empty) and throws a custum error if the validation fails.Hnandle the custum error using a try catch block.

// class ValidateError extends Error{
//   constructor(message) {
//     super(message)
//     console.dir(this)
//     this.name = "ValidateError";
//   }
// }

// function validateInput(input) {
//   if(input === "") throw new ValidateError("Getting Empty String !")
//    return input
// }

// try {
//   const data = validateInput("");
//   console.log(data)
// }
// catch (error) {
//   if (error instanceof ValidateError) {
//     console.log(error)
//     console.log(error.message)
//   }
  
// }

// const c = ValidateError.hasOwnProperty("message");
// console.log(c)

// Activity 4 : Error Handling in promises

// Task 6 : Createe a promise that randomly resolve or rejects. Use .catch() to handle the rejection and log an apptopraite message to the console.

// function sample() {
//   return new Promise((resolve,reject) => setTimeout(() => reject("Detecting some Error !"), 3000))
// }

// sample().then((data) => console.log(data)).catch((data) => {
//   console.log(data);
// })

// Task 7 : Use try-catch  within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// function sample(a, b) {
//   let c = a + b
//   return new Promise((resolve, reject) => {
//     if (c > 5) {
//       setTimeout(() => resolve(`${c} is acceptable number !`), 3000);
//     } else {
//       setTimeout(() => reject(`${c} is not acceptable number.It should be greater than 5!`), 3000);
      
//     }
//  })
// }
// async function promiseHandler() {
//   try {
//     const data = await sample(3, 3);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// promiseHandler()

//Activity 5 : Graceful Error Handling in Fetch

// Task 8 : Use the fectch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error meaage to the console.

// const url = "https://fakestoreapi.com/products";

// function fetchApi(url) {
//   const data = fetch(url).then((response) => {
//     console.log(response)
//     if(response.status != 200) throw new Error(`Getting ${response.status} Error !`)
//     return response.json()
//   }).then((data => console.log(data))).catch((error)=> console.log(error.message))
  
// }

// fetchApi(url)

// Task 9 : Use the fectch API to request data from an invalid URL within an async function and handle the error using try catch. log an appropriate error message.

// const url = "https://fakestoreapi.com/products";

// async function fetchApi(url) {
//   try {
//     const response = await fetch(url)
//   if(response.status != 200)  throw new Error(`Getting ${response.status} Error!`)
//   const data = await response.json()
//   console.log(data)
//   }
//   catch (error) {
//     console.log(error.message)
//   }
// }

// fetchApi(url)


