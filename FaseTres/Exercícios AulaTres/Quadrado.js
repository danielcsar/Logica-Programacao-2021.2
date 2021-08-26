/* O programa “Quadrado” terá um código adaptado do item anterior, para
calcular o quadrado do número digitado. */

const prompt = require('prompt-sync')();

var num = prompt('Por favor digite um número:');

num = parseInt(num);
var resultado = num*num;

console.log('O quadrado de '+num+' é ' + resultado + '.');