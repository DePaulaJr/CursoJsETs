//const pessoa1 = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 25,
//};
//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);
//console.log(pessoa1.idade);
//function criaPessoa (nome, sobrenome, idade) {
//    return { nome, sobrenome, idade };//Recebe a mesma variável
//}

//const pessoa1 = criaPessoa('Luiz', 'Augusto', 25)
//const pessoa2 = criaPessoa('Jenifer', 'Pires', 33)
//const pessoa3 = criaPessoa('Luca', 'Ruas', 41)
//const pessoa4 = criaPessoa('Ana', 'Borg', 13)
//const pessoa5 = criaPessoa('Pedro', 'Ken', 81)

//console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade} anos`);
    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();