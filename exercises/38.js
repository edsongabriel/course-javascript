function imprimir(inicio = 0, fim = 100){
    const valores = [inicio, fim];
    valores.sort((a, b) => a > b ? 1 : -1);

    for(let i = 0 ; i < valores[1] ; i++){
        if(i % 2 != 0 && i > valores[0]){
            console.log(`Ímpares: ${i}`);
        }
    }
}

imprimir(25, 73);