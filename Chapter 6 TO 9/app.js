// Chapter6

// Question1
//  var a = 10;

//     document.write("Result:<br>");
//     document.write("The value of a is: " + a + "<br>");
//     document.write("................................<br><br>");

//     document.write("The value of ++a is: " + (++a) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     document.write("The value of a++ is: " + (a++) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     document.write("The value of --a is: " + (--a) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     document.write("The value of a-- is: " + (a--) + "<br>");
//     document.write("Now the value of a is: " + a);
// Question2
//  var a = 2 , b = 1 ;

//     var result = --a - --b + ++b + b--;

//     document.write("a is: " + a + "<br>");
//     document.write("b is: " + b + "<br>");
//     document.write("result is: " + result);
// Question3
// let name = prompt("Enter your name:");

//     document.write("Hello " + name + ", welcome!");
// Question4

// Question5
// //  let number = prompt("Enter a number:");

// //     if (number === null || number === "") {
// //         number = 5;
// //     }

// //     for (let i = 1; i <= 10; i++) {
// //         document.write(number + " x " + i + " = " + (number * i) + "<br>");
//     }
// Question6
// Take subject names
    let subject1 = prompt("Enter first subject name:");
    let subject2 = prompt("Enter second subject name:");
    let subject3 = prompt("Enter third subject name:");

    // Total marks for each subject
    let totalMarks = 100;

    // Take obtained marks
    let marks1 = prompt("Enter obtained marks for " + subject1);
    let marks2 = prompt("Enter obtained marks for " + subject2);
    let marks3 = prompt("Enter obtained marks for " + subject3);

    // Convert input into numbers
    marks1 = Number(marks1);
    marks2 = Number(marks2);
    marks3 = Number(marks3);

    // Calculate total marks and obtained marks
    let total = totalMarks * 3;
    let obtained = marks1 + marks2 + marks3;

    // Calculate percentage
    let percentage = (obtained / total) * 100;

    // Display table
    document.write("<table border='1'>");

    document.write("<tr>");
    document.write("<th>Subject</th>");
    document.write("<th>Total Marks</th>");
    document.write("<th>Obtained Marks</th>");
    document.write("<th>Percentage</th>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + subject1 + "</td>");
    document.write("<td>100</td>");
    document.write("<td>" + marks1 + "</td>");
    document.write("<td>" + marks1 + "%</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + subject2 + "</td>");
    document.write("<td>100</td>");
    document.write("<td>" + marks2 + "</td>");
    document.write("<td>" + marks2 + "%</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + subject3 + "</td>");
    document.write("<td>100</td>");
    document.write("<td>" + marks3 + "</td>");
    document.write("<td>" + marks3 + "%</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<th></th>");
    document.write("<th>" + total + "</th>");
    document.write("<th>" + obtained + "</th>");
    document.write("<th>" + percentage + "%</th>");
    document.write("</tr>");

    document.write("</table>");
// Question7