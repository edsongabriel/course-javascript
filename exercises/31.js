// FORMA 1
// let negativos = 0;
// const numeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];
// numeros.forEach(contadora);

// function contadora(numero) {
//     if (numero < 0) {
//         negativos++;
//     }
// }
// console.log(`${negativos} números negativos.`);

// FORMA 2
function contaNegativos(vetor) {
    let negativos = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }
    console.log(`${negativos} número(s) negativos.`);
}
const numeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];
contaNegativos(numeros);