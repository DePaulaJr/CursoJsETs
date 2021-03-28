/**
 * Aritméticos 
 * + Adição / Concatenação (-/*)
 *  ** Potenciação
 *  % Resto da divisão
 * 
 * Precedência () ** * / % + -
 */

let contador = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);

contador = 2;
contador *= 2;
console.log(contador)

//NaN - Not a number / parseint (inteiro) / parseFloat(decimais)
const num1 = 10;
const num2 = parseInt('5');
const num3 = parseFloat('5.2')
console.log(num2 + num3);
console.log(num1 + num2);
console.log(typeof num2);
