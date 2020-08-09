const printResult = function (grade) {
    if (grade >= 7) {
        console.log('Aprovado com', grade);
    } else {
        console.log('Reprovado com', grade);
    }
}
printResult('7'); // WARNIG
printResult(6);
printResult(8);
// POR CURIOSIDADE, COMO APENAS UMA SENTENÇA ESTÁ PARA CADA COMANDO, ENTÃO AS {} SÃO DESNECESSÁRIAS. PORÉM NÃO É AINDICADO.