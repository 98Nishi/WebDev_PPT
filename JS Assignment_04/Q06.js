/* Q.6  What is template literals in ES6 and how do you use them?

Ans: Template literals in ES6 are a better way to write and combine strings in JavaScript. Instead of using quotes, we use backticks (`) to wrap the text. We can put variables or expressions inside `${}` to include their values in the string. It also allows us to create multi-line strings easily without using special characters. Template literals make our code more readable and flexible when dealing with strings.  */

const product = "Smartphone";
const price = 1000002.18;
const quantity = 2;

const totalPrice = price * quantity;

const message = `You have purchased ${quantity} ${product}(s) for a total price of $${totalPrice}.`;

console.log(message);
