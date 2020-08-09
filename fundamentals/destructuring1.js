//NOVO RECURSO DO ES2015. 

const people = {
    name: 'Ana', 
    age: 5, 
    address: {
        publicPlace: 'Rua ABC', 
        number: 1000
    }
}

const {name, age} = people;
console.log(name, age);
//OU AINDA:
const {name: n, age: i} = people;
console.log(n, i);
//NESTE CASO, FUNCIONA COMO SE APELIDASSE O ATRIBUTO.
const {address: {publicPlace, number, cep}} = people;
console.log(publicPlace, number);
//NO CASO DE UM OBJETO ANINHADO, DEVE CHAMAR O OBJETO FILHO DA SEGUINTE FORMA E APENAS SEUS ATRIBUTOS SERÃO DESESTRUTURADOS.
