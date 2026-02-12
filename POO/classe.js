class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`${this.nome} está falando e tem idade de ${this.idade}`);
    }
}

const p1 = new Pessoa('João', 30);
p1.falar();


//Não precisa usar prototype, o método falar já é criado dentro da classe, e pode ser chamado por qualquer objeto criado a partir da classe Pessoa.
