// A “continha oposta” lê um número e mostra seu valor negativo.

const prompt = require('prompt-sync')();

var num = prompt('Digite seu número');
num = parseInt(num);

var negativo = num * (-1);

console.log(negativo);