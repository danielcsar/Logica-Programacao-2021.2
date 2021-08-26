/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Eduardo Pina
 * Arquivo: preguicaTreino.js
 * Elaboração do Requsito: 20/08/2021

### Descrição:
O aluno não quer ir aos treinos!! Claro que é por causa da preguiça (óbvio), mas cada dia da uma desculpa diferente:

1. Tá muito frio de manhã 
2. Tá maluco?? O treino tá pesado demais!!
3. Hoje é sexta, dia de beber!!!

Fazer um script perguntando ao aluno se cada situação é melhor ou verdadeira para não ir e enviar uma msg para cada desculpa:

1.  Mas não tá frio para comer.
2. Teininho leve demais rsrs
3. Vamos beber depois do treino!!
*/

console.log('Escolha uma das opções de desculpa abaixo:')
console.log('1) Tá muito frio de manhã')
console.log('2) Tá maluco?? O treino tá pesado demais!!')
console.log('3) Hoje é sexta, dia de beber!!!')
console.log('OBS: Por favor, informe apenas números! Ex: 1')

var prompt = require('prompt-sync')();
var desculpa = prompt('Qual a sua desculpa? ');

switch (desculpa) {
  case '1':
    console.log('Mas não tá frio para comer.');
    break;
  case '2':
    console.log('Treininho leve demais rsrs');
    break
  case '3':
    console.log('Hoje é sexta, dia de beber!!!');
    break;
  default:
    console.log('Por Favor informe apenas um dos valores solicitados: 1, 2 ou 3!');
};
