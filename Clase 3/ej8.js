const array=['wolf','sheep','sheep','sheep','sheep','sheep','sheep'];
const array2 = array.reverse();
function warnTheSheep(array2){
    array.forEach(function(item,index){
        if(array2[index]=='wolf'){
            if(array2[index+1]!==undefined){
                if(array2[index-1]==undefined){
                console.log('No sigas comiendo ovejas')}
                else{
                console.log('Hey! El lobo esta cerca, cuidado oveja '+[index]); 
                }
            }
            else{
                console.log('Hey! El lobo esta cerca, cuidado oveja '+[index]);}
        }
    })
}    
warnTheSheep(array2);