/* O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa
cidade. O resultado apresentado na tela será: “Teresópolis tem x anos.
Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”.
Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são
valores fixos, e “y” irá conter uma expressão.*/

var x = 130;
var z = 26;
var y = x-z;

console.log('Teresópolis tem ' + x + ' anos. Desses, foram ' + y + ' antes de mim. Mas nos últimos '+ z +' anos ela conta comigo!');