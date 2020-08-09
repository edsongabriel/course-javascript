function caixaE(valorSaque) {
    let cont100 = 0;
    let cont50 = 0;
    let cont10 = 0
    let cont5 = 0;
    let cont1 = 0;
    let valorNota = calculaValorDaNota(valorSaque);

    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                cont100++;
                valorSaque -= 100;
                break;
            case 50:
                cont50++;
                valorSaque -= 50;
                break;
            case 10:
                cont10++;
                valorSaque -= 10;
                break;
            case 5:
                cont5++;
                valorSaque -= 5;
                break;
            case 1:
                cont1++;
                valorSaque -= 1;
                break;
        }
        valorNota = calculaValorDaNota(valorSaque);
    }
    return elaborarResultado(cont100, cont50, cont10, cont5, cont1);
}

function calculaValorDaNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100;
    } else if (valorSaque >= 50) {
        return 50;
    } else if (valorSaque >= 10) {
        return 10;
    } else if (valorSaque >= 5) {
        return 5;
    } else {
        return 1;
    }
}

function elaborarResultado(cont100, cont50, cont10, cont5, cont1){
    let resultado = '';
    
    if(cont100 > 0){
        resultado += `${cont100} nota(s) de R$100. `;
    }
    if(cont50 > 0){
        resultado += `${cont50} nota(s) de R$50. `;
    }
    if(cont10 > 0){
        resultado += `${cont10} nota(s) de R$10. `;
    }
    if(cont5 > 0){
        resultado += `${cont5} nota(s) de R$5. `;
    }
    if(cont1 > 0){
        resultado += `${cont1} nota(s) de R$1. `
    }
    return resultado;
}
console.log(caixaE(84));