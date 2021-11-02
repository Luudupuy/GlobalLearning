const array = [9,5,10,2,24,-1];
console.log(array);
function adjacentElementsProduct(array){
    var value=array[0]*array[1];
    for(var i=0;i<array.length;i++){
        if(array[i]*array[i+1]>value){
            value=array[i]*array[i+1];}
            }
    console.log(value);}
    adjacentElementsProduct(array);