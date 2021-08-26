 /* Exercício Digestivo

   O Shopping decidiu colocar na entrada dos sanitários um indicador luminoso de capacidade. 
   Antes de entrar, a pessoa deve responder se o indicador está verde ou vermelho, caso a
   respota seja vermelho, a pessoa deve aguardar antes de entrar. */

   const prompt = require('prompt-sync')();

   var  indicador = prompt("O indicador está vermelho ou verde?"),
        texto = "";

    if (indicador == "vermelho")
        texto = "Banheiro ocupado, aguarde!"
    else
        texto = "Banheiro vago, fique a vontade."            
    
    console.log(texto);