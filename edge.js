// Question 1: Define a function swap.
// Use array destructuring to swap a and b.
// Log or return the swapped values.
function swap(a, b) {
    [a, b] = [b, a];
    console.log(a, b); // Output: swapped values of a and b
}
swap(3, 7); // Example usage



// Question 2: Define a Person class.
// Create a constructor to initialize name and age.
// Add an introduce() method to log a greeting message.
// Create an instance of Person and call the introduce() method.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Rufai", 25);
person.introduce(); // Output: "Hello, my name is Rufai and I am 25 years old."



// Question 3: Define a function greet.
// Use a default value for the name parameter.
// Use the rest operator to accept additional greetings.
// Log the greeting message.
function greet(name = "Guest", ...additionalGreetings) {
    console.log(`Hello, ${name}! ${additionalGreetings.join(" ")}`);
}
greet("Rufai", "Hope you're well!", "Have a great day!"); 
// Output: "Hello, Rufai! Hope you're well! Have a great day!"



// Question 4: Define a function sumNumbers.
// Use the rest operator ... in the function’s parameter to collect all arguments into an array.
// Use the reduce method to calculate the sum of the numbers.
// Return the result.
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

// ------------------------------------------------------

// Question 5: Define two arrays, array1 and array2.
// Use the spread operator ... to combine them into a new array, combinedArray.
// Log or return the combinedArray.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------

// Question 6: Define an array numbers.
// Use array destructuring with the rest operator to separate the first two elements into a and b, and the remaining elements into rest.
// Log the results.
const numbers = [10, 20, 30, 40, 50];
const [a, b, ...rest] = numbers;
console.log(a);    // Output: 10
console.log(b);    // Output: 20
console.log(rest); // Output: [30, 40, 50]

// In math.js (export file):
// Define two functions, 'add' and 'subtract'.
// Use 'export' to export them.

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
//Question 7
// In main.js (import file):
// Import the functions from 'math.js'.
// Use them in the code.

import { add, subtract } from './math.js';

const sum = add(10, 5);
const difference = subtract(10, 5);

console.log("Sum:", sum);            // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5