/* Crie o programa “mini calculadora”, que após ler dois números inteiros
apresenta as operações de soma, subtração, multiplicação e divisão com
eles. */

const prompt = require('prompt-sync')();

var num1 = prompt('Por favor digite o primeiro número:');
num1 = parseInt(num1);
var num2 = prompt('Por favor digite o segundo número:');
num2 = parseInt(num2);

var soma = num1 + num2;
console.log('O resultado da soma dos dois números é: ' + soma);

var subtracao = num1 - num2;
console.log("O resultado da subtração dos dois números é: " + subtracao);

var multiplicacao = num1 * num2;
console.log('O resultado da multiplicação dos dois números é: ' + multiplicacao);

var divisao = num1 / num2;
console.log("O resultado da divisão dos dois números é: " + divisao);
