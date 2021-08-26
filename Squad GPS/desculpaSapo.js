/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Victor H Martins
 * Arquivo: desculpaSapo.js
 * Data: 20/08/2021

### Descrição:
O sapo não lava o pé, não lava porque não quer. Que ele não quer é fato, mas cada um tem seus motivos. Ele pode ter 3 (três) razões para não querer fazer isso. As desculpas do sapo são:

1. Está frio e não tem sol.
2. Ele está sem seu shampoo especial para pés.
3. O pé dele está preso em um sapato e ele não consegue tirar.

Faça um script que pergunta ao sapo se cada uma das três situações é verdadeira. O script deve imprimir uma frase para que o sapo leia baseado na quantidade de desculpas esfarrapadas que o sapo deu pra não lavar o pé hoje, sendo: 

1.  "Isso não é nada demais."
2. "Deixa de ser preguiçoso."
3. "Querido você acha que lavar o pé é difícil!? DIFÍCIL É ESTUDAR PROGRAMAÇÃO!"
*/

console.log('Escolha uma desculpa p/ o Sapa não lavar o Pé:');
console.log('1) Está frio e não tem sol.');
console.log('2) Ele está sem seu shampoo especial para pés.');
console.log('3) O pé dele está preso em um sapato e ele não consegue tirar.');
console.log('OBS: Por favor, informe apenas números! Ex: 1');

const prompt = require('prompt-sync')();
var desculpa = prompt('Informe o número de sua desculpa:');

switch (desculpa) {
  case '1':
    console.log('Isso não é nada demais.');
    break;
  case '2':
    console.log('Deixa de ser preguiçoso.');
    break;
  case '3':
    console.log('Querido você acha que lavar o pé é difícil!? DIFÍCIL É ESTUDAR PROGRAMAÇÃO!');
    break;
  default:
    console.log('Você informou um valor errado para o sistema! Informe apenas: 1, 2 ou 3!');
};
