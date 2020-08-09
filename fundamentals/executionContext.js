let a = 3;
console.log(a);

global.b = 123;
console.log(global.b);

this.c = 456;
//module.exports = {c: 456}
console.log(this.c);
//console.log(module.exports.c);// OU SEJA, this === module.exports.

//VEJA QUE QUANDO NÃO É DEFINIDIO UMA var OU let, ENTÃO abc É DECLARADA NO OBJETO GLOBAL DO NODE.
abc = 3;//  NÃO FAZER ISSO.
console.log(global.abc);