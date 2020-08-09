var a = 3;//significa que a variável "a" recebe 3.

/*
* "var" é o identificador de variável;
* "=" significa: atribuição;
* "3" é o dado que está sendo armazenado por "a";
*/

let b = 4;

console.log(a, b);
/*CASO FOSSE ESCRITO:
let b = 9, SERIA GERADO UM ERRO.
POIS QUANDO É UTILIZADO O "let", NÃO É PERMITIDO FAZER OUTRA DECLARAÇÃO COM MESMO NOME. O QUE NÃO ACONTECE COM O "var".
*/

var a = 300;
b = 400;
console.log(a, b);//VEJA QUE "b" NÃO FOI DECLARADA NOVAMENTE.

const c = 5;//NESTE CASO, ESTÁ SENDO DECLARADA A CONSTANTE C, QUE NÃO PODE TER SEU VALOR ALTERADO, POSTERIORMENTE.
console.log(c);