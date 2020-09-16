const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns. Ususário incluído!</h1>')
})

app.post('/users/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('<h1>Parabéns. Ususário alterado!</h1>')
})

app.listen(3003)