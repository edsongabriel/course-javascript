// var -> escopo global e de função
// let e const -> escopo de bloco
{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);
// console.log(b); Não é possível

// Template String
const product = 'iPad';
console.log(`${product} é caro!`);

// Destructuring
const [l, e, ...tters] = "Cod3r";
console.log(l, e, tters); // C o [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x, y); // 1 3

const { name, age } = { name: 'Ana', age: 9 }
console.log(name, age);