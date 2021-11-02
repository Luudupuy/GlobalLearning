function opuesto(num){
    if (isNaN(num)) {
        console.log("No ingreso un numero");}
    else{
    num=num*(-1);
    return num;
    }
}
const prompt = require('prompt-sync')();
var num=prompt('Ingrese un numero entero o decimal: ', num)
console.log("El opuesto es:",opuesto(num));