/* Q.7 What’s difference between map & forEach?

Ans: map is an array method that creates a new array by applying a function to each element of the original array.

forEach is an array method that iterates over the elements of an array and executes a provided function for each element.*/

const numbers = [1, 2, 3, 4, 5];

// Example using map
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using foreachs
const numb = [1, 2, 3, 4, 5];
let sum = 0;

numb.forEach(num => {
  sum += num;
});

console.log(sum); // Output: 15
