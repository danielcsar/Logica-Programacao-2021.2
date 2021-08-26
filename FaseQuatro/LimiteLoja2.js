
 const prompt = require('prompt-sync')();

 const limite = 8;
     
 var   qtde = prompt("Quantas pessoas querem entrar?"),
       liberada = qtde < limite,
       proximo = qtde == 7,
       texto = "";

//Encadeamento, aninhamento

 if (liberada)

    if(proximo)
      console.log ("Quase cheio, só +1")
    else
      console.log ("Pode permitir a entrada")

 else
    console.log ("Loja ta cheia!")
 
  