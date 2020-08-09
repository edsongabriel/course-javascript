function myObject() {}
console.log(myObject.prototype);

const obj1 = new myObject;
const obj2 = new myObject;

console.log(obj1.__proto__ === obj2.__proto__);
console.log(myObject.prototype === obj1.__proto__);

myObject.prototype.name = 'Anônimo';
myObject.prototype.speak = function() {
    console.log(`Bom dia! Meu name é ${this.name}`);
}

obj1.speak();

obj2.name = 'Rafael';
obj2.speak();

const obj3 = {}
obj3.__proto__ = myObject.prototype;
obj3.name = 'Obj3';
obj3.speak();

// Resumindo:
console.log((new myObject).__proto__ === myObject.prototype);
console.log(myObject.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
