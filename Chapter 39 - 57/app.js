//Chapter 38 - 42
//1
function power(a, b) {
    return Math.pow(a, b)
}
console.log(power(2, 3))

//2
function isLeapYear(year) {
    var leap = false;
    if (!(year % 4)) {
        if (!(year % 100)) {
            if (!(year % 400)) {
                leap = true;
            }
        } else {
            leap = true;
        }
    }
    return leap;
}

var year = +prompt("Enter a year: ");
if (isLeapYear(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}

//3
function valueOfS(a, b, c) {
    return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
    var S = valueOfS(a, b, c);
    return S * (S - a) * (S - b) * (S - c);
}

console.log(areaOfTriangle(3, 4, 5));

//4
function average(firstMarks, secondMarks, thirdMarks) {
    return (firstMarks + secondMarks + thirdMarks) / 3;
}

function percentage(firstMarks, secondMarks, thirdMarks) {
    return ((firstMarks + secondMarks + thirdMarks) / 300) * 100;
}

function mainFunction() {
    marks1 = 78, marks2 = 89, marks3 = 72;
    console.log("Average: " + average(marks1, marks2, marks3))
    console.log("Percentage: " + percentage(marks1, marks2, marks3));
}

mainFunction();

//5
function indexOfCh(str, ch) { // returns first occurence of a character in string
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            return i;
        }
    }
    return -1;
}

console.log(indexOfCh("Hello", 'l')); // -1 if not found

//6
function deleteVowels(str) {
    var returnStr = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            continue;
        } else {
            returnStr += str[i];
        }
    }
    return returnStr;
}

str = "The quick brown fox jumped";
str = deleteVowels(str);
console.log(str);

//7
function countTwoVowels(str) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length - 1; i++) {
        var substr = str.slice(i, i + 2);
        switch (substr) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                // console.log(substr, count);
                break;
            default:
        }
    }
    return count;
}

console.log(countTwoVowels("Pleases read this application and give me gratuity"));

//8
function KmToMeters(km) {
    var meters = km * 1000;
    console.log("Meters: ", meters);
}

function KmToFeets(km) {
    var feets = km * 3281;
    console.log("Feets: ", feets);
}

function KmToInches(km) {
    var inches = km * 39370;
    console.log("Inches: ", inches);
}

function KmToCentimeters(km) {
    var cm = km * 100000;
    console.log("Centimeters: ", cm);
}

var kiloMeters = 20;
console.log("Kilometers: ", kiloMeters);
KmToMeters(kiloMeters);
KmToFeets(kiloMeters);
KmToInches(kiloMeters);
KmToCentimeters(kiloMeters);

//9
function overTimePay(hours) {
    if (hours <= 40) {
        return 0;
    }
    hours -= 40;
    return hours * 12;
}

console.log(overTimePay(45));

//10
function currencyNotes(amount) {
    var ten = (amount % 50) / 10;
    amount -= 10 * ten;
    var fifty = (amount % 100) / 50;
    amount -= 50 * fifty;
    var hundred = amount / 100;
    alert("You will have " + hundred + " hundred notes, " + fifty + " fifty notes and " + ten + " ten notes");
}

var amount = +prompt("Enter amount to withdraw: ");
currencyNotes(amount);


//Chapter 43 - 48
//Uncomment HTML and CSS

//1
function alertbox() {
    alert("You clicked on the link !");
}

//2
function thankYou() {
    alert("Thanks for purchasing a phone from us!")
}

//3
function deleteRow(rowNo) {
    var row = document.getElementById(rowNo);
    row.remove();
}

//4
function changeImage(id, source) {
    var img = document.getElementById(id);
    img.src = source;
}

//5
function incrementCounter() {
    var curr = document.getElementById('counter');
    value = Number(curr.innerHTML)
    curr.innerHTML = value + 1
}

function decrementCounter() {
    var curr = document.getElementById('counter');
    value = Number(curr.innerHTML)
    curr.innerHTML = value - 1
}


//Chapter 49 - 52
//Uncomment HTML and CSS

//1
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var password = document.getElementById('password');

function getData() {
    document.write("First Name : " + fname.value + "<br>");
    document.write("Last Name : " + lname.value + "<br>");
    document.write("Email : " + email.value + "<br>");
}

//2
function readMore() {
    var text = document.getElementById('text')
    var paragraph = document.getElementById('paragraph')
    paragraph.innerHTML = text.innerHTML;
}

//3
function deleteRow(rowNo) {
    var row = document.getElementById(rowNo);
    row.remove();
}

function editRow(rowNo) {
    var row = document.getElementById(rowNo);
    var td = row.getElementsByTagName('td');
    td[1].innerHTML = prompt("Enter new Name: ", td[1].innerHTML);
    td[2].innerHTML = prompt("Enter new class: ", td[2].innerHTML);
}


//Chapter 52 - 57
//Word file corrupted