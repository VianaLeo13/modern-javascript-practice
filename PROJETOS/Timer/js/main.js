function timer(){

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;


document.addEventListener('click', function(e){
       const el = e.target;

      if(el.classList.contains('iniciar')){
            clearInterval(timer);
            iniciaTimer();
            relogio.style.color = 'black';
      }
      if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.style.color = 'red';
      }
      if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.style.color = 'green';
      }
});


function criaHoraDosSegundos(segundos){
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
      });
}

function iniciaTimer(){
      timer = setInterval(function(){
          segundos++; // tive que fazer isso, pois setInterval não incrementa automaticamente ele apenas executa a função a cada intervalo de tempo.
          relogio.innerHTML = criaHoraDosSegundos(segundos); //Criando HTML! 
      }, 1000);

    
}
}
timer();

