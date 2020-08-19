// com promise
const http = require('http');

const getTurm = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let result = '';

            response.on('data', datas => {
                result += datas;
            })

            response.on('end', () => {
                try {
                    resolve(JSON.parse(result));
                } catch (e) {
                    reject(e);
                }
            })
        })
    })
}

// let names = []
// getTurm('A').then(pupils => {
//     names = names.concat(pupils.map(element => `A: ${element.nome}`));
//     getTurm('B').then(pupils => {
//         names = names.concat(pupils.map(element => `B: ${element.nome}`));
//         getTurm('B').then(pupils => {
//             names = names.concat(pupils.map(element => `C: ${element.nome}`));
//             console.log(names);
//         })
//     });
// });

Promise.all([getTurm('A'), getTurm('B'), getTurm('C')])
    .then(turms => [].concat(...turms))
    .then(pupils => pupils.map(element => element.nome))
    .then(names => console.log(names))
    .catch(err => console.log(err));

getTurm('D').catch(e => console.log(e))