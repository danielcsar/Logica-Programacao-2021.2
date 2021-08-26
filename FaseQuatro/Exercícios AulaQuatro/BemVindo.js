/* O programa “Bem-vindo” irá ler o nome do aluno e devolver uma
mensagem de boas-vindas toda em maiúsculas. O nome digitado terá 6
letras, todas escritas em minúsculas. Se você preferir, pode pedir ao aluno
para digitar uma letra por vez. Neste desafio não devem ser utilizadas
“funções para texto”, ou seja, “a função de maiúsculas e minúsculas”, mas
sim cálculos matemáticos. Podemos assumir que o nome não terá
caracteres especiais, apenas valores de “a” a “z”.*/

const prompt = require("prompt-sync")()

var nome = prompt("Digite seu nome:")

nome = nome.toUpperCase()

console.log('SEJA BEM-VINDO ' + nome + ' AO UNIVERSO DA PROGRAMAÇÃO!')