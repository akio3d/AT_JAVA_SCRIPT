/* 8. Escreva um programa que defina uma variável do tipo null para representar um valor ausente em um campo de um formulário e exiba uma mensagem de alerta no console caso o usuário deixe o campo em branco.

   O programa deve definir uma variável do tipo null para representar um valor ausente em um campo de um formulário. Caso o usuário deixe o campo em branco, uma mensagem de alerta deve ser exibida no console. */


let nome = null;
let sobrenome = null;
    
    nome = String(prompt('Insira seu primeiro nome: '));
    sobrenome = String(prompt('Insira seu sobrenome:'));

    if (nome == `` || sobrenome == ``){

            console.warn('Este campo é obrigatório! Favor preencher.');
        }
        else{
            console.log(`Obrigado ${nome + ' '+ sobrenome}! Seja bem vindo!`);
        }
   

