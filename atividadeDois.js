/*
2-Faça a média de 10 número (entrada via teclado) e exiba o resultado.
nome: Dandara
*/
var teclado = require("prompt-sync")();
var nUm = parseFloat(teclado("Digite o primeiro n\u00FAmero:"));
var nDois = parseFloat(teclado("Digite o segundo n\u00FAmero:"));
var nTres = parseFloat(teclado("Digite o terceiro n\u00FAmero:"));
var nQuatro = parseFloat(teclado("Digite o quarto n\u00FAmero:"));
var nCinco = parseFloat(teclado("Digite o quinto n\u00FAmero:"));
var nSeis = parseFloat(teclado("Digite o Sexto n\u00FAmero:"));
var nSete = parseFloat(teclado("Digite o setimo n\u00FAmero:"));
var nOito = parseFloat(teclado("Digite o oitavo n\u00FAmero:"));
var nNove = parseFloat(teclado("Digite o nono n\u00FAmero:"));
var nDez = parseFloat(teclado("Digite o decimo n\u00FAmero:"));
var media = (nUm + nDois + nTres + nQuatro + nCinco + nSeis + nSete + nOito + nNove + nDez) / 10;
console.log("M\u00E9dia \u00E9 ".concat(media));
