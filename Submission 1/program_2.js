const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your age: ", (ageInput) => {
    const age = parseInt(ageInput);
    let message;

    if (age < 18) {
      message = "You are a minor.";
    } else if (age < 60) {
      message = "You are an adult.";
    } else {
      message = "You are a senior citizen.";
    }

    console.log(`Hello, ${name}! ${message}`);
    rl.close();
  });
});
