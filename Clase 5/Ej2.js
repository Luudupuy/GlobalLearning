const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];
var max = Math.max(...list1.map(person => person.age));//busco la mayor edad de la lista y le asigno la variable max
var maxValues = list1.filter(person => person.age == max);//filtro de mi lista a aquellos que tienen la edad max y le asigno la variable maxValues
console.log(maxValues);