/*
Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT,
Segue a formula (°C × 9/5) + 32
Nome: Ludmila
*/
var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(teclado("Digite a temperatura F: "));
var celsius = (fahrenheit * (5 / 9)) - 32;
console.log("O valor da convers\u00E3o: ".concat(celsius));
