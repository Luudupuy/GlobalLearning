const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
function userName(list1){
    for(var i=0;i<list1.length;i++){
        const Year=2021;//coloco el año actual y le asigno Year
        const Age = Year - list1[i].age;//resto el año actual de la edad de cada persona de la lista para saber el año de nacimiento y le asigno Age
        list1[i].userName = list1[i].firstName.toLowerCase()+list1[i].lastName[0].toLowerCase()+Age;//creo la nueva propiedad userName
    }
console.log(list1);
}
userName(list1);