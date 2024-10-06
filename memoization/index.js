// function factorial(num) {
//   if (num === 1) return 1;
//   return factorial(num - 1) * num;
// }
// let obj = {};
// function memoization(num) {
//   if (num in obj) return obj[num];
//   else {
//     // const data = factorial(num)
//     // obj = { ...obj, [num]: data }
//     // console.log(obj)
//     // return data
//     obj[num] = factorial(num);
//     return obj[num];
//   }
// }
// console.log(obj);
// console.time("d");
// console.log(memoization(4));
// console.timeEnd("d");

// console.time("d");
// console.log(memoization(5));
// console.timeEnd("d");

// console.time("d");
// console.log(memoization(6));
// console.timeEnd("d");

// console.time("d");
// console.log(memoization(4));
// console.timeEnd("d");

// console.time("d");
// console.log(memoization(6));
// console.timeEnd("d");

// console.log(obj);

function memoising() {
  let obj = {}
  return function factorial(num) {
    console.log(obj,"obj")
    if (num === 0 || num === 1) return 1
    if (obj[num]) return obj[num]
    
    const r = num*factorial(num-1)
    obj[num] = r;
    return r;
  }
}

const data = memoising()
console.log(data(5))
console.log(data(5));

