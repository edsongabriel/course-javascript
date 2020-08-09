// EXEMPLO 1:
let double = function (a) {
    return 2 * a;
}

// OBS.: UMA FUNÇÃO ARROW SEMPRE SERÁ ANÔNIMA.
double = (a) => {
    return 2 * a;
} // DESTA MANEIRA NÃO MUDA MUITA COISA.

double = a => 2 * a; // ESTA É A FORMA MAIS REDUZIDA. RETURN IMPLÍCITO.
console.log(double(Math.PI));

// EXEMPLO 2:
let hello = function () {
    return 'Olá';
}

hello = () => 'Olá';
hello = _ => 'Olá'; // NESTE CASO O underline É UM PARÂMENTRO, PORÉM É UMA FORMA MAIS CURTA DE ESCREVER A FUNÇÃO.
console.log(hello());
