/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Pedro Ricardo
 * Arquivo: medProgradragao.js
 * Elaboração do Requsito: 20/08/2021

## Descrição:

Calcular a média final dos alunos do Serratec da Disciplina de Lógica de Programação usando média ponderada. 

Você deverá receber pelo seu terminal 4 notas com valores entre 0 e 10 e depois deverá obter
4 pesos entre 1 e 5 para cada nota respectivamente. Após atribur cada valor para uma variável,
você deverá calcular a média ponderada usando essas informações coletadas pelo seu programa.

Se o resultado da sua média for menor que 5, deverá aparecer em seu terminal essa
seguinte mensagem: Reprovado! Infelizmente, o Progradragão venceu dessa vez, porém, nunca desista!

Se o resultado da sua média for maior que 5 e menor que 7, deverá aparecer em seu terminal essa
seguinte mensagem: Recuperação! Estude bastante para vencer o Progradragão!

Se o resultado da sua média for maior que 7 é porque você foi aprovado, e se isso ocorrer, seu
sistema deverá exibir no terminal algumas informações.

Linha 1: Resultado da média final
Linha 2: Sua média final é maior que 7! Você foi aprovado!

Em seguida, seu sistema deverá perguntar o nome do guerreiro que venceu o Progradragão e atribuir
esse valor em uma variável. Depois disso, bastará exibir em seu terminal:

Parabéns, NOME! O tio Zepá está muito feliz que você tanha vencido o Progradragão!
OBS: No lugar de nome, deverá aparecer o nome armazenado em sua váriavel na etapa anterior.
*/

console.log('OBS: Informe apenas números!')
console.log('Notas: Números entre 0 e 10')
console.log('Pesos: Números entre 1 e 5')

const prompt = require('prompt-sync')()

var  nota1 = prompt('Prova 1:');
nota1 = parseInt(nota1);
var  peso1 = prompt('Peso 1:');
peso1 = parseInt(peso1);
var  nota2 = prompt('Prova 2:');
nota2 = parseInt(nota2);
var  peso2 = prompt('Peso 2:');
peso2 = parseInt(peso2);
var  nota3 = prompt('Prova 3:');
nota3 = parseInt(nota3);
var  peso3 = prompt('Peso 3:');
peso3 = parseInt(peso3);
var  nota4 = prompt('Prova 4:');
nota4 = parseInt(nota4);
var  peso4 = prompt('Peso 4:');
peso4 = parseInt(peso4);
  
var mediaPonderada = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3)+(nota4*peso4))/(peso1+peso2peso4+peso4)

if (mediaPonderada < 5) {
  console.log('Sua Média Final', Math.round(mediaFinal));
  console.log('Reprovado! Infelizmente, o Progradragão venceu dessa vez, porém, nunca desista!')
} else if (mediaPonderada > 5 && mediaPonderada < 7) {
  console.log('Sua Média Final', Math.round(mediaPonderada))
  console.log('Recuperação! Estude bastante para vencer o Progradragão!')
} else {
  var nome = prompt('Qual seu nome guerreiro?')
  console.log('Sua Média Final', Math.round(mediaPonderada))
  console.log('Sua média final é maior que 7! Você foi aprovado!')
  console.log(
    'Parabéns, ' + nome +' o tio Zepá está muito feliz que você tanha vencido o Progradragão!');
}
