const bhaskara = (ax2, bx, c) => {
    const raizes = [];
    delta = (bx ** 2) - (4 * ax2 * c);
    if (delta < 0) {
        return "Delta negativo";
    }
    let raiz1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    let raiz2 = (-bx - Math.sqrt(delta)) / 2 * ax2;

        raizes.push(raiz1, raiz2);
        return raizes;
}

console.log(bhaskara(1, 12, -13));