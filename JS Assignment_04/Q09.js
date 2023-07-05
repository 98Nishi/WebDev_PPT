/* Q.9 How can you define default parameter values in ES6 functions?

Ans: To define default parameter values in ES6 functions, we can assign a value directly to the function parameter. This default value will be used when no argument is provided or when the argument is undefined.  */

function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); // Output: Hello, Guest!
  greet('Nisha'); // Output: Hello, Nisha!
  