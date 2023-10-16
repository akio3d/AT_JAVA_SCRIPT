/*4. Escreva um programa que defina uma variável para armazenar a idade de uma pessoa e exiba uma mensagem informando se ela é maior de idade ou não.

   O programa deve receber a idade de uma pessoa como entrada, armazená-la em uma variável e exibir uma mensagem informando se a pessoa é maior de idade ou não no console.*/


let age = parseInt(prompt('Informe a sua idade: '));

if(age >= 18){
    console.log(`Você é maior de idade!`);
}

else{
    console.log('Você é menor de idade!');
}