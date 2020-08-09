//FUNÇÃO SEM RETORNO:
function printSum(portion1, portion2) {
    console.log(portion1+portion2);
}
printSum(2, 3);//IMPRIME 5.
printSum(2);//NaN.
printSum(2, 10, 3, 4);//IMPRIME A SOMA DOS DOIS PRIMEIROS E IGNORA O RESTANTE.
printSum();//NaN.

//FUNÇÃO COM RETORNO:
function sum(portion1, portion2 = 1) {
    //portion2 = 1, OU SEJA, 1 É O VALOR DEFAULT.
    return portion1 + portion2;
}
console.log(sum(2, 3));
console.log(2);//IMPRIME 3, PORQUE portion2 VALE 1.