function calcularNotaFinal(cod, nota1, nota2, nota3) {
    const notas = [nota1, nota2, nota3];
    notas.sort((a, b) => a < b ? -1 : 1);
    let mediaFinal = (((notas[0] * 3) + (notas[1] * 3) + (notas[2] * 4)) / 36);
    imprimirResultado(cod, nota1, nota2, nota3, mediaFinal);
}
function imprimirResultado(cod, nota1, nota2, nota3, mediaFinal) {
    console.log(`Código do aluno: ${cod}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`);
}
calcularNotaFinal(-1, 2.8, 6, 3.5);