//Nome é a chave e João é o valor, sobrenome é a chave e Silva é o valor, tudo isso dentro do objeto pessoa.
//obejto sempre tem o = apos definir o const
const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
};

//console.log(pessoa['nome']);
//console.log(pessoa.sobrenome);


//-------------------------------

const pessoa2 = new Object();
pessoa2.nome = 'Maria';
pessoa2.sobrenome = 'Oliveira';

delete pessoa2.sobrenome; //deletar a chave sobrenome do objeto pessoa2
//console.log(pessoa2.nome);
//console.log(pessoa2.sobrenome);

//-------------------------------

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Pessoa.prototype.getNomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    }

    Object.freeze(this); //congelar o objeto para que ele nao possa ser modificado
}

const p1 = new Pessoa('João', 'Silva');
p1.nome = 'Pedro'; //nao vai modificar o nome do objeto p1 porque o objeto esta congelado
const p2 = new Pessoa('Maria', 'Oliveira');
const p3 = new Pessoa('Ana', 'Santos');

console.log(p1.getNomeCompleto());
console.log(p2.getNomeCompleto());
console.log(p3.getNomeCompleto());