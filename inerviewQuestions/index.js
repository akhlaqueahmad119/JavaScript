// const input = document.getElementsByTagName("input")

// const array = Array.from(input);

// function fun() {
//   array.forEach((input) => {
//     if (!input.checked) {
//       input.disabled = true
//     }
//   });
// }

// function enableAll() {
//   array.forEach((input) => {
//     input.disabled = false;
//   });
// }

// for (let element of array) {
//   element.addEventListener("input", (event) => {
//     const data = array.filter((ele) => ele.checked)
//     if (data.length === 3) {
//        fun()
//     } else {
//       enableAll()
//     }
    
//   })

// }

// const inputs = Array.from(document.getElementsByTagName("input")); // Cache DOM query once

// // Disable unchecked inputs when 3 are checked
// function disableUnchecked() {
//   inputs.forEach((input) => {
//     input.disabled = !input.checked;
//   });
// }

// function enableAll() {
//   let anyDisabled = inputs.some((input) => input.disabled); // Check if any input is disabled
//   if (anyDisabled) {
//     inputs.forEach((input) => (input.disabled = false)); // Enable all only if required
//   }
// }

// // Event listener on parent element for better performance
// document.body.addEventListener("input", (event) => {
//   if (event.target.tagName === "INPUT") {
//     // Check if the event comes from an input
//     const checkedInputs = inputs.filter((input) => input.checked); // Find checked inputs
//     if (checkedInputs.length === 3) {
//       disableUnchecked();
//     } else {
//       enableAll();
//     }
//   }
// });


