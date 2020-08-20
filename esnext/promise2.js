// setTimeout(() => {
//     console.log('Executando callback');

//     setTimeout(() => {
//         console.log('Executando callback');

//         setTimeout(() => {
//             console.log('Executando callback');
//         }, 2000);
//     }, 2000);
// }, 2000);

function wait(time = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('Run promise');
        }, time)
    })
}
wait()
    .then(wait) // Pode ser escrito assim porque não recebe argumentos
    .then(wait)