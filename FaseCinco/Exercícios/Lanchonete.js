/*
No tablet da lanchonete, o cliente pode escolher dois complementos para
o seu lanche. Apenas se marcar algum item de salada, pode também
escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a
cozinha.
*/
console.log(":Lanchonete:");
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles");
var item1 = prompt("Item 1: ");
var item2 = prompt("Item 2: ");

var add1 = "";

switch (item1) {
  case "Q": add1 = "Queijo"; break;
  case "B": add1 = "Bacon"; break;
}

var add2 = "";

switch (item2) {
  case "Q": add2 = "Queijo"; break;
  case "B": add2 = "Bacon"; break;
}

var complementos = (item1 == "A") || (item1 == "T") || (item2 == "A") || (item2 == "T");

if (complementos)
prompt("Adicionar molho: ");

"[Cozinha]"
"Lanche com Bacon e Tomate, sem molho."