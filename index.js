"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondtStr = (0, readline_sync_1.question)("Enter second number:\n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondtStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondtStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvaild input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
