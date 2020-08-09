function printNameScreaming(obj) {
    try {// CASO EXISTA ERRO EM ALGUMA SENTEÇA DESSE BLOCO, ENVIE O ERRO PARA O PRÓXIMO BLOCO.
        console.log(obj.name.toUpperCase(), '!!!');
    } catch (e) {// O ERRO ESTÁ NO ARGOMENTO e.
        treatErrorThrow(e);
    } finally {// SEMPRE SERÁ EXECUTADO.
        console.log('Final');
    }
}

function treatErrorThrow(error) {// TRATAR ERRO
    // throw new Error('....');

    // throw 10;

    // throw true;

    // throw 'mensagem';

    throw{
        name: error.name,
        msg: error.message,
        date: new Date()
    }

}

const obj = {
    name: 'Roberto'
}
printNameScreaming(obj);