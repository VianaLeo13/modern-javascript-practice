

const nomes = ['luiza', 'ana', 'joão', 'maria'];

const novo = nomes.slice(0, -2); //remove luiza
console.log(nomes);
console.log(novo);



//-------------------------------------------------------------------------------
//delete remove o valor, mas mantém o índice vazio
//.push adiciona no final
//.pop remove do final
//.shift remove do começo para arrays pequenos é rápido
//.unshift adiciona no começo, para array grande é mais lento que push
//.splice(posição, quantos remover, adicionar1, adicionar2, ...)
//.slice(inicio, fim) cria um novo array a partir do original (fatiamento)
//.split (separador) cria um array a partir de uma string
//.join (separador) cria uma string a partir de um array