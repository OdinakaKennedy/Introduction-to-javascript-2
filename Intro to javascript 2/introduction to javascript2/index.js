
var num1 = parseFloat( prompt("Enter a number: "));
var num2 = parseFloat( prompt("Enter another number: "));
var operator = ( prompt("Enter operator(+, -, *, /): "));
let result;

if (operator == "+") {
    result = num1 + num2;
}else if(operator == "-"){
    result = num1 - num2;
}else if (operator == "*"){
    result = num1 * num2;
}else if (operator == "/"){
    result = num1 / num2;
}
alert(result);



