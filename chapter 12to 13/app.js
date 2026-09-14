// Chapter12to13
// Question1
// var character = prompt("Enter a character:");

// var ascii = character.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("It is a number");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     alert("It is an uppercase letter");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     alert("It is a lowercase letter");
// }
// else {
//     alert("It is a special character");
// }
// Question2
// var num1 = Number(prompt("Enter first integer:"));
// var num2 = Number(prompt("Enter second integer:"));

// if (num1 > num2) {
//     alert("Larger integer is: " + num1);
// }
// else if (num2 > num1) {
//     alert("Larger integer is: " + num2);
// }
// else {
//     alert("Both integers are equal");
// }
// Question3
// var number = Number(prompt("Enter a number:"));

// if (number > 0) {
//     alert("The number is positive");
// }
// else if (number < 0) {
//     alert("The number is negative");
// }
// else {
//     alert("The number is zero");
// }
// Question4
// var character = prompt("Enter a character:");

// if (
//     character === "a" ||
//     character === "e" ||
//     character === "i" ||
//     character === "o" ||
//     character === "u"
// ) {
//     alert("True - It is a vowel");
// }
// else {
//     alert("False - It is not a vowel");
// }
// Question5
// var correctPassword = "12345";

// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }
// Question6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);
// Question7
// var time = prompt("Enter time in 24 hours format:");

// time = Number(time);

// if (time >= 0 && time < 1200) {
//     var hour = Math.floor(time / 100);
//     if (hour == 0) {
//         hour = 12;
//     }
//     alert(hour + "am");
// }
// else if (time == 1200) {
//     alert("12pm");
// }
// else if (time > 1200 && time < 2400) {
//     var hour = Math.floor(time / 100);
//     hour = hour - 12;
//     alert(hour + "pm");
// }
// else {
//     alert("Invalid time");
// }
