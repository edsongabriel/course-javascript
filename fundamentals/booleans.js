let isAtivo = false;//ATRIBUINDO VALOR FALSO
console.log(isAtivo);
console.log('');

isAtivo = true;//ATRIBUINDO VALOR POSITIVO
console.log(isAtivo);
console.log('');

isAtivo = 1;//ATRIBUINDO VALOR POSITIVO
console.log(!!isAtivo);
console.log('');

console.log('OS VERDADEIROS...');//POSITIVOS
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log('');

console.log('OS FALSOS...');//NEGATIVOS
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('');

console.log('PARA FINALIZAR: ');
console.log(!!('' || null || 0 || ' '));
console.log('');

//É POSSÍVEL "PREENCHER" VARIÁVEIS COM ESSA TÉCNICA. 
let nome = '';
console.log(nome || 'DESCONHECIDO');