const fs = require('fs').promises;
const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const caminhoArquivo = path.resolve(__dirname, 'arquivo.json');

/*const pessoas = [
    {nome: 'Leonardo'},
    {nome: 'Maria'},
    {nome: 'João'},
    {nome: 'Ana'},
    {nome: 'Carlos'},
]
const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);
*/

async function lerArquivo(caminho){
    try {
        const arquivo = await ler(caminho);
        return arquivo;
    }catch (error) {
        console.log('Deu ruim', error);
    }
}

const resultado = lerArquivo(caminhoArquivo);
resultado.then((res) => console.log(res));
