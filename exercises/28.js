let pares = 0;
let impares = 0;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function parImpar(valor){
    if(valor % 2 == 0){
        pares++;
    }else{
        impares++;
    }
}
numeros.forEach(parImpar);
console.log(`${pares} números pares e ${impares} números ímpares.`)