/* Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um
não ver o valor do outro), cada um irá digitar um número inteiro no teclado.
Vamos saber quem digitou o número maior, pelos resultados na tela. */

var prompt = require("prompt-sync")();
var num1 = 0
var num2 = 0

num1 = prompt('Jogador 1, Digite o primeiro número: ');
num2 = prompt('Jogador 2, Digite o segundo número: ');

var resultado1 = num1 > num2;
var resultado2 = num1 < num2;
var resultado3 = num1 == num2;

console.log('Resultados:')
console.log('Play 1 venceu?', resultado1);
console.log('Play 2 venceu?', resultado2);
console.log('Houve empate?', resultado3);