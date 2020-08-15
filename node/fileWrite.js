const fs = require('fs');

const product = {
    name: 'Celular',
    price: 1248.99,
    discount: 0.15
}

// Escrevendo
fs.writeFile(__dirname + '/fileGenerated.json', JSON.stringify(product), err => {
    console.log(err || 'Arquivo salvo!');
});