//Day 6 Arrays

// Tasks/Activities:

//Activity 1 : Array Creation and Access

//Task1:

// let array = [1, 2, 3, 4, 5];
// for (let element of array) {
//   console.log(element);
// }

//Task 2 :
// let array = [1, 2, 3, 4, 5];

// console.log(array[0]);
// console.log(array[array.length - 1]);

// Activity 2: Array Methods(Basic)

// //Task3

// let array = [1, 2, 3, 4, 5];
// const data = array.push(6);
// console.log(array);
//  console.log(data);

//Task4
// let array = [1, 2, 3, 4, 5];

// const data = array.pop();
// console.log(array);
// console.log(data);

//Task5

// let array = [1, 2, 3, 4, 5];
// const data = array.shift();
// console.log(array);
// console.log(data);

// //Task6
// let array = [1, 2, 3, 4, 5];

// const data = array.unshift(0);
// console.log(array);
// console.log(data);

//Activity 3 : Array Methods(Intermediate)
//Task 7

// let array = [1, 2, 3, 4, 5];

// const newArray = array.map((data) => 2 * data);
// console.log(newArray);

// //Task 8

// let array = [1, 2, 3, 4, 5];

// const filterData = array.filter((el) => el % 2 === 0);
// console.log(filterData);

//Task 9

// let array = [1, 2, 3, 4, 5];

// const filterData = array.reduce((acc, curr) => (acc += curr), 0);
// console.log(filterData);

// Activity 4: Array Iteration

// //task 10 :

// let array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// //task 11 :

// let array = [1, 2, 3, 4, 5];

// array.forEach((data) => console.log(data));

//Activity 5  Multi-dimensional Arrays

// //task 12 :
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix);

//task 13 :
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// let array = [1, 2, 5];

// const filterData = array.reduce((acc, curr, index, array) => {
//   if (!array.includes(index + 1)) {
//     // const s = acc.push(index + 1);
//     console.log("s", acc, curr);
//   }
// }, []);
// console.log(filterData);
