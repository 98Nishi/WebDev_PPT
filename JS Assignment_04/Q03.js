/* Q.3 Difference between var & let?

Ans: In JavaScript, `var` and `let` are used to declare variables. The key difference is that `var` has function scope and can be re-declared within the same scope, while `let` has block scope and cannot be re-declared. This means that variables declared with `var` are accessible throughout the function, while variables declared with `let` are limited to the block they are defined in. Using `let` promotes better scoping practices and helps prevent unintended variable redeclaration.*/

  {
    let a = 10;
    let a = 20; // Error: SyntaxError: Identifier 'a' has already been declared
  }
  {
    let a = 10;
    a = 20; // Valid: The variable 'a' is reassigned a new value
  }
  {
    var a = 10;
    var a = 20; // Valid: The variable 'a' is re-declared
  }
  {
    var a = 10;
    a = 20; // Valid: The variable 'a' is reassigned a new value
  }
        