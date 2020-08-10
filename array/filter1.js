const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Copo de Vidro', price: 12.49, fragile: true },
    { name: 'Copo de Plástico', price: 18.99, fragile: false }
]

const Fragile = element => element.fragile;
const Expensive = element => element.price >= 500;
console.log(products.filter(Fragile).filter(Expensive));

// console.log(products.filter(element => {
//     // if true return in new array
//     // else not return
//     return element.price > 10;
// }));