// Chapter17to16
// Question1
// let multiArray = [[], [], []];

// console.log(multiArray);
// Question2
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix);
// Question3

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// Question4
// let tableNumber = +prompt("Enter table number:");
// let length = +prompt("Enter table length:");

// for (let i = 1; i <= length; i++) {
//     console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
// }
// Question5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// Question6
// a. Counting
// document.write("<h3>Counting:</h3>");

// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }


// // b. Reverse counting
// document.write("<h3>Reverse counting:</h3>");

// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }


// // c. Even numbers
// document.write("<h3>Even:</h3>");

// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }


// // d. Odd numbers
// document.write("<h3>Odd:</h3>");

// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }


// // e. Series
// document.write("<h3>Series:</h3>");

// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }
// Question7
// 7. Search an item in an array

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

// let index = A.indexOf(userInput);

// if (index !== -1) {
//     alert(userInput + " is available at index " + index + " in our bakery.");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }
// Question8


// let A = [24, 53, 78, 91, 12, 109];

// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log(24, 53, 78, 91, 12, 109)
// console.log("The largest number is " + largest);
// Question9
// 9. Find the smallest number in the array

// let A = [24, 53, 78, 91, 12];

// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number is " + smallest);
// Question10
// 10. Print multiples of 5 from 1 to 100

// for (let i = 5; i <= 100; i += 5) {
//     console.log(i);
// }
