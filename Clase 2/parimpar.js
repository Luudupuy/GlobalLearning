function parimpar(num){
    if (isNaN(num)) {
        console.log("No ingreso un numero");}
    else{
        if (num%1==0){
            if(num%2==0){
            console.log("Par"); }
            else{
            console.log("Impar");}
            }
        else{
        console.log("No ingreso un numero entero");}
        }
}    
const prompt = require('prompt-sync')();
var num=prompt('Ingrese un numero entero: ', num)
parimpar(num)