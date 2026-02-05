const a1 = ['luiza', 'ana'];
const a2 = ['joão', 'maria'];
const a2b = ['olivia', 'bia'];

//const a3 = a1.concat(a2,a2b);
const a3 = [...a1, ...a2, ...a2b];
console.log(a3);

// .concat(array1, array2, ...) une dois ou mais arrays em um novo array
// .spread operator (...) também pode ser usado para concatenar arrays

//.spread operarator tem varias funcoes como espalhar elementos de um array em outro array, copiar objetos, combinar objetos, entre outros.