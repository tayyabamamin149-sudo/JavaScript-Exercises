// Chapter14to16
// Question1
// var studentNames = [];
// Question2
// var studentNames = new Array();
// Question3
// var fruits = ["Apple", "Mango", "Banana", "Orange"];
// Question4
// var numbers = [10, 20, 30, 40, 50];
// Question5
// var booleanArray = [true, false, true, false];
// Question6
// var mixedArray = ["Tayyaba", 20, true, "Pakistan"];
// Question7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications:</h2>");

// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }
// Question8
// var student = ["Micheal", "John" ,"Tony"]
// var score = [320 , 230 , 480]

// document.write(`Score of ${student[0]} is ${score[0] }. Percentage : ${score[0]/ 500 * 100}% <br> `)
// document.write(`Score of ${student[1]} is ${score[1] }. Percentage : ${score[1]/ 500 * 100}% <br> `)
// document.write(`Score of ${student[2]} is ${score[2] }. Percentage : ${score[2]/ 500 * 100}% <br>`)
// Question9
// var colors = ["Pink" , "Blue" , "Black" , "White" , "Grey"]
// console.log(colors)

// colors.unshift("Purple")
// console.log(colors)

// var userClr = prompt("Color you want in the end")

// colors.push(userClr)
// console.log(colors)

// colors.unshift("Red" , "Brown")
// console.log(colors)

// colors.shift()
// console.log(colors)

// colors.pop()
// console.log(colors)

// var userIndex = +prompt("Which Index")
// var userClr = prompt("which Color")

// colors.splice(userIndex , 0 , userClr)
// console.log(colors)

// var deltIndex = +prompt("at which index you want to delete a color?")
// var colorQuantity = +prompt("How many colors you want to remove?")

// colors.splice (deltIndex , colorQuantity )
// console.log(colors)
// Question10
// var studentScore = [320, 230, 480, 120]
// studentScore.sort()
// console.log(studentScore)
// Question11
// var cityName = ["Karachi", "Lahore", "Islamabd", "Quetta", "Peshawar"]
// var newCity = cityName.slice(1,4)
// console.log(newCity)
// Question12
// var arr = ["This", "is", "my", "cat"];

// document.write( "Array: <br>");
// document.write(arr.join(",") + "<br><br>");

// var string = arr.join(" ");

// document.write("String:<br>");
// document.write(string);
// Question13
// var queue = [];

// // queue.push("Apple");
// // queue.push("Banana");
// // queue.push("Mango");
// // queue.push("Orange");

// // document.write(queue.shift() + "<br>");
// // document.write(queue.shift() + "<br>");
// // document.write(queue.shift() + "<br>");
// // document.write(queue.shift() + "<br>");
// Question14
// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("Devices:<br>");
// document.write(devices.join(",") + "<br><br>");

// document.write("Out:<br>");
// document.write(devices.pop() + "<br><br>");

// document.write("Out:<br>");
// document.write(devices.pop() + "<br><br>");

// document.write("Out:<br>");
// document.write(devices.pop() + "<br><br>");

// document.write("Out:<br>");
// document.write(devices.pop());

// Question15
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
}

document.write("</select>");
