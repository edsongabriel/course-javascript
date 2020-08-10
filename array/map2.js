const cart = [
    '{ "name": "Borracha", "price": 3.45 }',
    '{ "name": "Caderno", "price": 13.90 }',
    '{ "name": "Kit de Lápis", "price": 41.22 }',
    '{ "name": "Caneta", "price": 7.50}'
]

// Retornar um array apenas com os preços
let priceProducts = cart.map(json => JSON.parse(json)).map(element => element.price);
console.log(priceProducts);