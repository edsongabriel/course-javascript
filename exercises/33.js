const vetorInt = [1, 5, 7, 9];
const vetorString = ['Edson', 'Gabirel', 'Ferreira', 'Gomes'];
const vetorDouble = [2.2, 5.8, 6.4, 9.4];

function concatenar1(...args) {
    let resultado = [];
    for(let i = 0 ; i < arguments.length ; i++){
        resultado = resultado.concat(arguments[i]);
    } 
    return resultado;
}

console.log(concatenar1(vetorInt, vetorDouble));
console.log(concatenar1(vetorDouble, vetorString));