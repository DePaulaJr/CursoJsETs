function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));
console.log(soma('Cristiano', '  Ronaldo'));
console.log(soma(2));

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

const izi = n => n ** 0.5;
console.log(izi(3));