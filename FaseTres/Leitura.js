  //Perguntar o nome e dar bom dia.
  
  //No Navegador!
  //var nome;
  //nome = prompt("Qual é o seu nome?");
  //console.log("Bom dia",nome);

  var prompt = require('prompt-sync')();
  var nome = prompt('Qual é o seu nome?');
  console.log('Olá ' + nome);
