const array=[1,1,1,1,1,1,2];
var value;
function findUniq(array){
    array.forEach(function(item,index){
        if(array[index]===array[index-1]||array[index]===array[index+1]){
        }
        else{
            value=array[index];}
    })
console.log(value);
}
findUniq(array);