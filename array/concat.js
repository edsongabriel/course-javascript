const daughters = [ 'Valeska', 'Cibalena' ];
const children = [  'Uoxiton', 'Uesclei' ];
const all = daughters.concat(children);
console.log(all, daughters, children);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]