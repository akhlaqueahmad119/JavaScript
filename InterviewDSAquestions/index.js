// // 1.
// let array = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5];
// //  output = {
// //    1: {count : 3},
// //    2: {count : 4},
// //    3: {count : 3},
// //    4: {count : 2},
// //    5: {count : 5},
// //  };

// function countObj(array) {
//   let obj = {};
//   for (let element of array) {
//     if (obj[element]) {
//       obj[element].count += 1;
//     } else {
//       obj[element] = { count: 1 };
//     }
//   }
//   return obj;
// }
// console.log(countObj(array));

// 2.

// const array1 = [{ a: 0 }, { b: 0 }, { c: 3 }]
// const array2 = [{ a: 3 }, { b: 8 }, { c: 9 }];

// output :  [{ a: 3 }, { b: 8 }, { c:12}];

// const ans = array1.map((data) => {
//   let key = Object.keys(data)[0]
//   console.log(key)
// let newKey = array2.find((ele) => ele.hasOwnProperty(key))
//   console.log(newKey)
//   if (newKey) {
//     return {[key] : data[key] + newKey[key]}
//   }
//   return data
// })

// console.log(ans)
//2nd solution
// Step 1: Transform array2 into a lookup object for O(1) access
// const lookup = array2.reduce((acc, curr) => {
//   const key = Object.keys(curr)[0];
//   acc[key] = curr[key];
//   return acc;
// }, {});

// // Step 2: Use map to generate the final result
// const ans = array1.map((data) => {
//   const key = Object.keys(data)[0];
//   return { [key]: data[key] + (lookup[key] || 0) };
// });

// console.log(ans);

//3nd solution
// const array1 = [{ a: 0 }, { b: 0 }, { c: 3 }];
// const array2 = [{ a: 3 }, { b: 8 }];

// const ans = array1.reduce((acc, curr, index) => {
//   key = Object.keys(curr)[0]
//   if (!array2[index][key]) {
//     acc.push({[key] : curr[key]})
//   } else {
//     acc.push({ [key]: (curr[key] + array2[index][key]) });

//   }
//   return acc
// },[])

// 3

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// output = 1 4 7
         // 2 5 8
         // 3 6 9

// function matrix() {
//   for (let i = 0; i < array.length / 3; i++) {
//     let row = "";
//     for (let j = 0; j < array.length / 3; j++) {
//       row += array[i+j*3] + " ";
//     }
//   console.log(row);

//   }
// }

// matrix(array);

///4
// const array = [3, 4, 29, 5, 8, 9]

// function sum(array) {
//   const sortedArray = array.sort((a, b) => a - b)
//   const maxNum = sortedArray[array.length - 1];
//   let remainingNumSum = 0
//   for (let i = 0; i < sortedArray.length - 1; i++) {
//     remainingNumSum += sortedArray[i];
//   }
//   return maxNum === remainingNumSum;
  
// }

// console.log(sum(array));

//5
// const str = "aaabccccddddeeeeefffggg"

// function maxChar(str) {
//   let obj = {}
//   for (let element of str) {
//     obj[element] = obj[element]+1 || 1
//   }
//   console.log(obj)
//   let char = ""
//   let maxChar = 0;
//   for (let element in obj) {
//     if (obj[element] > maxChar) {
//       maxChar = obj[element]
//       char = element
//     }
//   }
//   return char
// }
// console.log(
// maxChar(str)
// );

//6

// let str = "hai hello how are"
// // output: "hai olleh how era"

// function oddReverse(str) {
//   const data = str.split(" ")
//   let newStr = "";
//   for (let i = 0; i < data.length; i++) {
//     if (i % 2 !== 0) {
//       newStr += data[i].split("").reverse().join("")+ " "
//       //  let f = str[i].spl
//     } else {
//       newStr += data[i]+" ";
//     }
//   }
//   return newStr
// }

// console.log(oddReverse(str));

//7
// function funAkhlaqueAhmad() {
//   for (let i = 1; i <= 50; i++){
//     let newI = i.toString();
//     let str = ""
//     for (let element of newI) {
//       if (element === "3") {
//         str += " Akhlaque "
//       } else if (element === "5") {
//         str += " Ahmad "
//       } else {
//         str += element
//       }
//     }
//     console.log(str)
//   }
//   }

// funAkhlaqueAhmad()

// const obj = Object.create(null)
// console.log(obj)

// let d = {}
// console.log(d)

// function fun() {
//   console.log(arguments)
  
// }
// fun("Akhlaque")

// const arrow = () => {
//   console.log("arguments")
// }

// arrow("Akhlaque")

// function func1(a, b, c) {
//   console.log(Array.from(arguments));
// }

// func1(1, 2, 3);



// function f(x){
//   x = "x-" + x    // a =  "x-a"
//   return  function(y){
//     y = "y-" + x            // b = "y-x-a"
//     return function(z){
//       return "z-"+y
//     }
//   }
// }
// console.log(f("a")("b")("c"))  //z-y-x-a



///


// let a = 999;

// function num(a) {
//   // if(a <10) return a
//   let newStr = a.toString();
//   if (newStr.length === 1) return a;
//   let newNum = 0;
//   newStr.split("");
//   for (let element of newStr) {
//     newNum += Number(element);
//   }

//   return num(newNum);
// }

// console.log(num(a));

// Factorial

// function factorial(number) {
//   if (number === 0 || number === 1) return 1
  
//   return number * (number - 1)
 
// }

// console.log(factorial(5));

// 2. Sum of an Array

// function functionRecursive(array) {
//   if (array.length === 0) return 0
//   return (
//     array[array.length - 1] + functionRecursive(array.slice(0,-1))
//   );
// }
// console.log(functionRecursive([1, 2, 3, 4, 5]));

// function functionRecursive(array) {
//   if (array.length === 0) return 0
//   return (
//     array[0] + functionRecursive(array.slice(0))
//   );
// }
// console.log(functionRecursive([1, 2, 3, 4, 5]));



// 3. Fibonacci Series


// function fabonnaci(n) {
//   let a = 0, b = 1, c
//   for (let i = 2; i <= n; i++){
//     c = a + b
//     a = b
//     b = c
//   }
//   return n === 0 ? a : b
// }

// console.log(fabonnaci(6));

/// 0 1 1 2 3 5 8
// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true; // Base case: a single character or empty string is a palindrome
//   } else if (str[0] !== str[str.length - 1]) {
//     return false; // Base case: if the first and last characters don't match
//   } else {
//     return isPalindrome(str.slice(1, str.length-1)); // Recursive case
//   }
// }

// console.log(isPalindrome("madam")); // Output: true
// console.log(isPalindrome("hello")); // Output: false



///Interview Questions

// let a = 999

// function fun(a) {
//   if(a < 10) return a
//   let ab = a.toString()
//   let num = 0
//   for (let element of ab.split("")) {
//       num += Number(element)
//   }

//  return fun(num)

// }
// console.log(fun(a));


// const myStr = 'swiss';
// find first unique char.

// function fun(myStr) {
//   let obj = {};
//   for (let element of myStr) {
//     obj[element] = obj[element] + 1 || 1;
//   }
//   for (let element in obj) {
//     if (obj[element] === 1) return element;
//   }
//   return false;
// }

// console.log(fun(myStr));



//// flat a array
// let array = [1, 2, [3, 4], ["ghhty", 6, [7, 8], 9], 10];

// // let newArray = []
// function fun(array, newArray = []) {
//   for (let element of array) {
//     if (Array.isArray(element)) {
//       fun(element, newArray);
//     } else {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(fun(array));

// OR
// let array = [1, 2, [3, 4], [8, 6, [7, 8], 9], 10];

// function fun(array) {
//   let newArray = [];

//   function flat(array) {
//     for (let element of array) {
//       if (Array.isArray(element)) {
//         flat(element);
//       } else {
//         newArray.push(element);
//       }
//     }
//   }
//   flat(array);
//   return newArray;
// }

// console.log(fun(array));



/// interview Ques

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 35 },
// ];

// // {
// //   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
// //   '30': [ { name: 'Bob', age: 30 } ],
// //   '35': [ { name: 'David', age: 35 } ]
// // }

// function modifyArr(people) {
//   let obj = {};
//   for (let element of people) {
//     if (obj[element.age]) {
//       obj[element.age].push(element);
//     } else {
//       obj[element.age] = [element];
//     }
//   }
//   return obj;
// }
// console.log(modifyArr(people));



///interview Question

// let obj1 = {
//   name: "aftab",
//   age: 27,
// };

// let obj2 = {
//   name: "aftab",
//   age: 27,
// };

// function object2(obj1, obj2) {
//   console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
//   let newObj1 = Object.keys(obj1);
//   let newObj2 = Object.keys(obj2);
//   if (newObj1.length !== newObj2.length) return false;

//   for (let element of newObj1) {
//     if (obj1[element] !== obj2[element]) return false;
//   }
//   return true;
// }

// console.log(object2(obj1, obj2));


//   [1,2,3],[2,3,4],[3,4,5] .............
//o/p = [1,5]

// function fun(...array){
//  const newArr = array.flat()
//  let obj = {}
//  newArr.forEach((ele) =>{
//      if(obj[ele]){
//          obj[ele] +=1
//      }else{
//          obj[ele] =1
//      }
//  })
//     let uniqueArr= []
//     for(let element in obj){
//         if(obj[element] === 1){
//             uniqueArr.push(Number(element));
//         }
//     }
//     return uniqueArr
// }

// console.log(fun([1,2,3],[2,3,4],[3,4,5]))

// let url =
//   "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=13";
// async function fetchData(url) {
//   const response = await fetch(url);
//    console.log(response)
//   const data = await response.json();
//   console.log(data);
// }

// fetchData(url);
// async function getTeams(year, k) {
//   // write your code here
//   // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
//   let page = 1;
//   let totalPages = 1;
//   const teamCount = {};
//   while (page <= totalPages) {
//     let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data,"data")
//     totalPages = data.total_pages;
//     data.data.forEach((match) => {
//       teamCount[match.team1] = (teamCount[match.team1] || 0) + 1;
//       teamCount[match.team2] = (teamCount[match.team2] || 0) + 1;
//     });
//     page++;
//   }
//   console.log(teamCount, "teamCount");
//   const result = Object.keys(teamCount)
//     .filter((team) => teamCount[team] >= k)
//     .sort();
//   console.log(result,"Result")
// }
// getTeams(2015, 13)


///
// Interview Questions

// const Car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Blue",
// };
// let obj = {};
// // for(let element in Car){
// //     obj[Car[element]] = element
// // }
// for (let [key, value] of Object.entries(Car)) {
//   obj[value] = key;
// }
// console.log(obj);



// Interview Questions

// let str = "Hello World ! World is beautiful.";
// let str1 = "Hello World! World is beautiful. world";

// function replace(str) {
//   console.log(str, "ff");
//   const d = str.split(" ");
//   console.log(d, "ff");
//   // const newRep = str.replaceAll("World","Earth")/
//   const data = d.splice(3, 1, "Earth");
//   console.log(data, "ffcc");

//   console.log(d.join(" "), "ffcc");
// }
// replace(str);