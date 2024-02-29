/*
Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT,
Segue a formula (°C × 9/5) + 32
Nome: Ludmila
*/
var teclado = require("prompt-sync")();
var celsius = parseFloat(teclado("Digite a temperatura C: "));
var fahrenheit = (celsius * (9 / 5)) + 32;
console.log("O valor da convers\u00E3o: ".concat(fahrenheit));
