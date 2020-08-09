// Closure é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e maniplar variáveis externas à função.

// Contexto léxico em ação

const x = 'Global';

function out() {
    const x = 'Local';
    function within() {
        return x;
    }
    return within;
}

const myFuncton = out();
console.log(myFuncton());