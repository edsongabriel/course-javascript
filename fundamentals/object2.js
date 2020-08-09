console.log(typeof Object);//Function.
console.log(typeof new Object());//Object.

const client = function () { }
console.log(typeof client);//Function.
console.log(typeof new client);//Object.

class Product { }//ES 2015 (ES6).
console.log(typeof Product);//Class.
console.log(typeof new Product());//Object.