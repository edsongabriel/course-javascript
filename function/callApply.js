function getPrice(tax = 0, coin = 'R$') {
    return `${coin} ${this.price * (1 - this.disc) * (1 + tax)}`
}

const product = {
    name: 'Notebook',
    price: 4589,
    disc: 0.15,
    getPrice
}

global.price = 20;
global.disc = 0.1;
console.log(getPrice());// Neste caso o this está sendo global

console.log(product.getPrice());

// Este seria o caso usando a função bind
console.log(getPrice.bind(product)());

// Usando o call
const car = {
    price: 49990,
    disc: 0.20
}
console.log(getPrice.call(car));

// Usando apply
console.log(getPrice.apply(car));

// O que muda do call para o apply são os parâmetros, por exemplo:
console.log(getPrice.call(car, 0.17, '$'));
console.log(getPrice.apply(global, [0.17, '$']));// Neste caso, os parâmetros devem está dentro de um array