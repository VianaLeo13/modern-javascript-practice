

//              -4      -3      -2        -1
//               0       1       2         3
const nomes = ['luiza', 'ana', 'joão', 'maria'];

const removidos = nomes.splice(nomes.length, 0, 'Olivia'); 

console.log(nomes , removidos);

//.splice(posição, quantos remover, adicionar1, adicionar2, ...)
// Esse metodo é um metodo bastante poderoso, ele pode tanto remover quanto adicionar elementos em um array.
//  No exemplo acima, estamos adicionando o nome 'Olivia' na posição final do array, sem remover nenhum elemento 
// (por isso o segundo parâmetro é 0). O resultado é que 'Olivia' é adicionado ao final do array 'nomes', e o array 'removidos' fica vazio, 
// pois nenhum elemento foi removido.

