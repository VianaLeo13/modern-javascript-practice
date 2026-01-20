//declara a função (function hoisting) 
falaOi();
function falaOi(){
    console.log('OI');
}

//armazenando uma função em uma variável
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

// armazenando uma função em um objeto
const pessoa = {
    falar(){
        console.log('Estou falando');
    }
};
pessoa.falar();




