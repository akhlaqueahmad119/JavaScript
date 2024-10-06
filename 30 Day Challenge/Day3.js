 // function num(...number) {
//   console.log(number);
//   const max = Math.max(...number);
//   return max;
// }
// console.log(num(5, 8, 2));

// function num(a, b, c) {
//   let largest;
//   if (a >= b) {
//     if (a >= c) {
//       largest = a;
//     } else {
//       largest = c;
//     }
//   } else {
//     if (b >= c) {
//       if (b >= a) {
//         largest = b;
//       } else {
//         largest = a;
//       }
//     }
//   }
//   return largest;
// }
// console.log(num(5, 8, 10));

// function days(day) {
//   switch (day) {
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     case 7:
//       return "Sunday";
//     default:
//       return "Please Enter Correct Day";
//   }
// }

// console.log(days(15));

// function grade(number) {
//   switch (true) {
//     case number >= 80:
//       return "A";
//     case number >= 60:
//       return "B";
//     case number >= 50:
//       return "C";
//     case number >= 30:
//       return "D";
//     case number < 30:
//       return "F";
//   }
// }
// console.log(grade(90));

// function ternary(number) {
//   return number % 2 === 0 ? "even" : "odd";
// }
// console.log(ternary(11));

function combine(year) {
  // if (year % 4 === 0) {
  //   if (year % 100 ===0 && year % 400 === 0) {
  //     return "Leap Year";
  //   } else {
  //     return "Not Leap Year";
  //   }
  // } else {
  //   return "Not Leap Year";
  // }

  return year % 4 === 0 || year % 100 === 0 && year % 400 === 0
    ? "leap year"
    : "not leap year";
}
console.log(combine(2024));
