
//arguments so existe em funcoes normais, nao em arrow functions
function conta(){
    console.log(arguments);
}
conta('valor', 1,2,3,4,5);

//parametros REST ...
function funcao([...numeros]){
    let sum = 0;
    for(let valor of numeros){
         sum += valor;
    }
    console.log(sum);   
}
funcao([10,20,30]);

//parametros REST com arrow function
const operacao = (operador, acumulador, ...numeros) => {
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

operacao('+', 0, 20,30,40,50); // 140