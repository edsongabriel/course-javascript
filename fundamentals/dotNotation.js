console.log(Math.ceil(6.1));//Math é uma biblioteca na qual ceil  arredonda para mais.

const obj1 = {}
obj1.name = 'Bola';
console.log(obj1.name);

function Obj(name) {
    this.name = name;
    this.run = function () {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
console.log(obj2.name);
const obj3 = new Obj('Mesa');
console.log(obj3.name);
obj3.run();

/*
*Veja que a notação ponto serve tanto para setar o valor de um atributo de um objeto, quanto para pegar o 
*valor.
*Observe também que obj2 e obj3 são objetos criados a partir de uma função usando o objeto this.
*/


