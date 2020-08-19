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

// Recurso do ES8
// Objetivo de simplificar o uso dos promises
let getStudant = async () => {
    const turmA = await getTurm('A');
    const turmB = await getTurm('B');
    const turmC = await getTurm('C');
    return [].concat(turmA, turmB, turmC);
} // retorna um objeto AsyncFunction

getStudant()
    .then(studant => studant.map(element => element.nome))
    .then(names => console.log(names));