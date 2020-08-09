const values = [7.7, 8.9, 6.3, 9.2];//CRIANDO UM ARRAY.
console.log(values[0], values[3]);

values[10] = 10;//É POSSÍVEL ADICIONAR MAIS ALGUM ÍTEM.
console.log(values[4]);

console.log(values.length);//A VARIÁVEL LENGTH MOTRA QUANTOS ELEMENTOS HÁ NO ARRAY.

values.push({ id: 3 }, false, null, 'teste');//A FUNÇÃO "push" SERVE PARA ADICIONARMO VALORE À ARRAY. OBSERVE NA TIPAGEM FRACA.
values.pop();//A FUNÇÃO "pop" SERVE PARA EXCLUIR O ÚLTIMO ÍNDICE DO ARRAY.
delete values[0];//ESVAZIA O ÍNDICE 0 DO ARRAY.
console.log(values);

console.log(typeof values);//É DO TIPO OBJECT, TEM TAMANHO E TIPAGEM DINÂMICA.