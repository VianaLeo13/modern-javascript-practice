//camiseta, lapis , caneca
// material, cor, tamanho

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;

};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);// serve para chamar o construtor da função Produto, passando o contexto atual (this) e os argumentos necessários (nome e preco)
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;


Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false, 
    get: function(){
        return estoque;
    },
    set: function(valor){
        if(typeof valor !== 'number') {
            throw new TypeError('Valor de estoque deve ser um número');
        }
        estoque = valor;
    }
});

}
Camiseta.prototype = Object.create(Produto.prototype);// Configura a cadeia de protótipos para que Camiseta herde de Produto. Isso significa que os objetos criados com Camiseta terão acesso aos métodos definidos no protótipo de Produto.
Camiseta.prototype.constructor = Camiseta;// Corrige a referência ao construtor, apontando para Camiseta em vez de Produto.

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta('Regata', 20, 'Preta');
const caneca = new Caneca('Caneca de Porcelana', 15.00, 'Porcelana', 50);

console.log(camiseta); // Camiseta { nome: 'Regata', preco: 20, cor: 'Preta' }
camiseta.aumento(5);
console.log(camiseta); // Camiseta { nome: 'Regata', preco: 25, cor: 'Preta' }

caneca.desconto(3);
caneca.estoque = 100;
console.log(caneca.estoque); // Caneca { nome: 'Caneca de Porcelana', preco: 12, material: 'Porcelana' }