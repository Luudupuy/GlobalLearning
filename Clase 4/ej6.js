const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'Javascript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];
console.log(list1);  
function firstDeveloper(list1){
let value = 'Python';
for(var i=0;i<list1.length;i++){
if(list1[i].language == value){
    var value2 = list1[i].firstName+' from ' +list1[i].country+' was the first '+list1[i].language+' developer in the conference';
    break;
}
else{
     var value2 = 'There are no '+value+' developers in the conference';
}
}
console.log(value2);
}
firstDeveloper(list1);