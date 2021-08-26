/* O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus
pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá
digitar um número inteiro correspondente aos seus cupons. Cada cupom
corresponde a 1 ponto.*/

const prompt = require('prompt-sync')()

var cupom = prompt('Digite o número de cupons:');
var pontos = cupom * 1

console.log('Você possui ' + pontos + ' pontos no programa de fidelidade.');