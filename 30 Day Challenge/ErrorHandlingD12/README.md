// Custom error class extending the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message); // Pass the message to the parent Error class
    this.name = "CustomError"; // Set the error name to CustomError
  }
}

// Function that throws an instance of the custom error
function performOperation(value) {
  if (value < 0) {
    throw new CustomError("Negative values are not allowed!");
  }
  return `Operation performed on value: ${value}`;
}

// Using try-catch to handle the custom error
try {
  const result = performOperation(-5); // Change -5 to a positive number to avoid the error
  console.log(result);
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`Caught a CustomError: ${error.message}`);
  } else {
    console.log(`Caught an unexpected error: ${error.message}`);
  }
} finally {
  console.log("Finally block: This will always execute.");
}

//Explanation of each an every step

Certainly! Let’s go through each part of the code in detail.

1. Custom Error Class:

class CustomError extends Error {
  constructor(message) {
    super(message); // Pass the message to the parent Error class
    this.name = "CustomError"; // Set the error name to CustomError
  }
}
class CustomError extends Error:

This line defines a new class CustomError that extends the built-in Error class in JavaScript. By extending the Error class, you inherit the properties and methods of the Error class, such as the message and stack properties.
Extending Error allows you to create a specialized error type that you can throw and catch in a way that distinguishes it from other error types.
constructor(message):

The constructor is a special method in classes used for creating and initializing an object instance of that class.
The message parameter represents the error message that you want to pass when you throw this custom error.
super(message):

The super keyword is used to call the constructor of the parent class (Error in this case).
When you pass message to super(), it assigns this message to the message property of the Error class. This means that CustomError will have the same message property as any other error but with a custom message.
this.name = "CustomError":

The name property is a built-in property of the Error class that typically holds the name of the error.
By setting this.name to "CustomError", you are specifying the name of this error type. This helps in identifying the error when caught in a catch block.
2. Function that Throws the Custom Error:
javascript
Copy code
function performOperation(value) {
  if (value < 0) {
    throw new CustomError("Negative values are not allowed!");
  }
  return `Operation performed on value: ${value}`;
}
performOperation(value):

This is a regular function that takes a single argument value.
The purpose of this function is to perform some operation on value. In this example, it simply checks if the value is negative and, if so, throws a CustomError.
if (value < 0):

This condition checks if the passed value is less than 0 (i.e., negative).
throw new CustomError("Negative values are not allowed!"):

If the condition is true (meaning value is negative), the function throws an instance of the CustomError class.
The throw keyword is used to throw an error. When this line is executed, the function stops executing, and control is passed to the nearest catch block that can handle this error.
The message "Negative values are not allowed!" is passed to the CustomError constructor, and this message will be associated with the thrown error.
return Operation performed on value: ${value};:

If the value is not negative, the function returns a string that indicates the operation was successful. This message will be logged in the try block if no error is thrown.
3. Handling the Custom Error with Try-Catch-Finally:
javascript
Copy code
try {
  const result = performOperation(-5); // Change -5 to a positive number to avoid the error
  console.log(result);
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`Caught a CustomError: ${error.message}`);
  } else {
    console.log(`Caught an unexpected error: ${error.message}`);
  }
} finally {
  console.log("Finally block: This will always execute.");
}
try { ... }:

The try block is where you place the code that might throw an error. If an error occurs within the try block, control is immediately transferred to the catch block.
In this example, the performOperation function is called with -5 as the argument. Since -5 is negative, it will trigger the custom error.
const result = performOperation(-5);:

This line calls the performOperation function and stores the returned result (if no error is thrown) in the result variable.
If an error is thrown, this line is skipped, and control jumps to the catch block.
console.log(result);:

This line logs the result to the console if no error is thrown.
If the error is thrown, this line is also skipped.
catch (error) { ... }:

The catch block catches any error thrown in the try block.
The error parameter contains the error object that was thrown.
if (error instanceof CustomError) { ... } else { ... }:

The instanceof operator checks if the caught error is an instance of CustomError.
If it is, a specific message is logged indicating that a CustomError was caught, along with the error message.
If it’s not a CustomError, the else block logs that an unexpected error was caught.
finally { ... }:

The finally block is optional and always executes after the try and catch blocks, regardless of whether an error was thrown or caught.
It's typically used for cleanup activities (like closing files or connections) that need to happen no matter what.
In this case, it logs a message to indicate that the finally block has executed.
4. Script Execution:
Case 1: When the value is -5 (negative):

The performOperation(-5) call will throw a CustomError.
The catch block will identify it as a CustomError and log: Caught a CustomError: Negative values are not allowed!
The finally block will execute and log: Finally block: This will always execute.
Case 2: When the value is a positive number (e.g., 5):

The performOperation(5) call will not throw an error.
The result (Operation performed on value: 5) will be logged.
The finally block will still execute and log: Finally block: This will always execute.
This code demonstrates how to define and use a custom error class, throw errors, and handle them gracefully using try-catch-finally in JavaScript.