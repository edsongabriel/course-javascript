// coleção dinâmica de pares chave/value
const product = new Object;
product.name = 'cadeira';
product['marca do product'] = 'Genérica';
product.price = 220;

console.log(product);
delete product.price;
delete product['marca do product'];
console.log(product);

const car = {
    model: 'A4',
    value: 89000,
    proprietor: {
        name: 'Raul',
        age: 56,
        address: {
            publicPlace: 'Rua ABC',
            number: 123
        }
    },
    driver: [{
        name: 'Júnior',
        age: 19
    }, {
        name: 'Ana',
        age: 42
    }], 
    calculateSafeValue: function(){
        // ...
    }
}

car.proprietor.address.number = 1000;
car['proprietor']['address']['publicPlace'] = 'Av. Gigante';
console.log(car);

delete car.driver;
delete car.proprietor.address;
delete car.calculateSafeValue;
console.log(car);
console.log(car.driver); // não gera problemas, pois retornará undefined.
//console.log(car.driver.name); Neste caso gera problema, pois está tentando acessar um atributo de algo que não existe.