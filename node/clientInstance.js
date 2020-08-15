const counterA = require('./singleInstance');
const counterB = require('./singleInstance');

const counterC = require('./newInstance')();
const counterD = require('./newInstance')();

counterA.increment();
counterA.increment();
console.log(counterA.value, counterB.value); // Neste caso, counteA e counterB apontam para o mesmo endereço de memória

counterC.increment();
counterC.increment();
console.log(counterC.value, counterD.value); // Neste cao, counterC e counterD são instâncias distintas