let vetor1 = [1, 2, 3];
let vetor2 = [4, 5, 6];

function alteraVetores(vetor1, vetor2) {
    let tVetor1 = vetor1.length;
    let tVetor2 = vetor2.length;

    if (tVetor1 == tVetor2) {

        for (let i = 0; i < tVetor2; i++) {
            vetor1.push(vetor2[0]);
            vetor2.shift();
        }
        //console.log(vetor1, vetor2);

        for (let j = 0; j < ((tVetor1 + tVetor2) / 2); j++) {
            vetor2.push(vetor1[0]);
            vetor1.shift();
        }
        //console.log(vetor1, vetor2);
    }
    console.log(vetor1+'\n'+vetor2);
}
alteraVetores(vetor1, vetor2);