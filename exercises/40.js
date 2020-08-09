const vetor = [3, 7, 5, 1, 10];

vetor.forEach((elemento) => {
        if(elemento >=0 && elemento < 5){
            console.log('D');
        }else if(elemento > 4.9 && elemento < 7){
            console.log('C');            
        }else if(elemento > 6.9 && elemento < 9){
            console.log('B');            
        }else if(elemento > 8.9 && elemento <= 10){
            console.log('A');            
        }else{
            console.log('Nota inválida');
        }
    });