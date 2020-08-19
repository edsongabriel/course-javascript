// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal
const name = 'Carla';
const people = {
    name,
    hello() {
        return `Olá, ${this.name}`;
    }
}
console.log(people.name);
console.log(people.hello());

// Class
class Animal {}
class Dog extends Animal {
    speak() {
        return 'Au au!';
    }
}

console.log(new Dog().speak());