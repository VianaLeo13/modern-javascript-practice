
function fala(nome, tempo){

    return new Promise((resolve, reject) => {

        if(typeof nome !== 'string') {
            reject(new Error('Valor incorreto'));
            return;
        }
           
    setTimeout(() => {
         resolve(nome);
    }, tempo);

});

}

const promisse = [
    fala('Frase1', 3000),
    fala('Frase2', 1000),
    fala('frase3', 2000)
]

Promise.all(promisse).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log('Erro: ' + e);
});

// promisse all , promisse race, promisse resolve, promisse reject
// Promise.all - retorna um array com o resultado de todas as promisses, ou um erro caso alguma delas falhe
// Promise.race - retorna o resultado da primeira promisse que for resolvida ou rejeitada
// Promise.resolve - retorna uma promisse resolvida com o valor passado como argumento
// Promise.reject - retorna uma promisse rejeitada com o motivo passado como argumento

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return fala('Baixei a página', 3000);
    }
}

baixaPagina().then((res) => {
    console.log(res);
}).catch((e) => {
    console.log('Erro: ' + e);
});