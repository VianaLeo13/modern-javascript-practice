function rand(min = 1000, max = 3000){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);

}


function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
}   

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo!');
        });
    });
});

//calllback hell ou pyramid of doom serve para descrever quando temos muitas funções 
// aninhadas uma dentro da outra, o que pode dificultar a leitura e manutenção do código.
//callback serve para garantir que uma função seja executada somente 
// após a conclusão de outra função assíncrona.
//assincrona significa que o código não espera uma operação ser concluída antes de continuar
//ele pode iniciar uma operação
//  e continuar executando outras tarefas enquanto espera a conclusão da operação inicial.