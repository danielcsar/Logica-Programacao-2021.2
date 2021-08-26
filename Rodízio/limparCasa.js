/* 
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rafael Alves
● Squad de Origem (Requisito): DSD - Dragon Slayer Developers (Squad 5)
● Arquivo: limparCasa.js
● Data: 22/08/2021
## Descrição:
Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele
tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema
que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para
cada cômodo que for da sua escolha.
*/
const prompt = require('prompt-sync')();

console.log("Informe o número, por favor.");
console.log("(1) Sala");
console.log("(2) Quarto");
console.log("(3) Cozinha");
console.log("(4) Banheiro");
console.log("(5) Varanda");

var resposta = prompt('Sua resposta: ');
var num = parseInt(resposta);
var comodos = ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Varanda'];
var comodoSelecionado = comodos[num - 1];

console.log(comodoSelecionado + ": está limpo?");
console.log("(1) Sim");
console.log("(2) Não");
console.log("Informe apenas o número da opção:");
var limpo = prompt("Sua resposta: ");
var numLimpo = parseInt(limpo);

if (numLimpo == 1){ 
    console.log(comodos[num - 1].toUpperCase() +', esta limpo! Logo, você não precisa limpar!');
} 
else if(numLimpo == 2){ 
    console.log(comodos[num - 1].toUpperCase() +', não esta limpo! Logo, você precisará limpar!');
} 
else{
    console.log("Você informou algo não valido!!!");
}