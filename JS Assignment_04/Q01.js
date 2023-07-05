/*Q.1 Explain Hoisting in JavaScript.

Ans: Hoisting is the default behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase. This means that regardless of where declarations appear in the code, they are effectively "hoisted" to the top, making them accessible throughout their scope, even before they are explicitly declared. However, only the declarations are hoisted, not the initializations or assignments. It is important to understand hoisting in order to write clean and predictable JavaScript code.   */

var message; // hoisted declaration
console.log(message); // Output: undefined
message = 'Hello, world!';
