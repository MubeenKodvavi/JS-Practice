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