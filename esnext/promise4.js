function generateNumbersInBetween(min, max, time) {

    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const numberRandom = Math.floor(Math.random() * (max - min + 1) + min); // [0,1]
            resolve(numberRandom);
        }, time)

    });

}

function generateSeveralNumbers() {
    return Promise.all([
        generateNumbersInBetween(1, 60, 4000),
        generateNumbersInBetween(1, 60, 1000),
        generateNumbersInBetween(1, 60, 500),
        generateNumbersInBetween(1, 60, 3000),
        generateNumbersInBetween(1, 60, 100),
        generateNumbersInBetween(1, 60, 1500)
    ])
}

console.time('promise');
generateSeveralNumbers()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise');
    })