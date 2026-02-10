
//reduce para reduzir o array a um único valor
//some todos os numeros do array(reduce)
//retorne um arrray com os pares(filter)
//retorne um array com o dobro dos valores(Map)

//some todos os números
const numeros = [5, 50, 80, 1, 2, 3, 15, 22, 27];

//somar so os valores pares
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
console.log(total);

//acumulador, valor, indice, array são os parametros do callback da função reduce



console.log('-----');


const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

console.log('-----');

const dobro = numeros.map(valor => valor * 2);
console.log(dobro);


const pessoas = [
    { nome: 'luiza', idade: 62 },
    { nome: 'ana', idade: 73 },
    { nome: 'joão', idade: 79},
    { nome: 'maria', idade: 37 },
    { nome: 'bia', idade: 42 },
    { nome: 'olivia', idade: 25 },
    { nome: 'lucas', idade: 80},
];

//retorne a pessoa mais velha

const maisVelha = pessoas.reduce(function (acumulador, pessoa) {
    console.log(acumulador.idade, pessoa.idade);
    if(acumulador.idade > pessoa.idade) return acumulador;
    return pessoa;
});
console.log(maisVelha);
