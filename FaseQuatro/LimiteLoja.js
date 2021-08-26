  const prompt = require('prompt-sync')();

  const limiteClientes = 8;
      
  var   qtde = prompt("Quantas pessoas querem entrar?"),
        permitir = qtde < limiteClientes,
        texto = "";

  if (permitir)
    texto = "Pode permitir a entrada!";
    
  else
    texto = "Loja ta cheia!"

  console.log(texto);
    