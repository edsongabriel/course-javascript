// É uma função que retorna um objeto

// Em vez de:

// const prod1 = {
//     name: '...',
//     price: 45
// }

// const prod2 = {
//     name: '...',
//     price: 1234
// }

function createPeople() {
    return {
        name: 'Ana',
        surname: 'Silva'
    }
}
console.log(createPeople());
