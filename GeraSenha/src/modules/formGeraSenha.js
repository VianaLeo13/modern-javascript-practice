import geraSenha from "./geradores.js";

const senhaGerada = document.querySelector('.senha-gerada');
const tamanhoSenha = document.querySelector('.tamanho-senha');
const btnGerar = document.querySelector('.btn-gerar');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

export default () => {
  btnGerar.addEventListener('click', () => {
    senhaGerada.innerHTML = gerandoSenha();
  });
}

function gerandoSenha(){
    const senha = geraSenha(tamanhoSenha.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked);
    return senha || 'Nada selecionado';
}
