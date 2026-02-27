import GeraCPF from './modules/GeraCPF.js';
import ValidaCPF from './modules/ValidaCPF.js';
import './assets/css/style.css';

// Função para gerar novo CPF
window.gerarNovoCPF = function() {
    const gera = new GeraCPF();
    const cpfGerado = gera.geraNovoCpf();
    
    const cpfGeradoDiv = document.querySelector('.cpf-gerado');
    const cpfNumber = document.querySelector('.cpf-number');
    
    cpfNumber.textContent = cpfGerado;
    cpfGeradoDiv.style.display = 'block';
    
    // Animação de destaque
    cpfNumber.style.animation = 'none';
    setTimeout(() => {
        cpfNumber.style.animation = 'fadeInUp 0.5s ease-out';
    }, 10);
};

// Função para copiar CPF
window.copiarCPF = function() {
    const cpfNumber = document.querySelector('.cpf-number').textContent;
    const btnCopy = document.querySelector('.btn-copy');
    
    navigator.clipboard.writeText(cpfNumber).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = '✅ Copiado!';
        btnCopy.classList.add('copied');
        
        setTimeout(() => {
            btnCopy.innerHTML = originalText;
            btnCopy.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Erro ao copiar: ' + err);
    });
};

// Validação de CPF
(function(){
    const form = document.querySelector('form');
    const resultadoDiv = document.querySelector('.resultado-validacao');
    
    if (!form || !resultadoDiv) return; // Proteção caso os elementos não existam
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const cpfInputElement = document.querySelector('#cpf-input');
        const cpfInput = cpfInputElement.value;
        const cpfLimpo = cpfInput.replace(/\D/g, '');
        
        if (cpfLimpo.length !== 11) {
            resultadoDiv.innerHTML = '<div class="error">❌ CPF deve conter 11 dígitos!</div>';
            return;
        }
        
        // Passar o CPF com formatação ou limpo (a classe limpa internamente)
        const valida = new ValidaCPF(cpfInput);
        
        if (valida.valida()) {
            resultadoDiv.innerHTML = '<div class="success">✅ CPF válido!</div>';
        } else {
            resultadoDiv.innerHTML = '<div class="error">❌ CPF inválido!</div>';
        }
    });
    
    // Máscara de CPF no input
    const cpfInput = document.querySelector('#cpf-input');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d)/, '$1.$2');
                value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                e.target.value = value;
            }
        });
    }
})();