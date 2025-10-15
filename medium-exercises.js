console.log("🎯 MEDIUM LEVEL EXERCISES - New File!");
console.log("=====================================\n");

// Exercise 4: Grade Checker
console.log("4. 📚 Grade Checker");
function gradeChecker() {
    let score = parseInt(prompt("Enter student's score (0-100):"));

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("   ❌ Please enter a valid score between 0-100!");
        return;
    }

    let grade;
    if (score >= 90) {
        grade = "A 🎉";
    } else if (score >= 80) {
        grade = "B 👍";
    } else if (score >= 70) {
        grade = "C ✅";
    } else {
        grade = "Fail ❌";
    }

    console.log(`   📝 Score: ${score}/100`);
    console.log(`   🎓 Grade: ${grade}`);
}
gradeChecker();

// Exercise 5: Multiplication Table Generator
console.log("\n5. ✨ Multiplication Table Generator");
function multiplicationTable() {
    let number = parseInt(prompt("Enter a number for multiplication table:"));

    if (isNaN(number)) {
        console.log("   ❌ Please enter a valid number!");
        return;
    }

    console.log(`   📚 Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`      ${number} × ${i} = ${result}`);
    }
}
multiplicationTable();

// Exercise 6: Array of Fruits
console.log("\n6. 🍎 Array of Fruits");
function fruitArray() {
    let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Strawberry", "Pineapple"];

    console.log("   🍊 My Favorite Fruits:");
    for (let i = 0; i < fruits.length; i++) {
        console.log(`      ${i + 1}. ${fruits[i]}`);
    }

    console.log(`\n   ℹ  Total fruits: ${fruits.length}`);
    console.log(`   🥇 First fruit: ${fruits[0]}`);
    console.log(`   🥉 Last fruit: ${fruits[fruits.length - 1]}`);
}
fruitArray();

console.log("\n🎊 Medium exercises completed!");