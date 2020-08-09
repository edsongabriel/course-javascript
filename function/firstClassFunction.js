// FUNÇÃO EM JS É FIRST-CLASS OBJECT (CITIZENS)
// HIGHER-ORDER FUNCTION

// CRIAR DE FORMA LITERAL
function fun1() {
}

// ARMAZENAR EM UMA VARIÁVEL
const fun2 = function () {
}

// ARMAZENAR EM UM ARRAY
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// ARMAZENAR EM UM ATRIBUTO DE UM OBJETO
const obj = {}
obj.speak = function () {
    return 'Opa';
}
console.log(obj.speak());

// COMO PASSAR FUNÇÃO COMO PARÂMETRO
function run(fun) {
    fun();
}
run(function () { console.log('Executando...') })
// run(function () { return 'Executando...' });

// UMA FUNÇÃO PODE RETORNAR/CONTER UMA FUNÇÃO
function sum(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
sum(2, 3)(4);