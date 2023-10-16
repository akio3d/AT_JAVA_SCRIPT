/* 9. Escreva um programa que defina uma variável para armazenar o nome e a idade de uma pessoa e exiba uma mensagem informando o nome e a idade no console.

   O programa deve receber o nome e a idade de uma pessoa como entrada, armazená-los em variáveis e exibir uma mensagem informando o nome e a idade da pessoa no console.*/

let nome = String(prompt(`Informe seu nome: `));
let idade = parseInt(prompt(`Informe sua idade: `));

alert(`Olá, ${nome}! Sua idade é: ${idade}`)
console.log(`Olá, ${nome}! Sua idade é: ${idade}`);
