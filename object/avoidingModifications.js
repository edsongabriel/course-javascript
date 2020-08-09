// Object.preventExtensions: 
//previne que sejam inseridos mais atributos em um determinado objeto
const product = Object.preventExtensions({
    name: 'Qualquer', price: 1.99, tag: 'promocao'
});
console.log('Extensível', Object.isExtensible(product));

product.name = 'Boracha';
product.description = 'Borracha escolar branca';
delete product.tag;
console.log(product);

// Object.seal
// Neste caso não é possível adicionar nem excluir atributos de determinado objeto
const people = {
    name: 'Juliana',
    age: 35
}
Object.seal(people);
console.log();
console.log('Selado', Object.isSealed(people));

people.surname = 'Silva';
delete people.name;
people.age = 29;
console.log(people);

// Object.freeze = selado + valores constantes