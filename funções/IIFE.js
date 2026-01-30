//IIFE -> Immediately Invoked Function Expression

(function(){
    const sobrenome = 'Viana';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Leonardo'));
    }

    falaNome();
})();

