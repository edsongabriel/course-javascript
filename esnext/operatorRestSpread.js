// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const employees = { name: 'Maria', salary: 12348.99 }
const clone = { active: true, ...employees }
console.log(clone);

// usar spread com array
const groupA = ['João', 'Pedro', 'Glória']
const groupFinal = ['Maria', 'Rafaela', ...groupA]
console.log(groupFinal);
