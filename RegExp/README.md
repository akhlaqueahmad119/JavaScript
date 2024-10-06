Using String Methods
In JavaScript, regular expressions are often used with the two string methods: search() and replace().

The search() method uses an expression to search for a match, and returns the position of the match.

The replace() method returns a modified string where the pattern is replaced.


<!-- Using String search() With a String -->

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
The result in n will be: 6


<!-- Using String search() With a Regular Expression -->

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
The result in n will be: 6


<!-- Using String replace() With a String -->

The replace() method replaces a specified value with another value in a string:

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");

<!-- Use String replace() With a Regular Expression -->


let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
The result in res will be: Visit W3Schools!



Using test()
The test() method is a RegExp expression method.

It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":