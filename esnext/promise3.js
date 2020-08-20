function generateNumbersInBetween(min, max) {

    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        const numberRandom = Math.floor(Math.random() * (max - min + 1) + min); // [0,1]
        resolve(numberRandom);
    })
}

generateNumbersInBetween(10, 30)
    .then(number => number * 10)
    .then(number => `O número gerado foi: ${number}`)
    .then(console.log);