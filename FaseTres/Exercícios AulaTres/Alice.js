/* Alice foi até uma loja de eletrônicos e comprou alguns jogos e um
videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo
videogame. Para o pagamento, o sistema irá apresentar 3 opções de
parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem
juros e em 10 vezes com 1,5% de juros sobre o total da compra. */
const prompt = require('prompt-sync')();

var jogos = 345;
var game = 1545;
var tres = (jogos+game)/3;
var cinco = (jogos+game)/5;
var dez = Math.round(((jogos+game)*1.015)/10);

console.log('Opções de pagamento:');
console.log('1)3x de ' + tres);
console.log('2)5x de ' + cinco);
console.log('3)10x de ' + dez);


var resposta = prompt('Como deseja pagar?');

if (resposta != '1' && resposta != '2' && resposta != '3'){
    console.log('Opção inválida, tente novamente.')
} else {
    if (resposta == "1") {  
        console.log('Parabéns! Compra efetuada');
    }
    if (resposta == '2') {
        console.log('Parabéns! Compra efetuada');
    } 
    if (resposta == '3') {
        console.log('Parabéns! Compra efetuada');
    }  
}
