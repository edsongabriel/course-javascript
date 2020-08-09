function classificaAluno(nota) {
    let notaArredondada = arredondarNota(nota);
    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota ${notaArredondada}`);
    } else {
        console.log(`Reprovado com ${notaArredondada}`);
    }
}

function arredondarNota(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5));
    } else {
        return nota;
    }
}

classificaAluno(100);
classificaAluno(30);
classificaAluno(38);
classificaAluno(88);
classificaAluno(61);