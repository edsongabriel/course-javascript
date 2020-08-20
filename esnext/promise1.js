// let a = 1;
// console.log(a); // Neste caso, o valor de a já está disponível

const firstValue = value => value[0];
const minuscule = letter => letter.toLowerCase();

new Promise((resolve,) => { // Aqui, há apenas a promessa de retorno de uma resposta no futuro
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']); // Aceita apenas um valor como parâmetro. Caso queira passar mais de um dado, basta passar um Array ou object
})
    .then(firstValue) // composição fácil
    .then(firstValue)
    .then(minuscule)
    .then(console.log);
