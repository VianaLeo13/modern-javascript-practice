export const nome = 'João';
export const sobrenome = 'Silva';
export const idade = 30;

export function soma(x,y){ //somente pode ter um default export por arquivo
    return x + y;
}

export default class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
