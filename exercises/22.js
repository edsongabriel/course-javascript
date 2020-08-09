const calcularValor = (mes, valor) => {
    if (mes > 0 && mes < 13) {
        let atraso = mes - 1;
        let montante = (valor * (1 + 0.05) ** atraso).toFixed(2);
        return montante;
    } else {
        return 'Mês inválido';
    }
}

 console.log(calcularValor(4, 100));