function createProducts(name, price) {
    return{
    name,
    price,
    discount: 0.1
    }
}

console.log(createProducts('NoteBook', 2199.49));
console.log(createProducts('iPad', 1199.49));
