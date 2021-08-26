   /* O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”! */

   const prompt = require('prompt-sync')();

   var telefone = prompt("Vc ligou para a Radio"),
       resposta = telefone == "90show";

    while(!resposta){
        console.log("Tente novamente");

    telefone = prompt("Vc ligou para a Radio"),
    resposta = telefone == "90show";
    }
    
    console.log("Parabéns vc ganhou!");
