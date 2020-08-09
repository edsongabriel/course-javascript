function venderFruta(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Não vendemos esta fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo.');
            break;
        default:
            console.log('Erro, fruta inválida.');
    }
}
venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')