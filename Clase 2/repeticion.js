function repeticion(num){
    var i;
    if(num>0 && num%1==0){
    for(i=0;i<num;i++){
        console.log('Frase: ',frase);}}
    else{
        console.log('No ingreso un numero entero positivo');
        }
    }
const prompt = require('prompt-sync')();
var num=prompt('Ingrese un numero entero positivo: ', num)
var frase=prompt('Ingrese una frase: ', frase)
repeticion(num)