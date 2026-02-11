function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

//Objeto literal
const p2 = {
    nome: 'Calça',
    preco: 100
}

Object.setPrototypeOf(p2, Produto.prototype);// Agora p2 tem acesso aos métodos do protótipo de Produto

p1.desconto(10);
p2.aumento(20);

console.log(p1); // Produto { nome: 'Camiseta', preco: 45 }
console.log(p2); // Produto { nome: 'Calça', preco: 120 }