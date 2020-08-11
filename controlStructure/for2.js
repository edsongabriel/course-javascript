const grade = [6.7, 7.4, 9.8, 8.1, 7.7];
for (index in grade) {
    console.log(index, grade[index]);
}

const people = {
    name: 'Ana',
    surname: 'Silva',
    age: 29,
    weight: 64,
}

for (attribute in people) {
    console.log(`${attribute} = ${people[attribute]}`);
}