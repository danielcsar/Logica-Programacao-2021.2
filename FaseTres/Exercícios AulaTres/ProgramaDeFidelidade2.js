/*
O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique
seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá
triplicar o valor.
*/

const prompt = require('prompt-sync')()

var cupom = prompt('Digite o número de cupons:');
var pontos = cupom * 3

console.log('Você possui ' + pontos + ' pontos no programa de fidelidade.');