
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

fala('Frase1', 3000).then((res) =>{
    console.log(res);
    return fala('Frase2', 1000);
}).then((res) =>{
    console.log(res);
    return fala(5, 2000);
}).then((res) =>{
    console.log(res);

}).catch((e) => {
    console.log('Erro: ' + e);
});