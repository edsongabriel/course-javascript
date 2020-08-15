const fs = require('fs');

const path = __dirname + '/file.json';

// LEITURA DE ARQUIVOS
// sincrona...
const content = fs.readFileSync(path, 'utf-8');
console.log(content);

// assincrona
fs.readFile(path, 'utf-8', (err, content) => {
    if (err == undefined) {
        const config = JSON.parse(content);
        console.log(`${config.db.host}: ${config.db.port}`);
    }
});

const config = require('./file.json');
console.log(config.db);

// LEITURA DE PASTAS
fs.readdir(__dirname, (err, content) => {
    console.log('Conteúdo da pasta...');
    console.log(content);
});