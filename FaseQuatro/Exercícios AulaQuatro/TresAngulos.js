/* O programa “Três ângulos” lê os valores dos ângulos de uma forma, e
escreve se as medidas formam um triângulo válido. */

const prompt = require('prompt-sync')();

console.log('Digite apenas números.');
var ang1 = prompt("Digite o primeiro ângulo interno do triângulo:");
var ang2 = prompt("Digite o segundo ângulo interno do triângulo:");
var ang3 = prompt("Digite o terceiro ângulo interno do triângulo:");

ang1 = parseInt(ang1);
ang2 = parseInt(ang2);
ang3 = parseInt(ang3);


if (ang1+ang2+ang3 == 180) {
    console.log('Parabéns, vc tem um triângulo válido!');
}
else
console.log('Você não tem um triângulo válido!');