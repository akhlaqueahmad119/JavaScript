console.log('object');
const inp = document.getElementById('name')
// Debouncing is a concept in javascript which is use to delay any code or function exectution for a particular time.

// function debounce() {
//   let id;
//   return (func, delay) => {
//       clearTimeout(id);
//        id = setTimeout(func, delay);
//   };
// };

// const foo = () => {
//     console.log('foo has clicked!!!')
// }
// let result = debounce()

// inp.addEventListener('input', (e) => {
//   // setTimeout(foo,2000)
//   console.log('object')
//     result(foo, 2000);
// })

function debouncing() {
  let id;
  return (fun,delay) => {
    clearTimeout(id)
    id = setTimeout(fun,delay)
  }
}
const fun = () => {
  console.log("Debounce is Working !!")
}
const data = debouncing()
inp.addEventListener("input", () => {
  data(fun,3000)
})
