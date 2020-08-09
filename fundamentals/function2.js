//ARMAZENADO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL
const printSum = function (portion1, portion2) {
    console.log(portion1 + portion2);
}
printSum(2, 3);

//ARMAZENADO UMA FUNÇÃO ARROW EM UMA VARIÁVEL
const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 3));

//RETORNO IMPLÍCITO
const subtracion = (a, b) => a - b;
console.log(subtracion(2, 3));
