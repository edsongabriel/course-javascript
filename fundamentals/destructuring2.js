const [a] = [10];//NESTE CASO O DESTRUCTURING ASSIGNMENT CRIA COMO SE FOSSE UM ÍNDICE a QUE RECEBE O VALOR 10 COMO SE FOSSE O PRIMEIRO ÍNDICE DE UM VETOR.
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [b, nota]] = [[, 8, 8], [9, 6, 8]];
console.log();


//DE FORMA MAIS CONCRETA, VEJA:
const peoples = ['Ana', 'José', 'Maria'];//CRIAÇÃO DA ARRAY.
const [p1, p2, p3] = peoples;//DESESTRUTURAÇÃO DA ARRAY PESSOAS.
console.log(p1, p2, p3);

//OBSERVE AQUI O OPERADOR SPREAD. SERVE PARA ATRIBUIR TODO O RESTO DO OBJETO OU ARRAY QUE NÃO TEVE NENHUMA EXTRAÇÃO ESPECIFICADA.
//OPERADOR SPREAD: "..."
const numbers = [1, 2, 3, 4, 5, 6];
const [first, second, ...others] = numbers;
console.log(others);

const music = { 
    name: "Neon Knights", 
    artist: "Black Sabbath", 
    year: 1980 
}
const { name, ...attrs } = music;
console.log(name, attrs);
