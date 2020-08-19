// Arrow function
const sum = (a, b) => a + b;
console.log(sum(2, 3));

// Arrow function (this)
const lexical1 = () => console.log(this === exports);
const lexical2 = lexical1.bind({});
lexical1();
lexical2();

// Params default
function log(text = 'node') {
    console.log(text);
}
log();

// Rest/Spred
function total(...numbers) {
    // return numbers.reduce((count, current) => count + current);
    let total = 0;
    numbers.forEach(element => total += element);
    return total;
}
console.log(total(2, 3, 4, 5));