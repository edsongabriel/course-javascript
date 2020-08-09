// IF
function onlyGoodGrade(grade) {
    if(grade >= 7){
        console.log('Aprovado com', grade);
    }
}
onlyGoodGrade(7);
onlyGoodGrade(6);

// CASO O VALOR INFORMADO COMO ARGUMENTO DA FUNÇÃO NÃO SEJA BOOLEAN, DIRETAMENTE, O JS CUIDARÁ DE INTERPRETALO. CUIDADO!
function ifTrueISpeak(value) {
    if(value){
        console.log('É verdade...', value);
    }
}
ifTrueISpeak();
ifTrueISpeak(null);
ifTrueISpeak(undefined);
ifTrueISpeak(NaN);
ifTrueISpeak('');
ifTrueISpeak(0);
ifTrueISpeak(-1);
ifTrueISpeak(' ');
ifTrueISpeak('?');
ifTrueISpeak([]);
ifTrueISpeak([1, 2]);
ifTrueISpeak({});