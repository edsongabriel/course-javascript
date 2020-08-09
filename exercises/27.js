function calculaAltura(altura1, txCrescimento1, altura2, txCrescimento2) {
    let time = 0;
    if (altura1 < altura2) {
        if (txCrescimento1 < txCrescimento2) {
            console.log('A criança menor não ultrapassará a maior.');
        } else {
            while (altura1 < altura2) {
                altura1 += txCrescimento1;
                altura2 += txCrescimento2;
                time++
            }
            console.log(`${time} ano(s).`);
        }
    } else if (altura1 > altura2) {
        if (txCrescimento2 < txCrescimento1) {
            console.log('A criança menor não ultrapassará a maior.');
        } else {
            while (altura1 > altura2) {
                altura1 += txCrescimento1;
                altura2 += txCrescimento2;
                time++
            }
            console.log(`${time} ano(s).`);
        }
    } else if (altura1 == altura2) {
        if (txCrescimento1 > txCrescimento2) {
            console.log('A criança 1 ultrapassará a criança 2 em 1 ano(s).')
        } else if (txCrescimento1 < txCrescimento2) {
            console.log('A criança 2 ultrapassará a criança 1 em 1 ano(s).')
        } else {
            console.log('As crianças tem igual altura e crescimento.')
        }
    }
}
calculaAltura(150, 20, 150, 20);
calculaAltura(150, 2, 130, 4);