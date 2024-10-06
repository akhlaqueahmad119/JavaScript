Typescript is a superset of javacript which is used in development mode because js is loosly type language or value type language.


<!-- Static Typing -->
let age: number = 25; // Explicitly typed as a number


<!-- interface -->

interface User {
  id: number;
  name: string;
  email: string;
}
let user: User = { id: 1, name: "Alice", email: "alice@example.com" };


<!-- function -->

function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 10); // Correct
// const result = add(5, "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

