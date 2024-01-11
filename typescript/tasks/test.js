const readline = require("readline");

const rl = readline.createInterface({
  input: process.input,
  output: process.output,
});

rl.question("What is your name? ", function (answer) {
  console.log("Your name is " + answer);
  rl.close();
});
