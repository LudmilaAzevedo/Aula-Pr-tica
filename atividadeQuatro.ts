/*
Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT,
Segue a formula (°C × 9/5) + 32
Nome: Ludmila
*/

let teclado = require (`prompt-sync`)();

let fahrenheit: number = parseFloat(teclado(`Digite a temperatura F: `));

let celsius: number = (fahrenheit * (5/9)) - 32;

console.log(`O valor da conversão: ${celsius}`);