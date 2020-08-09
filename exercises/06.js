const jurosSimples = (capitalInicial, txJuros, tempo) => {
    let juros = capitalInicial * txJuros * tempo;
    return capitalInicial + juros;
}

const jurosCompostos = (capitalInicial, txJuros, tempo) => {
    let montante = capitalInicial * Math.pow((1 + txJuros), tempo);
    return montante.toFixed(2).toString().replace(".", ",");
}

console.log(jurosSimples(1000, 0.025, 1));
console.log(jurosCompostos(2000, 0.04, 4));