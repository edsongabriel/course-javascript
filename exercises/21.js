function calculaValorDoPlano(idade) {
    let valor = 0;

    if (idade > 60) {
        valor = 230;
    } else if (idade <= 60 && idade > 30) {
        valor = 195;
    } else if (idade <= 30 && idade >= 10) {
        valor = 150;
    } else if (idade < 10) {
        valor = 180;
    }
    return valor;
}
console.log(calculaValorDoPlano(30));
