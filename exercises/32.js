const numeros = [1, 2, 3, 4, 5];

function calculaMedia(numeros) {
    let qtdNumeros = 0;
    let soma = 0;
    let mediaFinal;
    for (let i = 0; i < numeros.length; i++) {
        qtdNumeros++;
        soma += numeros[i];
    }
    mediaFinal = soma / qtdNumeros;
    console.log(`Média aritmética: ${mediaFinal}.`);
}

calculaMedia(numeros);