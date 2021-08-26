/* No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o
indivíduo já pode exercer sua cidadania nas urnas. */

var prompt = require("prompt-sync")();

var idade = 0

idade = prompt("Digite a sua idade: ");
var resultado = idade >= 16;

console.log('Você já pode votar? ' + resultado);