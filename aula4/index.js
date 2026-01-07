const nome = 'leonardo';
const sobrenome = 'Viana';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - idade;
const aprovado = false;
const a = [1,2];
a.push(5);
const b = a;


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento);
console.log(typeof aprovado);
console.log(a , b);
console.log(idade + peso);