/* O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis
booleanas, escreve na tela o resultado de cada operação relacional com os
números.*/

const prompt = require("prompt-sync")();

var a = prompt("Por favor, digite um número inteiro: ");
var b = prompt("Por favor, digite outro número inteiro: ");

var igual = a == b;
var diferente = a != b;
var menor = a < b;
var menorIgual = a <= b;
var maior = b > a;
var maiorIgual = a >= b;

console.log("A é igual a B? R: " + igual);
console.log("A é diferente de B? R: " + diferente);
console.log("A é menor que B? R: " + menor);
console.log("A é menor ou igual a B? R: " + menorIgual);
console.log("A é maior que B? R: " + maior);
console.log("A é maior ou igual a B? R: " + maiorIgual);