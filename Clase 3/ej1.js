const array=['perro','gato','pez','conejo'];
console.log(array);
function deleteFirst(array){
    array.shift();
    console.log(array);
}
deleteFirst(array);