function calcularReajuste(plano, salario) {
    switch(plano){
        case 'A':
            console.log(salario + (salario * 0.1));
            break;
        case 'B':
            console.log(salario + (salario * 0.15));
            break;
        case 'C':
            console.log(salario + (salario * 0.2));
            break;
        default:
            console.log('Plano inválido');
    }
}
calcularReajuste('A', 1000);
calcularReajuste('B', 1000);
calcularReajuste('C', 1000);
calcularReajuste('D', 1000);