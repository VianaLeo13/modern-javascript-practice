
//dobrar os números com map
const numeros = [5, 50, 80, 1, 2, 3, 15, 22, 27];

const numerosDobro = numeros.map(valor => `leo -> ${valor * 2}`);
console.log(numerosDobro)
console.log(numeros);
//o array original não é modificado


//-------------------------------------------------------------->

//retorne apanas uma string com o nome das pessoas
//remova apenas a chave nome do objeto
//adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'luiza', idade: 62 },
    { nome: 'ana', idade: 23 },
    { nome: 'joão', idade: 15 },
    { nome: 'maria', idade: 37 },
    { nome: 'bia', idade: 42 },
    { nome: 'olivia', idade: 25 },
    { nome: 'lucas', idade: 18 },
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

const pessoasComId = pessoas.map((obj, indice) => {
    const newObj = { ...obj };//cria uma cópia do objeto original com spread operator, o spead operator (...) cria uma cópia rasa (shallow copy) do objeto origina.
    newObj.id = indice;
    return newObj;
});
console.log(pessoasComId);
console.log(pessoas);
//o array original não é modificado

