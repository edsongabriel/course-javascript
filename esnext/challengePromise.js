const fs = require('fs');
const path = require('path');

const pathOfFile = path.join(__dirname, '/data.txt');

function getContent() {
    return new Promise((resolve, reject) => {
        fs.readFile(pathOfFile, 'utf-8', (err, content) => {
            if (!err) {
                resolve(content.toString());
            } else {
                reject();
            }
        });
    });
}

getContent()
    .then(content => content.split('\n'))
    .then(lines => lines.join(', '))
    .then(contentFinal => `O conteúdo final é: ${contentFinal}`)
    .then(console.log);