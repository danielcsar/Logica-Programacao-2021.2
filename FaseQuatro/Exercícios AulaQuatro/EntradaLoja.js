/*O aplicativo na entrada da loja possui internamente um limite de pessoas
que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez
que um cliente quiser entrar, o segurança irá preencher a quantidade de
pessoas já na loja, e o programa avisará se o cliente pode prosseguir.*/

const prompt = require('prompt-sync')();

const limite = 8;
   
var   qtde = prompt("Quantas pessoas estão na loja?");
var liberada = qtde < limite;
var proximo = qtde == 7;


if (liberada)

   if(proximo)
     console.log ("Quase cheio, só pode entrar uma pessoa")
   else
     console.log ("Pode permitir a entrada")

else
   console.log ("Loja ta cheia!")

 