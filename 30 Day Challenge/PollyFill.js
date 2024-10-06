//Map method polyfill
const array1 = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.mapy = function (fun) {
  if (!fun) {
    throw new TypeError(`${fun} is not a function`);
  }
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fun(this[i], i, this));
  }
  return newArray;
};
const arr = array1.mapy((x) => 2 * x);

//Filter method polyfill

Array.prototype.myFilter = function (filterFunction) {
  if (!filterFunction) {
    throw new TypeError(`${filterFunction} is not a function`);
  }
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    filterFunction(this[i], i, this) ? filteredArray.push(this[i]) : "";
  }
  return filteredArray;
};
const array = [1, 2, 3, 4, 5, 6, 7];
// const newFilter = array.filter();
// console.log(newFilter);
const newFilter = array.myFilter((ele) => ele > 6);
console.log(newFilter);

//Reduce method polyfill
const array3 = [1, 2, 3, 4, 5, 6, 7];
console.log(array3);

// const reduce = array3.reduce((acc, curr, index, arr) => {
//   acc.push(2 * curr);
//   return acc;
// }, []);
// console.log(reduce);

Array.prototype.myReduce = function (reduceFun, initialVal) {
  if (!reduceFun) throw new TypeError(`${reduceFun} is not a fuction`);
  let i = 0;
  if (initialVal === undefined) {
    initialVal = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    const val = reduceFun(initialVal, this[i], i, this);
    initialVal = val;
  }
  return initialVal;
};
const ans = array3.myReduce((acc, curr, index, arr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(ans);
// const ans = array3.myReduce();
// console.log(ans);

// const array3 = [1, 2, 3, 4, 5, 6, 7];

// // const reduce = array3.reduce((acc, curr, index, arr) => (acc += curr), 0);
// // console.log(reduce);

// const myReduce = function (reduceFun, initialVal) {
//   console.log(initialVal, "a");
//   let i = initialVal ? 0 : 1;
//   console.log(i, "asad");
//   for (; i < array3.length; i++) {
//     const val = reduceFun(initialVal, array3[i], i, array3);
//     initialVal = val;
//   }
//   return initialVal;
// };
// const ans = myReduce((acc, curr, index, arr) => (acc += curr), 0);
// console.log(ans);
