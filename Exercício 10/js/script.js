/*10. Escreva um programa que defina uma variável para armazenar a temperatura em graus Celsius e converta-a para Fahrenheit. Exiba a temperatura em ambas as escalas no console.

   O programa deve receber a temperatura em graus Celsius como entrada, convertê-la para Fahrenheit utilizando a fórmula adequada e exibir a temperatura em ambas as escalas no console.*/

let cel = Number.parseFloat(prompt(`Informe a temperatura em graus Celsius:`));
let fahr = Number.parseFloat(cel * 1.8) + 32;

console.log(`A temperatura informada é: ${cel}ºC.
Na escala de Fahrenheit é: ${fahr}ºF !`);
