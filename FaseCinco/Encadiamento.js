/* O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder. */

const prompt = require('prompt-sync')();
const resposta = "90show"
chances = 2;

for (var i = 0; i < 3; i++){
    telefone = prompt('Ouvinte '+ (i+1) +", Vc ligou para a Radio: ");
    
    do{
        if (telefone == resposta){
            console.log("Parabéns vc ganhou!");
        } else {
            chances--;
            console.log("Você errou, ",chances);
        }
    } while (!telefone != resposta && chances < 0);
}

console.log("Promoção encerrada.");
