/*
# Serratec - Parque Tecnológico Região Serrana
* Lógica de Programação - Prof. Moises do Amaral Baddini
* Atividade: Elicitação de Requisitos
* Autor (Descrição): Luciana Gasparini
* Squad de Origem (Requisito): DevAneios (Squad 3)
* Arquivo: calcPagina.js
* Data: 22/08/2021
## Descrição:
Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está
sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos
dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem
ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas
decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está
iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo
usuário não pode ser o mesmo da recomendação.
*/

const prompt = require('prompt-sync')();

console.log('Olá amante da leitura!');
var livro = prompt('O que está lendo atualmente?');

var pags = prompt('E quantas páginas esse livro tem? (Mínimo 1): ');
pags = parseInt(pags);
var dias = prompt('E em quantos dias você quer terminar? (Mínimo 1): ');
dias = parseInt(dias);

function livros() {
    var sugestao = Math.trunc(Math.random()*2);
    return sugestao;
}

var livros1 = ["A Revolução dos Bichos", "O Alienista"]
var livros2 = ["O Homem Invisível", "Eu,Robô"];
var livros3 = ["Moby Dick", "Duna"];

var resultado = Math.round(pags/dias);
console.log('Você precisa ler '+resultado+' páginas por dia =)');
var sorte = "";

if (livro <= 100){
    sorte = livros1[livros()];
    console.log('E que tal ler'+ sorte +'também? ');
    
} else if (livro >= 101 && livro <= 499){
    sorte = livros2[livros()];
    console.log('E que tal ler '+ sorte +' na próxima?');
    
} else {
    sorte = livros3[livros()];
    console.log('E que tal ler '+ sorte +' também ?');
}
