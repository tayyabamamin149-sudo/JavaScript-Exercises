// chapter 21to25

// Question1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// document.write("Welcome To Website  " + fullName + "!");

// Question2
// var mobileModel = prompt("Enter your favorite mobile phone model:");

// document.write("My favorite phone is : " + mobileModel + "<br>");
// document.write("Length of string: " + mobileModel.length);

// Question3
// var word = "Pakistani";

// var index = word.indexOf("n");

// document.write("string: " + word + "<br>");
// document.write("Index of 'n': " + index);

// Question4
// var word = "Hello World";

// var index = word.lastIndexOf("l");

// document.write("string: " + word + "<br>");
// document.write("Last index of 'l': " + index);

// Question5
// var word = "Pakistani";

// var character = word.charAt(3);

//  document.write("string: " + word + "<br>");
// document.write("Character at 3rd index: " + character);

// Question6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// document.write("Hello " + fullName + "!");

// Question7
// var word = "Hyderabad";

// var result = word.replace("Hyder", "Islam");
// document.write("city: " + word + "<br>");
// document.write("After Replacement :" + result);

// Question8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var result = message.replace(/and/g, "&");

// document.write(result);

// Question9
// var value = "472";

// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof value + "<br><br>");

// var number = Number(value);

// document.write("Value: " + number + "<br>");
// document.write("Type: " + typeof number);

// Question10
// var userInput = prompt("Enter your text:");

// var result = userInput.toUpperCase();
// document.write("userInput : " + userInput + "<br>")
// document.write("Upper Case : " + result);

// Question11
// var userInput = prompt("Enter your text:");
// var result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("userInput : " + userInput + "<br>")
// document.write("Title Case : " + result);

// Question12
// var num = 35.36;
// var result = 3536
// var result = num.toString().replace(".", "");
// document.write("Number :" + num + "<br>")
// document.write("Result : " + result );

// Question13
// var username = prompt("Enter your username:");

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         alert("Please enter a valid username");
//         break;
//     }
// }

// Question14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// var item = userInput.toLowerCase();

// var index = A.indexOf(item);

// if (index !== -1) {
//     document.write(item + " is <b> available </b> at index" + index + " in our bakery");
// } else {
//    document.write("We are sorry. " + item + " is <b> not available</b> in our bakery");
// }

// Question15
// var password = prompt("Enter your password:");


//     document.write("Entered password: " + password + "<br>");
//     document.write("Password can not begin with a number. " + "<br>")
//     document.write("Password enter a valid password.");

// Question16
// var university = "University of Karachi";

// var arr = university.split("");

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }

// Question17
// var userInput = "Pakistan";

// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write("User Input : " + userInput + "<br>")
// document.write("Last character of input: " + lastCharacter);

// Question18
// var text = "The quick brown fox jumps over the lazy dog"
// document.write("Text : " + text + "<br>")
// document.write("There are 2 occurrence(s) of word 'the' ")
