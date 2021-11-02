const array = [7,4,2,3];
console.log(array);
function minSum(array){
    const value = array.sort(function(a, b){
        return a - b}); 
    console.log(value);
    var sum=0;
    sum=value[0]+value[1];
    console.log(sum);
}
minSum(array);