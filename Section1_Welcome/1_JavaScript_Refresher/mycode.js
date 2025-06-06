// Prints the string "hi" to the terminal
console.log("hi");

// Prints the string "bye" to the terminal
console.log("bye");


// Examples of checking data types
const message = "hello";
console.log(typeof(message)); // Output: string

const isLoggedIn = false;
console.log(typeof(isLoggedIn)); // Output: boolean

const userAge = 25;
console.log(typeof(userAge)); // Output: number

const isFalseString = "false"; // Note the quotes
console.log(typeof(isFalseString)); // Output: string

const isOneNumber = 1; // Note no quotes
console.log(typeof(isOneNumber)); // Output: number

// let
let myVariable = "initial value";
console.log(myVariable); // Output: initial value

myVariable = "new value"; // Reassigning the variable
console.log(myVariable); // Output: new value


// const
// Working example
const fixedValue = "this cannot change";
console.log(fixedValue); // Output: this cannot change

// Example causing an error
const myConstant = "hello";
console.log(myConstant); // Output: hello
// The next line will cause an error if uncommented and run:
// myConstant = "goodbye";


// Comments
// This is a single-line comment explaining the code below.
console.log("This line will run.");

// The following line is commented out, so it won't execute:
// console.log("This line will NOT run.");

// Comments can contain anything:
// asdfkljhasdflkjh23498hasdlkjf

// Use comments to clarify complex logic
const taxRate = 0.08; // 8% sales tax rate

// Tip: In VS Code, select lines and use Cmd+/ (Mac) or Ctrl+/ (Win/Linux)
// to quickly toggle comments on/off.


// Functions
function functionName(parameter1, parameter2) {
    // Code to be executed goes here
    // It can use parameter1 and parameter2
}

// Calling Function
functionName(argument1, argument2);


// Example:
// Define a function named greet
function greet() {
  console.log("Hello there!");
}

// Call the function multiple times
greet();
greet();
greet();

// Output:
// Hello there!
// Hello there!
// Hello there!