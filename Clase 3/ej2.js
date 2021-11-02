const array=['a','b','c','d','e','f','g','h','i'];
function deleteLastThree(array){
    if(array.length>5){
        array.length=array.length-3;
        console.log(array);
    }
    else{
        console.log("El arreglo debe tener más de 5 elementos");
    }
}
deleteLastThree(array);