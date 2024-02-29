/*
Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, 
Segue a formula (°C × 9/5) + 32
Nome: Ludmila
*/

let teclado = require (`prompt-sync`)();

let celsius: number = parseFloat(teclado(`Digite a temperatura C: `));

let fahrenheit: number = (celsius * (9/5)) + 32;

console.log(`O valor da conversão: ${fahrenheit}`);