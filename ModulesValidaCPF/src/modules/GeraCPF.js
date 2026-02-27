import ValidaCPF from "./ValidaCPF.js";

export default class GeraCPF{

    rand (min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    formataCpf(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }
    
    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.CriaDigito(cpfSemDigito);
        const digito2 = ValidaCPF.CriaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formataCpf(novoCpf);
    }
}