/*O programa “Tempo de vida” irá imprimir a soma das idades de todos os
colegas do seu squad. Pergunte a cada um a idade e não esqueça a sua!
Depois faça a atribuição da expressão que você montou em uma variável
inteira.*/

const prompt = require('prompt-sync')();

console.log('Digite apenas números.');
var daniel = prompt('Qual a idade do Daniel?'); //26
var pedro = prompt('Qual a idade do Pedro Ricardo?'); //21
var gustavo = prompt('Qual a idade do Gustavo?'); //20
var eduardo = prompt('Qual a idade do Eduardo?'); //47
var luana = prompt('Qual a idade da Luana?'); //21
var victor = prompt('Qual a idade do Victor?');//20

daniel = parseInt(daniel); //parseInt transforma 'String' em 'Number'
pedro = parseInt(pedro);
gustavo = parseInt(gustavo);
eduardo = parseInt(eduardo);
luana = parseInt(luana);
victor = parseInt(victor);


var soma = (daniel+pedro+gustavo+eduardo+luana+victor);

console.log(soma);
