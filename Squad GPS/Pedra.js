/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Gustavo Barbosa 
 * Arquivo: pedraPapel.js
 * Elaboração do Requsito: 22/08/2021
 
## Descrição:
Escreva uma "inteligência artificial" que jogue pedra-papel-tesoura contra o usuário, mostre o placar e descreva o que aconteceu a cada rodada (ex.: tesoura corta papel, ponto para você!), e mostre quem venceu após 7 rodadas válidas (empates não contam).  
*/
const prompt = require('prompt-sync')();

var pontosPC = 0;
var pontosJogador = 0;

for (var rodada = 1; rodada < 8; rodada++) {
    var resposta = prompt('Digite "1" para pedra, "2" para papel, ou "3" para tesoura: ');
    var jogador = parseInt(resposta);

    var pc = Math.trunc(Math.random() * 3) + 1;
    console.log('Escolha do computador: '+pc);
    
    do{
        if (jogador == pc){
            console.log('Placar:\nVocê: ' + pontosJogador + '\nComputador: ' + pontosPC + '\n');
            console.log('Foi um empate, repita a rodada');
            rodada--;
            break;
        } else {
                if (jogador > 3) {
                    console.log('Insira um número válido VACILÃO!!');
                    break;
                } else if (jogador == 1 && pc == 2) {
                    pontosPC++;
                    console.log('Papel enrola pedra, ponto para o computador!');
                    break;
                } else if (jogador == 1 && pc == 3){
                    pontosJogador++;
                    console.log('Pedra quebra tesoura, ponto para você!');
                    break;
                } else if (jogador == 2 && pc == 1){
                    pontosJogador++
                    console.log('Papel enrola pedra, ponto para você!');
                    break;
                } else if (jogador == 2 && pc == 3) {
                    pontosPC++;
                    console.log('Tesoura corta papel, ponto para o computador!');
                    break;
                } else if (jogador == 3 && pc == 1){
                    pontosPC++;    
                    console.log('Pedra quebra tesoura, ponto para o computador!');
                    break;
                } else (jogador == 3 && pc == 2)
                    pontosJogador++;
                    console.log('Tesoura corta papel, ponto para você!');
                }

    } while (rodada < 8) 

} if (pontosJogador > pontosPC){
    console.log('Parabéns, você ganhou!');
} else {
    console.log('Que pena, você perdeu..');
}
    console.log('Placar final');
    console.log('Jogador: ' + pontosJogador + ' Computador ' + pontosPC);