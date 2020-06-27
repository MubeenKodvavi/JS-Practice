//Chapter 21 to 25
//1
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + lastName;
alert("Hello " + fullName);
//2
var favPhone = prompt("Enter your favourite phone model:");
document.write("My favourite phone is " + favPhone + "<br>");
document.write("Length of string: " + favPhone.length + "<br>");
//3
var str = "Pakistani";
document.write("String: " + str + "<br>");
var index = str.indexOf("n");
document.write("Index of n: " + index);
//4
var str = "Hello World";
document.write("String: " + str + "<br>");
var index = str.lastIndexOf("l");
document.write("Last index of l: " + index);
//5
var str = "Pakistani";
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + str[3]);
//6
var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var fullName = firstName.concat(" " + lastName);
alert("Hello " + fullName);
//7
var str = "Hyderabad";
document.write("City: " + str + "<br>");
str = str.replace("Hyder", "Islam");
document.write("After replacement: " + str);
//8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("City: " + message + "<br>");
message = message.replace(/and/g, "&");
document.write("City: " + message + "<br>");
//9
var val = "472";
document.write("Value: " + val + "<br>");
document.write("Type: " + typeof(val) + "<br>");
var val = Number(val);
document.write("Value: " + val + "<br>");
document.write("Type: " + typeof(val) + "<br>");
//10
input = prompt("Input");
document.write("User input: " + input + "<br>");
document.write("Upper case: " + input.toUpperCase());
//11
input = prompt("Input");
document.write("User input: " + input + "<br>");
document.write("Upper case: " + input.charAt(0).toUpperCase() + input.substr(1).toLowerCase());
//12
var num = 35.36;
document.write("Number: " + num + "<br>");
var result = num.toString();
dotIndex = result.indexOf(".");
result = result.slice(0, dotIndex) + result.slice(dotIndex + 1);
document.write("Result: " + result + "<br>");
//13
var check = false;
var check = false;
while (check === false) {
    var username = prompt("Enter username");
    check = true;
    for (var j = 0; j < username.length; j++) {
        if (username[j] === '@' || username[j] === ',' || username[j] === '.' || username[j] === '!') {
            check = false;
        }
    }
    if (check === false)
        alert("Please enter a valid username");
}
//14
A = ["cake", "apple pie", "cookie", "chips", "patties"];
input = prompt("Welcome to ABC Bakery. What do you want to order, Sir / Ma'am?");
var available = false;
for (var i = 0; i < A.length; i++) {
    if (input.toLowerCase() === A[i]) {
        available = true;
        break;
    }
}
if (available === true) {
    document.write(input + " is available at index " + i + " in our bakery");
} else {
    document.write("We are sorry. " + input + " is not available in our bakery.");
}
//15
check = false;
while (check === false) {
    password = prompt("Enter a password");
    check = true;
    if (password[0] >= '0' && password[0] <= '9') {
        check = false;
    }
    for (var i = 0; i < password.length; i++) {
        if (!((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z') || (password[i] >= '0' && password[i] <= '9'))) {
            check = false;
            break;
        }
    }
    if (password.length < 6) {
        check = false;
    }
    if (check === false)
        alert("Please enter a valid password");
}
//16
str = "University of Karachi";
var arr = str.split("");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>")
}
//17
var input = prompt("Input:");
document.write("User input: " + input + "<br>");
document.write("last character of input: " + input[input.length - 1]);
//18
var str = "the quick brown fox jumps over the lazy dog";
document.write("Text: " + str + "<br>")
var count = (str.match(/the/g) || []).length;
document.write("There are " + count + "occurence(s) of the word 'the'");


//Chapter 26 to 30
//1
var input = +prompt("Enter a floating point number");
document.write("Number: " + input + "<br>");
document.write("Round off value: " + Math.round(input) + "<br>");
document.write("Floor value: " + Math.floor(input) + "<br>");
document.write("Ceil value: " + Math.ceil(input) + "<br>");
//2
var input = +prompt("Enter a negative floating point number");
document.write("Number: " + input + "<br>");
document.write("Round off value: " + Math.round(input) + "<br>");
document.write("Floor value: " + Math.floor(input) + "<br>");
document.write("Ceil value: " + Math.ceil(input) + "<br>");
//3
var input = +prompt("Enter a number to show absolute value: ");
document.write("The absolute value of " + input + " is " + Math.abs(input));
//4
document.write("Random dice value: " + Math.floor(Math.random() * 6));
//5
var coinValue = Math.floor(Math.random() * 2);
if (coinValue) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}
//6
document.write("Random number from 1 to 100 is: " + Math.ceil(Math.random() * 100));
//7
var weight = prompt("Enter your weight in kilograms");
var w = weight.split("k");
document.write("The weight of user is " + w[0] + " kilograms");
//8
var secretNumber = Math.ceil(Math.random() * 10);
var guess = +prompt("Enter a number from 1 to 10:");
if (guess === secretNumber) {
    alert("Congratulations");
}


//Chapter 31 to 34
//1
var date = new Date();
document.write(date);
//2
var date = new Date();
mList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write("Current month: " + mList[date.getMonth()]);
//3
var date = new Date();
mList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
document.write("Today is " + date.getDay());
//4
var date = new Date();
var day = date.getDay();
if (day == 6 || day == 0)
    document.write("Today is fun day");
//5
var date = new Date();
tdate = date.getDate();
if (tdate < 15)
    document.write("First fifteen days of the month");
else
    document.write("Last days of the month");
//6
var date = new Date();
var msToday = date.getTime();
var minutesToday = date.getTime() / (1000 * 60);
document.write("Current date: " + date + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + msToday + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + minutesToday + "<br>");
//7
var date = new Date();
var hour = date.getHours();
if (hour < 12)
    document.write("It's AM");
else
    document.write("It's PM");
//8
var date = new Date("Dec 31, 2020");
document.write(date);
//9
var Ramadan15 = new Date("Jun 18, 2015");
var today = new Date();
var msRamadan15 = Ramadan15.getTime();
var mstoday = today.getTime();
var dDiff = Math.floor((mstoday - msRamadan15) / (1000 * 60 * 60 * 24));
document.write(dDiff + " days have passed since 1st Ramadan, 2015" + Ramadan15);
//10
msdiff = new Date().getTime() - new Date("January 1 2015").getTime();
secondsPassed = Math.floor(msdiff / 1000);
document.write(new Date() + "<br>");
document.write(secondsPassed + " seconds had passed since the beginning of 2015");
//11
var date = new Date();
document.write("Current date: " + date + "<br>");
var hourAgo = date.getHours() - 1;
date.setHours(hourAgo);
document.write("1 hour ago, it was " + date + "<br>");
//12
var date = new Date();
var date100 = new Date();
document.write("Current date: " + date + "<br>");
var yearsAgo = date.getFullYear() - 100;
date100.setFullYear(yearsAgo);
alert("Current date: " + date + "\n100 years ago, it was " + date100);
//13
var age = +prompt("Enter your age:  ");
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + (new Date().getFullYear() - age) + "<br>");
//14
var customerName = "Mubeen Kodvavi";
mList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = mList[new Date().getMonth()];
var noOfUnits = 410;
var unitCharge = 16;
var netPayable = noOfUnits * unitCharge;
var lateSurcharge = 350;
var grossPayable = netPayable + lateSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <strong>" + customerName + "</strong><br>");
document.write("Month: <strong>" + currentMonth + "</strong><br>");
document.write("No of units: <strong>" + noOfUnits + "</strong><br>");
document.write("Charges per unit: <strong>" + unitCharge + "<br>" + "</strong><br>");
document.write("Net Amount Payable (within Due Date): <strong>" + netPayable + "</strong><br>");
document.write("Late Payment Surcharge: <strong>" + lateSurcharge + "</strong><br>");
document.write("Gross Amount Payable (after Due Date): <strong>" + grossPayable + "</strong><br>");