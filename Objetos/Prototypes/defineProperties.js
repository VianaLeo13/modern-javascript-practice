// define properties e define propertys são metodos do objeto Object que permitem definir propriedades em um objeto de forma mais detalhada, como por exemplo, definir se a propriedade é enumerável, configurável ou se é somente leitura.\

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave estoque quando usar o for in ou o Object.keys
        value: estoque, //valor da chave estoque
        writable: false, //nao permite modificar o valor da chave estoque
        configurable: false, //nao permite deletar a chave estoque
    });

    Object.defineProperties(this,  {
         nome:{
                 enumerable: true, //mostra a chave  quando usar o for in ou o Object.keys
                value: nome, //valor da chave 
                writable: true, //nao permite modificar o valor da chave 
                configurable: true, //nao permite deletar a chave 
                
         },

         preco:{
                enumerable: true, //mostra a chave quando usar o for in ou o Object.keys
                value: preco, //valor da chavevalue: estoque, //valor da chave 
                 writable: true, //nao permite modificar o valor da chave 
                configurable: true, //nao permite deletar a chave 
         }
    });

}

const p1 = new Produto('Camiseta', 29.90, 100);
//console.log(p1.nome); //100

for(chave in p1){
    console.log(chave); //nome e preco, mas nao estoque porque a chave estoque nao é enumerável
}