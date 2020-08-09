Number.prototype.inBetween = function (begin, end) {
    return this >= begin && this <= end;
}

const printResult = function (grade) {
    if (grade.inBetween(9, 10)) {
        console.log('Quadore de Honra');
    } else if (grade.inBetween(7, 8.99)) {
        console.log('Aprovado');
    } else if (grade.inBetween(4, 6.99)) {
        console.log('Recuperação');
    } else if (grade.inBetween(0, 3.99)) {
        console.log('Reprovado');
    }else{
        console.log('Nota inválida');
    }
}

printResult(-1);
