const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Asia', age: 19, language: 'JavaScript' },
    {firstName: 'Carla', country: 'Tahiti', continent: 'America', age: 28, language: 'JavaScript' },
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
console.log(list);
var count=0;
for(var i=0;i<list.length;i++){
  if(list[i].continent=='Europe'){
    count=count+1;
    }
}
console.log('Hay %s persona/s de Europa',count);