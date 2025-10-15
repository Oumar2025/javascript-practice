console.log("JavaScript is working!");

// Exercise 1: Print Numbers 1-10
console.log("=== Exercise 1: Print Numbers ===");
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// Exercise 2: Even or Odd Checker
console.log("\n=== Exercise 2: Even or Odd ===");
function checkEvenOdd() {
    let number = parseInt(prompt("Enter a number:"));
    if (number % 2 === 0) {
        console.log(`${number} is Even`);
    } else {
        console.log(`${number} is Odd`);
    }
}
checkEvenOdd();

// Exercise 3: Simple Calculator
console.log("\n=== Exercise 3: Simple Calculator ===");
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let sum = num1 + num2;
    console.log(`Sum: ${num1} + ${num2} = ${sum}`);
}
simpleCalculator();