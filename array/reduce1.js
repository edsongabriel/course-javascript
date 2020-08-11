const pupils = [
    { name: 'João', grade: 7.3, scholarship: false },
    { name: 'Maria', grade: 9.2, scholarship: true },
    { name: 'Pedro', grade: 9.8, scholarship: false },
    { name: 'Ana', grade: 8.7, scholarship: true }
];

const result = pupils.map(element => element.grade).reduce(function(count, current) {
    console.log(count, current);
    return count + current;
} /* , <initial_value> */ );
console.log(result);