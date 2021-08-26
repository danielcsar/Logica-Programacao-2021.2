  // Para saber ser o motorista é profissional ele precisa ser habilitado nas categorias A, B e D.
  
  //Entradas
  var prompt = require('prompt-sync')();

   var motos = prompt("Vc dirige moto? S ou N?");
   var carro = prompt("Vc dirige carro? S ou N?");
   var caminhao = prompt("Vc dirige caminhão? S ou N?");

  //Processamento
    var A = motos == "S" || motos == "s"
    var B = carro == "S" || carro == "s"
    var D = caminhao == "S" || caminhao == "s"

    var resposta = A && B && D;
  
  //Saída
  console.log("Vc é motorista profissinal?",resposta);