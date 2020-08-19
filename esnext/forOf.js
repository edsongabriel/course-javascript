for (let letter of "Cod3r") {
    console.log(letter);
}

const subjectEcma = ['Map', 'Set', 'Promise'];

for (let index in subjectEcma) { // atua sobre os índices
    console.log(index);
}

for (let subjects of subjectEcma) { //  atua sobre os valores
    console.log(subjects);
}

// forOf com Map
const subjectMap = new Map([
    ['Map', { approached: true }],
    ['Set', { approached: true }],
    ['Promise', { approached: false }],
]);

for (let subjects of subjectMap) {
    console.log(subjects);
}

for (let keys of subjectMap.keys()) {
    console.log(keys);
}

for (let values of subjectMap.values()) {
    console.log(values);
}

for (let [keys, value] of subjectMap.entries()) {
    console.log(keys, value);
}

// forOf com Set
const exemple = new Set(['a', 'b', 'c']);
for (let letter of exemple) {
    console.log(letter);
}