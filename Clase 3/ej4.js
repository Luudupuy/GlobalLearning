const prompt = require('prompt-sync')();
var num=prompt('Ingrese un numero entero positivo distinto de 0: ', num)
function arraySize(num){
if (isNaN(num)) {
    console.log("No ingreso un numero");}
else{
    if(num>0 && num%1==0){
        const array=[];
        for(var i=0;i<num;i++){
            array.push(i);}
            console.log(array);
            }
    else{
        console.log('No ingreso un numero entero positivo distinto de 0');}
    }
}
arraySize(num);