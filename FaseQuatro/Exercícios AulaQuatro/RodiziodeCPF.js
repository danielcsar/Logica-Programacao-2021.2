/* A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito
final do documento será utilizado para permitir a entrada nas lojas. CPF
final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é
destinado aos documentos ímpares. */

const prompt = require("prompt-sync")();

var dia = prompt("Digite o dia: ")
var cpf = prompt("Digite o último dígito do CPF: ")

var diaPar = (dia % 2 == 0);
var cpfPar = (cpf % 2 == 0);

var comparacao = (diaPar == cpfPar);

if (comparacao)
console.log('Entrada autorizada');
else
console.log('Entrada não autorizada.'); 