const technology = new Map();
technology.set('react', { framework: false });
technology.set('angular', { framework: true });

console.log(technology.react); // undefined
console.log(technology.get('react').framework);

const micellaneousKeys = new Map([
    [function () { }, 'Função'], // não é possível duplicar chaves
    [{}, 'Objeto'],
    [123, 'Número']
]);

micellaneousKeys.forEach((element, index) => {
    console.log(element, index);
})

console.log(micellaneousKeys.has(123));
micellaneousKeys.delete(123);
console.log(micellaneousKeys.has(123));
console.log(micellaneousKeys.size);