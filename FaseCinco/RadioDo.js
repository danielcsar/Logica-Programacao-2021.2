   /* O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”! */

   const prompt = require('prompt-sync')();

   do {                                               // do == Faça
    var telefone = prompt("Vc ligou para a Radio"),
        resposta = telefone == "90show";

    if (!resposta)
        console.log("Tente novamente")

    else
    console.log("Parabéns vc ganhou!");
    }
while(resposta);  // While == Enquanto, Apenas funciona para verdadeiro igual o If.
