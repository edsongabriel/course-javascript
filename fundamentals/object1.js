const prod1 = {};//CRIANDO UM OBJETO VAZIO. PODE SER ANINHADO.
prod1.name = 'Celular Ultra Mega';//ETRUTURA: CHAVE = VALOR
prod1.price = 4998.90;
prod1['Deconto Legal'] = 0.40;
console.log(prod1);

const prod2 = {
    name: 'Camisa Polo',
    price: 79.90,
    ['Desconto Legal']: 0.20
}//CRIANDO OBJETO.
console.log(prod2);