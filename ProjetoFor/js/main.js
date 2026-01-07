const elementos = [
    {tag: 'p', texto: '<strong>eu sou um paragrafo<strong/>'},
    {tag: 'div', texto: 'eu sou uma div'},
    {tag: 'section', texto: 'eu sou uma section'},
    {tag: 'footer', texto: 'eu sou um footer'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let criaTag = document.createElement(tag);
    criaTag.innerHTML = texto;
    div.appendChild(criaTag);
}
container.appendChild(div);
   