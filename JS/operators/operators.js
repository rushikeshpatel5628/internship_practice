// Arithmetic operators
let num1 = 10;
let num2 = 5;
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % num2; // Modulus
let exponentiation = num1 ** num2; // Exponentiation

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponentiation:", exponentiation);

// Assignment operators
let x = 10;
x += 5; // Equivalent to x = x + 5;
console.log("x:", x); // Output: 15

// Comparison operators
let a = 10;
let b = 5;
console.log("a > b:", a > b); // Output: true
console.log("a < b:", a < b); // Output: false
console.log("a >= b:", a >= b); // Output: true
console.log("a <= b:", a <= b); // Output: false
console.log("a === b:", a === b); // Output: false (strict equality)
console.log("a !== b:", a !== b); // Output: true (strict inequality)

// Logical operators
let p = true;
let q = false;
console.log("p && q:", p && q); // Output: false (logical AND)
console.log("p || q:", p || q); // Output: true (logical OR)
console.log("!p:", !p); // Output: false (logical NOT)

// Increment and decrement operators
let count = 5;
count++; // Increment by 1
console.log("After increment:", count); // Output: 6
count--; // Decrement by 1
console.log("After decrement:", count); // Output: 5

// Conditional (ternary) operator
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"
