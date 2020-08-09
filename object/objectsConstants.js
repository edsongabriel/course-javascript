// people -> 123 -> {...}
const people = {
    name: 'João'
}
people.name = 'Pedro';
console.log(people.name);

// people <- 456 -> {...}
// people = {name: 'Ana'}

// Simplificando, o que é constante é o endereço de memória.

Object.freeze(people);// Agora, não só o endereço é uma constante, mas os dados do objeto também.

people.name = 'Maria';
people.end = 'Rua ABC';
delete people.name;
console.log(people);

const dpeopleConstant = Object.freeze({name: 'João'})
dpeopleConstant.name = 'Maria';
console.log(dpeopleConstant);