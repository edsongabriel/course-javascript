const regulaValor = valor => console.log(`R$${valor.toFixed(2).toString().replace(".", ",")}`);
regulaValor(0.1 + 0.2);