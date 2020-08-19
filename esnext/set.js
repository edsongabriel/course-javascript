// não aceita repetição e não indexado
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Flamengo').add('Vasco');
console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('São Paulo');
console.log(times);

const names = [ 'Raquel', 'Lucas', 'Júlia', 'Lucas'];
const namesSet = new Set(names);
console.log(names, namesSet);