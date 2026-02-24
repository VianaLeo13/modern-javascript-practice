function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('Valor incorreto'));
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

async function executa(){

    try{
    const fase1 = await esperaAi('Fase 1', random(1, 3));
    console.log(fase1);
    const fase2 = await esperaAi('fase 2', random(1, 3));
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', random(1, 3));
    console.log(fase3);
    console.log('terminamos na fase: ', fase3);
} catch(e) {
    console.log(e);
}

}
executa();

//pending - quando a promisse ainda não foi resolvida ou rejeitada
//fulfilled - quando a promisse foi resolvida com sucesso
//rejected - quando a promisse foi rejeitada com um erro

//Then() -> await, catch() -> try/catch, async -> função que retorna uma promisse, await -> espera a resolução da promisse, try/catch -> tratamento de erros.