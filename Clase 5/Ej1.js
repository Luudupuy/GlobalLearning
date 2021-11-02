const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
function lenguages(list){
const array = list.map(person => person.language);//creo un nuevo arreglo solo con los lenguajes de cada persona
const newArray = [...new Set(array)];//creo un nuevo arreglo con los lenguajes sin repetir para saber cuantos tengo
newArray.length == 1 ? console.log("True") : console.log("False");//hago un if:si el tamaño del nuevo arreglo es 1 imprime true y si es distinto de 1 imprime false
}
lenguages(list);