/* 
Indique o resultado das expressões relacionais abaixo. Utilize uma variável
para atribuir a sentença, e então exibir na tela o resultado booleano.
Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual
Nesse exercício você deverá manter as variáveis e substituir apenas os
operadores. Pode ser necessário o uso de parênteses.
a. x - y M a
b. x - y * a M c mod y
c. y <> c
d. x * y <> c
e. c mod y mi y mod c
f. a m b
g. z / a + x * y - 5 MI b
h. c * z + 2 ig a * x + y
i. c ig z + b
j. y * 2 <> 7 - b */

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;

var expressaoA = x - y > a;
var expressaoB = x - (y * a) > (c % y);
var expressaoC = y != c;
var expressaoD = (x * y) != c;
var expressaoE = (c % y) <= (y % c);
var expressaoF = a < b;
var expressaoG = z / a + x * y - 5 >= b;
var expressaoH = (c * z + 2) == (a * x + y);
var expressaoI = c == z + b;
var expressaoJ = (y * 2) != 7 - b;

console.log(expressaoA);
console.log(expressaoB);
console.log(expressaoC);
console.log(expressaoD);
console.log(expressaoE);
console.log(expressaoF);
console.log(expressaoG);
console.log(expressaoH);
console.log(expressaoI);
console.log(expressaoJ);