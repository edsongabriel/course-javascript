function generateNumbersInBetween(min, max, numbersForbiden) {

    if (min > max) {
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const numberRandom = Math.floor(Math.random() * (max - min + 1) + min); // [0,1]
        if (numbersForbiden.includes(numberRandom)) {
            reject('Número repetido');
        } else {
            resolve(numberRandom);
        }
    });

}

async function generateMegaSena(numberOfItems, attempt = 1) {
    try {
        const numbers = [];
        for (let index of Array(numberOfItems).fill()) {
            numbers.push(await generateNumbersInBetween(1, 60, numbers));
        }
        numbers.sort((a, b) => a - b);
        return numbers;
    } catch (error) {
        // console.log(attempt);
        if (attempt > 10) {
            throw "Não deu certo"
        } else {
            return generateMegaSena(numberOfItems, attempt + 1)
        }
    }
}

generateMegaSena(6)
    .then(console.log)
    .catch(console.log)
