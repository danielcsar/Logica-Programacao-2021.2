/*
# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Leandro Fita
● Squad de Origem (Requisito): Esquadrão TIcida (Squad 2)
● Arquivo: maquinaRefrigerante.js
● Data: 22/08/2021
## Descrição:
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das
suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante
exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir
os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em
uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior,
será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de
sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software
deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o
cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o
troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao
valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o
usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento
válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
• R$ 1,99
• R$ 3,50
• R$3,99
• R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
• R$ 2,00
• R$5,00
• R$10,00
• R$20,00
*/
const prompt = require('prompt-sync')();

var refri = ['Coca-Cola', 'Soda', 'Guaraná Jesus', 'Pepsi'];
var preco = [1.99,3.5,3.99,6];
var cedulas = [2,5,10,20];

console.log('MÁQUINA DE REFRIGERANTES');
console.log('Por favor, escolha o sabor do seu refrigerante');
console.log('(Digite apenas números): ');
console.log('1) Coca-Cola (R$ 1,99)')
console.log('2) Soda (R$ 3,50)');
console.log('3) Guaraná Jesus (R$ 3,99)');
console.log('4) Pepsi (R$ 6,00)');

var escolha = prompt('Refrigerante desejado: ');
var numEscolha = parseInt(escolha);

var precoRefri = preco[numEscolha - 1]; //Procura o valor em reais
var nomeRefri = refri[numEscolha - 1]; //Procura o nome do refri
var tentativas = 3;


do {

console.log('Escolha como deseja pagar?');
console.log('1) R$ 2,00');
console.log('2) R$ 5,00');
console.log('3) R$ 10,00');
console.log('4) R$ 20,00');
var pagamento = prompt('Cédula desejada: ')

var numPag = parseInt(pagamento);
var valor = cedulas[numPag - 1]; //Procurei o valor da cédula em reais

    if (valor > precoRefri) {
      var troco = valor - precoRefri;
        console.log('Seu refrigerante é', nomeRefri);
        console.log('Seu troco é', troco.toFixed(2));
        console.log('Volte Sempre!');
    
    } else {
        console.log('Saldo Insuficiente');
        tentativas--;
    }

}    while (tentativas > 0) {}