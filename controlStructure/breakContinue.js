const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (indexx in numbers) {
    if (indexx == 5) {
        break;
    }
    console.log(`Índice ${indexx} = ${numbers[indexx]}`);
}
console.log();

for (indexy in numbers) {
    if (indexy == 5) {
        continue;
    }
    console.log(`Índice ${indexy} = ${numbers[indexy]}`);
}

externo:// ISSO SE CHAMA RÓTULO, E REFERENCIA O PRIMEIRO FOR.
for (indexz in numbers) {
    for (indexInter in numbers) {
        if (indexz == 2 && indexInter == 3) {
            break externo;
        }
        console.log(`Indice ${indexz} = ${numbers[indexz]} | Indice ${indexInter} = ${numbers[indexInter]}`);
    }
}