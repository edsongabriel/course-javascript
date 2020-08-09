const escola = "Cod3r";
console.log(escola.charAt(4));//ESTA FUNÇÃO RETORNA O CARACTERE CORRESPONDENTE A POSIÇÃO 4 NA STRING, OU SEJA, O ALGARISMO "4".
console.log(escola.charCodeAt(3));//RETORNA O VALOR DA TABELA ASC DO CARACTERE REFERENTE NA STRING.
console.log(escola.indexOf('3'));//RETORNA O ÍNDICE ASSOCIADO AO CARACTERE NA STRING.
console.log(escola.substring(1));//RETORNA OS CARACTERES, A PARTIR DO ÍNDICE 1.
console.log(escola.substring(0,4));//RETORNA O CARACTERES, A PARTIR DO ÍNDICE 0 ATÉ O ANTERIOR AO ÍNSICE 4. 
console.log('Escola '.concat(escola).concat('!'));//SERVE PARA CONCATENAR O LITERAL COM UMA CONSTANTE MAIS UMA STRING LITERAL.
console.log(escola.replace(3, 'e'));//SUBSTITUI O "3" PELO "e".
console.log('Ana,Maria,Pedro'.split(','));//SEPARA POR VÍRGULA E RETORNA EM ARRAY.
