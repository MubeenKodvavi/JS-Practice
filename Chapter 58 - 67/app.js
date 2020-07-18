// Chapter 59 - 67

// 1
// i
var mContent = document.getElementById('main-content');
console.log(mContent);
// ii
console.log(mContent.childNodes);
// iii
var renderClass = document.getElementsByClassName("render");
for (var i = 0; i < renderClass.length; i++)
    console.log(renderClass[i].innerHTML);
// iv
var fName = document.getElementById('first-name');
fName.value = "Mubeen";
// v
var lName = document.getElementById('last-name');
var eMail = document.getElementById('email');
lName.value = "Kodvavi";
eMail.value = "mubeen.kodvavi@gmail.com"

// 2
// i
var fContent = document.getElementById('form-content');
console.log(fContent.nodeType);
//ii
var lNameE = document.getElementById('lastName');
console.log(lNameE.nodeType);
console.log(lNameE.childNodes[0].nodeType);
//iii
lNameE.childNodes[0].nodeValue = "Last Name: Kodvavi";
//iv
var mContent = document.getElementById('main-content');
console.log(mContent.firstChild);
console.log(mContent.lastChild);
//v
console.log(lNameE.previousSibling);
console.log(lNameE.nextSibling);
//v
var emailE = document.getElementById('email')
console.log(emailE.parentNode)
console.log(emailE.nodeType)