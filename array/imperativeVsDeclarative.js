const pupils = [
    { name: 'João', grade: 7.9 },
    { name: 'Maria', grade: 9.2 }
];

//Imperative
let total1 = 0;
for (let index = 0; index < pupils.length; index++) {
    total1 += pupils[index].grade;
}
console.log(total1 / pupils.length);

//Declarative
const getGrade = element => element.grade;
const sum = (total, current) => total + current;
const total2 = pupils.map(getGrade).reduce(sum);
console.log(total2 / pupils.length);