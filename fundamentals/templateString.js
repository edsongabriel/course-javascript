const name = 'Rebeca';
const concatenation = 'Olá, ' + name + '!';//ESTA É A MANEIRA TRADICIONAL, MAS O CÓDIGO NÃO FICA BONITO.
const template = `Olá, ${name}!`;//NESTE CASO O JS FAZ A INTERPOLAÇÃO. OU SEJA, FAZ A INTERPRETAÇÃO DA VARIÁVEL E JÁ ADCIONA ELA DENTRO DA STRING.
console.log(concatenation);
console.log(template);

//EXPRESSÕES
console.log(`1+1=${1 + 1}`);//VEJA QUE TAMBÉM É POSSÍVEL ADCIONAR EXPRESSÕES.

const up = text => text.toUpperCase();//UMA FUNÇÃO QUALQUER.
console.log(`Ei... ${up('cuidado')}!`);//DENTRO DO TEMPLATE É POSSÍVEL CHAMAR UMA FUNÇÃO.