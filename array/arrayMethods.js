const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilots.pop(); // Deleta o último elemento do array
console.log(pilots);

pilots.push('Verstappen'); // Adiciona um elemento no final do array
console.log(pilots);

pilots.shift(); // Deleta o primeiro item do array
console.log(pilots);

pilots.unshift('Hamilton'); // Adiciona um elemento no início do array
console.log(pilots);

// Array<>.splice() pode adiconar e/ou remover elementos a partir de um índice
// Adicionar elementos:
pilots.splice(2, 0, 'Botas', 'Massa');
console.log(pilots);
// Remover elementos
pilots.splice(3, 1);
console.log(pilots);

const somePilots1 = pilots.slice(2); // Retorna um novo array (a partir do índice 2)
console.log(somePilots1);
const somePilots2 = pilots.slice(1, 4) // Retorna a partir do índice 1 até o anteiror ao índice 4
console.log(somePilots2);