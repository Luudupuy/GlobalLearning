const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'America', age: 42, language: 'Javascript' }
  ];
console.log(list);  
function TrueOrFalse(list){
let value = 'Ruby';
for(var i=0;i<list.length;i++){
if(list[i].language == value){
    var value2 = 'True';
    break;    
}
else{
    var value2 = 'False';
}
}
console.log(value2);
}
TrueOrFalse(list);