// JavaScript Regular Expressions

// Perform case-insensitive matching
  
// let text = "Visit W3Schools W3Schools W3Schools";
// let result = text.match(/w3schools/i);
// console.log(result);

// Perform a global match (find all)
  
// let text = "Is this all there is?";
// let result = text.match(/is/gi);
// console.log(result)
 
//	Perform multiline matching

// let text = "\nIs th\nis it?";
// let result = text.match(/^is/m);
// console.log(result)

// Perform start and end matching (New in ES2022)
  
// let text = "aaaabb";
// let result = text.match(/(aa)(bb)/d);
// console.log(result)


// Brackets are used to find a range of characters:



// [0-9]	Find any of the digits between the brackets

// let text = "1234567891";
// let result = text.match(/[1-4]/g);

// console.log(result)
// 1, 2, 3, 4, 1;


// [abc]	Find any of the characters between the brackets

// let text = "Is this all there is?";
// let result = text.match(/[h]/g);
// console.log(result)


// (x|y)	Find any of the alternatives separated with |

// let text = "re, green, red, green, gren, gr, blue,red, yellow";
// let result = text.match(/(red|green | yellow)/g);
// console.log(result)



// Metacharacters are characters with a special meaning:


// \d	Find a digit

// let text = "Give 100%!";
// let result = text.match(/\d/g);
// console.log(result)


// \s	Find a whitespace character


// let text = "Is this all there is?";
// let result = text.match(/\s/g);
// console.log(result)


// \b	Find a match at the beginning of a word like this: \bWORD,
//  or at the end of a word like this: WORD\b

// let text = "HELLO, LOOK AT YOU!";
// let result = text.search(/\bLO/);
// console.log(result)

// let res = text.search(/LO\b/)
// console.log(res)



// n+	Matches any string that contains at least one n


// let text = "Hellooo World! Hello W3Schools!";
// let result = text.match(/o+/g);
// console.log(result)

// o/p =(4) ['ooo', 'o', 'o', 'oo']


// n*	Matches any string that contains zero or more occurrences of n

// let text = "Hellooo World! Hello W3Schools!";
// let result = text.match(/lo*/g);
// console.log(result)

// [
//     "l",
//     "looo",
//     "l",
//     "l",
//     "lo",
//     "l"
// ]


// n ? Matches any string
// that contains zero or one occurrences of n


// let text = "1, 100 or 1000?";
// let result = text.match(/10?/g);
// console.log(result)

// [
//     "1",
//     "10",
//     "10"
// ]