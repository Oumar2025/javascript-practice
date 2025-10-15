console.log("🚀 ADVANCED LEVEL EXERCISES - Problem Solving!");
console.log("=============================================\n");

// Exercise 7: Find the Largest Number
console.log("7. 🔍 Find the Largest Number");
function findLargestNumber() {
    let numbers = [12, 5, 20, 25, 7];
    let largest = numbers[0];

    console.log("   📊 Array: " + numbers);

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("   🏆 Largest number: " + largest);

    // Bonus: Using Math.max
    let largestMath = Math.max(...numbers);
    console.log("   💡 Using Math.max(): " + largestMath);
}
findLargestNumber();

// Exercise 8: Reverse a String
console.log("\n8. 🔄 Reverse a String");
function reverseString() {
    let word = prompt("Enter a word to reverse:");

    if (!word) {
        console.log("   ❌ Please enter a word!");
        return;
    }

    let reversed = "";

    // Method 1: Using for loop
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    console.log("   📝 Original: " + word);
    console.log("   🔄 Reversed: " + reversed);

    // Method 2: Using array methods (more advanced)
    let reversedAdvanced = word.split('').reverse().join('');
    console.log("   💡 Using array methods: " + reversedAdvanced);
}
reverseString();

// Exercise 9: Prime Number Checker
console.log("\n9. 🔢 Prime Number Checker");
function checkPrime() {
    let number = parseInt(prompt("Enter a number to check if it's prime:"));

    if (isNaN(number) || number < 2) {
        console.log("   ❌ Please enter a number greater than 1!");
        return;
    }

    let isPrime = true;

    // Check for factors
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("   ✅ " + number + " is a PRIME number!");
    } else {
        console.log("   ❌ " + number + " is NOT a prime number.");
    }

    // Show factors for non-prime numbers
    if (!isPrime && number > 1) {
        let factors = [];
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                factors.push(i);
            }
        }
        console.log("   📊 Factors: " + factors.join(', '));
    }
}
checkPrime();

// Exercise 10: Array Filtering (Adults Only)
console.log("\n10. 🎯 Array Filtering - Adults Only");
function filterAdults() {
    let ages = [12, 18, 25, 30, 15, 17, 22, 16];
    let adults = [];

    console.log("   👥 All ages: " + ages);

    // Method 1: Using for loop
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            adults.push(ages[i]);
        }
    }

    console.log("   🎓 Adults (≥18): " + adults);

    // Method 2: Using filter method (more advanced)
    let adultsFilter = ages.filter(age => age >= 18);
    console.log("   💡 Using filter(): " + adultsFilter);

    // Bonus: Show statistics
    console.log("   📈 Statistics:");
    console.log("      Total people: " + ages.length);
    console.log("      Adults: " + adults.length);
    console.log("      Minors: " + (ages.length - adults.length));
}
filterAdults();

// BONUS: Interactive Summary
console.log("\n\n🌟 ADVANCED LEVEL COMPLETED!");
console.log("===========================");
console.log("🎯 Concepts Practiced:");
console.log("   • Array manipulation");
console.log("   • String operations");
console.log("   • Mathematical logic");
console.log("   • Algorithm thinking");
console.log("   • Array methods (filter, split, reverse, join)");
console.log("\n💡 You're becoming a JavaScript pro! 🚀");