const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2021 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg.')

console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
//Template Strings
console.log(`${nome} nasceu em ${anoNascimento}.`);
