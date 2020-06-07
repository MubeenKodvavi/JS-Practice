//Chapter 1:
//1
alert("Hello visitor");

//2
alert("Error! Please enter a valid password");

//3
alert("Welcome to JS Land...\nHappy Coding!");

//4
alert("Welcome to JS");
alert("Happy Coding!");

//5
//SS attached


//Chapter 2:
//1
var username;

//2
var myName = "Mubeen Kodvavi";

//3
var message;
message = "Hello World";
alert(message);

//4
var name = "Jhone doe";
var age = 15;
var profession = "Certified Mobile Application Development";
alert(name);
alert(15 + " years old");
alert(profession);

//5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

//6
var email = "mubeen.kodvavi@gmail.com";
alert("My email address is " + email);

//7
var book = "A smarter way to learn JavaScript.";
alert("I am trying to learn from the Book " + book);

//8
document.write("Yah! I can write HTML content through JavaScript");

//9
var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


//Chapter 3:
//1
var age = 22;
alert("I am " + age + " years old");

//2
var n = 22;
alert("You have visited the site " + n + " times");

//3
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof(birthYear) + "<br>");

//4
var visitorName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write("<strong>" + visitorName + "</strong> ordered <strong>" + quantity + " " + productTitle + "</strong>(s) on XYZ Clothing Store");

//Chapter 4
//1
var var1, var2, var3;

//2
//Legal
var name;
var birthYear;
var $name;
var my_name;
var student321;

//Illegal
// var my name;
// var if;
// var 321 student;
// var !name;
// var for;

//3
document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br>");
document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name." + "<br>");
document.write(" Variable names are case sensitive." + "<br>");
document.write("Variable names should not be JS keywords." + "<br>");

//Chapter 5:
//1
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c);

//2
var a = 15;
var b = 3;
var c = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + c + "<br>");
var d = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + d + "<br>");
var e = a / b;
document.write("Division of " + a + " and " + b + " is " + e + "<br>");
var f = a % b;
document.write("Modulus of " + a + " and " + b + " is " + f + "<br>");

//3
var num;
document.write("Value after variable decalration is " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
num %= 3;
document.write("The remainder after dividing is: " + num + "<br>");

//4
var ticketCost = 600;
var quantity = 5;
var price = quantity * ticketCost;
document.write("Total cost to buy " + quantity + " tickets is " + price + "PKR<br>");

//5
var table = 4;
document.write("Table of " + table + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>");
}

//6
var cel = 35;
var fer = (cel * 9 / 5) + 32;
document.write(cel + "&deg;C is " + fer + "&deg;F<br>");
fer = 70;
cel = (fer - 32) * 5 / 9;
document.write(fer + "&deg;F is " + cel + "&deg;C<br>");

//7
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
var totalPrice = 650 * 3 + 100 * 7;
document.write("<br>Total cost of your order is " + totalPrice + "</p>");

//8
var totalMarks = 980;
var obtainedMarks = 804;
document.write("<h1>Mark Sheet</h1>");
document.write("<p>Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
var percent = obtainedMarks / totalMarks * 100;
document.write("Percentage: " + percent + "</p>");

//9
var dollars = 10;
var riyals = 25;
document.write("<h1>Currency in PKR</h1>");
var rupees = dollars * 104.8 + riyals * 28;
document.write("<p>Total currency in PKR: " + rupees + "</p>");

//10
var num = 20;
var result = (num + 5) * 10 / 2;
document.write("Result is: " + result);

//11
var currYear = 2020;
var birthYear = 1998;
document.write("<h1>Age Calculator</h1>");
document.write("Current year: " + currYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>")
var age1 = 2020 - 1998;
var age2 = 2020 - 1998 - 1;
document.write("Age: " + age1 + " or " + age2 + " years old");

//12
var radius = 20;
var pi = 3.142;
document.write("<h1>The Geometrizer</h1>")
document.write("<p>Radius of Circle: " + radius + "<br>");
var circumference = 2 * pi * radius;
document.write("The circumference is: " + circumference + "<br>");
var area = pi * radius * radius;
document.write("The area is: " + area + "<br></p>");

//13
var favSnack = "potato chips";
var age = 22;
var maxAge = 65;
var amountPerYear = 2;
document.write("<h1>The LifeTime Supply Calculator</h1>");
document.write("<p>Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + age + "<br>");
document.write("Estimated maximum age: " + maxAge + "<br>");
document.write("Amount of snacks per year: " + amountPerYear + "<br>");
var totalSnacks = amountPerYear * (maxAge - age);
document.write("You will need " + totalSnacks + " " + favSnack + " to last you until the ripe old age of  " + maxAge + "<br></p>");


//Chapter 6:
//1
var a = +prompt("Enter number: ", "number");
document.write("The value of a is: " + a + "<br>");
document.write("-----------------------------------------<br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

//2
var a = 2;
var b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
//            1     0     1     1     = 3
document.write("result is " + result + "<br>");

//3
var name = prompt("Enter your name", "name");
alert("Hello " + name + ". Have a nice day!");

//4 Question not in pdf

//5
var number = +prompt("Enter number", "5");
document.write("Table of " + number + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + number * i + "<br>");
}

//6
var subjects = [];
var totalMarks = 100;
var obtainedMarks = [];
var percentage = [];
var totalObtainedMarks = 0;

for (var i = 0; i < 3; i++) {
    subjects[i] = prompt("Enter name of subject " + i + 1 + ": ", "Subject");
    obtainedMarks[i] = +prompt("Enter marks of subject " + i + 1 + ": ", "0");
    percentage[i] = (obtainedMarks[i] / totalMarks) * 100;
    totalObtainedMarks += obtainedMarks[i];
}

var totalPercentage = (totalObtainedMarks / 300) * 100;

document.write("<table>");

document.write("<tr>");
document.write("<th>" + "Subject" + "</th>");
document.write("<th>" + "Total Marks" + "</th>");
document.write("<th>" + "Obtained Marks" + "</th>");
document.write("<th>" + "Percentage" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjects[0] + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + obtainedMarks[0] + "</td>");
document.write("<td>" + percentage[0] + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjects[1] + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + obtainedMarks[1] + "</td>");
document.write("<td>" + percentage[1] + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjects[2] + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + obtainedMarks[2] + "</td>");
document.write("<td>" + percentage[2] + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>" + 300 + "</th>");
document.write("<th>" + totalObtainedMarks + "</th>");
document.write("<th>" + totalPercentage + "%" + "</th>");
document.write("</tr>");

document.write("</table>");


//Chapter 9 - 11
//1
var city = prompt("Enter city name");
if (city === "Karachi") {
    alert("Welcome to the city of lights");
}

//2
var gender = prompt("Enter gender");
if (gender == "male") {
    alert("Good Morning Sir");
} else if (gender == "female") {
    alert("Good Morning Ma/'am");
}

//3
var signal = prompt("Input color of road traffic signal");
if (signal == "Red") {
    alert("Must stop");
} else if (signal == "Yellow") {
    alert("Ready to move");
} else if (signal == "Green") {
    alert("Move now")
}

//4
var fuel = +prompt("Input remaining fuel in litres:");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//5
//a
var a = 4;
if (++a === 5) { //True
    alert("given condition for variable a is true");
}

//b
var b = 82;
if (b++ === 83) { //False
    alert("given condition for variable b is true");
}

//c
var c = 12;
if (c++ === 13) { //False
    alert("condition 1 is true");
}
if (c === 13) { //True
    alert("condition 2 is true");
}
if (++c < 14) { //False
    alert("condition 3 is true");
}
if (c === 14) { //True
    alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { //True
    alert("The cost equals");
}

//e
if (true) { // True
    alert("True");
}
if (false) { //False
    alert("False");
}

//f
if ("car" < "cat") { //True
    alert("car is smaller than cat");
}

//6
var obtainedMarks = [];
var totalObtainedMarks = 0;
for (var i = 0; i < 3; i++) {
    obtainedMarks[i] = +prompt("Enter marks for subject " + (i + 1) + ": ");
    totalObtainedMarks += obtainedMarks[i];
}
var totalMarks = +prompt("Enter total marks");
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks Obtained " + totalObtainedMarks + "<br>");
var percentage = (totalObtainedMarks / totalMarks) * 100;
document.write("Percentage " + percentage + "%<br>");
var grade, remarks;
if (percentage <= 100 && percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage >= 0) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

//7
var secret = 6;
var guess = +prompt("Guess the secret number from 1 to 10");
if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess === secret + 1 || guess === secret - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong answer");
}

//8
var number = +prompt("Enter number to check: ");
if (number % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

//9
var number = +prompt("Enter number to check: ");
if (number % 2 === 0) {
    alert("Number is even");
} else {
    alert("Number is odd");
}

//10
var T = +prompt("Enter temprature");
if (T > 40) {
    alert("It is too hot outside");
} else if (T > 30) {
    alert("The weather today is normal");
} else if (T > 20) {
    alert("Today's weather is cool");
} else if (T > 10) {
    alert("OMG! Today's weather is so Cool");
}

//11
var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var operator = prompt("Enter an operator: ");
var result = 0;
if (operator == "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else if (operator === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operator");
}
alert("Result = " + result);