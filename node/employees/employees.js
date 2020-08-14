const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const employees = response.data.filter(element => element.pais == 'China').filter(element => element.genero == 'F').reduce((count, current) => {
        // return count.salario < current.salario ? count : current Espectativa
        // É interessante que para melhor leitura de código, as callbacks sejam escritas individualmente
        if (count.salario > current.salario) {
            count = current;
        }
        return count;
    });
    console.log(employees);
});