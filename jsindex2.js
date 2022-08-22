alert("Ok, now you need to enter 2 numbers, and we will compare them with each other!");
let firstInput = prompt("Could you please enter first number?");
let secondInput = prompt("Could you please enter second number?");
let firstNumber =  parseInt(firstInput);
let secondNumber =  parseInt(secondInput);
if (firstNumber>secondNumber) {alert("Comparison result: " + firstNumber + " > " + secondNumber)}
else if (firstNumber<secondNumber) {alert("Comparison result: " + firstNumber + " < " + secondNumber)}
else {alert("Comparison result: " + firstNumber + " = " + secondNumber)}



// Если в конце ставлю ";" почему-то пишет, что это лишнее. Хотя все работает.

// Не понял, как можно было обойтись без if ? Очень уж оно просится... 