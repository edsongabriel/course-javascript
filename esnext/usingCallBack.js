// sem promise
const http = require('http');

const getTurm = (letter, callBack) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
    http.get(url, response => {
        let result = '';

        response.on('data', datas => {
            result += datas;
        })

        response.on('end', () => {
            callBack(JSON.parse(result));
        })
    })
}

let names = []
getTurm('A', pupils => {
    names = names.concat(pupils.map(element => `A: ${element.nome}`));
    getTurm('B', pupils => {
        names = names.concat(pupils.map(element => `B: ${element.nome}`));
        getTurm('B', pupils => {
            names = names.concat(pupils.map(element => `C: ${element.nome}`));
            console.log(names);
        })
    });
});