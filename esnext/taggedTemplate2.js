function real(parts, ...values) {
    const result = [];
    values.forEach((value, index) => {
        value = isNaN(value) ? valor : `R$${value.toFixed(2)}`;
        result.push(parts[index], value);
        if (index == values.length - 1) {
            result.push(parts[parts.length - 1]);
        }
    });
    return result.join('')
}

const price = 29.99;
const pricePortion = 11;
console.log(real`1x de ${price} ou 3x de ${pricePortion}.`);