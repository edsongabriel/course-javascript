const weight1 = 1.0;
const weight2 = Number('2.0');

console.log(weight1, weight2);
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));
/*
*Number.isInteger RETORNA TRUE OU FALSE PARA SE A CONSTANTE É DO TIPO INTEIRO.
*/

/*
*OBSERVE QUE NESSES DOIS CASOS, AS VARIÁVEIS SÃO INTEIRAS.
*CASO FOSSE CALCULADO weight1 % 1 OU weight2 % 1, OS VALORES DO RESTO SERIA === 0.
*/

const evaluation1 = 9.871;
const evaluation2 = 6.871;
console.log(evaluation1, evaluation2);
console.log(Number.isInteger(evaluation1), Number.isInteger(evaluation2));
/*
*OBSERVE QUE NESTE CASO AS CONSTANTES NÃO SÃO INTEIRAS. 
*/

const total = evaluation1 * weight1 + evaluation2 * weight2;
const mean = total / (weight1 + weight2);
console.log(mean.toFixed(2));//FIXA AS CASAS DECIMAIS EM 2.
console.log(Number.isInteger(mean));
console.log(mean.toString(2));//TRANSFOMRA EM BINÁRIO.