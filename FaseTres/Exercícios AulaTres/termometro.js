/*O programa “termômetro” lê uma temperatura em graus Celsius, e devolve
sua equivalência na escala Fahrenheit.*/

const prompt = require('prompt-sync')();

console.log('Digite apenas números.');
var celsius = prompt('Qual temperatura deseja converter?');

celsius = parseInt(celsius);
var fahrenheit = (celsius * 1.8) + 32;

console.log(celsius+'ºC, correspondem à:');
console.log(fahrenheit+'ºF');
