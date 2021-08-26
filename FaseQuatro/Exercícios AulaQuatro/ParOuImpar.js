/* O programa “Par ou ímpar” irá solicitar que dois jogadores entrem com um
número, e anunciar o vencedor usando as iniciais das palavras. */

const prompt = require("prompt-sync")()

var num1 = prompt('Jogador 1, Digite o primeiro número: ');
var num2 = prompt('Jogador 2, Digite o segundo número: ');

var resultado = parseInt(num1) + parseInt(num2)

var par = resultado % 2 == 00

if(par)
    console.log('Resultado = '+ resultado + ', esse número é [P]!');
else
console.log('Resultado = '+ resultado + ', esse número é [I]')