class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);//handle submit é o nome do evento e serve para validar o formulário antes de enviar
        });
    }

    handleSubmit(e){ //handle submit é o nome do evento e serve para validar o formulário antes de enviar
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;// seleciona o elemento anterior ao campo, que é o label, e pega o texto do label para usar na mensagem de erro.
            if(!campo.value){
                this.criaErro(campo, `${label} não pode ser vazio`);
                valid = false
            }

            if(campo.classList.contains('Cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('Senha')){
                if(!this.validaSenha(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCpf(campo){
        const cpf = new ValindoCpf(campo.value);

            if(!cpf.valida()){
                this.criaErro(campo, 'CPF inválido');
                return false;
            }
            return true;
    }

    validaSenha(campo){
        let valid = true;
        const senha = this.formulario.querySelector('.Senha');
        const repetirSenha = this.formulario.querySelector('.RepetirSenha');

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'As senhas não são iguais');
            this.criaErro(repetirSenha, 'As senhas não são iguais');
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha, 'A senha deve conter entre 6 e 12 caracteres');
            valid = false;
        }

        return valid;


    }


    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);// insertAdjacentElement é um método que insere um elemento HTML depois do elemento selecionado, nesse caso, o campo que está sendo validado. O 'afterend' indica que o elemento deve ser inserido depois do campo.    


}

    
}
const valida = new ValidaFormulario();

//