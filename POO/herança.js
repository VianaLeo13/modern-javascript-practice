class dispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        
        }

        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        }    

        this.ligado = false;
    }
     
}

class Smartphone extends dispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '12 Pro Max');
s1.ligar();
console.log(s1);
s1.desligar();
console.log(s1);