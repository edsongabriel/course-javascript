//Par name/valor
const greeting = 'Opa';//Contexto léxico 1.

function run() {
    const greeting = 'Falaaa';//Contexto léxico 2.
    return greeting;
}

//Objetos são grupos aninhados de pares name/valor.
const Client = {
    name: 'Pedro',
    age: 32,
    weigth: 90,
    address: {
        publicPlace: 'Rua Muito Legal',
        number: 123        
    }
}

console.log(greeting);
console.log(run());
console.log(Client);

/*
*Veja que nesta notação name/valor, pode haver variáveis como mesmo name desde que estejam em contextos 
*diferentes. 
*/