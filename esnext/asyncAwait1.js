// Não é possível usar o await direto em um módulo node

function wait(time = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time)
    })
}

// wait()
//     .then(() => console.log('Run promise1'))
//     .then(wait)
//     .then(() => console.log('Run promise2'))
//     .then(wait)
//     .then(() => console.log('Run promise3'))

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function returnValueFast() {
    return 20;
}

async function run() {
    let value = await returnValueFast();

    await wait();
    console.log(`Async/Await ${value}`);

    await wait();
    console.log(`Async/Await ${value + 1}`);

    await wait();
    console.log(`Async/Await ${value + 2}`);

    return value + 3;
}

// run().then(console.log) Pegar o valor de retorno

async function runTrue() {
    const value = await run();
    console.log(value);
}

runTrue();