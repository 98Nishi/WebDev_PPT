/* Q.5 What is the difference between let and const in ES6?

Ans: `let` and `const` are keywords in ES6 for variable declaration in JavaScript. The main difference is that `let` allows variable reassignment and has block scope, while `const` declares a constant variable that cannot be reassigned and also has block scope.   */

let x = 10;
x = 20; // Valid: x is mutable and can be reassigned
console.log(x); // Output: 20

const y = 30;
y = 40; // Error: y is immutable and cannot be reassigned
console.log(y); // Output: 30
