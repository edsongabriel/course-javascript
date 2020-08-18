const express = require('express');
const { request, response } = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const port = 3003;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (request, response, next) => {
    response.send(db.getProducts()); // Será convertido em JSON
});

app.get('/products/:id', (request, response, next) => {
    response.send(db.getProduct(request.params.id));
});

app.post('/products', (request, response, next) => {
    const product = db.saveProduct({
        name: request.body.name,
        price: request.body.price
    });
    response.send(product); //JSON
});

app.put('/products/:id', (request, response, next) => {
    const product = db.saveProduct({
        id: request.params.id,
        name: request.body.name,
        price: request.body.price
    });
    response.send(product); //JSON
});

app.delete('/products/:id', (request, response, next) => {
    const product = db.deleteProduct(request.params.id);
    response.send(product);
})

// app.use((request, response, next) => { Esssa forma atende toda requisição
//     response.send({ name: 'Notebook', price: 123.45 }); // Será convertido em JSON
// })

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`);
})