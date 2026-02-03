// funcao construtora -> objetos
// funcao fabrica -> objetos
// construtora -> Pessoa (new)
// a diferenca entre funcao construtora e funcao fabrica e que a funcao construtora e usada com a palavra chave new e sem virgulas


function Pessoa(nome, sobrenome) {

    //atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function(){
        console.log('sou um metodo interno');
    };



    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('João', 'Silva');
const p2 = new Pessoa('Maria', 'Silva');
console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);
p1.metodo();
p2.metodo();
