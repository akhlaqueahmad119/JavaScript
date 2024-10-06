// 1. Reverse a String

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  // Output: "olleh"


// 2. Check if a String is a Palindrome

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false


// 3. Count the Number of Vowels in a String


function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));  // Output: 3

// 4. Find the First Non-Repeating Character

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("swiss"));  // Output: "w"


// 5. Check if Two Strings are Anagrams

function areAnagrams(str1, str2) {
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("hello", "world"));    // Output: false


// 6. Capitalize the First Letter of Each Word

function capitalizeWords(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world from javascript"));  
// Output: "Hello World From Javascript"



//7. Check if a String Contains Only Digits

function isNumeric(str) {
  return /^\d+$/.test(str);
}

console.log(isNumeric("123456"));   // Output: true
console.log(isNumeric("123abc"));   // Output: false

// 8. Check if a String Contains Only Alphabet

function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);  // Matches only alphabetic characters (a-z, A-Z)
}

console.log(isAlphabetic("abcDEF"));  // Output: true
console.log(isAlphabetic("abc123"));  // Output: false

// 9. Count the Occurrences of a Character in a String

function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("javascript", 'a'));   // Output: 2
console.log(countChar("hello world", 'o'));  // Output: 2

// 10. Remove Duplicates from a String

function removeDuplicates(str) {
  console.log([new Set(str)])
  return [...new Set(str)].join('');
}

console.log(removeDuplicates("hello"));    // Output: "helo"
console.log(removeDuplicates("javascript")); // Output: "javscript"


// 11. Check if a String Contains a Substring

function containsSubstring(str, substring) {
  return str.includes(substring);
}

console.log(containsSubstring("hello world", "world"));   // Output: true
console.log(containsSubstring("javascript", "java"));     // Output: true
console.log(containsSubstring("javascript", "scriptz"));  // Output: false

