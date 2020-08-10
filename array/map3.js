Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
}

const cart = [
    '{ "name": "Borracha", "price": 3.45 }',
    '{ "name": "Caderno", "price": 13.90 }',
    '{ "name": "Kit de Lápis", "price": 41.22 }',
    '{ "name": "Caneta", "price": 7.50}'
]
// Retornar um array apenas com os preços
let priceProducts = cart.map2(json => JSON.parse(json)).map2(element => element.price);
console.log(priceProducts);