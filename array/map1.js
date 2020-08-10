const numbers = [1, 2, 3, 4, 5];
let result = numbers.map(element => {
    return element * 2;
});
console.log(result);

const sum10 = element => element + 10;
const triple = element => element * 3;
const forMoney = element => `R$ ${parseFloat(element).toFixed(2).replace('.', ',')}`;
result = numbers.map(sum10).map(triple).map(forMoney);
console.log(result);