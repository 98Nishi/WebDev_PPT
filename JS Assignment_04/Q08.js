/* Q.8 How can you destructure objects and arrays in ES6?

Ans:  Destructuring in ES6 is a way to extract values from objects and arrays easily. It allows us to assign those values to variables using a simplified syntax. Instead of accessing elements using dot notation or indexing, we can directly assign them to variables in a more concise and readable manner. Destructuring makes it simpler to work with complex data structures by extracting specific values we need. */

// Object Destructuring
const person = {
    name: 'Alice',
    age: 21,
    city: 'London'
  };
  
  // Destructuring the person object
  const { name, age, city } = person;
  
  console.log(name); // Output: Alice
  console.log(age); // Output: 21
  console.log(city); // Output: London
  
  // Array Destructuring
  const numbers = [1, 2, 3, 4, 5];
  
  // Destructuring the numbers array
  const [first, second, , fourth, fifth] = numbers;
  
  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(fourth); // Output: 4
  console.log(fifth); // Output: 5
  
