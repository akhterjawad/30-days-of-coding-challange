// Day 5: Functions

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

// Achievement:
// By the end of these activities, students will:
// • Understand and define functions using function declarations, expressions, and arrow functions.
// • Use function parameters and default values effectively.
// • Create and utilize higher-order functions.
// • Apply functions to solve common problems and perform calculations.
// • Enhance code reusability and organization using functions.

// Tasks/Activities:

// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

let number;
function check() {
    number=3
    let answer = number % 2 === 0 ? `even` : `odd`;
console.log(answer);
}
check();

// • Task 2: Write a function to calculate the square of a number and return the result.

function calculate() {
    return 3*3;
}
console.log(calculate());

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let maximun;
let Expression=function (first,second) {
    maximun= Math.max(first,second);
console.log(maximun);
}
Expression(8,5);

// • Task 4: Write a function expression to concatenate two strings and return the result.

function concatenate() {
    let first='Muhammad '
    let second='Jawad'
    console.log(first+second);
}
concatenate();

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum =()=>{
    console.log(3+5);
}
sum();

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);
// Example usage:
console.log(containsCharacter("Hello, world!", "w")); // Outputs: true
console.log(containsCharacter("Hello, world!", "z")); // Outputs: false

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let DefaultValues=(first,second='Google')=> {
    console.log(first,second);
}
DefaultValues('Hello');

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// let fullName= prompt('what is your name');
// let GreetingMessage=(name,age='65')=>{
// console.log(name,age);
// alert(`Hello ${name} how are you with your ${age} age`)
// }
// GreetingMessage(fullName,);

// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};
// Example usage:
const sayHello = () => {
    console.log("Hello!");
};
repeatFunction(sayHello, 3);



// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. 

const applyFunctions = (func1, func2, value) => {
    const resultFromFunc1 = func1(value);
    const finalResult = func2(resultFromFunc1);
    return finalResult;
};
const double = (x) => x * 2;
const addOne = (x) => x + 1;
const result = applyFunctions(double, addOne, 3);
console.log(result); 
//====================== Complete ======================//
