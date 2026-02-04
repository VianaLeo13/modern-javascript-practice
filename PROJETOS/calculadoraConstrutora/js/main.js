//CALCULADORA UTILIZANDO FUNÇÃO CONSTRUTORA

function Calculadora(){

    this.display = document.querySelector('.display');

    
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.pressionaEnter = () => {
        document.addEventListener('keydown', e =>{
            if(e.key === 'Enter'){
                e.preventDefault();
                 e.stopPropagation();
                this.calcular();
            }
        });

     };
    
     this.clearDisplay = () =>  this.display.value = '';
     this.apagarUm = () => this.display.value = this.display.value.slice(0, -1); //slice remove o ultimo caractere


    this.calcular = () => {
        let conta = this.display.value;
        
        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida');
                return;
            }

        this.display.value = String(conta);
        }catch(e){
            alert('Conta inválida');
            return;
        }

     };



    this.cliqueBotoes = () => {

       document.addEventListener('click', e =>{
        const el = e.target;
        if(el.classList.contains('btn-num'))this.btnParaDisplay(el);
        if(el.classList.contains('btn-clear'))this.clearDisplay();
        if(el.classList.contains('btn-del'))this.apagarUm();
        if(el.classList.contains('btn-eq'))this.calcular();
    });
};

    this.btnParaDisplay = (el) => {
        this.display.value += el.innerText;    
        this.display.focus();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();

