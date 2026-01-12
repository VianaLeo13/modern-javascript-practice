const pessoa = {
    nome: 'leo',
    sobrenome: 'viana',
    idade: 25
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}