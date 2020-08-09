const father = {
    name: 'Pedro',
    hairColor: 'preto'
}

const daughter1 = Object.create(father); // Note que o parâmetro define o objeto father com protótipo do objeto filha
daughter1.name = 'Ana';
console.log(daughter1.hairColor);

const daughter2 = Object.create(father, {
    name: {value: 'Bia', writable: false, enumerable: true}
});
console.log(daughter2.name);
daughter2.name = 'Carla';
console.log(`${daughter2.name} tem cabelo ${daughter2.hairColor}`);

console.log(Object.keys(daughter1));
console.log(Object.keys(daughter2));

for(let key in daughter2){
    daughter2.hasOwnProperty(key) ? // Note que esta função retorna true apenas para o atributos que pertencem ao objeto
    console.log(key) : console.log(`Por herança: ${key}`);
}