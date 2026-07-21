// Loop [IMPORTANT]

// A loop is a programming structure that repeatedly executes a block of code until a specified condition is met. Loops help reduce repetitive code and make programs more efficient.

// # Advantages of Loops
// Reduce code duplication.
// Save time and effort.
// Make programs shorter and easier to maintain.
// Execute tasks repeatedly based on a condition.


// Types of Loops in JavaScript
//1. for Loop
//2. while Loop
//3. do...while Loop
//4. for...of Loop
//5. for...in Loop

// 1. for Loop:- Used when you know how many times you want to repeat a block of code.

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code
// }


// Examples:
// for(i = 1;i <= 10;i = i+1){
//     console.log("Hello", i)
// }

// console.log("End of Loop")



// # Uses:
// Multiplication Table
// num=3
// 3 x 1 = 3
// 3 x 3 = 6
// 3 x 3 = 9
// num=3

// for(i = 1;i <= 10;i++){
//     // console.log(num, "x", i, "=", num * i)
//     console.log(num+ " x " + i + " = " + num * i)
// }



// let odd_numbers = [1, 3, 5, 7, 9, 11, 17, 19]

// for(i = 0; i < 8; i++){
//     console.log(odd_numbers[i])
// }



// let odd_numbers = [1, 3, 5, 7, 9, 11, 13, 17, 19, 21]

// for(i = 0; i < odd_numbers.length; i++){
//     console.log(odd_numbers[i])
// }



// let odd_numbers = [1, 3, 5, 7, 9, 11, 13, 17, 19, 21]

// odd_numbers.forEach(num => {
//      console.log(num)
//  });



// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }




// 2. while Loop:- Used when the number of iterations is not known in advance. The condition is checked before each iteration.

// Syntax:
// while (condition) {
//     // code
// }

// Example:
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }



// 3. do...while Loop:- Similar to the while loop, but the code executes at least once because the condition is checked after the loop body.

// Syntax:
// do {
//     // code
// } while (condition);


// Example:
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);



// 4. for...of Loop:- Used to iterate over iterable objects such as arrays, strings, maps, and sets.

// Example:
// const cars = ["BMW", "Tesla", "Audi"];

// for (const car of cars) {
//     console.log(car);
// }

// Output:
// BMW
// Tesla
// Audi



// 5. for...in Loop:- Used to iterate over the properties (keys) of an object.

// Example:
// const student = {
//     name: "John",
//     age: 20,
//     grade: "A"
// };

// for (const key in student) {
//     console.log(key + ": " + student[key]);
// }


// Output:
// name: John
// age: 20
// grade: A


// Summary:
// for → Fixed number of repetitions.
// while → Repeats while a condition is true.
// do...while → Executes once before checking the condition.
// for...of → Loops through values of iterables (arrays, strings, etc.).
// for...in → Loops through keys/properties of objects.



// Array & Object [IMPORTANT]

// let students = [
//     {
//         "name": "Ram",
//         "grade": "10",
//         "gpa": "3.2",
//         "contact":[9815515251, 9845661452],
//     },
//     {
//         "name": "Shyam",
//         "grade": "10",
//         "gpa": "null",
//         "contact": [9815445251, 9844561452],
//     }
// ]

// students.forEach(students => {
//     console.log("name:" + students.name)
//     console.log("grade:" + students.grade)
//     console.log("gap:" + students.gpa)
//     console.log("contact:" + students.contact)
// });



// Function [IMPORTANT]

// Function - A function is a reusable block of code that performs a specific task. Functions help organize code, reduce repetition, and make programs easier to maintain.

// Advantages of Functions
// - Reuse code multiple times.
// - Reduce code duplication.
// - Improve readability.
// - Simplify debugging and maintenance.
// - Make programs modular.

// Types of Functions in JavaScript

// 1. Function Declaration (Named Function)
// 2. Function Expression
// 3. Arrow Function (ES6)
// 4. Anonymous Function
// 5. Immediately Invoked Function Expression (IIFE)
// 6. Callback Function
// 7. Constructor Function


// 1. Function Declaration (Named Function):- A function is declared using the function keyword and can be called before or after its declaration.

// Syntax:
// function functionName() {
//     // code
// }

// Example:
// function greet() {
//     console.log("Welcome to JavaScript");
// }

// greet();

// Output:
// Welcome to JavaScript


// 2. Function Expression:- A function is assigned to a variable.

// Syntax:
// const variableName = function () {
//     // code
// };

// Example:
// const greet = function () {
//     console.log("Hello World");
// };

// greet();


// 3. Arrow Function (ES6):- A shorter syntax for writing functions using the => operator.

// Syntax:
// const functionName = () => {
//     // code
// };

// Example:
// const greet = () => {
//     console.log("Hello JavaScript");
// };
// greet();

// Arrow function with parameters:
// const add = (a, b) => a + b;

// console.log(add(5, 3));

// Output:
// 8


// 4. Anonymous Function:- A function without a name, often used as a callback.

// Example:
// setTimeout(function () {
//     console.log("Executed after 2 seconds");
// }, 2000);


// 5. Immediately Invoked Function Expression (IIFE):- A function that runs immediately after it is defined.

// Syntax:
// (function () {
//     // code
// })();

// Example:
// (function () {
//     console.log("IIFE Executed");
// })();

// 6. Callback FunctionL- A function passed as an argument to another function.

// Example:
// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     callback("John");
// }

// processUser(greet);

// Output:
// Hello John


// 7. Constructor Function:- Used to create multiple objects with similar properties.

// Example:
// function Car(name, model) {
//     this.name = name;
//     this.model = model;
// }

// const car1 = new Car("Tesla", "Model X");

// console.log(car1.name);

// Output:
// Tesla

// Function with Parameters:- Parameters allow you to pass values into a function.

// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);

// Output:
// 30

// Function with Return Value:- The return statement sends a value back to the caller.

// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(5, 6);
// console.log(result);

// Output:
// 30



// Summary

// Function Declaration → Standard reusable function.
// Function Expression → Function stored in a variable.
// Arrow Function → Concise syntax introduced in ES6.
// Anonymous Function → No name; often used as callbacks.
// IIFE → Runs immediately after definition.
// Callback Function → Executed by another function.
// Constructor Function → Used to create object instances.


// ====================================================================================
// ====================================================================================

// Function:

// function name(){
//     console.log("hello")
// }
// name()


// function greet(){
//     console.log("Good Morning")
// }
// greet()
// greet()
// greet()


// function greet(wish){
//     console.log(wish)
// }
// greet("Good Morning")
// greet("Good Afternoon")
// greet("Good Evening")


// function greet(wish, name){
//     console.log(wish, name+"!")
// }
// greet("Good Morning", "Dhan Raj Gurung")
// greet("Good Afternoon", "Kusa Gurung")
// greet("Good Evening", "Nischal Gurung")


// function greet(wish, name, message){
//     console.log("************************************")
//     console.log(wish, name+"!")
//     console.log(message)
//     console.log("************************************")
// }
// greet("Good Morning", "Dhan Raj Gurung", "Welcome to JS class.")
// greet("Good Afternoon", "Kusa Gurung", "Welcome to Laravel class.")
// greet("Good Evening", "Nischal Gurung", "Welcome to CSS class.")


// function greet(wish, name, message="no message"){
//     console.log("************************************")
//     console.log(wish, name+"!")
//     if (message) {
//         console.log(message)
//     }
//     console.log("************************************")
// }
// greet("Good Morning", "Dhan Raj Gurung", "Welcome to JS class.")
// greet("Good Afternoon", "Kusa Gurung", "Welcome to Laravel class.")
// greet("Good Evening", "Nischal Gurung")

// (wish, name, message="no message") - Parameter
// ("Good Morning", "Dhan Raj Gurung", "Welcome to JS class.") - Arguements



// Return Statement:

// function add(a, b){
//     result = a + b
//     console.log(result)
// }
// add(2, 3)



// function add(a, b){
//     let result = a + b
//     // console.log(result)
//     return result
// }
// let result = add(2, 3)
// console.log(result)



// function add(a, b){
//     let result = a + b
//     // console.log(result)
//     return result
// }
// console.log(add(3, 4))