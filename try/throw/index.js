const somaDoisNumeros = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os dois argumentos devem ser números.');
    }
    return num1 + num2;
}

try{
    console.log(somaDoisNumeros(5, 10));
    console.log(somaDoisNumeros(5, '10'));
}catch(error){
    console.log('Ocorreu um erro: ' + error.message);
}

 console.log(somaDoisNumeros(5, 50));