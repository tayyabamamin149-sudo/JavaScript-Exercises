// chapter35to38
// Question1
// function showDateTime() {
//     document.write(new Date());
// }

// showDateTime();
// Question2
// function greetUser(firstName, lastName) {
//     document.write("Hello " + firstName + " " + lastName);
// }

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// greetUser(firstName, lastName);
// Question3

// function add(num1, num2) {
//     return num1 + num2;
// }

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");

// document.write("Sum: " + add(a, b));

// Question4

// function calculator(num1, num2, operator) {
//     if (operator == "+")
//         return num1 + num2;
//     else if (operator == "-")
//         return num1 - num2;
//     else if (operator == "*")
//         return num1 * num2;
//     else if (operator == "/")
//         return num1 / num2;
//     else
//         return "Invalid operator";
// }

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
// var op = prompt("Enter operator (+, -, *, /)");

// document.write("Result: " + calculator(a, b, op));

// Question5

// function square(num) {
//     return num * num;
// }

// var n = +prompt("Enter a number");

// document.write("Square: " + square(n));

// Question6

// function factorial(num) {
//     var fact = 1;

//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//     }

//     return fact;
// }

// var n = +prompt("Enter a number");

// document.write("Factorial: " + factorial(n));

// Question7

// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// var start = +prompt("Enter start number");
// var end = +prompt("Enter end number");

// count(start, end);

// Question8


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }

//     var result = calculateSquare(base) + calculateSquare(perpendicular);
//     return Math.sqrt(result);
// }

// var base = +prompt("Enter base");
// var perpendicular = +prompt("Enter perpendicular");

// var answer = calculateHypotenuse(base, perpendicular);

// document.write("Hypotenuse: " + answer);


// Question9

// function area(width, height) {
//     return width * height;
// }

// document.write(area(12, 10));


// Arguments as variables

// function area(width, height) {
//     return width * height;
// }

// var w = 5;
// var h = 10;

// document.write(area(w, h));

// Question10

// function palindrome(str) {
//     var reverse = str.split("").reverse().join("");

//     if (str === reverse)
//         document.write("Palindrome");
//     else
//         document.write("Not a Palindrome");
// }

// var word = prompt("Enter a word");
// palindrome(word);

// Question11

// function titleCase(str) {
//     return str.replace(/\b\w/g, function(letter) {
//         return letter.toUpperCase();
//     });
// }

// document.write(titleCase("the quick brown fox"));

// Question12

// function longestWord(str) {
//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length)
//             longest = words[i];
//     }

//     return longest;
// }

// document.write(longestWord("Web Development Tutorial"));

// Question13

// function countLetter(str, letter) {
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter)
//             count++;
//     }

//     return count;
// }

// document.write(countLetter("JSResourceS.com", "o"));

// Question14


// function calcCircumference(radius) {
//     document.write("Circumference of circle = 2πr<br>");
// }

// function calcArea(radius) {
//     document.write("Area of circle = πr2");
// }

// calcCircumference(5);
// calcArea(5);


