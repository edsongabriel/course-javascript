const pupils = [
    { name: 'João', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
];

// Desafio 1: Todos os alunos são bolsistas?
console.log(pupils.map(element => element.scholarship).reduce((count, current) => count && current));

// Desafio 2: Algum aluno é bolsista?
console.log(pupils.map(element => element.scholarship).reduce((count, current) => count || current));