

var userName = window.prompt("Please enter your name.");
var greetingParagraph = document.getElementById("greeting");


greetingParagraph.innerHTML += "," + userName;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += num1;
operand2.innerHTML += num2;

var sum = num1 + num2;
var subtract = num1 - num2;
var product = num1 * num2;
var divide = num1 / num2;
var mod = num1 % num2;

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The substraction result of " + num1 + " and " + num2 + " is " + subtract;
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product;
document.getElementById("division").innerHTML = "The division of " + num1 + " and " + num2 + " is " + divide;
document.getElementById("modulus").innerHTML = "The modulus of " + num1 + " and " + num2 + " is " + mod;