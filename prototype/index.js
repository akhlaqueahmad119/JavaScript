let array = [1, 2, 3, 4, 5, 6];

// //Real Map
// const newArray = array.map((ele) => ele * 2);
// // console.log(newArray);

// //Map Prototype

// Array.prototype.mymap = function (fun) {
//   if (!fun) throw new TypeError(`${fun} is not a function`);
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(fun(this[i], i, this));
//   }
//   return newArray;
// };

// const ans = array.mymap((ele) => 2 * ele);
// // console.log(ans);

// //Real Filter
// const newFilter = array.filter((ele) => ele > 2);
// // console.log(newFilter);

// //Filter Prototype

// Array.prototype.myfilter = function (fun) {
//   if (!fun) throw new TypeError(`${fun} is not a function`);
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     fun(this[i], i, this) ? newArray.push(this[i]) : "";
//   }
//   return newArray;
// };

// const ans1 = array.myfilter((ele) => ele > 2);
// // console.log(ans1);

// //Real Reduce

// const reduceAns = array.reduce((acc, curr, index, array) => {
//   // acc.push(2 * curr);
//   // return acc;
//   if (curr > 3) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(reduceAns);

// var a = 10;
// console.log(a);
// {
//   var a = 20;
//   console.log(a);
// }

// function foo(a) {
//   console.log(this, a);
//   return "dfgfdfdd";
// }

// const result = foo.bind({}, [1, 2]);

// console.log(result());

// console.log(array)
// const newArr = array.reduce((acc,curr,index,arr) => acc += curr,0)
// console.log(newArr)

//Reduce prototype

// Array.prototype.myReduce = function(fun, initialVal) {
//   if (typeof fun !== "function")
//     throw new TypeError("undefined is not a function");
//   let i = 0;
//   let acc = initialVal;
//   if (initialVal === undefined) {
//     i = 1;
//     acc = this[0]
//   }
//   for (; i < this.length; i++) {
//     acc = fun(acc, this[i], i, this);
//   }
//   return acc;
// }


// const ans = array.myReduce((acc, curr) => {
//   if (curr > 3) {
//     acc.push(curr)
//   }
//   return acc
// },[]);
// console.log(ans)


