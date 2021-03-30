//IEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2;//.8
num1 += num2;//.9
num1 += num2;//1.0

num1 = num1.toFixed(2);
num1 = parseFloat(num1);//Ou Number(num1)

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//console.log(typeof num1);
//num1 = num1.toString();
//console.log(typeof num1);
//console.log(num1.toString(2));
//console.log(num1.toFixed(2));
//console.log(Number.isInteger(num1));
//let temp = num1 * '5'; não fazer conta com string
//console.log(Number.isNaN(temp));
//console.log(temp);