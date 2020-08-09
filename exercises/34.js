function verificaPalavra(word1, word2) {
    let estaContido = true;
    for(let i = 0 ; i < word1.length ; i++){
        let caracteresString1 = word1.charAt(i).toLowerCase();
        for(let j = 0 ; j < word2.length ; j++){
            let caracteresString2 = word2.charAt(j).toLowerCase();
            if(caracteresString1 == caracteresString2){
                estaContido = true;
            }else{
                estaContido = false;
            }
        }
    }
    return estaContido;
}

console.log(verificaPalavra('Asdf', 'asdf'));