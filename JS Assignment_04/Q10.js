/* Q.10 What is the purpose of the spread operator (...) in ES6?

Ans: The spread operator ... in ES6 allows us to spread the elements of an array or the properties of an object into another array or object. It helps in combining arrays or objects, passing array elements as individual function arguments, or extracting elements/properties during destructuring. It simplifies working with arrays and objects by providing a concise way to handle their contents.*/

// Array Spreading
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(copiedNumbers); // Output: [1, 2, 3]

// Object Spreading
const person = { name: 'Nisha', age: 23 };
const copiedPerson = { ...person };

console.log(copiedPerson); // Output: { name: 'Alice', age: 25 }

// Array Spreading in Function Arguments
function multiply(a, b, c) {
  return a * b * c;
}

const factors = [2, 3, 4];
console.log(multiply(...factors)); // Output: 24
