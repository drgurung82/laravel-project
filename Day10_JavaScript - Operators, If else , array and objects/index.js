// # Operators -> Operators are symbols used to perform operations on values and variables.

// # Types of Operators

// 1. Arithmetic Operators (+,-,*,/,%,**,++,--) - Used to perform mathematical calculations.
// let a = 25
// let b = 5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
// console.log(a++b)
// console.log(a--b)

// #
// +	- Addition
// -	- Subtraction
// *	- Multiplication
// /	- Division
// %	- Modulus (Remainder)
// **	- Exponentiation
// ++	- Increment
// --	- Decrement

// 2. Assignment Operators (=,+=,-=,*=,/=,%=,**=) - Used to assign values to variables.
// let a = 5
// a = a + 10
//console.log(a)
//console.log(a+=10)
//console.log(a-=10)
//console.log(a*=10)
//console.log(a/=10)
//console.log(a/=10)
//console.log(a**=10)

// 3. Comparison (Relational) Operators (==,===,!=,!==,>,<,>=,<=) - Used to compare two values.
// let a = 10
// let b = 9
// console.log(a==b)
// console.log(a===b)
// console.log(a!=b)
// console.log(a!==b)
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)

// #
// ==	- Equal to
// ===	- Strict equal (value and type)
// !=	- Not equal
// !==	- Strict not equal
// >	- Greater than
// <	- Less than
// >=	- Greater than or equal
// <=	- Less than or equal

// 4. Logical Operators (&&,||,!) - Used to combine or negate conditions.
// let a = 10
// let b = 8
// let c = 18
// console.log(b<a)
// console.log(b>c)
// console.log(b<c && b<c)
// console.log(b<c && b>c)
// console.log(b<a || b>c)
// console.log(!false)

// # example -
// let data = 'data'
// console.log(!data)

// // #
// &&	- Logical AND
// ||	- Logical OR
// !	- Logical NOT

// 5. Conditional (Ternary) Operator - A shorthand for if...else.
// condition ? if conditionis true : if condition is false
// let a = 10
// let b = 10
// a == b ? console.log("a and b are equal") : console.log("a and b are not equal")

// 6. Increment and decrement ++,--
// let a = 10
// console.log(++a)
// console.log(--a)
// console.log(a)

// let marks = 50
// let pass_marks = 30
// marks>=pass_marks ? console.log("Pass"): console.log("Fail")

// let marks = prompt("Enter your marks")
// let pass_marks = 30
// marks>=pass_marks ? console.log("Pass"): console.log("Fail")



// # Control Flow - Control Flow is the order in which JavaScript executes statements in a program. It allows the program to make decisions, repeat tasks, or choose different paths based on conditions. In simple words, control flow controls the sequence of execution of code.

// # Types of Control Flow in JavaScript

// 1. Sequential Control Flow - Statements execute one after another in the order they are written.

// Example:

// let a = 10;
// let b = 20;
// console.log(a + b);

// 2. Conditional Control Flow - Executes different code based on a condition.

// Common Conditional Statements -
// if
// if...else
// else if
// switch

// Example:

// let age = 18;

// if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You cannot vote.");
// }

// console.log("Hello World")
/**
 * if (condition){
 * code to run when condition is true
 * }
*/

/**
 * if (condition){
 * code to run when condition is true
 * }else{
 * otherwise run this code
 * }
*/

// Example -

// let marks = 100
// let pass_marks = 30
// if (marks >= pass_marks) {
//     console.log("Congratulation")
//     console.log("You are Passed.")
// }else {
//     console.log("Fail")
// }

// let marks = 75
// let pass_marks = 35
// if (marks >= 90 && marks <= 100) {
//     console.log("A+")
// }
// if (marks >= 80 && marks < 90) {
//     console.log("A")
// }
// if (marks >= 70 && marks < 80) {
//     console.log("B+")
// }
// if (marks >= 60 && marks < 70) {
//     console.log("B")
// }
// if (marks >= 50 && marks < 60) {
//     console.log("C+")
// }

// if (marks >= 40 && marks < 50) {
//     console.log("C")
// }
// if (marks >= 35 && marks < 40) {
//     console.log("D")
// }
// if (marks >= 1 && marks < 35) {
//     console.log("NG")
// }



// let marks = 55
// let pass_marks = 35
// if (marks >= 90 && marks <= 100) {
//     console.log("A+")
// }
// if (marks >= 80 && marks < 90) {
//     console.log("A")
// }
// else if (marks >= 70 && marks < 80) {
//     console.log("B+")
// }
// else if (marks >= 60 && marks < 70) {
//     console.log("B")
// }
// else if (marks >= 50 && marks < 60) {
//     console.log("C+")
// }
// else if (marks >= 40 && marks < 50) {
//     console.log("C")
// }
// else if (marks >= 35 && marks < 40) {
//     console.log("D")
// }
// else if (marks >= 1 && marks < 35) {
//     console.log("NG")
// }


// 3. Looping Control Flow - Repeats a block of code until a condition becomes false.

// Common Loops -

// for
// while
// do...while
// for...of
// for...in

// Example:

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// 4. Jump Control Flow - Changes the normal flow of execution.

// Jump Statements -

// break – Exits a loop or switch.
// continue – Skips the current iteration and moves to the next one.
// return – Exits a function and optionally returns a value.

// Example (break):

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }



// Data Structure - A Data Structure is a way of organizing, storing, and managing data so that it can be accessed, modified, and processed efficiently. Data structures help programmers write faster, more organized, and more efficient programs.

// Uses of Data Structures:

// Organizes data in a structured manner.
// Stores large amounts of data efficiently.
// Provides faster access to stored data.
// Makes searching and sorting easier.
// Improves program performance and efficiency.
// Simplifies data manipulation (adding, updating, and deleting data).
// Supports complex applications such as web apps, games, and databases.
// Reduces code complexity by organizing related data together.
// Helps solve real-world problems efficiently.
// Optimizes memory usage and processing time.

// Common Data Structures in JavaScript:
// # 1. Array - An Array stores multiple values in a single variable. (Collection of Data, denoted by [])

// Examples:
// a.
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);

// b.
let odd_numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17]
// console.log(odd_numbers)
// console.log(odd_numbers[5])
// console.log(odd_numbers[7])
// console.log(odd_numbers.at(-3))
// console.log(odd_numbers[0])
// console.log(odd_numbers[1])
// console.log(odd_numbers[2])
// console.log(odd_numbers[3])
// console.log(odd_numbers[4])
// console.log(odd_numbers[5])
// console.log(odd_numbers[6])
// console.log(odd_numbers[7])
// console.log(odd_numbers[8])
// console.log(odd_numbers[9])

// let student = ["Sudam", 25, true, { "name": "Hari" }]
// console.log(student[3])


// # 2. Object - An Object stores data as key-value pairs.

// Example:

// let student = {
//   name: "John",
//   age: 20,
//   grade: "A"
// };
// console.log(student.name);

// student = {
//     "name": "Ram",
//     "age": 12,
//     "gender": "male",
//     "grade": 7
// }
// console.log(student.name)
// console.log(student.age)
// console.log(student.gender)
// console.log(student.grade)

// console.log("Name:", student.name)
// console.log("age:", student.age)
// console.log("gender:", student.gender)
// console.log("grade:", student.grade)

// # 3. Set

// A Set stores unique values (no duplicates).

// Example:

// let numbers = new Set([1, 2, 3, 3, 4]);
// console.log(numbers);

// # 4. Map

// A Map stores key-value pairs, where keys can be of any data type.

// Example:

// let person = new Map();

// person.set("name", "John");
// person.set("age", 25);

// console.log(person.get("name"));