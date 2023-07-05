/* Q.2 Explain Temporal Dead Zone?

Ans: The Temporal Dead Zone (TDZ) is a concept in JavaScript that prevents you from using a variable before it has been declared. When you declare a variable using `let` or `const`, you need to wait until the line of code where it is declared before you can use it. If you try to use the variable before that, JavaScript will give you an error. The TDZ helps catch mistakes and ensures that variables are used correctly in your code.*/

console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10
