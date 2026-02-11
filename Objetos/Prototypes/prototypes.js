function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}



const pessoa1 = new Pessoa('João', 'Silva');
const pessoa2 = new Pessoa('Maria', 'Santos');
console.log(pessoa1.nomeCompleto()); // João Silva
console.log(pessoa2.nomeCompleto()); // Maria Santos

//Prototype ajuda a economizar memória, pois o método nomeCompleto é compartilhado entre todas as instâncias de Pessoa, em vez de ser criado para cada objeto individualmente.