//Factory Function

function criaPessoa(nome, sobrenome, peso , altura){
    return{
        nome,
        sobrenome,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter 
        set nomeCompleto(valor){
            valor = valor.split(' '); // transforma em array
            this.nome = valor.shift(); //pega o primeiro valor do array
            this.sobrenome = valor.join(' '); // junta o restante do array
            


        },

        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}.`;
        },
        peso,
        altura,

        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        
        }
    };
}

const p1 = criaPessoa('João', 'Silva', 70, 1.75);
const p2 = criaPessoa('Leo', 'Viana', 56, 1.63);
p2.nomeCompleto = 'Leonardo freitas viana'
p1.nomeCompleto = 'João Pereira de Souza'
console.log(p2.nomeCompleto);
console.log(p1.nomeCompleto);
console.log(p2.nome);
//console.log(p1.imc); 
//console.log(p2.imc);
//console.log(p1.nomeCompleto);