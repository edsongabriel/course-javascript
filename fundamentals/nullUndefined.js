let value;
console.log(value);//APARECERÁ: UNDEFINED, PORQUE ESSA VARIÁVEL AINDA NÃO FOI INICIALIZADA.
value = null;//NESTE CASO, NÃO FOI ATRIBUÍDO UM ENDEREÇO DE MEMÓRIA Â VARIÁVEL. 
console.log(value);

const product = {};
console.log(product.price);
console.log(product);

product.price = 3.50;
console.log(product);
product.price = undefined; //EVITAR FAZER, POIS COMO QUE UMA VARIÁVEL FOI INICIALIZADA E SEU VALOR É "undefined"? DEVE-DE OPTAR SEMPRE PELO "Null".
console.log(product);
