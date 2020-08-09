const condicaoExiste = (cat1, cat2, cat3) => {
    if ((cat2 - cat3) < cat1 && cat1 < (cat2 + cat3)) {
        if ((cat1 - cat3) < cat2 && cat2 < (cat1 + cat3)) {
            if ((cat1 - cat2) < cat3 && cat3 < (cat1 + cat2)) {
                queTrianguloE(cat1, cat2, cat3);
            } else {
                console.log('Triângulo impossível!');
            }
        } else {
            console.log('Triângulo impossível!');
        }
    } else {
        console.log('Triângulo impossível!');
    }
}

const queTrianguloE = (cat1, cat2, cat3) => {
    if (cat1 == cat2 && cat2 == cat3) {
        console.log("Triângulo equilátero");
    } else if (cat1 == cat2 || cat2 == cat3 || cat3 == cat1) {
        console.log("Triângulo isóceles");
    } else {
        console.log("Triângulo escaleno");
    }
}

condicaoExiste(3, 4, 2);