
const fruits = ['apple', 'banana', 'cherry'];

for(let i in fruits){
    console.log(fruits[i]);
}

console.log('---');

for(let value of fruits){
    console.log(value);
}

console.log('---');

fruits.forEach(function(fruit, index){
    console.log(index, fruit);
});

console.log('---');

for(let index = 0; index < fruits.length; index++){
    console.log(index, fruits[index]);
}

//----------------------------------------------------------------------
// For in - lê os índices ou chaves (útil para objetos)
// For of - lê os valores iteraveis (útil para arrays, strings)
// forEach - lê os valores (útil para arrays)
// for(;;) - lê os valores através do índice (útil para arrays, strings)