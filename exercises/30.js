const pegaNumero = () => {
    const numeros = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];
    numeros.sort((a, b) => a < b ? 1 : -1);
    console.log(`Maior: ${numeros[0]}. Menor: ${numeros[numeros.length-1]}`);
}
pegaNumero();