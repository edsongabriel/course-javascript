// PROP_IF_1
function test1(num) {
    if (num > 7)
        console.log(num);
    console.log('Final');
}
test1(8);
test1(6);
// QUANDO NO IF NÃO FOR ADCIONADO AS {}, ENTÃO APENAS A PRIMEIRA SENTENÇA RESPEITARÁ A EXPRESSÃO.

// PROP_IF_2
function test2(num) {
    if(num > 7);{ // CUIDADO COM O ;
        console.log(num);
    }
}
test2(6);
test2(8);
//VEJA QUE O BLOCO NÃO ESTÁ ASSOCIADO AO IF POR CAUSA DO ;. LOGO O BLOCO SERÁ EXECUTADO SEMPRE QUE A FUNÇAO FOR CHAMADA.