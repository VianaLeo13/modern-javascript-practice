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
     salvaTarefas();
}
input.addEventListener('keypress', function(e){ //keypress serve para detectar quando uma tecla é pressionada
    if(e.keyCode === 13){ //keyCode 13 é o código da tecla Enter
        if(!input.value) return;
        criaTarefa(input.value);
    }
});


btnAdicionar.addEventListener('click', function(e) {
    if(!input.value) return; //se o input estiver vazio, não faz nada
    criaTarefa(input.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove(); //parentElement serve para selecionar o elemento pai do botão apagar, que no caso é a li
        salvaTarefas();
    }
});

 
function salvaTarefas(){     //Função para salvar as tarefas no localStorage
     const liTarefas = listaTarefas.querySelectorAll('li');
     const listaDeTarefas = [];

     for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //remove a palavra Apagar do texto da tarefa e trim() remove os espaços em branco no início e no final
        listaDeTarefas.push(tarefaTexto);//adiciona o texto da tarefa no array
     }

       const tarefasJSON = JSON.stringify(listaDeTarefas);//converte o array em uma string JSON
       localStorage.setItem('tarefas', tarefasJSON);   

}

function adicionaTarefasSalvas(){ //Função para adicionar as tarefas salvas no localStorage ao carregar a página 
    const tarefas = localStorage.getItem('tarefas');//pega as tarefas salvas no localStorage
    const listaDeTarefas = JSON.parse(tarefas); //converte a string JSON de volta para um array

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();