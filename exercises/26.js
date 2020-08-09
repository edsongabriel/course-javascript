const encontraPares = () => {
    const numPares = [];
    for(let i = 1 ; i <= 100 ; i++){
        if(i % 2 == 0){
            numPares.push(i);
        }
    }
    console.log(numPares);
}
encontraPares();