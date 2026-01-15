const input = document.querySelector('.input-tarefa');
const btnAdicionar = document.querySelector('.btn-adicionar');
const listaTarefas = document.querySelector('.tarefas');



function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerText += ' '; //Adiciona um espaço entre o texto da tarefa e o botão apagar
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); //serve para adicionar uma classe ao botão com o nome de apagar, poderiamos usar classeList.add também
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //serve para adicionar um título ao botão que aparece quando passamos o mouse por cima
    li.appendChild(botaoApagar);//Adiciona o botão apagar como filho da li, por isso O CHILD adiciona o elemento dentro do outro!
}


function limpaInput(){
    input.value = '';
    input.focus(); //Focus serve para deixar o cursor piscando no input após adicionar a tarefa
}

function criaTarefa(textoInput){
     const li = criaLi();
     li.innerText = textoInput;
     listaTarefas.appendChild(li);
     limpaInput();
     criaBotaoApagar(li);
}
input.addEventListener('keypress', function(e){ //keypress serve para detectar quando uma tecla é pressionada
    if(e.keyCode === 13){ //keyCode 13 é o código da tecla Enter
        if(!input.value) return;
        criaTarefa(input.value);
    }
});


btnAdicionar.addEventListener('click', function(e) {
    if(!input.value) return;
    criaTarefa(input.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove(); //parentElement serve para selecionar o elemento pai do botão apagar, que no caso é a li
    }

 function salvaTarefas(){
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //remove o texto 'Apagar' e espaços em branco
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}
salvaTarefas();

});