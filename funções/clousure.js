//return

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo!')); // Olá Mundo!

//CLOUSURE


function retornaFuncao(nome){
    return function(){
        return nome;
    }

}

const funcao = retornaFuncao('João');
const funcao2 = funcao
console.log(funcao(), funcao2());


//clousure é quando uma função "lembra" do local onde foi criada mesmo quando executada em outro contexto. 
