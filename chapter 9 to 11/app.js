// chapter9to11
// Question1
// var city = prompt("Enter your city name:");

// if (city === "karachi") {
//     alert("Welcome to city of lights");
// }
// Question2
// var gender = prompt("Enter your gender:");

// if (gender === "male") {
//     console.log("Good Morning Sir");
    
// } 
// else if (gender === "female") {
//     console.log("Good Morning Ma’am");
// }
// Question3
// var color = prompt("Enter traffic signal color:");

// if (color === "red") {
//     console.log("Must Stop");
// }
// else if (color === "yellow") {
//     console.log("Ready to move");
// }
// else if (color === "green") {
//     console.log("Move now");
// }
// else {
//     console.log("Invalid color");
// }
// Question4
// var fuel = prompt("Enter remaining fuel in litres:");

// if (fuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// }
// Question5(a)
// var a = 4;

// if (++a === 5) {
//     console.log("given condition for variable a is true");
// }
// Question5(b)
// var b = 82;

// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// Question5(c)
// var c = 12;

// if (c++ === 13) {
//     alert("condition 1 is true");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// }

// if (++c < 14) {
//     alert("condition 3 is true");
// }

// if (c === 14) {
//     alert("condition 4 is true");
// }
// Question5(d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// Question5(e)
// if (true) {
//     alert("True");
// }

// if (false) {
//     alert("False");
// }
// Question5(f)
// if ("ball" < "cat") {
//     alert("ball is smaller than cat");
// }
// Question6
// var subject1 = +prompt("Enter marks of Subject 1:");
// var subject2 = +prompt("Enter marks of Subject 2:");
// var subject3 = +prompt("Enter marks of Subject 3:");

// var totalMarks = 300;
// var marksObtained = subject1 + subject2 + subject3;

// var percentage = (marksObtained / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 89) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1>");
// document.write("<h3><p>Total marks : " + totalMarks + "</p>");
// document.write("<p>Marks obtained : " + marksObtained + "</p>");
// document.write("<p>Percentage : " + percentage + "%</p>");
// document.write("<p>Grade : " + grade + "</p>");
// document.write("<p>Remarks : " + remarks + "</p></h3>");
// Question7
// var secretNumber = 7;

// var guess = +prompt("Guess the secret number (1 to 10):");

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// }
// else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }
// Question8
// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// }
// Question9
// var number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert("The number is even");
// }
// else {
//     alert("The number is odd");
// }
// Question10
// var temperature = +prompt("Enter temperature:");

// if (temperature > 40) {
//     alert("It is too hot outside.");
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (temperature > 20) {
//     alert("Today's Weather is cool.");
// }
// else if (temperature > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }
// Question11
// var firstNumber = +prompt("Enter first number:");
// var secondNumber = +prompt("Enter second number:");
// var operation = prompt("Enter operation (+, -, *, /, %):");

// if (operation === "+") {
//     alert(firstNumber + secondNumber);
// }
// else if (operation === "-") {
//     alert(firstNumber - secondNumber);
// }
// else if (operation === "*") {
//     alert(firstNumber * secondNumber);
// }
// else if (operation === "/") {
//     alert(firstNumber / secondNumber);
// }
// else if (operation === "%") {
//     alert(firstNumber % secondNumber);
// }
// else {
//     alert("Invalid operation");
// }