// Create a JavaScript program that takes​ two numbers and an operator (+, -, *, /)​ from the user and displays the result.
// Simple Calculator using prompt()

let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero!";
    }
    break;
  default:
    result = "Invalid operator!";
}

alert("Result: " + result);
