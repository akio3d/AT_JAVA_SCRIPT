/* 3. Escreva um programa que defina uma variável booleana para representar se um usuário está logado em um aplicativo. Exiba uma mensagem de boas-vindas personalizada no console, dependendo do valor da variável.
   O programa deve definir uma variável booleana para representar se o usuário está logado ou não. Dependendo do valor da variável, o programa deve exibir uma mensagem de boas-vindas personalizada no console. */

let login = prompt('Insira seu nome de usuário: ' );
window.confirm(`Este nome de usuário está correto? ${login}`);

if(login === 'Danilo'){

    console.log(
        `Olá, ${login}! Seja bem vindo(a) novamente.`
        );
}
else {
    console.log(`Olá, ${login}! Não identificamos seu usuário.`)
}
     

