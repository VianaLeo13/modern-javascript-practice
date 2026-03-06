//fetch('pessoas.json')
//.then(response => response.json())
//.then(json => carregarElementos(json));

axios('pessoas.json')
.then(response => carregarElementos(response.data))

function carregarElementos(json) {

  const table = document.createElement('table');

     for(let pessoa of json) {
    
    
    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.estado;
    tr.appendChild(td);

    table.appendChild(tr);
    
    
    
}

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table); 
}

