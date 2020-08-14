// const moduleA = require('/home/edson/Documentos/web-course/node/moduleA.js'); Ou ainda, 
const moduleA = require('../../moduleA'); // Maneira recomendada
console.log(moduleA.hello);

const moduleC = require('./folderC') // Como o arquivo se chama index, não precisa infromar o nome do arquivo
console.log(moduleC.hello);

// const http = require('http');
// http.createServer((req, res) => {
//     res.write('Bom dia');
//     res.end();
// }).listen(8080);