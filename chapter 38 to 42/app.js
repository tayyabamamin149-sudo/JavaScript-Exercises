// chapter38to42

// Question1

// function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// console.log(power(2, 3)); 
// Question2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// var year = 2030;
// if (isLeapYear(year)) {
//     console.log(year + " is a Leap Year.");
// } else {
//     console.log(year + " is not a Leap Year.");
// }
// Question3

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     let S = calculateS(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }
// console.log("Area of Triangle: " + calculateArea(3, 4, 5)); 
// Question4

// function calculateAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function calculatePercentage(m1, m2, m3, totalMarksPerSubject = 100) {
//     var totalObtained = m1 + m2 + m3;
//     var totalMaxMarks = totalMarksPerSubject * 3;
//     return (totalObtained / totalMaxMarks) * 100;
// }

// function mainFunction(m1, m2, m3) {
//     var avg = calculateAverage(m1, m2, m3);
//     var perc = calculatePercentage(m1, m2, m3);

//     console.log("Average Marks: " + avg.toFixed(2));
//     console.log("Percentage: " + perc.toFixed(2) + "%");
// }

// mainFunction(85, 90, 80);
// Question5

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; 
// }


// console.log(customIndexOf("Hello", "e")); 
// console.log(customIndexOf("Hello", "z")); 
// Question6
// function removeVowels(str) {
//     var result = "";
//     var vowels = "aeiou AEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }


// var sentence = "Hello World";
// console.log(removeVowels(sentence)); 

// Question7

// function countSuccessiveVowels(text) {
//     var count = 0;
//     var foundPairs = [];
//     var str = text.toLowerCase(); 

//     for (var i = 0; i < str.length - 1; i++) {
//         var char1 = str[i];
//         var char2 = str[i + 1];

        
//         switch (char1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
                
//                 switch (char2) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         foundPairs.push(char1 + char2);
//                         break;
//                 }
//                 break;

//             default:
//                 break;
//         }
//     }
//     console.log("Found pairs:", foundPairs.join(", "));
//     console.log("Total occurrences:", count);
//     return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// countSuccessiveVowels(sentence);
// // Question8
// function toMeters(km) {
//     return km * 1000;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }

// function toFeet(km) {
//     return km * 3280.84; 
// }

// function toInches(km) {
//     return km * 39370.1; \
// }

// function printDistances(km) {
//     console.log("Distance in Meters: " + toMeters(km));
//     console.log("Distance in Centimeters: " + toCentimeters(km));
//     console.log("Distance in Feet: " + toFeet(km));
//     console.log("Distance in Inches: " + toInches(km));
// }


// printDistances(5); 
// Question9
// function calculateOT(hoursWorked){
//     var regHours= 40
//     var OTpay =12

//     hoursWorked= Math.floor(hoursWorked)

//     if(hoursWorked >regHours){
//         var OThours = hoursWorked- regHours
//         return OThours * OTpay
//     }else{
//         return 0
//     }
// }
// console.log(`OvertTime pay RS. ${calculateOT(45)}/-`);
// console.log(calculateOT(40));
// console.log(calculateOT(60));
// Question10
// var amount = +prompt("Enter a number to withdraw") //470 %100

// if (!isNaN(amount) && amount <=999 && amount >=100) {
//     var hundreds = Math.floor(amount / 100) //4
//     amount = amount % 100 //70
//     var fifty = Math.floor(amount / 50) //1
//     amount %= 50

//     var tens = Math.floor(amount / 10)

//     console.log(`You will have ${hundreds} notes of hundred ${fifty} notes of fifty and ${tens} notes of ten`)

// } else {
//     console.log("Enter a valid amount");
// }
