/*7. Escreva um programa que defina uma variável para armazenar o valor de um produto com desconto e exiba o valor original e o valor com desconto no console.

   O programa deve receber o valor original de um produto e o desconto a ser aplicado sobre ele, calcular o valor com desconto e exibir tanto o valor original quanto o valor com desconto no console.*/

let product = String('Playstation 5');
let price = Number.parseFloat(3900.0);
let discount = Number.parseFloat((price * 10)/100);
let finalPrice = Number.parseFloat(price - discount);


console.log(`O valor original do ${product} era de: R$${price}, com o desconto de 10% ficará por: R$${finalPrice}!`);





