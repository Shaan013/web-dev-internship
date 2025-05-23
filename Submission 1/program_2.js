//​ Write a JavaScript program that takes a person’s​ name and age using prompt() and displays a​  greeting with a message based on their age. ​
// Greeting based on name and age using prompt()

let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let message;

if (age < 13) {
  message = "You're a child. Enjoy your time!";
} else if (age < 20) {
  message = "You're a teenager. Explore and learn!";
} else if (age < 60) {
  message = "You're an adult. Keep growing!";
} else {
  message = "You're a senior citizen. Stay wise and healthy!";
}

alert(`Hello ${name}! ${message}`);
