// Day 11 : Promises and Async/Await

//Task/Activities

//Actvity1 : Understanding Promises

//Task 1 : Create a promis that resolves with a message after a 2- second timeout and log the message to a console

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//    return resolve("Promise resolved !")
//     },3000)
// })

// newPromise.then((data) => console.log(data))

//optimized above code

// const newPromise = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise resolved!"), 3000)
// );

// newPromise.then(console.log);

//Task 2 Create a promise that rejects with an error message after a 2 seconde timout and handle the error useing .catch()

// const newPromise = new Promise((resolve,reject) =>
// setTimeout(()=> reject("getting some Error !"),3000)
// )

// newPromise.catch((error) => console.log(error))

//Activity 2 : Chaining Promises

//Task 3: Create a sequence of promises that simulate fectching data from a server chain the promise to log messages in a specific order.

// function fistFunction() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("fisrt Promise resolve"), 2000)
//   );
// }

// function fistFunction2(data) {
//   return new Promise((resolve) =>
//     setTimeout(
//       () =>
//         resolve(
//           `       ${data}
//        Second Promise resolve
//       `
//         ),
//       4000
//     )
//   );
// }
// function fistFunction3(data) {
//   return new Promise(
//     (resolve) =>
//       setTimeout(() =>
//         resolve(
//           `       ${data}
//        Third Promise resolve

//       `
//         )
//       ),
//     5000
//   );
// }

// fistFunction()
//   .then((data) => {
//     console.log(data);
//     return fistFunction2(data);
//   })
//   .then((data) => {
//     console.log(data);
//     return fistFunction3(data)
//   }).then((data) => console.log(data))

//Activity 3 : Using Async/Await

//Task 4 : Write an async function that waits for a promise to resolve and then logs the error message.
//Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message
// function sample(a, b) {
//   let c = a + b;
//   return new Promise((resolve, reject) => {
//     if (c > 5) {
//       setTimeout(() =>
//        resolve(`Resolve number is ${c}`),3000
//     )
//     } else {
//       setTimeout(() => reject(`Reject number is ${c}`),3000);
//      }
//    })
// }

// async function promiseHandler() {
//   try {
//     const data = await sample(9, 4);
//   console.log(data)
//   return data
//   }
//   catch (error) {
//     console.log(error)
//     return error

//   }
// }

// const vari = promiseHandler()
// console.log(vari)

//Activity 4 : Fetching Data from an API

//Task 6 : Use the fetch API to get data from a public API and log the resonse data to the console using promises.

// const url = "https://jsonplaceholder.typicode.com/todos";
// function fetchApi(url) {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));
// }
// fetchApi(url);

//Task 7 : Use the fetch API to get data from a public API and log the resonse data to the console using using async/await.

// async function fetchApi(url) {
//   try {
//     const response = await fetch(url);
//     if (response.status !== 200)
//       throw new Error(`Getting ${response.status} error !`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// fetchApi(url);

//Activity 5 : Cocurrent Promises

//Task 8 :Use Promise.all to wait for multiple promises to resolve and then log all their values
//Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("first resolve"), 2000);
})


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Second resolve"), 3000);
});

const promise3 = new Promise((resolve,reject, ) => {
  setTimeout(() => reject("Second resolve"), 4000);
});

// const res = Promise.all([promise1,promise2,promise3]).then((data) => console.log(data)).catch((error) => console.log(error))
// const res = Promise.race([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
const res = Promise.allSettled([promise1, promise2, promise3])
  .then((data) => data)
  .catch((error) => console.log(error))


console.log(res, "akhlaque")
  
res.then(data => console.log(data))
