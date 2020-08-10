Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}

const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Copo de Vidro', price: 12.49, fragile: true },
    { name: 'Copo de Plástico', price: 18.99, fragile: false }
]

const fragile = element => element.fragile;
const expensive = element => element.price >= 500;
console.log(products.filter2(fragile).filter2(expensive));