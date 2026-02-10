//Getter e Setter são metodos que permitem acessar e modificar o valor de uma propriedade de um objeto de forma 
// controlada, ou seja, é possível definir regras para acessar e modificar o valor da propriedade, como por exemplo, 
// validar o valor antes de modificar a propriedade ou retornar um valor formatado ao acessar a propriedade.

function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave estoque quando usar o for in ou o Object.keys
        configurable: true, //nao permite deletar a chave estoque
        get: function(){
            return estoque; //retorna o valor da variavel estoque
        },
        set: function(valor){ 
            if(typeof valor !== 'number'){
                throw new TypeError('Valor inválido');
            }
            estoque = valor; //modifica o valor da variavel estoque
        }
    });

}

const p1 = new Produto('Camiseta', 29.90, 100);
//console.log(p1); 
p1.estoque = 50;
console.log(p1.estoque);

