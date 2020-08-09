function rand({max = 0, min = 1000}){
    const valor = Math.random() * (max - min) + (max);
    return Math.floor(valor);
}
console.log(rand({max: 50, min: 40}));
//NO CASO ACIMA, O DESTRUCTURING FOI FEITO NOS ARGUMENTOS DE UMA FUNÇÃO. É IMPORTANTE QUE O VALOR PASSADO COMO ARGUMENTO NÃO SEJA NULL OU undefined, POIS ACARRETARÁ UM ERRO.