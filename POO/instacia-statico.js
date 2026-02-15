class ControleRemoto{
    constructor(canal, volume){
        this.canal = canal;
        this.volume = volume;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    trocarCanal(novoCanal){
        this.canal = novoCanal;
    }

    static info(){
        console.log('Este é um controle remoto');
    }

}

const controle1 = new ControleRemoto(5, 10);


console.log(controle1);
ControleRemoto.info();