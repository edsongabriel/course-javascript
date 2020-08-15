console.log(this === global); // false
console.log(this === module); // false
console.log(this == module.exports); //true
console.log(this === exports); // true

function logThis() {
    console.log('In function');
    console.log(this === exports); // false
    console.log(this === module.exports); // false
    console.log(this === global); // true. Ou seja, dentro de uma função o this === global
}
logThis();