function verificaNumeros() {
    let entre = 0; 
    let fora = 0
    const numeros = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];
    for(let i = 0 ; i < numeros.length ; i++){
        if(numeros[i] >= 10 && numeros[i] <= 20){
            entre++;
        }else{
            fora++;
        }
    }
    console.log(`${entre} números entre e ${fora} números fora.`)
}
verificaNumeros();