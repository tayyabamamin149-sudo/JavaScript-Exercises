// chapter 31 to 34

// Question1
// var today = new Date ()
// console.log(today);

// // Question2
// var today = new Date();
// var month = today.getMonth();

// var monthNames = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];

// var getMonth = monthNames[month];

// console.log("Current Month :",getMonth);


// // Question3
// var today = new Date()
// var day = today.getDay()

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// var getDay = dayNames[day]
// console.log("Today is",getDay);
// Question4
// var today = new Date()
// var day = today.getDay()

// if (day == 0 || day == 6) {
//     alert("It's Fun day")
// } else {
//     alert("Today is not Fun day")
// }
// Question5
// var today = new Date()
// var date = today.getDate()

// if (date < 16) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// }
// Question6
// var today = new Date()

// var milliseconds = today.getTime()
// var minutes = milliseconds / (1000 * 60)

// document.write("Current Date: " + today + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + milliseconds + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + minutes)
// // Question7
// var today = new Date()
// var hour = today.getHours()

// if (hour < 12) {
//     alert("Its AM")
// } else {
//     alert("Its PM")
// }
// Question8
// var laterDate = new Date("December 31, 2020")

// console.log("Later Date :",laterDate)
// // Question9
// var ramadan = new Date("June 18, 2015")
// var today = new Date()

// var days = Math.floor((today - ramadan) / (1000 * 60 * 60 * 24))

// alert(days + " days have passed since 1st Ramadan, 2015")
// Question10
// var today = new Date()
// var start = new Date("January 1, 2015")

// var seconds = (today - start) / 1000

// document.write("On reference date " + today + ",<br>")
// document.write(seconds + " seconds had passed since beginning of 2015")
// Question11
// var today = new Date()
// var hours = today.getHours()

// today.setHours(hours - 1)

// document.write("current date: " + today + "<br>")
// document.write("1 hour ago, it was " + today)
// Question12
// var today = new Date()
// var year = today.getFullYear()

// today.setFullYear(year - 100)

// alert(today)
// Question13
// var age = prompt("Enter your age")
// var year = new Date().getFullYear()
// var birthYear = year - age

// document.write("Your age is " + age + "<br>")
// document.write("Your birth year is " + birthYear)
// Question14
// var customerName = "ABC Customer"
// var month = "February"
// var units = 410
// var charges = 16
// var netAmount = units * charges
// var latePayment = 350
// var grossAmount = netAmount + latePayment

// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <b>" + customerName + "</b><br>")
// document.write("Month: <b>" + month + "</b><br>")
// document.write("Number of units: <b>" + units + "</b><br>")
// document.write("Charges per unit: <b>" + charges + "</b><br><br>")

// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>")
// document.write("Late payment surcharge: <b>" + latePayment + "</b><br>")
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>")