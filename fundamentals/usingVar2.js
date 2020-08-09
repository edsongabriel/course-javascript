var number = 1;
{
    var number = 2;
    console.log('dentro = ', number);
}
console.log('fora = ', number);
//NESTE CASO, "dentro" E "fora" TERÃO O MESMO VALOR, PORQUE ESTÃO NO MESMO ESCOPO.