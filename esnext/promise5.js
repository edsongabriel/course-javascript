function workOrNot(value, chanceOfError) {
    return new Promise((resolve, reject) => {
        try {
            con.log('Erro proposital')
            if (Math.random() < chanceOfError) {
                reject('Ocorreu um erro')
            } else {
                resolve(value);
            }
        } catch (error) {
            reject('Ocorreu um erro')
        }

    });
}

workOrNot('Testando', 0.5)
    .then(value => `Valor: ${value}`)
    .then( // Desta forma o erro será tratado de forma específica
        value => console.log(value),
        // err => console.log(`Erro específico: ${err}`)
    )
    .catch(err => console.log(`Erro geral: ${err}`)) // Depois do catch o valor não será masi disponível
    .then(() => console.log('End'))