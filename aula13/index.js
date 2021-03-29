let umaString ="Um \"texto\" ";
console.log(umaString);

umaString ="Um \\texto ";
console.log(umaString);

umaString ="Um texto";//A string inicia com 0 e segue 0123456789
console.log(umaString[4]);

umaString ="Um texto ";
console.log(umaString + 'em um lindo dia');
console.log(`${umaString}em um lindo dia`);

umaString ="Um texto ";
console.log(umaString.indexOf('texto'));//Define em qual espaço inicia a palavra

umaString ="Um texto";
console.log(umaString.length);//Define o tamanho da string iniciando de 1

umaString ="Um texto ";
console.log(umaString.toUpperCase());//Maiúscula em tudo
console.log(umaString.toLowerCase());//Minúsculo