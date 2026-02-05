//filter filtra o array de acordo com a condição retornada, e ele retorna um novo array com os valores que passaram no teste

//retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 15, 22, 27];

//valor, indice, array no filter

const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);

// ------------------------------

//outro jeito:

function callbackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados2 = numeros.filter(callbackFilter);
//console.log(numerosFiltrados2);

//------------------------------

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com o

const pessoas = [
    { nome: 'luiza', idade: 62 },
    { nome: 'ana', idade: 23 },
    { nome: 'joão', idade: 15 },
    { nome: 'maria', idade: 37 },
    { nome: 'bia', idade: 42 },
    { nome: 'olivia', idade: 25 },
    { nome: 'lucas', idade: 18 },
];

//1
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComIdadeMaior = pessoas.filter(obj => obj.idade > 50);
console.log('-----');
console.log(pessoasComIdadeMaior);

const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('o'));
console.log('-----');
console.log(pessoasNomeTerminaComA);