/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Marcos Moraes
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: barraquinhaZepa.js
● Data: 22/08/2021
## Descrição:
Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
válido.
Dica: Use paçoca como "pacoca" e café como "cafe".
*/

const prompt = require('prompt-sync')();

var produtos = ['Bala', 'Pirulito', 'Bombom', 'Jujuba', 'Paçoca', 'Café'];
var tentativas = 3;

do{
console.log('Bem-vinda a Barraquinha do Zepa');
console.log('O que deseja?');
console.log('1) Bala')
console.log('2) Pirulito');
console.log('3) Bombom');
console.log('4) Jujuba');
console.log('5) Paçoca');
console.log('6) Café');
console.log('(Digite apenas números): ');

var escolha = prompt();
var numEscolha = parseInt(escolha);
var nomeProdutos = produtos[numEscolha - 1];

switch (escolha) {
    case "1":
        console.log('Obrigado por comprar ' + nomeProdutos + ' conosco!');    
        break;
    case "2":
        console.log('Obrigado por comprar ' + nomeProdutos + ' conosco!');    
        break;
    case "3":
        console.log('Obrigado por comprar ' + nomeProdutos + ' conosco!');    
        break;
    case "4":
        console.log('Obrigado por comprar ' + nomeProdutos + ' conosco!');    
        break;
    case "5":
        console.log('Não tenho mais ' + nomeProdutos + ' acabei com tudo, sou viciado T.T');    
        break;
    case "6":
        console.log('Não tenho mais ' + nomeProdutos + ' acabei com tudo, sou viciado T.T');    
        break;
    default: 
        console.log('Por favor, escolha uma opção válida.');    
        tentativas--;
}
} while (tentativas > 0) {}