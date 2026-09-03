// Chapter5

// Question1
// var num1 = 3;
//     var num2 = 5;
//     var sum = num1 + num2;

//     document.write("<h3>" +"Sum of " + num1 + " and " + num2 + " is " + sum +"</h3>");

// Question2

// var num1 = 10;
// var num2 = 5;

// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;

// document.write("Subtraction: " + subtraction + "<br>");
// document.write("Multiplication: " + multiplication + "<br>");
// document.write("Division: " + division + "<br>");
// document.write("Modulus: " + modulus);

// Question3

// var num;

// document.write("Value after variable declaration is " + num + "<br>");

// num = 5;

// document.write("Initial value: " + num + "<br>");

// num++;

// document.write("Value after increment is: " + num + "<br>");

// num = num + 7;

// document.write("Value after addition is: " + num + "<br>");

// num--;

// document.write("Value after decrement is: " + num + "<br>");

// var remainder = num % 3;

// document.write("The remainder is: " + remainder);

// Question4
// var ticketPrice = 600;
// var numberOfTickets = 5;

// var totalCost = ticketPrice * numberOfTickets;

// document.write("<h3>" + "Total cost to buy 5 tickets to a movie is " + totalCost + "PKR"+"</h3>");

// Question5
// var num = 4;

// document.write("<h4>" + "Table of " + num +"<br>"+ "</h4>");

// document.write(num + " x 1 = " + (num * 1) + "<br>");
// document.write(num + " x 2 = " + (num * 2) + "<br>");
// document.write(num + " x 3 = " + (num * 3) + "<br>");
// document.write(num + " x 4 = " + (num * 4) + "<br>");
// document.write(num + " x 5 = " + (num * 5) + "<br>");
// document.write(num + " x 6 = " + (num * 6) + "<br>");
// document.write(num + " x 7 = " + (num * 7) + "<br>");
// document.write(num + " x 8 = " + (num * 8) + "<br>");
// document.write(num + " x 9 = " + (num * 9) + "<br>");
// document.write(num + " x 10 = " + (num * 10));

// Question6
// Celsius temperature
    // let celsius = 25;

    // // Convert Celsius to Fahrenheit
    // let fahrenheit = (celsius * 9 / 5) + 32;

    // document.write(celsius + "°C is " + fahrenheit + "°F<br>");

    // // Fahrenheit temperature
    // fahrenheit = 70;

    // // Convert Fahrenheit to Celsius
    // celsius = (fahrenheit - 32) * 5 / 9;

    // document.write(fahrenheit + "°F is " + celsius + "°C");
// Question7
//  // Store values in variables
//     let priceItem1 = 650;
//     let priceItem2 = 100;
//     let quantityItem1 = 3;
//     let quantityItem2 = 7;
//     let shippingCharges = 100;

//     // Calculate total cost
//     let totalCost = (priceItem1 * quantityItem1) +
//                     (priceItem2 * quantityItem2) +
//                     shippingCharges;

//     // Display receipt
    
//     document.write("Price of item 1 is " + priceItem1 + "<br>");
//     document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
//     document.write("Price of item 2 is " + priceItem2 + "<br>");
//     document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
//     document.write("Shipping Charges " + shippingCharges + "<br><br>");

//     document.write("Total cost of your order is " + totalCost);
// Question8
 // Store marks in variables
    // let totalMarks = 980;
    // let obtainedMarks = 804;

    // // Calculate percentage
    // let percentage = (obtainedMarks / totalMarks) * 82.0408163265306

    // // Display result
    // document.write("Total Marks: " + totalMarks + "<br>");
    // document.write("Obtained Marks: " + obtainedMarks + "<br>");
    // document.write("Percentage: " + percentage + "%");
// Question9
//  let totalCurrency = (10 * 104.80) + (25 * 28);

//     document.write("Total Currency in PKR: " + totalCurrency);
// Question10
//  let number = 10;

//     let result = ((number + 5) * 10) / 2;

//     document.write("Result: " + result);
// Question11
//  let currentYear = 2016;
//     let birthYear = 1992;

//     let age1 = currentYear - birthYear;
//     let age2 = age1 - 1;

//     document.write("Current Year: " + currentYear + "<br>");
//     document.write("Birth Year: " + birthYear + "<br>");
//     document.write("They are either " + age2 + " or " + age1 + " years old.");
// Question12
//  let radius = 20;

//     let circumference = 2 * 3.142 * radius;
//     let area = 3.142 * radius * radius;

//     document.write("Radius of a circle: " + radius + "<br>");
//     document.write("The circumference is: " + circumference + "<br>");
//     document.write("The area is: " + area);
// Question13
let favoriteSnack = "chocolate chip";
    let currentAge = 15;
    let maximumAge = 65;
    let snacksPerDay = 3;

    let totalSupply = (maximumAge - currentAge) * snacksPerDay;

    document.write("Favourite Snack: " + favoriteSnack + "<br>");
    document.write("Current age: " + currentAge + "<br>");
    document.write("Estimated Maximum Age: " + maximumAge + "<br>");
    document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
    document.write("You will need " + totalSupply + " " + favoriteSnack +
                   " to last you until the ripe old age of " + maximumAge);
