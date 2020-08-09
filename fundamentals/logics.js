function shopping(work1, work2){
    const shoppingSorvete = work1 || work2;
    const shoppingTv50 = work1 && work2;
    //const shoppingTv32 = !!(trabalho11 ^ work2); //BITWISE XOR
    const shoppingTv32 =  work1 != work2;
    const keepSudavel = !shoppingSorvete;

    return {shoppingSorvete, shoppingTv50, shoppingTv32, keepSudavel};
}
console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false, false));