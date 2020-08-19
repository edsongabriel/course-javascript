// tagged template - processar o template dentro de uma função
function tag(parts, ...values) {
    console.log(parts);
    console.log(values);
    return 'Outra string';
}

const student = 'Gui';
const status = "Aprovado";
console.log(tag `${student} está ${status}.`);