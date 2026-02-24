const myPromisse = new Promise((resolve, reject) => {
    const nome = 'Matheus';

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!');
    } else {
        reject('Usuário não encontrado!');
    }
});

myPromisse.then((data) => {
   console.log(data);
});
    
//encadeamento de then's
    
const myPromisse2 = new Promise((resolve, reject) => {
    const nome = 'Matheus';

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!');
    } else {
        reject('Usuário não encontrado!');
    }
});

myPromisse2.then((data) => {
   return data.toLowerCase();
}).then((stringModificada) => {
    console.log(stringModificada);
});


//Retorno do catch

const myPromisse3 = new Promise((resolve, reject) => {
    const nome = 'Jonas';

    if (nome === 'Matheus') {
        resolve('Usuário Matheus encontrado!');
    } else {
        reject('Usuário não encontrado!');
    }
});

myPromisse3.then((data) => {
   console.log(data);
}).catch((error) => {
    console.log(error);
});

//Resolver Varias promessas com all - todas as promessas precisam ser resolvidas;

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 ok!');
    }, 3000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 ok!');
    }, 2000);
});
const p3 = new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve('p3 ok!');
    }, 1000);
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
}); 

//resolver a primeira com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 ok!');
    }, 3000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p5 ok!');
    }, 1000);
});
const p6 = new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve('p6 ok!');
    }, 1000);
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
});

//Fetch API request API do github

const userName = 'VianaLeo13'

fetch(`https://api.github.com/users/${userName}` , {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
}).then((response) => {
    console.log(response);
    console.log(typeof response);
    return response.json();
}).then((data) => {
    console.log(`${data.name}`);
}).catch((error) => {
    alert(`houve algum erro: ${error}`);
});