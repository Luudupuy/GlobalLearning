const array=[1,2,3,4];
function addNumber(array){
    const value = array.map(function(item){
        return item+2;})
    console.log(value);
}
addNumber(array);