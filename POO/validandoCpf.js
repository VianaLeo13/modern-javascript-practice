//preciso valida cpf

//ex: 705.484.450-52 

/*

7x  0x 5x 4x 8x 4x 4x 5x 0x
10x 9x 8x 7x 6x 5x 4x 3x 2x
70  0 40  28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito verificador)

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11x 10x 9x 8x 7x 6x 5x 4x 3x 2x
77   0  45 32 56 24 20 15 0  10 = 279

11 - (279 % 11) = 2 (segundo dígito verificador)
*/


class ValindoCpf{
    constructor(cpfEnviado){
        this.cpf = cpfEnviado;
    }

    get cpfLimpo(){
        return this.cpf.replace(/\D+/g, '');
    }

    valida(){
        if(this.cpfLimpo.length !== 11){
            console.log('CPF inválido: Tamanho incorreto');
            return false;
        }


        if(this.isSequencia()){
            console.log('CPF inválido: Sequência');
            return false;
        }
       

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.CriaDigito(cpfParcial);
        const digito2 = this.CriaDigito(cpfParcial + digito1);
        
        const novoCpf = cpfParcial + digito1 + digito2; 
        return novoCpf === this.cpfLimpo;
 
        
    }

    CriaDigito(CpfParcial){
        const cpfArray = Array.from(CpfParcial);
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac,val) => {
            ac += (regressivo * Number(val));
            regressivo --;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito); // se o dígito for maior que 9, retorna '0', caso contrário, retorna o dígito convertido para string.
    }

    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

        
}

const cpf = new ValindoCpf('705.484.450-52');
console.log(cpf.valida());