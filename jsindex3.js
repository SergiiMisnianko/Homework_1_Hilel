alert("Ok, now you need to enter 3 numbers, and we will compare them with each other!");
let firstInput = prompt("Could you please enter first number?");
let secondInput = prompt("Could you please enter second number?");
let thirdInput = prompt("Could you please enter third number?");
let firstNumber =  parseInt(firstInput);
let secondNumber =  parseInt(secondInput);
let thirdNumber =  parseInt(thirdInput);
let result = ((firstNumber+secondNumber+thirdNumber)/3);
alert("Your numbers: " + firstNumber + ", " + secondNumber + ", " + thirdNumber + ". " + "Their arithmetic mean: " + result + ".");