/*
Object.values serve para pegar os valores do objeto e retornar um array com os valores, usado quando queremos iterar sobre os valores do objeto ou verificar se um valor existe no objeto.
Object.entries serve para pegar as chaves e valores do objeto e retornar um array de arrays, onde cada sub-array contém a chave e o valor correspondente, usado quando queremos iterar sobre as chaves e valores do objeto ou verificar se uma chave-valor existe no objeto.
Object.assign(des, any) serve para copiar as propriedades de um ou mais objetos para um objeto de destino, usado quando queremos combinar objetos ou criar um novo objeto com as propriedades de outros objetos.
Object.getOwnPropertyDescriptor(object, 'propiedade ex nome')
...spread operator serve para copiar as propriedades de um objeto para outro objeto, usado quando queremos criar um novo objeto com as mesmas propriedades de outro objeto ou combinar objetos.


//ja vimos
Object.keys serve para pegar as chaves do objeto e retornar um array com as chaves, usado quando queremos iterar sobre as chaves do objeto ou verificar se uma chave existe no objeto.
Object.freeze
Object.defineProperties
Object.definePropertys
delete
*/

const produto = {
    nome: 'Caneca',
    preco: 19.90,
};
 
Object.defineProperty(produto, 'preco', {
        enumerable: false, // nao mostra a chave preco quando usar o for in ou o Object.keys)\
        configurable: false, // nao permite deletar a chave preco do objeto produto
        value: 40, // valor da chave preco
        writable: false, // nao permite modificar o valor da chave preco
    })
console.log( Object.getOwnPropertyDescriptor(produto, 'preco')) //retorna um objeto com as propriedades do objeto produto e a chave precoq)


