let vetor = [1, 2, 3, 4, 5];

const funcao1 = (vetor, numero) => {
    const vetorFinal = [];
    for (let i = 0; i < vetor.length; i++) {
        vetorFinal.push(vetor[i] * numero);
    }
    return vetorFinal;
}

const funcao2 = (vetor, numero) => {
    const vetorFinal = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            vetorFinal.push(vetor[i] * numero);
        }
    }
    return vetorFinal;
}
console.log(funcao1(vetor, 3));
console.log(funcao2(vetor, 3));